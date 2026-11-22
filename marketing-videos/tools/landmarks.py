import sys, json, cv2, mediapipe as mp
from mediapipe.tasks.python import vision, BaseOptions
det = vision.FaceLandmarker.create_from_options(vision.FaceLandmarkerOptions(base_options=BaseOptions(model_asset_path=sys.argv[1]), num_faces=1))
out = {}
for f in sys.argv[2:]:
    img = cv2.imread(f); h, w = img.shape[:2]
    r = det.detect(mp.Image(image_format=mp.ImageFormat.SRGB, data=cv2.cvtColor(img, cv2.COLOR_BGR2RGB)))
    pts = [[p.x * w, p.y * h] for p in r.face_landmarks[0]]
    out[f] = pts
    print(f, {k: [round(v) for v in pts[k]] for k in (13, 14, 61, 291, 152, 10, 0, 17)})
json.dump(out, open(sys.argv[0].replace("lm.py", "lm.json"), "w"))
