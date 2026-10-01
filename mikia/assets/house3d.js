var House3D=(()=>{var Tc=Object.defineProperty;var pf=Object.getOwnPropertyDescriptor;var mf=Object.getOwnPropertyNames;var gf=Object.prototype.hasOwnProperty;var _f=(i,e)=>{for(var t in e)Tc(i,t,{get:e[t],enumerable:!0})},xf=(i,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of mf(e))!gf.call(i,s)&&s!==t&&Tc(i,s,{get:()=>e[s],enumerable:!(n=pf(e,s))||n.enumerable});return i};var yf=i=>xf(Tc({},"__esModule",{value:!0}),i);var Qx={};_f(Qx,{DESIGN_DEFAULT:()=>jd,INSIDE_STAGES:()=>Kx,TOUR_STEPS:()=>Qd,createHouseScene:()=>jx});var vf=0,Bh=1,Mf=2;var bd=1,ih=2,Ri=3,ji=0,Tn=1,bn=2;var Zi=0,ar=1,zh=2,Hh=3,kh=4,Ef=5,ds=100,Sf=101,bf=102,Gh=103,Vh=104,Tf=200,wf=201,Af=202,Rf=203,hl=204,ul=205,Cf=206,Pf=207,If=208,Lf=209,Df=210,Uf=211,Nf=212,Of=213,Ff=214,Bf=0,zf=1,Hf=2,go=3,kf=4,Gf=5,Vf=6,Wf=7,Td=0,Xf=1,qf=2,Ji=0,Yf=1,Zf=2,Jf=3,sh=4,$f=5,Kf=6;var wd=300,lr=301,hr=302,dl=303,fl=304,Qo=306,_s=1e3,mi=1001,pl=1002,Hn=1003,Wh=1004;var wc=1005;var si=1006,jf=1007;var qr=1008;var $i=1009,Qf=1010,ep=1011,rh=1012,Ad=1013,Xi=1014,qi=1015,Yr=1016,Rd=1017,Cd=1018,ps=1020,tp=1021,gi=1023,np=1024,ip=1025,ms=1026,ur=1027,sp=1028,Pd=1029,rp=1030,Id=1031,Ld=1033,Ac=33776,Rc=33777,Cc=33778,Pc=33779,Xh=35840,qh=35841,Yh=35842,Zh=35843,Dd=36196,Jh=37492,$h=37496,Kh=37808,jh=37809,Qh=37810,eu=37811,tu=37812,nu=37813,iu=37814,su=37815,ru=37816,au=37817,ou=37818,cu=37819,lu=37820,hu=37821,Ic=36492,uu=36494,du=36495,ap=36283,fu=36284,pu=36285,mu=36286;var _o=2300,xo=2301,Lc=2302,gu=2400,_u=2401,xu=2402;var Ud=3e3,gs=3001,op=3200,cp=3201,Nd=0,lp=1,ri="",ln="srgb",Li="srgb-linear",ah="display-p3",ec="display-p3-linear",yo="linear",$t="srgb",vo="rec709",Mo="p3";var Os=7680;var yu=519,hp=512,up=513,dp=514,Od=515,fp=516,pp=517,mp=518,gp=519,ml=35044;var vu="300 es",gl=1035,Pi=2e3,Eo=2001,Qi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var mo=Math.PI/180,_l=180/Math.PI;function Ii(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pn[i&255]+Pn[i>>8&255]+Pn[i>>16&255]+Pn[i>>24&255]+"-"+Pn[e&255]+Pn[e>>8&255]+"-"+Pn[e>>16&15|64]+Pn[e>>24&255]+"-"+Pn[t&63|128]+Pn[t>>8&255]+"-"+Pn[t>>16&255]+Pn[t>>24&255]+Pn[n&255]+Pn[n>>8&255]+Pn[n>>16&255]+Pn[n>>24&255]).toLowerCase()}function Ln(i,e,t){return Math.max(e,Math.min(t,i))}function _p(i,e){return(i%e+e)%e}function Dc(i,e,t){return(1-t)*i+t*e}function Mu(i){return(i&i-1)===0&&i!==0}function xl(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ci(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Vt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var xe=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ln(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},vt=class i{constructor(e,t,n,s,r,a,o,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],m=n[5],g=n[8],v=s[0],p=s[3],f=s[6],S=s[1],y=s[4],b=s[7],F=s[2],D=s[5],U=s[8];return r[0]=a*v+o*S+c*F,r[3]=a*p+o*y+c*D,r[6]=a*f+o*b+c*U,r[1]=l*v+h*S+u*F,r[4]=l*p+h*y+u*D,r[7]=l*f+h*b+u*U,r[2]=d*v+m*S+g*F,r[5]=d*p+m*y+g*D,r[8]=d*f+m*b+g*U,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*r,m=l*r-a*c,g=t*u+n*d+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=u*v,e[1]=(s*l-h*n)*v,e[2]=(o*n-s*a)*v,e[3]=d*v,e[4]=(h*t-s*c)*v,e[5]=(s*r-o*t)*v,e[6]=m*v,e[7]=(n*c-l*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Uc.makeScale(e,t)),this}rotate(e){return this.premultiply(Uc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Uc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Uc=new vt;function Fd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Zr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function xp(){let i=Zr("canvas");return i.style.display="block",i}var Eu={};function Gr(i){i in Eu||(Eu[i]=!0,console.warn(i))}var Su=new vt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),bu=new vt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),La={[Li]:{transfer:yo,primaries:vo,toReference:i=>i,fromReference:i=>i},[ln]:{transfer:$t,primaries:vo,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[ec]:{transfer:yo,primaries:Mo,toReference:i=>i.applyMatrix3(bu),fromReference:i=>i.applyMatrix3(Su)},[ah]:{transfer:$t,primaries:Mo,toReference:i=>i.convertSRGBToLinear().applyMatrix3(bu),fromReference:i=>i.applyMatrix3(Su).convertLinearToSRGB()}},yp=new Set([Li,ec]),kt={enabled:!0,_workingColorSpace:Li,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!yp.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=La[e].toReference,s=La[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return La[i].primaries},getTransfer:function(i){return i===ri?yo:La[i].transfer}};function or(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Nc(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Fs,So=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Fs===void 0&&(Fs=Zr("canvas")),Fs.width=e.width,Fs.height=e.height;let n=Fs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Fs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Zr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=or(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(or(t[n]/255)*255):t[n]=or(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},vp=0,bo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vp++}),this.uuid=Ii(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Oc(s[a].image)):r.push(Oc(s[a]))}else r=Oc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Oc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?So.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Mp=0,jn=class i extends Qi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=mi,s=mi,r=si,a=qr,o=gi,c=$i,l=i.DEFAULT_ANISOTROPY,h=ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Mp++}),this.uuid=Ii(),this.name="",this.source=new bo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new xe(0,0),this.repeat=new xe(1,1),this.center=new xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Gr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===gs?ln:ri),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==wd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _s:e.x=e.x-Math.floor(e.x);break;case mi:e.x=e.x<0?0:1;break;case pl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _s:e.y=e.y-Math.floor(e.y);break;case mi:e.y=e.y<0?0:1;break;case pl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Gr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ln?gs:Ud}set encoding(e){Gr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===gs?ln:ri}};jn.DEFAULT_IMAGE=null;jn.DEFAULT_MAPPING=wd;jn.DEFAULT_ANISOTROPY=1;var tn=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],m=c[5],g=c[9],v=c[2],p=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(l+1)/2,b=(m+1)/2,F=(f+1)/2,D=(h+d)/4,U=(u+v)/4,q=(g+p)/4;return y>b&&y>F?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=D/n,r=U/n):b>F?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=D/s,r=q/s):F<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(F),n=U/r,s=q/r),this.set(n,s,r,t),this}let S=Math.sqrt((p-g)*(p-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(p-g)/S,this.y=(u-v)/S,this.z=(d-h)/S,this.w=Math.acos((l+m+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},yl=class extends Qi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new tn(0,0,e,t),this.scissorTest=!1,this.viewport=new tn(0,0,e,t);let s={width:e,height:t,depth:1};n.encoding!==void 0&&(Gr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===gs?ln:ri),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:si,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new jn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new bo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Di=class extends yl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},To=class extends jn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Hn,this.minFilter=Hn,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var vl=class extends jn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Hn,this.minFilter=Hn,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var es=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],m=r[a+1],g=r[a+2],v=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=m,e[t+2]=g,e[t+3]=v;return}if(u!==v||c!==d||l!==m||h!==g){let p=1-o,f=c*d+l*m+h*g+u*v,S=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){let F=Math.sqrt(y),D=Math.atan2(F,f*S);p=Math.sin(p*D)/F,o=Math.sin(o*D)/F}let b=o*S;if(c=c*p+d*b,l=l*p+m*b,h=h*p+g*b,u=u*p+v*b,p===1-o){let F=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=F,l*=F,h*=F,u*=F}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[a],d=r[a+1],m=r[a+2],g=r[a+3];return e[t]=o*g+h*u+c*m-l*d,e[t+1]=c*g+h*d+l*u-o*m,e[t+2]=l*g+h*m+o*d-c*u,e[t+3]=h*g-o*u-c*d-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),u=o(r/2),d=c(n/2),m=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*m*g,this._y=l*m*u-d*h*g,this._z=l*h*g+d*m*u,this._w=l*h*u-d*m*g;break;case"YXZ":this._x=d*h*u+l*m*g,this._y=l*m*u-d*h*g,this._z=l*h*g-d*m*u,this._w=l*h*u+d*m*g;break;case"ZXY":this._x=d*h*u-l*m*g,this._y=l*m*u+d*h*g,this._z=l*h*g+d*m*u,this._w=l*h*u-d*m*g;break;case"ZYX":this._x=d*h*u-l*m*g,this._y=l*m*u+d*h*g,this._z=l*h*g-d*m*u,this._w=l*h*u+d*m*g;break;case"YZX":this._x=d*h*u+l*m*g,this._y=l*m*u+d*h*g,this._z=l*h*g-d*m*u,this._w=l*h*u-d*m*g;break;case"XZY":this._x=d*h*u-l*m*g,this._y=l*m*u-d*h*g,this._z=l*h*g+d*m*u,this._w=l*h*u+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-c)*m,this._y=(r-l)*m,this._z=(a-s)*m}else if(n>o&&n>u){let m=2*Math.sqrt(1+n-o-u);this._w=(h-c)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+l)/m}else if(o>u){let m=2*Math.sqrt(1+o-n-u);this._w=(r-l)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(c+h)/m}else{let m=2*Math.sqrt(1+u-n-o);this._w=(a-s)/m,this._x=(r+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ln(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Tu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Tu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Fc.copy(this).projectOnVector(e),this.sub(Fc)}reflect(e){return this.sub(Fc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ln(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Fc=new I,Tu=new es,Ui=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ui.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ui.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ui.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ui):ui.fromBufferAttribute(r,a),ui.applyMatrix4(e.matrixWorld),this.expandByPoint(ui);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Da.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Da.copy(n.boundingBox)),Da.applyMatrix4(e.matrixWorld),this.union(Da)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ui),ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Lr),Ua.subVectors(this.max,Lr),Bs.subVectors(e.a,Lr),zs.subVectors(e.b,Lr),Hs.subVectors(e.c,Lr),Hi.subVectors(zs,Bs),ki.subVectors(Hs,zs),os.subVectors(Bs,Hs);let t=[0,-Hi.z,Hi.y,0,-ki.z,ki.y,0,-os.z,os.y,Hi.z,0,-Hi.x,ki.z,0,-ki.x,os.z,0,-os.x,-Hi.y,Hi.x,0,-ki.y,ki.x,0,-os.y,os.x,0];return!Bc(t,Bs,zs,Hs,Ua)||(t=[1,0,0,0,1,0,0,0,1],!Bc(t,Bs,zs,Hs,Ua))?!1:(Na.crossVectors(Hi,ki),t=[Na.x,Na.y,Na.z],Bc(t,Bs,zs,Hs,Ua))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Si=[new I,new I,new I,new I,new I,new I,new I,new I],ui=new I,Da=new Ui,Bs=new I,zs=new I,Hs=new I,Hi=new I,ki=new I,os=new I,Lr=new I,Ua=new I,Na=new I,cs=new I;function Bc(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){cs.fromArray(i,r);let o=s.x*Math.abs(cs.x)+s.y*Math.abs(cs.y)+s.z*Math.abs(cs.z),c=e.dot(cs),l=t.dot(cs),h=n.dot(cs);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Ep=new Ui,Dr=new I,zc=new I,Ni=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Ep.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Dr.subVectors(e,this.center);let t=Dr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Dr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Dr.copy(e.center).add(zc)),this.expandByPoint(Dr.copy(e.center).sub(zc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},bi=new I,Hc=new I,Oa=new I,Gi=new I,kc=new I,Fa=new I,Gc=new I,Jr=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,bi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=bi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(bi.copy(this.origin).addScaledVector(this.direction,t),bi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Hc.copy(e).add(t).multiplyScalar(.5),Oa.copy(t).sub(e).normalize(),Gi.copy(this.origin).sub(Hc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Oa),o=Gi.dot(this.direction),c=-Gi.dot(Oa),l=Gi.lengthSq(),h=Math.abs(1-a*a),u,d,m,g;if(h>0)if(u=a*c-o,d=a*o-c,g=r*h,u>=0)if(d>=-g)if(d<=g){let v=1/h;u*=v,d*=v,m=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),m=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),m=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),m=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Hc).addScaledVector(Oa,d),m}intersectSphere(e,t){bi.subVectors(e.center,this.origin);let n=bi.dot(this.direction),s=bi.dot(bi)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,bi)!==null}intersectTriangle(e,t,n,s,r){kc.subVectors(t,e),Fa.subVectors(n,e),Gc.crossVectors(kc,Fa);let a=this.direction.dot(Gc),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Gi.subVectors(this.origin,e);let c=o*this.direction.dot(Fa.crossVectors(Gi,Fa));if(c<0)return null;let l=o*this.direction.dot(kc.cross(Gi));if(l<0||c+l>a)return null;let h=-o*Gi.dot(Gc);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},qt=class i{constructor(e,t,n,s,r,a,o,c,l,h,u,d,m,g,v,p){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,h,u,d,m,g,v,p)}set(e,t,n,s,r,a,o,c,l,h,u,d,m,g,v,p){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=d,f[3]=m,f[7]=g,f[11]=v,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/ks.setFromMatrixColumn(e,0).length(),r=1/ks.setFromMatrixColumn(e,1).length(),a=1/ks.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,m=a*u,g=o*h,v=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=m+g*l,t[5]=d-v*l,t[9]=-o*c,t[2]=v-d*l,t[6]=g+m*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*h,m=c*u,g=l*h,v=l*u;t[0]=d+v*o,t[4]=g*o-m,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=m*o-g,t[6]=v+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*h,m=c*u,g=l*h,v=l*u;t[0]=d-v*o,t[4]=-a*u,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*h,t[9]=v-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*h,m=a*u,g=o*h,v=o*u;t[0]=c*h,t[4]=g*l-m,t[8]=d*l+v,t[1]=c*u,t[5]=v*l+d,t[9]=m*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,m=a*l,g=o*c,v=o*l;t[0]=c*h,t[4]=v-d*u,t[8]=g*u+m,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=m*u+g,t[10]=d-v*u}else if(e.order==="XZY"){let d=a*c,m=a*l,g=o*c,v=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+v,t[5]=a*h,t[9]=m*u-g,t[2]=g*u-m,t[6]=o*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Sp,e,bp)}lookAt(e,t,n){let s=this.elements;return $n.subVectors(e,t),$n.lengthSq()===0&&($n.z=1),$n.normalize(),Vi.crossVectors(n,$n),Vi.lengthSq()===0&&(Math.abs(n.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),Vi.crossVectors(n,$n)),Vi.normalize(),Ba.crossVectors($n,Vi),s[0]=Vi.x,s[4]=Ba.x,s[8]=$n.x,s[1]=Vi.y,s[5]=Ba.y,s[9]=$n.y,s[2]=Vi.z,s[6]=Ba.z,s[10]=$n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],m=n[13],g=n[2],v=n[6],p=n[10],f=n[14],S=n[3],y=n[7],b=n[11],F=n[15],D=s[0],U=s[4],q=s[8],E=s[12],R=s[1],X=s[5],Q=s[9],O=s[13],_=s[2],V=s[6],j=s[10],de=s[14],J=s[3],ie=s[7],_e=s[11],fe=s[15];return r[0]=a*D+o*R+c*_+l*J,r[4]=a*U+o*X+c*V+l*ie,r[8]=a*q+o*Q+c*j+l*_e,r[12]=a*E+o*O+c*de+l*fe,r[1]=h*D+u*R+d*_+m*J,r[5]=h*U+u*X+d*V+m*ie,r[9]=h*q+u*Q+d*j+m*_e,r[13]=h*E+u*O+d*de+m*fe,r[2]=g*D+v*R+p*_+f*J,r[6]=g*U+v*X+p*V+f*ie,r[10]=g*q+v*Q+p*j+f*_e,r[14]=g*E+v*O+p*de+f*fe,r[3]=S*D+y*R+b*_+F*J,r[7]=S*U+y*X+b*V+F*ie,r[11]=S*q+y*Q+b*j+F*_e,r[15]=S*E+y*O+b*de+F*fe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],m=e[14],g=e[3],v=e[7],p=e[11],f=e[15];return g*(+r*c*u-s*l*u-r*o*d+n*l*d+s*o*m-n*c*m)+v*(+t*c*m-t*l*d+r*a*d-s*a*m+s*l*h-r*c*h)+p*(+t*l*u-t*o*m-r*a*u+n*a*m+r*o*h-n*l*h)+f*(-s*o*h-t*c*u+t*o*d+s*a*u-n*a*d+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],m=e[11],g=e[12],v=e[13],p=e[14],f=e[15],S=u*p*l-v*d*l+v*c*m-o*p*m-u*c*f+o*d*f,y=g*d*l-h*p*l-g*c*m+a*p*m+h*c*f-a*d*f,b=h*v*l-g*u*l+g*o*m-a*v*m-h*o*f+a*u*f,F=g*u*c-h*v*c-g*o*d+a*v*d+h*o*p-a*u*p,D=t*S+n*y+s*b+r*F;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/D;return e[0]=S*U,e[1]=(v*d*r-u*p*r-v*s*m+n*p*m+u*s*f-n*d*f)*U,e[2]=(o*p*r-v*c*r+v*s*l-n*p*l-o*s*f+n*c*f)*U,e[3]=(u*c*r-o*d*r-u*s*l+n*d*l+o*s*m-n*c*m)*U,e[4]=y*U,e[5]=(h*p*r-g*d*r+g*s*m-t*p*m-h*s*f+t*d*f)*U,e[6]=(g*c*r-a*p*r-g*s*l+t*p*l+a*s*f-t*c*f)*U,e[7]=(a*d*r-h*c*r+h*s*l-t*d*l-a*s*m+t*c*m)*U,e[8]=b*U,e[9]=(g*u*r-h*v*r-g*n*m+t*v*m+h*n*f-t*u*f)*U,e[10]=(a*v*r-g*o*r+g*n*l-t*v*l-a*n*f+t*o*f)*U,e[11]=(h*o*r-a*u*r-h*n*l+t*u*l+a*n*m-t*o*m)*U,e[12]=F*U,e[13]=(h*v*s-g*u*s+g*n*d-t*v*d-h*n*p+t*u*p)*U,e[14]=(g*o*s-a*v*s-g*n*c+t*v*c+a*n*p-t*o*p)*U,e[15]=(a*u*s-h*o*s+h*n*c-t*u*c-a*n*d+t*o*d)*U,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,u=o+o,d=r*l,m=r*h,g=r*u,v=a*h,p=a*u,f=o*u,S=c*l,y=c*h,b=c*u,F=n.x,D=n.y,U=n.z;return s[0]=(1-(v+f))*F,s[1]=(m+b)*F,s[2]=(g-y)*F,s[3]=0,s[4]=(m-b)*D,s[5]=(1-(d+f))*D,s[6]=(p+S)*D,s[7]=0,s[8]=(g+y)*U,s[9]=(p-S)*U,s[10]=(1-(d+v))*U,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=ks.set(s[0],s[1],s[2]).length(),a=ks.set(s[4],s[5],s[6]).length(),o=ks.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],di.copy(this);let l=1/r,h=1/a,u=1/o;return di.elements[0]*=l,di.elements[1]*=l,di.elements[2]*=l,di.elements[4]*=h,di.elements[5]*=h,di.elements[6]*=h,di.elements[8]*=u,di.elements[9]*=u,di.elements[10]*=u,t.setFromRotationMatrix(di),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=Pi){let c=this.elements,l=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s),m,g;if(o===Pi)m=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Eo)m=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Pi){let c=this.elements,l=1/(t-e),h=1/(n-s),u=1/(a-r),d=(t+e)*l,m=(n+s)*h,g,v;if(o===Pi)g=(a+r)*u,v=-2*u;else if(o===Eo)g=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ks=new I,di=new qt,Sp=new I(0,0,0),bp=new I(1,1,1),Vi=new I,Ba=new I,$n=new I,wu=new qt,Au=new es,wo=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Ln(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ln(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ln(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ln(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ln(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Ln(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return wu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Au.setFromEuler(this),this.setFromQuaternion(Au,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};wo.DEFAULT_ORDER="XYZ";var Ao=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Tp=0,Ru=new I,Gs=new es,Ti=new qt,za=new I,Ur=new I,wp=new I,Ap=new es,Cu=new I(1,0,0),Pu=new I(0,1,0),Iu=new I(0,0,1),Rp={type:"added"},Cp={type:"removed"},hn=class i extends Qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Tp++}),this.uuid=Ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new I,t=new wo,n=new es,s=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new qt},normalMatrix:{value:new vt}}),this.matrix=new qt,this.matrixWorld=new qt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ao,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Gs.setFromAxisAngle(e,t),this.quaternion.multiply(Gs),this}rotateOnWorldAxis(e,t){return Gs.setFromAxisAngle(e,t),this.quaternion.premultiply(Gs),this}rotateX(e){return this.rotateOnAxis(Cu,e)}rotateY(e){return this.rotateOnAxis(Pu,e)}rotateZ(e){return this.rotateOnAxis(Iu,e)}translateOnAxis(e,t){return Ru.copy(e).applyQuaternion(this.quaternion),this.position.add(Ru.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Cu,e)}translateY(e){return this.translateOnAxis(Pu,e)}translateZ(e){return this.translateOnAxis(Iu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ti.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?za.copy(e):za.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ti.lookAt(Ur,za,this.up):Ti.lookAt(za,Ur,this.up),this.quaternion.setFromRotationMatrix(Ti),s&&(Ti.extractRotation(s.matrixWorld),Gs.setFromRotationMatrix(Ti),this.quaternion.premultiply(Gs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Rp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Cp)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ti),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ur,e,wp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ur,Ap,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};hn.DEFAULT_UP=new I(0,1,0);hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var fi=new I,wi=new I,Vc=new I,Ai=new I,Vs=new I,Ws=new I,Lu=new I,Wc=new I,Xc=new I,qc=new I,Ha=!1,Yi=class i{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),fi.subVectors(e,t),s.cross(fi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){fi.subVectors(s,t),wi.subVectors(n,t),Vc.subVectors(e,t);let a=fi.dot(fi),o=fi.dot(wi),c=fi.dot(Vc),l=wi.dot(wi),h=wi.dot(Vc),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,m=(l*c-o*h)*d,g=(a*h-o*c)*d;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ai)===null?!1:Ai.x>=0&&Ai.y>=0&&Ai.x+Ai.y<=1}static getUV(e,t,n,s,r,a,o,c){return Ha===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ha=!0),this.getInterpolation(e,t,n,s,r,a,o,c)}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,Ai)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ai.x),c.addScaledVector(a,Ai.y),c.addScaledVector(o,Ai.z),c)}static isFrontFacing(e,t,n,s){return fi.subVectors(n,t),wi.subVectors(e,t),fi.cross(wi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fi.subVectors(this.c,this.b),wi.subVectors(this.a,this.b),fi.cross(wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return Ha===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ha=!0),i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Vs.subVectors(s,n),Ws.subVectors(r,n),Wc.subVectors(e,n);let c=Vs.dot(Wc),l=Ws.dot(Wc);if(c<=0&&l<=0)return t.copy(n);Xc.subVectors(e,s);let h=Vs.dot(Xc),u=Ws.dot(Xc);if(h>=0&&u<=h)return t.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(Vs,a);qc.subVectors(e,r);let m=Vs.dot(qc),g=Ws.dot(qc);if(g>=0&&m<=g)return t.copy(r);let v=m*l-c*g;if(v<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(Ws,o);let p=h*g-m*u;if(p<=0&&u-h>=0&&m-g>=0)return Lu.subVectors(r,s),o=(u-h)/(u-h+(m-g)),t.copy(s).addScaledVector(Lu,o);let f=1/(p+v+d);return a=v*f,o=d*f,t.copy(n).addScaledVector(Vs,a).addScaledVector(Ws,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Bd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wi={h:0,s:0,l:0},ka={h:0,s:0,l:0};function Yc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ye=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ln){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,kt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=kt.workingColorSpace){return this.r=e,this.g=t,this.b=n,kt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=kt.workingColorSpace){if(e=_p(e,1),t=Ln(t,0,1),n=Ln(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Yc(a,r,e+1/3),this.g=Yc(a,r,e),this.b=Yc(a,r,e-1/3)}return kt.toWorkingColorSpace(this,s),this}setStyle(e,t=ln){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ln){let n=Bd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=or(e.r),this.g=or(e.g),this.b=or(e.b),this}copyLinearToSRGB(e){return this.r=Nc(e.r),this.g=Nc(e.g),this.b=Nc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ln){return kt.fromWorkingColorSpace(In.copy(this),e),Math.round(Ln(In.r*255,0,255))*65536+Math.round(Ln(In.g*255,0,255))*256+Math.round(Ln(In.b*255,0,255))}getHexString(e=ln){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=kt.workingColorSpace){kt.fromWorkingColorSpace(In.copy(this),t);let n=In.r,s=In.g,r=In.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=kt.workingColorSpace){return kt.fromWorkingColorSpace(In.copy(this),t),e.r=In.r,e.g=In.g,e.b=In.b,e}getStyle(e=ln){kt.fromWorkingColorSpace(In.copy(this),e);let t=In.r,n=In.g,s=In.b;return e!==ln?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Wi),this.setHSL(Wi.h+e,Wi.s+t,Wi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Wi),e.getHSL(ka);let n=Dc(Wi.h,ka.h,t),s=Dc(Wi.s,ka.s,t),r=Dc(Wi.l,ka.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},In=new Ye;Ye.NAMES=Bd;var Pp=0,_i=class extends Qi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pp++}),this.uuid=Ii(),this.name="",this.type="Material",this.blending=ar,this.side=ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hl,this.blendDst=ul,this.blendEquation=ds,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=go,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Os,this.stencilZFail=Os,this.stencilZPass=Os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ar&&(n.blending=this.blending),this.side!==ji&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==hl&&(n.blendSrc=this.blendSrc),this.blendDst!==ul&&(n.blendDst=this.blendDst),this.blendEquation!==ds&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==go&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Os&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Os&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Os&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},kn=class extends _i{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Td,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var xn=new I,Ga=new xe,Un=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ml,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=qi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ga.fromBufferAttribute(this,t),Ga.applyMatrix3(e),this.setXY(t,Ga.x,Ga.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.applyMatrix3(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.applyMatrix4(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.applyNormalMatrix(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.transformDirection(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ci(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Vt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ci(t,this.array)),t}setX(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ci(t,this.array)),t}setY(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ci(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ci(t,this.array)),t}setW(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),n=Vt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),n=Vt(n,this.array),s=Vt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),n=Vt(n,this.array),s=Vt(s,this.array),r=Vt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ml&&(e.usage=this.usage),e}};var Ro=class extends Un{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Co=class extends Un{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Et=class extends Un{constructor(e,t,n){super(new Float32Array(e),t,n)}};var Ip=0,ii=new qt,Zc=new hn,Xs=new I,Kn=new Ui,Nr=new Ui,En=new I,Kt=class i extends Qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ip++}),this.uuid=Ii(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Fd(e)?Co:Ro)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new vt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ii.makeRotationFromQuaternion(e),this.applyMatrix4(ii),this}rotateX(e){return ii.makeRotationX(e),this.applyMatrix4(ii),this}rotateY(e){return ii.makeRotationY(e),this.applyMatrix4(ii),this}rotateZ(e){return ii.makeRotationZ(e),this.applyMatrix4(ii),this}translate(e,t,n){return ii.makeTranslation(e,t,n),this.applyMatrix4(ii),this}scale(e,t,n){return ii.makeScale(e,t,n),this.applyMatrix4(ii),this}lookAt(e){return Zc.lookAt(e),Zc.updateMatrix(),this.applyMatrix4(Zc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xs).negate(),this.translate(Xs.x,Xs.y,Xs.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Et(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ui);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Kn.setFromBufferAttribute(r),this.morphTargetsRelative?(En.addVectors(this.boundingBox.min,Kn.min),this.boundingBox.expandByPoint(En),En.addVectors(this.boundingBox.max,Kn.max),this.boundingBox.expandByPoint(En)):(this.boundingBox.expandByPoint(Kn.min),this.boundingBox.expandByPoint(Kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ni);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){let n=this.boundingSphere.center;if(Kn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Nr.setFromBufferAttribute(o),this.morphTargetsRelative?(En.addVectors(Kn.min,Nr.min),Kn.expandByPoint(En),En.addVectors(Kn.max,Nr.max),Kn.expandByPoint(En)):(Kn.expandByPoint(Nr.min),Kn.expandByPoint(Nr.max))}Kn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)En.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(En));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)En.fromBufferAttribute(o,l),c&&(Xs.fromBufferAttribute(e,l),En.add(Xs)),s=Math.max(s,n.distanceToSquared(En))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Un(new Float32Array(4*o),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let R=0;R<o;R++)l[R]=new I,h[R]=new I;let u=new I,d=new I,m=new I,g=new xe,v=new xe,p=new xe,f=new I,S=new I;function y(R,X,Q){u.fromArray(s,R*3),d.fromArray(s,X*3),m.fromArray(s,Q*3),g.fromArray(a,R*2),v.fromArray(a,X*2),p.fromArray(a,Q*2),d.sub(u),m.sub(u),v.sub(g),p.sub(g);let O=1/(v.x*p.y-p.x*v.y);isFinite(O)&&(f.copy(d).multiplyScalar(p.y).addScaledVector(m,-v.y).multiplyScalar(O),S.copy(m).multiplyScalar(v.x).addScaledVector(d,-p.x).multiplyScalar(O),l[R].add(f),l[X].add(f),l[Q].add(f),h[R].add(S),h[X].add(S),h[Q].add(S))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let R=0,X=b.length;R<X;++R){let Q=b[R],O=Q.start,_=Q.count;for(let V=O,j=O+_;V<j;V+=3)y(n[V+0],n[V+1],n[V+2])}let F=new I,D=new I,U=new I,q=new I;function E(R){U.fromArray(r,R*3),q.copy(U);let X=l[R];F.copy(X),F.sub(U.multiplyScalar(U.dot(X))).normalize(),D.crossVectors(q,X);let O=D.dot(h[R])<0?-1:1;c[R*4]=F.x,c[R*4+1]=F.y,c[R*4+2]=F.z,c[R*4+3]=O}for(let R=0,X=b.length;R<X;++R){let Q=b[R],O=Q.start,_=Q.count;for(let V=O,j=O+_;V<j;V+=3)E(n[V+0]),E(n[V+1]),E(n[V+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Un(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);let s=new I,r=new I,a=new I,o=new I,c=new I,l=new I,h=new I,u=new I;if(e)for(let d=0,m=e.count;d<m;d+=3){let g=e.getX(d+0),v=e.getX(d+1),p=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,p),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,p),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,m=t.count;d<m;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)En.fromBufferAttribute(e,t),En.normalize(),e.setXYZ(t,En.x,En.y,En.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),m=0,g=0;for(let v=0,p=c.length;v<p;v++){o.isInterleavedBufferAttribute?m=c[v]*o.data.stride+o.offset:m=c[v]*h;for(let f=0;f<h;f++)d[g++]=l[m++]}return new Un(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let d=l[h],m=e(d,n);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let m=l[u];h.push(m.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Du=new qt,ls=new Jr,Va=new Ni,Uu=new I,qs=new I,Ys=new I,Zs=new I,Jc=new I,Wa=new I,Xa=new xe,qa=new xe,Ya=new xe,Nu=new I,Ou=new I,Fu=new I,Za=new I,Ja=new I,be=class extends hn{constructor(e=new Kt,t=new kn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Wa.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&(Jc.fromBufferAttribute(u,e),a?Wa.addScaledVector(Jc,h):Wa.addScaledVector(Jc.sub(t),h))}t.add(Wa)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Va.copy(n.boundingSphere),Va.applyMatrix4(r),ls.copy(e.ray).recast(e.near),!(Va.containsPoint(ls.origin)===!1&&(ls.intersectSphere(Va,Uu)===null||ls.origin.distanceToSquared(Uu)>(e.far-e.near)**2))&&(Du.copy(r).invert(),ls.copy(e.ray).applyMatrix4(Du),!(n.boundingBox!==null&&ls.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ls)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){let p=d[g],f=a[p.materialIndex],S=Math.max(p.start,m.start),y=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let b=S,F=y;b<F;b+=3){let D=o.getX(b),U=o.getX(b+1),q=o.getX(b+2);s=$a(this,f,e,n,l,h,u,D,U,q),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,m.start),v=Math.min(o.count,m.start+m.count);for(let p=g,f=v;p<f;p+=3){let S=o.getX(p),y=o.getX(p+1),b=o.getX(p+2);s=$a(this,a,e,n,l,h,u,S,y,b),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){let p=d[g],f=a[p.materialIndex],S=Math.max(p.start,m.start),y=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let b=S,F=y;b<F;b+=3){let D=b,U=b+1,q=b+2;s=$a(this,f,e,n,l,h,u,D,U,q),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,m.start),v=Math.min(c.count,m.start+m.count);for(let p=g,f=v;p<f;p+=3){let S=p,y=p+1,b=p+2;s=$a(this,a,e,n,l,h,u,S,y,b),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function Lp(i,e,t,n,s,r,a,o){let c;if(e.side===Tn?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===ji,o),c===null)return null;Ja.copy(o),Ja.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Ja);return l<t.near||l>t.far?null:{distance:l,point:Ja.clone(),object:i}}function $a(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,qs),i.getVertexPosition(c,Ys),i.getVertexPosition(l,Zs);let h=Lp(i,e,t,n,qs,Ys,Zs,Za);if(h){s&&(Xa.fromBufferAttribute(s,o),qa.fromBufferAttribute(s,c),Ya.fromBufferAttribute(s,l),h.uv=Yi.getInterpolation(Za,qs,Ys,Zs,Xa,qa,Ya,new xe)),r&&(Xa.fromBufferAttribute(r,o),qa.fromBufferAttribute(r,c),Ya.fromBufferAttribute(r,l),h.uv1=Yi.getInterpolation(Za,qs,Ys,Zs,Xa,qa,Ya,new xe),h.uv2=h.uv1),a&&(Nu.fromBufferAttribute(a,o),Ou.fromBufferAttribute(a,c),Fu.fromBufferAttribute(a,l),h.normal=Yi.getInterpolation(Za,qs,Ys,Zs,Nu,Ou,Fu,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:c,c:l,normal:new I,materialIndex:0};Yi.getNormal(qs,Ys,Zs,u.normal),h.face=u}return h}var Nn=class i extends Kt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,m=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Et(l,3)),this.setAttribute("normal",new Et(h,3)),this.setAttribute("uv",new Et(u,2));function g(v,p,f,S,y,b,F,D,U,q,E){let R=b/U,X=F/q,Q=b/2,O=F/2,_=D/2,V=U+1,j=q+1,de=0,J=0,ie=new I;for(let _e=0;_e<j;_e++){let fe=_e*X-O;for(let Te=0;Te<V;Te++){let K=Te*R-Q;ie[v]=K*S,ie[p]=fe*y,ie[f]=_,l.push(ie.x,ie.y,ie.z),ie[v]=0,ie[p]=0,ie[f]=D>0?1:-1,h.push(ie.x,ie.y,ie.z),u.push(Te/U),u.push(1-_e/q),de+=1}}for(let _e=0;_e<q;_e++)for(let fe=0;fe<U;fe++){let Te=d+fe+V*_e,K=d+fe+V*(_e+1),me=d+(fe+1)+V*(_e+1),Ce=d+(fe+1)+V*_e;c.push(Te,K,Ce),c.push(K,me,Ce),J+=6}o.addGroup(m,J,E),m+=J,d+=de}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function dr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function zn(i){let e={};for(let t=0;t<i.length;t++){let n=dr(i[t]);for(let s in n)e[s]=n[s]}return e}function Dp(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function zd(i){return i.getRenderTarget()===null?i.outputColorSpace:kt.workingColorSpace}var Up={clone:dr,merge:zn},Np=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Op=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ai=class extends _i{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Np,this.fragmentShader=Op,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=dr(e.uniforms),this.uniformsGroups=Dp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Po=class extends hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qt,this.projectionMatrix=new qt,this.projectionMatrixInverse=new qt,this.coordinateSystem=Pi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Dn=class extends Po{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=_l*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(mo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _l*2*Math.atan(Math.tan(mo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(mo*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Js=-90,$s=1,Ml=class extends hn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Dn(Js,$s,e,t);s.layers=this.layers,this.add(s);let r=new Dn(Js,$s,e,t);r.layers=this.layers,this.add(r);let a=new Dn(Js,$s,e,t);a.layers=this.layers,this.add(a);let o=new Dn(Js,$s,e,t);o.layers=this.layers,this.add(o);let c=new Dn(Js,$s,e,t);c.layers=this.layers,this.add(c);let l=new Dn(Js,$s,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===Pi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Eo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Io=class extends jn{constructor(e,t,n,s,r,a,o,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:lr,super(e,t,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},El=class extends Di{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(Gr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===gs?ln:ri),this.texture=new Io(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:si}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Nn(5,5,5),r=new ai({name:"CubemapFromEquirect",uniforms:dr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Tn,blending:Zi});r.uniforms.tEquirect.value=t;let a=new be(s,r),o=t.minFilter;return t.minFilter===qr&&(t.minFilter=si),new Ml(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},$c=new I,Fp=new I,Bp=new vt,pi=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=$c.subVectors(n,t).cross(Fp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta($c),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Bp.getNormalMatrix(e),s=this.coplanarPoint($c).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},hs=new Ni,Ka=new I,$r=class{constructor(e=new pi,t=new pi,n=new pi,s=new pi,r=new pi,a=new pi){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Pi){let n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],m=s[8],g=s[9],v=s[10],p=s[11],f=s[12],S=s[13],y=s[14],b=s[15];if(n[0].setComponents(c-r,d-l,p-m,b-f).normalize(),n[1].setComponents(c+r,d+l,p+m,b+f).normalize(),n[2].setComponents(c+a,d+h,p+g,b+S).normalize(),n[3].setComponents(c-a,d-h,p-g,b-S).normalize(),n[4].setComponents(c-o,d-u,p-v,b-y).normalize(),t===Pi)n[5].setComponents(c+o,d+u,p+v,b+y).normalize();else if(t===Eo)n[5].setComponents(o,u,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),hs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hs)}intersectsSprite(e){return hs.center.set(0,0,0),hs.radius=.7071067811865476,hs.applyMatrix4(e.matrixWorld),this.intersectsSphere(hs)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Ka.x=s.normal.x>0?e.max.x:e.min.x,Ka.y=s.normal.y>0?e.max.y:e.min.y,Ka.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ka)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Hd(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function zp(i,e){let t=e.isWebGL2,n=new WeakMap;function s(l,h){let u=l.array,d=l.usage,m=u.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,u,d),l.onUploadCallback();let v;if(u instanceof Float32Array)v=i.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)v=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)v=i.SHORT;else if(u instanceof Uint32Array)v=i.UNSIGNED_INT;else if(u instanceof Int32Array)v=i.INT;else if(u instanceof Int8Array)v=i.BYTE;else if(u instanceof Uint8Array)v=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)v=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:v,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:m}}function r(l,h,u){let d=h.array,m=h._updateRange,g=h.updateRanges;if(i.bindBuffer(u,l),m.count===-1&&g.length===0&&i.bufferSubData(u,0,d),g.length!==0){for(let v=0,p=g.length;v<p;v++){let f=g[v];t?i.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):i.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}h.clearUpdateRanges()}m.count!==-1&&(t?i.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):i.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=n.get(l);h&&(i.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let u=n.get(l);if(u===void 0)n.set(l,s(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,l,h),u.version=l.version}}return{get:a,remove:o,update:c}}var wn=class i extends Kt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,u=e/o,d=t/c,m=[],g=[],v=[],p=[];for(let f=0;f<h;f++){let S=f*d-a;for(let y=0;y<l;y++){let b=y*u-r;g.push(b,-S,0),v.push(0,0,1),p.push(y/o),p.push(1-f/c)}}for(let f=0;f<c;f++)for(let S=0;S<o;S++){let y=S+l*f,b=S+l*(f+1),F=S+1+l*(f+1),D=S+1+l*f;m.push(y,b,D),m.push(b,F,D)}this.setIndex(m),this.setAttribute("position",new Et(g,3)),this.setAttribute("normal",new Et(v,3)),this.setAttribute("uv",new Et(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Hp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Gp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Xp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Yp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zp=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Jp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,$p=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Qp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,em=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,tm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,nm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,im=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,am=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,om=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,cm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,lm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,hm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,um=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,dm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gm="gl_FragColor = linearToOutputTexel( gl_FragColor );",_m=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,xm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ym=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,vm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Mm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Em=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Sm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Tm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Am=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Rm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Cm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Pm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Im=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Lm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Dm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Um=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Nm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Om=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Fm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Bm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,zm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Hm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,km=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Gm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Vm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,qm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Ym=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,$m=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Km=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,eg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,tg=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,ng=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,ig=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,sg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,rg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ag=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,og=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,lg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ug=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,pg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,mg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_g=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Mg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Eg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Sg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,bg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Tg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ag=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Rg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Cg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Pg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ig=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Lg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Dg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ug=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ng=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Og=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Fg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Bg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,zg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,qg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Yg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Zg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Jg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$g=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,e0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,n0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,s0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,a0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,o0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,c0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,h0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,d0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,f0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,p0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,m0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,g0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,_0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,x0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,xt={alphahash_fragment:Hp,alphahash_pars_fragment:kp,alphamap_fragment:Gp,alphamap_pars_fragment:Vp,alphatest_fragment:Wp,alphatest_pars_fragment:Xp,aomap_fragment:qp,aomap_pars_fragment:Yp,batching_pars_vertex:Zp,batching_vertex:Jp,begin_vertex:$p,beginnormal_vertex:Kp,bsdfs:jp,iridescence_fragment:Qp,bumpmap_pars_fragment:em,clipping_planes_fragment:tm,clipping_planes_pars_fragment:nm,clipping_planes_pars_vertex:im,clipping_planes_vertex:sm,color_fragment:rm,color_pars_fragment:am,color_pars_vertex:om,color_vertex:cm,common:lm,cube_uv_reflection_fragment:hm,defaultnormal_vertex:um,displacementmap_pars_vertex:dm,displacementmap_vertex:fm,emissivemap_fragment:pm,emissivemap_pars_fragment:mm,colorspace_fragment:gm,colorspace_pars_fragment:_m,envmap_fragment:xm,envmap_common_pars_fragment:ym,envmap_pars_fragment:vm,envmap_pars_vertex:Mm,envmap_physical_pars_fragment:Dm,envmap_vertex:Em,fog_vertex:Sm,fog_pars_vertex:bm,fog_fragment:Tm,fog_pars_fragment:wm,gradientmap_pars_fragment:Am,lightmap_fragment:Rm,lightmap_pars_fragment:Cm,lights_lambert_fragment:Pm,lights_lambert_pars_fragment:Im,lights_pars_begin:Lm,lights_toon_fragment:Um,lights_toon_pars_fragment:Nm,lights_phong_fragment:Om,lights_phong_pars_fragment:Fm,lights_physical_fragment:Bm,lights_physical_pars_fragment:zm,lights_fragment_begin:Hm,lights_fragment_maps:km,lights_fragment_end:Gm,logdepthbuf_fragment:Vm,logdepthbuf_pars_fragment:Wm,logdepthbuf_pars_vertex:Xm,logdepthbuf_vertex:qm,map_fragment:Ym,map_pars_fragment:Zm,map_particle_fragment:Jm,map_particle_pars_fragment:$m,metalnessmap_fragment:Km,metalnessmap_pars_fragment:jm,morphcolor_vertex:Qm,morphnormal_vertex:eg,morphtarget_pars_vertex:tg,morphtarget_vertex:ng,normal_fragment_begin:ig,normal_fragment_maps:sg,normal_pars_fragment:rg,normal_pars_vertex:ag,normal_vertex:og,normalmap_pars_fragment:cg,clearcoat_normal_fragment_begin:lg,clearcoat_normal_fragment_maps:hg,clearcoat_pars_fragment:ug,iridescence_pars_fragment:dg,opaque_fragment:fg,packing:pg,premultiplied_alpha_fragment:mg,project_vertex:gg,dithering_fragment:_g,dithering_pars_fragment:xg,roughnessmap_fragment:yg,roughnessmap_pars_fragment:vg,shadowmap_pars_fragment:Mg,shadowmap_pars_vertex:Eg,shadowmap_vertex:Sg,shadowmask_pars_fragment:bg,skinbase_vertex:Tg,skinning_pars_vertex:wg,skinning_vertex:Ag,skinnormal_vertex:Rg,specularmap_fragment:Cg,specularmap_pars_fragment:Pg,tonemapping_fragment:Ig,tonemapping_pars_fragment:Lg,transmission_fragment:Dg,transmission_pars_fragment:Ug,uv_pars_fragment:Ng,uv_pars_vertex:Og,uv_vertex:Fg,worldpos_vertex:Bg,background_vert:zg,background_frag:Hg,backgroundCube_vert:kg,backgroundCube_frag:Gg,cube_vert:Vg,cube_frag:Wg,depth_vert:Xg,depth_frag:qg,distanceRGBA_vert:Yg,distanceRGBA_frag:Zg,equirect_vert:Jg,equirect_frag:$g,linedashed_vert:Kg,linedashed_frag:jg,meshbasic_vert:Qg,meshbasic_frag:e0,meshlambert_vert:t0,meshlambert_frag:n0,meshmatcap_vert:i0,meshmatcap_frag:s0,meshnormal_vert:r0,meshnormal_frag:a0,meshphong_vert:o0,meshphong_frag:c0,meshphysical_vert:l0,meshphysical_frag:h0,meshtoon_vert:u0,meshtoon_frag:d0,points_vert:f0,points_frag:p0,shadow_vert:m0,shadow_frag:g0,sprite_vert:_0,sprite_frag:x0},we={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new vt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new vt},normalScale:{value:new xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0},uvTransform:{value:new vt}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}}},yi={basic:{uniforms:zn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:xt.meshbasic_vert,fragmentShader:xt.meshbasic_frag},lambert:{uniforms:zn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Ye(0)}}]),vertexShader:xt.meshlambert_vert,fragmentShader:xt.meshlambert_frag},phong:{uniforms:zn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:xt.meshphong_vert,fragmentShader:xt.meshphong_frag},standard:{uniforms:zn([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag},toon:{uniforms:zn([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new Ye(0)}}]),vertexShader:xt.meshtoon_vert,fragmentShader:xt.meshtoon_frag},matcap:{uniforms:zn([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:xt.meshmatcap_vert,fragmentShader:xt.meshmatcap_frag},points:{uniforms:zn([we.points,we.fog]),vertexShader:xt.points_vert,fragmentShader:xt.points_frag},dashed:{uniforms:zn([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xt.linedashed_vert,fragmentShader:xt.linedashed_frag},depth:{uniforms:zn([we.common,we.displacementmap]),vertexShader:xt.depth_vert,fragmentShader:xt.depth_frag},normal:{uniforms:zn([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:xt.meshnormal_vert,fragmentShader:xt.meshnormal_frag},sprite:{uniforms:zn([we.sprite,we.fog]),vertexShader:xt.sprite_vert,fragmentShader:xt.sprite_frag},background:{uniforms:{uvTransform:{value:new vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xt.background_vert,fragmentShader:xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:xt.backgroundCube_vert,fragmentShader:xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xt.cube_vert,fragmentShader:xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xt.equirect_vert,fragmentShader:xt.equirect_frag},distanceRGBA:{uniforms:zn([we.common,we.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xt.distanceRGBA_vert,fragmentShader:xt.distanceRGBA_frag},shadow:{uniforms:zn([we.lights,we.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:xt.shadow_vert,fragmentShader:xt.shadow_frag}};yi.physical={uniforms:zn([yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new vt},clearcoatNormalScale:{value:new xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new vt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new vt},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new vt},transmissionSamplerSize:{value:new xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new vt},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new vt},anisotropyVector:{value:new xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new vt}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag};var ja={r:0,b:0,g:0};function y0(i,e,t,n,s,r,a){let o=new Ye(0),c=r===!0?0:1,l,h,u=null,d=0,m=null;function g(p,f){let S=!1,y=f.isScene===!0?f.background:null;y&&y.isTexture&&(y=(f.backgroundBlurriness>0?t:e).get(y)),y===null?v(o,c):y&&y.isColor&&(v(y,1),S=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,a):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||S)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Qo)?(h===void 0&&(h=new be(new Nn(1,1,1),new ai({name:"BackgroundCubeMaterial",uniforms:dr(yi.backgroundCube.uniforms),vertexShader:yi.backgroundCube.vertexShader,fragmentShader:yi.backgroundCube.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(F,D,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=kt.getTransfer(y.colorSpace)!==$t,(u!==y||d!==y.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,u=y,d=y.version,m=i.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new be(new wn(2,2),new ai({name:"BackgroundMaterial",uniforms:dr(yi.background.uniforms),vertexShader:yi.background.vertexShader,fragmentShader:yi.background.fragmentShader,side:ji,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,l.material.toneMapped=kt.getTransfer(y.colorSpace)!==$t,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,u=y,d=y.version,m=i.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function v(p,f){p.getRGB(ja,zd(i)),n.buffers.color.setClear(ja.r,ja.g,ja.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(p,f=1){o.set(p),c=f,v(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,v(o,c)},render:g}}function v0(i,e,t,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},c=p(null),l=c,h=!1;function u(_,V,j,de,J){let ie=!1;if(a){let _e=v(de,j,V);l!==_e&&(l=_e,m(l.object)),ie=f(_,de,j,J),ie&&S(_,de,j,J)}else{let _e=V.wireframe===!0;(l.geometry!==de.id||l.program!==j.id||l.wireframe!==_e)&&(l.geometry=de.id,l.program=j.id,l.wireframe=_e,ie=!0)}J!==null&&t.update(J,i.ELEMENT_ARRAY_BUFFER),(ie||h)&&(h=!1,q(_,V,j,de),J!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(J).buffer))}function d(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function m(_){return n.isWebGL2?i.bindVertexArray(_):r.bindVertexArrayOES(_)}function g(_){return n.isWebGL2?i.deleteVertexArray(_):r.deleteVertexArrayOES(_)}function v(_,V,j){let de=j.wireframe===!0,J=o[_.id];J===void 0&&(J={},o[_.id]=J);let ie=J[V.id];ie===void 0&&(ie={},J[V.id]=ie);let _e=ie[de];return _e===void 0&&(_e=p(d()),ie[de]=_e),_e}function p(_){let V=[],j=[],de=[];for(let J=0;J<s;J++)V[J]=0,j[J]=0,de[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:j,attributeDivisors:de,object:_,attributes:{},index:null}}function f(_,V,j,de){let J=l.attributes,ie=V.attributes,_e=0,fe=j.getAttributes();for(let Te in fe)if(fe[Te].location>=0){let me=J[Te],Ce=ie[Te];if(Ce===void 0&&(Te==="instanceMatrix"&&_.instanceMatrix&&(Ce=_.instanceMatrix),Te==="instanceColor"&&_.instanceColor&&(Ce=_.instanceColor)),me===void 0||me.attribute!==Ce||Ce&&me.data!==Ce.data)return!0;_e++}return l.attributesNum!==_e||l.index!==de}function S(_,V,j,de){let J={},ie=V.attributes,_e=0,fe=j.getAttributes();for(let Te in fe)if(fe[Te].location>=0){let me=ie[Te];me===void 0&&(Te==="instanceMatrix"&&_.instanceMatrix&&(me=_.instanceMatrix),Te==="instanceColor"&&_.instanceColor&&(me=_.instanceColor));let Ce={};Ce.attribute=me,me&&me.data&&(Ce.data=me.data),J[Te]=Ce,_e++}l.attributes=J,l.attributesNum=_e,l.index=de}function y(){let _=l.newAttributes;for(let V=0,j=_.length;V<j;V++)_[V]=0}function b(_){F(_,0)}function F(_,V){let j=l.newAttributes,de=l.enabledAttributes,J=l.attributeDivisors;j[_]=1,de[_]===0&&(i.enableVertexAttribArray(_),de[_]=1),J[_]!==V&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](_,V),J[_]=V)}function D(){let _=l.newAttributes,V=l.enabledAttributes;for(let j=0,de=V.length;j<de;j++)V[j]!==_[j]&&(i.disableVertexAttribArray(j),V[j]=0)}function U(_,V,j,de,J,ie,_e){_e===!0?i.vertexAttribIPointer(_,V,j,J,ie):i.vertexAttribPointer(_,V,j,de,J,ie)}function q(_,V,j,de){if(n.isWebGL2===!1&&(_.isInstancedMesh||de.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();let J=de.attributes,ie=j.getAttributes(),_e=V.defaultAttributeValues;for(let fe in ie){let Te=ie[fe];if(Te.location>=0){let K=J[fe];if(K===void 0&&(fe==="instanceMatrix"&&_.instanceMatrix&&(K=_.instanceMatrix),fe==="instanceColor"&&_.instanceColor&&(K=_.instanceColor)),K!==void 0){let me=K.normalized,Ce=K.itemSize,ze=t.get(K);if(ze===void 0)continue;let Oe=ze.buffer,it=ze.type,rt=ze.bytesPerElement,ke=n.isWebGL2===!0&&(it===i.INT||it===i.UNSIGNED_INT||K.gpuType===Ad);if(K.isInterleavedBufferAttribute){let ct=K.data,N=ct.stride,ve=K.offset;if(ct.isInstancedInterleavedBuffer){for(let ne=0;ne<Te.locationSize;ne++)F(Te.location+ne,ct.meshPerAttribute);_.isInstancedMesh!==!0&&de._maxInstanceCount===void 0&&(de._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let ne=0;ne<Te.locationSize;ne++)b(Te.location+ne);i.bindBuffer(i.ARRAY_BUFFER,Oe);for(let ne=0;ne<Te.locationSize;ne++)U(Te.location+ne,Ce/Te.locationSize,it,me,N*rt,(ve+Ce/Te.locationSize*ne)*rt,ke)}else{if(K.isInstancedBufferAttribute){for(let ct=0;ct<Te.locationSize;ct++)F(Te.location+ct,K.meshPerAttribute);_.isInstancedMesh!==!0&&de._maxInstanceCount===void 0&&(de._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let ct=0;ct<Te.locationSize;ct++)b(Te.location+ct);i.bindBuffer(i.ARRAY_BUFFER,Oe);for(let ct=0;ct<Te.locationSize;ct++)U(Te.location+ct,Ce/Te.locationSize,it,me,Ce*rt,Ce/Te.locationSize*ct*rt,ke)}}else if(_e!==void 0){let me=_e[fe];if(me!==void 0)switch(me.length){case 2:i.vertexAttrib2fv(Te.location,me);break;case 3:i.vertexAttrib3fv(Te.location,me);break;case 4:i.vertexAttrib4fv(Te.location,me);break;default:i.vertexAttrib1fv(Te.location,me)}}}}D()}function E(){Q();for(let _ in o){let V=o[_];for(let j in V){let de=V[j];for(let J in de)g(de[J].object),delete de[J];delete V[j]}delete o[_]}}function R(_){if(o[_.id]===void 0)return;let V=o[_.id];for(let j in V){let de=V[j];for(let J in de)g(de[J].object),delete de[J];delete V[j]}delete o[_.id]}function X(_){for(let V in o){let j=o[V];if(j[_.id]===void 0)continue;let de=j[_.id];for(let J in de)g(de[J].object),delete de[J];delete j[_.id]}}function Q(){O(),h=!0,l!==c&&(l=c,m(l.object))}function O(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:Q,resetDefaultState:O,dispose:E,releaseStatesOfGeometry:R,releaseStatesOfProgram:X,initAttributes:y,enableAttribute:b,disableUnusedAttributes:D}}function M0(i,e,t,n){let s=n.isWebGL2,r;function a(h){r=h}function o(h,u){i.drawArrays(r,h,u),t.update(u,r,1)}function c(h,u,d){if(d===0)return;let m,g;if(s)m=i,g="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](r,h,u,d),t.update(u,r,d)}function l(h,u,d){if(d===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{m.multiDrawArraysWEBGL(r,h,0,u,0,d);let g=0;for(let v=0;v<d;v++)g+=u[v];t.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=l}function E0(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let U=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(U){if(U==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",o=t.precision!==void 0?t.precision:"highp",c=r(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);let l=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),v=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),f=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=d>0,b=a||e.has("OES_texture_float"),F=y&&b,D=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:p,maxVaryings:f,maxFragmentUniforms:S,vertexTextures:y,floatFragmentTextures:b,floatVertexTextures:F,maxSamples:D}}function S0(i){let e=this,t=null,n=0,s=!1,r=!1,a=new pi,o=new vt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let m=u.length!==0||d||n!==0||s;return s=d,n=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,m){let g=u.clippingPlanes,v=u.clipIntersection,p=u.clipShadows,f=i.get(u);if(!s||g===null||g.length===0||r&&!p)r?h(null):l();else{let S=r?0:n,y=S*4,b=f.clippingState||null;c.value=b,b=h(g,d,y,m);for(let F=0;F!==y;++F)b[F]=t[F];f.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,m,g){let v=u!==null?u.length:0,p=null;if(v!==0){if(p=c.value,g!==!0||p===null){let f=m+v*4,S=d.matrixWorldInverse;o.getNormalMatrix(S),(p===null||p.length<f)&&(p=new Float32Array(f));for(let y=0,b=m;y!==v;++y,b+=4)a.copy(u[y]).applyMatrix4(S,o),a.normal.toArray(p,b),p[b+3]=a.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function b0(i){let e=new WeakMap;function t(a,o){return o===dl?a.mapping=lr:o===fl&&(a.mapping=hr),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===dl||o===fl)if(e.has(a)){let c=e.get(a).texture;return t(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new El(c.height/2);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Lo=class extends Po{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ir=4,Bu=[.125,.215,.35,.446,.526,.582],fs=20,Kc=new Lo,zu=new Ye,jc=null,Qc=0,el=0,us=(1+Math.sqrt(5))/2,Ks=1/us,Hu=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,us,Ks),new I(0,us,-Ks),new I(Ks,0,us),new I(-Ks,0,us),new I(us,Ks,0),new I(-us,Ks,0)],fr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){jc=this._renderer.getRenderTarget(),Qc=this._renderer.getActiveCubeFace(),el=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(jc,Qc,el),e.scissorTest=!1,Qa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===lr||e.mapping===hr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),jc=this._renderer.getRenderTarget(),Qc=this._renderer.getActiveCubeFace(),el=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:si,minFilter:si,generateMipmaps:!1,type:Yr,format:gi,colorSpace:Li,depthBuffer:!1},s=ku(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ku(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=T0(r)),this._blurMaterial=w0(r,e,t)}return s}_compileMaterial(e){let t=new be(this._lodPlanes[0],e);this._renderer.compile(t,Kc)}_sceneToCubeUV(e,t,n,s){let o=new Dn(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(zu),h.toneMapping=Ji,h.autoClear=!1;let m=new kn({name:"PMREM.Background",side:Tn,depthWrite:!1,depthTest:!1}),g=new be(new Nn,m),v=!1,p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,v=!0):(m.color.copy(zu),v=!0);for(let f=0;f<6;f++){let S=f%3;S===0?(o.up.set(0,c[f],0),o.lookAt(l[f],0,0)):S===1?(o.up.set(0,0,c[f]),o.lookAt(0,l[f],0)):(o.up.set(0,c[f],0),o.lookAt(0,0,l[f]));let y=this._cubeSize;Qa(s,S*y,f>2?y:0,y,y),h.setRenderTarget(s),v&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=p}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===lr||e.mapping===hr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gu());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new be(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;Qa(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Kc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Hu[(s-1)%Hu.length];this._blur(e,s-1,s,r,a)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new be(this._lodPlanes[s],l),d=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*fs-1),v=r/g,p=isFinite(r)?1+Math.floor(h*v):fs;p>fs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${fs}`);let f=[],S=0;for(let U=0;U<fs;++U){let q=U/v,E=Math.exp(-q*q/2);f.push(E),U===0?S+=E:U<p&&(S+=2*E)}for(let U=0;U<f.length;U++)f[U]=f[U]/S;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;let b=this._sizeLods[s],F=3*b*(s>y-ir?s-y+ir:0),D=4*(this._cubeSize-b);Qa(t,F,D,3*b,2*b),c.setRenderTarget(t),c.render(u,Kc)}};function T0(i){let e=[],t=[],n=[],s=i,r=i-ir+1+Bu.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let c=1/o;a>i-ir?c=Bu[a-i+ir-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,v=3,p=2,f=1,S=new Float32Array(v*g*m),y=new Float32Array(p*g*m),b=new Float32Array(f*g*m);for(let D=0;D<m;D++){let U=D%3*2/3-1,q=D>2?0:-1,E=[U,q,0,U+2/3,q,0,U+2/3,q+1,0,U,q,0,U+2/3,q+1,0,U,q+1,0];S.set(E,v*g*D),y.set(d,p*g*D);let R=[D,D,D,D,D,D];b.set(R,f*g*D)}let F=new Kt;F.setAttribute("position",new Un(S,v)),F.setAttribute("uv",new Un(y,p)),F.setAttribute("faceIndex",new Un(b,f)),e.push(F),s>ir&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ku(i,e,t){let n=new Di(i,e,t);return n.texture.mapping=Qo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Qa(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function w0(i,e,t){let n=new Float32Array(fs),s=new I(0,1,0);return new ai({name:"SphericalGaussianBlur",defines:{n:fs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:oh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function Gu(){return new ai({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:oh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function Vu(){return new ai({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:oh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function oh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function A0(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===dl||c===fl,h=c===lr||c===hr;if(l||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=e.get(o);return t===null&&(t=new fr(i)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),e.set(o,u),u.texture}else{if(e.has(o))return e.get(o).texture;{let u=o.image;if(l&&u&&u.height>0||h&&u&&s(u)){t===null&&(t=new fr(i));let d=l?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function s(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function R0(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function C0(i,e,t,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let v=d.morphAttributes[g];for(let p=0,f=v.length;p<f;p++)e.remove(v[p])}d.removeEventListener("dispose",a),delete s[d.id];let m=r.get(d);m&&(e.remove(m),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function c(u){let d=u.attributes;for(let g in d)e.update(d[g],i.ARRAY_BUFFER);let m=u.morphAttributes;for(let g in m){let v=m[g];for(let p=0,f=v.length;p<f;p++)e.update(v[p],i.ARRAY_BUFFER)}}function l(u){let d=[],m=u.index,g=u.attributes.position,v=0;if(m!==null){let S=m.array;v=m.version;for(let y=0,b=S.length;y<b;y+=3){let F=S[y+0],D=S[y+1],U=S[y+2];d.push(F,D,D,U,U,F)}}else if(g!==void 0){let S=g.array;v=g.version;for(let y=0,b=S.length/3-1;y<b;y+=3){let F=y+0,D=y+1,U=y+2;d.push(F,D,D,U,U,F)}}else return;let p=new(Fd(d)?Co:Ro)(d,1);p.version=v;let f=r.get(u);f&&e.remove(f),r.set(u,p)}function h(u){let d=r.get(u);if(d){let m=u.index;m!==null&&d.version<m.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function P0(i,e,t,n){let s=n.isWebGL2,r;function a(m){r=m}let o,c;function l(m){o=m.type,c=m.bytesPerElement}function h(m,g){i.drawElements(r,g,o,m*c),t.update(g,r,1)}function u(m,g,v){if(v===0)return;let p,f;if(s)p=i,f="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](r,g,o,m*c,v),t.update(g,r,v)}function d(m,g,v){if(v===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<v;f++)this.render(m[f]/c,g[f]);else{p.multiDrawElementsWEBGL(r,g,0,o,m,0,v);let f=0;for(let S=0;S<v;S++)f+=g[S];t.update(f,r,1)}}this.setMode=a,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function I0(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function L0(i,e){return i[0]-e[0]}function D0(i,e){return Math.abs(e[1])-Math.abs(i[1])}function U0(i,e,t){let n={},s=new Float32Array(8),r=new WeakMap,a=new tn,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,h,u){let d=l.morphTargetInfluences;if(e.isWebGL2===!0){let m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=m!==void 0?m.length:0,v=r.get(h);if(v===void 0||v.count!==g){let _=function(){Q.dispose(),r.delete(h),h.removeEventListener("dispose",_)};v!==void 0&&v.texture.dispose();let S=h.morphAttributes.position!==void 0,y=h.morphAttributes.normal!==void 0,b=h.morphAttributes.color!==void 0,F=h.morphAttributes.position||[],D=h.morphAttributes.normal||[],U=h.morphAttributes.color||[],q=0;S===!0&&(q=1),y===!0&&(q=2),b===!0&&(q=3);let E=h.attributes.position.count*q,R=1;E>e.maxTextureSize&&(R=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);let X=new Float32Array(E*R*4*g),Q=new To(X,E,R,g);Q.type=qi,Q.needsUpdate=!0;let O=q*4;for(let V=0;V<g;V++){let j=F[V],de=D[V],J=U[V],ie=E*R*4*V;for(let _e=0;_e<j.count;_e++){let fe=_e*O;S===!0&&(a.fromBufferAttribute(j,_e),X[ie+fe+0]=a.x,X[ie+fe+1]=a.y,X[ie+fe+2]=a.z,X[ie+fe+3]=0),y===!0&&(a.fromBufferAttribute(de,_e),X[ie+fe+4]=a.x,X[ie+fe+5]=a.y,X[ie+fe+6]=a.z,X[ie+fe+7]=0),b===!0&&(a.fromBufferAttribute(J,_e),X[ie+fe+8]=a.x,X[ie+fe+9]=a.y,X[ie+fe+10]=a.z,X[ie+fe+11]=J.itemSize===4?a.w:1)}}v={count:g,texture:Q,size:new xe(E,R)},r.set(h,v),h.addEventListener("dispose",_)}let p=0;for(let S=0;S<d.length;S++)p+=d[S];let f=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(i,"morphTargetBaseInfluence",f),u.getUniforms().setValue(i,"morphTargetInfluences",d),u.getUniforms().setValue(i,"morphTargetsTexture",v.texture,t),u.getUniforms().setValue(i,"morphTargetsTextureSize",v.size)}else{let m=d===void 0?0:d.length,g=n[h.id];if(g===void 0||g.length!==m){g=[];for(let y=0;y<m;y++)g[y]=[y,0];n[h.id]=g}for(let y=0;y<m;y++){let b=g[y];b[0]=y,b[1]=d[y]}g.sort(D0);for(let y=0;y<8;y++)y<m&&g[y][1]?(o[y][0]=g[y][0],o[y][1]=g[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(L0);let v=h.morphAttributes.position,p=h.morphAttributes.normal,f=0;for(let y=0;y<8;y++){let b=o[y],F=b[0],D=b[1];F!==Number.MAX_SAFE_INTEGER&&D?(v&&h.getAttribute("morphTarget"+y)!==v[F]&&h.setAttribute("morphTarget"+y,v[F]),p&&h.getAttribute("morphNormal"+y)!==p[F]&&h.setAttribute("morphNormal"+y,p[F]),s[y]=D,f+=D):(v&&h.hasAttribute("morphTarget"+y)===!0&&h.deleteAttribute("morphTarget"+y),p&&h.hasAttribute("morphNormal"+y)===!0&&h.deleteAttribute("morphNormal"+y),s[y]=0)}let S=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(i,"morphTargetBaseInfluence",S),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:c}}function N0(i,e,t,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function a(){s=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}var Do=class extends jn{constructor(e,t,n,s,r,a,o,c,l,h){if(h=h!==void 0?h:ms,h!==ms&&h!==ur)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ms&&(n=Xi),n===void 0&&h===ur&&(n=ps),super(null,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Hn,this.minFilter=c!==void 0?c:Hn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},kd=new jn,Gd=new Do(1,1);Gd.compareFunction=Od;var Vd=new To,Wd=new vl,Xd=new Io,Wu=[],Xu=[],qu=new Float32Array(16),Yu=new Float32Array(9),Zu=new Float32Array(4);function vr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Wu[s];if(r===void 0&&(r=new Float32Array(s),Wu[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function vn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Mn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function tc(i,e){let t=Xu[e];t===void 0&&(t=new Int32Array(e),Xu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function O0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function F0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;i.uniform2fv(this.addr,e),Mn(t,e)}}function B0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vn(t,e))return;i.uniform3fv(this.addr,e),Mn(t,e)}}function z0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;i.uniform4fv(this.addr,e),Mn(t,e)}}function H0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(vn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Mn(t,e)}else{if(vn(t,n))return;Zu.set(n),i.uniformMatrix2fv(this.addr,!1,Zu),Mn(t,n)}}function k0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(vn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Mn(t,e)}else{if(vn(t,n))return;Yu.set(n),i.uniformMatrix3fv(this.addr,!1,Yu),Mn(t,n)}}function G0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(vn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Mn(t,e)}else{if(vn(t,n))return;qu.set(n),i.uniformMatrix4fv(this.addr,!1,qu),Mn(t,n)}}function V0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function W0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;i.uniform2iv(this.addr,e),Mn(t,e)}}function X0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vn(t,e))return;i.uniform3iv(this.addr,e),Mn(t,e)}}function q0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;i.uniform4iv(this.addr,e),Mn(t,e)}}function Y0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Z0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;i.uniform2uiv(this.addr,e),Mn(t,e)}}function J0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vn(t,e))return;i.uniform3uiv(this.addr,e),Mn(t,e)}}function $0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;i.uniform4uiv(this.addr,e),Mn(t,e)}}function K0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?Gd:kd;t.setTexture2D(e||r,s)}function j0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Wd,s)}function Q0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Xd,s)}function e_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Vd,s)}function t_(i){switch(i){case 5126:return O0;case 35664:return F0;case 35665:return B0;case 35666:return z0;case 35674:return H0;case 35675:return k0;case 35676:return G0;case 5124:case 35670:return V0;case 35667:case 35671:return W0;case 35668:case 35672:return X0;case 35669:case 35673:return q0;case 5125:return Y0;case 36294:return Z0;case 36295:return J0;case 36296:return $0;case 35678:case 36198:case 36298:case 36306:case 35682:return K0;case 35679:case 36299:case 36307:return j0;case 35680:case 36300:case 36308:case 36293:return Q0;case 36289:case 36303:case 36311:case 36292:return e_}}function n_(i,e){i.uniform1fv(this.addr,e)}function i_(i,e){let t=vr(e,this.size,2);i.uniform2fv(this.addr,t)}function s_(i,e){let t=vr(e,this.size,3);i.uniform3fv(this.addr,t)}function r_(i,e){let t=vr(e,this.size,4);i.uniform4fv(this.addr,t)}function a_(i,e){let t=vr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function o_(i,e){let t=vr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function c_(i,e){let t=vr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function l_(i,e){i.uniform1iv(this.addr,e)}function h_(i,e){i.uniform2iv(this.addr,e)}function u_(i,e){i.uniform3iv(this.addr,e)}function d_(i,e){i.uniform4iv(this.addr,e)}function f_(i,e){i.uniform1uiv(this.addr,e)}function p_(i,e){i.uniform2uiv(this.addr,e)}function m_(i,e){i.uniform3uiv(this.addr,e)}function g_(i,e){i.uniform4uiv(this.addr,e)}function __(i,e,t){let n=this.cache,s=e.length,r=tc(t,s);vn(n,r)||(i.uniform1iv(this.addr,r),Mn(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||kd,r[a])}function x_(i,e,t){let n=this.cache,s=e.length,r=tc(t,s);vn(n,r)||(i.uniform1iv(this.addr,r),Mn(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Wd,r[a])}function y_(i,e,t){let n=this.cache,s=e.length,r=tc(t,s);vn(n,r)||(i.uniform1iv(this.addr,r),Mn(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Xd,r[a])}function v_(i,e,t){let n=this.cache,s=e.length,r=tc(t,s);vn(n,r)||(i.uniform1iv(this.addr,r),Mn(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Vd,r[a])}function M_(i){switch(i){case 5126:return n_;case 35664:return i_;case 35665:return s_;case 35666:return r_;case 35674:return a_;case 35675:return o_;case 35676:return c_;case 5124:case 35670:return l_;case 35667:case 35671:return h_;case 35668:case 35672:return u_;case 35669:case 35673:return d_;case 5125:return f_;case 36294:return p_;case 36295:return m_;case 36296:return g_;case 35678:case 36198:case 36298:case 36306:case 35682:return __;case 35679:case 36299:case 36307:return x_;case 35680:case 36300:case 36308:case 36293:return y_;case 36289:case 36303:case 36311:case 36292:return v_}}var Sl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=t_(t.type)}},bl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=M_(t.type)}},Tl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},tl=/(\w+)(\])?(\[|\.)?/g;function Ju(i,e){i.seq.push(e),i.map[e.id]=e}function E_(i,e,t){let n=i.name,s=n.length;for(tl.lastIndex=0;;){let r=tl.exec(n),a=tl.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Ju(t,l===void 0?new Sl(o,i,e):new bl(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new Tl(o),Ju(t,u)),t=u}}}var cr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);E_(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function $u(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var S_=37297,b_=0;function T_(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function w_(i){let e=kt.getPrimaries(kt.workingColorSpace),t=kt.getPrimaries(i),n;switch(e===t?n="":e===Mo&&t===vo?n="LinearDisplayP3ToLinearSRGB":e===vo&&t===Mo&&(n="LinearSRGBToLinearDisplayP3"),i){case Li:case ec:return[n,"LinearTransferOETF"];case ln:case ah:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Ku(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+T_(i.getShaderSource(e),a)}else return s}function A_(i,e){let t=w_(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function R_(i,e){let t;switch(e){case Yf:t="Linear";break;case Zf:t="Reinhard";break;case Jf:t="OptimizedCineon";break;case sh:t="ACESFilmic";break;case Kf:t="AgX";break;case $f:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function C_(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(sr).join(`
`)}function P_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(sr).join(`
`)}function I_(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function L_(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function sr(i){return i!==""}function ju(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Qu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var D_=/^[ \t]*#include +<([\w\d./]+)>/gm;function wl(i){return i.replace(D_,N_)}var U_=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function N_(i,e){let t=xt[e];if(t===void 0){let n=U_.get(e);if(n!==void 0)t=xt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return wl(t)}var O_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ed(i){return i.replace(O_,F_)}function F_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function td(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function B_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===bd?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===ih?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ri&&(e="SHADOWMAP_TYPE_VSM"),e}function z_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case lr:case hr:e="ENVMAP_TYPE_CUBE";break;case Qo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function H_(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===hr&&(e="ENVMAP_MODE_REFRACTION"),e}function k_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Td:e="ENVMAP_BLENDING_MULTIPLY";break;case Xf:e="ENVMAP_BLENDING_MIX";break;case qf:e="ENVMAP_BLENDING_ADD";break}return e}function G_(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function V_(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=B_(t),l=z_(t),h=H_(t),u=k_(t),d=G_(t),m=t.isWebGL2?"":C_(t),g=P_(t),v=I_(r),p=s.createProgram(),f,S,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(sr).join(`
`),f.length>0&&(f+=`
`),S=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(sr).join(`
`),S.length>0&&(S+=`
`)):(f=[td(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sr).join(`
`),S=[m,td(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ji?"#define TONE_MAPPING":"",t.toneMapping!==Ji?xt.tonemapping_pars_fragment:"",t.toneMapping!==Ji?R_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",xt.colorspace_pars_fragment,A_("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(sr).join(`
`)),a=wl(a),a=ju(a,t),a=Qu(a,t),o=wl(o),o=ju(o,t),o=Qu(o,t),a=ed(a),o=ed(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,S=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===vu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===vu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);let b=y+f+a,F=y+S+o,D=$u(s,s.VERTEX_SHADER,b),U=$u(s,s.FRAGMENT_SHADER,F);s.attachShader(p,D),s.attachShader(p,U),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function q(Q){if(i.debug.checkShaderErrors){let O=s.getProgramInfoLog(p).trim(),_=s.getShaderInfoLog(D).trim(),V=s.getShaderInfoLog(U).trim(),j=!0,de=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,D,U);else{let J=Ku(s,D,"vertex"),ie=Ku(s,U,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Program Info Log: `+O+`
`+J+`
`+ie)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(_===""||V==="")&&(de=!1);de&&(Q.diagnostics={runnable:j,programLog:O,vertexShader:{log:_,prefix:f},fragmentShader:{log:V,prefix:S}})}s.deleteShader(D),s.deleteShader(U),E=new cr(s,p),R=L_(s,p)}let E;this.getUniforms=function(){return E===void 0&&q(this),E};let R;this.getAttributes=function(){return R===void 0&&q(this),R};let X=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return X===!1&&(X=s.getProgramParameter(p,S_)),X},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=b_++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=D,this.fragmentShader=U,this}var W_=0,Al=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Rl(e),t.set(e,n)),n}},Rl=class{constructor(e){this.id=W_++,this.code=e,this.usedTimes=0}};function X_(i,e,t,n,s,r,a){let o=new Ao,c=new Al,l=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,d=s.vertexTextures,m=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return E===0?"uv":`uv${E}`}function p(E,R,X,Q,O){let _=Q.fog,V=O.geometry,j=E.isMeshStandardMaterial?Q.environment:null,de=(E.isMeshStandardMaterial?t:e).get(E.envMap||j),J=de&&de.mapping===Qo?de.image.height:null,ie=g[E.type];E.precision!==null&&(m=s.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));let _e=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,fe=_e!==void 0?_e.length:0,Te=0;V.morphAttributes.position!==void 0&&(Te=1),V.morphAttributes.normal!==void 0&&(Te=2),V.morphAttributes.color!==void 0&&(Te=3);let K,me,Ce,ze;if(ie){let sn=yi[ie];K=sn.vertexShader,me=sn.fragmentShader}else K=E.vertexShader,me=E.fragmentShader,c.update(E),Ce=c.getVertexShaderID(E),ze=c.getFragmentShaderID(E);let Oe=i.getRenderTarget(),it=O.isInstancedMesh===!0,rt=O.isBatchedMesh===!0,ke=!!E.map,ct=!!E.matcap,N=!!de,ve=!!E.aoMap,ne=!!E.lightMap,ye=!!E.bumpMap,ce=!!E.normalMap,Ze=!!E.displacementMap,Pe=!!E.emissiveMap,T=!!E.metalnessMap,M=!!E.roughnessMap,W=E.anisotropy>0,pe=E.clearcoat>0,ee=E.iridescence>0,L=E.sheen>0,Ue=E.transmission>0,Me=W&&!!E.anisotropyMap,P=pe&&!!E.clearcoatMap,ae=pe&&!!E.clearcoatNormalMap,He=pe&&!!E.clearcoatRoughnessMap,ge=ee&&!!E.iridescenceMap,At=ee&&!!E.iridescenceThicknessMap,mt=L&&!!E.sheenColorMap,tt=L&&!!E.sheenRoughnessMap,$e=!!E.specularMap,Be=!!E.specularColorMap,ft=!!E.specularIntensityMap,It=Ue&&!!E.transmissionMap,Yt=Ue&&!!E.thicknessMap,gt=!!E.gradientMap,Se=!!E.alphaMap,B=E.alphaTest>0,Ae=!!E.alphaHash,Re=!!E.extensions,Ke=!!V.attributes.uv1,qe=!!V.attributes.uv2,Ut=!!V.attributes.uv3,Ft=Ji;return E.toneMapped&&(Oe===null||Oe.isXRRenderTarget===!0)&&(Ft=i.toneMapping),{isWebGL2:h,shaderID:ie,shaderType:E.type,shaderName:E.name,vertexShader:K,fragmentShader:me,defines:E.defines,customVertexShaderID:Ce,customFragmentShaderID:ze,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:rt,instancing:it,instancingColor:it&&O.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Oe===null?i.outputColorSpace:Oe.isXRRenderTarget===!0?Oe.texture.colorSpace:Li,map:ke,matcap:ct,envMap:N,envMapMode:N&&de.mapping,envMapCubeUVHeight:J,aoMap:ve,lightMap:ne,bumpMap:ye,normalMap:ce,displacementMap:d&&Ze,emissiveMap:Pe,normalMapObjectSpace:ce&&E.normalMapType===lp,normalMapTangentSpace:ce&&E.normalMapType===Nd,metalnessMap:T,roughnessMap:M,anisotropy:W,anisotropyMap:Me,clearcoat:pe,clearcoatMap:P,clearcoatNormalMap:ae,clearcoatRoughnessMap:He,iridescence:ee,iridescenceMap:ge,iridescenceThicknessMap:At,sheen:L,sheenColorMap:mt,sheenRoughnessMap:tt,specularMap:$e,specularColorMap:Be,specularIntensityMap:ft,transmission:Ue,transmissionMap:It,thicknessMap:Yt,gradientMap:gt,opaque:E.transparent===!1&&E.blending===ar,alphaMap:Se,alphaTest:B,alphaHash:Ae,combine:E.combine,mapUv:ke&&v(E.map.channel),aoMapUv:ve&&v(E.aoMap.channel),lightMapUv:ne&&v(E.lightMap.channel),bumpMapUv:ye&&v(E.bumpMap.channel),normalMapUv:ce&&v(E.normalMap.channel),displacementMapUv:Ze&&v(E.displacementMap.channel),emissiveMapUv:Pe&&v(E.emissiveMap.channel),metalnessMapUv:T&&v(E.metalnessMap.channel),roughnessMapUv:M&&v(E.roughnessMap.channel),anisotropyMapUv:Me&&v(E.anisotropyMap.channel),clearcoatMapUv:P&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:ae&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:He&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:At&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:mt&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:tt&&v(E.sheenRoughnessMap.channel),specularMapUv:$e&&v(E.specularMap.channel),specularColorMapUv:Be&&v(E.specularColorMap.channel),specularIntensityMapUv:ft&&v(E.specularIntensityMap.channel),transmissionMapUv:It&&v(E.transmissionMap.channel),thicknessMapUv:Yt&&v(E.thicknessMap.channel),alphaMapUv:Se&&v(E.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(ce||W),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,vertexUv1s:Ke,vertexUv2s:qe,vertexUv3s:Ut,pointsUvs:O.isPoints===!0&&!!V.attributes.uv&&(ke||Se),fog:!!_,useFog:E.fog===!0,fogExp2:_&&_.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:O.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:Te,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&X.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ft,useLegacyLights:i._useLegacyLights,decodeVideoTexture:ke&&E.map.isVideoTexture===!0&&kt.getTransfer(E.map.colorSpace)===$t,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===bn,flipSided:E.side===Tn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:Re&&E.extensions.derivatives===!0,extensionFragDepth:Re&&E.extensions.fragDepth===!0,extensionDrawBuffers:Re&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:Re&&E.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Re&&E.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()}}function f(E){let R=[];if(E.shaderID?R.push(E.shaderID):(R.push(E.customVertexShaderID),R.push(E.customFragmentShaderID)),E.defines!==void 0)for(let X in E.defines)R.push(X),R.push(E.defines[X]);return E.isRawShaderMaterial===!1&&(S(R,E),y(R,E),R.push(i.outputColorSpace)),R.push(E.customProgramCacheKey),R.join()}function S(E,R){E.push(R.precision),E.push(R.outputColorSpace),E.push(R.envMapMode),E.push(R.envMapCubeUVHeight),E.push(R.mapUv),E.push(R.alphaMapUv),E.push(R.lightMapUv),E.push(R.aoMapUv),E.push(R.bumpMapUv),E.push(R.normalMapUv),E.push(R.displacementMapUv),E.push(R.emissiveMapUv),E.push(R.metalnessMapUv),E.push(R.roughnessMapUv),E.push(R.anisotropyMapUv),E.push(R.clearcoatMapUv),E.push(R.clearcoatNormalMapUv),E.push(R.clearcoatRoughnessMapUv),E.push(R.iridescenceMapUv),E.push(R.iridescenceThicknessMapUv),E.push(R.sheenColorMapUv),E.push(R.sheenRoughnessMapUv),E.push(R.specularMapUv),E.push(R.specularColorMapUv),E.push(R.specularIntensityMapUv),E.push(R.transmissionMapUv),E.push(R.thicknessMapUv),E.push(R.combine),E.push(R.fogExp2),E.push(R.sizeAttenuation),E.push(R.morphTargetsCount),E.push(R.morphAttributeCount),E.push(R.numDirLights),E.push(R.numPointLights),E.push(R.numSpotLights),E.push(R.numSpotLightMaps),E.push(R.numHemiLights),E.push(R.numRectAreaLights),E.push(R.numDirLightShadows),E.push(R.numPointLightShadows),E.push(R.numSpotLightShadows),E.push(R.numSpotLightShadowsWithMaps),E.push(R.numLightProbes),E.push(R.shadowMapType),E.push(R.toneMapping),E.push(R.numClippingPlanes),E.push(R.numClipIntersection),E.push(R.depthPacking)}function y(E,R){o.disableAll(),R.isWebGL2&&o.enable(0),R.supportsVertexTextures&&o.enable(1),R.instancing&&o.enable(2),R.instancingColor&&o.enable(3),R.matcap&&o.enable(4),R.envMap&&o.enable(5),R.normalMapObjectSpace&&o.enable(6),R.normalMapTangentSpace&&o.enable(7),R.clearcoat&&o.enable(8),R.iridescence&&o.enable(9),R.alphaTest&&o.enable(10),R.vertexColors&&o.enable(11),R.vertexAlphas&&o.enable(12),R.vertexUv1s&&o.enable(13),R.vertexUv2s&&o.enable(14),R.vertexUv3s&&o.enable(15),R.vertexTangents&&o.enable(16),R.anisotropy&&o.enable(17),R.alphaHash&&o.enable(18),R.batching&&o.enable(19),E.push(o.mask),o.disableAll(),R.fog&&o.enable(0),R.useFog&&o.enable(1),R.flatShading&&o.enable(2),R.logarithmicDepthBuffer&&o.enable(3),R.skinning&&o.enable(4),R.morphTargets&&o.enable(5),R.morphNormals&&o.enable(6),R.morphColors&&o.enable(7),R.premultipliedAlpha&&o.enable(8),R.shadowMapEnabled&&o.enable(9),R.useLegacyLights&&o.enable(10),R.doubleSided&&o.enable(11),R.flipSided&&o.enable(12),R.useDepthPacking&&o.enable(13),R.dithering&&o.enable(14),R.transmission&&o.enable(15),R.sheen&&o.enable(16),R.opaque&&o.enable(17),R.pointsUvs&&o.enable(18),R.decodeVideoTexture&&o.enable(19),E.push(o.mask)}function b(E){let R=g[E.type],X;if(R){let Q=yi[R];X=Up.clone(Q.uniforms)}else X=E.uniforms;return X}function F(E,R){let X;for(let Q=0,O=l.length;Q<O;Q++){let _=l[Q];if(_.cacheKey===R){X=_,++X.usedTimes;break}}return X===void 0&&(X=new V_(i,R,E,r),l.push(X)),X}function D(E){if(--E.usedTimes===0){let R=l.indexOf(E);l[R]=l[l.length-1],l.pop(),E.destroy()}}function U(E){c.remove(E)}function q(){c.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:b,acquireProgram:F,releaseProgram:D,releaseShaderCache:U,programs:l,dispose:q}}function q_(){let i=new WeakMap;function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function t(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function Y_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function nd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function id(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u,d,m,g,v,p){let f=i[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:m,groupOrder:g,renderOrder:u.renderOrder,z:v,group:p},i[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=m,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=v,f.group=p),e++,f}function o(u,d,m,g,v,p){let f=a(u,d,m,g,v,p);m.transmission>0?n.push(f):m.transparent===!0?s.push(f):t.push(f)}function c(u,d,m,g,v,p){let f=a(u,d,m,g,v,p);m.transmission>0?n.unshift(f):m.transparent===!0?s.unshift(f):t.unshift(f)}function l(u,d){t.length>1&&t.sort(u||Y_),n.length>1&&n.sort(d||nd),s.length>1&&s.sort(d||nd)}function h(){for(let u=e,d=i.length;u<d;u++){let m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function Z_(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new id,i.set(n,[a])):s>=r.length?(a=new id,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function J_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Ye};break;case"SpotLight":t={position:new I,direction:new I,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function $_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var K_=0;function j_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Q_(i,e){let t=new J_,n=$_(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new I);let r=new I,a=new qt,o=new qt;function c(h,u){let d=0,m=0,g=0;for(let Q=0;Q<9;Q++)s.probe[Q].set(0,0,0);let v=0,p=0,f=0,S=0,y=0,b=0,F=0,D=0,U=0,q=0,E=0;h.sort(j_);let R=u===!0?Math.PI:1;for(let Q=0,O=h.length;Q<O;Q++){let _=h[Q],V=_.color,j=_.intensity,de=_.distance,J=_.shadow&&_.shadow.map?_.shadow.map.texture:null;if(_.isAmbientLight)d+=V.r*j*R,m+=V.g*j*R,g+=V.b*j*R;else if(_.isLightProbe){for(let ie=0;ie<9;ie++)s.probe[ie].addScaledVector(_.sh.coefficients[ie],j);E++}else if(_.isDirectionalLight){let ie=t.get(_);if(ie.color.copy(_.color).multiplyScalar(_.intensity*R),_.castShadow){let _e=_.shadow,fe=n.get(_);fe.shadowBias=_e.bias,fe.shadowNormalBias=_e.normalBias,fe.shadowRadius=_e.radius,fe.shadowMapSize=_e.mapSize,s.directionalShadow[v]=fe,s.directionalShadowMap[v]=J,s.directionalShadowMatrix[v]=_.shadow.matrix,b++}s.directional[v]=ie,v++}else if(_.isSpotLight){let ie=t.get(_);ie.position.setFromMatrixPosition(_.matrixWorld),ie.color.copy(V).multiplyScalar(j*R),ie.distance=de,ie.coneCos=Math.cos(_.angle),ie.penumbraCos=Math.cos(_.angle*(1-_.penumbra)),ie.decay=_.decay,s.spot[f]=ie;let _e=_.shadow;if(_.map&&(s.spotLightMap[U]=_.map,U++,_e.updateMatrices(_),_.castShadow&&q++),s.spotLightMatrix[f]=_e.matrix,_.castShadow){let fe=n.get(_);fe.shadowBias=_e.bias,fe.shadowNormalBias=_e.normalBias,fe.shadowRadius=_e.radius,fe.shadowMapSize=_e.mapSize,s.spotShadow[f]=fe,s.spotShadowMap[f]=J,D++}f++}else if(_.isRectAreaLight){let ie=t.get(_);ie.color.copy(V).multiplyScalar(j),ie.halfWidth.set(_.width*.5,0,0),ie.halfHeight.set(0,_.height*.5,0),s.rectArea[S]=ie,S++}else if(_.isPointLight){let ie=t.get(_);if(ie.color.copy(_.color).multiplyScalar(_.intensity*R),ie.distance=_.distance,ie.decay=_.decay,_.castShadow){let _e=_.shadow,fe=n.get(_);fe.shadowBias=_e.bias,fe.shadowNormalBias=_e.normalBias,fe.shadowRadius=_e.radius,fe.shadowMapSize=_e.mapSize,fe.shadowCameraNear=_e.camera.near,fe.shadowCameraFar=_e.camera.far,s.pointShadow[p]=fe,s.pointShadowMap[p]=J,s.pointShadowMatrix[p]=_.shadow.matrix,F++}s.point[p]=ie,p++}else if(_.isHemisphereLight){let ie=t.get(_);ie.skyColor.copy(_.color).multiplyScalar(j*R),ie.groundColor.copy(_.groundColor).multiplyScalar(j*R),s.hemi[y]=ie,y++}}S>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=we.LTC_FLOAT_1,s.rectAreaLTC2=we.LTC_FLOAT_2):(s.rectAreaLTC1=we.LTC_HALF_1,s.rectAreaLTC2=we.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=we.LTC_FLOAT_1,s.rectAreaLTC2=we.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=we.LTC_HALF_1,s.rectAreaLTC2=we.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=m,s.ambient[2]=g;let X=s.hash;(X.directionalLength!==v||X.pointLength!==p||X.spotLength!==f||X.rectAreaLength!==S||X.hemiLength!==y||X.numDirectionalShadows!==b||X.numPointShadows!==F||X.numSpotShadows!==D||X.numSpotMaps!==U||X.numLightProbes!==E)&&(s.directional.length=v,s.spot.length=f,s.rectArea.length=S,s.point.length=p,s.hemi.length=y,s.directionalShadow.length=b,s.directionalShadowMap.length=b,s.pointShadow.length=F,s.pointShadowMap.length=F,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=b,s.pointShadowMatrix.length=F,s.spotLightMatrix.length=D+U-q,s.spotLightMap.length=U,s.numSpotLightShadowsWithMaps=q,s.numLightProbes=E,X.directionalLength=v,X.pointLength=p,X.spotLength=f,X.rectAreaLength=S,X.hemiLength=y,X.numDirectionalShadows=b,X.numPointShadows=F,X.numSpotShadows=D,X.numSpotMaps=U,X.numLightProbes=E,s.version=K_++)}function l(h,u){let d=0,m=0,g=0,v=0,p=0,f=u.matrixWorldInverse;for(let S=0,y=h.length;S<y;S++){let b=h[S];if(b.isDirectionalLight){let F=s.directional[d];F.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),F.direction.sub(r),F.direction.transformDirection(f),d++}else if(b.isSpotLight){let F=s.spot[g];F.position.setFromMatrixPosition(b.matrixWorld),F.position.applyMatrix4(f),F.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),F.direction.sub(r),F.direction.transformDirection(f),g++}else if(b.isRectAreaLight){let F=s.rectArea[v];F.position.setFromMatrixPosition(b.matrixWorld),F.position.applyMatrix4(f),o.identity(),a.copy(b.matrixWorld),a.premultiply(f),o.extractRotation(a),F.halfWidth.set(b.width*.5,0,0),F.halfHeight.set(0,b.height*.5,0),F.halfWidth.applyMatrix4(o),F.halfHeight.applyMatrix4(o),v++}else if(b.isPointLight){let F=s.point[m];F.position.setFromMatrixPosition(b.matrixWorld),F.position.applyMatrix4(f),m++}else if(b.isHemisphereLight){let F=s.hemi[p];F.direction.setFromMatrixPosition(b.matrixWorld),F.direction.transformDirection(f),p++}}}return{setup:c,setupView:l,state:s}}function sd(i,e){let t=new Q_(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function a(u){n.push(u)}function o(u){s.push(u)}function c(u){t.setup(n,u)}function l(u){t.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function ex(i,e){let t=new WeakMap;function n(r,a=0){let o=t.get(r),c;return o===void 0?(c=new sd(i,e),t.set(r,[c])):a>=o.length?(c=new sd(i,e),o.push(c)):c=o[a],c}function s(){t=new WeakMap}return{get:n,dispose:s}}var Cl=class extends _i{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=op,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Pl=class extends _i{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},tx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,nx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ix(i,e,t){let n=new $r,s=new xe,r=new xe,a=new tn,o=new Cl({depthPacking:cp}),c=new Pl,l={},h=t.maxTextureSize,u={[ji]:Tn,[Tn]:ji,[bn]:bn},d=new ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xe},radius:{value:4}},vertexShader:tx,fragmentShader:nx}),m=d.clone();m.defines.HORIZONTAL_PASS=1;let g=new Kt;g.setAttribute("position",new Un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new be(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bd;let f=this.type;this.render=function(D,U,q){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||D.length===0)return;let E=i.getRenderTarget(),R=i.getActiveCubeFace(),X=i.getActiveMipmapLevel(),Q=i.state;Q.setBlending(Zi),Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);let O=f!==Ri&&this.type===Ri,_=f===Ri&&this.type!==Ri;for(let V=0,j=D.length;V<j;V++){let de=D[V],J=de.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",de,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;s.copy(J.mapSize);let ie=J.getFrameExtents();if(s.multiply(ie),r.copy(J.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ie.x),s.x=r.x*ie.x,J.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ie.y),s.y=r.y*ie.y,J.mapSize.y=r.y)),J.map===null||O===!0||_===!0){let fe=this.type!==Ri?{minFilter:Hn,magFilter:Hn}:{};J.map!==null&&J.map.dispose(),J.map=new Di(s.x,s.y,fe),J.map.texture.name=de.name+".shadowMap",J.camera.updateProjectionMatrix()}i.setRenderTarget(J.map),i.clear();let _e=J.getViewportCount();for(let fe=0;fe<_e;fe++){let Te=J.getViewport(fe);a.set(r.x*Te.x,r.y*Te.y,r.x*Te.z,r.y*Te.w),Q.viewport(a),J.updateMatrices(de,fe),n=J.getFrustum(),b(U,q,J.camera,de,this.type)}J.isPointLightShadow!==!0&&this.type===Ri&&S(J,q),J.needsUpdate=!1}f=this.type,p.needsUpdate=!1,i.setRenderTarget(E,R,X)};function S(D,U){let q=e.update(v);d.defines.VSM_SAMPLES!==D.blurSamples&&(d.defines.VSM_SAMPLES=D.blurSamples,m.defines.VSM_SAMPLES=D.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new Di(s.x,s.y)),d.uniforms.shadow_pass.value=D.map.texture,d.uniforms.resolution.value=D.mapSize,d.uniforms.radius.value=D.radius,i.setRenderTarget(D.mapPass),i.clear(),i.renderBufferDirect(U,null,q,d,v,null),m.uniforms.shadow_pass.value=D.mapPass.texture,m.uniforms.resolution.value=D.mapSize,m.uniforms.radius.value=D.radius,i.setRenderTarget(D.map),i.clear(),i.renderBufferDirect(U,null,q,m,v,null)}function y(D,U,q,E){let R=null,X=q.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(X!==void 0)R=X;else if(R=q.isPointLight===!0?c:o,i.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){let Q=R.uuid,O=U.uuid,_=l[Q];_===void 0&&(_={},l[Q]=_);let V=_[O];V===void 0&&(V=R.clone(),_[O]=V,U.addEventListener("dispose",F)),R=V}if(R.visible=U.visible,R.wireframe=U.wireframe,E===Ri?R.side=U.shadowSide!==null?U.shadowSide:U.side:R.side=U.shadowSide!==null?U.shadowSide:u[U.side],R.alphaMap=U.alphaMap,R.alphaTest=U.alphaTest,R.map=U.map,R.clipShadows=U.clipShadows,R.clippingPlanes=U.clippingPlanes,R.clipIntersection=U.clipIntersection,R.displacementMap=U.displacementMap,R.displacementScale=U.displacementScale,R.displacementBias=U.displacementBias,R.wireframeLinewidth=U.wireframeLinewidth,R.linewidth=U.linewidth,q.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let Q=i.properties.get(R);Q.light=q}return R}function b(D,U,q,E,R){if(D.visible===!1)return;if(D.layers.test(U.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&R===Ri)&&(!D.frustumCulled||n.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,D.matrixWorld);let O=e.update(D),_=D.material;if(Array.isArray(_)){let V=O.groups;for(let j=0,de=V.length;j<de;j++){let J=V[j],ie=_[J.materialIndex];if(ie&&ie.visible){let _e=y(D,ie,E,R);D.onBeforeShadow(i,D,U,q,O,_e,J),i.renderBufferDirect(q,null,O,_e,D,J),D.onAfterShadow(i,D,U,q,O,_e,J)}}}else if(_.visible){let V=y(D,_,E,R);D.onBeforeShadow(i,D,U,q,O,V,null),i.renderBufferDirect(q,null,O,V,D,null),D.onAfterShadow(i,D,U,q,O,V,null)}}let Q=D.children;for(let O=0,_=Q.length;O<_;O++)b(Q[O],U,q,E,R)}function F(D){D.target.removeEventListener("dispose",F);for(let q in l){let E=l[q],R=D.target.uuid;R in E&&(E[R].dispose(),delete E[R])}}}function sx(i,e,t){let n=t.isWebGL2;function s(){let B=!1,Ae=new tn,Re=null,Ke=new tn(0,0,0,0);return{setMask:function(qe){Re!==qe&&!B&&(i.colorMask(qe,qe,qe,qe),Re=qe)},setLocked:function(qe){B=qe},setClear:function(qe,Ut,Ft,nn,sn){sn===!0&&(qe*=nn,Ut*=nn,Ft*=nn),Ae.set(qe,Ut,Ft,nn),Ke.equals(Ae)===!1&&(i.clearColor(qe,Ut,Ft,nn),Ke.copy(Ae))},reset:function(){B=!1,Re=null,Ke.set(-1,0,0,0)}}}function r(){let B=!1,Ae=null,Re=null,Ke=null;return{setTest:function(qe){qe?rt(i.DEPTH_TEST):ke(i.DEPTH_TEST)},setMask:function(qe){Ae!==qe&&!B&&(i.depthMask(qe),Ae=qe)},setFunc:function(qe){if(Re!==qe){switch(qe){case Bf:i.depthFunc(i.NEVER);break;case zf:i.depthFunc(i.ALWAYS);break;case Hf:i.depthFunc(i.LESS);break;case go:i.depthFunc(i.LEQUAL);break;case kf:i.depthFunc(i.EQUAL);break;case Gf:i.depthFunc(i.GEQUAL);break;case Vf:i.depthFunc(i.GREATER);break;case Wf:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Re=qe}},setLocked:function(qe){B=qe},setClear:function(qe){Ke!==qe&&(i.clearDepth(qe),Ke=qe)},reset:function(){B=!1,Ae=null,Re=null,Ke=null}}}function a(){let B=!1,Ae=null,Re=null,Ke=null,qe=null,Ut=null,Ft=null,nn=null,sn=null;return{setTest:function(Lt){B||(Lt?rt(i.STENCIL_TEST):ke(i.STENCIL_TEST))},setMask:function(Lt){Ae!==Lt&&!B&&(i.stencilMask(Lt),Ae=Lt)},setFunc:function(Lt,un,Rn){(Re!==Lt||Ke!==un||qe!==Rn)&&(i.stencilFunc(Lt,un,Rn),Re=Lt,Ke=un,qe=Rn)},setOp:function(Lt,un,Rn){(Ut!==Lt||Ft!==un||nn!==Rn)&&(i.stencilOp(Lt,un,Rn),Ut=Lt,Ft=un,nn=Rn)},setLocked:function(Lt){B=Lt},setClear:function(Lt){sn!==Lt&&(i.clearStencil(Lt),sn=Lt)},reset:function(){B=!1,Ae=null,Re=null,Ke=null,qe=null,Ut=null,Ft=null,nn=null,sn=null}}}let o=new s,c=new r,l=new a,h=new WeakMap,u=new WeakMap,d={},m={},g=new WeakMap,v=[],p=null,f=!1,S=null,y=null,b=null,F=null,D=null,U=null,q=null,E=new Ye(0,0,0),R=0,X=!1,Q=null,O=null,_=null,V=null,j=null,de=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,ie=0,_e=i.getParameter(i.VERSION);_e.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(_e)[1]),J=ie>=1):_e.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(_e)[1]),J=ie>=2);let fe=null,Te={},K=i.getParameter(i.SCISSOR_BOX),me=i.getParameter(i.VIEWPORT),Ce=new tn().fromArray(K),ze=new tn().fromArray(me);function Oe(B,Ae,Re,Ke){let qe=new Uint8Array(4),Ut=i.createTexture();i.bindTexture(B,Ut),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ft=0;Ft<Re;Ft++)n&&(B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY)?i.texImage3D(Ae,0,i.RGBA,1,1,Ke,0,i.RGBA,i.UNSIGNED_BYTE,qe):i.texImage2D(Ae+Ft,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,qe);return Ut}let it={};it[i.TEXTURE_2D]=Oe(i.TEXTURE_2D,i.TEXTURE_2D,1),it[i.TEXTURE_CUBE_MAP]=Oe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(it[i.TEXTURE_2D_ARRAY]=Oe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),it[i.TEXTURE_3D]=Oe(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),rt(i.DEPTH_TEST),c.setFunc(go),Pe(!1),T(Bh),rt(i.CULL_FACE),ce(Zi);function rt(B){d[B]!==!0&&(i.enable(B),d[B]=!0)}function ke(B){d[B]!==!1&&(i.disable(B),d[B]=!1)}function ct(B,Ae){return m[B]!==Ae?(i.bindFramebuffer(B,Ae),m[B]=Ae,n&&(B===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=Ae),B===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=Ae)),!0):!1}function N(B,Ae){let Re=v,Ke=!1;if(B)if(Re=g.get(Ae),Re===void 0&&(Re=[],g.set(Ae,Re)),B.isWebGLMultipleRenderTargets){let qe=B.texture;if(Re.length!==qe.length||Re[0]!==i.COLOR_ATTACHMENT0){for(let Ut=0,Ft=qe.length;Ut<Ft;Ut++)Re[Ut]=i.COLOR_ATTACHMENT0+Ut;Re.length=qe.length,Ke=!0}}else Re[0]!==i.COLOR_ATTACHMENT0&&(Re[0]=i.COLOR_ATTACHMENT0,Ke=!0);else Re[0]!==i.BACK&&(Re[0]=i.BACK,Ke=!0);Ke&&(t.isWebGL2?i.drawBuffers(Re):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Re))}function ve(B){return p!==B?(i.useProgram(B),p=B,!0):!1}let ne={[ds]:i.FUNC_ADD,[Sf]:i.FUNC_SUBTRACT,[bf]:i.FUNC_REVERSE_SUBTRACT};if(n)ne[Gh]=i.MIN,ne[Vh]=i.MAX;else{let B=e.get("EXT_blend_minmax");B!==null&&(ne[Gh]=B.MIN_EXT,ne[Vh]=B.MAX_EXT)}let ye={[Tf]:i.ZERO,[wf]:i.ONE,[Af]:i.SRC_COLOR,[hl]:i.SRC_ALPHA,[Df]:i.SRC_ALPHA_SATURATE,[If]:i.DST_COLOR,[Cf]:i.DST_ALPHA,[Rf]:i.ONE_MINUS_SRC_COLOR,[ul]:i.ONE_MINUS_SRC_ALPHA,[Lf]:i.ONE_MINUS_DST_COLOR,[Pf]:i.ONE_MINUS_DST_ALPHA,[Uf]:i.CONSTANT_COLOR,[Nf]:i.ONE_MINUS_CONSTANT_COLOR,[Of]:i.CONSTANT_ALPHA,[Ff]:i.ONE_MINUS_CONSTANT_ALPHA};function ce(B,Ae,Re,Ke,qe,Ut,Ft,nn,sn,Lt){if(B===Zi){f===!0&&(ke(i.BLEND),f=!1);return}if(f===!1&&(rt(i.BLEND),f=!0),B!==Ef){if(B!==S||Lt!==X){if((y!==ds||D!==ds)&&(i.blendEquation(i.FUNC_ADD),y=ds,D=ds),Lt)switch(B){case ar:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zh:i.blendFunc(i.ONE,i.ONE);break;case Hh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case kh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case ar:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zh:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Hh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case kh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}b=null,F=null,U=null,q=null,E.set(0,0,0),R=0,S=B,X=Lt}return}qe=qe||Ae,Ut=Ut||Re,Ft=Ft||Ke,(Ae!==y||qe!==D)&&(i.blendEquationSeparate(ne[Ae],ne[qe]),y=Ae,D=qe),(Re!==b||Ke!==F||Ut!==U||Ft!==q)&&(i.blendFuncSeparate(ye[Re],ye[Ke],ye[Ut],ye[Ft]),b=Re,F=Ke,U=Ut,q=Ft),(nn.equals(E)===!1||sn!==R)&&(i.blendColor(nn.r,nn.g,nn.b,sn),E.copy(nn),R=sn),S=B,X=!1}function Ze(B,Ae){B.side===bn?ke(i.CULL_FACE):rt(i.CULL_FACE);let Re=B.side===Tn;Ae&&(Re=!Re),Pe(Re),B.blending===ar&&B.transparent===!1?ce(Zi):ce(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),c.setFunc(B.depthFunc),c.setTest(B.depthTest),c.setMask(B.depthWrite),o.setMask(B.colorWrite);let Ke=B.stencilWrite;l.setTest(Ke),Ke&&(l.setMask(B.stencilWriteMask),l.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),l.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),W(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?rt(i.SAMPLE_ALPHA_TO_COVERAGE):ke(i.SAMPLE_ALPHA_TO_COVERAGE)}function Pe(B){Q!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),Q=B)}function T(B){B!==vf?(rt(i.CULL_FACE),B!==O&&(B===Bh?i.cullFace(i.BACK):B===Mf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ke(i.CULL_FACE),O=B}function M(B){B!==_&&(J&&i.lineWidth(B),_=B)}function W(B,Ae,Re){B?(rt(i.POLYGON_OFFSET_FILL),(V!==Ae||j!==Re)&&(i.polygonOffset(Ae,Re),V=Ae,j=Re)):ke(i.POLYGON_OFFSET_FILL)}function pe(B){B?rt(i.SCISSOR_TEST):ke(i.SCISSOR_TEST)}function ee(B){B===void 0&&(B=i.TEXTURE0+de-1),fe!==B&&(i.activeTexture(B),fe=B)}function L(B,Ae,Re){Re===void 0&&(fe===null?Re=i.TEXTURE0+de-1:Re=fe);let Ke=Te[Re];Ke===void 0&&(Ke={type:void 0,texture:void 0},Te[Re]=Ke),(Ke.type!==B||Ke.texture!==Ae)&&(fe!==Re&&(i.activeTexture(Re),fe=Re),i.bindTexture(B,Ae||it[B]),Ke.type=B,Ke.texture=Ae)}function Ue(){let B=Te[fe];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function Me(){try{i.compressedTexImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function P(){try{i.compressedTexImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ae(){try{i.texSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function He(){try{i.texSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ge(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function At(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function mt(){try{i.texStorage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function tt(){try{i.texStorage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function $e(){try{i.texImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Be(){try{i.texImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ft(B){Ce.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),Ce.copy(B))}function It(B){ze.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),ze.copy(B))}function Yt(B,Ae){let Re=u.get(Ae);Re===void 0&&(Re=new WeakMap,u.set(Ae,Re));let Ke=Re.get(B);Ke===void 0&&(Ke=i.getUniformBlockIndex(Ae,B.name),Re.set(B,Ke))}function gt(B,Ae){let Ke=u.get(Ae).get(B);h.get(Ae)!==Ke&&(i.uniformBlockBinding(Ae,Ke,B.__bindingPointIndex),h.set(Ae,Ke))}function Se(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},fe=null,Te={},m={},g=new WeakMap,v=[],p=null,f=!1,S=null,y=null,b=null,F=null,D=null,U=null,q=null,E=new Ye(0,0,0),R=0,X=!1,Q=null,O=null,_=null,V=null,j=null,Ce.set(0,0,i.canvas.width,i.canvas.height),ze.set(0,0,i.canvas.width,i.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:rt,disable:ke,bindFramebuffer:ct,drawBuffers:N,useProgram:ve,setBlending:ce,setMaterial:Ze,setFlipSided:Pe,setCullFace:T,setLineWidth:M,setPolygonOffset:W,setScissorTest:pe,activeTexture:ee,bindTexture:L,unbindTexture:Ue,compressedTexImage2D:Me,compressedTexImage3D:P,texImage2D:$e,texImage3D:Be,updateUBOMapping:Yt,uniformBlockBinding:gt,texStorage2D:mt,texStorage3D:tt,texSubImage2D:ae,texSubImage3D:He,compressedTexSubImage2D:ge,compressedTexSubImage3D:At,scissor:ft,viewport:It,reset:Se}}function rx(i,e,t,n,s,r,a){let o=s.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,M){return m?new OffscreenCanvas(T,M):Zr("canvas")}function v(T,M,W,pe){let ee=1;if((T.width>pe||T.height>pe)&&(ee=pe/Math.max(T.width,T.height)),ee<1||M===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){let L=M?xl:Math.floor,Ue=L(ee*T.width),Me=L(ee*T.height);u===void 0&&(u=g(Ue,Me));let P=W?g(Ue,Me):u;return P.width=Ue,P.height=Me,P.getContext("2d").drawImage(T,0,0,Ue,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+Ue+"x"+Me+")."),P}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function p(T){return Mu(T.width)&&Mu(T.height)}function f(T){return o?!1:T.wrapS!==mi||T.wrapT!==mi||T.minFilter!==Hn&&T.minFilter!==si}function S(T,M){return T.generateMipmaps&&M&&T.minFilter!==Hn&&T.minFilter!==si}function y(T){i.generateMipmap(T)}function b(T,M,W,pe,ee=!1){if(o===!1)return M;if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let L=M;if(M===i.RED&&(W===i.FLOAT&&(L=i.R32F),W===i.HALF_FLOAT&&(L=i.R16F),W===i.UNSIGNED_BYTE&&(L=i.R8)),M===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(L=i.R8UI),W===i.UNSIGNED_SHORT&&(L=i.R16UI),W===i.UNSIGNED_INT&&(L=i.R32UI),W===i.BYTE&&(L=i.R8I),W===i.SHORT&&(L=i.R16I),W===i.INT&&(L=i.R32I)),M===i.RG&&(W===i.FLOAT&&(L=i.RG32F),W===i.HALF_FLOAT&&(L=i.RG16F),W===i.UNSIGNED_BYTE&&(L=i.RG8)),M===i.RGBA){let Ue=ee?yo:kt.getTransfer(pe);W===i.FLOAT&&(L=i.RGBA32F),W===i.HALF_FLOAT&&(L=i.RGBA16F),W===i.UNSIGNED_BYTE&&(L=Ue===$t?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT_4_4_4_4&&(L=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(L=i.RGB5_A1)}return(L===i.R16F||L===i.R32F||L===i.RG16F||L===i.RG32F||L===i.RGBA16F||L===i.RGBA32F)&&e.get("EXT_color_buffer_float"),L}function F(T,M,W){return S(T,W)===!0||T.isFramebufferTexture&&T.minFilter!==Hn&&T.minFilter!==si?Math.log2(Math.max(M.width,M.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?M.mipmaps.length:1}function D(T){return T===Hn||T===Wh||T===wc?i.NEAREST:i.LINEAR}function U(T){let M=T.target;M.removeEventListener("dispose",U),E(M),M.isVideoTexture&&h.delete(M)}function q(T){let M=T.target;M.removeEventListener("dispose",q),X(M)}function E(T){let M=n.get(T);if(M.__webglInit===void 0)return;let W=T.source,pe=d.get(W);if(pe){let ee=pe[M.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&R(T),Object.keys(pe).length===0&&d.delete(W)}n.remove(T)}function R(T){let M=n.get(T);i.deleteTexture(M.__webglTexture);let W=T.source,pe=d.get(W);delete pe[M.__cacheKey],a.memory.textures--}function X(T){let M=T.texture,W=n.get(T),pe=n.get(M);if(pe.__webglTexture!==void 0&&(i.deleteTexture(pe.__webglTexture),a.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(W.__webglFramebuffer[ee]))for(let L=0;L<W.__webglFramebuffer[ee].length;L++)i.deleteFramebuffer(W.__webglFramebuffer[ee][L]);else i.deleteFramebuffer(W.__webglFramebuffer[ee]);W.__webglDepthbuffer&&i.deleteRenderbuffer(W.__webglDepthbuffer[ee])}else{if(Array.isArray(W.__webglFramebuffer))for(let ee=0;ee<W.__webglFramebuffer.length;ee++)i.deleteFramebuffer(W.__webglFramebuffer[ee]);else i.deleteFramebuffer(W.__webglFramebuffer);if(W.__webglDepthbuffer&&i.deleteRenderbuffer(W.__webglDepthbuffer),W.__webglMultisampledFramebuffer&&i.deleteFramebuffer(W.__webglMultisampledFramebuffer),W.__webglColorRenderbuffer)for(let ee=0;ee<W.__webglColorRenderbuffer.length;ee++)W.__webglColorRenderbuffer[ee]&&i.deleteRenderbuffer(W.__webglColorRenderbuffer[ee]);W.__webglDepthRenderbuffer&&i.deleteRenderbuffer(W.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let ee=0,L=M.length;ee<L;ee++){let Ue=n.get(M[ee]);Ue.__webglTexture&&(i.deleteTexture(Ue.__webglTexture),a.memory.textures--),n.remove(M[ee])}n.remove(M),n.remove(T)}let Q=0;function O(){Q=0}function _(){let T=Q;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),Q+=1,T}function V(T){let M=[];return M.push(T.wrapS),M.push(T.wrapT),M.push(T.wrapR||0),M.push(T.magFilter),M.push(T.minFilter),M.push(T.anisotropy),M.push(T.internalFormat),M.push(T.format),M.push(T.type),M.push(T.generateMipmaps),M.push(T.premultiplyAlpha),M.push(T.flipY),M.push(T.unpackAlignment),M.push(T.colorSpace),M.join()}function j(T,M){let W=n.get(T);if(T.isVideoTexture&&Ze(T),T.isRenderTargetTexture===!1&&T.version>0&&W.__version!==T.version){let pe=T.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ce(W,T,M);return}}t.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+M)}function de(T,M){let W=n.get(T);if(T.version>0&&W.__version!==T.version){Ce(W,T,M);return}t.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+M)}function J(T,M){let W=n.get(T);if(T.version>0&&W.__version!==T.version){Ce(W,T,M);return}t.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+M)}function ie(T,M){let W=n.get(T);if(T.version>0&&W.__version!==T.version){ze(W,T,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+M)}let _e={[_s]:i.REPEAT,[mi]:i.CLAMP_TO_EDGE,[pl]:i.MIRRORED_REPEAT},fe={[Hn]:i.NEAREST,[Wh]:i.NEAREST_MIPMAP_NEAREST,[wc]:i.NEAREST_MIPMAP_LINEAR,[si]:i.LINEAR,[jf]:i.LINEAR_MIPMAP_NEAREST,[qr]:i.LINEAR_MIPMAP_LINEAR},Te={[hp]:i.NEVER,[gp]:i.ALWAYS,[up]:i.LESS,[Od]:i.LEQUAL,[dp]:i.EQUAL,[mp]:i.GEQUAL,[fp]:i.GREATER,[pp]:i.NOTEQUAL};function K(T,M,W){if(W?(i.texParameteri(T,i.TEXTURE_WRAP_S,_e[M.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,_e[M.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,_e[M.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,fe[M.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,fe[M.minFilter])):(i.texParameteri(T,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(T,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(M.wrapS!==mi||M.wrapT!==mi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(T,i.TEXTURE_MAG_FILTER,D(M.magFilter)),i.texParameteri(T,i.TEXTURE_MIN_FILTER,D(M.minFilter)),M.minFilter!==Hn&&M.minFilter!==si&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,Te[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let pe=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===Hn||M.minFilter!==wc&&M.minFilter!==qr||M.type===qi&&e.has("OES_texture_float_linear")===!1||o===!1&&M.type===Yr&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(i.texParameterf(T,pe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function me(T,M){let W=!1;T.__webglInit===void 0&&(T.__webglInit=!0,M.addEventListener("dispose",U));let pe=M.source,ee=d.get(pe);ee===void 0&&(ee={},d.set(pe,ee));let L=V(M);if(L!==T.__cacheKey){ee[L]===void 0&&(ee[L]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,W=!0),ee[L].usedTimes++;let Ue=ee[T.__cacheKey];Ue!==void 0&&(ee[T.__cacheKey].usedTimes--,Ue.usedTimes===0&&R(M)),T.__cacheKey=L,T.__webglTexture=ee[L].texture}return W}function Ce(T,M,W){let pe=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(pe=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(pe=i.TEXTURE_3D);let ee=me(T,M),L=M.source;t.bindTexture(pe,T.__webglTexture,i.TEXTURE0+W);let Ue=n.get(L);if(L.version!==Ue.__version||ee===!0){t.activeTexture(i.TEXTURE0+W);let Me=kt.getPrimaries(kt.workingColorSpace),P=M.colorSpace===ri?null:kt.getPrimaries(M.colorSpace),ae=M.colorSpace===ri||Me===P?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);let He=f(M)&&p(M.image)===!1,ge=v(M.image,He,!1,s.maxTextureSize);ge=Pe(M,ge);let At=p(ge)||o,mt=r.convert(M.format,M.colorSpace),tt=r.convert(M.type),$e=b(M.internalFormat,mt,tt,M.colorSpace,M.isVideoTexture);K(pe,M,At);let Be,ft=M.mipmaps,It=o&&M.isVideoTexture!==!0&&$e!==Dd,Yt=Ue.__version===void 0||ee===!0,gt=F(M,ge,At);if(M.isDepthTexture)$e=i.DEPTH_COMPONENT,o?M.type===qi?$e=i.DEPTH_COMPONENT32F:M.type===Xi?$e=i.DEPTH_COMPONENT24:M.type===ps?$e=i.DEPTH24_STENCIL8:$e=i.DEPTH_COMPONENT16:M.type===qi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===ms&&$e===i.DEPTH_COMPONENT&&M.type!==rh&&M.type!==Xi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Xi,tt=r.convert(M.type)),M.format===ur&&$e===i.DEPTH_COMPONENT&&($e=i.DEPTH_STENCIL,M.type!==ps&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=ps,tt=r.convert(M.type))),Yt&&(It?t.texStorage2D(i.TEXTURE_2D,1,$e,ge.width,ge.height):t.texImage2D(i.TEXTURE_2D,0,$e,ge.width,ge.height,0,mt,tt,null));else if(M.isDataTexture)if(ft.length>0&&At){It&&Yt&&t.texStorage2D(i.TEXTURE_2D,gt,$e,ft[0].width,ft[0].height);for(let Se=0,B=ft.length;Se<B;Se++)Be=ft[Se],It?t.texSubImage2D(i.TEXTURE_2D,Se,0,0,Be.width,Be.height,mt,tt,Be.data):t.texImage2D(i.TEXTURE_2D,Se,$e,Be.width,Be.height,0,mt,tt,Be.data);M.generateMipmaps=!1}else It?(Yt&&t.texStorage2D(i.TEXTURE_2D,gt,$e,ge.width,ge.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,ge.width,ge.height,mt,tt,ge.data)):t.texImage2D(i.TEXTURE_2D,0,$e,ge.width,ge.height,0,mt,tt,ge.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){It&&Yt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,gt,$e,ft[0].width,ft[0].height,ge.depth);for(let Se=0,B=ft.length;Se<B;Se++)Be=ft[Se],M.format!==gi?mt!==null?It?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Se,0,0,0,Be.width,Be.height,ge.depth,mt,Be.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Se,$e,Be.width,Be.height,ge.depth,0,Be.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):It?t.texSubImage3D(i.TEXTURE_2D_ARRAY,Se,0,0,0,Be.width,Be.height,ge.depth,mt,tt,Be.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Se,$e,Be.width,Be.height,ge.depth,0,mt,tt,Be.data)}else{It&&Yt&&t.texStorage2D(i.TEXTURE_2D,gt,$e,ft[0].width,ft[0].height);for(let Se=0,B=ft.length;Se<B;Se++)Be=ft[Se],M.format!==gi?mt!==null?It?t.compressedTexSubImage2D(i.TEXTURE_2D,Se,0,0,Be.width,Be.height,mt,Be.data):t.compressedTexImage2D(i.TEXTURE_2D,Se,$e,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):It?t.texSubImage2D(i.TEXTURE_2D,Se,0,0,Be.width,Be.height,mt,tt,Be.data):t.texImage2D(i.TEXTURE_2D,Se,$e,Be.width,Be.height,0,mt,tt,Be.data)}else if(M.isDataArrayTexture)It?(Yt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,gt,$e,ge.width,ge.height,ge.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,mt,tt,ge.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,$e,ge.width,ge.height,ge.depth,0,mt,tt,ge.data);else if(M.isData3DTexture)It?(Yt&&t.texStorage3D(i.TEXTURE_3D,gt,$e,ge.width,ge.height,ge.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,mt,tt,ge.data)):t.texImage3D(i.TEXTURE_3D,0,$e,ge.width,ge.height,ge.depth,0,mt,tt,ge.data);else if(M.isFramebufferTexture){if(Yt)if(It)t.texStorage2D(i.TEXTURE_2D,gt,$e,ge.width,ge.height);else{let Se=ge.width,B=ge.height;for(let Ae=0;Ae<gt;Ae++)t.texImage2D(i.TEXTURE_2D,Ae,$e,Se,B,0,mt,tt,null),Se>>=1,B>>=1}}else if(ft.length>0&&At){It&&Yt&&t.texStorage2D(i.TEXTURE_2D,gt,$e,ft[0].width,ft[0].height);for(let Se=0,B=ft.length;Se<B;Se++)Be=ft[Se],It?t.texSubImage2D(i.TEXTURE_2D,Se,0,0,mt,tt,Be):t.texImage2D(i.TEXTURE_2D,Se,$e,mt,tt,Be);M.generateMipmaps=!1}else It?(Yt&&t.texStorage2D(i.TEXTURE_2D,gt,$e,ge.width,ge.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,mt,tt,ge)):t.texImage2D(i.TEXTURE_2D,0,$e,mt,tt,ge);S(M,At)&&y(pe),Ue.__version=L.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function ze(T,M,W){if(M.image.length!==6)return;let pe=me(T,M),ee=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+W);let L=n.get(ee);if(ee.version!==L.__version||pe===!0){t.activeTexture(i.TEXTURE0+W);let Ue=kt.getPrimaries(kt.workingColorSpace),Me=M.colorSpace===ri?null:kt.getPrimaries(M.colorSpace),P=M.colorSpace===ri||Ue===Me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,P);let ae=M.isCompressedTexture||M.image[0].isCompressedTexture,He=M.image[0]&&M.image[0].isDataTexture,ge=[];for(let Se=0;Se<6;Se++)!ae&&!He?ge[Se]=v(M.image[Se],!1,!0,s.maxCubemapSize):ge[Se]=He?M.image[Se].image:M.image[Se],ge[Se]=Pe(M,ge[Se]);let At=ge[0],mt=p(At)||o,tt=r.convert(M.format,M.colorSpace),$e=r.convert(M.type),Be=b(M.internalFormat,tt,$e,M.colorSpace),ft=o&&M.isVideoTexture!==!0,It=L.__version===void 0||pe===!0,Yt=F(M,At,mt);K(i.TEXTURE_CUBE_MAP,M,mt);let gt;if(ae){ft&&It&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Yt,Be,At.width,At.height);for(let Se=0;Se<6;Se++){gt=ge[Se].mipmaps;for(let B=0;B<gt.length;B++){let Ae=gt[B];M.format!==gi?tt!==null?ft?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,B,0,0,Ae.width,Ae.height,tt,Ae.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,B,Be,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ft?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,B,0,0,Ae.width,Ae.height,tt,$e,Ae.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,B,Be,Ae.width,Ae.height,0,tt,$e,Ae.data)}}}else{gt=M.mipmaps,ft&&It&&(gt.length>0&&Yt++,t.texStorage2D(i.TEXTURE_CUBE_MAP,Yt,Be,ge[0].width,ge[0].height));for(let Se=0;Se<6;Se++)if(He){ft?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,ge[Se].width,ge[Se].height,tt,$e,ge[Se].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,Be,ge[Se].width,ge[Se].height,0,tt,$e,ge[Se].data);for(let B=0;B<gt.length;B++){let Re=gt[B].image[Se].image;ft?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,B+1,0,0,Re.width,Re.height,tt,$e,Re.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,B+1,Be,Re.width,Re.height,0,tt,$e,Re.data)}}else{ft?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,tt,$e,ge[Se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,Be,tt,$e,ge[Se]);for(let B=0;B<gt.length;B++){let Ae=gt[B];ft?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,B+1,0,0,tt,$e,Ae.image[Se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,B+1,Be,tt,$e,Ae.image[Se])}}}S(M,mt)&&y(i.TEXTURE_CUBE_MAP),L.__version=ee.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function Oe(T,M,W,pe,ee,L){let Ue=r.convert(W.format,W.colorSpace),Me=r.convert(W.type),P=b(W.internalFormat,Ue,Me,W.colorSpace);if(!n.get(M).__hasExternalTextures){let He=Math.max(1,M.width>>L),ge=Math.max(1,M.height>>L);ee===i.TEXTURE_3D||ee===i.TEXTURE_2D_ARRAY?t.texImage3D(ee,L,P,He,ge,M.depth,0,Ue,Me,null):t.texImage2D(ee,L,P,He,ge,0,Ue,Me,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),ce(M)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,pe,ee,n.get(W).__webglTexture,0,ye(M)):(ee===i.TEXTURE_2D||ee>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,pe,ee,n.get(W).__webglTexture,L),t.bindFramebuffer(i.FRAMEBUFFER,null)}function it(T,M,W){if(i.bindRenderbuffer(i.RENDERBUFFER,T),M.depthBuffer&&!M.stencilBuffer){let pe=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(W||ce(M)){let ee=M.depthTexture;ee&&ee.isDepthTexture&&(ee.type===qi?pe=i.DEPTH_COMPONENT32F:ee.type===Xi&&(pe=i.DEPTH_COMPONENT24));let L=ye(M);ce(M)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,L,pe,M.width,M.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,L,pe,M.width,M.height)}else i.renderbufferStorage(i.RENDERBUFFER,pe,M.width,M.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,T)}else if(M.depthBuffer&&M.stencilBuffer){let pe=ye(M);W&&ce(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,pe,i.DEPTH24_STENCIL8,M.width,M.height):ce(M)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pe,i.DEPTH24_STENCIL8,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,T)}else{let pe=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let ee=0;ee<pe.length;ee++){let L=pe[ee],Ue=r.convert(L.format,L.colorSpace),Me=r.convert(L.type),P=b(L.internalFormat,Ue,Me,L.colorSpace),ae=ye(M);W&&ce(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ae,P,M.width,M.height):ce(M)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ae,P,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,P,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function rt(T,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),j(M.depthTexture,0);let pe=n.get(M.depthTexture).__webglTexture,ee=ye(M);if(M.depthTexture.format===ms)ce(M)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,pe,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,pe,0);else if(M.depthTexture.format===ur)ce(M)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,pe,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,pe,0);else throw new Error("Unknown depthTexture format")}function ke(T){let M=n.get(T),W=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!M.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");rt(M.__webglFramebuffer,T)}else if(W){M.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[pe]),M.__webglDepthbuffer[pe]=i.createRenderbuffer(),it(M.__webglDepthbuffer[pe],T,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=i.createRenderbuffer(),it(M.__webglDepthbuffer,T,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function ct(T,M,W){let pe=n.get(T);M!==void 0&&Oe(pe.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&ke(T)}function N(T){let M=T.texture,W=n.get(T),pe=n.get(M);T.addEventListener("dispose",q),T.isWebGLMultipleRenderTargets!==!0&&(pe.__webglTexture===void 0&&(pe.__webglTexture=i.createTexture()),pe.__version=M.version,a.memory.textures++);let ee=T.isWebGLCubeRenderTarget===!0,L=T.isWebGLMultipleRenderTargets===!0,Ue=p(T)||o;if(ee){W.__webglFramebuffer=[];for(let Me=0;Me<6;Me++)if(o&&M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer[Me]=[];for(let P=0;P<M.mipmaps.length;P++)W.__webglFramebuffer[Me][P]=i.createFramebuffer()}else W.__webglFramebuffer[Me]=i.createFramebuffer()}else{if(o&&M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer=[];for(let Me=0;Me<M.mipmaps.length;Me++)W.__webglFramebuffer[Me]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(L)if(s.drawBuffers){let Me=T.texture;for(let P=0,ae=Me.length;P<ae;P++){let He=n.get(Me[P]);He.__webglTexture===void 0&&(He.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&T.samples>0&&ce(T)===!1){let Me=L?M:[M];W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let P=0;P<Me.length;P++){let ae=Me[P];W.__webglColorRenderbuffer[P]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[P]);let He=r.convert(ae.format,ae.colorSpace),ge=r.convert(ae.type),At=b(ae.internalFormat,He,ge,ae.colorSpace,T.isXRRenderTarget===!0),mt=ye(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,mt,At,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+P,i.RENDERBUFFER,W.__webglColorRenderbuffer[P])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),it(W.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ee){t.bindTexture(i.TEXTURE_CUBE_MAP,pe.__webglTexture),K(i.TEXTURE_CUBE_MAP,M,Ue);for(let Me=0;Me<6;Me++)if(o&&M.mipmaps&&M.mipmaps.length>0)for(let P=0;P<M.mipmaps.length;P++)Oe(W.__webglFramebuffer[Me][P],T,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,P);else Oe(W.__webglFramebuffer[Me],T,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0);S(M,Ue)&&y(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(L){let Me=T.texture;for(let P=0,ae=Me.length;P<ae;P++){let He=Me[P],ge=n.get(He);t.bindTexture(i.TEXTURE_2D,ge.__webglTexture),K(i.TEXTURE_2D,He,Ue),Oe(W.__webglFramebuffer,T,He,i.COLOR_ATTACHMENT0+P,i.TEXTURE_2D,0),S(He,Ue)&&y(i.TEXTURE_2D)}t.unbindTexture()}else{let Me=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(o?Me=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Me,pe.__webglTexture),K(Me,M,Ue),o&&M.mipmaps&&M.mipmaps.length>0)for(let P=0;P<M.mipmaps.length;P++)Oe(W.__webglFramebuffer[P],T,M,i.COLOR_ATTACHMENT0,Me,P);else Oe(W.__webglFramebuffer,T,M,i.COLOR_ATTACHMENT0,Me,0);S(M,Ue)&&y(Me),t.unbindTexture()}T.depthBuffer&&ke(T)}function ve(T){let M=p(T)||o,W=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let pe=0,ee=W.length;pe<ee;pe++){let L=W[pe];if(S(L,M)){let Ue=T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Me=n.get(L).__webglTexture;t.bindTexture(Ue,Me),y(Ue),t.unbindTexture()}}}function ne(T){if(o&&T.samples>0&&ce(T)===!1){let M=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],W=T.width,pe=T.height,ee=i.COLOR_BUFFER_BIT,L=[],Ue=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Me=n.get(T),P=T.isWebGLMultipleRenderTargets===!0;if(P)for(let ae=0;ae<M.length;ae++)t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let ae=0;ae<M.length;ae++){L.push(i.COLOR_ATTACHMENT0+ae),T.depthBuffer&&L.push(Ue);let He=Me.__ignoreDepthValues!==void 0?Me.__ignoreDepthValues:!1;if(He===!1&&(T.depthBuffer&&(ee|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&(ee|=i.STENCIL_BUFFER_BIT)),P&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Me.__webglColorRenderbuffer[ae]),He===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Ue]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Ue])),P){let ge=n.get(M[ae]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ge,0)}i.blitFramebuffer(0,0,W,pe,0,0,W,pe,ee,i.NEAREST),l&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,L)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),P)for(let ae=0;ae<M.length;ae++){t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,Me.__webglColorRenderbuffer[ae]);let He=n.get(M[ae]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.TEXTURE_2D,He,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}}function ye(T){return Math.min(s.maxSamples,T.samples)}function ce(T){let M=n.get(T);return o&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ze(T){let M=a.render.frame;h.get(T)!==M&&(h.set(T,M),T.update())}function Pe(T,M){let W=T.colorSpace,pe=T.format,ee=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===gl||W!==Li&&W!==ri&&(kt.getTransfer(W)===$t?o===!1?e.has("EXT_sRGB")===!0&&pe===gi?(T.format=gl,T.minFilter=si,T.generateMipmaps=!1):M=So.sRGBToLinear(M):(pe!==gi||ee!==$i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),M}this.allocateTextureUnit=_,this.resetTextureUnits=O,this.setTexture2D=j,this.setTexture2DArray=de,this.setTexture3D=J,this.setTextureCube=ie,this.rebindTextures=ct,this.setupRenderTarget=N,this.updateRenderTargetMipmap=ve,this.updateMultisampleRenderTarget=ne,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=Oe,this.useMultisampledRTT=ce}function ax(i,e,t){let n=t.isWebGL2;function s(r,a=ri){let o,c=kt.getTransfer(a);if(r===$i)return i.UNSIGNED_BYTE;if(r===Rd)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Cd)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Qf)return i.BYTE;if(r===ep)return i.SHORT;if(r===rh)return i.UNSIGNED_SHORT;if(r===Ad)return i.INT;if(r===Xi)return i.UNSIGNED_INT;if(r===qi)return i.FLOAT;if(r===Yr)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===tp)return i.ALPHA;if(r===gi)return i.RGBA;if(r===np)return i.LUMINANCE;if(r===ip)return i.LUMINANCE_ALPHA;if(r===ms)return i.DEPTH_COMPONENT;if(r===ur)return i.DEPTH_STENCIL;if(r===gl)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===sp)return i.RED;if(r===Pd)return i.RED_INTEGER;if(r===rp)return i.RG;if(r===Id)return i.RG_INTEGER;if(r===Ld)return i.RGBA_INTEGER;if(r===Ac||r===Rc||r===Cc||r===Pc)if(c===$t)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Ac)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Rc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Cc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Pc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Ac)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Rc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Cc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Pc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Xh||r===qh||r===Yh||r===Zh)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Xh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===qh)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Yh)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Zh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Dd)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Jh||r===$h)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Jh)return c===$t?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===$h)return c===$t?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Kh||r===jh||r===Qh||r===eu||r===tu||r===nu||r===iu||r===su||r===ru||r===au||r===ou||r===cu||r===lu||r===hu)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Kh)return c===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===jh)return c===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Qh)return c===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===eu)return c===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===tu)return c===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===nu)return c===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===iu)return c===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===su)return c===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ru)return c===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===au)return c===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ou)return c===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===cu)return c===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===lu)return c===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===hu)return c===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ic||r===uu||r===du)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===Ic)return c===$t?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===uu)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===du)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===ap||r===fu||r===pu||r===mu)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===Ic)return o.COMPRESSED_RED_RGTC1_EXT;if(r===fu)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===pu)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===mu)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ps?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var Il=class extends Dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Ge=class extends hn{constructor(){super(),this.isGroup=!0,this.type="Group"}},ox={type:"move"},Vr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ge,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ge,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ge,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let v of e.hand.values()){let p=t.getJointPose(v,n),f=this._getHandJoint(l,v);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,g=.005;l.inputState.pinching&&d>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ox)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ge;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Ll=class extends Qi{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,m=null,g=null,v=t.getContextAttributes(),p=null,f=null,S=[],y=[],b=new xe,F=null,D=new Dn;D.layers.enable(1),D.viewport=new tn;let U=new Dn;U.layers.enable(2),U.viewport=new tn;let q=[D,U],E=new Il;E.layers.enable(1),E.layers.enable(2);let R=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let me=S[K];return me===void 0&&(me=new Vr,S[K]=me),me.getTargetRaySpace()},this.getControllerGrip=function(K){let me=S[K];return me===void 0&&(me=new Vr,S[K]=me),me.getGripSpace()},this.getHand=function(K){let me=S[K];return me===void 0&&(me=new Vr,S[K]=me),me.getHandSpace()};function Q(K){let me=y.indexOf(K.inputSource);if(me===-1)return;let Ce=S[me];Ce!==void 0&&(Ce.update(K.inputSource,K.frame,l||a),Ce.dispatchEvent({type:K.type,data:K.inputSource}))}function O(){s.removeEventListener("select",Q),s.removeEventListener("selectstart",Q),s.removeEventListener("selectend",Q),s.removeEventListener("squeeze",Q),s.removeEventListener("squeezestart",Q),s.removeEventListener("squeezeend",Q),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",_);for(let K=0;K<S.length;K++){let me=y[K];me!==null&&(y[K]=null,S[K].disconnect(me))}R=null,X=null,e.setRenderTarget(p),m=null,d=null,u=null,s=null,f=null,Te.stop(),n.isPresenting=!1,e.setPixelRatio(F),e.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",Q),s.addEventListener("selectstart",Q),s.addEventListener("selectend",Q),s.addEventListener("squeeze",Q),s.addEventListener("squeezestart",Q),s.addEventListener("squeezeend",Q),s.addEventListener("end",O),s.addEventListener("inputsourceschange",_),v.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(b),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let me={antialias:s.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,me),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),f=new Di(m.framebufferWidth,m.framebufferHeight,{format:gi,type:$i,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let me=null,Ce=null,ze=null;v.depth&&(ze=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=v.stencil?ur:ms,Ce=v.stencil?ps:Xi);let Oe={colorFormat:t.RGBA8,depthFormat:ze,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(Oe),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),f=new Di(d.textureWidth,d.textureHeight,{format:gi,type:$i,depthTexture:new Do(d.textureWidth,d.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});let it=e.properties.get(f);it.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Te.setContext(s),Te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function _(K){for(let me=0;me<K.removed.length;me++){let Ce=K.removed[me],ze=y.indexOf(Ce);ze>=0&&(y[ze]=null,S[ze].disconnect(Ce))}for(let me=0;me<K.added.length;me++){let Ce=K.added[me],ze=y.indexOf(Ce);if(ze===-1){for(let it=0;it<S.length;it++)if(it>=y.length){y.push(Ce),ze=it;break}else if(y[it]===null){y[it]=Ce,ze=it;break}if(ze===-1)break}let Oe=S[ze];Oe&&Oe.connect(Ce)}}let V=new I,j=new I;function de(K,me,Ce){V.setFromMatrixPosition(me.matrixWorld),j.setFromMatrixPosition(Ce.matrixWorld);let ze=V.distanceTo(j),Oe=me.projectionMatrix.elements,it=Ce.projectionMatrix.elements,rt=Oe[14]/(Oe[10]-1),ke=Oe[14]/(Oe[10]+1),ct=(Oe[9]+1)/Oe[5],N=(Oe[9]-1)/Oe[5],ve=(Oe[8]-1)/Oe[0],ne=(it[8]+1)/it[0],ye=rt*ve,ce=rt*ne,Ze=ze/(-ve+ne),Pe=Ze*-ve;me.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Pe),K.translateZ(Ze),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert();let T=rt+Ze,M=ke+Ze,W=ye-Pe,pe=ce+(ze-Pe),ee=ct*ke/M*T,L=N*ke/M*T;K.projectionMatrix.makePerspective(W,pe,ee,L,T,M),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}function J(K,me){me===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(me.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;E.near=U.near=D.near=K.near,E.far=U.far=D.far=K.far,(R!==E.near||X!==E.far)&&(s.updateRenderState({depthNear:E.near,depthFar:E.far}),R=E.near,X=E.far);let me=K.parent,Ce=E.cameras;J(E,me);for(let ze=0;ze<Ce.length;ze++)J(Ce[ze],me);Ce.length===2?de(E,D,U):E.projectionMatrix.copy(D.projectionMatrix),ie(K,E,me)};function ie(K,me,Ce){Ce===null?K.matrix.copy(me.matrixWorld):(K.matrix.copy(Ce.matrixWorld),K.matrix.invert(),K.matrix.multiply(me.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(me.projectionMatrix),K.projectionMatrixInverse.copy(me.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=_l*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(K){c=K,d!==null&&(d.fixedFoveation=K),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=K)};let _e=null;function fe(K,me){if(h=me.getViewerPose(l||a),g=me,h!==null){let Ce=h.views;m!==null&&(e.setRenderTargetFramebuffer(f,m.framebuffer),e.setRenderTarget(f));let ze=!1;Ce.length!==E.cameras.length&&(E.cameras.length=0,ze=!0);for(let Oe=0;Oe<Ce.length;Oe++){let it=Ce[Oe],rt=null;if(m!==null)rt=m.getViewport(it);else{let ct=u.getViewSubImage(d,it);rt=ct.viewport,Oe===0&&(e.setRenderTargetTextures(f,ct.colorTexture,d.ignoreDepthValues?void 0:ct.depthStencilTexture),e.setRenderTarget(f))}let ke=q[Oe];ke===void 0&&(ke=new Dn,ke.layers.enable(Oe),ke.viewport=new tn,q[Oe]=ke),ke.matrix.fromArray(it.transform.matrix),ke.matrix.decompose(ke.position,ke.quaternion,ke.scale),ke.projectionMatrix.fromArray(it.projectionMatrix),ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(),ke.viewport.set(rt.x,rt.y,rt.width,rt.height),Oe===0&&(E.matrix.copy(ke.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),ze===!0&&E.cameras.push(ke)}}for(let Ce=0;Ce<S.length;Ce++){let ze=y[Ce],Oe=S[Ce];ze!==null&&Oe!==void 0&&Oe.update(ze,me,l||a)}_e&&_e(K,me),me.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:me}),g=null}let Te=new Hd;Te.setAnimationLoop(fe),this.setAnimationLoop=function(K){_e=K},this.dispose=function(){}}};function cx(i,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,zd(i)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function s(p,f,S,y,b){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(p,f):f.isMeshToonMaterial?(r(p,f),u(p,f)):f.isMeshPhongMaterial?(r(p,f),h(p,f)):f.isMeshStandardMaterial?(r(p,f),d(p,f),f.isMeshPhysicalMaterial&&m(p,f,b)):f.isMeshMatcapMaterial?(r(p,f),g(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),v(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?c(p,f,S,y):f.isSpriteMaterial?l(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Tn&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Tn&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let S=e.get(f).envMap;if(S&&(p.envMap.value=S,p.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;let y=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*y,t(f.lightMap,p.lightMapTransform)}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function c(p,f,S,y){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*S,p.scale.value=y*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function l(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function h(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function u(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),e.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,S){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Tn&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function v(p,f){let S=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function lx(i,e,t,n){let s={},r={},a=[],o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(S,y){let b=y.program;n.uniformBlockBinding(S,b)}function l(S,y){let b=s[S.id];b===void 0&&(g(S),b=h(S),s[S.id]=b,S.addEventListener("dispose",p));let F=y.program;n.updateUBOMapping(S,F);let D=e.render.frame;r[S.id]!==D&&(d(S),r[S.id]=D)}function h(S){let y=u();S.__bindingPointIndex=y;let b=i.createBuffer(),F=S.__size,D=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,F,D),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,b),b}function u(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){let y=s[S.id],b=S.uniforms,F=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let D=0,U=b.length;D<U;D++){let q=Array.isArray(b[D])?b[D]:[b[D]];for(let E=0,R=q.length;E<R;E++){let X=q[E];if(m(X,D,E,F)===!0){let Q=X.__offset,O=Array.isArray(X.value)?X.value:[X.value],_=0;for(let V=0;V<O.length;V++){let j=O[V],de=v(j);typeof j=="number"||typeof j=="boolean"?(X.__data[0]=j,i.bufferSubData(i.UNIFORM_BUFFER,Q+_,X.__data)):j.isMatrix3?(X.__data[0]=j.elements[0],X.__data[1]=j.elements[1],X.__data[2]=j.elements[2],X.__data[3]=0,X.__data[4]=j.elements[3],X.__data[5]=j.elements[4],X.__data[6]=j.elements[5],X.__data[7]=0,X.__data[8]=j.elements[6],X.__data[9]=j.elements[7],X.__data[10]=j.elements[8],X.__data[11]=0):(j.toArray(X.__data,_),_+=de.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Q,X.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(S,y,b,F){let D=S.value,U=y+"_"+b;if(F[U]===void 0)return typeof D=="number"||typeof D=="boolean"?F[U]=D:F[U]=D.clone(),!0;{let q=F[U];if(typeof D=="number"||typeof D=="boolean"){if(q!==D)return F[U]=D,!0}else if(q.equals(D)===!1)return q.copy(D),!0}return!1}function g(S){let y=S.uniforms,b=0,F=16;for(let U=0,q=y.length;U<q;U++){let E=Array.isArray(y[U])?y[U]:[y[U]];for(let R=0,X=E.length;R<X;R++){let Q=E[R],O=Array.isArray(Q.value)?Q.value:[Q.value];for(let _=0,V=O.length;_<V;_++){let j=O[_],de=v(j),J=b%F;J!==0&&F-J<de.boundary&&(b+=F-J),Q.__data=new Float32Array(de.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=b,b+=de.storage}}}let D=b%F;return D>0&&(b+=F-D),S.__size=b,S.__cache={},this}function v(S){let y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),y}function p(S){let y=S.target;y.removeEventListener("dispose",p);let b=a.indexOf(y.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function f(){for(let S in s)i.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:c,update:l,dispose:f}}var Kr=class{constructor(e={}){let{canvas:t=xp(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;let m=new Uint32Array(4),g=new Int32Array(4),v=null,p=null,f=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ln,this._useLegacyLights=!1,this.toneMapping=Ji,this.toneMappingExposure=1;let y=this,b=!1,F=0,D=0,U=null,q=-1,E=null,R=new tn,X=new tn,Q=null,O=new Ye(0),_=0,V=t.width,j=t.height,de=1,J=null,ie=null,_e=new tn(0,0,V,j),fe=new tn(0,0,V,j),Te=!1,K=new $r,me=!1,Ce=!1,ze=null,Oe=new qt,it=new xe,rt=new I,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ct(){return U===null?de:1}let N=n;function ve(A,G){for(let $=0;$<A.length;$++){let Z=A[$],H=t.getContext(Z,G);if(H!==null)return H}return null}try{let A={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",Se,!1),t.addEventListener("webglcontextrestored",B,!1),t.addEventListener("webglcontextcreationerror",Ae,!1),N===null){let G=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&G.shift(),N=ve(G,A),N===null)throw ve(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&N instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ne,ye,ce,Ze,Pe,T,M,W,pe,ee,L,Ue,Me,P,ae,He,ge,At,mt,tt,$e,Be,ft,It;function Yt(){ne=new R0(N),ye=new E0(N,ne,e),ne.init(ye),Be=new ax(N,ne,ye),ce=new sx(N,ne,ye),Ze=new I0(N),Pe=new q_,T=new rx(N,ne,ce,Pe,ye,Be,Ze),M=new b0(y),W=new A0(y),pe=new zp(N,ye),ft=new v0(N,ne,pe,ye),ee=new C0(N,pe,Ze,ft),L=new N0(N,ee,pe,Ze),mt=new U0(N,ye,T),He=new S0(Pe),Ue=new X_(y,M,W,ne,ye,ft,He),Me=new cx(y,Pe),P=new Z_,ae=new ex(ne,ye),At=new y0(y,M,W,ce,L,d,c),ge=new ix(y,L,ye),It=new lx(N,Ze,ye,ce),tt=new M0(N,ne,Ze,ye),$e=new P0(N,ne,Ze,ye),Ze.programs=Ue.programs,y.capabilities=ye,y.extensions=ne,y.properties=Pe,y.renderLists=P,y.shadowMap=ge,y.state=ce,y.info=Ze}Yt();let gt=new Ll(y,N);this.xr=gt,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let A=ne.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=ne.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return de},this.setPixelRatio=function(A){A!==void 0&&(de=A,this.setSize(V,j,!1))},this.getSize=function(A){return A.set(V,j)},this.setSize=function(A,G,$=!0){if(gt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=A,j=G,t.width=Math.floor(A*de),t.height=Math.floor(G*de),$===!0&&(t.style.width=A+"px",t.style.height=G+"px"),this.setViewport(0,0,A,G)},this.getDrawingBufferSize=function(A){return A.set(V*de,j*de).floor()},this.setDrawingBufferSize=function(A,G,$){V=A,j=G,de=$,t.width=Math.floor(A*$),t.height=Math.floor(G*$),this.setViewport(0,0,A,G)},this.getCurrentViewport=function(A){return A.copy(R)},this.getViewport=function(A){return A.copy(_e)},this.setViewport=function(A,G,$,Z){A.isVector4?_e.set(A.x,A.y,A.z,A.w):_e.set(A,G,$,Z),ce.viewport(R.copy(_e).multiplyScalar(de).floor())},this.getScissor=function(A){return A.copy(fe)},this.setScissor=function(A,G,$,Z){A.isVector4?fe.set(A.x,A.y,A.z,A.w):fe.set(A,G,$,Z),ce.scissor(X.copy(fe).multiplyScalar(de).floor())},this.getScissorTest=function(){return Te},this.setScissorTest=function(A){ce.setScissorTest(Te=A)},this.setOpaqueSort=function(A){J=A},this.setTransparentSort=function(A){ie=A},this.getClearColor=function(A){return A.copy(At.getClearColor())},this.setClearColor=function(){At.setClearColor.apply(At,arguments)},this.getClearAlpha=function(){return At.getClearAlpha()},this.setClearAlpha=function(){At.setClearAlpha.apply(At,arguments)},this.clear=function(A=!0,G=!0,$=!0){let Z=0;if(A){let H=!1;if(U!==null){let Le=U.texture.format;H=Le===Ld||Le===Id||Le===Pd}if(H){let Le=U.texture.type,Ve=Le===$i||Le===Xi||Le===rh||Le===ps||Le===Rd||Le===Cd,je=At.getClearColor(),Qe=At.getClearAlpha(),pt=je.r,lt=je.g,ut=je.b;Ve?(m[0]=pt,m[1]=lt,m[2]=ut,m[3]=Qe,N.clearBufferuiv(N.COLOR,0,m)):(g[0]=pt,g[1]=lt,g[2]=ut,g[3]=Qe,N.clearBufferiv(N.COLOR,0,g))}else Z|=N.COLOR_BUFFER_BIT}G&&(Z|=N.DEPTH_BUFFER_BIT),$&&(Z|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Se,!1),t.removeEventListener("webglcontextrestored",B,!1),t.removeEventListener("webglcontextcreationerror",Ae,!1),P.dispose(),ae.dispose(),Pe.dispose(),M.dispose(),W.dispose(),L.dispose(),ft.dispose(),It.dispose(),Ue.dispose(),gt.dispose(),gt.removeEventListener("sessionstart",sn),gt.removeEventListener("sessionend",Lt),ze&&(ze.dispose(),ze=null),un.stop()};function Se(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function B(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;let A=Ze.autoReset,G=ge.enabled,$=ge.autoUpdate,Z=ge.needsUpdate,H=ge.type;Yt(),Ze.autoReset=A,ge.enabled=G,ge.autoUpdate=$,ge.needsUpdate=Z,ge.type=H}function Ae(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Re(A){let G=A.target;G.removeEventListener("dispose",Re),Ke(G)}function Ke(A){qe(A),Pe.remove(A)}function qe(A){let G=Pe.get(A).programs;G!==void 0&&(G.forEach(function($){Ue.releaseProgram($)}),A.isShaderMaterial&&Ue.releaseShaderCache(A))}this.renderBufferDirect=function(A,G,$,Z,H,Le){G===null&&(G=ke);let Ve=H.isMesh&&H.matrixWorld.determinant()<0,je=ma(A,G,$,Z,H);ce.setMaterial(Z,Ve);let Qe=$.index,pt=1;if(Z.wireframe===!0){if(Qe=ee.getWireframeAttribute($),Qe===void 0)return;pt=2}let lt=$.drawRange,ut=$.attributes.position,jt=lt.start*pt,Sn=(lt.start+lt.count)*pt;Le!==null&&(jt=Math.max(jt,Le.start*pt),Sn=Math.min(Sn,(Le.start+Le.count)*pt)),Qe!==null?(jt=Math.max(jt,0),Sn=Math.min(Sn,Qe.count)):ut!=null&&(jt=Math.max(jt,0),Sn=Math.min(Sn,ut.count));let Tt=Sn-jt;if(Tt<0||Tt===1/0)return;ft.setup(H,Z,je,$,Qe);let mn,Bt=tt;if(Qe!==null&&(mn=pe.get(Qe),Bt=$e,Bt.setIndex(mn)),H.isMesh)Z.wireframe===!0?(ce.setLineWidth(Z.wireframeLinewidth*ct()),Bt.setMode(N.LINES)):Bt.setMode(N.TRIANGLES);else if(H.isLine){let dt=Z.linewidth;dt===void 0&&(dt=1),ce.setLineWidth(dt*ct()),H.isLineSegments?Bt.setMode(N.LINES):H.isLineLoop?Bt.setMode(N.LINE_LOOP):Bt.setMode(N.LINE_STRIP)}else H.isPoints?Bt.setMode(N.POINTS):H.isSprite&&Bt.setMode(N.TRIANGLES);if(H.isBatchedMesh)Bt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else if(H.isInstancedMesh)Bt.renderInstances(jt,Tt,H.count);else if($.isInstancedBufferGeometry){let dt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Vn=Math.min($.instanceCount,dt);Bt.renderInstances(jt,Tt,Vn)}else Bt.render(jt,Tt)};function Ut(A,G,$){A.transparent===!0&&A.side===bn&&A.forceSinglePass===!1?(A.side=Tn,A.needsUpdate=!0,Mi(A,G,$),A.side=ji,A.needsUpdate=!0,Mi(A,G,$),A.side=bn):Mi(A,G,$)}this.compile=function(A,G,$=null){$===null&&($=A),p=ae.get($),p.init(),S.push(p),$.traverseVisible(function(H){H.isLight&&H.layers.test(G.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),A!==$&&A.traverseVisible(function(H){H.isLight&&H.layers.test(G.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),p.setupLights(y._useLegacyLights);let Z=new Set;return A.traverse(function(H){let Le=H.material;if(Le)if(Array.isArray(Le))for(let Ve=0;Ve<Le.length;Ve++){let je=Le[Ve];Ut(je,$,H),Z.add(je)}else Ut(Le,$,H),Z.add(Le)}),S.pop(),p=null,Z},this.compileAsync=function(A,G,$=null){let Z=this.compile(A,G,$);return new Promise(H=>{function Le(){if(Z.forEach(function(Ve){Pe.get(Ve).currentProgram.isReady()&&Z.delete(Ve)}),Z.size===0){H(A);return}setTimeout(Le,10)}ne.get("KHR_parallel_shader_compile")!==null?Le():setTimeout(Le,10)})};let Ft=null;function nn(A){Ft&&Ft(A)}function sn(){un.stop()}function Lt(){un.start()}let un=new Hd;un.setAnimationLoop(nn),typeof self<"u"&&un.setContext(self),this.setAnimationLoop=function(A){Ft=A,gt.setAnimationLoop(A),A===null?un.stop():un.start()},gt.addEventListener("sessionstart",sn),gt.addEventListener("sessionend",Lt),this.render=function(A,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),gt.enabled===!0&&gt.isPresenting===!0&&(gt.cameraAutoUpdate===!0&&gt.updateCamera(G),G=gt.getCamera()),A.isScene===!0&&A.onBeforeRender(y,A,G,U),p=ae.get(A,S.length),p.init(),S.push(p),Oe.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),K.setFromProjectionMatrix(Oe),Ce=this.localClippingEnabled,me=He.init(this.clippingPlanes,Ce),v=P.get(A,f.length),v.init(),f.push(v),Rn(A,G,0,y.sortObjects),v.finish(),y.sortObjects===!0&&v.sort(J,ie),this.info.render.frame++,me===!0&&He.beginShadows();let $=p.state.shadowsArray;if(ge.render($,A,G),me===!0&&He.endShadows(),this.info.autoReset===!0&&this.info.reset(),At.render(v,A),p.setupLights(y._useLegacyLights),G.isArrayCamera){let Z=G.cameras;for(let H=0,Le=Z.length;H<Le;H++){let Ve=Z[H];Mr(v,A,Ve,Ve.viewport)}}else Mr(v,A,G);U!==null&&(T.updateMultisampleRenderTarget(U),T.updateRenderTargetMipmap(U)),A.isScene===!0&&A.onAfterRender(y,A,G),ft.resetDefaultState(),q=-1,E=null,S.pop(),S.length>0?p=S[S.length-1]:p=null,f.pop(),f.length>0?v=f[f.length-1]:v=null};function Rn(A,G,$,Z){if(A.visible===!1)return;if(A.layers.test(G.layers)){if(A.isGroup)$=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(G);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||K.intersectsSprite(A)){Z&&rt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Oe);let Ve=L.update(A),je=A.material;je.visible&&v.push(A,Ve,je,$,rt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||K.intersectsObject(A))){let Ve=L.update(A),je=A.material;if(Z&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),rt.copy(A.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),rt.copy(Ve.boundingSphere.center)),rt.applyMatrix4(A.matrixWorld).applyMatrix4(Oe)),Array.isArray(je)){let Qe=Ve.groups;for(let pt=0,lt=Qe.length;pt<lt;pt++){let ut=Qe[pt],jt=je[ut.materialIndex];jt&&jt.visible&&v.push(A,Ve,jt,$,rt.z,ut)}}else je.visible&&v.push(A,Ve,je,$,rt.z,null)}}let Le=A.children;for(let Ve=0,je=Le.length;Ve<je;Ve++)Rn(Le[Ve],G,$,Z)}function Mr(A,G,$,Z){let H=A.opaque,Le=A.transmissive,Ve=A.transparent;p.setupLightsView($),me===!0&&He.setGlobalState(y.clippingPlanes,$),Le.length>0&&fa(H,Le,G,$),Z&&ce.viewport(R.copy(Z)),H.length>0&&Es(H,G,$),Le.length>0&&Es(Le,G,$),Ve.length>0&&Es(Ve,G,$),ce.buffers.depth.setTest(!0),ce.buffers.depth.setMask(!0),ce.buffers.color.setMask(!0),ce.setPolygonOffset(!1)}function fa(A,G,$,Z){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;let Le=ye.isWebGL2;ze===null&&(ze=new Di(1,1,{generateMipmaps:!0,type:ne.has("EXT_color_buffer_half_float")?Yr:$i,minFilter:qr,samples:Le?4:0})),y.getDrawingBufferSize(it),Le?ze.setSize(it.x,it.y):ze.setSize(xl(it.x),xl(it.y));let Ve=y.getRenderTarget();y.setRenderTarget(ze),y.getClearColor(O),_=y.getClearAlpha(),_<1&&y.setClearColor(16777215,.5),y.clear();let je=y.toneMapping;y.toneMapping=Ji,Es(A,$,Z),T.updateMultisampleRenderTarget(ze),T.updateRenderTargetMipmap(ze);let Qe=!1;for(let pt=0,lt=G.length;pt<lt;pt++){let ut=G[pt],jt=ut.object,Sn=ut.geometry,Tt=ut.material,mn=ut.group;if(Tt.side===bn&&jt.layers.test(Z.layers)){let Bt=Tt.side;Tt.side=Tn,Tt.needsUpdate=!0,Ss(jt,$,Z,Sn,Tt,mn),Tt.side=Bt,Tt.needsUpdate=!0,Qe=!0}}Qe===!0&&(T.updateMultisampleRenderTarget(ze),T.updateRenderTargetMipmap(ze)),y.setRenderTarget(Ve),y.setClearColor(O,_),y.toneMapping=je}function Es(A,G,$){let Z=G.isScene===!0?G.overrideMaterial:null;for(let H=0,Le=A.length;H<Le;H++){let Ve=A[H],je=Ve.object,Qe=Ve.geometry,pt=Z===null?Ve.material:Z,lt=Ve.group;je.layers.test($.layers)&&Ss(je,G,$,Qe,pt,lt)}}function Ss(A,G,$,Z,H,Le){A.onBeforeRender(y,G,$,Z,H,Le),A.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),H.onBeforeRender(y,G,$,Z,A,Le),H.transparent===!0&&H.side===bn&&H.forceSinglePass===!1?(H.side=Tn,H.needsUpdate=!0,y.renderBufferDirect($,G,Z,H,A,Le),H.side=ji,H.needsUpdate=!0,y.renderBufferDirect($,G,Z,H,A,Le),H.side=bn):y.renderBufferDirect($,G,Z,H,A,Le),A.onAfterRender(y,G,$,Z,H,Le)}function Mi(A,G,$){G.isScene!==!0&&(G=ke);let Z=Pe.get(A),H=p.state.lights,Le=p.state.shadowsArray,Ve=H.state.version,je=Ue.getParameters(A,H.state,Le,G,$),Qe=Ue.getProgramCacheKey(je),pt=Z.programs;Z.environment=A.isMeshStandardMaterial?G.environment:null,Z.fog=G.fog,Z.envMap=(A.isMeshStandardMaterial?W:M).get(A.envMap||Z.environment),pt===void 0&&(A.addEventListener("dispose",Re),pt=new Map,Z.programs=pt);let lt=pt.get(Qe);if(lt!==void 0){if(Z.currentProgram===lt&&Z.lightsStateVersion===Ve)return pa(A,je),lt}else je.uniforms=Ue.getUniforms(A),A.onBuild($,je,y),A.onBeforeCompile(je,y),lt=Ue.acquireProgram(je,Qe),pt.set(Qe,lt),Z.uniforms=je.uniforms;let ut=Z.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(ut.clippingPlanes=He.uniform),pa(A,je),Z.needsLights=ga(A),Z.lightsStateVersion=Ve,Z.needsLights&&(ut.ambientLightColor.value=H.state.ambient,ut.lightProbe.value=H.state.probe,ut.directionalLights.value=H.state.directional,ut.directionalLightShadows.value=H.state.directionalShadow,ut.spotLights.value=H.state.spot,ut.spotLightShadows.value=H.state.spotShadow,ut.rectAreaLights.value=H.state.rectArea,ut.ltc_1.value=H.state.rectAreaLTC1,ut.ltc_2.value=H.state.rectAreaLTC2,ut.pointLights.value=H.state.point,ut.pointLightShadows.value=H.state.pointShadow,ut.hemisphereLights.value=H.state.hemi,ut.directionalShadowMap.value=H.state.directionalShadowMap,ut.directionalShadowMatrix.value=H.state.directionalShadowMatrix,ut.spotShadowMap.value=H.state.spotShadowMap,ut.spotLightMatrix.value=H.state.spotLightMatrix,ut.spotLightMap.value=H.state.spotLightMap,ut.pointShadowMap.value=H.state.pointShadowMap,ut.pointShadowMatrix.value=H.state.pointShadowMatrix),Z.currentProgram=lt,Z.uniformsList=null,lt}function Fi(A){if(A.uniformsList===null){let G=A.currentProgram.getUniforms();A.uniformsList=cr.seqWithValue(G.seq,A.uniforms)}return A.uniformsList}function pa(A,G){let $=Pe.get(A);$.outputColorSpace=G.outputColorSpace,$.batching=G.batching,$.instancing=G.instancing,$.instancingColor=G.instancingColor,$.skinning=G.skinning,$.morphTargets=G.morphTargets,$.morphNormals=G.morphNormals,$.morphColors=G.morphColors,$.morphTargetsCount=G.morphTargetsCount,$.numClippingPlanes=G.numClippingPlanes,$.numIntersection=G.numClipIntersection,$.vertexAlphas=G.vertexAlphas,$.vertexTangents=G.vertexTangents,$.toneMapping=G.toneMapping}function ma(A,G,$,Z,H){G.isScene!==!0&&(G=ke),T.resetTextureUnits();let Le=G.fog,Ve=Z.isMeshStandardMaterial?G.environment:null,je=U===null?y.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Li,Qe=(Z.isMeshStandardMaterial?W:M).get(Z.envMap||Ve),pt=Z.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,lt=!!$.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),ut=!!$.morphAttributes.position,jt=!!$.morphAttributes.normal,Sn=!!$.morphAttributes.color,Tt=Ji;Z.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Tt=y.toneMapping);let mn=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Bt=mn!==void 0?mn.length:0,dt=Pe.get(Z),Vn=p.state.lights;if(me===!0&&(Ce===!0||A!==E)){let Xn=A===E&&Z.id===q;He.setState(Z,A,Xn)}let zt=!1;Z.version===dt.__version?(dt.needsLights&&dt.lightsStateVersion!==Vn.state.version||dt.outputColorSpace!==je||H.isBatchedMesh&&dt.batching===!1||!H.isBatchedMesh&&dt.batching===!0||H.isInstancedMesh&&dt.instancing===!1||!H.isInstancedMesh&&dt.instancing===!0||H.isSkinnedMesh&&dt.skinning===!1||!H.isSkinnedMesh&&dt.skinning===!0||H.isInstancedMesh&&dt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&dt.instancingColor===!1&&H.instanceColor!==null||dt.envMap!==Qe||Z.fog===!0&&dt.fog!==Le||dt.numClippingPlanes!==void 0&&(dt.numClippingPlanes!==He.numPlanes||dt.numIntersection!==He.numIntersection)||dt.vertexAlphas!==pt||dt.vertexTangents!==lt||dt.morphTargets!==ut||dt.morphNormals!==jt||dt.morphColors!==Sn||dt.toneMapping!==Tt||ye.isWebGL2===!0&&dt.morphTargetsCount!==Bt)&&(zt=!0):(zt=!0,dt.__version=Z.version);let dn=dt.currentProgram;zt===!0&&(dn=Mi(Z,G,H));let ic=!1,Qn=!1,ns=!1,fn=dn.getUniforms(),li=dt.uniforms;if(ce.useProgram(dn.program)&&(ic=!0,Qn=!0,ns=!0),Z.id!==q&&(q=Z.id,Qn=!0),ic||E!==A){fn.setValue(N,"projectionMatrix",A.projectionMatrix),fn.setValue(N,"viewMatrix",A.matrixWorldInverse);let Xn=fn.map.cameraPosition;Xn!==void 0&&Xn.setValue(N,rt.setFromMatrixPosition(A.matrixWorld)),ye.logarithmicDepthBuffer&&fn.setValue(N,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&fn.setValue(N,"isOrthographic",A.isOrthographicCamera===!0),E!==A&&(E=A,Qn=!0,ns=!0)}if(H.isSkinnedMesh){fn.setOptional(N,H,"bindMatrix"),fn.setOptional(N,H,"bindMatrixInverse");let Xn=H.skeleton;Xn&&(ye.floatVertexTextures?(Xn.boneTexture===null&&Xn.computeBoneTexture(),fn.setValue(N,"boneTexture",Xn.boneTexture,T)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}H.isBatchedMesh&&(fn.setOptional(N,H,"batchingTexture"),fn.setValue(N,"batchingTexture",H._matricesTexture,T));let Wn=$.morphAttributes;if((Wn.position!==void 0||Wn.normal!==void 0||Wn.color!==void 0&&ye.isWebGL2===!0)&&mt.update(H,$,dn),(Qn||dt.receiveShadow!==H.receiveShadow)&&(dt.receiveShadow=H.receiveShadow,fn.setValue(N,"receiveShadow",H.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(li.envMap.value=Qe,li.flipEnvMap.value=Qe.isCubeTexture&&Qe.isRenderTargetTexture===!1?-1:1),Qn&&(fn.setValue(N,"toneMappingExposure",y.toneMappingExposure),dt.needsLights&&Er(li,ns),Le&&Z.fog===!0&&Me.refreshFogUniforms(li,Le),Me.refreshMaterialUniforms(li,Z,de,j,ze),cr.upload(N,Fi(dt),li,T)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(cr.upload(N,Fi(dt),li,T),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&fn.setValue(N,"center",H.center),fn.setValue(N,"modelViewMatrix",H.modelViewMatrix),fn.setValue(N,"normalMatrix",H.normalMatrix),fn.setValue(N,"modelMatrix",H.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){let Xn=Z.uniformsGroups;for(let bs=0,is=Xn.length;bs<is;bs++)if(ye.isWebGL2){let Gt=Xn[bs];It.update(Gt,dn),It.bind(Gt,dn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return dn}function Er(A,G){A.ambientLightColor.needsUpdate=G,A.lightProbe.needsUpdate=G,A.directionalLights.needsUpdate=G,A.directionalLightShadows.needsUpdate=G,A.pointLights.needsUpdate=G,A.pointLightShadows.needsUpdate=G,A.spotLights.needsUpdate=G,A.spotLightShadows.needsUpdate=G,A.rectAreaLights.needsUpdate=G,A.hemisphereLights.needsUpdate=G}function ga(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(A,G,$){Pe.get(A.texture).__webglTexture=G,Pe.get(A.depthTexture).__webglTexture=$;let Z=Pe.get(A);Z.__hasExternalTextures=!0,Z.__hasExternalTextures&&(Z.__autoAllocateDepthBuffer=$===void 0,Z.__autoAllocateDepthBuffer||ne.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,G){let $=Pe.get(A);$.__webglFramebuffer=G,$.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(A,G=0,$=0){U=A,F=G,D=$;let Z=!0,H=null,Le=!1,Ve=!1;if(A){let Qe=Pe.get(A);Qe.__useDefaultFramebuffer!==void 0?(ce.bindFramebuffer(N.FRAMEBUFFER,null),Z=!1):Qe.__webglFramebuffer===void 0?T.setupRenderTarget(A):Qe.__hasExternalTextures&&T.rebindTextures(A,Pe.get(A.texture).__webglTexture,Pe.get(A.depthTexture).__webglTexture);let pt=A.texture;(pt.isData3DTexture||pt.isDataArrayTexture||pt.isCompressedArrayTexture)&&(Ve=!0);let lt=Pe.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(lt[G])?H=lt[G][$]:H=lt[G],Le=!0):ye.isWebGL2&&A.samples>0&&T.useMultisampledRTT(A)===!1?H=Pe.get(A).__webglMultisampledFramebuffer:Array.isArray(lt)?H=lt[$]:H=lt,R.copy(A.viewport),X.copy(A.scissor),Q=A.scissorTest}else R.copy(_e).multiplyScalar(de).floor(),X.copy(fe).multiplyScalar(de).floor(),Q=Te;if(ce.bindFramebuffer(N.FRAMEBUFFER,H)&&ye.drawBuffers&&Z&&ce.drawBuffers(A,H),ce.viewport(R),ce.scissor(X),ce.setScissorTest(Q),Le){let Qe=Pe.get(A.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+G,Qe.__webglTexture,$)}else if(Ve){let Qe=Pe.get(A.texture),pt=G||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Qe.__webglTexture,$||0,pt)}q=-1},this.readRenderTargetPixels=function(A,G,$,Z,H,Le,Ve){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let je=Pe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ve!==void 0&&(je=je[Ve]),je){ce.bindFramebuffer(N.FRAMEBUFFER,je);try{let Qe=A.texture,pt=Qe.format,lt=Qe.type;if(pt!==gi&&Be.convert(pt)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let ut=lt===Yr&&(ne.has("EXT_color_buffer_half_float")||ye.isWebGL2&&ne.has("EXT_color_buffer_float"));if(lt!==$i&&Be.convert(lt)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_TYPE)&&!(lt===qi&&(ye.isWebGL2||ne.has("OES_texture_float")||ne.has("WEBGL_color_buffer_float")))&&!ut){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=A.width-Z&&$>=0&&$<=A.height-H&&N.readPixels(G,$,Z,H,Be.convert(pt),Be.convert(lt),Le)}finally{let Qe=U!==null?Pe.get(U).__webglFramebuffer:null;ce.bindFramebuffer(N.FRAMEBUFFER,Qe)}}},this.copyFramebufferToTexture=function(A,G,$=0){let Z=Math.pow(2,-$),H=Math.floor(G.image.width*Z),Le=Math.floor(G.image.height*Z);T.setTexture2D(G,0),N.copyTexSubImage2D(N.TEXTURE_2D,$,0,0,A.x,A.y,H,Le),ce.unbindTexture()},this.copyTextureToTexture=function(A,G,$,Z=0){let H=G.image.width,Le=G.image.height,Ve=Be.convert($.format),je=Be.convert($.type);T.setTexture2D($,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,$.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,$.unpackAlignment),G.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,Z,A.x,A.y,H,Le,Ve,je,G.image.data):G.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,Z,A.x,A.y,G.mipmaps[0].width,G.mipmaps[0].height,Ve,G.mipmaps[0].data):N.texSubImage2D(N.TEXTURE_2D,Z,A.x,A.y,Ve,je,G.image),Z===0&&$.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),ce.unbindTexture()},this.copyTextureToTexture3D=function(A,G,$,Z,H=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Le=A.max.x-A.min.x+1,Ve=A.max.y-A.min.y+1,je=A.max.z-A.min.z+1,Qe=Be.convert(Z.format),pt=Be.convert(Z.type),lt;if(Z.isData3DTexture)T.setTexture3D(Z,0),lt=N.TEXTURE_3D;else if(Z.isDataArrayTexture||Z.isCompressedArrayTexture)T.setTexture2DArray(Z,0),lt=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,Z.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,Z.unpackAlignment);let ut=N.getParameter(N.UNPACK_ROW_LENGTH),jt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Sn=N.getParameter(N.UNPACK_SKIP_PIXELS),Tt=N.getParameter(N.UNPACK_SKIP_ROWS),mn=N.getParameter(N.UNPACK_SKIP_IMAGES),Bt=$.isCompressedTexture?$.mipmaps[H]:$.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,Bt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Bt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,A.min.x),N.pixelStorei(N.UNPACK_SKIP_ROWS,A.min.y),N.pixelStorei(N.UNPACK_SKIP_IMAGES,A.min.z),$.isDataTexture||$.isData3DTexture?N.texSubImage3D(lt,H,G.x,G.y,G.z,Le,Ve,je,Qe,pt,Bt.data):$.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),N.compressedTexSubImage3D(lt,H,G.x,G.y,G.z,Le,Ve,je,Qe,Bt.data)):N.texSubImage3D(lt,H,G.x,G.y,G.z,Le,Ve,je,Qe,pt,Bt),N.pixelStorei(N.UNPACK_ROW_LENGTH,ut),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,jt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Sn),N.pixelStorei(N.UNPACK_SKIP_ROWS,Tt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,mn),H===0&&Z.generateMipmaps&&N.generateMipmap(lt),ce.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?T.setTextureCube(A,0):A.isData3DTexture?T.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?T.setTexture2DArray(A,0):T.setTexture2D(A,0),ce.unbindTexture()},this.resetState=function(){F=0,D=0,U=null,ce.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===ah?"display-p3":"srgb",t.unpackColorSpace=kt.workingColorSpace===ec?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ln?gs:Ud}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===gs?ln:Li}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Dl=class extends Kr{};Dl.prototype.isWebGL1Renderer=!0;var Uo=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ye(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},jr=class extends hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},Ul=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ml,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Ii()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ii()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ii()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Bn=new I,No=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Bn.fromBufferAttribute(this,t),Bn.applyMatrix4(e),this.setXYZ(t,Bn.x,Bn.y,Bn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Bn.fromBufferAttribute(this,t),Bn.applyNormalMatrix(e),this.setXYZ(t,Bn.x,Bn.y,Bn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Bn.fromBufferAttribute(this,t),Bn.transformDirection(e),this.setXYZ(t,Bn.x,Bn.y,Bn.z);return this}setX(e,t){return this.normalized&&(t=Vt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ci(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ci(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ci(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ci(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Vt(t,this.array),n=Vt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Vt(t,this.array),n=Vt(n,this.array),s=Vt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Vt(t,this.array),n=Vt(n,this.array),s=Vt(s,this.array),r=Vt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Un(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Qr=class extends _i{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ye(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},js,Or=new I,Qs=new I,er=new I,tr=new xe,Fr=new xe,qd=new qt,eo=new I,Br=new I,to=new I,rd=new xe,nl=new xe,ad=new xe,Oo=class extends hn{constructor(e=new Qr){if(super(),this.isSprite=!0,this.type="Sprite",js===void 0){js=new Kt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ul(t,5);js.setIndex([0,1,2,0,2,3]),js.setAttribute("position",new No(n,3,0,!1)),js.setAttribute("uv",new No(n,2,3,!1))}this.geometry=js,this.material=e,this.center=new xe(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Qs.setFromMatrixScale(this.matrixWorld),qd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),er.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Qs.multiplyScalar(-er.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;no(eo.set(-.5,-.5,0),er,a,Qs,s,r),no(Br.set(.5,-.5,0),er,a,Qs,s,r),no(to.set(.5,.5,0),er,a,Qs,s,r),rd.set(0,0),nl.set(1,0),ad.set(1,1);let o=e.ray.intersectTriangle(eo,Br,to,!1,Or);if(o===null&&(no(Br.set(-.5,.5,0),er,a,Qs,s,r),nl.set(0,1),o=e.ray.intersectTriangle(eo,to,Br,!1,Or),o===null))return;let c=e.ray.origin.distanceTo(Or);c<e.near||c>e.far||t.push({distance:c,point:Or.clone(),uv:Yi.getInterpolation(Or,eo,Br,to,rd,nl,ad,new xe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function no(i,e,t,n,s,r){tr.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Fr.x=r*tr.x-s*tr.y,Fr.y=s*tr.x+r*tr.y):Fr.copy(tr),i.copy(e),i.x+=Fr.x,i.y+=Fr.y,i.applyMatrix4(qd)}var Fo=class extends Un{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},nr=new qt,od=new qt,io=[],cd=new Ui,hx=new qt,zr=new be,Hr=new Ni,xs=class extends be{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Fo(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,hx)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ui),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,nr),cd.copy(e.boundingBox).applyMatrix4(nr),this.boundingBox.union(cd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ni),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,nr),Hr.copy(e.boundingSphere).applyMatrix4(nr),this.boundingSphere.union(Hr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,s=this.count;if(zr.geometry=this.geometry,zr.material=this.material,zr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Hr.copy(this.boundingSphere),Hr.applyMatrix4(n),e.ray.intersectsSphere(Hr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,nr),od.multiplyMatrices(n,nr),zr.matrixWorld=od,zr.raycast(e,io);for(let a=0,o=io.length;a<o;a++){let c=io[a];c.instanceId=r,c.object=this,t.push(c)}io.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Fo(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var ts=class extends _i{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ld=new I,hd=new I,ud=new qt,il=new Jr,so=new Ni,pr=class extends hn{constructor(e=new Kt,t=new ts){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)ld.fromBufferAttribute(t,s-1),hd.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=ld.distanceTo(hd);e.setAttribute("lineDistance",new Et(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),so.copy(n.boundingSphere),so.applyMatrix4(s),so.radius+=r,e.ray.intersectsSphere(so)===!1)return;ud.copy(s).invert(),il.copy(e.ray).applyMatrix4(ud);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=new I,h=new I,u=new I,d=new I,m=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){let f=Math.max(0,a.start),S=Math.min(g.count,a.start+a.count);for(let y=f,b=S-1;y<b;y+=m){let F=g.getX(y),D=g.getX(y+1);if(l.fromBufferAttribute(p,F),h.fromBufferAttribute(p,D),il.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);let q=e.ray.origin.distanceTo(d);q<e.near||q>e.far||t.push({distance:q,point:u.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{let f=Math.max(0,a.start),S=Math.min(p.count,a.start+a.count);for(let y=f,b=S-1;y<b;y+=m){if(l.fromBufferAttribute(p,y),h.fromBufferAttribute(p,y+1),il.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);let D=e.ray.origin.distanceTo(d);D<e.near||D>e.far||t.push({distance:D,point:u.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}},dd=new I,fd=new I,ea=class extends pr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)dd.fromBufferAttribute(t,s),fd.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+dd.distanceTo(fd);e.setAttribute("lineDistance",new Et(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var ta=class extends _i{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},pd=new qt,Nl=new Jr,ro=new Ni,ao=new I,Bo=class extends hn{constructor(e=new Kt,t=new ta){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ro.copy(n.boundingSphere),ro.applyMatrix4(s),ro.radius+=r,e.ray.intersectsSphere(ro)===!1)return;pd.copy(s).invert(),Nl.copy(e.ray).applyMatrix4(pd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,a.start),m=Math.min(l.count,a.start+a.count);for(let g=d,v=m;g<v;g++){let p=l.getX(g);ao.fromBufferAttribute(u,p),md(ao,p,c,s,e,t,this)}}else{let d=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let g=d,v=m;g<v;g++)ao.fromBufferAttribute(u,g),md(ao,g,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function md(i,e,t,n,s,r,a){let o=Nl.distanceSqToPoint(i);if(o<t){let c=new I;Nl.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,object:a})}}var mr=class extends jn{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},oi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,m=(a-h)/d;return(s+m)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=t||(a.isVector2?new xe:new I);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new I,s=[],r=[],a=[],o=new I,c=new qt;for(let m=0;m<=e;m++){let g=m/e;s[m]=this.getTangentAt(g,new I)}r[0]=new I,a[0]=new I;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let m=1;m<=e;m++){if(r[m]=r[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(s[m-1],s[m]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Ln(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(c.makeRotationAxis(o,g))}a[m].crossVectors(s[m],r[m])}if(t===!0){let m=Math.acos(Ln(r[0].dot(r[e]),-1,1));m/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(m=-m);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],m*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},na=class extends oi{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t){let n=t||new xe,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,m=l-this.aY;c=d*h-m*u+this.aX,l=d*u+m*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ol=class extends na{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function ch(){let i=0,e=0,t=0,n=0;function s(r,a,o,c){i=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,u){let d=(a-r)/l-(o-r)/(l+h)+(o-a)/h,m=(o-a)/h-(c-a)/(h+u)+(c-o)/u;d*=h,m*=h,s(a,o,d,m)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var oo=new I,sl=new ch,rl=new ch,al=new ch,Fl=class extends oi{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new I){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(oo.subVectors(s[0],s[1]).add(s[0]),l=oo);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(oo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=oo),this.curveType==="centripetal"||this.curveType==="chordal"){let m=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),m),v=Math.pow(u.distanceToSquared(d),m),p=Math.pow(d.distanceToSquared(h),m);v<1e-4&&(v=1),g<1e-4&&(g=v),p<1e-4&&(p=v),sl.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,v,p),rl.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,v,p),al.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,v,p)}else this.curveType==="catmullrom"&&(sl.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),rl.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),al.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(sl.calc(c),rl.calc(c),al.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new I().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function gd(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,c=i*o;return(2*t-2*n+r+a)*c+(-3*t+3*n-2*r-a)*o+r*i+t}function ux(i,e){let t=1-i;return t*t*e}function dx(i,e){return 2*(1-i)*i*e}function fx(i,e){return i*i*e}function Wr(i,e,t,n){return ux(i,e)+dx(i,t)+fx(i,n)}function px(i,e){let t=1-i;return t*t*t*e}function mx(i,e){let t=1-i;return 3*t*t*i*e}function gx(i,e){return 3*(1-i)*i*i*e}function _x(i,e){return i*i*i*e}function Xr(i,e,t,n,s){return px(i,e)+mx(i,t)+gx(i,n)+_x(i,s)}var zo=class extends oi{constructor(e=new xe,t=new xe,n=new xe,s=new xe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new xe){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Xr(e,s.x,r.x,a.x,o.x),Xr(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Bl=class extends oi{constructor(e=new I,t=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new I){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Xr(e,s.x,r.x,a.x,o.x),Xr(e,s.y,r.y,a.y,o.y),Xr(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ho=class extends oi{constructor(e=new xe,t=new xe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new xe){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new xe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},zl=class extends oi{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ko=class extends oi{constructor(e=new xe,t=new xe,n=new xe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new xe){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Wr(e,s.x,r.x,a.x),Wr(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Hl=class extends oi{constructor(e=new I,t=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new I){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Wr(e,s.x,r.x,a.x),Wr(e,s.y,r.y,a.y),Wr(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Go=class extends oi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new xe){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(gd(o,c.x,l.x,h.x,u.x),gd(o,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new xe().fromArray(s))}return this}},kl=Object.freeze({__proto__:null,ArcCurve:Ol,CatmullRomCurve3:Fl,CubicBezierCurve:zo,CubicBezierCurve3:Bl,EllipseCurve:na,LineCurve:Ho,LineCurve3:zl,QuadraticBezierCurve:ko,QuadraticBezierCurve3:Hl,SplineCurve:Go}),Gl=class extends oi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new kl[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new kl[s.type]().fromJSON(s))}return this}},gr=class extends Gl{constructor(e){super(),this.type="Path",this.currentPoint=new xe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Ho(this.currentPoint.clone(),new xe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new ko(this.currentPoint.clone(),new xe(e,t),new xe(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new zo(this.currentPoint.clone(),new xe(e,t),new xe(n,s),new xe(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Go(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,a,o,c),this}absellipse(e,t,n,s,r,a,o,c){let l=new na(e,t,n,s,r,a,o,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}};var _r=class i extends Kt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],c=[],l=new I,h=new xe;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let m=n+u/t*s;l.x=e*Math.cos(m),l.y=e*Math.sin(m),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Et(a,3)),this.setAttribute("normal",new Et(o,3)),this.setAttribute("uv",new Et(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},an=class i extends Kt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],m=[],g=0,v=[],p=n/2,f=0;S(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Et(u,3)),this.setAttribute("normal",new Et(d,3)),this.setAttribute("uv",new Et(m,2));function S(){let b=new I,F=new I,D=0,U=(t-e)/n;for(let q=0;q<=r;q++){let E=[],R=q/r,X=R*(t-e)+e;for(let Q=0;Q<=s;Q++){let O=Q/s,_=O*c+o,V=Math.sin(_),j=Math.cos(_);F.x=X*V,F.y=-R*n+p,F.z=X*j,u.push(F.x,F.y,F.z),b.set(V,U,j).normalize(),d.push(b.x,b.y,b.z),m.push(O,1-R),E.push(g++)}v.push(E)}for(let q=0;q<s;q++)for(let E=0;E<r;E++){let R=v[E][q],X=v[E+1][q],Q=v[E+1][q+1],O=v[E][q+1];h.push(R,X,O),h.push(X,Q,O),D+=6}l.addGroup(f,D,0),f+=D}function y(b){let F=g,D=new xe,U=new I,q=0,E=b===!0?e:t,R=b===!0?1:-1;for(let Q=1;Q<=s;Q++)u.push(0,p*R,0),d.push(0,R,0),m.push(.5,.5),g++;let X=g;for(let Q=0;Q<=s;Q++){let _=Q/s*c+o,V=Math.cos(_),j=Math.sin(_);U.x=E*j,U.y=p*R,U.z=E*V,u.push(U.x,U.y,U.z),d.push(0,R,0),D.x=V*.5+.5,D.y=j*.5*R+.5,m.push(D.x,D.y),g++}for(let Q=0;Q<s;Q++){let O=F+Q,_=X+Q;b===!0?h.push(_,_+1,O):h.push(_+1,_,O),q+=3}l.addGroup(f,q,b===!0?1:2),f+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},vi=class i extends an{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Vo=class i extends Kt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),l(n),h(),this.setAttribute("position",new Et(r,3)),this.setAttribute("normal",new Et(r.slice(),3)),this.setAttribute("uv",new Et(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(S){let y=new I,b=new I,F=new I;for(let D=0;D<t.length;D+=3)m(t[D+0],y),m(t[D+1],b),m(t[D+2],F),c(y,b,F,S)}function c(S,y,b,F){let D=F+1,U=[];for(let q=0;q<=D;q++){U[q]=[];let E=S.clone().lerp(b,q/D),R=y.clone().lerp(b,q/D),X=D-q;for(let Q=0;Q<=X;Q++)Q===0&&q===D?U[q][Q]=E:U[q][Q]=E.clone().lerp(R,Q/X)}for(let q=0;q<D;q++)for(let E=0;E<2*(D-q)-1;E++){let R=Math.floor(E/2);E%2===0?(d(U[q][R+1]),d(U[q+1][R]),d(U[q][R])):(d(U[q][R+1]),d(U[q+1][R+1]),d(U[q+1][R]))}}function l(S){let y=new I;for(let b=0;b<r.length;b+=3)y.x=r[b+0],y.y=r[b+1],y.z=r[b+2],y.normalize().multiplyScalar(S),r[b+0]=y.x,r[b+1]=y.y,r[b+2]=y.z}function h(){let S=new I;for(let y=0;y<r.length;y+=3){S.x=r[y+0],S.y=r[y+1],S.z=r[y+2];let b=p(S)/2/Math.PI+.5,F=f(S)/Math.PI+.5;a.push(b,1-F)}g(),u()}function u(){for(let S=0;S<a.length;S+=6){let y=a[S+0],b=a[S+2],F=a[S+4],D=Math.max(y,b,F),U=Math.min(y,b,F);D>.9&&U<.1&&(y<.2&&(a[S+0]+=1),b<.2&&(a[S+2]+=1),F<.2&&(a[S+4]+=1))}}function d(S){r.push(S.x,S.y,S.z)}function m(S,y){let b=S*3;y.x=e[b+0],y.y=e[b+1],y.z=e[b+2]}function g(){let S=new I,y=new I,b=new I,F=new I,D=new xe,U=new xe,q=new xe;for(let E=0,R=0;E<r.length;E+=9,R+=6){S.set(r[E+0],r[E+1],r[E+2]),y.set(r[E+3],r[E+4],r[E+5]),b.set(r[E+6],r[E+7],r[E+8]),D.set(a[R+0],a[R+1]),U.set(a[R+2],a[R+3]),q.set(a[R+4],a[R+5]),F.copy(S).add(y).add(b).divideScalar(3);let X=p(F);v(D,R+0,S,X),v(U,R+2,y,X),v(q,R+4,b,X)}}function v(S,y,b,F){F<0&&S.x===1&&(a[y]=S.x-1),b.x===0&&b.z===0&&(a[y]=F/2/Math.PI+.5)}function p(S){return Math.atan2(S.z,-S.x)}function f(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}},Wo=class i extends Vo{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},co=new I,lo=new I,ol=new I,ho=new Yi,Xo=class extends Kt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let s=Math.pow(10,4),r=Math.cos(mo*t),a=e.getIndex(),o=e.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],h=["a","b","c"],u=new Array(3),d={},m=[];for(let g=0;g<c;g+=3){a?(l[0]=a.getX(g),l[1]=a.getX(g+1),l[2]=a.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);let{a:v,b:p,c:f}=ho;if(v.fromBufferAttribute(o,l[0]),p.fromBufferAttribute(o,l[1]),f.fromBufferAttribute(o,l[2]),ho.getNormal(ol),u[0]=`${Math.round(v.x*s)},${Math.round(v.y*s)},${Math.round(v.z*s)}`,u[1]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,u[2]=`${Math.round(f.x*s)},${Math.round(f.y*s)},${Math.round(f.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let S=0;S<3;S++){let y=(S+1)%3,b=u[S],F=u[y],D=ho[h[S]],U=ho[h[y]],q=`${b}_${F}`,E=`${F}_${b}`;E in d&&d[E]?(ol.dot(d[E].normal)<=r&&(m.push(D.x,D.y,D.z),m.push(U.x,U.y,U.z)),d[E]=null):q in d||(d[q]={index0:l[S],index1:l[y],normal:ol.clone()})}}for(let g in d)if(d[g]){let{index0:v,index1:p}=d[g];co.fromBufferAttribute(o,v),lo.fromBufferAttribute(o,p),m.push(co.x,co.y,co.z),m.push(lo.x,lo.y,lo.z)}this.setAttribute("position",new Et(m,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Oi=class extends gr{constructor(e){super(e),this.uuid=Ii(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new gr().fromJSON(s))}return this}},xx={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Yd(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,l,h,u,d,m;if(n&&(r=Sx(i,e,r,t)),i.length>80*t){o=l=i[0],c=h=i[1];for(let g=t;g<s;g+=t)u=i[g],d=i[g+1],u<o&&(o=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);m=Math.max(l-o,h-c),m=m!==0?32767/m:0}return ia(r,a,t,o,c,m,0),a}};function Yd(i,e,t,n,s){let r,a;if(s===Ux(i,e,t,n)>0)for(r=e;r<t;r+=n)a=_d(r,i[r],i[r+1],a);else for(r=t-n;r>=e;r-=n)a=_d(r,i[r],i[r+1],a);return a&&nc(a,a.next)&&(ra(a),a=a.next),a}function ys(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(nc(t,t.next)||rn(t.prev,t,t.next)===0)){if(ra(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function ia(i,e,t,n,s,r,a){if(!i)return;!a&&r&&Rx(i,n,s,r);let o=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?vx(i,n,s,r):yx(i)){e.push(c.i/t|0),e.push(i.i/t|0),e.push(l.i/t|0),ra(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=Mx(ys(i),e,t),ia(i,e,t,n,s,r,2)):a===2&&Ex(i,e,t,n,s,r):ia(ys(i),e,t,n,s,r,1);break}}}function yx(i){let e=i.prev,t=i,n=i.next;if(rn(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,c=t.y,l=n.y,h=s<r?s<a?s:a:r<a?r:a,u=o<c?o<l?o:l:c<l?c:l,d=s>r?s>a?s:a:r>a?r:a,m=o>c?o>l?o:l:c>l?c:l,g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=m&&rr(s,o,r,c,a,l,g.x,g.y)&&rn(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function vx(i,e,t,n){let s=i.prev,r=i,a=i.next;if(rn(s,r,a)>=0)return!1;let o=s.x,c=r.x,l=a.x,h=s.y,u=r.y,d=a.y,m=o<c?o<l?o:l:c<l?c:l,g=h<u?h<d?h:d:u<d?u:d,v=o>c?o>l?o:l:c>l?c:l,p=h>u?h>d?h:d:u>d?u:d,f=Vl(m,g,e,t,n),S=Vl(v,p,e,t,n),y=i.prevZ,b=i.nextZ;for(;y&&y.z>=f&&b&&b.z<=S;){if(y.x>=m&&y.x<=v&&y.y>=g&&y.y<=p&&y!==s&&y!==a&&rr(o,h,c,u,l,d,y.x,y.y)&&rn(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=m&&b.x<=v&&b.y>=g&&b.y<=p&&b!==s&&b!==a&&rr(o,h,c,u,l,d,b.x,b.y)&&rn(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=f;){if(y.x>=m&&y.x<=v&&y.y>=g&&y.y<=p&&y!==s&&y!==a&&rr(o,h,c,u,l,d,y.x,y.y)&&rn(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=S;){if(b.x>=m&&b.x<=v&&b.y>=g&&b.y<=p&&b!==s&&b!==a&&rr(o,h,c,u,l,d,b.x,b.y)&&rn(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Mx(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!nc(s,r)&&Zd(s,n,n.next,r)&&sa(s,r)&&sa(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),ra(n),ra(n.next),n=i=r),n=n.next}while(n!==i);return ys(n)}function Ex(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Ix(a,o)){let c=Jd(a,o);a=ys(a,a.next),c=ys(c,c.next),ia(a,e,t,n,s,r,0),ia(c,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Sx(i,e,t,n){let s=[],r,a,o,c,l;for(r=0,a=e.length;r<a;r++)o=e[r]*n,c=r<a-1?e[r+1]*n:i.length,l=Yd(i,o,c,n,!1),l===l.next&&(l.steiner=!0),s.push(Px(l));for(s.sort(bx),r=0;r<s.length;r++)t=Tx(s[r],t);return t}function bx(i,e){return i.x-e.x}function Tx(i,e){let t=wx(i,e);if(!t)return e;let n=Jd(t,i);return ys(n,n.next),ys(t,t.next)}function wx(i,e){let t=e,n=-1/0,s,r=i.x,a=i.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){let d=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,s=t.x<t.next.x?t:t.next,d===r))return s}t=t.next}while(t!==e);if(!s)return null;let o=s,c=s.x,l=s.y,h=1/0,u;t=s;do r>=t.x&&t.x>=c&&r!==t.x&&rr(a<l?r:n,a,c,l,a<l?n:r,a,t.x,t.y)&&(u=Math.abs(a-t.y)/(r-t.x),sa(t,i)&&(u<h||u===h&&(t.x>s.x||t.x===s.x&&Ax(s,t)))&&(s=t,h=u)),t=t.next;while(t!==o);return s}function Ax(i,e){return rn(i.prev,i,e.prev)<0&&rn(e.next,i,i.next)<0}function Rx(i,e,t,n){let s=i;do s.z===0&&(s.z=Vl(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Cx(s)}function Cx(i){let e,t,n,s,r,a,o,c,l=1;do{for(t=i,i=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<l&&(o++,n=n.nextZ,!!n);e++);for(c=l;o>0||c>0&&n;)o!==0&&(c===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,o--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,l*=2}while(a>1);return i}function Vl(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Px(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function rr(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function Ix(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Lx(i,e)&&(sa(i,e)&&sa(e,i)&&Dx(i,e)&&(rn(i.prev,i,e.prev)||rn(i,e.prev,e))||nc(i,e)&&rn(i.prev,i,i.next)>0&&rn(e.prev,e,e.next)>0)}function rn(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function nc(i,e){return i.x===e.x&&i.y===e.y}function Zd(i,e,t,n){let s=fo(rn(i,e,t)),r=fo(rn(i,e,n)),a=fo(rn(t,n,i)),o=fo(rn(t,n,e));return!!(s!==r&&a!==o||s===0&&uo(i,t,e)||r===0&&uo(i,n,e)||a===0&&uo(t,i,n)||o===0&&uo(t,e,n))}function uo(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function fo(i){return i>0?1:i<0?-1:0}function Lx(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Zd(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function sa(i,e){return rn(i.prev,i,i.next)<0?rn(i,e,i.next)>=0&&rn(i,i.prev,e)>=0:rn(i,e,i.prev)<0||rn(i,i.next,e)<0}function Dx(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Jd(i,e){let t=new Wl(i.i,i.x,i.y),n=new Wl(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function _d(i,e,t,n){let s=new Wl(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ra(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Wl(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Ux(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Ki=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];xd(e),yd(n,e);let a=e.length;t.forEach(xd);for(let c=0;c<t.length;c++)s.push(a),a+=t[c].length,yd(n,t[c]);let o=xx.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function xd(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function yd(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var aa=class i extends Kt{constructor(e=new Oi([new xe(.5,.5),new xe(-.5,.5),new xe(-.5,-.5),new xe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,c=e.length;o<c;o++){let l=e[o];a(l)}this.setAttribute("position",new Et(s,3)),this.setAttribute("uv",new Et(r,2)),this.computeVertexNormals();function a(o){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,m=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:m-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3,f=t.extrudePath,S=t.UVGenerator!==void 0?t.UVGenerator:Nx,y,b=!1,F,D,U,q;f&&(y=f.getSpacedPoints(h),b=!0,d=!1,F=f.computeFrenetFrames(h,!1),D=new I,U=new I,q=new I),d||(p=0,m=0,g=0,v=0);let E=o.extractPoints(l),R=E.shape,X=E.holes;if(!Ki.isClockWise(R)){R=R.reverse();for(let N=0,ve=X.length;N<ve;N++){let ne=X[N];Ki.isClockWise(ne)&&(X[N]=ne.reverse())}}let O=Ki.triangulateShape(R,X),_=R;for(let N=0,ve=X.length;N<ve;N++){let ne=X[N];R=R.concat(ne)}function V(N,ve,ne){return ve||console.error("THREE.ExtrudeGeometry: vec does not exist"),N.clone().addScaledVector(ve,ne)}let j=R.length,de=O.length;function J(N,ve,ne){let ye,ce,Ze,Pe=N.x-ve.x,T=N.y-ve.y,M=ne.x-N.x,W=ne.y-N.y,pe=Pe*Pe+T*T,ee=Pe*W-T*M;if(Math.abs(ee)>Number.EPSILON){let L=Math.sqrt(pe),Ue=Math.sqrt(M*M+W*W),Me=ve.x-T/L,P=ve.y+Pe/L,ae=ne.x-W/Ue,He=ne.y+M/Ue,ge=((ae-Me)*W-(He-P)*M)/(Pe*W-T*M);ye=Me+Pe*ge-N.x,ce=P+T*ge-N.y;let At=ye*ye+ce*ce;if(At<=2)return new xe(ye,ce);Ze=Math.sqrt(At/2)}else{let L=!1;Pe>Number.EPSILON?M>Number.EPSILON&&(L=!0):Pe<-Number.EPSILON?M<-Number.EPSILON&&(L=!0):Math.sign(T)===Math.sign(W)&&(L=!0),L?(ye=-T,ce=Pe,Ze=Math.sqrt(pe)):(ye=Pe,ce=T,Ze=Math.sqrt(pe/2))}return new xe(ye/Ze,ce/Ze)}let ie=[];for(let N=0,ve=_.length,ne=ve-1,ye=N+1;N<ve;N++,ne++,ye++)ne===ve&&(ne=0),ye===ve&&(ye=0),ie[N]=J(_[N],_[ne],_[ye]);let _e=[],fe,Te=ie.concat();for(let N=0,ve=X.length;N<ve;N++){let ne=X[N];fe=[];for(let ye=0,ce=ne.length,Ze=ce-1,Pe=ye+1;ye<ce;ye++,Ze++,Pe++)Ze===ce&&(Ze=0),Pe===ce&&(Pe=0),fe[ye]=J(ne[ye],ne[Ze],ne[Pe]);_e.push(fe),Te=Te.concat(fe)}for(let N=0;N<p;N++){let ve=N/p,ne=m*Math.cos(ve*Math.PI/2),ye=g*Math.sin(ve*Math.PI/2)+v;for(let ce=0,Ze=_.length;ce<Ze;ce++){let Pe=V(_[ce],ie[ce],ye);Oe(Pe.x,Pe.y,-ne)}for(let ce=0,Ze=X.length;ce<Ze;ce++){let Pe=X[ce];fe=_e[ce];for(let T=0,M=Pe.length;T<M;T++){let W=V(Pe[T],fe[T],ye);Oe(W.x,W.y,-ne)}}}let K=g+v;for(let N=0;N<j;N++){let ve=d?V(R[N],Te[N],K):R[N];b?(U.copy(F.normals[0]).multiplyScalar(ve.x),D.copy(F.binormals[0]).multiplyScalar(ve.y),q.copy(y[0]).add(U).add(D),Oe(q.x,q.y,q.z)):Oe(ve.x,ve.y,0)}for(let N=1;N<=h;N++)for(let ve=0;ve<j;ve++){let ne=d?V(R[ve],Te[ve],K):R[ve];b?(U.copy(F.normals[N]).multiplyScalar(ne.x),D.copy(F.binormals[N]).multiplyScalar(ne.y),q.copy(y[N]).add(U).add(D),Oe(q.x,q.y,q.z)):Oe(ne.x,ne.y,u/h*N)}for(let N=p-1;N>=0;N--){let ve=N/p,ne=m*Math.cos(ve*Math.PI/2),ye=g*Math.sin(ve*Math.PI/2)+v;for(let ce=0,Ze=_.length;ce<Ze;ce++){let Pe=V(_[ce],ie[ce],ye);Oe(Pe.x,Pe.y,u+ne)}for(let ce=0,Ze=X.length;ce<Ze;ce++){let Pe=X[ce];fe=_e[ce];for(let T=0,M=Pe.length;T<M;T++){let W=V(Pe[T],fe[T],ye);b?Oe(W.x,W.y+y[h-1].y,y[h-1].x+ne):Oe(W.x,W.y,u+ne)}}}me(),Ce();function me(){let N=s.length/3;if(d){let ve=0,ne=j*ve;for(let ye=0;ye<de;ye++){let ce=O[ye];it(ce[2]+ne,ce[1]+ne,ce[0]+ne)}ve=h+p*2,ne=j*ve;for(let ye=0;ye<de;ye++){let ce=O[ye];it(ce[0]+ne,ce[1]+ne,ce[2]+ne)}}else{for(let ve=0;ve<de;ve++){let ne=O[ve];it(ne[2],ne[1],ne[0])}for(let ve=0;ve<de;ve++){let ne=O[ve];it(ne[0]+j*h,ne[1]+j*h,ne[2]+j*h)}}n.addGroup(N,s.length/3-N,0)}function Ce(){let N=s.length/3,ve=0;ze(_,ve),ve+=_.length;for(let ne=0,ye=X.length;ne<ye;ne++){let ce=X[ne];ze(ce,ve),ve+=ce.length}n.addGroup(N,s.length/3-N,1)}function ze(N,ve){let ne=N.length;for(;--ne>=0;){let ye=ne,ce=ne-1;ce<0&&(ce=N.length-1);for(let Ze=0,Pe=h+p*2;Ze<Pe;Ze++){let T=j*Ze,M=j*(Ze+1),W=ve+ye+T,pe=ve+ce+T,ee=ve+ce+M,L=ve+ye+M;rt(W,pe,ee,L)}}}function Oe(N,ve,ne){c.push(N),c.push(ve),c.push(ne)}function it(N,ve,ne){ke(N),ke(ve),ke(ne);let ye=s.length/3,ce=S.generateTopUV(n,s,ye-3,ye-2,ye-1);ct(ce[0]),ct(ce[1]),ct(ce[2])}function rt(N,ve,ne,ye){ke(N),ke(ve),ke(ye),ke(ve),ke(ne),ke(ye);let ce=s.length/3,Ze=S.generateSideWallUV(n,s,ce-6,ce-3,ce-2,ce-1);ct(Ze[0]),ct(Ze[1]),ct(Ze[3]),ct(Ze[1]),ct(Ze[2]),ct(Ze[3])}function ke(N){s.push(c[N*3+0]),s.push(c[N*3+1]),s.push(c[N*3+2])}function ct(N){r.push(N.x),r.push(N.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Ox(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new kl[s.type]().fromJSON(s)),new i(n,e.options)}},Nx={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],c=e[n*3+1],l=e[s*3],h=e[s*3+1];return[new xe(r,a),new xe(o,c),new xe(l,h)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[s*3],m=e[s*3+1],g=e[s*3+2],v=e[r*3],p=e[r*3+1],f=e[r*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new xe(a,1-c),new xe(l,1-u),new xe(d,1-g),new xe(v,1-f)]:[new xe(o,1-c),new xe(h,1-u),new xe(m,1-g),new xe(p,1-f)]}};function Ox(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var oa=class i extends Vo{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var ca=class i extends Kt{constructor(e=new Oi([new xe(0,.5),new xe(-.5,-.5),new xe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],a=[],o=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(o,c,h),o+=c,c=0;this.setIndex(n),this.setAttribute("position",new Et(s,3)),this.setAttribute("normal",new Et(r,3)),this.setAttribute("uv",new Et(a,2));function l(h){let u=s.length/3,d=h.extractPoints(t),m=d.shape,g=d.holes;Ki.isClockWise(m)===!1&&(m=m.reverse());for(let p=0,f=g.length;p<f;p++){let S=g[p];Ki.isClockWise(S)===!0&&(g[p]=S.reverse())}let v=Ki.triangulateShape(m,g);for(let p=0,f=g.length;p<f;p++){let S=g[p];m=m.concat(S)}for(let p=0,f=m.length;p<f;p++){let S=m[p];s.push(S.x,S.y,0),r.push(0,0,1),a.push(S.x,S.y)}for(let p=0,f=v.length;p<f;p++){let S=v[p],y=S[0]+u,b=S[1]+u,F=S[2]+u;n.push(y,b,F),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Fx(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];n.push(a)}return new i(n,e.curveSegments)}};function Fx(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var Gn=class i extends Kt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new I,d=new I,m=[],g=[],v=[],p=[];for(let f=0;f<=n;f++){let S=[],y=f/n,b=0;f===0&&a===0?b=.5/t:f===n&&c===Math.PI&&(b=-.5/t);for(let F=0;F<=t;F++){let D=F/t;u.x=-e*Math.cos(s+D*r)*Math.sin(a+y*o),u.y=e*Math.cos(a+y*o),u.z=e*Math.sin(s+D*r)*Math.sin(a+y*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),p.push(D+b,1-y),S.push(l++)}h.push(S)}for(let f=0;f<n;f++)for(let S=0;S<t;S++){let y=h[f][S+1],b=h[f][S],F=h[f+1][S],D=h[f+1][S+1];(f!==0||a>0)&&m.push(y,b,D),(f!==n-1||c<Math.PI)&&m.push(b,F,D)}this.setIndex(m),this.setAttribute("position",new Et(g,3)),this.setAttribute("normal",new Et(v,3)),this.setAttribute("uv",new Et(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var qo=class i extends Kt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],c=[],l=[],h=new I,u=new I,d=new I;for(let m=0;m<=n;m++)for(let g=0;g<=s;g++){let v=g/s*r,p=m/n*Math.PI*2;u.x=(e+t*Math.cos(p))*Math.cos(v),u.y=(e+t*Math.cos(p))*Math.sin(v),u.z=t*Math.sin(p),o.push(u.x,u.y,u.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(m/n)}for(let m=1;m<=n;m++)for(let g=1;g<=s;g++){let v=(s+1)*m+g-1,p=(s+1)*(m-1)+g-1,f=(s+1)*(m-1)+g,S=(s+1)*m+g;a.push(v,p,S),a.push(p,f,S)}this.setIndex(a),this.setAttribute("position",new Et(o,3)),this.setAttribute("normal",new Et(c,3)),this.setAttribute("uv",new Et(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Yo=class extends _i{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Ye(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};var An=class extends _i{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nd,this.normalScale=new xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Zo=class extends ts{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};function po(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Bx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var xr=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Xl=class extends xr{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:gu,endingEnd:gu}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case _u:r=e,o=2*t-n;break;case xu:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case _u:a=e,c=2*n-t;break;case xu:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,m=this._weightNext,g=(n-t)/(s-t),v=g*g,p=v*g,f=-d*p+2*d*v-d*g,S=(1+d)*p+(-1.5-2*d)*v+(-.5+d)*g+1,y=(-1-m)*p+(1.5+m)*v+.5*g,b=m*p-m*v;for(let F=0;F!==o;++F)r[F]=f*a[h+F]+S*a[l+F]+y*a[c+F]+b*a[u+F];return r}},ql=class extends xr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*u+a[c+d]*h;return r}},Yl=class extends xr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},xi=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=po(t,this.TimeBufferType),this.values=po(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:po(e.times,Array),values:po(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Yl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ql(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Xl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case _o:t=this.InterpolantFactoryMethodDiscrete;break;case xo:t=this.InterpolantFactoryMethodLinear;break;case Lc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return _o;case this.InterpolantFactoryMethodLinear:return xo;case this.InterpolantFactoryMethodSmooth:return Lc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&Bx(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Lc,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(s)c=!0;else{let u=o*n,d=u-n,m=u+n;for(let g=0;g!==n;++g){let v=t[u+g];if(v!==t[d+g]||v!==t[m+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let m=0;m!==n;++m)t[d+m]=t[u+m]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};xi.prototype.TimeBufferType=Float32Array;xi.prototype.ValueBufferType=Float32Array;xi.prototype.DefaultInterpolation=xo;var vs=class extends xi{};vs.prototype.ValueTypeName="bool";vs.prototype.ValueBufferType=Array;vs.prototype.DefaultInterpolation=_o;vs.prototype.InterpolantFactoryMethodLinear=void 0;vs.prototype.InterpolantFactoryMethodSmooth=void 0;var Zl=class extends xi{};Zl.prototype.ValueTypeName="color";var Jl=class extends xi{};Jl.prototype.ValueTypeName="number";var $l=class extends xr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),l=e*o;for(let h=l+o;l!==h;l+=4)es.slerpFlat(r,0,a,l-o,a,l,c);return r}},la=class extends xi{InterpolantFactoryMethodLinear(e){return new $l(this.times,this.values,this.getValueSize(),e)}};la.prototype.ValueTypeName="quaternion";la.prototype.DefaultInterpolation=xo;la.prototype.InterpolantFactoryMethodSmooth=void 0;var Ms=class extends xi{};Ms.prototype.ValueTypeName="string";Ms.prototype.ValueBufferType=Array;Ms.prototype.DefaultInterpolation=_o;Ms.prototype.InterpolantFactoryMethodLinear=void 0;Ms.prototype.InterpolantFactoryMethodSmooth=void 0;var Kl=class extends xi{};Kl.prototype.ValueTypeName="vector";var vd={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},jl=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let m=l[u],g=l[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}},zx=new jl,ha=class{constructor(e){this.manager=e!==void 0?e:zx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};ha.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ql=class extends ha{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=vd.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;let o=Zr("img");function c(){h(),vd.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}};var Jo=class extends ha{constructor(e){super(e)}load(e,t,n,s){let r=new jn,a=new Ql(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},ua=class extends hn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},$o=class extends ua{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(hn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ye(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},cl=new qt,Md=new I,Ed=new I,Ko=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xe(512,512),this.map=null,this.mapPass=null,this.matrix=new qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $r,this._frameExtents=new xe(1,1),this._viewportCount=1,this._viewports=[new tn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Md.setFromMatrixPosition(e.matrixWorld),t.position.copy(Md),Ed.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ed),t.updateMatrixWorld(),cl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(cl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Sd=new qt,kr=new I,ll=new I,eh=class extends Ko{constructor(){super(new Dn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new xe(4,2),this._viewportCount=6,this._viewports=[new tn(2,1,1,1),new tn(0,1,1,1),new tn(3,1,1,1),new tn(1,1,1,1),new tn(3,0,1,1),new tn(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),kr.setFromMatrixPosition(e.matrixWorld),n.position.copy(kr),ll.copy(n.position),ll.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ll),n.updateMatrixWorld(),s.makeTranslation(-kr.x,-kr.y,-kr.z),Sd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sd)}},yr=class extends ua{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new eh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},th=class extends Ko{constructor(){super(new Lo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},jo=class extends ua{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(hn.DEFAULT_UP),this.updateMatrix(),this.target=new hn,this.shadow=new th}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var lh="\\[\\]\\.:\\/",Hx=new RegExp("["+lh+"]","g"),hh="[^"+lh+"]",kx="[^"+lh.replace("\\.","")+"]",Gx=/((?:WC+[\/:])*)/.source.replace("WC",hh),Vx=/(WCOD+)?/.source.replace("WCOD",kx),Wx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",hh),Xx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",hh),qx=new RegExp("^"+Gx+Vx+Wx+Xx+"$"),Yx=["material","materials","bones","map"],nh=class{constructor(e,t,n){let s=n||en.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},en=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Hx,"")}static parseTrackName(e){let t=qx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Yx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};en.Composite=nh;en.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};en.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};en.prototype.GetterByBindingType=[en.prototype._getValue_direct,en.prototype._getValue_array,en.prototype._getValue_arrayElement,en.prototype._getValue_toArray];en.prototype.SetterByBindingTypeAndVersioning=[[en.prototype._setValue_direct,en.prototype._setValue_direct_setNeedsUpdate,en.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[en.prototype._setValue_array,en.prototype._setValue_array_setNeedsUpdate,en.prototype._setValue_array_setMatrixWorldNeedsUpdate],[en.prototype._setValue_arrayElement,en.prototype._setValue_arrayElement_setNeedsUpdate,en.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[en.prototype._setValue_fromArray,en.prototype._setValue_fromArray_setNeedsUpdate,en.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ty=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var on=(i,e,t)=>Math.max(e,Math.min(t,i)),$d=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,Jx=i=>i*i*(3-2*i),da=i=>1-Math.pow(1-i,3),uh=i=>1+2.70158*Math.pow(i-1,3)+1.70158*Math.pow(i-1,2),Kd=-1.7,$x=(i,e,t)=>new I(i+Kd,e,t);function ci(i,e,t,n=!0){let s=document.createElement("canvas");s.width=i,s.height=e,t(s.getContext("2d"),i,e);let r=new mr(s);return r.colorSpace=ln,r.anisotropy=4,n&&(r.wrapS=r.wrapT=_s),r}var jd={roof:"hip",cladding:"weatherboard",wall:"#ece7da",roofColor:"#8d9ea5",joinery:"#161e1b",door:"#c23434",garage:!0,chimney:!0,solar:!1,deck:!1,shape:"single",windows:"standard",veranda:!1,bay:!1,fence:"none",detail:"none",tod:"auto"},Kx=[{key:"frame",title:"Framing",text:"Treated timber framing goes up first. With the roof on, the house is weathertight before any work starts inside."},{key:"lining",title:"Insulation and lining",text:"Insulation goes into the walls and ceiling, then plasterboard is fixed and stopped, ready for paint."},{key:"floor",title:"Flooring",text:"Pale oak flooring is laid through the open-plan living area and the skirtings are fitted."},{key:"kitchen",title:"Kitchen and joinery",text:"The kitchen goes in with a stone island bench, handleless cabinetry and an integrated fridge."},{key:"furnished",title:"Furnished and lit",text:"Lights, furniture and plants finish the home. The open-plan living area flows to the deck and the garden."}],Qd=[{key:"arrive",title:"Arrive at the section",text:"Approach from the street. The garage is on the left and the covered entry is on the right."},{key:"front",title:"The front elevation",text:null},{key:"roof",title:"Roof and cladding",text:null},{key:"garden",title:"Native planting",text:"P\u014Dhutukawa, ponga tree ferns and flax frame the house and soften the boundary."},{key:"back",title:"Around the back",text:null},{key:"doll",title:"Roof off: the floor plan",text:"Lift the roof to see the layout: garage, living, kitchen and dining, two bedrooms and the entry."},{key:"door",title:"The front door",text:"Under the covered entry. The door swings open as we step inside."},{key:"living",title:"Entry and living room",text:"The living room opens to the front window and gets the afternoon light."},{key:"kitchen",title:"Kitchen and dining",text:"An island bench, a dining table and a window onto the back garden."},{key:"bed",title:"Bedroom",text:"A quiet bedroom at the back of the house, away from the street."},{key:"end",title:"Golden hour",text:"Back outside as the light drops. Every design choice can still be changed."}];function jx(i,e={}){let t=matchMedia("(prefers-reduced-motion: reduce)").matches,n;try{n=new Kr({antialias:!0,alpha:!!e.cutout,preserveDrawingBuffer:!!e.cutout,powerPreference:"high-performance"})}catch{return null}let s=!!e.hero,r=!!e.cutout;r&&n.setClearColor(0,0),n.setPixelRatio(Math.min(window.devicePixelRatio||1,s?window.innerWidth<900?1.25:1.5:2)),n.shadowMap.enabled=!0,n.shadowMap.type=ih,s&&(n.shadowMap.autoUpdate=!1,n.shadowMap.needsUpdate=!0),n.outputColorSpace=ln,n.toneMapping=sh,n.localClippingEnabled=!0,n.domElement.style.cssText="display:block;width:100%;height:100%;touch-action:pan-y;cursor:"+(s?"default":"grab"),i.appendChild(n.domElement);let a=new jr,o=new Dn(46,1,.3,500),c=[],l=new Set,h=new pi(new I(0,-1,0),100),u={top:{value:new Ye},mid:{value:new Ye},bot:{value:new Ye},sd:{value:new I(0,1,0)},sc:{value:new Ye},t:{value:0}},d=new be(new Gn(300,32,16),new ai({side:Tn,depthWrite:!1,uniforms:u,vertexShader:"varying vec3 vP;void main(){vP=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"uniform vec3 top;uniform vec3 mid;uniform vec3 bot;uniform vec3 sd;uniform vec3 sc;uniform float t;varying vec3 vP;float h21(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}float n2(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h21(i),h21(i+vec2(1.,0.)),f.x),mix(h21(i+vec2(0.,1.)),h21(i+vec2(1.,1.)),f.x),f.y);}float fbm(vec2 p){float a=.5,s=0.;for(int i=0;i<5;i++){s+=a*n2(p);p=p*2.03+17.;a*=.5;}return s;}void main(){float h=clamp(vP.y,-.1,1.);vec3 c=mix(bot,mid,smoothstep(0.,.35,h));c=mix(c,top,smoothstep(.3,1.,h));float sdot=max(dot(normalize(vP),sd),0.);c+=sc*(pow(sdot,60.)*.6+pow(sdot,7.)*.16);if(vP.y>0.){vec2 uv=vP.xz/(vP.y+.2)*.8+vec2(t*.006,t*.002);float n=fbm(uv*1.5);float m=smoothstep(.48,.8,n)*smoothstep(.0,.2,vP.y);float lum=dot(mid,vec3(.3,.6,.1));float k=smoothstep(.06,.5,lum);vec3 cc=mix(mid,vec3(1.),.82*k)*(.88+.4*pow(sdot,3.));cc=mix(cc,sc*1.2,pow(sdot,8.)*.35*k);float under=smoothstep(.62,.48,n);cc*=.9+.1*under;c=mix(c,cc,m*.88);}gl_FragColor=vec4(pow(c,vec3(.4545)),1.);}"}));a.add(d),a.fog=new Uo(2837056,r?1e5:60,r?2e5:210);{let x=new fr(n),C=new jr;C.add(new be(new Gn(60,32,16),new ai({side:Tn,uniforms:{},vertexShader:"varying vec3 vP;void main(){vP=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec3 vP;void main(){float h=vP.y;vec3 c=mix(vec3(.22,.26,.2),vec3(.82,.88,.92),smoothstep(-.05,.08,h));c=mix(c,vec3(.32,.55,.9),smoothstep(.1,.85,h));gl_FragColor=vec4(c,1.);}"})));let w=new be(new Gn(5,16,8),new kn({color:new Ye(14,11,8)}));w.position.set(-26,34,28),C.add(w),a.environment=x.fromScene(C,.03).texture,a.environmentIntensity=.3,x.dispose()}let m=new $o(11127232,2308143,.85);a.add(m);let g=new jo(14674404,1.5);g.castShadow=!0,g.shadow.mapSize.set(s?2048:3072,s?2048:3072),g.shadow.radius=3;let v=g.shadow.camera;v.left=-24,v.right=24,v.top=24,v.bottom=-24,v.near=5,v.far=100,g.shadow.bias=-4e-4,g.shadow.normalBias=.04,a.add(g);let p=new yr(16762234,0,16,1.6);p.position.set(.5,1.6,1.2),a.add(p);let f=new yr(16769712,0,14,1.4);f.position.set(1,2.3,0),a.add(f);let S=new yr(16769712,0,12,1.4);S.position.set(5.5,2.3,-1.5),a.add(S);let y={dusk:{top:726803,mid:1451807,bot:2837056,fog:2837056,fogFar:210,hemi:11127232,hemiG:2308143,hi:.85,sun:14674404,si:1.5,sp:[-18,30,22],exp:1.05,li:0},day:{top:5214159,mid:10275817,bot:14938613,fog:13624298,fogFar:240,hemi:14150911,hemiG:6978138,hi:1.05,sun:16774366,si:2.6,sp:[-14,34,24],exp:1,li:0},golden:{top:2438506,mid:15176298,bot:16237946,fog:15315578,fogFar:200,hemi:16767400,hemiG:6969922,hi:1.45,sun:16756838,si:2.6,sp:[-24,16,20],exp:1.45,li:1},night:{top:329746,mid:857648,bot:1911370,fog:1055283,fogFar:120,hemi:5926560,hemiG:1712688,hi:.55,sun:9085695,si:.55,sp:[-16,26,18],exp:1.15,li:1}},b={top:new Ye,mid:new Ye,bot:new Ye,fog:new Ye,hemi:new Ye,hemiG:new Ye,sun:new Ye,fogFar:210,hi:.85,si:1.5,exp:1.05,li:0,sp:new I(-18,30,22)},F=new Ye;function D(x,C){let w=y.dusk,k=y[x],z=(se,Y)=>F.set(w[se]).lerp(new Ye(k[Y]),C).clone();return{top:z("top","top"),mid:z("mid","mid"),bot:z("bot","bot"),fog:z("fog","fog"),hemi:z("hemi","hemi"),hemiG:z("hemiG","hemiG"),sun:z("sun","sun"),fogFar:w.fogFar+(k.fogFar-w.fogFar)*C,hi:w.hi+(k.hi-w.hi)*C,si:w.si+(k.si-w.si)*C,exp:w.exp+(k.exp-w.exp)*C,li:w.li+(k.li-w.li)*C,sp:new I(...w.sp).lerp(new I(...k.sp),C)}}let U=!!e.pbr&&!s,q=e.texBase||"tex/",E=new Jo,R={};function X(x,C,w){if(R[x]){R[x].image?w(R[x]):R[x].__q.push(w);return}let k=E.load(q+x+".jpg",z=>{(z.__q||[]).forEach(se=>se(z)),z.__q=[]});k.__q=[w],C&&(k.colorSpace=ln),R[x]=k}function Q(x,C){if(!U)return x;x.userData.pbrO=C;let[w,k]=C.rep||[1,1];return(C.maps||[]).forEach(([z,se])=>X(se,z==="map",Y=>{let re=Y.clone();re.needsUpdate=!0,re.wrapS=re.wrapT=_s,re.repeat.set(w,k),re.anisotropy=8,C.rot&&(re.center.set(.5,.5),re.rotation=C.rot),z==="map"&&(re.colorSpace=ln),x[z]=re,(z==="map"||z==="normalMap")&&(x.bumpMap=null),z==="normalMap"&&(x.normalScale=new xe(C.ns||1,C.ns||1)),x.needsUpdate=!0})),x}let O=(x,C={})=>new An(Object.assign({color:x,roughness:.85,metalness:0},C)),_=(x,C,w,k,z=0,se=0,Y=0,re=!0)=>{let he=new be(new Nn(x,C,w),k);return he.position.set(z,se,Y),he.castShadow=re,he.receiveShadow=!0,he},V=(x,C,w,k)=>(x.position.set(C,w,k),x),j=(...x)=>{let C=new Ge;return x.forEach(w=>C.add(w)),C};function de(x){x.traverse(C=>{C.material&&(C.material=Array.isArray(C.material)?C.material.map(w=>w.clone()):C.material.clone(),(Array.isArray(C.material)?C.material:[C.material]).forEach(w=>{w.userData.op=w.opacity,l.add(w),w.userData.pbrO&&Q(w,w.userData.pbrO)}))})}function J(x,{start:C,dur:w=1,kind:k="fade",end:z=null,fn:se=null,add:Y=!0,parent:re=a,tag:he=null}){Y&&re.add(x);let Ne={o:x,start:C,dur:w,kind:k,end:z,fn:se,tag:he,sx:x.scale.x,sy:x.scale.y,sz:x.scale.z,py:x.position.y};return(k==="fade"||k==="drop")&&de(x),c.push(Ne),Ne}function ie(x,C){x.traverse(w=>{w.material&&(Array.isArray(w.material)?w.material:[w.material]).forEach(k=>{k.transparent=!0,k.opacity=(k.userData.op??1)*C,k.depthWrite=C>.98})})}function _e(x){let C=x.attributes.position,w=x.attributes.normal,k=new Float32Array(C.count*2);for(let z=0;z<C.count;z++){let se=Math.abs(w.getX(z)),Y=Math.abs(w.getY(z)),re=Math.abs(w.getZ(z)),he,Ne;Y>.6?(he=C.getX(z),Ne=C.getZ(z)):se>re?(he=C.getZ(z),Ne=C.getY(z)):(he=C.getX(z),Ne=C.getY(z)),k[z*2]=he,k[z*2+1]=Ne}return x.setAttribute("uv",new Un(k,2)),x}let fe=ci(1024,1024,(x,C,w)=>{x.fillStyle="#4c7a46",x.fillRect(0,0,C,w);for(let k=0;k<70;k++){let z=Math.random()*C,se=Math.random()*w,Y=60+Math.random()*160,re=x.createRadialGradient(z,se,0,z,se,Y),he=Math.random()<.5?"160,170,80":Math.random()<.5?"30,70,35":"90,140,70";re.addColorStop(0,"rgba("+he+",.28)"),re.addColorStop(1,"rgba("+he+",0)"),x.fillStyle=re,x.fillRect(z-Y,se-Y,Y*2,Y*2)}for(let k=0;k<26e3;k++){let z=Math.random();x.fillStyle=z<.3?"rgba(170,205,110,.16)":z<.6?"rgba(15,45,22,.2)":z<.85?"rgba(110,150,70,.14)":"rgba(255,255,230,.05)",x.fillRect(Math.random()*C,Math.random()*w,1.1,3+Math.random()*7)}for(let k=0;k<10;k++)x.fillStyle="rgba(255,255,255,.025)",x.fillRect(0,k*(w/10),C,w/20);for(let k=0;k<260;k++)x.fillStyle=Math.random()<.6?"rgba(245,240,200,.55)":"rgba(255,255,255,.45)",x.beginPath(),x.arc(Math.random()*C,Math.random()*w,1+Math.random()*1.2,0,6.28),x.fill()});fe.repeat.set(13,13),fe.anisotropy=8;let Te=new be(new _r(95,64),new An({map:fe,bumpMap:fe,bumpScale:.6,roughness:1,envMapIntensity:.2}));if(Te.rotation.x=-Math.PI/2,Te.receiveShadow=!0,a.add(Te),U){Q(Te.material,{maps:[["map","grass-c"],["normalMap","grass-n"]],rep:[110,110],ns:.9}),Te.material.color.set(14674128),Te.material.roughness=.95;let x=ci(512,512,(w,k,z)=>{for(let se=0;se<70;se++){let Y=Math.random()*k,re=Math.random()*z,he=50+Math.random()*130,Ne=Math.random()<.5?"175,170,80":"20,60,30",Fe=w.createRadialGradient(Y,re,0,Y,re,he);Fe.addColorStop(0,"rgba("+Ne+",.5)"),Fe.addColorStop(1,"rgba("+Ne+",0)"),w.fillStyle=Fe,w.fillRect(Y-he,re-he,he*2,he*2)}},!0);x.repeat.set(5,5);let C=new be(new _r(95,48),new kn({map:x,transparent:!0,opacity:.32,depthWrite:!1,fog:!0}));C.rotation.x=-Math.PI/2,C.position.y=.012,a.add(C)}let K=new Ge;if(a.add(K),r){Te.visible=!1,K.visible=!1,d.visible=!1;let x=new be(new wn(90,90),new Yo({opacity:.42}));x.rotation.x=-Math.PI/2,x.position.y=.03,x.receiveShadow=!0,a.add(x)}let me=ci(128,128,(x,C,w)=>{x.fillStyle="#d9c79e",x.fillRect(0,0,C,w);for(let k=0;k<1400;k++)x.fillStyle=Math.random()<.5?"rgba(120,95,55,.12)":"rgba(255,255,255,.16)",x.fillRect(Math.random()*C,Math.random()*w,2,2)});me.repeat.set(30,3);let Ce=new be(new wn(260,11),new An({map:me,roughness:1}));Ce.rotation.x=-Math.PI/2,Ce.position.set(0,.04,-30.5),Ce.receiveShadow=!0,K.add(Ce);let ze=new be(new wn(260,3.5),new An({color:8227669,roughness:1}));ze.rotation.x=-Math.PI/2,ze.position.set(0,.05,-25),K.add(ze);let Oe=(()=>{let C=document.createElement("canvas");C.width=C.height=256;let w=C.getContext("2d"),k=w.createImageData(256,256),z=new Float32Array(256*256);for(let Y=0;Y<256;Y++)for(let re=0;re<256;re++){let he=re/256*6.2832,Ne=Y/256*6.2832;z[Y*256+re]=Math.sin(he*3+Math.sin(Ne*2)*1.3)*.5+Math.sin(Ne*5+he*2)*.3+Math.sin(he*9+Ne*7)*.15+Math.sin(he*14-Ne*11)*.08}for(let Y=0;Y<256;Y++)for(let re=0;re<256;re++){let he=z[Y*256+(re+1)%256]-z[Y*256+(re+256-1)%256],Ne=z[(Y+1)%256*256+re]-z[(Y+256-1)%256*256+re],Fe=-he*1.7,We=-Ne*1.7,De=Math.hypot(Fe,We,1),Je=(Y*256+re)*4;k.data[Je]=(Fe/De*.5+.5)*255,k.data[Je+1]=(We/De*.5+.5)*255,k.data[Je+2]=(1/De*.5+.5)*255,k.data[Je+3]=255}w.putImageData(k,0,0);let se=new mr(C);return se.wrapS=se.wrapT=_s,se.repeat.set(60,30),se.anisotropy=8,se})(),it=new An({color:2060160,roughness:.16,metalness:.3,normalMap:Oe,normalScale:new xe(.45,.45),envMapIntensity:.55}),rt=new be(new wn(600,200),it);rt.rotation.x=-Math.PI/2,rt.position.set(0,.07,-136),K.add(rt);let ke=[];for(let x=0;x<3;x++){let C=new be(new wn(260,.5),new kn({color:16777215,transparent:!0,opacity:.5,depthWrite:!1}));C.rotation.x=-Math.PI/2,C.position.set(0,.09,-36),K.add(C),ke.push(C)}let ct=O(1784368,{roughness:1});[[-90,-150,50,16],[10,-175,70,14],[110,-150,50,13],[-170,-120,50,14],[180,-100,44,12]].forEach(([x,C,w,k])=>{let z=new be(new Gn(w,24,12),ct);z.scale.y=k/w,z.position.set(x,0,C),K.add(z)});let N=new be(new vi(70,22,48,1,!0),O(2775626,{roughness:1}));N.position.set(-64,11,-165),K.add(N);let ve=ci(64,64,(x,C,w)=>{x.fillStyle="#fff",x.fillRect(0,0,C,w),x.fillStyle="#35505c",x.fillRect(7,9,50,40),x.fillStyle="rgba(255,255,255,.28)",x.fillRect(7,9,50,8),x.fillStyle="rgba(0,0,0,.25)",x.fillRect(31,9,2,40)});ve.repeat.set(1/1.7,1/2.3),ve.anisotropy=8;let ne=new Ge,ye=O(9085613,{roughness:.45,metalness:.2,fog:!1,map:ve}),ce=O(7243668,{roughness:.45,metalness:.2,fog:!1,map:ve});(()=>{let x=[],C=(w=>()=>(w=w*16807%2147483647)/2147483647)(11);for(let w=0;w<3;w++)for(let k=-66+w*3;k<70;k+=4.4+C()*2.2){let z=1-Math.min(1,Math.abs(k-4)/64),se=7+C()*10+z*(w===0?19:w===1?12:6);x.push([k+C()*1.4,se,3.6+C()*3.4,3.6+C()*3,w])}return x})().forEach(([x,C,w,k,z],se)=>{let Y=_(w,C,k,se%3===0?ce:ye,x,C/2,-z*6.5,!1);if(_e(Y.geometry),ne.add(Y),C>34)for(let re=0;re<2;re++)ne.add(_(w*.92,.5,k*1.02,O(12044496,{fog:!1}),x,C*(.45+.3*re),-z*6.5,!1));se%5===0&&ne.add(_(w*.55,2.2,k*.55,O(5268075,{fog:!1}),x,C+1.1,-z*6.5,!1))}),ne.add(_(150,2.4,40,O(8096386,{roughness:1,fog:!1}),2,1.2,-6,!1));let Pe=new Ge,T=O(13227740,{roughness:.5,metalness:.2,fog:!1});Pe.add(V(new be(new an(.9,1.8,96,12),T),0,48,0),V(new be(new an(6.4,4.6,8,20),T),0,82,0),V(new be(new an(4.4,5.4,2.2,20),O(1780272)),0,88,0),V(new be(new an(.14,.5,34,6),T),0,110,0)),Pe.add(V(new be(new Gn(.9,10,10),O(14701131,{emissive:14701131,emissiveIntensity:.8})),0,128,0)),Pe.scale.setScalar(.56),Pe.position.set(8,0,-3),ne.add(Pe),ne.scale.setScalar(.82),ne.position.set(12,0,-122),K.add(ne);{let x=new xs(new an(.07,.07,1,5),O(15331056,{roughness:.6}),110),C=new xs(new Nn(2.6,.5,.9),O(16054004,{roughness:.5}),110),w=new hn,k=5,z=()=>(k=k*16807%2147483647)/2147483647;for(let Y=0;Y<110;Y++){let re=-78+Y%22*2.4+z()*.5,he=-66+Math.floor(Y/22)*3.2+z()*.6,Ne=5+z()*4;w.position.set(re,Ne/2+.3,he),w.rotation.set(0,0,0),w.scale.set(1,Ne,1),w.updateMatrix(),x.setMatrixAt(Y,w.matrix),w.position.set(re,.3,he),w.rotation.y=(z()-.5)*.15,w.scale.set(1,1,1),w.updateMatrix(),C.setMatrixAt(Y,w.matrix)}K.add(x,C);let se=_(46,.3,1.2,O(9080716),-54,.35,-69.5,!1);K.add(se);for(let Y=0;Y<3;Y++){let re=new Ge;re.add(_(.5,9,.5,O(14263361,{fog:!1}),0,4.5,0,!1),_(9,.35,.35,O(14263361,{fog:!1}),2.5,9,0,!1)),re.position.set(52+Y*9,2.4,-108-Y*2),re.rotation.y=.3*Y,ne.add(re)}}function M(x,C,w,k){let z=new Ge;z.add(_(3.2*w,.5*w,1.1*w,O(15659754),0,.25*w,0),V(new be(new an(.06*w,.06*w,5*w,6),O(13227212)),0,3*w,0));let se=new be(new Kt,new An({color:16777215,side:bn,roughness:.8}));return se.geometry.setAttribute("position",new Et([0,.6*w,0,0,5.3*w,0,1.8*w,.7*w,0],3)),se.geometry.computeVertexNormals(),z.add(se),z.position.set(x,.1,C),z.rotation.y=k,z.userData.b=C,K.add(z),z}let W=[M(-22,-58,1.4,.3),M(26,-72,1.8,-.5),M(-60,-96,2.2,.1),M(70,-100,2.4,.7)],pe=new Ge;for(let x=0;x<14;x++)pe.add(_(2.4,.12,.55,O(8084026),0,.45,-x*.62));for(let x=0;x<8;x++)pe.add(_(.14,1.5,.14,O(4930350),-1.1,0,-x*1.1),_(.14,1.5,.14,O(4930350),1.1,0,-x*1.1));pe.position.set(18,.05,-31),K.add(pe),[[-14,-28],[6,-27.5],[34,-28.5],[-40,-28]].forEach(([x,C])=>{let w=new be(new Wo(.9,0),O(5857373,{roughness:1}));w.position.set(x,.3,C),w.scale.y=.6,w.castShadow=!0,K.add(w)});for(let x=0;x<26;x++){let C=-60+x*4.6+x%3,w=new be(new vi(.35,1.3,5),O(9083470,{roughness:1}));w.position.set(C,.65,-26.6+x*7%3*.4),K.add(w)}let ee=new Ge;ee.position.x=Kd,a.add(ee);let L=.15,Ue=2.7,Me=2.4,P={x0:0,x1:8.6,z0:-4.5,z1:4.5},ae={x0:-5.2,x1:0,z0:-3,z1:3.2},He={x0:-13,x1:15,z0:-9,z1:17},ge=new Ge;for(let x=0;x<7;x++){let C=[],w=6+x*5.2;for(let k=0;k<=64;k++){let z=k/64*Math.PI*2,se=w*(1+.1*Math.sin(z*2+x)+.07*Math.sin(z*3+1.5));C.push(new I(Math.cos(z)*se*1.25+1.5,.03,Math.sin(z)*se*.95+4))}ge.add(new pr(new Kt().setFromPoints(C),new ts({color:10470062,transparent:!0,opacity:.45})))}J(ge,{start:0,dur:2.2,kind:"fade",end:11.5});let At=[[He.x0,He.z0],[He.x1,He.z0],[He.x1,He.z1],[He.x0,He.z1],[He.x0,He.z0]].map(([x,C])=>new I(x,.06,C)),mt=new pr(new Kt().setFromPoints(At),new Zo({color:14701131,dashSize:.8,gapSize:.5}));mt.computeLineDistances(),J(mt,{start:2.2,dur:1.4,kind:"fade",end:14.6,parent:ee}),[[He.x0,He.z0],[He.x1,He.z0],[He.x1,He.z1],[He.x0,He.z1]].forEach(([x,C],w)=>{let k=new Ge;k.add(_(.14,1.4,.14,O(14701131),0,.7,0));let z=new be(new wn(.7,.45),new kn({color:14701131,side:bn}));z.position.set(.38,1.2,0),k.add(z),k.position.set(x,0,C),J(k,{start:1+w*.35,dur:.7,kind:"pop",end:14.6,parent:ee})});let tt=new Ge,$e=O(13227212);for(let x=0;x<3;x++){let C=x/3*Math.PI*2,w=_(.06,1.7,.06,$e,Math.cos(C)*.45,.82,Math.sin(C)*.45);w.rotation.z=Math.cos(C)*.3,w.rotation.x=-Math.sin(C)*.3,tt.add(w)}tt.add(_(.34,.3,.3,O(3885646),0,1.75,0),_(.08,.08,.5,O(14701131),0,1.92,.2));let Be=j(_(.38,.8,.26,O(15895592),0,1.15,0),_(.14,.8,.14,O(2765880),-.1,.4,0),_(.14,.8,.14,O(2765880),.1,.4,0),V(new be(new Gn(.2,12,12),O(14857356)),0,1.75,0),V(new be(new Gn(.22,12,8,0,Math.PI*2,0,Math.PI/2),O(15659754)),0,1.8,0));Be.position.set(1.4,0,-.4),tt.add(Be),tt.position.set(11,0,10),tt.rotation.y=-.8,J(tt,{start:1.4,dur:.9,kind:"grow",end:8.2,parent:ee});let ft=new Ge,It=new ts({color:15659754,transparent:!0,opacity:.7}),Yt=(x,C,w,k,z)=>{let se=new ea(new Xo(new Nn(C-x,z,k-w)),It);return se.position.set((x+C)/2,L+z/2,(w+k)/2),se};ft.add(Yt(P.x0,P.x1,P.z0,P.z1,Ue),Yt(ae.x0,ae.x1,ae.z0,ae.z1,Me)),J(ft,{start:4,dur:1.6,kind:"fade",end:9,parent:ee});let gt=ci(512,200,(x,C,w)=>{x.clearRect(0,0,C,w),x.strokeStyle="#e0524b",x.lineWidth=12,x.strokeRect(10,10,C-20,w-20),x.fillStyle="#e0524b",x.font='700 92px "IBM Plex Mono",monospace',x.textAlign="center",x.textBaseline="middle",x.fillText("APPROVED",C/2,w/2+4)},!1),Se=new be(new wn(7.5,2.9),new kn({map:gt,transparent:!0,side:bn,depthWrite:!1}));Se.position.set(3.6,7.2,6),Se.rotation.z=.12,J(Se,{start:6.4,dur:.8,kind:"pop",end:9.2,parent:ee});let B=new Ge,Ae=O(15906116,{roughness:.55}),Re=O(2239277);B.add(_(3.4,.55,1.1,Re,0,.3,.9),_(3.4,.55,1.1,Re,0,.3,-.9),_(2.1,.7,2.2,Ae,0,.95,0),_(1.1,1.1,1.4,Ae,-.5,1.7,0),_(.9,.6,1.1,O(10338240,{roughness:.1}),-.5,1.85,.06));let Ke=new Ge;Ke.position.set(.5,1.4,0),Ke.add(_(3.2,.32,.32,Ae,1.5,.7,0)),Ke.children[0].rotation.z=.55;let qe=new Ge;qe.position.set(2.9,1.8,0),qe.add(_(.28,2,.28,Ae,.2,-.8,0)),qe.children[0].rotation.z=.4,qe.add(_(.7,.5,.9,O(13209382),.8,-1.8,0)),Ke.add(qe),B.add(Ke),B.position.set(-10,0,4),B.rotation.y=.4,J(B,{start:7,dur:.9,kind:"grow",end:10.6,parent:ee,fn:x=>{Ke.rotation.z=Math.sin(x*1.6)*.2-.05,qe.rotation.z=Math.sin(x*1.6+1)*.3}}),J(_(15,.3,11.6,Q(O(9073496,{roughness:1}),{maps:[["map","dirt-c"],["normalMap","dirt-n"]],rep:[6,5],ns:1.2}),1.7,.05,0,!1),{start:7.4,dur:1.1,kind:"rise",parent:ee});let Ut=_(14,.3,10.2,Q(O(10135200,{roughness:.9}),{maps:[["map","concrete-c"],["normalMap","concrete-n"]],rep:[5,4],ns:.8}),1.7,.14,0);Ut.geometry.translate(0,.15,0),Ut.position.y=0,J(Ut,{start:8.2,dur:1.1,kind:"rise",parent:ee});let Ft=new Nn(.05,1,.1),nn=[],sn=(x,C,w,k,z)=>{let se=Math.hypot(w-x,k-C),Y=Math.max(2,Math.round(se/.6));for(let re=0;re<=Y;re++){let he=re/Y;nn.push({x:x+(w-x)*he,z:C+(k-C)*he,h:z,ry:Math.atan2(w-x,k-C)+Math.PI/2})}};sn(P.x0,P.z1,P.x1,P.z1,Ue),sn(P.x0,P.z0,P.x1,P.z0,Ue),sn(P.x0,P.z0,P.x0,P.z1,Ue),sn(P.x1,P.z0,P.x1,P.z1,Ue),sn(ae.x0,ae.z1,ae.x1,ae.z1,Me),sn(ae.x0,ae.z0,ae.x1,ae.z0,Me),sn(ae.x0,ae.z0,ae.x0,ae.z1,Me);let Lt=new xs(Ft,O(14268285,{roughness:.7}),nn.length);Lt.castShadow=!0;let un=new hn;J(Lt,{start:9,dur:2,kind:"custom",end:13.2,parent:ee,fn:(x,C)=>{nn.forEach((w,k)=>{let z=on(C*1.6-k/nn.length*.6,0,1),se=Math.max(.001,w.h*da(z));un.position.set(w.x,L+se/2,w.z),un.rotation.set(0,w.ry,0),un.scale.set(1,se,1),un.updateMatrix(),Lt.setMatrixAt(k,un.matrix)}),Lt.instanceMatrix.needsUpdate=!0}});let Rn=O(14268285,{roughness:.7}),Mr=j();[[P,Ue],[ae,Me]].forEach(([x,C])=>{[L+.05,L+C-.05].forEach(w=>{Mr.add(_(x.x1-x.x0,.08,.1,Rn,(x.x0+x.x1)/2,w,x.z1),_(x.x1-x.x0,.08,.1,Rn,(x.x0+x.x1)/2,w,x.z0),_(.1,.08,x.z1-x.z0,Rn,x.x0,w,(x.z0+x.z1)/2),_(.1,.08,x.z1-x.z0,Rn,x.x1,w,(x.z0+x.z1)/2))})}),J(Mr,{start:9.9,dur:1,kind:"fade",parent:ee,end:13.2});let fa=new Ge;{let x=(C,w,k,z,se,Y,re)=>{let he=se+Y,Ne=C+re,Fe=w-re,We=(k+z)/2,De=(Je,ht)=>{let at=new I().subVectors(ht,Je),Nt=new be(new Nn(.07,.1,at.length()),Rn);Nt.position.copy(Je).addScaledVector(at,.5),Nt.lookAt(ht),Nt.castShadow=!0,fa.add(Nt)};for(let Je=C;Je<=w+.01;Je+=.9){let ht=on((Je-C)/(w-C),0,1),at=Ne+(Fe-Ne)*ht;De(new I(Je,se,z),new I(at,he,We)),De(new I(Je,se,k),new I(at,he,We))}De(new I(Ne,he,We),new I(Fe,he,We))};x(P.x0-.6,P.x1+.6,P.z0-.6,P.z1+.6,L+Ue,2.1,2.6),x(ae.x0-.5,ae.x1+.1,ae.z0-.5,ae.z1+.5,L+Me,1.1,1.4)}J(fa,{start:10.4,dur:1.3,kind:"rise",parent:ee,end:13.4});let Es=j(_(P.x1-P.x0+.05,Ue,P.z1-P.z0+.05,O(2503738),(P.x0+P.x1)/2,L+Ue/2,0),_(ae.x1-ae.x0+.05,Me,ae.z1-ae.z0+.05,O(2503738),(ae.x0+ae.x1)/2,L+Me/2,(ae.z0+ae.z1)/2));J(Es,{start:11.4,dur:.8,kind:"fade",parent:ee,end:12.2});let Ss=new Ge,Mi=[];for(let x=P.x0;x<=P.x1+.1;x+=2.15)Mi.push(new I(x,0,P.z1+.7),new I(x,4.4,P.z1+.7));[1.1,2.2,3.3,4.4].forEach(x=>Mi.push(new I(P.x0,x,P.z1+.7),new I(P.x1,x,P.z1+.7)));for(let x=P.x0;x<P.x1;x+=2.15)Mi.push(new I(x,0,P.z1+.7),new I(x+2.15,2.2,P.z1+.7));Ss.add(new ea(new Kt().setFromPoints(Mi),new ts({color:13227212,transparent:!0,opacity:.9}))),[2.2,3.3].forEach(x=>Ss.add(_(P.x1-P.x0,.06,.8,O(9402968),(P.x0+P.x1)/2,x,P.z1+.9))),J(Ss,{start:11.2,dur:.9,kind:"fade",end:14.4,parent:ee});let Fi=new Ge,pa=Q(O(12107962,{roughness:.9}),{maps:[["map","concrete-c"],["normalMap","concrete-n"]],rep:[1.5,1.5],ns:.8});Fi.add(_(4.4,.08,12,pa,-2.9,.04,9.2,!1));for(let x=0;x<5;x++)Fi.add(_(4.4,.09,.06,O(9081997),-2.9,.045,4+x*2.4,!1));Fi.add(_(1.2,.07,12,O(11844789),P.x0+6.95,.04,10.7,!1));for(let x=0;x<5;x++)Fi.add(_(1.2,.08,.05,O(9739927),P.x0+6.95,.045,5.6+x*2.2,!1));r||J(Fi,{start:14.2,dur:1.1,kind:"fade",parent:ee});let ma=j(_(.1,1.1,.1,O(5917498),0,.55,0),_(.6,.34,.4,O(15659754),0,1.2,0),_(.5,.06,.02,O(12727348),0,1.22,.21));ma.position.set(3.4,0,13.4),r||J(ma,{start:14.6,dur:.6,kind:"pop",parent:ee});let Er=ci(256,256,(x,C,w)=>{x.fillStyle="#fff",x.fillRect(0,0,C,w);for(let k=0;k<2400;k++){let z=Math.random();x.fillStyle=z<.4?"rgba(0,0,0,.22)":z<.8?"rgba(255,255,255,.18)":"rgba(0,0,0,.1)",x.beginPath(),x.ellipse(Math.random()*C,Math.random()*w,3+Math.random()*4,1.5+Math.random()*2,Math.random()*3.14,0,6.28),x.fill()}});Er.repeat.set(4,3);function ga(x,C,w,k){let z=new Ge,se=O(5917498,{roughness:1}),Y=new be(new an(.22*w,.42*w,3.6*w,9),se);Y.position.y=1.8*w,Y.rotation.z=.12,Y.castShadow=!0,z.add(Y),z.add(V(Object.assign(new be(new an(.12*w,.22*w,2.4*w,7),se),{}),-.8*w,3.5*w,0)),z.children[1].rotation.z=.9;let re=[3103301,3499600,2838848,4090706,3828306],he=[[0,4.8,0,2.5],[2,4.3,.6,2],[-2.2,4.5,-.5,1.9],[.8,6.2,.3,1.8],[-1,6,1,1.5]];he.forEach(([We,De,Je,ht],at)=>{let Nt=new be(new oa(ht*w,3),O(re[at%5],{roughness:.95,map:Er,bumpMap:Er,bumpScale:1.6}));Nt.position.set(We*w,De*w,Je*w),Nt.scale.y=.82,Nt.castShadow=!0,z.add(Nt)});let Ne=[];for(let We=0;We<260;We++){let De=he[We%5],Je=Math.random()*6.28,ht=Math.acos(2*Math.random()-1),at=De[3]*w*1.04;Ne.push(De[0]*w+at*Math.sin(ht)*Math.cos(Je),De[1]*w+at*Math.cos(ht)*.82,De[2]*w+at*Math.sin(ht)*Math.sin(Je))}let Fe=new Kt;Fe.setAttribute("position",new Et(Ne,3)),z.add(new Bo(Fe,new ta({color:14701131,size:.13*w+.06,sizeAttenuation:!0}))),z.position.set(x,0,C),J(z,{start:k,dur:1.1,kind:"grow",parent:ee})}r||(ga(12.5,.5,1.1,14.4),ga(-11,-3,.9,14.8));function A(x,C,w,k){let z=new Ge;z.add(V(new be(new an(.18*w,.26*w,3*w,8),O(4930350,{roughness:1})),0,1.5*w,0));for(let se=0;se<10;se++){let Y=se/10*Math.PI*2,re=new be(new vi(.24*w,2.6*w,4),O(se%2?4090706:5012575,{roughness:.9}));re.scale.z=.25,re.position.set(Math.cos(Y)*.9*w,3*w-.25*w,Math.sin(Y)*.9*w),re.rotation.set(Math.sin(Y)*1.25,0,-Math.cos(Y)*1.25),re.castShadow=!0,z.add(re)}z.position.set(x,0,C),J(z,{start:k,dur:1,kind:"grow",parent:ee})}r||(A(-8.4,5.6,1,14.9),A(11,9,.8,15));function G(x,C,w,k){let z=new Ge,se=O(5209950,{roughness:.9});for(let Y=0;Y<9;Y++){let re=Y/9*Math.PI*2,he=new be(new vi(.09*w,1.6*w,3),se);he.position.set(Math.cos(re)*.18*w,.8*w,Math.sin(re)*.18*w),he.rotation.set(Math.sin(re)*.45,0,-Math.cos(re)*.45),z.add(he)}z.position.set(x,0,C),J(z,{start:k,dur:.8,kind:"grow",parent:ee})}r||(G(-.5,5.4,1,15.1),G(8.4,5.4,1.1,15.2),G(-5.6,4.8,1,15.2),G(1.4,12,.9,15.3),G(5.2,11,.9,15.3),G(-6.8,14,.9,15.4));let $=[];for(let x=0;x<8;x++){let C=new be(new Gn(.28,10,10),new kn({color:15659754,transparent:!0,opacity:0,depthWrite:!1}));ee.add(C),$.push(C)}{let x=O(16742938,{roughness:.6}),C=O(14725260,{roughness:.7}),w=O(2371642,{roughness:.8}),k=O(16053486,{roughness:.4}),z=O(15266504,{roughness:.3,metalness:.2}),se=ci(128,128,(et,Jt,pn)=>{et.clearRect(0,0,Jt,pn),et.strokeStyle="#cfd6d4",et.lineWidth=2.2;for(let te=0;te<=Jt;te+=16)et.beginPath(),et.moveTo(te,0),et.lineTo(te,pn),et.stroke(),et.beginPath(),et.moveTo(0,te),et.lineTo(Jt,te),et.stroke();et.lineWidth=5,et.strokeRect(1,1,Jt-2,pn-2)},!0),Y=new kn({map:se,transparent:!0,alphaTest:.35,side:bn}),re=new Ge,he=-9,Ne=12.5,Fe=-8.5,We=9.5,De=3.4,Je=(et,Jt,pn)=>{let te=new Ge,oe=new be(new wn(De,2),Y);return oe.position.y=1.05,te.add(oe),[-De/2,De/2].forEach(le=>te.add(_(.07,2.1,.07,O(12568516,{metalness:.5,roughness:.4}),le,1.05,0))),te.add(_(.5,.18,.5,O(10134176,{roughness:.9}),-De/2,.09,0),_(.5,.18,.5,O(10134176,{roughness:.9}),De/2,.09,0)),te.position.set(et,0,Jt),te.rotation.y=pn,te};for(let et=he+De/2;et<Ne;et+=De)re.add(Je(et,Fe,0)),et>3&&et<9.5||re.add(Je(et,We,0));for(let et=Fe+De/2+De;et<We;et+=De)re.add(Je(he,et,Math.PI/2),Je(Ne,et,Math.PI/2));let ht=j(_(2.2,1.3,.08,O(16777215,{roughness:.7}),0,1.9,0),_(2,.3,.1,O(12727348),0,2.25,0),_(.08,2.4,.08,O(5594458),-.9,1.2,0),_(.08,2.4,.08,O(5594458),.9,1.2,0));ht.position.set(2.2,0,We+.1),re.add(ht),J(re,{start:6.6,dur:1.2,kind:"fade",end:14.6,parent:ee});let at=j(_(1.2,2.3,1.2,O(3112895,{roughness:.55}),0,1.15,0),_(.9,.12,.9,O(15265522),0,2.36,0),_(.7,1.7,.05,O(2320547),0,1.1,.62));at.position.set(-7.6,0,6.6),at.rotation.y=.2,J(at,{start:6.8,dur:.8,kind:"pop",end:14.7,parent:ee});let Nt=(et,Jt)=>{let pn=new be(new vi(.2,.55,10),O(16738847,{roughness:.6}));pn.position.set(et,.28,Jt),pn.castShadow=!0;let te=_(.4,.04,.4,O(2239022),et,.02,Jt,!1);return j(pn,te)},yn=j(Nt(4,10.4),Nt(7.6,10.4),Nt(10.8,8.6),Nt(-8.2,9));J(yn,{start:7,dur:.6,kind:"pop",end:14.7,parent:ee});let Zt=O(14268285,{roughness:.75}),St=new Ge;for(let et=0;et<4;et++)for(let Jt=0;Jt<5;Jt++)St.add(_(3.2,.12,.1,Zt,0,.18+et*.14,-.3+Jt*.15,!1));St.add(_(3.4,.1,.9,O(9071172,{roughness:.9}),0,.06,0)),St.position.set(-6.8,0,2.2),J(St,{start:9,dur:.8,kind:"pop",end:13.4,parent:ee});let ot=new Ge;ot.add(_(1.4,.12,1.2,O(9071172,{roughness:.9}),0,.06,0));for(let et=0;et<5;et++)for(let Jt=0;Jt<4;Jt++)ot.add(_(.32,.18,.64,O(12104356,{roughness:.9}),-.48+Jt*.32,.21+et*.18,0,!1));ot.position.set(10.2,0,3.2),J(ot,{start:10.4,dur:.8,kind:"pop",end:14.6,parent:ee});let Pt=(et,Jt,pn,te)=>{let oe=new Ge;oe.add(_(.2,.8,.2,w,-.12,.4,0),_(.2,.8,.2,w,.12,.4,0),_(.5,.62,.3,x,0,1.13,0),_(.52,.07,.31,z,0,1.02,0),_(.52,.07,.31,z,0,1.22,0),_(.14,.55,.14,x,-.34,1.1,0),_(.14,.55,.14,x,.34,1.1,0));let le=new be(new Gn(.17,12,10),C);le.position.y=1.62,le.castShadow=!0,oe.add(le);let ue=new be(new Gn(.19,12,8,0,6.28,0,1.5),k);return ue.position.y=1.67,ue.castShadow=!0,oe.add(ue),oe.position.set(et,0,Jt),oe.rotation.y=pn,oe.userData.ph=te,oe},nt=Pt(3.4,3.6,-.6,0),Wt=Pt(-3.4,-6.3,.4,1.7),Cn=Pt(7.8,-3.2,2.4,3.1);[[nt,8.4,14.5],[Wt,9.6,14.5],[Cn,10.8,14.5]].forEach(([et,Jt,pn])=>J(et,{start:Jt,dur:.6,kind:"custom",end:pn,parent:ee,fn:te=>{et.position.y=Math.abs(Math.sin(te*2.2+et.userData.ph))*.04,et.rotation.y+=Math.sin(te*.6+et.userData.ph)*.004}}));let Ht=new Ge,Ei=_(1.9,1.7,2.1,O(15921902,{roughness:.5}),0,1.45,2.6),Qt=new be(new an(.95,.7,3.4,18),O(16747039,{roughness:.45,metalness:.2}));Qt.rotation.x=Math.PI/2.4,Qt.position.set(0,2.15,-.3),Qt.castShadow=!0,Ht.add(_(2.1,.35,6.6,w,0,.75,.2),Ei,Qt,_(1.2,.5,.05,O(7044230,{metalness:.5}),0,1.8,3.66)),[[-.85,2.5],[.85,2.5],[-.85,-1.4],[.85,-1.4],[-.85,-2.4],[.85,-2.4]].forEach(([et,Jt])=>{let pn=new be(new an(.5,.5,.4,14),O(1382683,{roughness:.9}));pn.rotation.z=Math.PI/2,pn.position.set(et,.5,Jt),pn.castShadow=!0,Ht.add(pn)}),Ht.position.set(15.5,0,1.5),Ht.rotation.y=-Math.PI/2+.15,J(Ht,{start:8,dur:.9,kind:"custom",end:10.8,parent:ee,fn:et=>{Qt.rotation.y=et*2.2}})}let Z=Object.assign({},jd,e.design||{}),H=x=>(x.clippingPlanes=[h],x.clipShadows=!0,x),Le={};function Ve(x,C){if(!Le[x]){let z={weatherboard:{tw:.4,th:.18,draw:(Y,re,he)=>{Y.fillStyle="#fff",Y.fillRect(0,0,re,he),Y.fillStyle="rgba(0,0,0,.28)",Y.fillRect(0,he-5,re,5),Y.fillStyle="rgba(255,255,255,.7)",Y.fillRect(0,0,re,3)},w:16,h:64},boardbatten:{tw:.32,th:1,draw:(Y,re,he)=>{Y.fillStyle="#fff",Y.fillRect(0,0,re,he),Y.fillStyle="rgba(0,0,0,.3)",Y.fillRect(0,0,6,he),Y.fillStyle="rgba(255,255,255,.7)",Y.fillRect(6,0,3,he)},w:64,h:16},brick:{tw:.46,th:.15,draw:(Y,re,he)=>{Y.fillStyle="#d8d8d8",Y.fillRect(0,0,re,he),Y.fillStyle="#8a8a8a",Y.fillRect(0,0,re,3),Y.fillRect(0,he/2,re,3),Y.fillRect(0,0,3,he/2),Y.fillRect(re/2,he/2,3,he/2);for(let Ne=0;Ne<60;Ne++)Y.fillStyle=Math.random()<.5?"rgba(0,0,0,.07)":"rgba(255,255,255,.1)",Y.fillRect(Math.random()*re,Math.random()*he,8+Math.random()*10,4)},w:128,h:64},plaster:{tw:2,th:2,draw:(Y,re,he)=>{Y.fillStyle="#fff",Y.fillRect(0,0,re,he);for(let Ne=0;Ne<900;Ne++)Y.fillStyle=Math.random()<.5?"rgba(0,0,0,.05)":"rgba(255,255,255,.35)",Y.fillRect(Math.random()*re,Math.random()*he,2,2)},w:128,h:128},metal:{tw:.2,th:1,draw:(Y,re,he)=>{let Ne=Y.createLinearGradient(0,0,re,0);Ne.addColorStop(0,"#aaa"),Ne.addColorStop(.5,"#fff"),Ne.addColorStop(1,"#aaa"),Y.fillStyle=Ne,Y.fillRect(0,0,re,he)},w:64,h:8}}[x],se=ci(z.w,z.h,z.draw);se.repeat.set(1/z.tw,1/z.th),Le[x]=se}let w=H(new An({map:Le[x],bumpMap:Le[x],bumpScale:x==="plaster"?1.2:3,color:C,roughness:x==="metal"?.4:.82,metalness:x==="metal"?.35:0,envMapIntensity:.4}));return x==="brick"?Q(w,{maps:[["map","brick-g"],["normalMap","brick-n"]],rep:[1/1.7,1/1.15],ns:1.4}):x==="weatherboard"?Q(w,{maps:[["map","siding-g"],["normalMap","siding-n"]],rep:[1/1.4,1/1.4],ns:1.6}):x==="plaster"&&Q(w,{maps:[["map","plaster-g"],["normalMap","plaster-n"]],rep:[1/1.6,1/1.6],ns:.8}),w}let je=null;function Qe(x){return je||(je=ci(128,8,(C,w,k)=>{for(let z=0;z<w;z+=w/4){let se=C.createLinearGradient(z,0,z+w/4,0);se.addColorStop(0,"#9aa7ac"),se.addColorStop(.5,"#ffffff"),se.addColorStop(1,"#9aa7ac"),C.fillStyle=se,C.fillRect(z,0,w/4,k)}})),Q(H(new An({map:je,bumpMap:je,bumpScale:2,roughness:.45,metalness:.3,color:x,side:bn,envMapIntensity:1.1})),{maps:[["normalMap","corr-n"]],rep:[1/1.2,1/1.2],ns:1.1})}function pt(x,C,w,k,z,se,Y){let re;if(x==="hip"||x==="flat")re=new Nn(w-C,se,z-k),re.translate((C+w)/2,L+se/2,(k+z)/2);else if(x==="gablefront"){let he=new Oi;he.moveTo(C,L),he.lineTo(w,L),he.lineTo(w,L+se),he.lineTo((C+w)/2,L+se+Y),he.lineTo(C,L+se),he.closePath(),re=new aa(he,{depth:z-k,bevelEnabled:!1}),re.translate(0,0,k)}else{let he=new Oi;x==="gable"?(he.moveTo(-z,L),he.lineTo(-k,L),he.lineTo(-k,L+se),he.lineTo(-(k+z)/2,L+se+Y),he.lineTo(-z,L+se)):(he.moveTo(-z,L),he.lineTo(-k,L),he.lineTo(-k,L+se+Y),he.lineTo(-z,L+se)),he.closePath(),re=new aa(he,{depth:w-C,bevelEnabled:!1}),re.rotateY(Math.PI/2),re.translate(C,0,0)}return _e(re.toNonIndexed?re.toNonIndexed():re)}function lt(x,C,w,k,z){let se=(w+k)/2;return L+x+C*(1-on(Math.abs(z-se)/((k-w)/2),0,1))}function ut(x,C,w,k,z,se){let Y=(k+z)/2;return x==="skillion"?L+C+w*on((z-se)/(z-k),0,1):L+C+w*(1-on(Math.abs(se-Y)/((z-k)/2),0,1))}let jt="none";function Sn(x,C,w,k,z,se,Y,re,he){let Ne=new Ge,Fe=L+se,We=C-he,De=w+he,Je=k-he,ht=z+he,at=(k+z)/2,Nt=1/.45,yn=(St,ot)=>{let Pt=new Kt,nt=[],Wt=[];(St.length===4?[[0,1,2],[0,2,3]]:[[0,1,2]]).forEach(Ht=>Ht.forEach(Ei=>{nt.push(...St[Ei]),Wt.push(...ot(St[Ei]))})),Pt.setAttribute("position",new Et(nt,3)),Pt.setAttribute("uv",new Et(Wt,2)),Pt.computeVertexNormals();let Cn=new be(Pt,re);Cn.castShadow=!0,Cn.receiveShadow=!0,Ne.add(Cn)},Zt=H(O(1976105,{roughness:.6}));if(x==="flat"){let St=H(O(9411222,{roughness:.9}));Ne.add(_(w-C+.3,.16,z-k+.3,St,(C+w)/2,Fe+.08,(k+z)/2));let ot=H(O(15855074,{roughness:.9})),Pt=.2,nt=.55;Ne.add(_(w-C+.3,nt,Pt,ot,(C+w)/2,Fe+nt/2,z+.15),_(w-C+.3,nt,Pt,ot,(C+w)/2,Fe+nt/2,k-.15),_(Pt,nt,z-k+.3,ot,C-.15,Fe+nt/2,(k+z)/2),_(Pt,nt,z-k+.3,ot,w+.15,Fe+nt/2,(k+z)/2))}else if(x==="hip"){let St=Math.max(1.4,(w-C)*.3),ot=We+St,Pt=De-St,nt=Fe+Y;if(jt==="villa"){let Wt=H(O(1976105,{roughness:.5}));[ot,Pt].forEach(Cn=>{let Ht=new be(new vi(.07,.55,8),Wt);Ht.position.set(Cn,nt+.32,at),Ne.add(Ht);let Ei=new be(new Gn(.1,10,10),Wt);Ei.position.set(Cn,nt+.1,at),Ne.add(Ei)})}yn([[We,Fe,ht],[De,Fe,ht],[Pt,nt,at],[ot,nt,at]],Wt=>[Wt[0]*Nt,0]),yn([[De,Fe,Je],[We,Fe,Je],[ot,nt,at],[Pt,nt,at]],Wt=>[Wt[0]*Nt,0]),yn([[De,Fe,ht],[De,Fe,Je],[Pt,nt,at]],Wt=>[Wt[2]*Nt,0]),yn([[We,Fe,Je],[We,Fe,ht],[ot,nt,at]],Wt=>[Wt[2]*Nt,0]),Ne.add(_(De-We,.22,.12,Zt,(We+De)/2,Fe,ht),_(De-We,.22,.12,Zt,(We+De)/2,Fe,Je),_(.12,.22,ht-Je,Zt,We,Fe,at),_(.12,.22,ht-Je,Zt,De,Fe,at),_(Pt-ot,.14,.22,Zt,(ot+Pt)/2,nt+.05,at))}else if(x==="gablefront"){let St=Fe+Y,ot=(We+De)/2,Pt=Math.hypot(ot-We,Y),nt=Math.atan2(Y,ot-We);yn([[We,Fe,ht],[ot,St,ht],[ot,St,Je],[We,Fe,Je]],Wt=>[Wt[2]*Nt,0]),yn([[De,Fe,Je],[ot,St,Je],[ot,St,ht],[De,Fe,ht]],Wt=>[Wt[2]*Nt,0]),Ne.add(_(.12,.22,ht-Je,Zt,We,Fe,at),_(.12,.22,ht-Je,Zt,De,Fe,at),_(.22,.14,ht-Je,Zt,ot,St+.04,at)),[Je,ht].forEach(Wt=>{let Cn=_(Pt,.14,.12,Zt,(We+ot)/2,(Fe+St)/2,Wt);Cn.rotation.z=nt,Ne.add(Cn);let Ht=_(Pt,.14,.12,Zt,(De+ot)/2,(Fe+St)/2,Wt);Ht.rotation.z=-nt,Ne.add(Ht)})}else if(x==="gable"){let St=Fe+Y;yn([[We,Fe,ht],[De,Fe,ht],[De,St,at],[We,St,at]],ot=>[ot[0]*Nt,0]),yn([[De,Fe,Je],[We,Fe,Je],[We,St,at],[De,St,at]],ot=>[ot[0]*Nt,0]),Ne.add(_(De-We,.22,.12,Zt,(We+De)/2,Fe,ht),_(De-We,.22,.12,Zt,(We+De)/2,Fe,Je),_(De-We,.14,.22,Zt,(We+De)/2,St+.04,at)),[We,De].forEach(ot=>{let Pt=_(.12,.14,Math.hypot(ht-at,Y),Zt,ot,(Fe+St)/2,(ht+at)/2);Pt.rotation.x=Math.atan2(Y,ht-at),Ne.add(Pt);let nt=_(.12,.14,Math.hypot(at-Je,Y),Zt,ot,(Fe+St)/2,(at+Je)/2);nt.rotation.x=-Math.atan2(Y,at-Je),Ne.add(nt)})}else{let St=Fe+Y;yn([[We,Fe,ht],[De,Fe,ht],[De,St,Je],[We,St,Je]],ot=>[ot[0]*Nt,0]),Ne.add(_(De-We,.22,.12,Zt,(We+De)/2,Fe,ht),_(De-We,.22,.12,Zt,(We+De)/2,St,Je)),[We,De].forEach(ot=>{let Pt=_(.12,.16,Math.hypot(ht-Je,Y),Zt,ot,(Fe+St)/2,(Je+ht)/2);Pt.rotation.x=-Math.atan2(Y,ht-Je),Ne.add(Pt)})}return Ne}let Tt=4,mn=!1,Bt=e.onInside||null,dt=[],Vn=null,zt=null,dn=null,ic=null,Qn=null,ns=[],fn=new I(5.6,6,1.2),li=[],Wn="house",Xn=()=>H(new An({color:8827318,roughness:.04,metalness:.7,transparent:!0,opacity:.82,envMapIntensity:1.4}));function bs(x){if(zt){zt.traverse(te=>{te.geometry&&te.geometry.dispose()}),ee.remove(zt);for(let te=c.length-1;te>=0;te--)c[te].tag===Wn&&c.splice(te,1)}ns=[],li=[],dt=[];let C=new Ge;zt=C,ee.add(C),jt=x.detail||"none";let w=x.roof,k=x.shape==="twostorey",z=x.shape==="lshape",se=x.garage===!0,Y=x.garage==="carport",re=w==="skillion"?2.55:Ue,he=k?re+2.6:re,Ne=w==="flat"?.3:w==="hip"?2.1:w==="gable"||w==="gablefront"?2.3:1.5,Fe=w==="skillion"?2.3:Me,We=w==="flat"?.3:w==="hip"?1.1:w==="gable"||w==="gablefront"?1.3:.9,De={x0:0,x1:3.8,z0:-9.2,z1:-4.5},Je=w==="flat"?.3:w==="hip"?1.3:w==="gable"||w==="gablefront"?1.4:1,ht=()=>Ve(x.cladding,x.wall),at=new be(pt(w,P.x0,P.x1,P.z0,P.z1,he,Ne),ht());at.castShadow=at.receiveShadow=!0;let Nt=new be(pt(w,ae.x0,ae.x1,ae.z0,ae.z1,Fe,We),ht());Nt.castShadow=Nt.receiveShadow=!0;let yn=new Ge;yn.add(at),se&&yn.add(Nt);let Zt=null;z&&(Zt=new be(pt(w,De.x0,De.x1,De.z0,De.z1,re,Je),ht()),Zt.castShadow=Zt.receiveShadow=!0,yn.add(Zt)),[at,Nt].forEach(te=>{te.geometry.computeBoundingBox(),te.userData.top=te.geometry.boundingBox.max.y}),C.add(yn);let St=L;J(yn,{start:12,dur:1.3,kind:"custom",tag:Wn,add:!1,fn:(te,oe)=>{let le=Math.max(.001,da(oe));yn.scale.y=le,yn.position.y=St*(1-le)}}),dn=new Ge,C.add(dn);let ot=new Ge;if(dn.add(ot),ot.add(Sn(w,P.x0,P.x1,P.z0,P.z1,he,Ne,Qe(x.roofColor),.6)),se&&ot.add(Sn(w,ae.x0,ae.x1,ae.z0,ae.z1,Fe,We,Qe(x.roofColor),.5)),z&&ot.add(Sn(w,De.x0,De.x1,De.z0,De.z1,re,Je,Qe(x.roofColor),.5)),Y){let te=H(O(3813158,{roughness:.8})),oe=new Ge;[[ae.x0+.2,ae.z0+.2],[ae.x1-.2,ae.z0+.2],[ae.x0+.2,ae.z1-.2],[ae.x1-.2,ae.z1-.2]].forEach(([ue,Ee])=>oe.add(_(.16,2.4,.16,te,ue,L+1.2,Ee)));let le=new be(new Nn(ae.x1-ae.x0+.8,.14,ae.z1-ae.z0+.8),Qe(x.roofColor));le.position.set((ae.x0+ae.x1)/2,L+2.5,(ae.z0+ae.z1)/2),le.castShadow=!0,oe.add(le),ot.add(oe)}if(J(ot,{start:12.9,dur:1.3,kind:"drop",tag:Wn,add:!1}),x.chimney){let te=w==="gablefront"?-1.2:1.2,oe=w==="hip"?5.6:w==="gablefront"?6.6:6.2,le=(w==="gablefront"?lt(he,Ne,P.x0-.6,P.x1+.6,oe):ut(w,he,Ne,P.z0-.6,P.z1+.6,te))-.4,ue=j(_(.7,2.4,.7,H(O(9189938,{roughness:.95})),0,1.2,0),_(.9,.18,.9,H(O(2239277)),0,2.5,0));ue.position.set(oe,le,te),dn.add(ue),J(ue,{start:13.6,dur:.7,kind:"rise",tag:Wn,add:!1}),fn.set(oe,le+2.6,te)}if(x.solar){let te=ci(64,96,(le,ue,Ee)=>{le.fillStyle="#1a2a4c",le.fillRect(0,0,ue,Ee),le.strokeStyle="rgba(180,200,240,.55)",le.lineWidth=1;for(let Ie=1;Ie<4;Ie++)le.beginPath(),le.moveTo(Ie*ue/4,0),le.lineTo(Ie*ue/4,Ee),le.stroke();for(let Ie=1;Ie<6;Ie++)le.beginPath(),le.moveTo(0,Ie*Ee/6),le.lineTo(ue,Ie*Ee/6),le.stroke()},!1),oe=H(new An({map:te,roughness:.25,metalness:.6}));if(w==="gablefront"){let le=P.x0-.6,ue=P.x1+.6,Ee=(le+ue)/2,Ie=Math.atan2(Ne,Ee-le);for(let bt=0;bt<4;bt++)[.3,.62].forEach(Mt=>{let _t=ue-(ue-Ee)*Mt,Ot=_(1.6,.05,1,oe,_t,lt(he,Ne,le,ue,_t)+.1,-3+bt*1.7);Ot.rotation.z=-Ie,dn.add(Ot)})}else{let le=P.z0-.6,ue=P.z1+.6,Ee=Math.atan2(Ne,w==="skillion"?ue-le:ue-(P.z0+P.z1)/2),Ie=w==="skillion"?[.28,.62]:[.34,.7];for(let bt=0;bt<4;bt++)Ie.forEach(Mt=>{let _t=w==="skillion"?ue-(ue-le)*Mt:P.z1+.6-(P.z1+.6-(P.z0+P.z1)/2)*Mt,Ot=_(1,.05,1.6,oe,1.6+bt*1.2,ut(w,he,Ne,le,ue,_t)+.1,_t);Ot.rotation.x=Ee,dn.add(Ot)})}}if(x.detail==="bungalow"&&w==="gablefront"){let te=ci(64,64,(ue,Ee,Ie)=>{ue.fillStyle="#8a6b4a",ue.fillRect(0,0,Ee,Ie);for(let bt=0;bt<Ie;bt+=8)ue.fillStyle=bt%16?"rgba(0,0,0,.18)":"rgba(255,255,255,.08)",ue.fillRect(0,bt,Ee,6),ue.fillStyle="rgba(0,0,0,.35)",ue.fillRect(0,bt+6,Ee,2)});te.repeat.set(4,2);let oe=new Oi;oe.moveTo(P.x0,L+he),oe.lineTo(P.x1,L+he),oe.lineTo((P.x0+P.x1)/2,L+he+Ne),oe.closePath(),[P.z1+.03,P.z0-.03].forEach((ue,Ee)=>{let Ie=new be(new ca(oe),H(new An({map:te,roughness:.9})));Ie.position.z=ue,Ee&&(Ie.rotation.y=Math.PI),dn.add(Ie)});let le=H(O(3813158,{roughness:.8}));for(let ue=P.z0-.3;ue<=P.z1+.3;ue+=.7)[P.x0-.55,P.x1+.55].forEach(Ee=>dn.add(_(.12,.12,.35,le,Ee,L+he-.12,ue)))}if(x.detail==="deco"){let te=H(O(15855074,{roughness:.8})),oe=H(O(15855074,{roughness:.8}));[[P.z1+.05,0],[P.z0-.05,0]].forEach(([le])=>{[L+1.1,L+he-.5].forEach(ue=>dn.add(_(P.x1-P.x0+.12,.09,.16,oe,(P.x0+P.x1)/2,ue,le)))}),dn.add(_(3.4,1.25,.32,te,P.x0+6.6,L+he+.62,P.z1+.12)),[-1.1,0,1.1].forEach(le=>dn.add(_(.1,1,.36,H(O(13214794,{roughness:.5,metalness:.4})),P.x0+6.6+le,L+he+.62,P.z1+.14)))}let Pt=[],nt=H(O(new Ye(x.joinery),{roughness:.5})),Wt=Xn(),Cn=H(O(16052714,{roughness:.6})),Ht=new Ge;C.add(Ht);let Ei=()=>new kn({color:13625070,side:bn});function Qt(te,oe,le,ue,Ee,Ie,bt){let Mt=new Ge,_t=.07;Mt.add(_(te,_t,.14,nt,0,oe/2-_t/2,0),_(te,_t,.14,nt,0,-oe/2+_t/2,0),_(_t,oe,.14,nt,-te/2+_t/2,0,0),_(_t,oe,.14,nt,te/2-_t/2,0,0));for(let Xt=1;Xt<=bt;Xt++)Mt.add(_(.05,oe,.1,nt,-te/2+te*Xt/(bt+1),0,0));let Ot=new be(new wn(te-_t*2,oe-_t*2),Wt.clone());Ot.position.z=-.01,Mt.add(Ot);let _n=new be(new wn(te-_t*2,oe-_t*2),new kn({color:16764805,transparent:!0,opacity:0}));_n.position.z=-.06,Mt.add(_n),ns.push(_n);let Rt=new be(new wn(te-_t*2,oe-_t*2),Ei());Rt.position.z=-.17,Mt.add(Rt),dt.push(Rt);{let Xt=Math.abs(Ie)<.01?"front":Math.abs(Math.abs(Ie)-Math.PI)<.01?"back":Ie>0?"right":"left",zi=Xt==="front"||Xt==="back"?le:Ee;(Xt==="front"||Xt==="back"?le>P.x0+.3&&le<P.x1-.3:Ee>P.z0+.3&&Ee<P.z1-.3)&&ue-oe/2<L+re-.2&&(Xt!=="right"||le>P.x1-.2)&&(Xt!=="left"||le<P.x0+.2)&&(Xt!=="front"||Ee<P.z1+.5)&&Pt.push({wl:Xt,c:zi,w:te-.14,h:oe-.14,y:ue})}Mt.add(_(te,.05,.05,nt,0,oe/2,-.17),_(te,.05,.05,nt,0,-oe/2,-.17),_(.05,oe,.05,nt,-te/2,0,-.17),_(.05,oe,.05,nt,te/2,0,-.17)),x.detail==="villa"&&(Mt.add(_(te,.045,.1,nt,0,oe*.08,.01)),bt===0&&Mt.add(_(.045,oe,.1,nt,0,0,.01)),Mt.add(_(.045,oe*.5,.1,nt,-te*.25,-oe*.25,.01),_(.045,oe*.5,.1,nt,te*.25,-oe*.25,.01))),Mt.add(_(te+.22,.06,.24,Cn,0,-oe/2-.04,.09),_(te+.14,.08,.1,Cn,0,oe/2+.05,.04),_(.07,oe+.1,.1,Cn,-te/2-.06,0,.03),_(.07,oe+.1,.1,Cn,te/2+.06,0,.03)),Mt.position.set(le,ue,Ee),Mt.rotation.y=Ie,Ht.add(Mt)}let et=()=>Ve(x.cladding,x.wall);if(x.windows==="large")Qt(4.2,2,P.x0+2.3,L+1.2,P.z1+.03,0,2);else if(x.bay){let te=P.x0+2.35,oe=P.z1,le=et();Ht.add(_(.12,2.2,1.1,le,te-1.15,L+1.15,oe+.55),_(.12,2.2,1.1,le,te+1.15,L+1.15,oe+.55),_(2.4,.5,1.1,le,te,L+.4,oe+.55)),Qt(2.2,1.4,te,L+1.6,oe+1.1,0,2);let ue=new be(new Nn(2.8,.1,1.6),Qe(x.roofColor));ue.position.set(te,L+2.38,oe+.7),ue.rotation.x=.18,Ht.add(ue)}else Qt(2.9,1.4,P.x0+2.35,L+1.6,P.z1+.03,0,1);if(x.windows!=="large"&&Qt(.9,1.4,P.x0+4.75,L+1.6,P.z1+.03,0,0),Qt(.7,2,P.x0+6.05,L+1.15,P.z1+.03,0,0),Qt(1.6,1.2,P.x1+.03,L+1.6,0,Math.PI/2,1),Qt(1.6,1.2,P.x1+.03,L+1.6,-2.8,Math.PI/2,0),z||Qt(2.2,1.2,3,L+1.6,P.z0-.03,Math.PI,1),Qt(1.2,1.2,7,L+1.6,P.z0-.03,Math.PI,0),z&&(Qt(1.6,1.2,1.9,L+1.6,De.z0-.03,Math.PI,1),Qt(1.4,1.2,De.x1+.03,L+1.6,-6.9,Math.PI/2,0),Qt(1.4,1.2,De.x0-.03,L+1.6,-6.9,-Math.PI/2,0)),k){let te=re+.05;Qt(2.9,1.4,P.x0+2.35,L+1.6+te,P.z1+.03,0,1),Qt(1.4,1.4,P.x0+5.2,L+1.6+te,P.z1+.03,0,0),Qt(1.4,1.4,P.x0+7.3,L+1.6+te,P.z1+.03,0,0),Qt(1.6,1.2,P.x1+.03,L+1.6+te,0,Math.PI/2,1),Qt(2.2,1.2,3,L+1.6+te,P.z0-.03,Math.PI,1),Qt(1.2,1.2,7,L+1.6+te,P.z0-.03,Math.PI,0),Ht.add(_(8.8,.1,.35,nt,(P.x0+P.x1)/2,L+re+.05,P.z1+.18))}Qn=new Ge,Qn.position.set(P.x0+6.42,L+1.025,P.z1+.04);let Jt=x.door==="timber"?H(O(11039817,{roughness:.55})):H(O(new Ye(x.door),{roughness:.45}));if(Qn.add(_(1.05,2.05,.1,Jt,.525,0,0),_(.4,.9,.04,Wt.clone(),.525,.45,.07),_(.05,.5,.05,H(O(15919049,{metalness:.7,roughness:.3})),.95,-.1,.1)),Ht.add(Qn),x.detail==="deco"){let te=new be(new an(.34,.34,.1,24),Wt.clone());te.rotation.x=Math.PI/2,te.position.set(P.x0+5.55,L+1.75,P.z1+.06),Ht.add(te);let oe=new be(new qo(.35,.04,8,24),nt);oe.position.copy(te.position),oe.position.z+=.04,Ht.add(oe)}Ht.add(_(.12,2.1,.12,nt,P.x0+6.38,L+1.05,P.z1+.04));{let te=new Ge;C.add(te);let oe=P.x0+.13,le=P.x1-.13,ue=P.z0+.13,Ee=P.z1-.13,Ie=re-.06,bt=new Ge,Mt=new Ge,_t=new Ge,Ot=new Ge,_n=new Ge;te.add(bt,Mt,_t,Ot,_n);let Rt=(Xe,st={})=>H(new An(Object.assign({color:Xe,roughness:.9},st))),Xt=()=>H(new An({color:15987180,roughness:.95,side:bn})),zi=Rt(14268285,{roughness:.7});{let Xe=[],st=(Dt,cn,Yn,Sc)=>{let Oh=Math.max(2,Math.round(Math.hypot(Yn-Dt,Sc-cn)/.6));for(let bc=0;bc<=Oh;bc++){let Fh=bc/Oh;Xe.push([Dt+(Yn-Dt)*Fh,cn+(Sc-cn)*Fh,Math.atan2(Yn-Dt,Sc-cn)+Math.PI/2])}};st(oe,Ee,le,Ee),st(oe,ue,le,ue),st(oe,ue,oe,Ee),st(le,ue,le,Ee),st(5.2,ue,5.2,.35),st(5.2,1.5,5.2,Ee);let wt=new xs(new Nn(.05,1,.1),zi,Xe.length),yt=new hn;Xe.forEach((Dt,cn)=>{yt.position.set(Dt[0],L+Ie/2,Dt[1]),yt.rotation.set(0,Dt[2],0),yt.scale.set(1,Ie,1),yt.updateMatrix(),wt.setMatrixAt(cn,yt.matrix)}),wt.castShadow=!0,bt.add(wt),[L+.06,L+Ie-.04,L+Ie*.5].forEach(Dt=>{bt.add(_(le-oe,.06,.1,zi,(oe+le)/2,Dt,Ee),_(le-oe,.06,.1,zi,(oe+le)/2,Dt,ue),_(.1,.06,Ee-ue,zi,oe,Dt,(ue+Ee)/2),_(.1,.06,Ee-ue,zi,le,Dt,(ue+Ee)/2))});for(let Dt=oe+.3;Dt<le;Dt+=.6)bt.add(_(.05,.2,Ee-ue,zi,Dt,L+Ie+.04,(ue+Ee)/2))}let Pr=(Xe,st,wt)=>{let yt=new Oi;yt.moveTo(0,0),yt.lineTo(Xe,0),yt.lineTo(Xe,Ie),yt.lineTo(0,Ie),yt.closePath(),st.forEach(cn=>{let Yn=new gr;Yn.moveTo(cn.u0,cn.v0),Yn.lineTo(cn.u1,cn.v0),Yn.lineTo(cn.u1,cn.v1),Yn.lineTo(cn.u0,cn.v1),Yn.closePath(),yt.holes.push(Yn)});let Dt=new be(new ca(yt),Xt());wt(Dt),Dt.receiveShadow=!0,Mt.add(Dt)},Ra=(Xe,st,wt)=>Pt.filter(yt=>yt.wl===Xe).map(yt=>({u0:Math.max(.03,yt.c-yt.w/2-st),u1:Math.min(wt-.03,yt.c+yt.w/2-st),v0:Math.max(.03,yt.y-yt.h/2-L),v1:Math.min(Ie-.03,yt.y+yt.h/2-L)})),Lh=Ra("front",oe,le-oe);{let Xe=P.x0+6.42+.525;Lh.push({u0:Xe-.52-oe,u1:Xe+.52-oe,v0:.03,v1:2.04})}Pr(le-oe,Lh,Xe=>Xe.position.set(oe,L,Ee)),Pr(le-oe,Ra("back",oe,le-oe),Xe=>Xe.position.set(oe,L,ue)),Pr(Ee-ue,Ra("right",ue,Ee-ue),Xe=>{Xe.rotation.y=-Math.PI/2,Xe.position.set(le,L,ue)}),Pr(Ee-ue,Ra("left",ue,Ee-ue),Xe=>{Xe.rotation.y=-Math.PI/2,Xe.position.set(oe,L,ue)}),[[5.2,ue,.35],[5.2,1.5,Ee]].forEach(([Xe,st,wt])=>Mt.add(_(.1,Ie-.04,wt-st,Xt(),Xe,L+Ie/2,(st+wt)/2))),[[5.2,6,0],[7.1,le,0]].forEach(([Xe,st,wt])=>Mt.add(_(st-Xe,Ie-.04,.1,Xt(),(Xe+st)/2,L+Ie/2,wt)));let yc=new be(new wn(le-oe,Ee-ue),Xt());yc.rotation.x=Math.PI/2,yc.position.set((oe+le)/2,L+Ie,(ue+Ee)/2),Mt.add(yc);let df=Rt(3095101,{roughness:.8});Mt.add(_(.05,Ie-.1,4.6,df,oe+.04,L+Ie/2,1.2));let Dh=ci(256,256,(Xe,st,wt)=>{Xe.fillStyle="#d2b48a",Xe.fillRect(0,0,st,wt);for(let yt=0;yt<12;yt++){Xe.fillStyle=yt%2?"rgba(0,0,0,.05)":"rgba(255,255,255,.1)",Xe.fillRect(0,yt*(wt/12),st,wt/12),Xe.fillStyle="rgba(60,40,20,.35)",Xe.fillRect(0,yt*(wt/12),st,1.5);for(let Dt=0;Dt<5;Dt++)Xe.fillStyle="rgba(60,40,20,.15)",Xe.fillRect(Math.random()*st,yt*(wt/12),1.5,wt/12)}});Dh.repeat.set(4,4);let Ca=new be(new wn(le-oe,Ee-ue),H(new An({map:Dh,roughness:.45})));Ca.rotation.x=-Math.PI/2,Ca.position.set((oe+le)/2,L+.025,(ue+Ee)/2),Ca.receiveShadow=!0,_t.add(Ca);let ff=Rt(15987180);[[le-oe,.1,.03,(oe+le)/2,L+.07,Ee-.02],[le-oe,.1,.03,(oe+le)/2,L+.07,ue+.02],[.03,.1,Ee-ue,oe+.02,L+.07,(ue+Ee)/2],[.03,.1,Ee-ue,le-.02,L+.07,(ue+Ee)/2]].forEach(([Xe,st,wt,yt,Dt,cn])=>_t.add(_(Xe,st,wt,ff,yt,Dt,cn)));let vc=Rt(2765366,{roughness:.55}),Pa=Rt(15658730,{roughness:.25,metalness:.05}),Mc=Rt(11187384,{roughness:.35,metalness:.6}),Ns=Rt(11039817,{roughness:.6});Ot.add(_(4.2,.9,.6,vc,2.2,L+.47,-4.1),_(4.3,.05,.66,Pa,2.2,L+.95,-4.08),_(4.2,.55,.03,Rt(14674152,{roughness:.1}),2.2,L+1.25,-4.4),_(3.2,.7,.36,vc,1.7,L+2,-4.2),_(.9,.12,.55,Mc,3.8,L+1.55,-4.1),_(.8,2,.62,Mc,4.7,L+1.02,-4.1)),Ot.add(_(2.7,.9,1,vc,2.5,L+.47,-2.2),_(2.9,.06,1.15,Pa,2.5,L+.96,-2.2),_(.06,.9,1.1,Pa,1.08,L+.47,-2.2),_(.06,.9,1.1,Pa,3.92,L+.47,-2.2)),[1.7,2.5,3.3].forEach(Xe=>{let st=new Ge;st.add(V(new be(new an(.19,.19,.06,16),Ns),0,.68,0),V(new be(new an(.03,.03,.66,8),Mc),0,.33,0)),st.position.set(Xe,L,-1.35),Ot.add(st)}),Ot.add(_(1.3,2.15,.55,Ns,6,L+1.1,-4.1),_(.55,.7,.06,Rt(2765366),7.9,L+1.1,-4.35));let Ir=Rt(7174782,{roughness:.95}),Uh=Rt(15327954,{roughness:1}),Ia=Rt(1778470,{roughness:.5});_n.add(_(2.7,.42,1,Ir,2.4,L+.25,1.4),_(2.7,.55,.24,Ir,2.4,L+.6,.9),_(.22,.62,1,Ir,1,L+.4,1.4),_(.22,.62,1,Ir,3.8,L+.4,1.4),_(1,.42,1,Ir,4.3,L+.25,2.2),_(3,.03,2,Uh,2.4,L+.04,2.7),_(1.1,.3,.6,Ns,2.4,L+.2,2.7),_(.05,.3,.05,Ia,1.9,L+.05,2.5)),_n.add(_(.5,.5,2.1,Rt(2765366,{roughness:.5}),.45,L+.28,2.4),_(.05,.85,1.5,Ia,.28,L+1.35,2.4)),_n.add(_(1.9,.05,.95,Ns,.95,L+.78,-1)),[[.1,-1.35],[1.8,-1.35],[.1,-.65],[1.8,-.65]].forEach(([Xe,st])=>_n.add(_(.06,.76,.06,Ia,Xe,L+.4,st))),[[.5,-1.7],[1.4,-1.7],[.5,-.3],[1.4,-.3]].forEach(([Xe,st])=>_n.add(_(.42,.45,.42,Rt(3885646,{roughness:.8}),Xe,L+.24,st),_(.42,.4,.05,Rt(3885646,{roughness:.8}),Xe,L+.62,st+(st<-1?-.2:.2))));let Nh=new kn({color:16769712});[1.7,2.5,3.3].forEach(Xe=>{let st=new Ge;st.add(V(new be(new an(.01,.01,.9,5),Ia),0,.45,0),V(new be(new Gn(.2,16,12),Nh),0,-.02,0)),st.position.set(Xe,L+Ie-.9,-2.2),st.userData.glow=1,_n.add(st)});for(let Xe=0;Xe<4;Xe++)for(let st=0;st<3;st++){let wt=new be(new _r(.09,12),Nh);wt.rotation.x=Math.PI/2,wt.position.set(1+Xe*1.2,L+Ie-.01,-3.4+st*2.6),_n.add(wt)}_n.add(_(1.7,.4,2.1,Uh,7,L+.25,-2.7),_(1.8,.18,.4,Rt(16777215),7,L+.5,-3.55),_(.7,.4,.3,Rt(16777215),6.6,L+.55,-3.5),_(.7,.4,.3,Rt(16777215),7.4,L+.55,-3.5),_(2.1,.9,.08,Rt(7174782),7,L+.7,-3.75),_(.45,.45,.45,Ns,6,L+.25,-3.5),_(.45,.45,.45,Ns,8,L+.25,-3.5),_(1.9,.04,1.2,Rt(13227212),7,L+.04,-2));let Ec=(Xe,st,wt)=>{let yt=new Ge;yt.add(V(new be(new an(.22*wt,.18*wt,.4*wt,12),Rt(15327954)),0,.2*wt,0));for(let Dt=0;Dt<8;Dt++){let cn=Dt/8*Math.PI*2,Yn=new be(new vi(.12*wt,1.1*wt,4),Rt(Dt%2?4090706:5012575));Yn.position.set(Math.cos(cn)*.14*wt,.9*wt,Math.sin(cn)*.14*wt),Yn.rotation.set(Math.sin(cn)*.5,0,-Math.cos(cn)*.5),yt.add(Yn)}return yt.position.set(Xe,L,st),yt};_n.add(Ec(.55,.55,1.3),Ec(4.6,-4,1.1),Ec(8,.9,1),_(.04,1,.7,Rt(13227212),oe+.06,L+1.7,-.2),_(.04,.7,1.1,Rt(11883583),oe+.06,L+1.4,-1.6)),Vn={Ifr:bt,Ili:Mt,Ifl:_t,Ijo:Ot,Ifu:_n,IN:te},Ot.children.forEach(Xe=>{Xe.userData.s=1}),_n.children.forEach(Xe=>{Xe.userData.s=1})}J(Vn.IN,{start:13.4,dur:.3,kind:"custom",tag:Wn,add:!1,fn:()=>{}});let pn=j(_(2.7,.12,1.5,nt,0,0,0),_(.14,2.3,.14,H(O(12160606)),-1.2,-1.2,.62),_(.14,2.3,.14,H(O(12160606)),1.2,-1.2,.62),_(.14,.14,1.5,nt,-1.35,.02,0),_(.14,.14,1.5,nt,1.35,.02,0));if(pn.position.set(P.x0+6.6,L+2.45,P.z1+.75),x.veranda){let te=H(O(15921384,{roughness:.6})),oe=H(O(10122312,{roughness:.8})),le=new Ge;le.add(_(9.6,.12,2.3,oe,(P.x0+P.x1)/2,.12,P.z1+1.2));let ue=H(O(9061946,{roughness:.95}));for(let Ie=P.x0-.2;Ie<=P.x1+.3;Ie+=1.75){if(x.detail==="bungalow"){let bt=_(.55,.85,.55,ue,Ie,.5,P.z1+2.2);le.add(bt);let Mt=new be(new an(.14,.24,1.7,4),te);Mt.rotation.y=Math.PI/4,Mt.position.set(Ie,.85+.85,P.z1+2.2),Mt.castShadow=!0,le.add(Mt)}else le.add(_(.13,2.45,.13,te,Ie,L+1.25,P.z1+2.2));if(x.detail==="villa"){le.add(_(.5,.05,.05,te,Ie+.3,L+2.2,P.z1+2.2).rotateZ(-.7),_(.5,.05,.05,te,Ie-.3,L+2.2,P.z1+2.2).rotateZ(.7));for(let bt=0;bt<7;bt++)le.add(_(.035,.3,.035,te,Ie+.2+bt*.2,L+2.3,P.z1+2.2))}else le.add(_(1.3,.14,.06,te,Ie+.87,L+2.35,P.z1+2.2))}let Ee=new be(new Nn(9.8,.09,2.7),Qe(x.roofColor));Ee.position.set((P.x0+P.x1)/2,L+2.82,P.z1+1.25),Ee.rotation.x=.17,Ee.castShadow=!0,le.add(Ee),le.add(_(9.8,.2,.07,te,(P.x0+P.x1)/2,L+2.6,P.z1+2.46)),Ht.add(le)}else Ht.add(pn);if(se){let te=new Ge;te.add(_(3.3,2,.1,H(O(9280149,{roughness:.55})),0,0,0));for(let oe=0;oe<4;oe++)te.add(_(3.3,.03,.12,H(O(7306359)),0,-.75+oe*.5,.02));te.position.set((ae.x0+ae.x1)/2,L+1,ae.z1+.04),Ht.add(te)}if(Ht.traverse(te=>te.castShadow=!0),J(Ht,{start:13.8,dur:1,kind:"pop",tag:Wn,add:!1}),x.veranda||J(_(3,.18,1.5,H(O(10989736)),P.x0+6.6,.09,P.z1+.8),{start:13.9,dur:.5,kind:"rise",tag:Wn,parent:C}),x.fence&&x.fence!=="none"){let te=new Ge,oe=[[-13,-5.3],[-.5,6.15],[7.75,14.5]],le=15.2,ue=H(O(x.fence==="picket"?16052714:3103301,{roughness:.8}));oe.forEach(([Ee,Ie])=>{let bt=Ie-Ee,Mt=(Ee+Ie)/2;if(x.fence==="picket"){te.add(_(bt,.07,.05,ue,Mt,.35,le),_(bt,.07,.05,ue,Mt,.8,le));for(let _t=Ee;_t<=Ie;_t+=.2){let Ot=_(.09,.95,.03,ue,_t,.5,le+.03);te.add(Ot)}[Ee,Ie].forEach(_t=>te.add(_(.12,1.1,.12,ue,_t,.55,le)))}else{te.add(_(bt,1.05,.8,H(O(2841150,{roughness:1})),Mt,.55,le));for(let _t=Ee+.3;_t<Ie;_t+=.7){let Ot=new be(new oa(.42,1),H(O(3501386,{roughness:1})));Ot.position.set(_t,1.1,le),Ot.scale.set(1,.7,1),Ot.castShadow=!0,te.add(Ot)}}}),J(te,{start:14.7,dur:.6,kind:"pop",tag:Wn,parent:C})}{let te=H(O(2765880,{roughness:.5,metalness:.3})),oe=H(O(5858666,{roughness:.5,metalness:.4})),le=new Ge,ue=.6,Ee=L+he-.06;w!=="gablefront"?le.add(_(P.x1-P.x0+ue*2,.1,.12,te,(P.x0+P.x1)/2,Ee,P.z1+ue),_(P.x1-P.x0+ue*2,.1,.12,te,(P.x0+P.x1)/2,Ee,P.z0-ue)):le.add(_(.12,.1,P.z1-P.z0+ue*2,te,P.x0-ue,Ee,0),_(.12,.1,P.z1-P.z0+ue*2,te,P.x1+ue,Ee,0));let Ie=(Ot,_n,Rt)=>{let Xt=new be(new an(.045,.045,Rt-L,8),oe);Xt.position.set(Ot,L+(Rt-L)/2,_n),Xt.castShadow=!0,le.add(Xt)};w!=="gablefront"?(Ie(P.x0+.12,P.z1+.1,Ee),Ie(P.x1-.12,P.z1+.1,Ee),Ie(P.x1-.12,P.z0-.1,Ee)):(Ie(P.x0-.1,P.z1-.2,Ee),Ie(P.x1+.1,P.z1-.2,Ee)),se&&(le.add(_(ae.x1-ae.x0+1,.09,.11,te,(ae.x0+ae.x1)/2,L+Fe-.05,ae.z1+.5)),Ie(ae.x0+.1,ae.z1+.1,L+Fe-.05));let bt=(Ot,_n,Rt)=>{let Xt=new Ge;return Xt.add(_(.55,.95,.7,H(O(3095101,{roughness:.8})),0,.5,0),_(.6,.08,.75,H(O(Rt,{roughness:.6})),0,1,0)),Xt.position.set(Ot,0,_n),Xt.rotation.y=.1,Xt};le.add(bt(ae.x1+.9,ae.z1+1.4,15123514),bt(ae.x1+1.7,ae.z1+1.5,12727348));let Mt=H(O(5916210,{roughness:.9}));le.add(_(5.4,.22,.6,Mt,P.x0+2.6,.12,P.z1+.55),_(5.4,.1,.5,H(O(3878691,{roughness:1})),P.x0+2.6,.2,P.z1+.55)),le.add(V(new be(new an(.6,.6,1.9,16),H(O(6979462,{roughness:.55,metalness:.3}))),P.x1-1.6,.95,P.z0-1.2));let _t=new Ge;[-1,1].forEach(Ot=>_t.add(_(.06,2,.06,oe,Ot*1.2,1,0))),_t.add(_(2.4,.04,.04,oe,0,2,0),_(2.4,.04,.04,oe,0,1.85,.25)),_t.position.set(P.x1+1.5,0,-6.4),le.add(_t),J(le,{start:14.5,dur:.8,kind:"fade",tag:Wn,parent:C})}if(x.deck){let te=new Ge,oe=H(O(10122312,{roughness:.8})),le=H(O(3813158));te.add(_(3.6,.14,5,oe,P.x1+1.9,.12,-1.8));for(let ue=0;ue<4;ue++)te.add(_(.12,2.5,.12,le,P.x1+(ue%2?3.6:.2),1.35,ue<2?-4.2:.4));for(let ue=0;ue<10;ue++)te.add(_(.06,.1,5.2,le,P.x1+.15+ue*.38,2.6,-1.9));te.add(_(3.8,.12,.12,le,P.x1+1.9,2.55,-4.2),_(3.8,.12,.12,le,P.x1+1.9,2.55,.4)),J(te,{start:14.3,dur:.9,kind:"pop",tag:Wn,parent:C})}return[["LIVING",2.4,1.6],["KITCHEN",2.6,-2.2],["BEDROOM",7,-2.4],["ENTRY",6.9,2.4],[Y?"CARPORT":"GARAGE",-2.6,.1]].concat(z?[["BEDROOM 2",1.9,-7]]:[]).forEach(([te,oe,le])=>{if((te==="GARAGE"||te==="CARPORT")&&!se&&!Y)return;let ue=document.createElement("canvas");ue.width=256,ue.height=64;let Ee=ue.getContext("2d");Ee.fillStyle="rgba(15,28,23,.82)",Ee.beginPath(),Ee.roundRect(0,6,256,52,26),Ee.fill(),Ee.fillStyle="#eef2ea",Ee.font='600 28px "IBM Plex Mono",monospace',Ee.textAlign="center",Ee.textBaseline="middle",Ee.fillText(te,128,33);let Ie=new Oo(new Qr({map:new mr(ue),transparent:!0,depthTest:!1}));Ie.scale.set(2.8,.7,1),Ie.position.set(oe,L+1.1,le),Ie.visible=!1,Ie.renderOrder=10,C.add(Ie),li.push(Ie)}),C}function is(x){if(!Vn)return;let C=se=>on(se,0,1);Vn.Ifr.visible=x<.985;let w=C(x);Vn.Ili.visible=w>0,ie(Vn.Ili,w);let k=C(x-1);Vn.Ifl.visible=k>0,ie(Vn.Ifl,k);let z=(se,Y)=>{se.visible=Y>0;let re=se.children.length;se.children.forEach((he,Ne)=>{let Fe=C(Y*(re+4)-Ne);he.visible=Fe>0;let We=Fe>=1?1:Math.max(.001,uh(Fe));he.scale.setScalar(We),he.userData.glow&&he.traverse(De=>{})})};z(Vn.Ijo,C(x-2)),z(Vn.Ifu,C(x-3))}bs(Z),is(Tt);let Gt=0,gn=0,ss=!1,sc=0,rc=0,Sr=1,Ts=null;function ac(x){c.forEach(C=>{let w=on((Gt-C.start)/C.dur,0,1),k=C.end!=null?1-on((Gt-C.end)/.7,0,1):1,z=C.o;if(w<=0||k<=0){z.visible=!1;return}z.visible=!0;let se=$d(w);switch(C.kind){case"fade":ie(z,se*k);break;case"pop":{let Y=Math.max(.001,uh(w))*k;z.scale.set(C.sx*Y,C.sy*Y,C.sz*Y);break}case"grow":{let Y=Math.max(.001,uh(w))*k;z.scale.set(C.sx*Y,C.sy*Y,C.sz*Y);break}case"rise":z.scale.y=C.sy*Math.max(.001,da(w));break;case"drop":z.position.y=C.py+(1-da(w))*6,ie(z,Math.min(1,w*3));break;case"custom":C.fn&&C.fn(x,w),C.end!=null&&ie(z,k);break}C.fn&&C.kind!=="custom"&&C.fn(x,w)})}function ef(){if(s)return D("golden",1);let x=Ts||(Z.tod!=="auto"?Z.tod:null);if(x&&Gt>=15.9)return D(x,1);let C=$d(on((Gt-14.6)/1.4,0,1));return D("golden",C)}let ws=0,dh=0;function fh(x,C){let w=ef(),k=C?1:Math.min(1,x*3.2);r&&w.sp.applyAxisAngle(new I(0,1,0),dh),["top","mid","bot","fog","hemi","hemiG","sun"].forEach(Y=>b[Y].lerp(w[Y],k)),["fogFar","hi","si","exp","li"].forEach(Y=>b[Y]+=(w[Y]-b[Y])*k),b.sp.lerp(w.sp,k),u.top.value.copy(b.top),u.mid.value.copy(b.mid),u.bot.value.copy(b.bot),a.fog.color.copy(b.fog),r||(a.fog.far=b.fogFar),u.sd.value.copy(b.sp).normalize(),u.sc.value.copy(b.sun),u.t.value+=x,m.color.copy(b.hemi),m.groundColor.copy(b.hemiG),m.intensity=b.hi,g.color.copy(b.sun),g.intensity=b.si,g.position.copy(b.sp),n.toneMappingExposure=b.exp,a.environmentIntensity=on((b.hi-.45)*.62,0,.6);let z=b.li>.5&&Gt>=15.3?1:0;ws+=(z-ws)*Math.min(1,x*(z>ws?.45:2.5)),C&&!z&&(ws=0);let se=on(b.li,0,1)*ws;ns.forEach((Y,re)=>{Y.material.opacity=on(ws*1.7-re*.11,0,1)*on(b.li,0,1)*.92}),p.intensity=se*2.4,f.intensity=mn?.5+2.4*on(Tt-3,0,1):Math.max(se*1.4,hi?1.6:0)*(hi&&ti>=6||se?1:0),S.intensity=f.intensity*.8}let ei=new I(0,r?3.3:s?7.6:7.5,2),ph=-.28,oc=.07,_a=28,mh=0,gh=0;s&&window.addEventListener("pointermove",x=>{mh=(x.clientX/window.innerWidth-.5)*2,gh=(x.clientY/window.innerHeight-.5)*2},{passive:!0});let On=-.5,Zn=1.44,As=26,Rs=On,br=Zn,Cs=!1,Ps=0,Is=0,xa=!1,ya=0,Jn=n.domElement;Jn.addEventListener("pointerdown",x=>{if(mn){Cs=!0,Ps=x.clientX,Is=x.clientY,Jn.setPointerCapture(x.pointerId),Jn.style.cursor="grabbing";return}hi||s||r||(Cs=!0,Ps=x.clientX,Is=x.clientY,xa=!0,ya=0,Jn.setPointerCapture(x.pointerId),Jn.style.cursor="grabbing")}),Jn.addEventListener("pointermove",x=>{if(Cs){if(mn){Ea=on(Ea-(x.clientX-Ps)*.005,-1.2,1.2),Sa=on(Sa-(x.clientY-Is)*.002,-.35,.35),Ps=x.clientX,Is=x.clientY;return}Rs-=(x.clientX-Ps)*.0075,br=on(br-(x.clientY-Is)*.0055,.45,1.5),Ps=x.clientX,Is=x.clientY}});let _h=()=>{Cs=!1,Jn.style.cursor=hi?"default":"grab",ya=0};Jn.addEventListener("pointerup",_h),Jn.addEventListener("pointercancel",_h);function xh(){On+=(Rs-On)*.12,Zn+=(br-Zn)*.12,o.position.set(ei.x+As*Math.sin(Zn)*Math.sin(On),ei.y+As*Math.cos(Zn),ei.z+As*Math.sin(Zn)*Math.cos(On)),o.lookAt(ei)}let cc=600,lc=400;function yh(){let x=i.clientWidth||600,C=i.clientHeight||400;if(cc=x,lc=C,n.setSize(x,C,!1),o.aspect=x/C,r)o.fov=26,_a=Math.max(24,46/(x/C)),o.clearViewOffset();else if(s){let w=x/C>1.15;As=w?x/C>1.8?30:33:38,o.setViewOffset(x,C,w?x*.03:0,w?-C*.03:-C*.02,x,C)}else As=x/C<1.1?36:x/C<1.5?27:24,o.clearViewOffset();o.updateProjectionMatrix()}let vh=new ResizeObserver(yh);vh.observe(i),yh();let Ct=(x,C,w)=>$x(x,C,w),Ls=[{p:Ct(-4,2,26),l:Ct(2.5,1.8,3)},{p:Ct(11,2.6,16),l:Ct(4.3,2,3.5)},{p:Ct(13,5.4,9),l:Ct(4.3,3.4,2)},{p:Ct(19,2.4,6),l:Ct(12.5,3.6,.5)},{p:Ct(15,3.2,-12),l:Ct(5,1.8,-2)},{p:Ct(4.3,23,15),l:Ct(3,0,.5),cut:!0},{p:Ct(6.95,1.6,8.8),l:Ct(6.95,1.4,4.4),open:!0},{p:Ct(6.4,1.6,3.5),l:Ct(2.5,1.2,1.8),open:!0},{p:Ct(4.7,1.6,-.4),l:Ct(1.4,1.1,-3.4),open:!0},{p:Ct(5.9,1.6,.9),l:Ct(7.4,.9,-2.8),open:!0},{p:Ct(-9,3.4,23),l:Ct(2.5,2.2,3),tod:"golden"}],hi=!1,ti=0,rs=0,Tr=!0,hc=new I,uc=new I,dc=new I,Mh=new I,va=e.onTour||null,fc=0,tf=5.2,nf=2.4;function wr(x){ti=on(x,0,Ls.length-1);let C=Ls[ti];hc.copy(o.position);let w=new I;o.getWorldDirection(w),uc.copy(o.position).addScaledVector(w,10),rs=0,fc=0,ss=!!C.cut,rc=C.open?1:0,Ts=C.tod||(Z.tod!=="auto"?Z.tod:null),va&&va(ti,Qd[ti],!0)}function sf(){Gt=gn=16,qn=!1,hi=!0,xa=!0,Jn.style.cursor="default";let x=Ls[0];o.position.copy(x.p),hc.copy(x.p),uc.copy(x.l),wr(0),rs=1}function Eh(){hi=!1,ss=!1,rc=0,Ts=null,Rs=On,br=Zn,Jn.style.cursor="grab",va&&va(-1,null,!1)}let Bi=new I,rf=[new I(26,41,-116),new I(-36,1.5,-66),new I(2.6,5.2,1)],af=[{p:Ct(.9,1.55,3.6),l:Ct(4.8,1.2,-2.8)},{p:Ct(1,1.5,3.5),l:Ct(4.6,1.2,-3)},{p:Ct(4.7,1.55,3.7),l:Ct(1,.2,-2.6)},{p:Ct(4.4,1.6,1.8),l:Ct(2.3,.95,-4)},{p:Ct(4.6,1.6,3.7),l:Ct(.7,1,-1.6)}],ni=4,Ds=!0,Ma=0,pc=-1,Ea=0,Sa=0,mc=new I,gc=new I,_c=!1,of=4.6;function cf(){Us(),Gt=gn=16,qn=!1,mn=!0,xa=!0,Tt=0,ni=0,Ds=!0,Ma=0,_c=!1,pc=-1,Ea=0,Sa=0,ss=!1,dt.forEach(x=>x.visible=!1),Ts="day",Jn.style.cursor="grab",is(Tt)}function Sh(){mn=!1,Tt=4,ni=4,is(4),dt.forEach(x=>x.visible=!0),Ts=null,Rs=On,br=Zn,Jn.style.cursor="grab",Bt&&Bt(-1,4)}function lf(x){Ds&&(ni<4?ni=Math.min(4,ni+x/of):(Ma+=x,Ma>7&&(Ma=0,ni=0,Tt=0))),Tt+=(ni-Tt)*Math.min(1,x*(Ds?2.2:3.5)),Math.abs(ni-Tt)<.002&&(Tt=ni),is(Tt);let C=Math.min(4,Math.round(Tt));C!==pc&&(pc=C,Bt&&Bt(C,Tt)),Ts=Tt>3.3?"golden":"day";let w=af[C];_c||(mc.copy(w.p),gc.copy(w.l),_c=!0),mc.lerp(w.p,Math.min(1,x*1.6)),gc.lerp(w.l,Math.min(1,x*1.6));let k=mc.clone();k.x+=Math.sin(Fn*.35)*.14,k.z+=Math.cos(Fn*.3)*.1;let z=new I().subVectors(gc,k),se=z.length();z.applyAxisAngle(new I(0,1,0),Ea),z.y+=Sa*se,o.position.copy(k),o.lookAt(k.clone().add(z))}let ba=!1,qn=e.autoplay!==!1&&!t&&!e.startFinished,bh=!0,xc=0,Ta=performance.now(),as=0,Fn=0,Th=e.onProgress||null,hf=e.speed||(s?16/15:16/20);(t||e.startFinished)&&(Gt=gn=16,qn=!1,e.tod&&(Z.tod=e.tod));let wh=0,Ah=-1,Rh=0,Ar=16.7,wa=0,Aa=0,Ch=0,Rr=n.getPixelRatio();function uf(x){let C=Math.min(250,wa?x-wa:16.7);if(wa=x,Aa++,Ar=Ar*.94+C*.06,s&&Aa>90&&Rr<=.75&&Ar>46&&!ba){ba=!0,i.dispatchEvent(new CustomEvent("h3d-lite"));return}Aa>60&&Ar>27&&x-Ch>1500&&Rr>.75&&(Ch=x,Rr=Math.max(.75,Rr-.25),n.setPixelRatio(Rr),n.setSize(cc,lc,!1),Ar=16.7,Aa=60)}function Ph(x){if(xc=requestAnimationFrame(Ph),!bh||ba){wa=0;return}if(uf(x),s){if(x-wh<30)return;wh=x,(Math.abs(Gt-Ah)>.03||x-Rh>1500)&&(n.shadowMap.needsUpdate=!0,Ah=Gt,Rh=x)}let C=Math.min(.05,(x-Ta)/1e3);Ta=x,Fn+=C,qn&&!hi&&(gn<16?gn=Math.min(16,gn+C*hf):s?e.loop&&(as+=C,as>3.5&&(as=0,gn=0)):(as+=C,as>5&&(as=0,gn=0,Gt=0))),Gt+=(gn-Gt)*Math.min(1,C*(qn?6:4.5)),Math.abs(gn-Gt)<.002&&(Gt=gn),Cs||(ya+=C),h.constant+=((ss?2.45:100)-h.constant)*Math.min(1,C*(ss?5:3)),dn&&(dn.visible=!(ss&&h.constant<20)),li.forEach(k=>k.visible=ss&&h.constant<12),sc+=(rc-sc)*Math.min(1,C*3),Qn&&(Qn.rotation.y=-sc*1.7),Sr<1&&(Sr=Math.min(1,Sr+C*2.2),zt.scale.setScalar(.96+.04*da(Sr))),Oe.offset.set(Fn*.003,Fn*.0015),ke.forEach((k,z)=>{let se=(Fn*.12+z/3)%1;k.position.z=-34.2-se*5,k.material.opacity=.55*(1-se),k.scale.y=1+se*1.5}),W.forEach((k,z)=>{k.position.y=.1+Math.sin(Fn*.9+z*1.7)*.12,k.rotation.z=Math.sin(Fn*.7+z)*.03});let w=Z.chimney?on((Gt-15.6)/.4,0,1):0;if($.forEach((k,z)=>{let se=(Fn*.35+z/$.length)%1;k.visible=w>0,k.position.set(fn.x+se*1.2+Math.sin(Fn+z)*.1,fn.y+se*3.2,fn.z),k.scale.setScalar(.5+se*2),k.material.opacity=w*.4*(1-se)*Math.min(1,se*6)}),mn)lf(C);else if(hi){rs=Math.min(1,rs+C/tf);let k=Jx(rs),z=Ls[ti];dc.copy(hc).lerp(z.p,k),Mh.copy(uc).lerp(z.l,k),dc.y+=Math.sin(Fn*.8)*.05,o.position.copy(dc),o.lookAt(Mh),rs>=1&&Tr&&(fc+=C,fc>nf&&(ti<Ls.length-1?wr(ti+1):Tr=!1))}else if(r){On+=(ph-On)*.18;let k=Math.cos(oc);o.position.set(ei.x+_a*Math.sin(On)*k,ei.y+_a*Math.sin(oc),ei.z+_a*Math.cos(On)*k),o.lookAt(ei)}else if(s){let k=on(window.scrollY/Math.max(1,window.innerHeight),0,1),z=-.34+Math.sin(Fn*.1)*.1+mh*.08+k*.7,se=1.43-gh*.025-k*.12,Y=As*(1-k*.2);On+=(z-On)*.06,Zn+=(se-Zn)*.06,o.position.set(ei.x+Y*Math.sin(Zn)*Math.sin(On),ei.y+Y*Math.cos(Zn),ei.z+Y*Math.sin(Zn)*Math.cos(On)),o.lookAt(ei)}else!t&&(!xa||ya>5)&&!Cs&&(Rs+=(-.5+Math.sin(Fn*.16)*.8-Rs)*.02),xh();if(ac(Fn),fh(C,!1),n.render(a,o),Th&&Th(Gt),e.onAnchors){let k=rf.map(z=>(Bi.copy(z).project(o),{x:(Bi.x*.5+.5)*cc,y:(-Bi.y*.5+.5)*lc,v:Bi.z<1&&Bi.x>-1.05&&Bi.x<1.05&&Bi.y>-1.05&&Bi.y<1.05}));e.onAnchors(k)}}ac(0),xh(),fh(1,!0),n.render(a,o);let Ih=new IntersectionObserver(x=>{bh=x[0].isIntersecting,Ta=performance.now()},{threshold:.05});return Ih.observe(i),xc=requestAnimationFrame(Ph),{setProgress(x){Us(),Cr(),gn=on(x,0,16),qn=!1},goStage(x){Us(),Cr(),gn=on(x*4,0,16),qn=!1},resume(){hi||mn||(qn=!0,gn>=16&&s&&(gn=0))},play(){Us(),Cr(),qn=!0,gn>=16&&(gn=0,Gt=0)},pause(){qn=!1},setCutView(x,C){ph=x,C!=null&&(oc=C)},setSun(x){dh=x},setHeld(x){ba=!!x,Ta=performance.now()},get playing(){return qn},get progress(){return Gt},getDesign(){return Object.assign({},Z)},setDesign(x,C){Us(),Z=Object.assign({},Z,x),!C&&Gt<15.9&&(gn=16,Gt=16,qn=!1),bs(Z),is(Tt),dt.forEach(w=>w.visible=!mn),Sr=0,ac(Fn)},setTod(x){Z.tod=x,Gt<15.9&&(gn=16,Gt=16,qn=!1)},buildNow(){Us(),Cr(),gn=0,Gt=0,as=0,qn=!0},startTour(){Cr(),sf()},stopTour(){Eh()},startInside(){cf()},stopInside(){Sh()},setInsideStage(x){Ds=!1,ni=on(x,0,4)},insideAutoplay(x){Ds=!!x,x&&ni>=4&&(ni=0,Tt=0)},get insideOn(){return mn},get insideAuto(){return Ds},tourNext(){Tr=!1,wr(ti+1)},tourPrev(){Tr=!1,wr(ti-1)},tourAutoplay(x){Tr=x,x&&ti>=Ls.length-1&&rs>=1&&wr(0)},get touring(){return hi},get tourIndex(){return ti},dispose(){cancelAnimationFrame(xc),vh.disconnect(),Ih.disconnect(),n.dispose(),n.domElement.remove()}};function Us(){hi&&Eh()}function Cr(){mn&&Sh()}}return yf(Qx);})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
