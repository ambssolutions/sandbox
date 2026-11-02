"""Voice-over generator for the AMBS videos (Kokoro neural TTS, runs locally/offline).

Reads a JSON job on stdin: {"duration": 22, "voice": "af_heart", "out": "x.wav",
"lines": [{"a": 0.15, "b": 3.25, "text": "..."}]} and writes one WAV of exactly
`duration` seconds with each line placed at `a`, sped up just enough to end by `b`.
Model files live in .tts/ (downloaded on first run, ~200 MB).
"""
import json, os, re, sys, urllib.request
import numpy as np
import soundfile as sf
from kokoro_onnx import Kokoro

HERE = os.path.dirname(os.path.abspath(__file__))
DIR = os.environ.get("KOKORO_DIR", os.path.join(HERE, ".tts"))
BASE = "https://github.com/thewh1teagle/kokoro-onnx/releases/download/model-files-v1.0/"
FILES = {"kokoro.onnx": "kokoro-v1.0.fp16.onnx", "voices-v1.0.bin": "voices-v1.0.bin"}
BASE_SPEED, MAX_SPEED, SR = 1.05, 1.35, 24000

# Kokoro has no New Zealand voice, so "<voice>+nz" (e.g. "bm_george+nz") starts from British English
# phonemes (non-rhotic, like NZ English) and shifts the vowels that mark a Kiwi accent:
# KIT centralised ("fush and chups"), DRESS raised ("yis"), TRAP raised ("bed" for bad),
# FACE, PRICE, GOAT and MOUTH diphthongs moved the NZ way.
NZ_SHIFTS = [
    ("eɪ", "\u0001"), ("aɪ", "\u0002"), ("ɔɪ", "\u0003"), ("əʊ", "\u0004"), ("aʊ", "\u0005"), ("eə", "\u0006"), ("ɪə", "\u0007"),
    ("ɪ", "ə"),        # KIT: fish -> "fush"
    ("ɛ", "e"),        # DRESS: yes -> raised, towards "yis"
    ("æ", "ɛ"),        # TRAP: bad -> "bed"
    ("\u0001", "æɪ"), ("\u0002", "ɑɪ"), ("\u0003", "oɪ"), ("\u0004", "ɐʊ"), ("\u0005", "æʊ"), ("\u0006", "ɪə"), ("\u0007", "ɪə"),
]


def nz(phonemes):
    for a, b in NZ_SHIFTS[:7]:
        phonemes = phonemes.replace(a, b)
    # this British dictionary writes TRAP and BATH as plain "a": BATH (last, ask, after) stays long "ah",
    # TRAP (and, back, cat) is raised towards "e"
    phonemes = re.sub(r"a(?=[sfθ])", "ɐː", phonemes)
    phonemes = phonemes.replace("a", "\u0008")
    for a, b in NZ_SHIFTS[7:]:
        phonemes = phonemes.replace(a, b)
    return phonemes.replace("\u0008", "ɛ")


def speak(k, text, voice, speed):
    if voice.endswith("+nz"):
        ph = nz(k.tokenizer.phonemize(text, "en-gb"))
        return k.create(ph, voice=voice[:-3], speed=speed, is_phonemes=True)
    lang = "en-gb" if voice.startswith("b") else "en-us"
    return k.create(text, voice=voice, speed=speed, lang=lang)


def model():
    os.makedirs(DIR, exist_ok=True)
    for local, remote in FILES.items():
        path = os.path.join(DIR, local)
        if not os.path.exists(path):
            print(f"downloading {remote} …", file=sys.stderr)
            urllib.request.urlretrieve(BASE + remote, path)
    return Kokoro(os.path.join(DIR, "kokoro.onnx"), os.path.join(DIR, "voices-v1.0.bin"))


def trim(x, thr=0.01):
    idx = np.where(np.abs(x) > thr)[0]
    return x[max(idx[0] - 240, 0): idx[-1] + 2400] if len(idx) else x


def main():
    job = json.load(sys.stdin)
    k = model()
    track = np.zeros(int(job["duration"] * SR), dtype=np.float32)
    for ln in job["lines"]:
        slot = ln["b"] - ln["a"]
        speed = BASE_SPEED
        audio, _ = speak(k, ln["text"], job.get("voice", "af_heart"), speed)
        audio = trim(audio)
        if len(audio) / SR > slot:
            speed = min(MAX_SPEED, speed * (len(audio) / SR) / slot * 1.03)
            audio, _ = speak(k, ln["text"], job.get("voice", "af_heart"), speed)
            audio = trim(audio)
        dur = len(audio) / SR
        flag = "  ⚠ overruns slot" if dur > slot + 0.05 else ""
        print(f"  {ln['a']:>5.2f}s  {dur:4.2f}/{slot:4.2f}s  x{speed:.2f}  {ln['text'][:50]}{flag}", file=sys.stderr)
        start = int(ln["a"] * SR)
        end = min(start + len(audio), len(track))
        track[start:end] += audio[: end - start]
    sf.write(job["out"], track, SR)


if __name__ == "__main__":
    main()
