var House3D=(()=>{var Rl=Object.defineProperty;var _f=Object.getOwnPropertyDescriptor;var xf=Object.getOwnPropertyNames;var yf=Object.prototype.hasOwnProperty;var vf=(i,e)=>{for(var t in e)Rl(i,t,{get:e[t],enumerable:!0})},Mf=(i,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of xf(e))!yf.call(i,s)&&s!==t&&Rl(i,s,{get:()=>e[s],enumerable:!(n=_f(e,s))||n.enumerable});return i};var Ef=i=>Mf(Rl({},"__esModule",{value:!0}),i);var ny={};vf(ny,{DESIGN_DEFAULT:()=>tf,INSIDE_STAGES:()=>ey,TOUR_STEPS:()=>nf,createHouseScene:()=>ty});var Sf=0,kh=1,bf=2;var Ad=1,ah=2,Pi=3,ts=0,Pn=1,wn=2;var Ki=0,cr=1,Gh=2,Vh=3,Wh=4,Tf=5,gs=100,wf=101,Af=102,Xh=103,qh=104,Rf=200,Cf=201,Pf=202,If=203,fc=204,pc=205,Lf=206,Df=207,Uf=208,Nf=209,Of=210,Ff=211,Bf=212,zf=213,Hf=214,kf=0,Gf=1,Vf=2,yo=3,Wf=4,Xf=5,qf=6,Yf=7,Rd=0,Zf=1,Jf=2,ji=0,$f=1,Kf=2,jf=3,oh=4,Qf=5,ep=6;var Cd=300,dr=301,fr=302,mc=303,gc=304,nl=306,Ms=1e3,_i=1001,_c=1002,Gn=1003,Yh=1004;var Cl=1005;var ai=1006,tp=1007;var Jr=1008;var Qi=1009,np=1010,ip=1011,lh=1012,Pd=1013,Zi=1014,Ji=1015,$r=1016,Id=1017,Ld=1018,xs=1020,sp=1021,xi=1023,rp=1024,ap=1025,ys=1026,pr=1027,op=1028,Dd=1029,lp=1030,Ud=1031,Nd=1033,Pl=33776,Il=33777,Ll=33778,Dl=33779,Zh=35840,Jh=35841,$h=35842,Kh=35843,Od=36196,jh=37492,Qh=37496,eu=37808,tu=37809,nu=37810,iu=37811,su=37812,ru=37813,au=37814,ou=37815,lu=37816,cu=37817,hu=37818,uu=37819,du=37820,fu=37821,Ul=36492,pu=36494,mu=36495,cp=36283,gu=36284,_u=36285,xu=36286;var vo=2300,Mo=2301,Nl=2302,yu=2400,vu=2401,Mu=2402;var Fd=3e3,vs=3001,hp=3200,up=3201,Bd=0,dp=1,oi="",dn="srgb",Ui="srgb-linear",ch="display-p3",il="display-p3-linear",Eo="linear",Qt="srgb",So="rec709",bo="p3";var zs=7680;var Eu=519,fp=512,pp=513,mp=514,zd=515,gp=516,_p=517,xp=518,yp=519,xc=35044;var Su="300 es",yc=1035,Li=2e3,To=2001,ns=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var xo=Math.PI/180,vc=180/Math.PI;function Di(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ln[i&255]+Ln[i>>8&255]+Ln[i>>16&255]+Ln[i>>24&255]+"-"+Ln[e&255]+Ln[e>>8&255]+"-"+Ln[e>>16&15|64]+Ln[e>>24&255]+"-"+Ln[t&63|128]+Ln[t>>8&255]+"-"+Ln[t>>16&255]+Ln[t>>24&255]+Ln[n&255]+Ln[n>>8&255]+Ln[n>>16&255]+Ln[n>>24&255]).toLowerCase()}function Un(i,e,t){return Math.max(e,Math.min(t,i))}function vp(i,e){return(i%e+e)%e}function Ol(i,e,t){return(1-t)*i+t*e}function bu(i){return(i&i-1)===0&&i!==0}function Mc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ii(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function qt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Me=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Un(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Tt=class i{constructor(e,t,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],m=n[5],g=n[8],v=s[0],p=s[3],f=s[6],S=s[1],y=s[4],T=s[7],z=s[2],D=s[5],U=s[8];return r[0]=a*v+o*S+l*z,r[3]=a*p+o*y+l*D,r[6]=a*f+o*T+l*U,r[1]=c*v+h*S+u*z,r[4]=c*p+h*y+u*D,r[7]=c*f+h*T+u*U,r[2]=d*v+m*S+g*z,r[5]=d*p+m*y+g*D,r[8]=d*f+m*T+g*U,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,m=c*r-a*l,g=t*u+n*d+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=u*v,e[1]=(s*c-h*n)*v,e[2]=(o*n-s*a)*v,e[3]=d*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=m*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Fl.makeScale(e,t)),this}rotate(e){return this.premultiply(Fl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Fl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Fl=new Tt;function Hd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Kr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Mp(){let i=Kr("canvas");return i.style.display="block",i}var Tu={};function Xr(i){i in Tu||(Tu[i]=!0,console.warn(i))}var wu=new Tt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Au=new Tt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Na={[Ui]:{transfer:Eo,primaries:So,toReference:i=>i,fromReference:i=>i},[dn]:{transfer:Qt,primaries:So,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[il]:{transfer:Eo,primaries:bo,toReference:i=>i.applyMatrix3(Au),fromReference:i=>i.applyMatrix3(wu)},[ch]:{transfer:Qt,primaries:bo,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Au),fromReference:i=>i.applyMatrix3(wu).convertLinearToSRGB()}},Ep=new Set([Ui,il]),Wt={enabled:!0,_workingColorSpace:Ui,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Ep.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=Na[e].toReference,s=Na[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Na[i].primaries},getTransfer:function(i){return i===oi?Eo:Na[i].transfer}};function hr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Bl(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Hs,wo=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Hs===void 0&&(Hs=Kr("canvas")),Hs.width=e.width,Hs.height=e.height;let n=Hs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Hs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Kr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=hr(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(hr(t[n]/255)*255):t[n]=hr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Sp=0,Ao=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Sp++}),this.uuid=Di(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(zl(s[a].image)):r.push(zl(s[a]))}else r=zl(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function zl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?wo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var bp=0,jn=class i extends ns{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=_i,s=_i,r=ai,a=Jr,o=xi,l=Qi,c=i.DEFAULT_ANISOTROPY,h=oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bp++}),this.uuid=Di(),this.name="",this.source=new Ao(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Me(0,0),this.repeat=new Me(1,1),this.center=new Me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Xr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===vs?dn:oi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Cd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ms:e.x=e.x-Math.floor(e.x);break;case _i:e.x=e.x<0?0:1;break;case _c:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ms:e.y=e.y-Math.floor(e.y);break;case _i:e.y=e.y<0?0:1;break;case _c:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Xr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===dn?vs:Fd}set encoding(e){Xr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===vs?dn:oi}};jn.DEFAULT_IMAGE=null;jn.DEFAULT_MAPPING=Cd;jn.DEFAULT_ANISOTROPY=1;var sn=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],m=l[5],g=l[9],v=l[2],p=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(c+1)/2,T=(m+1)/2,z=(f+1)/2,D=(h+d)/4,U=(u+v)/4,J=(g+p)/4;return y>T&&y>z?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=D/n,r=U/n):T>z?T<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),n=D/s,r=J/s):z<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(z),n=U/r,s=J/r),this.set(n,s,r,t),this}let S=Math.sqrt((p-g)*(p-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(p-g)/S,this.y=(u-v)/S,this.z=(d-h)/S,this.w=Math.acos((c+m+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ec=class extends ns{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new sn(0,0,e,t),this.scissorTest=!1,this.viewport=new sn(0,0,e,t);let s={width:e,height:t,depth:1};n.encoding!==void 0&&(Xr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===vs?dn:oi),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ai,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new jn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Ao(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ni=class extends Ec{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ro=class extends jn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Gn,this.minFilter=Gn,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Sc=class extends jn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Gn,this.minFilter=Gn,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var is=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],m=r[a+1],g=r[a+2],v=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=m,e[t+2]=g,e[t+3]=v;return}if(u!==v||l!==d||c!==m||h!==g){let p=1-o,f=l*d+c*m+h*g+u*v,S=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){let z=Math.sqrt(y),D=Math.atan2(z,f*S);p=Math.sin(p*D)/z,o=Math.sin(o*D)/z}let T=o*S;if(l=l*p+d*T,c=c*p+m*T,h=h*p+g*T,u=u*p+v*T,p===1-o){let z=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=z,c*=z,h*=z,u*=z}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],m=r[a+2],g=r[a+3];return e[t]=o*g+h*u+l*m-c*d,e[t+1]=l*g+h*d+c*u-o*m,e[t+2]=c*g+h*m+o*d-l*u,e[t+3]=h*g-o*u-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),m=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*m*g,this._y=c*m*u-d*h*g,this._z=c*h*g+d*m*u,this._w=c*h*u-d*m*g;break;case"YXZ":this._x=d*h*u+c*m*g,this._y=c*m*u-d*h*g,this._z=c*h*g-d*m*u,this._w=c*h*u+d*m*g;break;case"ZXY":this._x=d*h*u-c*m*g,this._y=c*m*u+d*h*g,this._z=c*h*g+d*m*u,this._w=c*h*u-d*m*g;break;case"ZYX":this._x=d*h*u-c*m*g,this._y=c*m*u+d*h*g,this._z=c*h*g-d*m*u,this._w=c*h*u+d*m*g;break;case"YZX":this._x=d*h*u+c*m*g,this._y=c*m*u+d*h*g,this._z=c*h*g-d*m*u,this._w=c*h*u-d*m*g;break;case"XZY":this._x=d*h*u-c*m*g,this._y=c*m*u-d*h*g,this._z=c*h*g+d*m*u,this._w=c*h*u+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(n>o&&n>u){let m=2*Math.sqrt(1+n-o-u);this._w=(h-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>u){let m=2*Math.sqrt(1+o-n-u);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+u-n-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Un(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ru.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ru.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Hl.copy(this).projectOnVector(e),this.sub(Hl)}reflect(e){return this.sub(Hl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Un(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Hl=new L,Ru=new is,Oi=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(fi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(fi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=fi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,fi):fi.fromBufferAttribute(r,a),fi.applyMatrix4(e.matrixWorld),this.expandByPoint(fi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Oa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Oa.copy(n.boundingBox)),Oa.applyMatrix4(e.matrixWorld),this.union(Oa)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,fi),fi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Nr),Fa.subVectors(this.max,Nr),ks.subVectors(e.a,Nr),Gs.subVectors(e.b,Nr),Vs.subVectors(e.c,Nr),Vi.subVectors(Gs,ks),Wi.subVectors(Vs,Gs),us.subVectors(ks,Vs);let t=[0,-Vi.z,Vi.y,0,-Wi.z,Wi.y,0,-us.z,us.y,Vi.z,0,-Vi.x,Wi.z,0,-Wi.x,us.z,0,-us.x,-Vi.y,Vi.x,0,-Wi.y,Wi.x,0,-us.y,us.x,0];return!kl(t,ks,Gs,Vs,Fa)||(t=[1,0,0,0,1,0,0,0,1],!kl(t,ks,Gs,Vs,Fa))?!1:(Ba.crossVectors(Vi,Wi),t=[Ba.x,Ba.y,Ba.z],kl(t,ks,Gs,Vs,Fa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Ti=[new L,new L,new L,new L,new L,new L,new L,new L],fi=new L,Oa=new Oi,ks=new L,Gs=new L,Vs=new L,Vi=new L,Wi=new L,us=new L,Nr=new L,Fa=new L,Ba=new L,ds=new L;function kl(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ds.fromArray(i,r);let o=s.x*Math.abs(ds.x)+s.y*Math.abs(ds.y)+s.z*Math.abs(ds.z),l=e.dot(ds),c=t.dot(ds),h=n.dot(ds);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Tp=new Oi,Or=new L,Gl=new L,Fi=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Tp.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Or.subVectors(e,this.center);let t=Or.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Or,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Gl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Or.copy(e.center).add(Gl)),this.expandByPoint(Or.copy(e.center).sub(Gl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},wi=new L,Vl=new L,za=new L,Xi=new L,Wl=new L,Ha=new L,Xl=new L,jr=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=wi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(wi.copy(this.origin).addScaledVector(this.direction,t),wi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Vl.copy(e).add(t).multiplyScalar(.5),za.copy(t).sub(e).normalize(),Xi.copy(this.origin).sub(Vl);let r=e.distanceTo(t)*.5,a=-this.direction.dot(za),o=Xi.dot(this.direction),l=-Xi.dot(za),c=Xi.lengthSq(),h=Math.abs(1-a*a),u,d,m,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let v=1/h;u*=v,d*=v,m=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),m=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),m=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),m=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Vl).addScaledVector(za,d),m}intersectSphere(e,t){wi.subVectors(e.center,this.origin);let n=wi.dot(this.direction),s=wi.dot(wi)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,wi)!==null}intersectTriangle(e,t,n,s,r){Wl.subVectors(t,e),Ha.subVectors(n,e),Xl.crossVectors(Wl,Ha);let a=this.direction.dot(Xl),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Xi.subVectors(this.origin,e);let l=o*this.direction.dot(Ha.crossVectors(Xi,Ha));if(l<0)return null;let c=o*this.direction.dot(Wl.cross(Xi));if(c<0||l+c>a)return null;let h=-o*Xi.dot(Xl);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Jt=class i{constructor(e,t,n,s,r,a,o,l,c,h,u,d,m,g,v,p){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,u,d,m,g,v,p)}set(e,t,n,s,r,a,o,l,c,h,u,d,m,g,v,p){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=m,f[7]=g,f[11]=v,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Ws.setFromMatrixColumn(e,0).length(),r=1/Ws.setFromMatrixColumn(e,1).length(),a=1/Ws.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,m=a*u,g=o*h,v=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=m+g*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=g+m*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,m=l*u,g=c*h,v=c*u;t[0]=d+v*o,t[4]=g*o-m,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=m*o-g,t[6]=v+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,m=l*u,g=c*h,v=c*u;t[0]=d-v*o,t[4]=-a*u,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*h,t[9]=v-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,m=a*u,g=o*h,v=o*u;t[0]=l*h,t[4]=g*c-m,t[8]=d*c+v,t[1]=l*u,t[5]=v*c+d,t[9]=m*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,m=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=v-d*u,t[8]=g*u+m,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=m*u+g,t[10]=d-v*u}else if(e.order==="XZY"){let d=a*l,m=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+v,t[5]=a*h,t[9]=m*u-g,t[2]=g*u-m,t[6]=o*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wp,e,Ap)}lookAt(e,t,n){let s=this.elements;return $n.subVectors(e,t),$n.lengthSq()===0&&($n.z=1),$n.normalize(),qi.crossVectors(n,$n),qi.lengthSq()===0&&(Math.abs(n.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),qi.crossVectors(n,$n)),qi.normalize(),ka.crossVectors($n,qi),s[0]=qi.x,s[4]=ka.x,s[8]=$n.x,s[1]=qi.y,s[5]=ka.y,s[9]=$n.y,s[2]=qi.z,s[6]=ka.z,s[10]=$n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],m=n[13],g=n[2],v=n[6],p=n[10],f=n[14],S=n[3],y=n[7],T=n[11],z=n[15],D=s[0],U=s[4],J=s[8],E=s[12],C=s[1],Z=s[5],se=s[9],N=s[13],_=s[2],W=s[6],te=s[10],fe=s[14],$=s[3],ce=s[7],pe=s[11],me=s[15];return r[0]=a*D+o*C+l*_+c*$,r[4]=a*U+o*Z+l*W+c*ce,r[8]=a*J+o*se+l*te+c*pe,r[12]=a*E+o*N+l*fe+c*me,r[1]=h*D+u*C+d*_+m*$,r[5]=h*U+u*Z+d*W+m*ce,r[9]=h*J+u*se+d*te+m*pe,r[13]=h*E+u*N+d*fe+m*me,r[2]=g*D+v*C+p*_+f*$,r[6]=g*U+v*Z+p*W+f*ce,r[10]=g*J+v*se+p*te+f*pe,r[14]=g*E+v*N+p*fe+f*me,r[3]=S*D+y*C+T*_+z*$,r[7]=S*U+y*Z+T*W+z*ce,r[11]=S*J+y*se+T*te+z*pe,r[15]=S*E+y*N+T*fe+z*me,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],m=e[14],g=e[3],v=e[7],p=e[11],f=e[15];return g*(+r*l*u-s*c*u-r*o*d+n*c*d+s*o*m-n*l*m)+v*(+t*l*m-t*c*d+r*a*d-s*a*m+s*c*h-r*l*h)+p*(+t*c*u-t*o*m-r*a*u+n*a*m+r*o*h-n*c*h)+f*(-s*o*h-t*l*u+t*o*d+s*a*u-n*a*d+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],m=e[11],g=e[12],v=e[13],p=e[14],f=e[15],S=u*p*c-v*d*c+v*l*m-o*p*m-u*l*f+o*d*f,y=g*d*c-h*p*c-g*l*m+a*p*m+h*l*f-a*d*f,T=h*v*c-g*u*c+g*o*m-a*v*m-h*o*f+a*u*f,z=g*u*l-h*v*l-g*o*d+a*v*d+h*o*p-a*u*p,D=t*S+n*y+s*T+r*z;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/D;return e[0]=S*U,e[1]=(v*d*r-u*p*r-v*s*m+n*p*m+u*s*f-n*d*f)*U,e[2]=(o*p*r-v*l*r+v*s*c-n*p*c-o*s*f+n*l*f)*U,e[3]=(u*l*r-o*d*r-u*s*c+n*d*c+o*s*m-n*l*m)*U,e[4]=y*U,e[5]=(h*p*r-g*d*r+g*s*m-t*p*m-h*s*f+t*d*f)*U,e[6]=(g*l*r-a*p*r-g*s*c+t*p*c+a*s*f-t*l*f)*U,e[7]=(a*d*r-h*l*r+h*s*c-t*d*c-a*s*m+t*l*m)*U,e[8]=T*U,e[9]=(g*u*r-h*v*r-g*n*m+t*v*m+h*n*f-t*u*f)*U,e[10]=(a*v*r-g*o*r+g*n*c-t*v*c-a*n*f+t*o*f)*U,e[11]=(h*o*r-a*u*r-h*n*c+t*u*c+a*n*m-t*o*m)*U,e[12]=z*U,e[13]=(h*v*s-g*u*s+g*n*d-t*v*d-h*n*p+t*u*p)*U,e[14]=(g*o*s-a*v*s-g*n*l+t*v*l+a*n*p-t*o*p)*U,e[15]=(a*u*s-h*o*s+h*n*l-t*u*l-a*n*d+t*o*d)*U,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,m=r*h,g=r*u,v=a*h,p=a*u,f=o*u,S=l*c,y=l*h,T=l*u,z=n.x,D=n.y,U=n.z;return s[0]=(1-(v+f))*z,s[1]=(m+T)*z,s[2]=(g-y)*z,s[3]=0,s[4]=(m-T)*D,s[5]=(1-(d+f))*D,s[6]=(p+S)*D,s[7]=0,s[8]=(g+y)*U,s[9]=(p-S)*U,s[10]=(1-(d+v))*U,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Ws.set(s[0],s[1],s[2]).length(),a=Ws.set(s[4],s[5],s[6]).length(),o=Ws.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],pi.copy(this);let c=1/r,h=1/a,u=1/o;return pi.elements[0]*=c,pi.elements[1]*=c,pi.elements[2]*=c,pi.elements[4]*=h,pi.elements[5]*=h,pi.elements[6]*=h,pi.elements[8]*=u,pi.elements[9]*=u,pi.elements[10]*=u,t.setFromRotationMatrix(pi),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=Li){let l=this.elements,c=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s),m,g;if(o===Li)m=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===To)m=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Li){let l=this.elements,c=1/(t-e),h=1/(n-s),u=1/(a-r),d=(t+e)*c,m=(n+s)*h,g,v;if(o===Li)g=(a+r)*u,v=-2*u;else if(o===To)g=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ws=new L,pi=new Jt,wp=new L(0,0,0),Ap=new L(1,1,1),qi=new L,ka=new L,$n=new L,Cu=new Jt,Pu=new is,Co=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Un(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Un(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Un(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Un(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Un(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Un(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Cu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Cu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Pu.setFromEuler(this),this.setFromQuaternion(Pu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Co.DEFAULT_ORDER="XYZ";var Po=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Rp=0,Iu=new L,Xs=new is,Ai=new Jt,Ga=new L,Fr=new L,Cp=new L,Pp=new is,Lu=new L(1,0,0),Du=new L(0,1,0),Uu=new L(0,0,1),Ip={type:"added"},Lp={type:"removed"},ln=class i extends ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rp++}),this.uuid=Di(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new L,t=new Co,n=new is,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Jt},normalMatrix:{value:new Tt}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Po,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xs.setFromAxisAngle(e,t),this.quaternion.multiply(Xs),this}rotateOnWorldAxis(e,t){return Xs.setFromAxisAngle(e,t),this.quaternion.premultiply(Xs),this}rotateX(e){return this.rotateOnAxis(Lu,e)}rotateY(e){return this.rotateOnAxis(Du,e)}rotateZ(e){return this.rotateOnAxis(Uu,e)}translateOnAxis(e,t){return Iu.copy(e).applyQuaternion(this.quaternion),this.position.add(Iu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Lu,e)}translateY(e){return this.translateOnAxis(Du,e)}translateZ(e){return this.translateOnAxis(Uu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ai.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ga.copy(e):Ga.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Fr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ai.lookAt(Fr,Ga,this.up):Ai.lookAt(Ga,Fr,this.up),this.quaternion.setFromRotationMatrix(Ai),s&&(Ai.extractRotation(s.matrixWorld),Xs.setFromRotationMatrix(Ai),this.quaternion.premultiply(Xs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Ip)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Lp)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ai),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fr,e,Cp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fr,Pp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};ln.DEFAULT_UP=new L(0,1,0);ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var mi=new L,Ri=new L,ql=new L,Ci=new L,qs=new L,Ys=new L,Nu=new L,Yl=new L,Zl=new L,Jl=new L,Va=!1,$i=class i{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),mi.subVectors(e,t),s.cross(mi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){mi.subVectors(s,t),Ri.subVectors(n,t),ql.subVectors(e,t);let a=mi.dot(mi),o=mi.dot(Ri),l=mi.dot(ql),c=Ri.dot(Ri),h=Ri.dot(ql),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,m=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ci)===null?!1:Ci.x>=0&&Ci.y>=0&&Ci.x+Ci.y<=1}static getUV(e,t,n,s,r,a,o,l){return Va===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Va=!0),this.getInterpolation(e,t,n,s,r,a,o,l)}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ci.x),l.addScaledVector(a,Ci.y),l.addScaledVector(o,Ci.z),l)}static isFrontFacing(e,t,n,s){return mi.subVectors(n,t),Ri.subVectors(e,t),mi.cross(Ri).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mi.subVectors(this.c,this.b),Ri.subVectors(this.a,this.b),mi.cross(Ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return Va===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Va=!0),i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;qs.subVectors(s,n),Ys.subVectors(r,n),Yl.subVectors(e,n);let l=qs.dot(Yl),c=Ys.dot(Yl);if(l<=0&&c<=0)return t.copy(n);Zl.subVectors(e,s);let h=qs.dot(Zl),u=Ys.dot(Zl);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(qs,a);Jl.subVectors(e,r);let m=qs.dot(Jl),g=Ys.dot(Jl);if(g>=0&&m<=g)return t.copy(r);let v=m*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Ys,o);let p=h*g-m*u;if(p<=0&&u-h>=0&&m-g>=0)return Nu.subVectors(r,s),o=(u-h)/(u-h+(m-g)),t.copy(s).addScaledVector(Nu,o);let f=1/(p+v+d);return a=v*f,o=d*f,t.copy(n).addScaledVector(qs,a).addScaledVector(Ys,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},kd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yi={h:0,s:0,l:0},Wa={h:0,s:0,l:0};function $l(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var je=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=dn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Wt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Wt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Wt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Wt.workingColorSpace){if(e=vp(e,1),t=Un(t,0,1),n=Un(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=$l(a,r,e+1/3),this.g=$l(a,r,e),this.b=$l(a,r,e-1/3)}return Wt.toWorkingColorSpace(this,s),this}setStyle(e,t=dn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=dn){let n=kd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hr(e.r),this.g=hr(e.g),this.b=hr(e.b),this}copyLinearToSRGB(e){return this.r=Bl(e.r),this.g=Bl(e.g),this.b=Bl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=dn){return Wt.fromWorkingColorSpace(Dn.copy(this),e),Math.round(Un(Dn.r*255,0,255))*65536+Math.round(Un(Dn.g*255,0,255))*256+Math.round(Un(Dn.b*255,0,255))}getHexString(e=dn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Wt.workingColorSpace){Wt.fromWorkingColorSpace(Dn.copy(this),t);let n=Dn.r,s=Dn.g,r=Dn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Wt.workingColorSpace){return Wt.fromWorkingColorSpace(Dn.copy(this),t),e.r=Dn.r,e.g=Dn.g,e.b=Dn.b,e}getStyle(e=dn){Wt.fromWorkingColorSpace(Dn.copy(this),e);let t=Dn.r,n=Dn.g,s=Dn.b;return e!==dn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Yi),this.setHSL(Yi.h+e,Yi.s+t,Yi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Yi),e.getHSL(Wa);let n=Ol(Yi.h,Wa.h,t),s=Ol(Yi.s,Wa.s,t),r=Ol(Yi.l,Wa.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Dn=new je;je.NAMES=kd;var Dp=0,yi=class extends ns{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Dp++}),this.uuid=Di(),this.name="",this.type="Material",this.blending=cr,this.side=ts,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fc,this.blendDst=pc,this.blendEquation=gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=yo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Eu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zs,this.stencilZFail=zs,this.stencilZPass=zs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==cr&&(n.blending=this.blending),this.side!==ts&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==fc&&(n.blendSrc=this.blendSrc),this.blendDst!==pc&&(n.blendDst=this.blendDst),this.blendEquation!==gs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==yo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Eu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==zs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==zs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Fn=class extends yi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Rd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var xn=new L,Xa=new Me,On=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=xc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ji,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Xa.fromBufferAttribute(this,t),Xa.applyMatrix3(e),this.setXY(t,Xa.x,Xa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.applyMatrix3(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.applyMatrix4(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.applyNormalMatrix(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.transformDirection(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ii(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=qt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ii(t,this.array)),t}setX(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ii(t,this.array)),t}setY(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ii(t,this.array)),t}setZ(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ii(t,this.array)),t}setW(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),n=qt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),n=qt(n,this.array),s=qt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),n=qt(n,this.array),s=qt(s,this.array),r=qt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==xc&&(e.usage=this.usage),e}};var Io=class extends On{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Lo=class extends On{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var wt=class extends On{constructor(e,t,n){super(new Float32Array(e),t,n)}};var Up=0,ri=new Jt,Kl=new ln,Zs=new L,Kn=new Oi,Br=new Oi,Tn=new L,en=class i extends ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Up++}),this.uuid=Di(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Hd(e)?Lo:Io)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Tt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ri.makeRotationFromQuaternion(e),this.applyMatrix4(ri),this}rotateX(e){return ri.makeRotationX(e),this.applyMatrix4(ri),this}rotateY(e){return ri.makeRotationY(e),this.applyMatrix4(ri),this}rotateZ(e){return ri.makeRotationZ(e),this.applyMatrix4(ri),this}translate(e,t,n){return ri.makeTranslation(e,t,n),this.applyMatrix4(ri),this}scale(e,t,n){return ri.makeScale(e,t,n),this.applyMatrix4(ri),this}lookAt(e){return Kl.lookAt(e),Kl.updateMatrix(),this.applyMatrix4(Kl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zs).negate(),this.translate(Zs.x,Zs.y,Zs.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new wt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Kn.setFromBufferAttribute(r),this.morphTargetsRelative?(Tn.addVectors(this.boundingBox.min,Kn.min),this.boundingBox.expandByPoint(Tn),Tn.addVectors(this.boundingBox.max,Kn.max),this.boundingBox.expandByPoint(Tn)):(this.boundingBox.expandByPoint(Kn.min),this.boundingBox.expandByPoint(Kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if(Kn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Br.setFromBufferAttribute(o),this.morphTargetsRelative?(Tn.addVectors(Kn.min,Br.min),Kn.expandByPoint(Tn),Tn.addVectors(Kn.max,Br.max),Kn.expandByPoint(Tn)):(Kn.expandByPoint(Br.min),Kn.expandByPoint(Br.max))}Kn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Tn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Tn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Tn.fromBufferAttribute(o,c),l&&(Zs.fromBufferAttribute(e,c),Tn.add(Zs)),s=Math.max(s,n.distanceToSquared(Tn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new On(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let C=0;C<o;C++)c[C]=new L,h[C]=new L;let u=new L,d=new L,m=new L,g=new Me,v=new Me,p=new Me,f=new L,S=new L;function y(C,Z,se){u.fromArray(s,C*3),d.fromArray(s,Z*3),m.fromArray(s,se*3),g.fromArray(a,C*2),v.fromArray(a,Z*2),p.fromArray(a,se*2),d.sub(u),m.sub(u),v.sub(g),p.sub(g);let N=1/(v.x*p.y-p.x*v.y);isFinite(N)&&(f.copy(d).multiplyScalar(p.y).addScaledVector(m,-v.y).multiplyScalar(N),S.copy(m).multiplyScalar(v.x).addScaledVector(d,-p.x).multiplyScalar(N),c[C].add(f),c[Z].add(f),c[se].add(f),h[C].add(S),h[Z].add(S),h[se].add(S))}let T=this.groups;T.length===0&&(T=[{start:0,count:n.length}]);for(let C=0,Z=T.length;C<Z;++C){let se=T[C],N=se.start,_=se.count;for(let W=N,te=N+_;W<te;W+=3)y(n[W+0],n[W+1],n[W+2])}let z=new L,D=new L,U=new L,J=new L;function E(C){U.fromArray(r,C*3),J.copy(U);let Z=c[C];z.copy(Z),z.sub(U.multiplyScalar(U.dot(Z))).normalize(),D.crossVectors(J,Z);let N=D.dot(h[C])<0?-1:1;l[C*4]=z.x,l[C*4+1]=z.y,l[C*4+2]=z.z,l[C*4+3]=N}for(let C=0,Z=T.length;C<Z;++C){let se=T[C],N=se.start,_=se.count;for(let W=N,te=N+_;W<te;W+=3)E(n[W+0]),E(n[W+1]),E(n[W+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new On(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);let s=new L,r=new L,a=new L,o=new L,l=new L,c=new L,h=new L,u=new L;if(e)for(let d=0,m=e.count;d<m;d+=3){let g=e.getX(d+0),v=e.getX(d+1),p=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,p),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Tn.fromBufferAttribute(e,t),Tn.normalize(),e.setXYZ(t,Tn.x,Tn.y,Tn.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),m=0,g=0;for(let v=0,p=l.length;v<p;v++){o.isInterleavedBufferAttribute?m=l[v]*o.data.stride+o.offset:m=l[v]*h;for(let f=0;f<h;f++)d[g++]=c[m++]}return new On(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],m=e(d,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let m=c[u];h.push(m.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ou=new Jt,fs=new jr,qa=new Fi,Fu=new L,Js=new L,$s=new L,Ks=new L,jl=new L,Ya=new L,Za=new Me,Ja=new Me,$a=new Me,Bu=new L,zu=new L,Hu=new L,Ka=new L,ja=new L,Te=class extends ln{constructor(e=new en,t=new Fn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Ya.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(jl.fromBufferAttribute(u,e),a?Ya.addScaledVector(jl,h):Ya.addScaledVector(jl.sub(t),h))}t.add(Ya)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),qa.copy(n.boundingSphere),qa.applyMatrix4(r),fs.copy(e.ray).recast(e.near),!(qa.containsPoint(fs.origin)===!1&&(fs.intersectSphere(qa,Fu)===null||fs.origin.distanceToSquared(Fu)>(e.far-e.near)**2))&&(Ou.copy(r).invert(),fs.copy(e.ray).applyMatrix4(Ou),!(n.boundingBox!==null&&fs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,fs)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){let p=d[g],f=a[p.materialIndex],S=Math.max(p.start,m.start),y=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let T=S,z=y;T<z;T+=3){let D=o.getX(T),U=o.getX(T+1),J=o.getX(T+2);s=Qa(this,f,e,n,c,h,u,D,U,J),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,m.start),v=Math.min(o.count,m.start+m.count);for(let p=g,f=v;p<f;p+=3){let S=o.getX(p),y=o.getX(p+1),T=o.getX(p+2);s=Qa(this,a,e,n,c,h,u,S,y,T),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){let p=d[g],f=a[p.materialIndex],S=Math.max(p.start,m.start),y=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let T=S,z=y;T<z;T+=3){let D=T,U=T+1,J=T+2;s=Qa(this,f,e,n,c,h,u,D,U,J),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let p=g,f=v;p<f;p+=3){let S=p,y=p+1,T=p+2;s=Qa(this,a,e,n,c,h,u,S,y,T),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function Np(i,e,t,n,s,r,a,o){let l;if(e.side===Pn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===ts,o),l===null)return null;ja.copy(o),ja.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(ja);return c<t.near||c>t.far?null:{distance:c,point:ja.clone(),object:i}}function Qa(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Js),i.getVertexPosition(l,$s),i.getVertexPosition(c,Ks);let h=Np(i,e,t,n,Js,$s,Ks,Ka);if(h){s&&(Za.fromBufferAttribute(s,o),Ja.fromBufferAttribute(s,l),$a.fromBufferAttribute(s,c),h.uv=$i.getInterpolation(Ka,Js,$s,Ks,Za,Ja,$a,new Me)),r&&(Za.fromBufferAttribute(r,o),Ja.fromBufferAttribute(r,l),$a.fromBufferAttribute(r,c),h.uv1=$i.getInterpolation(Ka,Js,$s,Ks,Za,Ja,$a,new Me),h.uv2=h.uv1),a&&(Bu.fromBufferAttribute(a,o),zu.fromBufferAttribute(a,l),Hu.fromBufferAttribute(a,c),h.normal=$i.getInterpolation(Ka,Js,$s,Ks,Bu,zu,Hu,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new L,materialIndex:0};$i.getNormal(Js,$s,Ks,u.normal),h.face=u}return h}var yn=class i extends en{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,m=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new wt(c,3)),this.setAttribute("normal",new wt(h,3)),this.setAttribute("uv",new wt(u,2));function g(v,p,f,S,y,T,z,D,U,J,E){let C=T/U,Z=z/J,se=T/2,N=z/2,_=D/2,W=U+1,te=J+1,fe=0,$=0,ce=new L;for(let pe=0;pe<te;pe++){let me=pe*Z-N;for(let Pe=0;Pe<W;Pe++){let ee=Pe*C-se;ce[v]=ee*S,ce[p]=me*y,ce[f]=_,c.push(ce.x,ce.y,ce.z),ce[v]=0,ce[p]=0,ce[f]=D>0?1:-1,h.push(ce.x,ce.y,ce.z),u.push(Pe/U),u.push(1-pe/J),fe+=1}}for(let pe=0;pe<J;pe++)for(let me=0;me<U;me++){let Pe=d+me+W*pe,ee=d+me+W*(pe+1),_e=d+(me+1)+W*(pe+1),Ue=d+(me+1)+W*pe;l.push(Pe,ee,Ue),l.push(ee,_e,Ue),$+=6}o.addGroup(m,$,E),m+=$,d+=fe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function mr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function kn(i){let e={};for(let t=0;t<i.length;t++){let n=mr(i[t]);for(let s in n)e[s]=n[s]}return e}function Op(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Gd(i){return i.getRenderTarget()===null?i.outputColorSpace:Wt.workingColorSpace}var Fp={clone:mr,merge:kn},Bp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,li=class extends yi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bp,this.fragmentShader=zp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=mr(e.uniforms),this.uniformsGroups=Op(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Do=class extends ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt,this.coordinateSystem=Li}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Nn=class extends Do{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=vc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(xo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vc*2*Math.atan(Math.tan(xo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(xo*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},js=-90,Qs=1,bc=class extends ln{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Nn(js,Qs,e,t);s.layers=this.layers,this.add(s);let r=new Nn(js,Qs,e,t);r.layers=this.layers,this.add(r);let a=new Nn(js,Qs,e,t);a.layers=this.layers,this.add(a);let o=new Nn(js,Qs,e,t);o.layers=this.layers,this.add(o);let l=new Nn(js,Qs,e,t);l.layers=this.layers,this.add(l);let c=new Nn(js,Qs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Li)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===To)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Uo=class extends jn{constructor(e,t,n,s,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:dr,super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Tc=class extends Ni{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(Xr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===vs?dn:oi),this.texture=new Uo(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ai}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new yn(5,5,5),r=new li({name:"CubemapFromEquirect",uniforms:mr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pn,blending:Ki});r.uniforms.tEquirect.value=t;let a=new Te(s,r),o=t.minFilter;return t.minFilter===Jr&&(t.minFilter=ai),new bc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},Ql=new L,Hp=new L,kp=new Tt,gi=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Ql.subVectors(n,t).cross(Hp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Ql),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||kp.getNormalMatrix(e),s=this.coplanarPoint(Ql).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ps=new Fi,eo=new L,Qr=class{constructor(e=new gi,t=new gi,n=new gi,s=new gi,r=new gi,a=new gi){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Li){let n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],m=s[8],g=s[9],v=s[10],p=s[11],f=s[12],S=s[13],y=s[14],T=s[15];if(n[0].setComponents(l-r,d-c,p-m,T-f).normalize(),n[1].setComponents(l+r,d+c,p+m,T+f).normalize(),n[2].setComponents(l+a,d+h,p+g,T+S).normalize(),n[3].setComponents(l-a,d-h,p-g,T-S).normalize(),n[4].setComponents(l-o,d-u,p-v,T-y).normalize(),t===Li)n[5].setComponents(l+o,d+u,p+v,T+y).normalize();else if(t===To)n[5].setComponents(o,u,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ps.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ps.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ps)}intersectsSprite(e){return ps.center.set(0,0,0),ps.radius=.7071067811865476,ps.applyMatrix4(e.matrixWorld),this.intersectsSphere(ps)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(eo.x=s.normal.x>0?e.max.x:e.min.x,eo.y=s.normal.y>0?e.max.y:e.min.y,eo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(eo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Vd(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Gp(i,e){let t=e.isWebGL2,n=new WeakMap;function s(c,h){let u=c.array,d=c.usage,m=u.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,u,d),c.onUploadCallback();let v;if(u instanceof Float32Array)v=i.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)v=i.SHORT;else if(u instanceof Uint32Array)v=i.UNSIGNED_INT;else if(u instanceof Int32Array)v=i.INT;else if(u instanceof Int8Array)v=i.BYTE;else if(u instanceof Uint8Array)v=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)v=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:v,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:m}}function r(c,h,u){let d=h.array,m=h._updateRange,g=h.updateRanges;if(i.bindBuffer(u,c),m.count===-1&&g.length===0&&i.bufferSubData(u,0,d),g.length!==0){for(let v=0,p=g.length;v<p;v++){let f=g[v];t?i.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):i.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}h.clearUpdateRanges()}m.count!==-1&&(t?i.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):i.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=n.get(c);if(u===void 0)n.set(c,s(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:a,remove:o,update:l}}var An=class i extends en{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=e/o,d=t/l,m=[],g=[],v=[],p=[];for(let f=0;f<h;f++){let S=f*d-a;for(let y=0;y<c;y++){let T=y*u-r;g.push(T,-S,0),v.push(0,0,1),p.push(y/o),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let S=0;S<o;S++){let y=S+c*f,T=S+c*(f+1),z=S+1+c*(f+1),D=S+1+c*f;m.push(y,T,D),m.push(T,z,D)}this.setIndex(m),this.setAttribute("position",new wt(g,3)),this.setAttribute("normal",new wt(v,3)),this.setAttribute("uv",new wt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Vp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wp=`#ifdef USE_ALPHAHASH
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
#endif`,Xp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Zp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jp=`#ifdef USE_AOMAP
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
#endif`,$p=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Kp=`#ifdef USE_BATCHING
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
#endif`,jp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Qp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,em=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,nm=`#ifdef USE_IRIDESCENCE
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
#endif`,im=`#ifdef USE_BUMPMAP
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
#endif`,sm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,rm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,am=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,om=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,um=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,dm=`#define PI 3.141592653589793
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
} // validated`,fm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,pm=`vec3 transformedNormal = objectNormal;
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
#endif`,mm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_m=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ym="gl_FragColor = linearToOutputTexel( gl_FragColor );",vm=`
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
}`,Mm=`#ifdef USE_ENVMAP
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
#endif`,Em=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Sm=`#ifdef USE_ENVMAP
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
#endif`,bm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Tm=`#ifdef USE_ENVMAP
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
#endif`,wm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Am=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pm=`#ifdef USE_GRADIENTMAP
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
}`,Im=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Lm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Dm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Um=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Nm=`uniform bool receiveShadow;
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
#endif`,Om=`#ifdef USE_ENVMAP
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
#endif`,Fm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,km=`PhysicalMaterial material;
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
#endif`,Gm=`struct PhysicalMaterial {
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
}`,Vm=`
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
#endif`,Wm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Xm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ym=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Jm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,$m=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Km=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Qm=`#if defined( USE_POINTS_UV )
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
#endif`,e0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,t0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,n0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,i0=`#ifdef USE_MORPHNORMALS
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
#endif`,s0=`#ifdef USE_MORPHTARGETS
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
#endif`,r0=`#ifdef USE_MORPHTARGETS
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
#endif`,a0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,o0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,l0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,c0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,h0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,u0=`#ifdef USE_NORMALMAP
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
#endif`,d0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,f0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,p0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,m0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,g0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,x0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,y0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,v0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,M0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,E0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,S0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,b0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,T0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,w0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,A0=`float getShadowMask() {
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
}`,R0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,C0=`#ifdef USE_SKINNING
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
#endif`,P0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,I0=`#ifdef USE_SKINNING
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
#endif`,L0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,D0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,U0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,N0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,O0=`#ifdef USE_TRANSMISSION
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
#endif`,F0=`#ifdef USE_TRANSMISSION
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
#endif`,B0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,z0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,H0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,k0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,G0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,V0=`uniform sampler2D t2D;
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
}`,W0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,X0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,q0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Y0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Z0=`#include <common>
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
}`,J0=`#if DEPTH_PACKING == 3200
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
}`,$0=`#define DISTANCE
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
}`,K0=`#define DISTANCE
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
}`,j0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Q0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eg=`uniform float scale;
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
}`,tg=`uniform vec3 diffuse;
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
}`,ng=`#include <common>
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
}`,ig=`uniform vec3 diffuse;
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
}`,sg=`#define LAMBERT
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
}`,rg=`#define LAMBERT
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
}`,ag=`#define MATCAP
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
}`,og=`#define MATCAP
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
}`,lg=`#define NORMAL
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
}`,cg=`#define NORMAL
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
}`,hg=`#define PHONG
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
}`,ug=`#define PHONG
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
}`,dg=`#define STANDARD
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
}`,fg=`#define STANDARD
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
}`,pg=`#define TOON
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
}`,mg=`#define TOON
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
}`,gg=`uniform float size;
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
}`,_g=`uniform vec3 diffuse;
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
}`,xg=`#include <common>
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
}`,yg=`uniform vec3 color;
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
}`,vg=`uniform float rotation;
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
}`,Mg=`uniform vec3 diffuse;
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
}`,vt={alphahash_fragment:Vp,alphahash_pars_fragment:Wp,alphamap_fragment:Xp,alphamap_pars_fragment:qp,alphatest_fragment:Yp,alphatest_pars_fragment:Zp,aomap_fragment:Jp,aomap_pars_fragment:$p,batching_pars_vertex:Kp,batching_vertex:jp,begin_vertex:Qp,beginnormal_vertex:em,bsdfs:tm,iridescence_fragment:nm,bumpmap_pars_fragment:im,clipping_planes_fragment:sm,clipping_planes_pars_fragment:rm,clipping_planes_pars_vertex:am,clipping_planes_vertex:om,color_fragment:lm,color_pars_fragment:cm,color_pars_vertex:hm,color_vertex:um,common:dm,cube_uv_reflection_fragment:fm,defaultnormal_vertex:pm,displacementmap_pars_vertex:mm,displacementmap_vertex:gm,emissivemap_fragment:_m,emissivemap_pars_fragment:xm,colorspace_fragment:ym,colorspace_pars_fragment:vm,envmap_fragment:Mm,envmap_common_pars_fragment:Em,envmap_pars_fragment:Sm,envmap_pars_vertex:bm,envmap_physical_pars_fragment:Om,envmap_vertex:Tm,fog_vertex:wm,fog_pars_vertex:Am,fog_fragment:Rm,fog_pars_fragment:Cm,gradientmap_pars_fragment:Pm,lightmap_fragment:Im,lightmap_pars_fragment:Lm,lights_lambert_fragment:Dm,lights_lambert_pars_fragment:Um,lights_pars_begin:Nm,lights_toon_fragment:Fm,lights_toon_pars_fragment:Bm,lights_phong_fragment:zm,lights_phong_pars_fragment:Hm,lights_physical_fragment:km,lights_physical_pars_fragment:Gm,lights_fragment_begin:Vm,lights_fragment_maps:Wm,lights_fragment_end:Xm,logdepthbuf_fragment:qm,logdepthbuf_pars_fragment:Ym,logdepthbuf_pars_vertex:Zm,logdepthbuf_vertex:Jm,map_fragment:$m,map_pars_fragment:Km,map_particle_fragment:jm,map_particle_pars_fragment:Qm,metalnessmap_fragment:e0,metalnessmap_pars_fragment:t0,morphcolor_vertex:n0,morphnormal_vertex:i0,morphtarget_pars_vertex:s0,morphtarget_vertex:r0,normal_fragment_begin:a0,normal_fragment_maps:o0,normal_pars_fragment:l0,normal_pars_vertex:c0,normal_vertex:h0,normalmap_pars_fragment:u0,clearcoat_normal_fragment_begin:d0,clearcoat_normal_fragment_maps:f0,clearcoat_pars_fragment:p0,iridescence_pars_fragment:m0,opaque_fragment:g0,packing:_0,premultiplied_alpha_fragment:x0,project_vertex:y0,dithering_fragment:v0,dithering_pars_fragment:M0,roughnessmap_fragment:E0,roughnessmap_pars_fragment:S0,shadowmap_pars_fragment:b0,shadowmap_pars_vertex:T0,shadowmap_vertex:w0,shadowmask_pars_fragment:A0,skinbase_vertex:R0,skinning_pars_vertex:C0,skinning_vertex:P0,skinnormal_vertex:I0,specularmap_fragment:L0,specularmap_pars_fragment:D0,tonemapping_fragment:U0,tonemapping_pars_fragment:N0,transmission_fragment:O0,transmission_pars_fragment:F0,uv_pars_fragment:B0,uv_pars_vertex:z0,uv_vertex:H0,worldpos_vertex:k0,background_vert:G0,background_frag:V0,backgroundCube_vert:W0,backgroundCube_frag:X0,cube_vert:q0,cube_frag:Y0,depth_vert:Z0,depth_frag:J0,distanceRGBA_vert:$0,distanceRGBA_frag:K0,equirect_vert:j0,equirect_frag:Q0,linedashed_vert:eg,linedashed_frag:tg,meshbasic_vert:ng,meshbasic_frag:ig,meshlambert_vert:sg,meshlambert_frag:rg,meshmatcap_vert:ag,meshmatcap_frag:og,meshnormal_vert:lg,meshnormal_frag:cg,meshphong_vert:hg,meshphong_frag:ug,meshphysical_vert:dg,meshphysical_frag:fg,meshtoon_vert:pg,meshtoon_frag:mg,points_vert:gg,points_frag:_g,shadow_vert:xg,shadow_frag:yg,sprite_vert:vg,sprite_frag:Mg},Ie={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Tt},alphaMap:{value:null},alphaMapTransform:{value:new Tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Tt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Tt},normalScale:{value:new Me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Tt},alphaTest:{value:0},uvTransform:{value:new Tt}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new Me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Tt},alphaMap:{value:null},alphaMapTransform:{value:new Tt},alphaTest:{value:0}}},Si={basic:{uniforms:kn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:vt.meshbasic_vert,fragmentShader:vt.meshbasic_frag},lambert:{uniforms:kn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new je(0)}}]),vertexShader:vt.meshlambert_vert,fragmentShader:vt.meshlambert_frag},phong:{uniforms:kn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30}}]),vertexShader:vt.meshphong_vert,fragmentShader:vt.meshphong_frag},standard:{uniforms:kn([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag},toon:{uniforms:kn([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new je(0)}}]),vertexShader:vt.meshtoon_vert,fragmentShader:vt.meshtoon_frag},matcap:{uniforms:kn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:vt.meshmatcap_vert,fragmentShader:vt.meshmatcap_frag},points:{uniforms:kn([Ie.points,Ie.fog]),vertexShader:vt.points_vert,fragmentShader:vt.points_frag},dashed:{uniforms:kn([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:vt.linedashed_vert,fragmentShader:vt.linedashed_frag},depth:{uniforms:kn([Ie.common,Ie.displacementmap]),vertexShader:vt.depth_vert,fragmentShader:vt.depth_frag},normal:{uniforms:kn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:vt.meshnormal_vert,fragmentShader:vt.meshnormal_frag},sprite:{uniforms:kn([Ie.sprite,Ie.fog]),vertexShader:vt.sprite_vert,fragmentShader:vt.sprite_frag},background:{uniforms:{uvTransform:{value:new Tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:vt.background_vert,fragmentShader:vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:vt.backgroundCube_vert,fragmentShader:vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:vt.cube_vert,fragmentShader:vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:vt.equirect_vert,fragmentShader:vt.equirect_frag},distanceRGBA:{uniforms:kn([Ie.common,Ie.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:vt.distanceRGBA_vert,fragmentShader:vt.distanceRGBA_frag},shadow:{uniforms:kn([Ie.lights,Ie.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:vt.shadow_vert,fragmentShader:vt.shadow_frag}};Si.physical={uniforms:kn([Si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Tt},clearcoatNormalScale:{value:new Me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Tt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Tt},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Tt},transmissionSamplerSize:{value:new Me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Tt},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Tt},anisotropyVector:{value:new Me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Tt}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag};var to={r:0,b:0,g:0};function Eg(i,e,t,n,s,r,a){let o=new je(0),l=r===!0?0:1,c,h,u=null,d=0,m=null;function g(p,f){let S=!1,y=f.isScene===!0?f.background:null;y&&y.isTexture&&(y=(f.backgroundBlurriness>0?t:e).get(y)),y===null?v(o,l):y&&y.isColor&&(v(y,1),S=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||S)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),y&&(y.isCubeTexture||y.mapping===nl)?(h===void 0&&(h=new Te(new yn(1,1,1),new li({name:"BackgroundCubeMaterial",uniforms:mr(Si.backgroundCube.uniforms),vertexShader:Si.backgroundCube.vertexShader,fragmentShader:Si.backgroundCube.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(z,D,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=Wt.getTransfer(y.colorSpace)!==Qt,(u!==y||d!==y.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,u=y,d=y.version,m=i.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Te(new An(2,2),new li({name:"BackgroundMaterial",uniforms:mr(Si.background.uniforms),vertexShader:Si.background.vertexShader,fragmentShader:Si.background.fragmentShader,side:ts,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=Wt.getTransfer(y.colorSpace)!==Qt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,m=i.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function v(p,f){p.getRGB(to,Gd(i)),n.buffers.color.setClear(to.r,to.g,to.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(p,f=1){o.set(p),l=f,v(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,v(o,l)},render:g}}function Sg(i,e,t,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=p(null),c=l,h=!1;function u(_,W,te,fe,$){let ce=!1;if(a){let pe=v(fe,te,W);c!==pe&&(c=pe,m(c.object)),ce=f(_,fe,te,$),ce&&S(_,fe,te,$)}else{let pe=W.wireframe===!0;(c.geometry!==fe.id||c.program!==te.id||c.wireframe!==pe)&&(c.geometry=fe.id,c.program=te.id,c.wireframe=pe,ce=!0)}$!==null&&t.update($,i.ELEMENT_ARRAY_BUFFER),(ce||h)&&(h=!1,J(_,W,te,fe),$!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function d(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function m(_){return n.isWebGL2?i.bindVertexArray(_):r.bindVertexArrayOES(_)}function g(_){return n.isWebGL2?i.deleteVertexArray(_):r.deleteVertexArrayOES(_)}function v(_,W,te){let fe=te.wireframe===!0,$=o[_.id];$===void 0&&($={},o[_.id]=$);let ce=$[W.id];ce===void 0&&(ce={},$[W.id]=ce);let pe=ce[fe];return pe===void 0&&(pe=p(d()),ce[fe]=pe),pe}function p(_){let W=[],te=[],fe=[];for(let $=0;$<s;$++)W[$]=0,te[$]=0,fe[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:te,attributeDivisors:fe,object:_,attributes:{},index:null}}function f(_,W,te,fe){let $=c.attributes,ce=W.attributes,pe=0,me=te.getAttributes();for(let Pe in me)if(me[Pe].location>=0){let _e=$[Pe],Ue=ce[Pe];if(Ue===void 0&&(Pe==="instanceMatrix"&&_.instanceMatrix&&(Ue=_.instanceMatrix),Pe==="instanceColor"&&_.instanceColor&&(Ue=_.instanceColor)),_e===void 0||_e.attribute!==Ue||Ue&&_e.data!==Ue.data)return!0;pe++}return c.attributesNum!==pe||c.index!==fe}function S(_,W,te,fe){let $={},ce=W.attributes,pe=0,me=te.getAttributes();for(let Pe in me)if(me[Pe].location>=0){let _e=ce[Pe];_e===void 0&&(Pe==="instanceMatrix"&&_.instanceMatrix&&(_e=_.instanceMatrix),Pe==="instanceColor"&&_.instanceColor&&(_e=_.instanceColor));let Ue={};Ue.attribute=_e,_e&&_e.data&&(Ue.data=_e.data),$[Pe]=Ue,pe++}c.attributes=$,c.attributesNum=pe,c.index=fe}function y(){let _=c.newAttributes;for(let W=0,te=_.length;W<te;W++)_[W]=0}function T(_){z(_,0)}function z(_,W){let te=c.newAttributes,fe=c.enabledAttributes,$=c.attributeDivisors;te[_]=1,fe[_]===0&&(i.enableVertexAttribArray(_),fe[_]=1),$[_]!==W&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](_,W),$[_]=W)}function D(){let _=c.newAttributes,W=c.enabledAttributes;for(let te=0,fe=W.length;te<fe;te++)W[te]!==_[te]&&(i.disableVertexAttribArray(te),W[te]=0)}function U(_,W,te,fe,$,ce,pe){pe===!0?i.vertexAttribIPointer(_,W,te,$,ce):i.vertexAttribPointer(_,W,te,fe,$,ce)}function J(_,W,te,fe){if(n.isWebGL2===!1&&(_.isInstancedMesh||fe.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();let $=fe.attributes,ce=te.getAttributes(),pe=W.defaultAttributeValues;for(let me in ce){let Pe=ce[me];if(Pe.location>=0){let ee=$[me];if(ee===void 0&&(me==="instanceMatrix"&&_.instanceMatrix&&(ee=_.instanceMatrix),me==="instanceColor"&&_.instanceColor&&(ee=_.instanceColor)),ee!==void 0){let _e=ee.normalized,Ue=ee.itemSize,We=t.get(ee);if(We===void 0)continue;let Be=We.buffer,rt=We.type,lt=We.bytesPerElement,qe=n.isWebGL2===!0&&(rt===i.INT||rt===i.UNSIGNED_INT||ee.gpuType===Pd);if(ee.isInterleavedBufferAttribute){let ht=ee.data,F=ht.stride,we=ee.offset;if(ht.isInstancedInterleavedBuffer){for(let le=0;le<Pe.locationSize;le++)z(Pe.location+le,ht.meshPerAttribute);_.isInstancedMesh!==!0&&fe._maxInstanceCount===void 0&&(fe._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let le=0;le<Pe.locationSize;le++)T(Pe.location+le);i.bindBuffer(i.ARRAY_BUFFER,Be);for(let le=0;le<Pe.locationSize;le++)U(Pe.location+le,Ue/Pe.locationSize,rt,_e,F*lt,(we+Ue/Pe.locationSize*le)*lt,qe)}else{if(ee.isInstancedBufferAttribute){for(let ht=0;ht<Pe.locationSize;ht++)z(Pe.location+ht,ee.meshPerAttribute);_.isInstancedMesh!==!0&&fe._maxInstanceCount===void 0&&(fe._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let ht=0;ht<Pe.locationSize;ht++)T(Pe.location+ht);i.bindBuffer(i.ARRAY_BUFFER,Be);for(let ht=0;ht<Pe.locationSize;ht++)U(Pe.location+ht,Ue/Pe.locationSize,rt,_e,Ue*lt,Ue/Pe.locationSize*ht*lt,qe)}}else if(pe!==void 0){let _e=pe[me];if(_e!==void 0)switch(_e.length){case 2:i.vertexAttrib2fv(Pe.location,_e);break;case 3:i.vertexAttrib3fv(Pe.location,_e);break;case 4:i.vertexAttrib4fv(Pe.location,_e);break;default:i.vertexAttrib1fv(Pe.location,_e)}}}}D()}function E(){se();for(let _ in o){let W=o[_];for(let te in W){let fe=W[te];for(let $ in fe)g(fe[$].object),delete fe[$];delete W[te]}delete o[_]}}function C(_){if(o[_.id]===void 0)return;let W=o[_.id];for(let te in W){let fe=W[te];for(let $ in fe)g(fe[$].object),delete fe[$];delete W[te]}delete o[_.id]}function Z(_){for(let W in o){let te=o[W];if(te[_.id]===void 0)continue;let fe=te[_.id];for(let $ in fe)g(fe[$].object),delete fe[$];delete te[_.id]}}function se(){N(),h=!0,c!==l&&(c=l,m(c.object))}function N(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:se,resetDefaultState:N,dispose:E,releaseStatesOfGeometry:C,releaseStatesOfProgram:Z,initAttributes:y,enableAttribute:T,disableUnusedAttributes:D}}function bg(i,e,t,n){let s=n.isWebGL2,r;function a(h){r=h}function o(h,u){i.drawArrays(r,h,u),t.update(u,r,1)}function l(h,u,d){if(d===0)return;let m,g;if(s)m=i,g="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](r,h,u,d),t.update(u,r,d)}function c(h,u,d){if(d===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{m.multiDrawArraysWEBGL(r,h,0,u,0,d);let g=0;for(let v=0;v<d;v++)g+=u[v];t.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function Tg(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let U=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(U){if(U==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",o=t.precision!==void 0?t.precision:"highp",l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let c=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),v=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),f=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=d>0,T=a||e.has("OES_texture_float"),z=y&&T,D=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:p,maxVaryings:f,maxFragmentUniforms:S,vertexTextures:y,floatFragmentTextures:T,floatVertexTextures:z,maxSamples:D}}function wg(i){let e=this,t=null,n=0,s=!1,r=!1,a=new gi,o=new Tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let m=u.length!==0||d||n!==0||s;return s=d,n=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,m){let g=u.clippingPlanes,v=u.clipIntersection,p=u.clipShadows,f=i.get(u);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{let S=r?0:n,y=S*4,T=f.clippingState||null;l.value=T,T=h(g,d,y,m);for(let z=0;z!==y;++z)T[z]=t[z];f.clippingState=T,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,m,g){let v=u!==null?u.length:0,p=null;if(v!==0){if(p=l.value,g!==!0||p===null){let f=m+v*4,S=d.matrixWorldInverse;o.getNormalMatrix(S),(p===null||p.length<f)&&(p=new Float32Array(f));for(let y=0,T=m;y!==v;++y,T+=4)a.copy(u[y]).applyMatrix4(S,o),a.normal.toArray(p,T),p[T+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function Ag(i){let e=new WeakMap;function t(a,o){return o===mc?a.mapping=dr:o===gc&&(a.mapping=fr),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===mc||o===gc)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Tc(l.height/2);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var No=class extends Do{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ar=4,ku=[.125,.215,.35,.446,.526,.582],_s=20,ec=new No,Gu=new je,tc=null,nc=0,ic=0,ms=(1+Math.sqrt(5))/2,er=1/ms,Vu=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,ms,er),new L(0,ms,-er),new L(er,0,ms),new L(-er,0,ms),new L(ms,er,0),new L(-ms,er,0)],gr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){tc=this._renderer.getRenderTarget(),nc=this._renderer.getActiveCubeFace(),ic=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(tc,nc,ic),e.scissorTest=!1,no(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===dr||e.mapping===fr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),tc=this._renderer.getRenderTarget(),nc=this._renderer.getActiveCubeFace(),ic=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ai,minFilter:ai,generateMipmaps:!1,type:$r,format:xi,colorSpace:Ui,depthBuffer:!1},s=Wu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wu(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Rg(r)),this._blurMaterial=Cg(r,e,t)}return s}_compileMaterial(e){let t=new Te(this._lodPlanes[0],e);this._renderer.compile(t,ec)}_sceneToCubeUV(e,t,n,s){let o=new Nn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Gu),h.toneMapping=ji,h.autoClear=!1;let m=new Fn({name:"PMREM.Background",side:Pn,depthWrite:!1,depthTest:!1}),g=new Te(new yn,m),v=!1,p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,v=!0):(m.color.copy(Gu),v=!0);for(let f=0;f<6;f++){let S=f%3;S===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):S===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));let y=this._cubeSize;no(s,S*y,f>2?y:0,y,y),h.setRenderTarget(s),v&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=p}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===dr||e.mapping===fr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=qu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xu());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Te(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;no(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,ec)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Vu[(s-1)%Vu.length];this._blur(e,s-1,s,r,a)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Te(this._lodPlanes[s],c),d=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*_s-1),v=r/g,p=isFinite(r)?1+Math.floor(h*v):_s;p>_s&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${_s}`);let f=[],S=0;for(let U=0;U<_s;++U){let J=U/v,E=Math.exp(-J*J/2);f.push(E),U===0?S+=E:U<p&&(S+=2*E)}for(let U=0;U<f.length;U++)f[U]=f[U]/S;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;let T=this._sizeLods[s],z=3*T*(s>y-ar?s-y+ar:0),D=4*(this._cubeSize-T);no(t,z,D,3*T,2*T),l.setRenderTarget(t),l.render(u,ec)}};function Rg(i){let e=[],t=[],n=[],s=i,r=i-ar+1+ku.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>i-ar?l=ku[a-i+ar-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,v=3,p=2,f=1,S=new Float32Array(v*g*m),y=new Float32Array(p*g*m),T=new Float32Array(f*g*m);for(let D=0;D<m;D++){let U=D%3*2/3-1,J=D>2?0:-1,E=[U,J,0,U+2/3,J,0,U+2/3,J+1,0,U,J,0,U+2/3,J+1,0,U,J+1,0];S.set(E,v*g*D),y.set(d,p*g*D);let C=[D,D,D,D,D,D];T.set(C,f*g*D)}let z=new en;z.setAttribute("position",new On(S,v)),z.setAttribute("uv",new On(y,p)),z.setAttribute("faceIndex",new On(T,f)),e.push(z),s>ar&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Wu(i,e,t){let n=new Ni(i,e,t);return n.texture.mapping=nl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function no(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Cg(i,e,t){let n=new Float32Array(_s),s=new L(0,1,0);return new li({name:"SphericalGaussianBlur",defines:{n:_s,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:hh(),fragmentShader:`

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
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function Xu(){return new li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hh(),fragmentShader:`

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
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function qu(){return new li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function hh(){return`

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
	`}function Pg(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===mc||l===gc,h=l===dr||l===fr;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=e.get(o);return t===null&&(t=new gr(i)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),e.set(o,u),u.texture}else{if(e.has(o))return e.get(o).texture;{let u=o.image;if(c&&u&&u.height>0||h&&u&&s(u)){t===null&&(t=new gr(i));let d=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Ig(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Lg(i,e,t,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let v=d.morphAttributes[g];for(let p=0,f=v.length;p<f;p++)e.remove(v[p])}d.removeEventListener("dispose",a),delete s[d.id];let m=r.get(d);m&&(e.remove(m),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)e.update(d[g],i.ARRAY_BUFFER);let m=u.morphAttributes;for(let g in m){let v=m[g];for(let p=0,f=v.length;p<f;p++)e.update(v[p],i.ARRAY_BUFFER)}}function c(u){let d=[],m=u.index,g=u.attributes.position,v=0;if(m!==null){let S=m.array;v=m.version;for(let y=0,T=S.length;y<T;y+=3){let z=S[y+0],D=S[y+1],U=S[y+2];d.push(z,D,D,U,U,z)}}else if(g!==void 0){let S=g.array;v=g.version;for(let y=0,T=S.length/3-1;y<T;y+=3){let z=y+0,D=y+1,U=y+2;d.push(z,D,D,U,U,z)}}else return;let p=new(Hd(d)?Lo:Io)(d,1);p.version=v;let f=r.get(u);f&&e.remove(f),r.set(u,p)}function h(u){let d=r.get(u);if(d){let m=u.index;m!==null&&d.version<m.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Dg(i,e,t,n){let s=n.isWebGL2,r;function a(m){r=m}let o,l;function c(m){o=m.type,l=m.bytesPerElement}function h(m,g){i.drawElements(r,g,o,m*l),t.update(g,r,1)}function u(m,g,v){if(v===0)return;let p,f;if(s)p=i,f="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](r,g,o,m*l,v),t.update(g,r,v)}function d(m,g,v){if(v===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<v;f++)this.render(m[f]/l,g[f]);else{p.multiDrawElementsWEBGL(r,g,0,o,m,0,v);let f=0;for(let S=0;S<v;S++)f+=g[S];t.update(f,r,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function Ug(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Ng(i,e){return i[0]-e[0]}function Og(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Fg(i,e,t){let n={},s=new Float32Array(8),r=new WeakMap,a=new sn,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,u){let d=c.morphTargetInfluences;if(e.isWebGL2===!0){let m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=m!==void 0?m.length:0,v=r.get(h);if(v===void 0||v.count!==g){let _=function(){se.dispose(),r.delete(h),h.removeEventListener("dispose",_)};v!==void 0&&v.texture.dispose();let S=h.morphAttributes.position!==void 0,y=h.morphAttributes.normal!==void 0,T=h.morphAttributes.color!==void 0,z=h.morphAttributes.position||[],D=h.morphAttributes.normal||[],U=h.morphAttributes.color||[],J=0;S===!0&&(J=1),y===!0&&(J=2),T===!0&&(J=3);let E=h.attributes.position.count*J,C=1;E>e.maxTextureSize&&(C=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);let Z=new Float32Array(E*C*4*g),se=new Ro(Z,E,C,g);se.type=Ji,se.needsUpdate=!0;let N=J*4;for(let W=0;W<g;W++){let te=z[W],fe=D[W],$=U[W],ce=E*C*4*W;for(let pe=0;pe<te.count;pe++){let me=pe*N;S===!0&&(a.fromBufferAttribute(te,pe),Z[ce+me+0]=a.x,Z[ce+me+1]=a.y,Z[ce+me+2]=a.z,Z[ce+me+3]=0),y===!0&&(a.fromBufferAttribute(fe,pe),Z[ce+me+4]=a.x,Z[ce+me+5]=a.y,Z[ce+me+6]=a.z,Z[ce+me+7]=0),T===!0&&(a.fromBufferAttribute($,pe),Z[ce+me+8]=a.x,Z[ce+me+9]=a.y,Z[ce+me+10]=a.z,Z[ce+me+11]=$.itemSize===4?a.w:1)}}v={count:g,texture:se,size:new Me(E,C)},r.set(h,v),h.addEventListener("dispose",_)}let p=0;for(let S=0;S<d.length;S++)p+=d[S];let f=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(i,"morphTargetBaseInfluence",f),u.getUniforms().setValue(i,"morphTargetInfluences",d),u.getUniforms().setValue(i,"morphTargetsTexture",v.texture,t),u.getUniforms().setValue(i,"morphTargetsTextureSize",v.size)}else{let m=d===void 0?0:d.length,g=n[h.id];if(g===void 0||g.length!==m){g=[];for(let y=0;y<m;y++)g[y]=[y,0];n[h.id]=g}for(let y=0;y<m;y++){let T=g[y];T[0]=y,T[1]=d[y]}g.sort(Og);for(let y=0;y<8;y++)y<m&&g[y][1]?(o[y][0]=g[y][0],o[y][1]=g[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(Ng);let v=h.morphAttributes.position,p=h.morphAttributes.normal,f=0;for(let y=0;y<8;y++){let T=o[y],z=T[0],D=T[1];z!==Number.MAX_SAFE_INTEGER&&D?(v&&h.getAttribute("morphTarget"+y)!==v[z]&&h.setAttribute("morphTarget"+y,v[z]),p&&h.getAttribute("morphNormal"+y)!==p[z]&&h.setAttribute("morphNormal"+y,p[z]),s[y]=D,f+=D):(v&&h.hasAttribute("morphTarget"+y)===!0&&h.deleteAttribute("morphTarget"+y),p&&h.hasAttribute("morphNormal"+y)===!0&&h.deleteAttribute("morphNormal"+y),s[y]=0)}let S=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(i,"morphTargetBaseInfluence",S),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function Bg(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var Oo=class extends jn{constructor(e,t,n,s,r,a,o,l,c,h){if(h=h!==void 0?h:ys,h!==ys&&h!==pr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ys&&(n=Zi),n===void 0&&h===pr&&(n=xs),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Gn,this.minFilter=l!==void 0?l:Gn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Wd=new jn,Xd=new Oo(1,1);Xd.compareFunction=zd;var qd=new Ro,Yd=new Sc,Zd=new Uo,Yu=[],Zu=[],Ju=new Float32Array(16),$u=new Float32Array(9),Ku=new Float32Array(4);function Sr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Yu[s];if(r===void 0&&(r=new Float32Array(s),Yu[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function En(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Sn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function sl(i,e){let t=Zu[e];t===void 0&&(t=new Int32Array(e),Zu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function zg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Hg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(En(t,e))return;i.uniform2fv(this.addr,e),Sn(t,e)}}function kg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(En(t,e))return;i.uniform3fv(this.addr,e),Sn(t,e)}}function Gg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(En(t,e))return;i.uniform4fv(this.addr,e),Sn(t,e)}}function Vg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(En(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Sn(t,e)}else{if(En(t,n))return;Ku.set(n),i.uniformMatrix2fv(this.addr,!1,Ku),Sn(t,n)}}function Wg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(En(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Sn(t,e)}else{if(En(t,n))return;$u.set(n),i.uniformMatrix3fv(this.addr,!1,$u),Sn(t,n)}}function Xg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(En(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Sn(t,e)}else{if(En(t,n))return;Ju.set(n),i.uniformMatrix4fv(this.addr,!1,Ju),Sn(t,n)}}function qg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Yg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(En(t,e))return;i.uniform2iv(this.addr,e),Sn(t,e)}}function Zg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(En(t,e))return;i.uniform3iv(this.addr,e),Sn(t,e)}}function Jg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(En(t,e))return;i.uniform4iv(this.addr,e),Sn(t,e)}}function $g(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Kg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(En(t,e))return;i.uniform2uiv(this.addr,e),Sn(t,e)}}function jg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(En(t,e))return;i.uniform3uiv(this.addr,e),Sn(t,e)}}function Qg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(En(t,e))return;i.uniform4uiv(this.addr,e),Sn(t,e)}}function e_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?Xd:Wd;t.setTexture2D(e||r,s)}function t_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Yd,s)}function n_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Zd,s)}function i_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||qd,s)}function s_(i){switch(i){case 5126:return zg;case 35664:return Hg;case 35665:return kg;case 35666:return Gg;case 35674:return Vg;case 35675:return Wg;case 35676:return Xg;case 5124:case 35670:return qg;case 35667:case 35671:return Yg;case 35668:case 35672:return Zg;case 35669:case 35673:return Jg;case 5125:return $g;case 36294:return Kg;case 36295:return jg;case 36296:return Qg;case 35678:case 36198:case 36298:case 36306:case 35682:return e_;case 35679:case 36299:case 36307:return t_;case 35680:case 36300:case 36308:case 36293:return n_;case 36289:case 36303:case 36311:case 36292:return i_}}function r_(i,e){i.uniform1fv(this.addr,e)}function a_(i,e){let t=Sr(e,this.size,2);i.uniform2fv(this.addr,t)}function o_(i,e){let t=Sr(e,this.size,3);i.uniform3fv(this.addr,t)}function l_(i,e){let t=Sr(e,this.size,4);i.uniform4fv(this.addr,t)}function c_(i,e){let t=Sr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function h_(i,e){let t=Sr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function u_(i,e){let t=Sr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function d_(i,e){i.uniform1iv(this.addr,e)}function f_(i,e){i.uniform2iv(this.addr,e)}function p_(i,e){i.uniform3iv(this.addr,e)}function m_(i,e){i.uniform4iv(this.addr,e)}function g_(i,e){i.uniform1uiv(this.addr,e)}function __(i,e){i.uniform2uiv(this.addr,e)}function x_(i,e){i.uniform3uiv(this.addr,e)}function y_(i,e){i.uniform4uiv(this.addr,e)}function v_(i,e,t){let n=this.cache,s=e.length,r=sl(t,s);En(n,r)||(i.uniform1iv(this.addr,r),Sn(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Wd,r[a])}function M_(i,e,t){let n=this.cache,s=e.length,r=sl(t,s);En(n,r)||(i.uniform1iv(this.addr,r),Sn(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Yd,r[a])}function E_(i,e,t){let n=this.cache,s=e.length,r=sl(t,s);En(n,r)||(i.uniform1iv(this.addr,r),Sn(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Zd,r[a])}function S_(i,e,t){let n=this.cache,s=e.length,r=sl(t,s);En(n,r)||(i.uniform1iv(this.addr,r),Sn(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||qd,r[a])}function b_(i){switch(i){case 5126:return r_;case 35664:return a_;case 35665:return o_;case 35666:return l_;case 35674:return c_;case 35675:return h_;case 35676:return u_;case 5124:case 35670:return d_;case 35667:case 35671:return f_;case 35668:case 35672:return p_;case 35669:case 35673:return m_;case 5125:return g_;case 36294:return __;case 36295:return x_;case 36296:return y_;case 35678:case 36198:case 36298:case 36306:case 35682:return v_;case 35679:case 36299:case 36307:return M_;case 35680:case 36300:case 36308:case 36293:return E_;case 36289:case 36303:case 36311:case 36292:return S_}}var wc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=s_(t.type)}},Ac=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=b_(t.type)}},Rc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},sc=/(\w+)(\])?(\[|\.)?/g;function ju(i,e){i.seq.push(e),i.map[e.id]=e}function T_(i,e,t){let n=i.name,s=n.length;for(sc.lastIndex=0;;){let r=sc.exec(n),a=sc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){ju(t,c===void 0?new wc(o,i,e):new Ac(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new Rc(o),ju(t,u)),t=u}}}var ur=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);T_(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Qu(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var w_=37297,A_=0;function R_(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function C_(i){let e=Wt.getPrimaries(Wt.workingColorSpace),t=Wt.getPrimaries(i),n;switch(e===t?n="":e===bo&&t===So?n="LinearDisplayP3ToLinearSRGB":e===So&&t===bo&&(n="LinearSRGBToLinearDisplayP3"),i){case Ui:case il:return[n,"LinearTransferOETF"];case dn:case ch:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function ed(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+R_(i.getShaderSource(e),a)}else return s}function P_(i,e){let t=C_(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function I_(i,e){let t;switch(e){case $f:t="Linear";break;case Kf:t="Reinhard";break;case jf:t="OptimizedCineon";break;case oh:t="ACESFilmic";break;case ep:t="AgX";break;case Qf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function L_(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(or).join(`
`)}function D_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(or).join(`
`)}function U_(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function N_(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function or(i){return i!==""}function td(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function nd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var O_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cc(i){return i.replace(O_,B_)}var F_=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function B_(i,e){let t=vt[e];if(t===void 0){let n=F_.get(e);if(n!==void 0)t=vt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Cc(t)}var z_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function id(i){return i.replace(z_,H_)}function H_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function sd(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function k_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ad?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===ah?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Pi&&(e="SHADOWMAP_TYPE_VSM"),e}function G_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case dr:case fr:e="ENVMAP_TYPE_CUBE";break;case nl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function V_(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===fr&&(e="ENVMAP_MODE_REFRACTION"),e}function W_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Rd:e="ENVMAP_BLENDING_MULTIPLY";break;case Zf:e="ENVMAP_BLENDING_MIX";break;case Jf:e="ENVMAP_BLENDING_ADD";break}return e}function X_(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function q_(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=k_(t),c=G_(t),h=V_(t),u=W_(t),d=X_(t),m=t.isWebGL2?"":L_(t),g=D_(t),v=U_(r),p=s.createProgram(),f,S,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(or).join(`
`),f.length>0&&(f+=`
`),S=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(or).join(`
`),S.length>0&&(S+=`
`)):(f=[sd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(or).join(`
`),S=[m,sd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ji?"#define TONE_MAPPING":"",t.toneMapping!==ji?vt.tonemapping_pars_fragment:"",t.toneMapping!==ji?I_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",vt.colorspace_pars_fragment,P_("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(or).join(`
`)),a=Cc(a),a=td(a,t),a=nd(a,t),o=Cc(o),o=td(o,t),o=nd(o,t),a=id(a),o=id(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,S=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Su?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Su?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);let T=y+f+a,z=y+S+o,D=Qu(s,s.VERTEX_SHADER,T),U=Qu(s,s.FRAGMENT_SHADER,z);s.attachShader(p,D),s.attachShader(p,U),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function J(se){if(i.debug.checkShaderErrors){let N=s.getProgramInfoLog(p).trim(),_=s.getShaderInfoLog(D).trim(),W=s.getShaderInfoLog(U).trim(),te=!0,fe=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(te=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,D,U);else{let $=ed(s,D,"vertex"),ce=ed(s,U,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Program Info Log: `+N+`
`+$+`
`+ce)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(_===""||W==="")&&(fe=!1);fe&&(se.diagnostics={runnable:te,programLog:N,vertexShader:{log:_,prefix:f},fragmentShader:{log:W,prefix:S}})}s.deleteShader(D),s.deleteShader(U),E=new ur(s,p),C=N_(s,p)}let E;this.getUniforms=function(){return E===void 0&&J(this),E};let C;this.getAttributes=function(){return C===void 0&&J(this),C};let Z=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Z===!1&&(Z=s.getProgramParameter(p,w_)),Z},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=A_++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=D,this.fragmentShader=U,this}var Y_=0,Pc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ic(e),t.set(e,n)),n}},Ic=class{constructor(e){this.id=Y_++,this.code=e,this.usedTimes=0}};function Z_(i,e,t,n,s,r,a){let o=new Po,l=new Pc,c=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,d=s.vertexTextures,m=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return E===0?"uv":`uv${E}`}function p(E,C,Z,se,N){let _=se.fog,W=N.geometry,te=E.isMeshStandardMaterial?se.environment:null,fe=(E.isMeshStandardMaterial?t:e).get(E.envMap||te),$=fe&&fe.mapping===nl?fe.image.height:null,ce=g[E.type];E.precision!==null&&(m=s.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));let pe=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,me=pe!==void 0?pe.length:0,Pe=0;W.morphAttributes.position!==void 0&&(Pe=1),W.morphAttributes.normal!==void 0&&(Pe=2),W.morphAttributes.color!==void 0&&(Pe=3);let ee,_e,Ue,We;if(ce){let an=Si[ce];ee=an.vertexShader,_e=an.fragmentShader}else ee=E.vertexShader,_e=E.fragmentShader,l.update(E),Ue=l.getVertexShaderID(E),We=l.getFragmentShaderID(E);let Be=i.getRenderTarget(),rt=N.isInstancedMesh===!0,lt=N.isBatchedMesh===!0,qe=!!E.map,ht=!!E.matcap,F=!!fe,we=!!E.aoMap,le=!!E.lightMap,Ee=!!E.bumpMap,ue=!!E.normalMap,Qe=!!E.displacementMap,Ne=!!E.emissiveMap,w=!!E.metalnessMap,M=!!E.roughnessMap,q=E.anisotropy>0,ge=E.clearcoat>0,oe=E.iridescence>0,I=E.sheen>0,Fe=E.transmission>0,Re=q&&!!E.anisotropyMap,A=ge&&!!E.clearcoatMap,re=ge&&!!E.clearcoatNormalMap,Xe=ge&&!!E.clearcoatRoughnessMap,xe=oe&&!!E.iridescenceMap,Dt=oe&&!!E.iridescenceThicknessMap,xt=I&&!!E.sheenColorMap,st=I&&!!E.sheenRoughnessMap,et=!!E.specularMap,He=!!E.specularColorMap,mt=!!E.specularIntensityMap,Ot=Fe&&!!E.transmissionMap,Kt=Fe&&!!E.thicknessMap,yt=!!E.gradientMap,Ce=!!E.alphaMap,H=E.alphaTest>0,Le=!!E.alphaHash,De=!!E.extensions,tt=!!W.attributes.uv1,$e=!!W.attributes.uv2,zt=!!W.attributes.uv3,kt=ji;return E.toneMapped&&(Be===null||Be.isXRRenderTarget===!0)&&(kt=i.toneMapping),{isWebGL2:h,shaderID:ce,shaderType:E.type,shaderName:E.name,vertexShader:ee,fragmentShader:_e,defines:E.defines,customVertexShaderID:Ue,customFragmentShaderID:We,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:lt,instancing:rt,instancingColor:rt&&N.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Be===null?i.outputColorSpace:Be.isXRRenderTarget===!0?Be.texture.colorSpace:Ui,map:qe,matcap:ht,envMap:F,envMapMode:F&&fe.mapping,envMapCubeUVHeight:$,aoMap:we,lightMap:le,bumpMap:Ee,normalMap:ue,displacementMap:d&&Qe,emissiveMap:Ne,normalMapObjectSpace:ue&&E.normalMapType===dp,normalMapTangentSpace:ue&&E.normalMapType===Bd,metalnessMap:w,roughnessMap:M,anisotropy:q,anisotropyMap:Re,clearcoat:ge,clearcoatMap:A,clearcoatNormalMap:re,clearcoatRoughnessMap:Xe,iridescence:oe,iridescenceMap:xe,iridescenceThicknessMap:Dt,sheen:I,sheenColorMap:xt,sheenRoughnessMap:st,specularMap:et,specularColorMap:He,specularIntensityMap:mt,transmission:Fe,transmissionMap:Ot,thicknessMap:Kt,gradientMap:yt,opaque:E.transparent===!1&&E.blending===cr,alphaMap:Ce,alphaTest:H,alphaHash:Le,combine:E.combine,mapUv:qe&&v(E.map.channel),aoMapUv:we&&v(E.aoMap.channel),lightMapUv:le&&v(E.lightMap.channel),bumpMapUv:Ee&&v(E.bumpMap.channel),normalMapUv:ue&&v(E.normalMap.channel),displacementMapUv:Qe&&v(E.displacementMap.channel),emissiveMapUv:Ne&&v(E.emissiveMap.channel),metalnessMapUv:w&&v(E.metalnessMap.channel),roughnessMapUv:M&&v(E.roughnessMap.channel),anisotropyMapUv:Re&&v(E.anisotropyMap.channel),clearcoatMapUv:A&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:re&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Xe&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:Dt&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:xt&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:st&&v(E.sheenRoughnessMap.channel),specularMapUv:et&&v(E.specularMap.channel),specularColorMapUv:He&&v(E.specularColorMap.channel),specularIntensityMapUv:mt&&v(E.specularIntensityMap.channel),transmissionMapUv:Ot&&v(E.transmissionMap.channel),thicknessMapUv:Kt&&v(E.thicknessMap.channel),alphaMapUv:Ce&&v(E.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(ue||q),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,vertexUv1s:tt,vertexUv2s:$e,vertexUv3s:zt,pointsUvs:N.isPoints===!0&&!!W.attributes.uv&&(qe||Ce),fog:!!_,useFog:E.fog===!0,fogExp2:_&&_.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:N.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:Pe,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&Z.length>0,shadowMapType:i.shadowMap.type,toneMapping:kt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:qe&&E.map.isVideoTexture===!0&&Wt.getTransfer(E.map.colorSpace)===Qt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===wn,flipSided:E.side===Pn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:De&&E.extensions.derivatives===!0,extensionFragDepth:De&&E.extensions.fragDepth===!0,extensionDrawBuffers:De&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:De&&E.extensions.shaderTextureLOD===!0,extensionClipCullDistance:De&&E.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()}}function f(E){let C=[];if(E.shaderID?C.push(E.shaderID):(C.push(E.customVertexShaderID),C.push(E.customFragmentShaderID)),E.defines!==void 0)for(let Z in E.defines)C.push(Z),C.push(E.defines[Z]);return E.isRawShaderMaterial===!1&&(S(C,E),y(C,E),C.push(i.outputColorSpace)),C.push(E.customProgramCacheKey),C.join()}function S(E,C){E.push(C.precision),E.push(C.outputColorSpace),E.push(C.envMapMode),E.push(C.envMapCubeUVHeight),E.push(C.mapUv),E.push(C.alphaMapUv),E.push(C.lightMapUv),E.push(C.aoMapUv),E.push(C.bumpMapUv),E.push(C.normalMapUv),E.push(C.displacementMapUv),E.push(C.emissiveMapUv),E.push(C.metalnessMapUv),E.push(C.roughnessMapUv),E.push(C.anisotropyMapUv),E.push(C.clearcoatMapUv),E.push(C.clearcoatNormalMapUv),E.push(C.clearcoatRoughnessMapUv),E.push(C.iridescenceMapUv),E.push(C.iridescenceThicknessMapUv),E.push(C.sheenColorMapUv),E.push(C.sheenRoughnessMapUv),E.push(C.specularMapUv),E.push(C.specularColorMapUv),E.push(C.specularIntensityMapUv),E.push(C.transmissionMapUv),E.push(C.thicknessMapUv),E.push(C.combine),E.push(C.fogExp2),E.push(C.sizeAttenuation),E.push(C.morphTargetsCount),E.push(C.morphAttributeCount),E.push(C.numDirLights),E.push(C.numPointLights),E.push(C.numSpotLights),E.push(C.numSpotLightMaps),E.push(C.numHemiLights),E.push(C.numRectAreaLights),E.push(C.numDirLightShadows),E.push(C.numPointLightShadows),E.push(C.numSpotLightShadows),E.push(C.numSpotLightShadowsWithMaps),E.push(C.numLightProbes),E.push(C.shadowMapType),E.push(C.toneMapping),E.push(C.numClippingPlanes),E.push(C.numClipIntersection),E.push(C.depthPacking)}function y(E,C){o.disableAll(),C.isWebGL2&&o.enable(0),C.supportsVertexTextures&&o.enable(1),C.instancing&&o.enable(2),C.instancingColor&&o.enable(3),C.matcap&&o.enable(4),C.envMap&&o.enable(5),C.normalMapObjectSpace&&o.enable(6),C.normalMapTangentSpace&&o.enable(7),C.clearcoat&&o.enable(8),C.iridescence&&o.enable(9),C.alphaTest&&o.enable(10),C.vertexColors&&o.enable(11),C.vertexAlphas&&o.enable(12),C.vertexUv1s&&o.enable(13),C.vertexUv2s&&o.enable(14),C.vertexUv3s&&o.enable(15),C.vertexTangents&&o.enable(16),C.anisotropy&&o.enable(17),C.alphaHash&&o.enable(18),C.batching&&o.enable(19),E.push(o.mask),o.disableAll(),C.fog&&o.enable(0),C.useFog&&o.enable(1),C.flatShading&&o.enable(2),C.logarithmicDepthBuffer&&o.enable(3),C.skinning&&o.enable(4),C.morphTargets&&o.enable(5),C.morphNormals&&o.enable(6),C.morphColors&&o.enable(7),C.premultipliedAlpha&&o.enable(8),C.shadowMapEnabled&&o.enable(9),C.useLegacyLights&&o.enable(10),C.doubleSided&&o.enable(11),C.flipSided&&o.enable(12),C.useDepthPacking&&o.enable(13),C.dithering&&o.enable(14),C.transmission&&o.enable(15),C.sheen&&o.enable(16),C.opaque&&o.enable(17),C.pointsUvs&&o.enable(18),C.decodeVideoTexture&&o.enable(19),E.push(o.mask)}function T(E){let C=g[E.type],Z;if(C){let se=Si[C];Z=Fp.clone(se.uniforms)}else Z=E.uniforms;return Z}function z(E,C){let Z;for(let se=0,N=c.length;se<N;se++){let _=c[se];if(_.cacheKey===C){Z=_,++Z.usedTimes;break}}return Z===void 0&&(Z=new q_(i,C,E,r),c.push(Z)),Z}function D(E){if(--E.usedTimes===0){let C=c.indexOf(E);c[C]=c[c.length-1],c.pop(),E.destroy()}}function U(E){l.remove(E)}function J(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:T,acquireProgram:z,releaseProgram:D,releaseShaderCache:U,programs:c,dispose:J}}function J_(){let i=new WeakMap;function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function t(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function $_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function rd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ad(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u,d,m,g,v,p){let f=i[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:m,groupOrder:g,renderOrder:u.renderOrder,z:v,group:p},i[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=m,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=v,f.group=p),e++,f}function o(u,d,m,g,v,p){let f=a(u,d,m,g,v,p);m.transmission>0?n.push(f):m.transparent===!0?s.push(f):t.push(f)}function l(u,d,m,g,v,p){let f=a(u,d,m,g,v,p);m.transmission>0?n.unshift(f):m.transparent===!0?s.unshift(f):t.unshift(f)}function c(u,d){t.length>1&&t.sort(u||$_),n.length>1&&n.sort(d||rd),s.length>1&&s.sort(d||rd)}function h(){for(let u=e,d=i.length;u<d;u++){let m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function K_(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new ad,i.set(n,[a])):s>=r.length?(a=new ad,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function j_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new je};break;case"SpotLight":t={position:new L,direction:new L,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new je,groundColor:new je};break;case"RectAreaLight":t={color:new je,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function Q_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var ex=0;function tx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function nx(i,e){let t=new j_,n=Q_(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new L);let r=new L,a=new Jt,o=new Jt;function l(h,u){let d=0,m=0,g=0;for(let se=0;se<9;se++)s.probe[se].set(0,0,0);let v=0,p=0,f=0,S=0,y=0,T=0,z=0,D=0,U=0,J=0,E=0;h.sort(tx);let C=u===!0?Math.PI:1;for(let se=0,N=h.length;se<N;se++){let _=h[se],W=_.color,te=_.intensity,fe=_.distance,$=_.shadow&&_.shadow.map?_.shadow.map.texture:null;if(_.isAmbientLight)d+=W.r*te*C,m+=W.g*te*C,g+=W.b*te*C;else if(_.isLightProbe){for(let ce=0;ce<9;ce++)s.probe[ce].addScaledVector(_.sh.coefficients[ce],te);E++}else if(_.isDirectionalLight){let ce=t.get(_);if(ce.color.copy(_.color).multiplyScalar(_.intensity*C),_.castShadow){let pe=_.shadow,me=n.get(_);me.shadowBias=pe.bias,me.shadowNormalBias=pe.normalBias,me.shadowRadius=pe.radius,me.shadowMapSize=pe.mapSize,s.directionalShadow[v]=me,s.directionalShadowMap[v]=$,s.directionalShadowMatrix[v]=_.shadow.matrix,T++}s.directional[v]=ce,v++}else if(_.isSpotLight){let ce=t.get(_);ce.position.setFromMatrixPosition(_.matrixWorld),ce.color.copy(W).multiplyScalar(te*C),ce.distance=fe,ce.coneCos=Math.cos(_.angle),ce.penumbraCos=Math.cos(_.angle*(1-_.penumbra)),ce.decay=_.decay,s.spot[f]=ce;let pe=_.shadow;if(_.map&&(s.spotLightMap[U]=_.map,U++,pe.updateMatrices(_),_.castShadow&&J++),s.spotLightMatrix[f]=pe.matrix,_.castShadow){let me=n.get(_);me.shadowBias=pe.bias,me.shadowNormalBias=pe.normalBias,me.shadowRadius=pe.radius,me.shadowMapSize=pe.mapSize,s.spotShadow[f]=me,s.spotShadowMap[f]=$,D++}f++}else if(_.isRectAreaLight){let ce=t.get(_);ce.color.copy(W).multiplyScalar(te),ce.halfWidth.set(_.width*.5,0,0),ce.halfHeight.set(0,_.height*.5,0),s.rectArea[S]=ce,S++}else if(_.isPointLight){let ce=t.get(_);if(ce.color.copy(_.color).multiplyScalar(_.intensity*C),ce.distance=_.distance,ce.decay=_.decay,_.castShadow){let pe=_.shadow,me=n.get(_);me.shadowBias=pe.bias,me.shadowNormalBias=pe.normalBias,me.shadowRadius=pe.radius,me.shadowMapSize=pe.mapSize,me.shadowCameraNear=pe.camera.near,me.shadowCameraFar=pe.camera.far,s.pointShadow[p]=me,s.pointShadowMap[p]=$,s.pointShadowMatrix[p]=_.shadow.matrix,z++}s.point[p]=ce,p++}else if(_.isHemisphereLight){let ce=t.get(_);ce.skyColor.copy(_.color).multiplyScalar(te*C),ce.groundColor.copy(_.groundColor).multiplyScalar(te*C),s.hemi[y]=ce,y++}}S>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ie.LTC_FLOAT_1,s.rectAreaLTC2=Ie.LTC_FLOAT_2):(s.rectAreaLTC1=Ie.LTC_HALF_1,s.rectAreaLTC2=Ie.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ie.LTC_FLOAT_1,s.rectAreaLTC2=Ie.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Ie.LTC_HALF_1,s.rectAreaLTC2=Ie.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=m,s.ambient[2]=g;let Z=s.hash;(Z.directionalLength!==v||Z.pointLength!==p||Z.spotLength!==f||Z.rectAreaLength!==S||Z.hemiLength!==y||Z.numDirectionalShadows!==T||Z.numPointShadows!==z||Z.numSpotShadows!==D||Z.numSpotMaps!==U||Z.numLightProbes!==E)&&(s.directional.length=v,s.spot.length=f,s.rectArea.length=S,s.point.length=p,s.hemi.length=y,s.directionalShadow.length=T,s.directionalShadowMap.length=T,s.pointShadow.length=z,s.pointShadowMap.length=z,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=T,s.pointShadowMatrix.length=z,s.spotLightMatrix.length=D+U-J,s.spotLightMap.length=U,s.numSpotLightShadowsWithMaps=J,s.numLightProbes=E,Z.directionalLength=v,Z.pointLength=p,Z.spotLength=f,Z.rectAreaLength=S,Z.hemiLength=y,Z.numDirectionalShadows=T,Z.numPointShadows=z,Z.numSpotShadows=D,Z.numSpotMaps=U,Z.numLightProbes=E,s.version=ex++)}function c(h,u){let d=0,m=0,g=0,v=0,p=0,f=u.matrixWorldInverse;for(let S=0,y=h.length;S<y;S++){let T=h[S];if(T.isDirectionalLight){let z=s.directional[d];z.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),z.direction.sub(r),z.direction.transformDirection(f),d++}else if(T.isSpotLight){let z=s.spot[g];z.position.setFromMatrixPosition(T.matrixWorld),z.position.applyMatrix4(f),z.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),z.direction.sub(r),z.direction.transformDirection(f),g++}else if(T.isRectAreaLight){let z=s.rectArea[v];z.position.setFromMatrixPosition(T.matrixWorld),z.position.applyMatrix4(f),o.identity(),a.copy(T.matrixWorld),a.premultiply(f),o.extractRotation(a),z.halfWidth.set(T.width*.5,0,0),z.halfHeight.set(0,T.height*.5,0),z.halfWidth.applyMatrix4(o),z.halfHeight.applyMatrix4(o),v++}else if(T.isPointLight){let z=s.point[m];z.position.setFromMatrixPosition(T.matrixWorld),z.position.applyMatrix4(f),m++}else if(T.isHemisphereLight){let z=s.hemi[p];z.direction.setFromMatrixPosition(T.matrixWorld),z.direction.transformDirection(f),p++}}}return{setup:l,setupView:c,state:s}}function od(i,e){let t=new nx(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function a(u){n.push(u)}function o(u){s.push(u)}function l(u){t.setup(n,u)}function c(u){t.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function ix(i,e){let t=new WeakMap;function n(r,a=0){let o=t.get(r),l;return o===void 0?(l=new od(i,e),t.set(r,[l])):a>=o.length?(l=new od(i,e),o.push(l)):l=o[a],l}function s(){t=new WeakMap}return{get:n,dispose:s}}var Lc=class extends yi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Dc=class extends yi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},sx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rx=`uniform sampler2D shadow_pass;
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
}`;function ax(i,e,t){let n=new Qr,s=new Me,r=new Me,a=new sn,o=new Lc({depthPacking:up}),l=new Dc,c={},h=t.maxTextureSize,u={[ts]:Pn,[Pn]:ts,[wn]:wn},d=new li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Me},radius:{value:4}},vertexShader:sx,fragmentShader:rx}),m=d.clone();m.defines.HORIZONTAL_PASS=1;let g=new en;g.setAttribute("position",new On(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Te(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ad;let f=this.type;this.render=function(D,U,J){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||D.length===0)return;let E=i.getRenderTarget(),C=i.getActiveCubeFace(),Z=i.getActiveMipmapLevel(),se=i.state;se.setBlending(Ki),se.buffers.color.setClear(1,1,1,1),se.buffers.depth.setTest(!0),se.setScissorTest(!1);let N=f!==Pi&&this.type===Pi,_=f===Pi&&this.type!==Pi;for(let W=0,te=D.length;W<te;W++){let fe=D[W],$=fe.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",fe,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);let ce=$.getFrameExtents();if(s.multiply(ce),r.copy($.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ce.x),s.x=r.x*ce.x,$.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ce.y),s.y=r.y*ce.y,$.mapSize.y=r.y)),$.map===null||N===!0||_===!0){let me=this.type!==Pi?{minFilter:Gn,magFilter:Gn}:{};$.map!==null&&$.map.dispose(),$.map=new Ni(s.x,s.y,me),$.map.texture.name=fe.name+".shadowMap",$.camera.updateProjectionMatrix()}i.setRenderTarget($.map),i.clear();let pe=$.getViewportCount();for(let me=0;me<pe;me++){let Pe=$.getViewport(me);a.set(r.x*Pe.x,r.y*Pe.y,r.x*Pe.z,r.y*Pe.w),se.viewport(a),$.updateMatrices(fe,me),n=$.getFrustum(),T(U,J,$.camera,fe,this.type)}$.isPointLightShadow!==!0&&this.type===Pi&&S($,J),$.needsUpdate=!1}f=this.type,p.needsUpdate=!1,i.setRenderTarget(E,C,Z)};function S(D,U){let J=e.update(v);d.defines.VSM_SAMPLES!==D.blurSamples&&(d.defines.VSM_SAMPLES=D.blurSamples,m.defines.VSM_SAMPLES=D.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new Ni(s.x,s.y)),d.uniforms.shadow_pass.value=D.map.texture,d.uniforms.resolution.value=D.mapSize,d.uniforms.radius.value=D.radius,i.setRenderTarget(D.mapPass),i.clear(),i.renderBufferDirect(U,null,J,d,v,null),m.uniforms.shadow_pass.value=D.mapPass.texture,m.uniforms.resolution.value=D.mapSize,m.uniforms.radius.value=D.radius,i.setRenderTarget(D.map),i.clear(),i.renderBufferDirect(U,null,J,m,v,null)}function y(D,U,J,E){let C=null,Z=J.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(Z!==void 0)C=Z;else if(C=J.isPointLight===!0?l:o,i.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){let se=C.uuid,N=U.uuid,_=c[se];_===void 0&&(_={},c[se]=_);let W=_[N];W===void 0&&(W=C.clone(),_[N]=W,U.addEventListener("dispose",z)),C=W}if(C.visible=U.visible,C.wireframe=U.wireframe,E===Pi?C.side=U.shadowSide!==null?U.shadowSide:U.side:C.side=U.shadowSide!==null?U.shadowSide:u[U.side],C.alphaMap=U.alphaMap,C.alphaTest=U.alphaTest,C.map=U.map,C.clipShadows=U.clipShadows,C.clippingPlanes=U.clippingPlanes,C.clipIntersection=U.clipIntersection,C.displacementMap=U.displacementMap,C.displacementScale=U.displacementScale,C.displacementBias=U.displacementBias,C.wireframeLinewidth=U.wireframeLinewidth,C.linewidth=U.linewidth,J.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let se=i.properties.get(C);se.light=J}return C}function T(D,U,J,E,C){if(D.visible===!1)return;if(D.layers.test(U.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&C===Pi)&&(!D.frustumCulled||n.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,D.matrixWorld);let N=e.update(D),_=D.material;if(Array.isArray(_)){let W=N.groups;for(let te=0,fe=W.length;te<fe;te++){let $=W[te],ce=_[$.materialIndex];if(ce&&ce.visible){let pe=y(D,ce,E,C);D.onBeforeShadow(i,D,U,J,N,pe,$),i.renderBufferDirect(J,null,N,pe,D,$),D.onAfterShadow(i,D,U,J,N,pe,$)}}}else if(_.visible){let W=y(D,_,E,C);D.onBeforeShadow(i,D,U,J,N,W,null),i.renderBufferDirect(J,null,N,W,D,null),D.onAfterShadow(i,D,U,J,N,W,null)}}let se=D.children;for(let N=0,_=se.length;N<_;N++)T(se[N],U,J,E,C)}function z(D){D.target.removeEventListener("dispose",z);for(let J in c){let E=c[J],C=D.target.uuid;C in E&&(E[C].dispose(),delete E[C])}}}function ox(i,e,t){let n=t.isWebGL2;function s(){let H=!1,Le=new sn,De=null,tt=new sn(0,0,0,0);return{setMask:function($e){De!==$e&&!H&&(i.colorMask($e,$e,$e,$e),De=$e)},setLocked:function($e){H=$e},setClear:function($e,zt,kt,rn,an){an===!0&&($e*=rn,zt*=rn,kt*=rn),Le.set($e,zt,kt,rn),tt.equals(Le)===!1&&(i.clearColor($e,zt,kt,rn),tt.copy(Le))},reset:function(){H=!1,De=null,tt.set(-1,0,0,0)}}}function r(){let H=!1,Le=null,De=null,tt=null;return{setTest:function($e){$e?lt(i.DEPTH_TEST):qe(i.DEPTH_TEST)},setMask:function($e){Le!==$e&&!H&&(i.depthMask($e),Le=$e)},setFunc:function($e){if(De!==$e){switch($e){case kf:i.depthFunc(i.NEVER);break;case Gf:i.depthFunc(i.ALWAYS);break;case Vf:i.depthFunc(i.LESS);break;case yo:i.depthFunc(i.LEQUAL);break;case Wf:i.depthFunc(i.EQUAL);break;case Xf:i.depthFunc(i.GEQUAL);break;case qf:i.depthFunc(i.GREATER);break;case Yf:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}De=$e}},setLocked:function($e){H=$e},setClear:function($e){tt!==$e&&(i.clearDepth($e),tt=$e)},reset:function(){H=!1,Le=null,De=null,tt=null}}}function a(){let H=!1,Le=null,De=null,tt=null,$e=null,zt=null,kt=null,rn=null,an=null;return{setTest:function(Ft){H||(Ft?lt(i.STENCIL_TEST):qe(i.STENCIL_TEST))},setMask:function(Ft){Le!==Ft&&!H&&(i.stencilMask(Ft),Le=Ft)},setFunc:function(Ft,fn,In){(De!==Ft||tt!==fn||$e!==In)&&(i.stencilFunc(Ft,fn,In),De=Ft,tt=fn,$e=In)},setOp:function(Ft,fn,In){(zt!==Ft||kt!==fn||rn!==In)&&(i.stencilOp(Ft,fn,In),zt=Ft,kt=fn,rn=In)},setLocked:function(Ft){H=Ft},setClear:function(Ft){an!==Ft&&(i.clearStencil(Ft),an=Ft)},reset:function(){H=!1,Le=null,De=null,tt=null,$e=null,zt=null,kt=null,rn=null,an=null}}}let o=new s,l=new r,c=new a,h=new WeakMap,u=new WeakMap,d={},m={},g=new WeakMap,v=[],p=null,f=!1,S=null,y=null,T=null,z=null,D=null,U=null,J=null,E=new je(0,0,0),C=0,Z=!1,se=null,N=null,_=null,W=null,te=null,fe=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),$=!1,ce=0,pe=i.getParameter(i.VERSION);pe.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(pe)[1]),$=ce>=1):pe.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(pe)[1]),$=ce>=2);let me=null,Pe={},ee=i.getParameter(i.SCISSOR_BOX),_e=i.getParameter(i.VIEWPORT),Ue=new sn().fromArray(ee),We=new sn().fromArray(_e);function Be(H,Le,De,tt){let $e=new Uint8Array(4),zt=i.createTexture();i.bindTexture(H,zt),i.texParameteri(H,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(H,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let kt=0;kt<De;kt++)n&&(H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY)?i.texImage3D(Le,0,i.RGBA,1,1,tt,0,i.RGBA,i.UNSIGNED_BYTE,$e):i.texImage2D(Le+kt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,$e);return zt}let rt={};rt[i.TEXTURE_2D]=Be(i.TEXTURE_2D,i.TEXTURE_2D,1),rt[i.TEXTURE_CUBE_MAP]=Be(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(rt[i.TEXTURE_2D_ARRAY]=Be(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),rt[i.TEXTURE_3D]=Be(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),lt(i.DEPTH_TEST),l.setFunc(yo),Ne(!1),w(kh),lt(i.CULL_FACE),ue(Ki);function lt(H){d[H]!==!0&&(i.enable(H),d[H]=!0)}function qe(H){d[H]!==!1&&(i.disable(H),d[H]=!1)}function ht(H,Le){return m[H]!==Le?(i.bindFramebuffer(H,Le),m[H]=Le,n&&(H===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=Le),H===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=Le)),!0):!1}function F(H,Le){let De=v,tt=!1;if(H)if(De=g.get(Le),De===void 0&&(De=[],g.set(Le,De)),H.isWebGLMultipleRenderTargets){let $e=H.texture;if(De.length!==$e.length||De[0]!==i.COLOR_ATTACHMENT0){for(let zt=0,kt=$e.length;zt<kt;zt++)De[zt]=i.COLOR_ATTACHMENT0+zt;De.length=$e.length,tt=!0}}else De[0]!==i.COLOR_ATTACHMENT0&&(De[0]=i.COLOR_ATTACHMENT0,tt=!0);else De[0]!==i.BACK&&(De[0]=i.BACK,tt=!0);tt&&(t.isWebGL2?i.drawBuffers(De):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(De))}function we(H){return p!==H?(i.useProgram(H),p=H,!0):!1}let le={[gs]:i.FUNC_ADD,[wf]:i.FUNC_SUBTRACT,[Af]:i.FUNC_REVERSE_SUBTRACT};if(n)le[Xh]=i.MIN,le[qh]=i.MAX;else{let H=e.get("EXT_blend_minmax");H!==null&&(le[Xh]=H.MIN_EXT,le[qh]=H.MAX_EXT)}let Ee={[Rf]:i.ZERO,[Cf]:i.ONE,[Pf]:i.SRC_COLOR,[fc]:i.SRC_ALPHA,[Of]:i.SRC_ALPHA_SATURATE,[Uf]:i.DST_COLOR,[Lf]:i.DST_ALPHA,[If]:i.ONE_MINUS_SRC_COLOR,[pc]:i.ONE_MINUS_SRC_ALPHA,[Nf]:i.ONE_MINUS_DST_COLOR,[Df]:i.ONE_MINUS_DST_ALPHA,[Ff]:i.CONSTANT_COLOR,[Bf]:i.ONE_MINUS_CONSTANT_COLOR,[zf]:i.CONSTANT_ALPHA,[Hf]:i.ONE_MINUS_CONSTANT_ALPHA};function ue(H,Le,De,tt,$e,zt,kt,rn,an,Ft){if(H===Ki){f===!0&&(qe(i.BLEND),f=!1);return}if(f===!1&&(lt(i.BLEND),f=!0),H!==Tf){if(H!==S||Ft!==Z){if((y!==gs||D!==gs)&&(i.blendEquation(i.FUNC_ADD),y=gs,D=gs),Ft)switch(H){case cr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Gh:i.blendFunc(i.ONE,i.ONE);break;case Vh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Wh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case cr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Gh:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Vh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Wh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}T=null,z=null,U=null,J=null,E.set(0,0,0),C=0,S=H,Z=Ft}return}$e=$e||Le,zt=zt||De,kt=kt||tt,(Le!==y||$e!==D)&&(i.blendEquationSeparate(le[Le],le[$e]),y=Le,D=$e),(De!==T||tt!==z||zt!==U||kt!==J)&&(i.blendFuncSeparate(Ee[De],Ee[tt],Ee[zt],Ee[kt]),T=De,z=tt,U=zt,J=kt),(rn.equals(E)===!1||an!==C)&&(i.blendColor(rn.r,rn.g,rn.b,an),E.copy(rn),C=an),S=H,Z=!1}function Qe(H,Le){H.side===wn?qe(i.CULL_FACE):lt(i.CULL_FACE);let De=H.side===Pn;Le&&(De=!De),Ne(De),H.blending===cr&&H.transparent===!1?ue(Ki):ue(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),l.setFunc(H.depthFunc),l.setTest(H.depthTest),l.setMask(H.depthWrite),o.setMask(H.colorWrite);let tt=H.stencilWrite;c.setTest(tt),tt&&(c.setMask(H.stencilWriteMask),c.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),c.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),q(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?lt(i.SAMPLE_ALPHA_TO_COVERAGE):qe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ne(H){se!==H&&(H?i.frontFace(i.CW):i.frontFace(i.CCW),se=H)}function w(H){H!==Sf?(lt(i.CULL_FACE),H!==N&&(H===kh?i.cullFace(i.BACK):H===bf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):qe(i.CULL_FACE),N=H}function M(H){H!==_&&($&&i.lineWidth(H),_=H)}function q(H,Le,De){H?(lt(i.POLYGON_OFFSET_FILL),(W!==Le||te!==De)&&(i.polygonOffset(Le,De),W=Le,te=De)):qe(i.POLYGON_OFFSET_FILL)}function ge(H){H?lt(i.SCISSOR_TEST):qe(i.SCISSOR_TEST)}function oe(H){H===void 0&&(H=i.TEXTURE0+fe-1),me!==H&&(i.activeTexture(H),me=H)}function I(H,Le,De){De===void 0&&(me===null?De=i.TEXTURE0+fe-1:De=me);let tt=Pe[De];tt===void 0&&(tt={type:void 0,texture:void 0},Pe[De]=tt),(tt.type!==H||tt.texture!==Le)&&(me!==De&&(i.activeTexture(De),me=De),i.bindTexture(H,Le||rt[H]),tt.type=H,tt.texture=Le)}function Fe(){let H=Pe[me];H!==void 0&&H.type!==void 0&&(i.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function Re(){try{i.compressedTexImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function A(){try{i.compressedTexImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function re(){try{i.texSubImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Xe(){try{i.texSubImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function xe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Dt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function xt(){try{i.texStorage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function st(){try{i.texStorage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function et(){try{i.texImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function He(){try{i.texImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function mt(H){Ue.equals(H)===!1&&(i.scissor(H.x,H.y,H.z,H.w),Ue.copy(H))}function Ot(H){We.equals(H)===!1&&(i.viewport(H.x,H.y,H.z,H.w),We.copy(H))}function Kt(H,Le){let De=u.get(Le);De===void 0&&(De=new WeakMap,u.set(Le,De));let tt=De.get(H);tt===void 0&&(tt=i.getUniformBlockIndex(Le,H.name),De.set(H,tt))}function yt(H,Le){let tt=u.get(Le).get(H);h.get(Le)!==tt&&(i.uniformBlockBinding(Le,tt,H.__bindingPointIndex),h.set(Le,tt))}function Ce(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},me=null,Pe={},m={},g=new WeakMap,v=[],p=null,f=!1,S=null,y=null,T=null,z=null,D=null,U=null,J=null,E=new je(0,0,0),C=0,Z=!1,se=null,N=null,_=null,W=null,te=null,Ue.set(0,0,i.canvas.width,i.canvas.height),We.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:lt,disable:qe,bindFramebuffer:ht,drawBuffers:F,useProgram:we,setBlending:ue,setMaterial:Qe,setFlipSided:Ne,setCullFace:w,setLineWidth:M,setPolygonOffset:q,setScissorTest:ge,activeTexture:oe,bindTexture:I,unbindTexture:Fe,compressedTexImage2D:Re,compressedTexImage3D:A,texImage2D:et,texImage3D:He,updateUBOMapping:Kt,uniformBlockBinding:yt,texStorage2D:xt,texStorage3D:st,texSubImage2D:re,texSubImage3D:Xe,compressedTexSubImage2D:xe,compressedTexSubImage3D:Dt,scissor:mt,viewport:Ot,reset:Ce}}function lx(i,e,t,n,s,r,a){let o=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,M){return m?new OffscreenCanvas(w,M):Kr("canvas")}function v(w,M,q,ge){let oe=1;if((w.width>ge||w.height>ge)&&(oe=ge/Math.max(w.width,w.height)),oe<1||M===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){let I=M?Mc:Math.floor,Fe=I(oe*w.width),Re=I(oe*w.height);u===void 0&&(u=g(Fe,Re));let A=q?g(Fe,Re):u;return A.width=Fe,A.height=Re,A.getContext("2d").drawImage(w,0,0,Fe,Re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+Fe+"x"+Re+")."),A}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function p(w){return bu(w.width)&&bu(w.height)}function f(w){return o?!1:w.wrapS!==_i||w.wrapT!==_i||w.minFilter!==Gn&&w.minFilter!==ai}function S(w,M){return w.generateMipmaps&&M&&w.minFilter!==Gn&&w.minFilter!==ai}function y(w){i.generateMipmap(w)}function T(w,M,q,ge,oe=!1){if(o===!1)return M;if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let I=M;if(M===i.RED&&(q===i.FLOAT&&(I=i.R32F),q===i.HALF_FLOAT&&(I=i.R16F),q===i.UNSIGNED_BYTE&&(I=i.R8)),M===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(I=i.R8UI),q===i.UNSIGNED_SHORT&&(I=i.R16UI),q===i.UNSIGNED_INT&&(I=i.R32UI),q===i.BYTE&&(I=i.R8I),q===i.SHORT&&(I=i.R16I),q===i.INT&&(I=i.R32I)),M===i.RG&&(q===i.FLOAT&&(I=i.RG32F),q===i.HALF_FLOAT&&(I=i.RG16F),q===i.UNSIGNED_BYTE&&(I=i.RG8)),M===i.RGBA){let Fe=oe?Eo:Wt.getTransfer(ge);q===i.FLOAT&&(I=i.RGBA32F),q===i.HALF_FLOAT&&(I=i.RGBA16F),q===i.UNSIGNED_BYTE&&(I=Fe===Qt?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT_4_4_4_4&&(I=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(I=i.RGB5_A1)}return(I===i.R16F||I===i.R32F||I===i.RG16F||I===i.RG32F||I===i.RGBA16F||I===i.RGBA32F)&&e.get("EXT_color_buffer_float"),I}function z(w,M,q){return S(w,q)===!0||w.isFramebufferTexture&&w.minFilter!==Gn&&w.minFilter!==ai?Math.log2(Math.max(M.width,M.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?M.mipmaps.length:1}function D(w){return w===Gn||w===Yh||w===Cl?i.NEAREST:i.LINEAR}function U(w){let M=w.target;M.removeEventListener("dispose",U),E(M),M.isVideoTexture&&h.delete(M)}function J(w){let M=w.target;M.removeEventListener("dispose",J),Z(M)}function E(w){let M=n.get(w);if(M.__webglInit===void 0)return;let q=w.source,ge=d.get(q);if(ge){let oe=ge[M.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&C(w),Object.keys(ge).length===0&&d.delete(q)}n.remove(w)}function C(w){let M=n.get(w);i.deleteTexture(M.__webglTexture);let q=w.source,ge=d.get(q);delete ge[M.__cacheKey],a.memory.textures--}function Z(w){let M=w.texture,q=n.get(w),ge=n.get(M);if(ge.__webglTexture!==void 0&&(i.deleteTexture(ge.__webglTexture),a.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(q.__webglFramebuffer[oe]))for(let I=0;I<q.__webglFramebuffer[oe].length;I++)i.deleteFramebuffer(q.__webglFramebuffer[oe][I]);else i.deleteFramebuffer(q.__webglFramebuffer[oe]);q.__webglDepthbuffer&&i.deleteRenderbuffer(q.__webglDepthbuffer[oe])}else{if(Array.isArray(q.__webglFramebuffer))for(let oe=0;oe<q.__webglFramebuffer.length;oe++)i.deleteFramebuffer(q.__webglFramebuffer[oe]);else i.deleteFramebuffer(q.__webglFramebuffer);if(q.__webglDepthbuffer&&i.deleteRenderbuffer(q.__webglDepthbuffer),q.__webglMultisampledFramebuffer&&i.deleteFramebuffer(q.__webglMultisampledFramebuffer),q.__webglColorRenderbuffer)for(let oe=0;oe<q.__webglColorRenderbuffer.length;oe++)q.__webglColorRenderbuffer[oe]&&i.deleteRenderbuffer(q.__webglColorRenderbuffer[oe]);q.__webglDepthRenderbuffer&&i.deleteRenderbuffer(q.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let oe=0,I=M.length;oe<I;oe++){let Fe=n.get(M[oe]);Fe.__webglTexture&&(i.deleteTexture(Fe.__webglTexture),a.memory.textures--),n.remove(M[oe])}n.remove(M),n.remove(w)}let se=0;function N(){se=0}function _(){let w=se;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),se+=1,w}function W(w){let M=[];return M.push(w.wrapS),M.push(w.wrapT),M.push(w.wrapR||0),M.push(w.magFilter),M.push(w.minFilter),M.push(w.anisotropy),M.push(w.internalFormat),M.push(w.format),M.push(w.type),M.push(w.generateMipmaps),M.push(w.premultiplyAlpha),M.push(w.flipY),M.push(w.unpackAlignment),M.push(w.colorSpace),M.join()}function te(w,M){let q=n.get(w);if(w.isVideoTexture&&Qe(w),w.isRenderTargetTexture===!1&&w.version>0&&q.__version!==w.version){let ge=w.image;if(ge===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ge.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ue(q,w,M);return}}t.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+M)}function fe(w,M){let q=n.get(w);if(w.version>0&&q.__version!==w.version){Ue(q,w,M);return}t.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+M)}function $(w,M){let q=n.get(w);if(w.version>0&&q.__version!==w.version){Ue(q,w,M);return}t.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+M)}function ce(w,M){let q=n.get(w);if(w.version>0&&q.__version!==w.version){We(q,w,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+M)}let pe={[Ms]:i.REPEAT,[_i]:i.CLAMP_TO_EDGE,[_c]:i.MIRRORED_REPEAT},me={[Gn]:i.NEAREST,[Yh]:i.NEAREST_MIPMAP_NEAREST,[Cl]:i.NEAREST_MIPMAP_LINEAR,[ai]:i.LINEAR,[tp]:i.LINEAR_MIPMAP_NEAREST,[Jr]:i.LINEAR_MIPMAP_LINEAR},Pe={[fp]:i.NEVER,[yp]:i.ALWAYS,[pp]:i.LESS,[zd]:i.LEQUAL,[mp]:i.EQUAL,[xp]:i.GEQUAL,[gp]:i.GREATER,[_p]:i.NOTEQUAL};function ee(w,M,q){if(q?(i.texParameteri(w,i.TEXTURE_WRAP_S,pe[M.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,pe[M.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,pe[M.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,me[M.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,me[M.minFilter])):(i.texParameteri(w,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(w,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(M.wrapS!==_i||M.wrapT!==_i)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(w,i.TEXTURE_MAG_FILTER,D(M.magFilter)),i.texParameteri(w,i.TEXTURE_MIN_FILTER,D(M.minFilter)),M.minFilter!==Gn&&M.minFilter!==ai&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,Pe[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let ge=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===Gn||M.minFilter!==Cl&&M.minFilter!==Jr||M.type===Ji&&e.has("OES_texture_float_linear")===!1||o===!1&&M.type===$r&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(i.texParameterf(w,ge.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function _e(w,M){let q=!1;w.__webglInit===void 0&&(w.__webglInit=!0,M.addEventListener("dispose",U));let ge=M.source,oe=d.get(ge);oe===void 0&&(oe={},d.set(ge,oe));let I=W(M);if(I!==w.__cacheKey){oe[I]===void 0&&(oe[I]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,q=!0),oe[I].usedTimes++;let Fe=oe[w.__cacheKey];Fe!==void 0&&(oe[w.__cacheKey].usedTimes--,Fe.usedTimes===0&&C(M)),w.__cacheKey=I,w.__webglTexture=oe[I].texture}return q}function Ue(w,M,q){let ge=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ge=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ge=i.TEXTURE_3D);let oe=_e(w,M),I=M.source;t.bindTexture(ge,w.__webglTexture,i.TEXTURE0+q);let Fe=n.get(I);if(I.version!==Fe.__version||oe===!0){t.activeTexture(i.TEXTURE0+q);let Re=Wt.getPrimaries(Wt.workingColorSpace),A=M.colorSpace===oi?null:Wt.getPrimaries(M.colorSpace),re=M.colorSpace===oi||Re===A?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);let Xe=f(M)&&p(M.image)===!1,xe=v(M.image,Xe,!1,s.maxTextureSize);xe=Ne(M,xe);let Dt=p(xe)||o,xt=r.convert(M.format,M.colorSpace),st=r.convert(M.type),et=T(M.internalFormat,xt,st,M.colorSpace,M.isVideoTexture);ee(ge,M,Dt);let He,mt=M.mipmaps,Ot=o&&M.isVideoTexture!==!0&&et!==Od,Kt=Fe.__version===void 0||oe===!0,yt=z(M,xe,Dt);if(M.isDepthTexture)et=i.DEPTH_COMPONENT,o?M.type===Ji?et=i.DEPTH_COMPONENT32F:M.type===Zi?et=i.DEPTH_COMPONENT24:M.type===xs?et=i.DEPTH24_STENCIL8:et=i.DEPTH_COMPONENT16:M.type===Ji&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===ys&&et===i.DEPTH_COMPONENT&&M.type!==lh&&M.type!==Zi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Zi,st=r.convert(M.type)),M.format===pr&&et===i.DEPTH_COMPONENT&&(et=i.DEPTH_STENCIL,M.type!==xs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=xs,st=r.convert(M.type))),Kt&&(Ot?t.texStorage2D(i.TEXTURE_2D,1,et,xe.width,xe.height):t.texImage2D(i.TEXTURE_2D,0,et,xe.width,xe.height,0,xt,st,null));else if(M.isDataTexture)if(mt.length>0&&Dt){Ot&&Kt&&t.texStorage2D(i.TEXTURE_2D,yt,et,mt[0].width,mt[0].height);for(let Ce=0,H=mt.length;Ce<H;Ce++)He=mt[Ce],Ot?t.texSubImage2D(i.TEXTURE_2D,Ce,0,0,He.width,He.height,xt,st,He.data):t.texImage2D(i.TEXTURE_2D,Ce,et,He.width,He.height,0,xt,st,He.data);M.generateMipmaps=!1}else Ot?(Kt&&t.texStorage2D(i.TEXTURE_2D,yt,et,xe.width,xe.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,xe.width,xe.height,xt,st,xe.data)):t.texImage2D(i.TEXTURE_2D,0,et,xe.width,xe.height,0,xt,st,xe.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ot&&Kt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,yt,et,mt[0].width,mt[0].height,xe.depth);for(let Ce=0,H=mt.length;Ce<H;Ce++)He=mt[Ce],M.format!==xi?xt!==null?Ot?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Ce,0,0,0,He.width,He.height,xe.depth,xt,He.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Ce,et,He.width,He.height,xe.depth,0,He.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ot?t.texSubImage3D(i.TEXTURE_2D_ARRAY,Ce,0,0,0,He.width,He.height,xe.depth,xt,st,He.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Ce,et,He.width,He.height,xe.depth,0,xt,st,He.data)}else{Ot&&Kt&&t.texStorage2D(i.TEXTURE_2D,yt,et,mt[0].width,mt[0].height);for(let Ce=0,H=mt.length;Ce<H;Ce++)He=mt[Ce],M.format!==xi?xt!==null?Ot?t.compressedTexSubImage2D(i.TEXTURE_2D,Ce,0,0,He.width,He.height,xt,He.data):t.compressedTexImage2D(i.TEXTURE_2D,Ce,et,He.width,He.height,0,He.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ot?t.texSubImage2D(i.TEXTURE_2D,Ce,0,0,He.width,He.height,xt,st,He.data):t.texImage2D(i.TEXTURE_2D,Ce,et,He.width,He.height,0,xt,st,He.data)}else if(M.isDataArrayTexture)Ot?(Kt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,yt,et,xe.width,xe.height,xe.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,xe.width,xe.height,xe.depth,xt,st,xe.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,et,xe.width,xe.height,xe.depth,0,xt,st,xe.data);else if(M.isData3DTexture)Ot?(Kt&&t.texStorage3D(i.TEXTURE_3D,yt,et,xe.width,xe.height,xe.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,xe.width,xe.height,xe.depth,xt,st,xe.data)):t.texImage3D(i.TEXTURE_3D,0,et,xe.width,xe.height,xe.depth,0,xt,st,xe.data);else if(M.isFramebufferTexture){if(Kt)if(Ot)t.texStorage2D(i.TEXTURE_2D,yt,et,xe.width,xe.height);else{let Ce=xe.width,H=xe.height;for(let Le=0;Le<yt;Le++)t.texImage2D(i.TEXTURE_2D,Le,et,Ce,H,0,xt,st,null),Ce>>=1,H>>=1}}else if(mt.length>0&&Dt){Ot&&Kt&&t.texStorage2D(i.TEXTURE_2D,yt,et,mt[0].width,mt[0].height);for(let Ce=0,H=mt.length;Ce<H;Ce++)He=mt[Ce],Ot?t.texSubImage2D(i.TEXTURE_2D,Ce,0,0,xt,st,He):t.texImage2D(i.TEXTURE_2D,Ce,et,xt,st,He);M.generateMipmaps=!1}else Ot?(Kt&&t.texStorage2D(i.TEXTURE_2D,yt,et,xe.width,xe.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,xt,st,xe)):t.texImage2D(i.TEXTURE_2D,0,et,xt,st,xe);S(M,Dt)&&y(ge),Fe.__version=I.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function We(w,M,q){if(M.image.length!==6)return;let ge=_e(w,M),oe=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+q);let I=n.get(oe);if(oe.version!==I.__version||ge===!0){t.activeTexture(i.TEXTURE0+q);let Fe=Wt.getPrimaries(Wt.workingColorSpace),Re=M.colorSpace===oi?null:Wt.getPrimaries(M.colorSpace),A=M.colorSpace===oi||Fe===Re?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,A);let re=M.isCompressedTexture||M.image[0].isCompressedTexture,Xe=M.image[0]&&M.image[0].isDataTexture,xe=[];for(let Ce=0;Ce<6;Ce++)!re&&!Xe?xe[Ce]=v(M.image[Ce],!1,!0,s.maxCubemapSize):xe[Ce]=Xe?M.image[Ce].image:M.image[Ce],xe[Ce]=Ne(M,xe[Ce]);let Dt=xe[0],xt=p(Dt)||o,st=r.convert(M.format,M.colorSpace),et=r.convert(M.type),He=T(M.internalFormat,st,et,M.colorSpace),mt=o&&M.isVideoTexture!==!0,Ot=I.__version===void 0||ge===!0,Kt=z(M,Dt,xt);ee(i.TEXTURE_CUBE_MAP,M,xt);let yt;if(re){mt&&Ot&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Kt,He,Dt.width,Dt.height);for(let Ce=0;Ce<6;Ce++){yt=xe[Ce].mipmaps;for(let H=0;H<yt.length;H++){let Le=yt[H];M.format!==xi?st!==null?mt?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,H,0,0,Le.width,Le.height,st,Le.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,H,He,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):mt?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,H,0,0,Le.width,Le.height,st,et,Le.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,H,He,Le.width,Le.height,0,st,et,Le.data)}}}else{yt=M.mipmaps,mt&&Ot&&(yt.length>0&&Kt++,t.texStorage2D(i.TEXTURE_CUBE_MAP,Kt,He,xe[0].width,xe[0].height));for(let Ce=0;Ce<6;Ce++)if(Xe){mt?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,0,0,xe[Ce].width,xe[Ce].height,st,et,xe[Ce].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,He,xe[Ce].width,xe[Ce].height,0,st,et,xe[Ce].data);for(let H=0;H<yt.length;H++){let De=yt[H].image[Ce].image;mt?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,H+1,0,0,De.width,De.height,st,et,De.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,H+1,He,De.width,De.height,0,st,et,De.data)}}else{mt?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,0,0,st,et,xe[Ce]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,He,st,et,xe[Ce]);for(let H=0;H<yt.length;H++){let Le=yt[H];mt?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,H+1,0,0,st,et,Le.image[Ce]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,H+1,He,st,et,Le.image[Ce])}}}S(M,xt)&&y(i.TEXTURE_CUBE_MAP),I.__version=oe.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function Be(w,M,q,ge,oe,I){let Fe=r.convert(q.format,q.colorSpace),Re=r.convert(q.type),A=T(q.internalFormat,Fe,Re,q.colorSpace);if(!n.get(M).__hasExternalTextures){let Xe=Math.max(1,M.width>>I),xe=Math.max(1,M.height>>I);oe===i.TEXTURE_3D||oe===i.TEXTURE_2D_ARRAY?t.texImage3D(oe,I,A,Xe,xe,M.depth,0,Fe,Re,null):t.texImage2D(oe,I,A,Xe,xe,0,Fe,Re,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),ue(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ge,oe,n.get(q).__webglTexture,0,Ee(M)):(oe===i.TEXTURE_2D||oe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ge,oe,n.get(q).__webglTexture,I),t.bindFramebuffer(i.FRAMEBUFFER,null)}function rt(w,M,q){if(i.bindRenderbuffer(i.RENDERBUFFER,w),M.depthBuffer&&!M.stencilBuffer){let ge=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(q||ue(M)){let oe=M.depthTexture;oe&&oe.isDepthTexture&&(oe.type===Ji?ge=i.DEPTH_COMPONENT32F:oe.type===Zi&&(ge=i.DEPTH_COMPONENT24));let I=Ee(M);ue(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,I,ge,M.width,M.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,I,ge,M.width,M.height)}else i.renderbufferStorage(i.RENDERBUFFER,ge,M.width,M.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,w)}else if(M.depthBuffer&&M.stencilBuffer){let ge=Ee(M);q&&ue(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ge,i.DEPTH24_STENCIL8,M.width,M.height):ue(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ge,i.DEPTH24_STENCIL8,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,w)}else{let ge=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let oe=0;oe<ge.length;oe++){let I=ge[oe],Fe=r.convert(I.format,I.colorSpace),Re=r.convert(I.type),A=T(I.internalFormat,Fe,Re,I.colorSpace),re=Ee(M);q&&ue(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,re,A,M.width,M.height):ue(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,re,A,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,A,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function lt(w,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),te(M.depthTexture,0);let ge=n.get(M.depthTexture).__webglTexture,oe=Ee(M);if(M.depthTexture.format===ys)ue(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ge,0,oe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ge,0);else if(M.depthTexture.format===pr)ue(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ge,0,oe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ge,0);else throw new Error("Unknown depthTexture format")}function qe(w){let M=n.get(w),q=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!M.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");lt(M.__webglFramebuffer,w)}else if(q){M.__webglDepthbuffer=[];for(let ge=0;ge<6;ge++)t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[ge]),M.__webglDepthbuffer[ge]=i.createRenderbuffer(),rt(M.__webglDepthbuffer[ge],w,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=i.createRenderbuffer(),rt(M.__webglDepthbuffer,w,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function ht(w,M,q){let ge=n.get(w);M!==void 0&&Be(ge.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&qe(w)}function F(w){let M=w.texture,q=n.get(w),ge=n.get(M);w.addEventListener("dispose",J),w.isWebGLMultipleRenderTargets!==!0&&(ge.__webglTexture===void 0&&(ge.__webglTexture=i.createTexture()),ge.__version=M.version,a.memory.textures++);let oe=w.isWebGLCubeRenderTarget===!0,I=w.isWebGLMultipleRenderTargets===!0,Fe=p(w)||o;if(oe){q.__webglFramebuffer=[];for(let Re=0;Re<6;Re++)if(o&&M.mipmaps&&M.mipmaps.length>0){q.__webglFramebuffer[Re]=[];for(let A=0;A<M.mipmaps.length;A++)q.__webglFramebuffer[Re][A]=i.createFramebuffer()}else q.__webglFramebuffer[Re]=i.createFramebuffer()}else{if(o&&M.mipmaps&&M.mipmaps.length>0){q.__webglFramebuffer=[];for(let Re=0;Re<M.mipmaps.length;Re++)q.__webglFramebuffer[Re]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(I)if(s.drawBuffers){let Re=w.texture;for(let A=0,re=Re.length;A<re;A++){let Xe=n.get(Re[A]);Xe.__webglTexture===void 0&&(Xe.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&w.samples>0&&ue(w)===!1){let Re=I?M:[M];q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let A=0;A<Re.length;A++){let re=Re[A];q.__webglColorRenderbuffer[A]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[A]);let Xe=r.convert(re.format,re.colorSpace),xe=r.convert(re.type),Dt=T(re.internalFormat,Xe,xe,re.colorSpace,w.isXRRenderTarget===!0),xt=Ee(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,xt,Dt,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+A,i.RENDERBUFFER,q.__webglColorRenderbuffer[A])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),rt(q.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(oe){t.bindTexture(i.TEXTURE_CUBE_MAP,ge.__webglTexture),ee(i.TEXTURE_CUBE_MAP,M,Fe);for(let Re=0;Re<6;Re++)if(o&&M.mipmaps&&M.mipmaps.length>0)for(let A=0;A<M.mipmaps.length;A++)Be(q.__webglFramebuffer[Re][A],w,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,A);else Be(q.__webglFramebuffer[Re],w,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0);S(M,Fe)&&y(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(I){let Re=w.texture;for(let A=0,re=Re.length;A<re;A++){let Xe=Re[A],xe=n.get(Xe);t.bindTexture(i.TEXTURE_2D,xe.__webglTexture),ee(i.TEXTURE_2D,Xe,Fe),Be(q.__webglFramebuffer,w,Xe,i.COLOR_ATTACHMENT0+A,i.TEXTURE_2D,0),S(Xe,Fe)&&y(i.TEXTURE_2D)}t.unbindTexture()}else{let Re=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(o?Re=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Re,ge.__webglTexture),ee(Re,M,Fe),o&&M.mipmaps&&M.mipmaps.length>0)for(let A=0;A<M.mipmaps.length;A++)Be(q.__webglFramebuffer[A],w,M,i.COLOR_ATTACHMENT0,Re,A);else Be(q.__webglFramebuffer,w,M,i.COLOR_ATTACHMENT0,Re,0);S(M,Fe)&&y(Re),t.unbindTexture()}w.depthBuffer&&qe(w)}function we(w){let M=p(w)||o,q=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let ge=0,oe=q.length;ge<oe;ge++){let I=q[ge];if(S(I,M)){let Fe=w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Re=n.get(I).__webglTexture;t.bindTexture(Fe,Re),y(Fe),t.unbindTexture()}}}function le(w){if(o&&w.samples>0&&ue(w)===!1){let M=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],q=w.width,ge=w.height,oe=i.COLOR_BUFFER_BIT,I=[],Fe=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Re=n.get(w),A=w.isWebGLMultipleRenderTargets===!0;if(A)for(let re=0;re<M.length;re++)t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let re=0;re<M.length;re++){I.push(i.COLOR_ATTACHMENT0+re),w.depthBuffer&&I.push(Fe);let Xe=Re.__ignoreDepthValues!==void 0?Re.__ignoreDepthValues:!1;if(Xe===!1&&(w.depthBuffer&&(oe|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&(oe|=i.STENCIL_BUFFER_BIT)),A&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Re.__webglColorRenderbuffer[re]),Xe===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Fe]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Fe])),A){let xe=n.get(M[re]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,xe,0)}i.blitFramebuffer(0,0,q,ge,0,0,q,ge,oe,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,I)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),A)for(let re=0;re<M.length;re++){t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.RENDERBUFFER,Re.__webglColorRenderbuffer[re]);let Xe=n.get(M[re]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.TEXTURE_2D,Xe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}}function Ee(w){return Math.min(s.maxSamples,w.samples)}function ue(w){let M=n.get(w);return o&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Qe(w){let M=a.render.frame;h.get(w)!==M&&(h.set(w,M),w.update())}function Ne(w,M){let q=w.colorSpace,ge=w.format,oe=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===yc||q!==Ui&&q!==oi&&(Wt.getTransfer(q)===Qt?o===!1?e.has("EXT_sRGB")===!0&&ge===xi?(w.format=yc,w.minFilter=ai,w.generateMipmaps=!1):M=wo.sRGBToLinear(M):(ge!==xi||oe!==Qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),M}this.allocateTextureUnit=_,this.resetTextureUnits=N,this.setTexture2D=te,this.setTexture2DArray=fe,this.setTexture3D=$,this.setTextureCube=ce,this.rebindTextures=ht,this.setupRenderTarget=F,this.updateRenderTargetMipmap=we,this.updateMultisampleRenderTarget=le,this.setupDepthRenderbuffer=qe,this.setupFrameBufferTexture=Be,this.useMultisampledRTT=ue}function cx(i,e,t){let n=t.isWebGL2;function s(r,a=oi){let o,l=Wt.getTransfer(a);if(r===Qi)return i.UNSIGNED_BYTE;if(r===Id)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Ld)return i.UNSIGNED_SHORT_5_5_5_1;if(r===np)return i.BYTE;if(r===ip)return i.SHORT;if(r===lh)return i.UNSIGNED_SHORT;if(r===Pd)return i.INT;if(r===Zi)return i.UNSIGNED_INT;if(r===Ji)return i.FLOAT;if(r===$r)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===sp)return i.ALPHA;if(r===xi)return i.RGBA;if(r===rp)return i.LUMINANCE;if(r===ap)return i.LUMINANCE_ALPHA;if(r===ys)return i.DEPTH_COMPONENT;if(r===pr)return i.DEPTH_STENCIL;if(r===yc)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===op)return i.RED;if(r===Dd)return i.RED_INTEGER;if(r===lp)return i.RG;if(r===Ud)return i.RG_INTEGER;if(r===Nd)return i.RGBA_INTEGER;if(r===Pl||r===Il||r===Ll||r===Dl)if(l===Qt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Pl)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Il)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ll)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Dl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Pl)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Il)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ll)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Dl)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Zh||r===Jh||r===$h||r===Kh)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Zh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Jh)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===$h)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Kh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Od)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===jh||r===Qh)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===jh)return l===Qt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Qh)return l===Qt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===eu||r===tu||r===nu||r===iu||r===su||r===ru||r===au||r===ou||r===lu||r===cu||r===hu||r===uu||r===du||r===fu)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===eu)return l===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===tu)return l===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===nu)return l===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===iu)return l===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===su)return l===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ru)return l===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===au)return l===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ou)return l===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===lu)return l===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===cu)return l===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===hu)return l===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===uu)return l===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===du)return l===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===fu)return l===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ul||r===pu||r===mu)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===Ul)return l===Qt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===pu)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===mu)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===cp||r===gu||r===_u||r===xu)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===Ul)return o.COMPRESSED_RED_RGTC1_EXT;if(r===gu)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===_u)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===xu)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===xs?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var Uc=class extends Nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},ke=class extends ln{constructor(){super(),this.isGroup=!0,this.type="Group"}},hx={type:"move"},qr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ke,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ke,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ke,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let v of e.hand.values()){let p=t.getJointPose(v,n),f=this._getHandJoint(c,v);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,g=.005;c.inputState.pinching&&d>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(hx)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ke;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Nc=class extends ns{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,m=null,g=null,v=t.getContextAttributes(),p=null,f=null,S=[],y=[],T=new Me,z=null,D=new Nn;D.layers.enable(1),D.viewport=new sn;let U=new Nn;U.layers.enable(2),U.viewport=new sn;let J=[D,U],E=new Uc;E.layers.enable(1),E.layers.enable(2);let C=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let _e=S[ee];return _e===void 0&&(_e=new qr,S[ee]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(ee){let _e=S[ee];return _e===void 0&&(_e=new qr,S[ee]=_e),_e.getGripSpace()},this.getHand=function(ee){let _e=S[ee];return _e===void 0&&(_e=new qr,S[ee]=_e),_e.getHandSpace()};function se(ee){let _e=y.indexOf(ee.inputSource);if(_e===-1)return;let Ue=S[_e];Ue!==void 0&&(Ue.update(ee.inputSource,ee.frame,c||a),Ue.dispatchEvent({type:ee.type,data:ee.inputSource}))}function N(){s.removeEventListener("select",se),s.removeEventListener("selectstart",se),s.removeEventListener("selectend",se),s.removeEventListener("squeeze",se),s.removeEventListener("squeezestart",se),s.removeEventListener("squeezeend",se),s.removeEventListener("end",N),s.removeEventListener("inputsourceschange",_);for(let ee=0;ee<S.length;ee++){let _e=y[ee];_e!==null&&(y[ee]=null,S[ee].disconnect(_e))}C=null,Z=null,e.setRenderTarget(p),m=null,d=null,u=null,s=null,f=null,Pe.stop(),n.isPresenting=!1,e.setPixelRatio(z),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){r=ee,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){o=ee,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ee){c=ee},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(ee){if(s=ee,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",se),s.addEventListener("selectstart",se),s.addEventListener("selectend",se),s.addEventListener("squeeze",se),s.addEventListener("squeezestart",se),s.addEventListener("squeezeend",se),s.addEventListener("end",N),s.addEventListener("inputsourceschange",_),v.xrCompatible!==!0&&await t.makeXRCompatible(),z=e.getPixelRatio(),e.getSize(T),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let _e={antialias:s.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,_e),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),f=new Ni(m.framebufferWidth,m.framebufferHeight,{format:xi,type:Qi,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let _e=null,Ue=null,We=null;v.depth&&(We=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=v.stencil?pr:ys,Ue=v.stencil?xs:Zi);let Be={colorFormat:t.RGBA8,depthFormat:We,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(Be),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),f=new Ni(d.textureWidth,d.textureHeight,{format:xi,type:Qi,depthTexture:new Oo(d.textureWidth,d.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});let rt=e.properties.get(f);rt.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Pe.setContext(s),Pe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function _(ee){for(let _e=0;_e<ee.removed.length;_e++){let Ue=ee.removed[_e],We=y.indexOf(Ue);We>=0&&(y[We]=null,S[We].disconnect(Ue))}for(let _e=0;_e<ee.added.length;_e++){let Ue=ee.added[_e],We=y.indexOf(Ue);if(We===-1){for(let rt=0;rt<S.length;rt++)if(rt>=y.length){y.push(Ue),We=rt;break}else if(y[rt]===null){y[rt]=Ue,We=rt;break}if(We===-1)break}let Be=S[We];Be&&Be.connect(Ue)}}let W=new L,te=new L;function fe(ee,_e,Ue){W.setFromMatrixPosition(_e.matrixWorld),te.setFromMatrixPosition(Ue.matrixWorld);let We=W.distanceTo(te),Be=_e.projectionMatrix.elements,rt=Ue.projectionMatrix.elements,lt=Be[14]/(Be[10]-1),qe=Be[14]/(Be[10]+1),ht=(Be[9]+1)/Be[5],F=(Be[9]-1)/Be[5],we=(Be[8]-1)/Be[0],le=(rt[8]+1)/rt[0],Ee=lt*we,ue=lt*le,Qe=We/(-we+le),Ne=Qe*-we;_e.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(Ne),ee.translateZ(Qe),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert();let w=lt+Qe,M=qe+Qe,q=Ee-Ne,ge=ue+(We-Ne),oe=ht*qe/M*w,I=F*qe/M*w;ee.projectionMatrix.makePerspective(q,ge,oe,I,w,M),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}function $(ee,_e){_e===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(_e.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(s===null)return;E.near=U.near=D.near=ee.near,E.far=U.far=D.far=ee.far,(C!==E.near||Z!==E.far)&&(s.updateRenderState({depthNear:E.near,depthFar:E.far}),C=E.near,Z=E.far);let _e=ee.parent,Ue=E.cameras;$(E,_e);for(let We=0;We<Ue.length;We++)$(Ue[We],_e);Ue.length===2?fe(E,D,U):E.projectionMatrix.copy(D.projectionMatrix),ce(ee,E,_e)};function ce(ee,_e,Ue){Ue===null?ee.matrix.copy(_e.matrixWorld):(ee.matrix.copy(Ue.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(_e.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(_e.projectionMatrix),ee.projectionMatrixInverse.copy(_e.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=vc*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(ee){l=ee,d!==null&&(d.fixedFoveation=ee),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=ee)};let pe=null;function me(ee,_e){if(h=_e.getViewerPose(c||a),g=_e,h!==null){let Ue=h.views;m!==null&&(e.setRenderTargetFramebuffer(f,m.framebuffer),e.setRenderTarget(f));let We=!1;Ue.length!==E.cameras.length&&(E.cameras.length=0,We=!0);for(let Be=0;Be<Ue.length;Be++){let rt=Ue[Be],lt=null;if(m!==null)lt=m.getViewport(rt);else{let ht=u.getViewSubImage(d,rt);lt=ht.viewport,Be===0&&(e.setRenderTargetTextures(f,ht.colorTexture,d.ignoreDepthValues?void 0:ht.depthStencilTexture),e.setRenderTarget(f))}let qe=J[Be];qe===void 0&&(qe=new Nn,qe.layers.enable(Be),qe.viewport=new sn,J[Be]=qe),qe.matrix.fromArray(rt.transform.matrix),qe.matrix.decompose(qe.position,qe.quaternion,qe.scale),qe.projectionMatrix.fromArray(rt.projectionMatrix),qe.projectionMatrixInverse.copy(qe.projectionMatrix).invert(),qe.viewport.set(lt.x,lt.y,lt.width,lt.height),Be===0&&(E.matrix.copy(qe.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),We===!0&&E.cameras.push(qe)}}for(let Ue=0;Ue<S.length;Ue++){let We=y[Ue],Be=S[Ue];We!==null&&Be!==void 0&&Be.update(We,_e,c||a)}pe&&pe(ee,_e),_e.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:_e}),g=null}let Pe=new Vd;Pe.setAnimationLoop(me),this.setAnimationLoop=function(ee){pe=ee},this.dispose=function(){}}};function ux(i,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,Gd(i)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function s(p,f,S,y,T){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(p,f):f.isMeshToonMaterial?(r(p,f),u(p,f)):f.isMeshPhongMaterial?(r(p,f),h(p,f)):f.isMeshStandardMaterial?(r(p,f),d(p,f),f.isMeshPhysicalMaterial&&m(p,f,T)):f.isMeshMatcapMaterial?(r(p,f),g(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),v(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?l(p,f,S,y):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Pn&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Pn&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let S=e.get(f).envMap;if(S&&(p.envMap.value=S,p.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;let y=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*y,t(f.lightMap,p.lightMapTransform)}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,S,y){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*S,p.scale.value=y*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function h(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function u(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),e.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,S){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Pn&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function v(p,f){let S=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function dx(i,e,t,n){let s={},r={},a=[],o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(S,y){let T=y.program;n.uniformBlockBinding(S,T)}function c(S,y){let T=s[S.id];T===void 0&&(g(S),T=h(S),s[S.id]=T,S.addEventListener("dispose",p));let z=y.program;n.updateUBOMapping(S,z);let D=e.render.frame;r[S.id]!==D&&(d(S),r[S.id]=D)}function h(S){let y=u();S.__bindingPointIndex=y;let T=i.createBuffer(),z=S.__size,D=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,z,D),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,T),T}function u(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){let y=s[S.id],T=S.uniforms,z=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let D=0,U=T.length;D<U;D++){let J=Array.isArray(T[D])?T[D]:[T[D]];for(let E=0,C=J.length;E<C;E++){let Z=J[E];if(m(Z,D,E,z)===!0){let se=Z.__offset,N=Array.isArray(Z.value)?Z.value:[Z.value],_=0;for(let W=0;W<N.length;W++){let te=N[W],fe=v(te);typeof te=="number"||typeof te=="boolean"?(Z.__data[0]=te,i.bufferSubData(i.UNIFORM_BUFFER,se+_,Z.__data)):te.isMatrix3?(Z.__data[0]=te.elements[0],Z.__data[1]=te.elements[1],Z.__data[2]=te.elements[2],Z.__data[3]=0,Z.__data[4]=te.elements[3],Z.__data[5]=te.elements[4],Z.__data[6]=te.elements[5],Z.__data[7]=0,Z.__data[8]=te.elements[6],Z.__data[9]=te.elements[7],Z.__data[10]=te.elements[8],Z.__data[11]=0):(te.toArray(Z.__data,_),_+=fe.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,se,Z.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(S,y,T,z){let D=S.value,U=y+"_"+T;if(z[U]===void 0)return typeof D=="number"||typeof D=="boolean"?z[U]=D:z[U]=D.clone(),!0;{let J=z[U];if(typeof D=="number"||typeof D=="boolean"){if(J!==D)return z[U]=D,!0}else if(J.equals(D)===!1)return J.copy(D),!0}return!1}function g(S){let y=S.uniforms,T=0,z=16;for(let U=0,J=y.length;U<J;U++){let E=Array.isArray(y[U])?y[U]:[y[U]];for(let C=0,Z=E.length;C<Z;C++){let se=E[C],N=Array.isArray(se.value)?se.value:[se.value];for(let _=0,W=N.length;_<W;_++){let te=N[_],fe=v(te),$=T%z;$!==0&&z-$<fe.boundary&&(T+=z-$),se.__data=new Float32Array(fe.storage/Float32Array.BYTES_PER_ELEMENT),se.__offset=T,T+=fe.storage}}}let D=T%z;return D>0&&(T+=z-D),S.__size=T,S.__cache={},this}function v(S){let y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),y}function p(S){let y=S.target;y.removeEventListener("dispose",p);let T=a.indexOf(y.__bindingPointIndex);a.splice(T,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function f(){for(let S in s)i.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:l,update:c,dispose:f}}var ea=class{constructor(e={}){let{canvas:t=Mp(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;let m=new Uint32Array(4),g=new Int32Array(4),v=null,p=null,f=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=dn,this._useLegacyLights=!1,this.toneMapping=ji,this.toneMappingExposure=1;let y=this,T=!1,z=0,D=0,U=null,J=-1,E=null,C=new sn,Z=new sn,se=null,N=new je(0),_=0,W=t.width,te=t.height,fe=1,$=null,ce=null,pe=new sn(0,0,W,te),me=new sn(0,0,W,te),Pe=!1,ee=new Qr,_e=!1,Ue=!1,We=null,Be=new Jt,rt=new Me,lt=new L,qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ht(){return U===null?fe:1}let F=n;function we(R,V){for(let Q=0;Q<R.length;Q++){let K=R[Q],k=t.getContext(K,V);if(k!==null)return k}return null}try{let R={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",Ce,!1),t.addEventListener("webglcontextrestored",H,!1),t.addEventListener("webglcontextcreationerror",Le,!1),F===null){let V=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&V.shift(),F=we(V,R),F===null)throw we(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&F instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let le,Ee,ue,Qe,Ne,w,M,q,ge,oe,I,Fe,Re,A,re,Xe,xe,Dt,xt,st,et,He,mt,Ot;function Kt(){le=new Ig(F),Ee=new Tg(F,le,e),le.init(Ee),He=new cx(F,le,Ee),ue=new ox(F,le,Ee),Qe=new Ug(F),Ne=new J_,w=new lx(F,le,ue,Ne,Ee,He,Qe),M=new Ag(y),q=new Pg(y),ge=new Gp(F,Ee),mt=new Sg(F,le,ge,Ee),oe=new Lg(F,ge,Qe,mt),I=new Bg(F,oe,ge,Qe),xt=new Fg(F,Ee,w),Xe=new wg(Ne),Fe=new Z_(y,M,q,le,Ee,mt,Xe),Re=new ux(y,Ne),A=new K_,re=new ix(le,Ee),Dt=new Eg(y,M,q,ue,I,d,l),xe=new ax(y,I,Ee),Ot=new dx(F,Qe,Ee,ue),st=new bg(F,le,Qe,Ee),et=new Dg(F,le,Qe,Ee),Qe.programs=Fe.programs,y.capabilities=Ee,y.extensions=le,y.properties=Ne,y.renderLists=A,y.shadowMap=xe,y.state=ue,y.info=Qe}Kt();let yt=new Nc(y,F);this.xr=yt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let R=le.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=le.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return fe},this.setPixelRatio=function(R){R!==void 0&&(fe=R,this.setSize(W,te,!1))},this.getSize=function(R){return R.set(W,te)},this.setSize=function(R,V,Q=!0){if(yt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=R,te=V,t.width=Math.floor(R*fe),t.height=Math.floor(V*fe),Q===!0&&(t.style.width=R+"px",t.style.height=V+"px"),this.setViewport(0,0,R,V)},this.getDrawingBufferSize=function(R){return R.set(W*fe,te*fe).floor()},this.setDrawingBufferSize=function(R,V,Q){W=R,te=V,fe=Q,t.width=Math.floor(R*Q),t.height=Math.floor(V*Q),this.setViewport(0,0,R,V)},this.getCurrentViewport=function(R){return R.copy(C)},this.getViewport=function(R){return R.copy(pe)},this.setViewport=function(R,V,Q,K){R.isVector4?pe.set(R.x,R.y,R.z,R.w):pe.set(R,V,Q,K),ue.viewport(C.copy(pe).multiplyScalar(fe).floor())},this.getScissor=function(R){return R.copy(me)},this.setScissor=function(R,V,Q,K){R.isVector4?me.set(R.x,R.y,R.z,R.w):me.set(R,V,Q,K),ue.scissor(Z.copy(me).multiplyScalar(fe).floor())},this.getScissorTest=function(){return Pe},this.setScissorTest=function(R){ue.setScissorTest(Pe=R)},this.setOpaqueSort=function(R){$=R},this.setTransparentSort=function(R){ce=R},this.getClearColor=function(R){return R.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor.apply(Dt,arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha.apply(Dt,arguments)},this.clear=function(R=!0,V=!0,Q=!0){let K=0;if(R){let k=!1;if(U!==null){let Oe=U.texture.format;k=Oe===Nd||Oe===Ud||Oe===Dd}if(k){let Oe=U.texture.type,Ye=Oe===Qi||Oe===Zi||Oe===lh||Oe===xs||Oe===Id||Oe===Ld,nt=Dt.getClearColor(),it=Dt.getClearAlpha(),gt=nt.r,ut=nt.g,ft=nt.b;Ye?(m[0]=gt,m[1]=ut,m[2]=ft,m[3]=it,F.clearBufferuiv(F.COLOR,0,m)):(g[0]=gt,g[1]=ut,g[2]=ft,g[3]=it,F.clearBufferiv(F.COLOR,0,g))}else K|=F.COLOR_BUFFER_BIT}V&&(K|=F.DEPTH_BUFFER_BIT),Q&&(K|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ce,!1),t.removeEventListener("webglcontextrestored",H,!1),t.removeEventListener("webglcontextcreationerror",Le,!1),A.dispose(),re.dispose(),Ne.dispose(),M.dispose(),q.dispose(),I.dispose(),mt.dispose(),Ot.dispose(),Fe.dispose(),yt.dispose(),yt.removeEventListener("sessionstart",an),yt.removeEventListener("sessionend",Ft),We&&(We.dispose(),We=null),fn.stop()};function Ce(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function H(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let R=Qe.autoReset,V=xe.enabled,Q=xe.autoUpdate,K=xe.needsUpdate,k=xe.type;Kt(),Qe.autoReset=R,xe.enabled=V,xe.autoUpdate=Q,xe.needsUpdate=K,xe.type=k}function Le(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function De(R){let V=R.target;V.removeEventListener("dispose",De),tt(V)}function tt(R){$e(R),Ne.remove(R)}function $e(R){let V=Ne.get(R).programs;V!==void 0&&(V.forEach(function(Q){Fe.releaseProgram(Q)}),R.isShaderMaterial&&Fe.releaseShaderCache(R))}this.renderBufferDirect=function(R,V,Q,K,k,Oe){V===null&&(V=qe);let Ye=k.isMesh&&k.matrixWorld.determinant()<0,nt=xa(R,V,Q,K,k);ue.setMaterial(K,Ye);let it=Q.index,gt=1;if(K.wireframe===!0){if(it=oe.getWireframeAttribute(Q),it===void 0)return;gt=2}let ut=Q.drawRange,ft=Q.attributes.position,tn=ut.start*gt,Rn=(ut.start+ut.count)*gt;Oe!==null&&(tn=Math.max(tn,Oe.start*gt),Rn=Math.min(Rn,(Oe.start+Oe.count)*gt)),it!==null?(tn=Math.max(tn,0),Rn=Math.min(Rn,it.count)):ft!=null&&(tn=Math.max(tn,0),Rn=Math.min(Rn,ft.count));let At=Rn-tn;if(At<0||At===1/0)return;mt.setup(k,K,nt,Q,it);let mn,Gt=st;if(it!==null&&(mn=ge.get(it),Gt=et,Gt.setIndex(mn)),k.isMesh)K.wireframe===!0?(ue.setLineWidth(K.wireframeLinewidth*ht()),Gt.setMode(F.LINES)):Gt.setMode(F.TRIANGLES);else if(k.isLine){let pt=K.linewidth;pt===void 0&&(pt=1),ue.setLineWidth(pt*ht()),k.isLineSegments?Gt.setMode(F.LINES):k.isLineLoop?Gt.setMode(F.LINE_LOOP):Gt.setMode(F.LINE_STRIP)}else k.isPoints?Gt.setMode(F.POINTS):k.isSprite&&Gt.setMode(F.TRIANGLES);if(k.isBatchedMesh)Gt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else if(k.isInstancedMesh)Gt.renderInstances(tn,At,k.count);else if(Q.isInstancedBufferGeometry){let pt=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Wn=Math.min(Q.instanceCount,pt);Gt.renderInstances(tn,At,Wn)}else Gt.render(tn,At)};function zt(R,V,Q){R.transparent===!0&&R.side===wn&&R.forceSinglePass===!1?(R.side=Pn,R.needsUpdate=!0,bi(R,V,Q),R.side=ts,R.needsUpdate=!0,bi(R,V,Q),R.side=wn):bi(R,V,Q)}this.compile=function(R,V,Q=null){Q===null&&(Q=R),p=re.get(Q),p.init(),S.push(p),Q.traverseVisible(function(k){k.isLight&&k.layers.test(V.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),R!==Q&&R.traverseVisible(function(k){k.isLight&&k.layers.test(V.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights(y._useLegacyLights);let K=new Set;return R.traverse(function(k){let Oe=k.material;if(Oe)if(Array.isArray(Oe))for(let Ye=0;Ye<Oe.length;Ye++){let nt=Oe[Ye];zt(nt,Q,k),K.add(nt)}else zt(Oe,Q,k),K.add(Oe)}),S.pop(),p=null,K},this.compileAsync=function(R,V,Q=null){let K=this.compile(R,V,Q);return new Promise(k=>{function Oe(){if(K.forEach(function(Ye){Ne.get(Ye).currentProgram.isReady()&&K.delete(Ye)}),K.size===0){k(R);return}setTimeout(Oe,10)}le.get("KHR_parallel_shader_compile")!==null?Oe():setTimeout(Oe,10)})};let kt=null;function rn(R){kt&&kt(R)}function an(){fn.stop()}function Ft(){fn.start()}let fn=new Vd;fn.setAnimationLoop(rn),typeof self<"u"&&fn.setContext(self),this.setAnimationLoop=function(R){kt=R,yt.setAnimationLoop(R),R===null?fn.stop():fn.start()},yt.addEventListener("sessionstart",an),yt.addEventListener("sessionend",Ft),this.render=function(R,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),yt.enabled===!0&&yt.isPresenting===!0&&(yt.cameraAutoUpdate===!0&&yt.updateCamera(V),V=yt.getCamera()),R.isScene===!0&&R.onBeforeRender(y,R,V,U),p=re.get(R,S.length),p.init(),S.push(p),Be.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),ee.setFromProjectionMatrix(Be),Ue=this.localClippingEnabled,_e=Xe.init(this.clippingPlanes,Ue),v=A.get(R,f.length),v.init(),f.push(v),In(R,V,0,y.sortObjects),v.finish(),y.sortObjects===!0&&v.sort($,ce),this.info.render.frame++,_e===!0&&Xe.beginShadows();let Q=p.state.shadowsArray;if(xe.render(Q,R,V),_e===!0&&Xe.endShadows(),this.info.autoReset===!0&&this.info.reset(),Dt.render(v,R),p.setupLights(y._useLegacyLights),V.isArrayCamera){let K=V.cameras;for(let k=0,Oe=K.length;k<Oe;k++){let Ye=K[k];br(v,R,Ye,Ye.viewport)}}else br(v,R,V);U!==null&&(w.updateMultisampleRenderTarget(U),w.updateRenderTargetMipmap(U)),R.isScene===!0&&R.onAfterRender(y,R,V),mt.resetDefaultState(),J=-1,E=null,S.pop(),S.length>0?p=S[S.length-1]:p=null,f.pop(),f.length>0?v=f[f.length-1]:v=null};function In(R,V,Q,K){if(R.visible===!1)return;if(R.layers.test(V.layers)){if(R.isGroup)Q=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(V);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||ee.intersectsSprite(R)){K&&lt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Be);let Ye=I.update(R),nt=R.material;nt.visible&&v.push(R,Ye,nt,Q,lt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||ee.intersectsObject(R))){let Ye=I.update(R),nt=R.material;if(K&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),lt.copy(R.boundingSphere.center)):(Ye.boundingSphere===null&&Ye.computeBoundingSphere(),lt.copy(Ye.boundingSphere.center)),lt.applyMatrix4(R.matrixWorld).applyMatrix4(Be)),Array.isArray(nt)){let it=Ye.groups;for(let gt=0,ut=it.length;gt<ut;gt++){let ft=it[gt],tn=nt[ft.materialIndex];tn&&tn.visible&&v.push(R,Ye,tn,Q,lt.z,ft)}}else nt.visible&&v.push(R,Ye,nt,Q,lt.z,null)}}let Oe=R.children;for(let Ye=0,nt=Oe.length;Ye<nt;Ye++)In(Oe[Ye],V,Q,K)}function br(R,V,Q,K){let k=R.opaque,Oe=R.transmissive,Ye=R.transparent;p.setupLightsView(Q),_e===!0&&Xe.setGlobalState(y.clippingPlanes,Q),Oe.length>0&&ga(k,Oe,V,Q),K&&ue.viewport(C.copy(K)),k.length>0&&Ts(k,V,Q),Oe.length>0&&Ts(Oe,V,Q),Ye.length>0&&Ts(Ye,V,Q),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function ga(R,V,Q,K){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;let Oe=Ee.isWebGL2;We===null&&(We=new Ni(1,1,{generateMipmaps:!0,type:le.has("EXT_color_buffer_half_float")?$r:Qi,minFilter:Jr,samples:Oe?4:0})),y.getDrawingBufferSize(rt),Oe?We.setSize(rt.x,rt.y):We.setSize(Mc(rt.x),Mc(rt.y));let Ye=y.getRenderTarget();y.setRenderTarget(We),y.getClearColor(N),_=y.getClearAlpha(),_<1&&y.setClearColor(16777215,.5),y.clear();let nt=y.toneMapping;y.toneMapping=ji,Ts(R,Q,K),w.updateMultisampleRenderTarget(We),w.updateRenderTargetMipmap(We);let it=!1;for(let gt=0,ut=V.length;gt<ut;gt++){let ft=V[gt],tn=ft.object,Rn=ft.geometry,At=ft.material,mn=ft.group;if(At.side===wn&&tn.layers.test(K.layers)){let Gt=At.side;At.side=Pn,At.needsUpdate=!0,ws(tn,Q,K,Rn,At,mn),At.side=Gt,At.needsUpdate=!0,it=!0}}it===!0&&(w.updateMultisampleRenderTarget(We),w.updateRenderTargetMipmap(We)),y.setRenderTarget(Ye),y.setClearColor(N,_),y.toneMapping=nt}function Ts(R,V,Q){let K=V.isScene===!0?V.overrideMaterial:null;for(let k=0,Oe=R.length;k<Oe;k++){let Ye=R[k],nt=Ye.object,it=Ye.geometry,gt=K===null?Ye.material:K,ut=Ye.group;nt.layers.test(Q.layers)&&ws(nt,V,Q,it,gt,ut)}}function ws(R,V,Q,K,k,Oe){R.onBeforeRender(y,V,Q,K,k,Oe),R.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),k.onBeforeRender(y,V,Q,K,R,Oe),k.transparent===!0&&k.side===wn&&k.forceSinglePass===!1?(k.side=Pn,k.needsUpdate=!0,y.renderBufferDirect(Q,V,K,k,R,Oe),k.side=ts,k.needsUpdate=!0,y.renderBufferDirect(Q,V,K,k,R,Oe),k.side=wn):y.renderBufferDirect(Q,V,K,k,R,Oe),R.onAfterRender(y,V,Q,K,k,Oe)}function bi(R,V,Q){V.isScene!==!0&&(V=qe);let K=Ne.get(R),k=p.state.lights,Oe=p.state.shadowsArray,Ye=k.state.version,nt=Fe.getParameters(R,k.state,Oe,V,Q),it=Fe.getProgramCacheKey(nt),gt=K.programs;K.environment=R.isMeshStandardMaterial?V.environment:null,K.fog=V.fog,K.envMap=(R.isMeshStandardMaterial?q:M).get(R.envMap||K.environment),gt===void 0&&(R.addEventListener("dispose",De),gt=new Map,K.programs=gt);let ut=gt.get(it);if(ut!==void 0){if(K.currentProgram===ut&&K.lightsStateVersion===Ye)return _a(R,nt),ut}else nt.uniforms=Fe.getUniforms(R),R.onBuild(Q,nt,y),R.onBeforeCompile(nt,y),ut=Fe.acquireProgram(nt,it),gt.set(it,ut),K.uniforms=nt.uniforms;let ft=K.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(ft.clippingPlanes=Xe.uniform),_a(R,nt),K.needsLights=ya(R),K.lightsStateVersion=Ye,K.needsLights&&(ft.ambientLightColor.value=k.state.ambient,ft.lightProbe.value=k.state.probe,ft.directionalLights.value=k.state.directional,ft.directionalLightShadows.value=k.state.directionalShadow,ft.spotLights.value=k.state.spot,ft.spotLightShadows.value=k.state.spotShadow,ft.rectAreaLights.value=k.state.rectArea,ft.ltc_1.value=k.state.rectAreaLTC1,ft.ltc_2.value=k.state.rectAreaLTC2,ft.pointLights.value=k.state.point,ft.pointLightShadows.value=k.state.pointShadow,ft.hemisphereLights.value=k.state.hemi,ft.directionalShadowMap.value=k.state.directionalShadowMap,ft.directionalShadowMatrix.value=k.state.directionalShadowMatrix,ft.spotShadowMap.value=k.state.spotShadowMap,ft.spotLightMatrix.value=k.state.spotLightMatrix,ft.spotLightMap.value=k.state.spotLightMap,ft.pointShadowMap.value=k.state.pointShadowMap,ft.pointShadowMatrix.value=k.state.pointShadowMatrix),K.currentProgram=ut,K.uniformsList=null,ut}function zi(R){if(R.uniformsList===null){let V=R.currentProgram.getUniforms();R.uniformsList=ur.seqWithValue(V.seq,R.uniforms)}return R.uniformsList}function _a(R,V){let Q=Ne.get(R);Q.outputColorSpace=V.outputColorSpace,Q.batching=V.batching,Q.instancing=V.instancing,Q.instancingColor=V.instancingColor,Q.skinning=V.skinning,Q.morphTargets=V.morphTargets,Q.morphNormals=V.morphNormals,Q.morphColors=V.morphColors,Q.morphTargetsCount=V.morphTargetsCount,Q.numClippingPlanes=V.numClippingPlanes,Q.numIntersection=V.numClipIntersection,Q.vertexAlphas=V.vertexAlphas,Q.vertexTangents=V.vertexTangents,Q.toneMapping=V.toneMapping}function xa(R,V,Q,K,k){V.isScene!==!0&&(V=qe),w.resetTextureUnits();let Oe=V.fog,Ye=K.isMeshStandardMaterial?V.environment:null,nt=U===null?y.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Ui,it=(K.isMeshStandardMaterial?q:M).get(K.envMap||Ye),gt=K.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,ut=!!Q.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),ft=!!Q.morphAttributes.position,tn=!!Q.morphAttributes.normal,Rn=!!Q.morphAttributes.color,At=ji;K.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(At=y.toneMapping);let mn=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Gt=mn!==void 0?mn.length:0,pt=Ne.get(K),Wn=p.state.lights;if(_e===!0&&(Ue===!0||R!==E)){let Xn=R===E&&K.id===J;Xe.setState(K,R,Xn)}let Vt=!1;K.version===pt.__version?(pt.needsLights&&pt.lightsStateVersion!==Wn.state.version||pt.outputColorSpace!==nt||k.isBatchedMesh&&pt.batching===!1||!k.isBatchedMesh&&pt.batching===!0||k.isInstancedMesh&&pt.instancing===!1||!k.isInstancedMesh&&pt.instancing===!0||k.isSkinnedMesh&&pt.skinning===!1||!k.isSkinnedMesh&&pt.skinning===!0||k.isInstancedMesh&&pt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&pt.instancingColor===!1&&k.instanceColor!==null||pt.envMap!==it||K.fog===!0&&pt.fog!==Oe||pt.numClippingPlanes!==void 0&&(pt.numClippingPlanes!==Xe.numPlanes||pt.numIntersection!==Xe.numIntersection)||pt.vertexAlphas!==gt||pt.vertexTangents!==ut||pt.morphTargets!==ft||pt.morphNormals!==tn||pt.morphColors!==Rn||pt.toneMapping!==At||Ee.isWebGL2===!0&&pt.morphTargetsCount!==Gt)&&(Vt=!0):(Vt=!0,pt.__version=K.version);let Mn=pt.currentProgram;Vt===!0&&(Mn=bi(K,V,k));let al=!1,ei=!1,as=!1,pn=Mn.getUniforms(),hi=pt.uniforms;if(ue.useProgram(Mn.program)&&(al=!0,ei=!0,as=!0),K.id!==J&&(J=K.id,ei=!0),al||E!==R){pn.setValue(F,"projectionMatrix",R.projectionMatrix),pn.setValue(F,"viewMatrix",R.matrixWorldInverse);let Xn=pn.map.cameraPosition;Xn!==void 0&&Xn.setValue(F,lt.setFromMatrixPosition(R.matrixWorld)),Ee.logarithmicDepthBuffer&&pn.setValue(F,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&pn.setValue(F,"isOrthographic",R.isOrthographicCamera===!0),E!==R&&(E=R,ei=!0,as=!0)}if(k.isSkinnedMesh){pn.setOptional(F,k,"bindMatrix"),pn.setOptional(F,k,"bindMatrixInverse");let Xn=k.skeleton;Xn&&(Ee.floatVertexTextures?(Xn.boneTexture===null&&Xn.computeBoneTexture(),pn.setValue(F,"boneTexture",Xn.boneTexture,w)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}k.isBatchedMesh&&(pn.setOptional(F,k,"batchingTexture"),pn.setValue(F,"batchingTexture",k._matricesTexture,w));let gn=Q.morphAttributes;if((gn.position!==void 0||gn.normal!==void 0||gn.color!==void 0&&Ee.isWebGL2===!0)&&xt.update(k,Q,Mn),(ei||pt.receiveShadow!==k.receiveShadow)&&(pt.receiveShadow=k.receiveShadow,pn.setValue(F,"receiveShadow",k.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(hi.envMap.value=it,hi.flipEnvMap.value=it.isCubeTexture&&it.isRenderTargetTexture===!1?-1:1),ei&&(pn.setValue(F,"toneMappingExposure",y.toneMappingExposure),pt.needsLights&&Tr(hi,as),Oe&&K.fog===!0&&Re.refreshFogUniforms(hi,Oe),Re.refreshMaterialUniforms(hi,K,fe,te,We),ur.upload(F,zi(pt),hi,w)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(ur.upload(F,zi(pt),hi,w),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&pn.setValue(F,"center",k.center),pn.setValue(F,"modelViewMatrix",k.modelViewMatrix),pn.setValue(F,"normalMatrix",k.normalMatrix),pn.setValue(F,"modelMatrix",k.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){let Xn=K.uniformsGroups;for(let As=0,os=Xn.length;As<os;As++)if(Ee.isWebGL2){let Xt=Xn[As];Ot.update(Xt,Mn),Ot.bind(Xt,Mn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Mn}function Tr(R,V){R.ambientLightColor.needsUpdate=V,R.lightProbe.needsUpdate=V,R.directionalLights.needsUpdate=V,R.directionalLightShadows.needsUpdate=V,R.pointLights.needsUpdate=V,R.pointLightShadows.needsUpdate=V,R.spotLights.needsUpdate=V,R.spotLightShadows.needsUpdate=V,R.rectAreaLights.needsUpdate=V,R.hemisphereLights.needsUpdate=V}function ya(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(R,V,Q){Ne.get(R.texture).__webglTexture=V,Ne.get(R.depthTexture).__webglTexture=Q;let K=Ne.get(R);K.__hasExternalTextures=!0,K.__hasExternalTextures&&(K.__autoAllocateDepthBuffer=Q===void 0,K.__autoAllocateDepthBuffer||le.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,V){let Q=Ne.get(R);Q.__webglFramebuffer=V,Q.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(R,V=0,Q=0){U=R,z=V,D=Q;let K=!0,k=null,Oe=!1,Ye=!1;if(R){let it=Ne.get(R);it.__useDefaultFramebuffer!==void 0?(ue.bindFramebuffer(F.FRAMEBUFFER,null),K=!1):it.__webglFramebuffer===void 0?w.setupRenderTarget(R):it.__hasExternalTextures&&w.rebindTextures(R,Ne.get(R.texture).__webglTexture,Ne.get(R.depthTexture).__webglTexture);let gt=R.texture;(gt.isData3DTexture||gt.isDataArrayTexture||gt.isCompressedArrayTexture)&&(Ye=!0);let ut=Ne.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ut[V])?k=ut[V][Q]:k=ut[V],Oe=!0):Ee.isWebGL2&&R.samples>0&&w.useMultisampledRTT(R)===!1?k=Ne.get(R).__webglMultisampledFramebuffer:Array.isArray(ut)?k=ut[Q]:k=ut,C.copy(R.viewport),Z.copy(R.scissor),se=R.scissorTest}else C.copy(pe).multiplyScalar(fe).floor(),Z.copy(me).multiplyScalar(fe).floor(),se=Pe;if(ue.bindFramebuffer(F.FRAMEBUFFER,k)&&Ee.drawBuffers&&K&&ue.drawBuffers(R,k),ue.viewport(C),ue.scissor(Z),ue.setScissorTest(se),Oe){let it=Ne.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+V,it.__webglTexture,Q)}else if(Ye){let it=Ne.get(R.texture),gt=V||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,it.__webglTexture,Q||0,gt)}J=-1},this.readRenderTargetPixels=function(R,V,Q,K,k,Oe,Ye){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let nt=Ne.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ye!==void 0&&(nt=nt[Ye]),nt){ue.bindFramebuffer(F.FRAMEBUFFER,nt);try{let it=R.texture,gt=it.format,ut=it.type;if(gt!==xi&&He.convert(gt)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let ft=ut===$r&&(le.has("EXT_color_buffer_half_float")||Ee.isWebGL2&&le.has("EXT_color_buffer_float"));if(ut!==Qi&&He.convert(ut)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ut===Ji&&(Ee.isWebGL2||le.has("OES_texture_float")||le.has("WEBGL_color_buffer_float")))&&!ft){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=R.width-K&&Q>=0&&Q<=R.height-k&&F.readPixels(V,Q,K,k,He.convert(gt),He.convert(ut),Oe)}finally{let it=U!==null?Ne.get(U).__webglFramebuffer:null;ue.bindFramebuffer(F.FRAMEBUFFER,it)}}},this.copyFramebufferToTexture=function(R,V,Q=0){let K=Math.pow(2,-Q),k=Math.floor(V.image.width*K),Oe=Math.floor(V.image.height*K);w.setTexture2D(V,0),F.copyTexSubImage2D(F.TEXTURE_2D,Q,0,0,R.x,R.y,k,Oe),ue.unbindTexture()},this.copyTextureToTexture=function(R,V,Q,K=0){let k=V.image.width,Oe=V.image.height,Ye=He.convert(Q.format),nt=He.convert(Q.type);w.setTexture2D(Q,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,Q.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,Q.unpackAlignment),V.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,K,R.x,R.y,k,Oe,Ye,nt,V.image.data):V.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,K,R.x,R.y,V.mipmaps[0].width,V.mipmaps[0].height,Ye,V.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,K,R.x,R.y,Ye,nt,V.image),K===0&&Q.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),ue.unbindTexture()},this.copyTextureToTexture3D=function(R,V,Q,K,k=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Oe=R.max.x-R.min.x+1,Ye=R.max.y-R.min.y+1,nt=R.max.z-R.min.z+1,it=He.convert(K.format),gt=He.convert(K.type),ut;if(K.isData3DTexture)w.setTexture3D(K,0),ut=F.TEXTURE_3D;else if(K.isDataArrayTexture||K.isCompressedArrayTexture)w.setTexture2DArray(K,0),ut=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,K.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,K.unpackAlignment);let ft=F.getParameter(F.UNPACK_ROW_LENGTH),tn=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Rn=F.getParameter(F.UNPACK_SKIP_PIXELS),At=F.getParameter(F.UNPACK_SKIP_ROWS),mn=F.getParameter(F.UNPACK_SKIP_IMAGES),Gt=Q.isCompressedTexture?Q.mipmaps[k]:Q.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,Gt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Gt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,R.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,R.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,R.min.z),Q.isDataTexture||Q.isData3DTexture?F.texSubImage3D(ut,k,V.x,V.y,V.z,Oe,Ye,nt,it,gt,Gt.data):Q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),F.compressedTexSubImage3D(ut,k,V.x,V.y,V.z,Oe,Ye,nt,it,Gt.data)):F.texSubImage3D(ut,k,V.x,V.y,V.z,Oe,Ye,nt,it,gt,Gt),F.pixelStorei(F.UNPACK_ROW_LENGTH,ft),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,tn),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Rn),F.pixelStorei(F.UNPACK_SKIP_ROWS,At),F.pixelStorei(F.UNPACK_SKIP_IMAGES,mn),k===0&&K.generateMipmaps&&F.generateMipmap(ut),ue.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?w.setTextureCube(R,0):R.isData3DTexture?w.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?w.setTexture2DArray(R,0):w.setTexture2D(R,0),ue.unbindTexture()},this.resetState=function(){z=0,D=0,U=null,ue.reset(),mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===ch?"display-p3":"srgb",t.unpackColorSpace=Wt.workingColorSpace===il?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===dn?vs:Fd}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===vs?dn:Ui}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Oc=class extends ea{};Oc.prototype.isWebGL1Renderer=!0;var Fo=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new je(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ta=class extends ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},Fc=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=xc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Di()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Di()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Di()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Hn=new L,Bo=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Hn.fromBufferAttribute(this,t),Hn.applyMatrix4(e),this.setXYZ(t,Hn.x,Hn.y,Hn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Hn.fromBufferAttribute(this,t),Hn.applyNormalMatrix(e),this.setXYZ(t,Hn.x,Hn.y,Hn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Hn.fromBufferAttribute(this,t),Hn.transformDirection(e),this.setXYZ(t,Hn.x,Hn.y,Hn.z);return this}setX(e,t){return this.normalized&&(t=qt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=qt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=qt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=qt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ii(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ii(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ii(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ii(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=qt(t,this.array),n=qt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=qt(t,this.array),n=qt(n,this.array),s=qt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=qt(t,this.array),n=qt(n,this.array),s=qt(s,this.array),r=qt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new On(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},na=class extends yi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new je(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},tr,zr=new L,nr=new L,ir=new L,sr=new Me,Hr=new Me,Jd=new Jt,io=new L,kr=new L,so=new L,ld=new Me,rc=new Me,cd=new Me,zo=class extends ln{constructor(e=new na){if(super(),this.isSprite=!0,this.type="Sprite",tr===void 0){tr=new en;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Fc(t,5);tr.setIndex([0,1,2,0,2,3]),tr.setAttribute("position",new Bo(n,3,0,!1)),tr.setAttribute("uv",new Bo(n,2,3,!1))}this.geometry=tr,this.material=e,this.center=new Me(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),nr.setFromMatrixScale(this.matrixWorld),Jd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ir.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&nr.multiplyScalar(-ir.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;ro(io.set(-.5,-.5,0),ir,a,nr,s,r),ro(kr.set(.5,-.5,0),ir,a,nr,s,r),ro(so.set(.5,.5,0),ir,a,nr,s,r),ld.set(0,0),rc.set(1,0),cd.set(1,1);let o=e.ray.intersectTriangle(io,kr,so,!1,zr);if(o===null&&(ro(kr.set(-.5,.5,0),ir,a,nr,s,r),rc.set(0,1),o=e.ray.intersectTriangle(io,so,kr,!1,zr),o===null))return;let l=e.ray.origin.distanceTo(zr);l<e.near||l>e.far||t.push({distance:l,point:zr.clone(),uv:$i.getInterpolation(zr,io,kr,so,ld,rc,cd,new Me),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function ro(i,e,t,n,s,r){sr.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Hr.x=r*sr.x-s*sr.y,Hr.y=s*sr.x+r*sr.y):Hr.copy(sr),i.copy(e),i.x+=Hr.x,i.y+=Hr.y,i.applyMatrix4(Jd)}var Ho=class extends On{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},rr=new Jt,hd=new Jt,ao=[],ud=new Oi,fx=new Jt,Gr=new Te,Vr=new Fi,ss=class extends Te{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ho(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,fx)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Oi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,rr),ud.copy(e.boundingBox).applyMatrix4(rr),this.boundingBox.union(ud)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Fi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,rr),Vr.copy(e.boundingSphere).applyMatrix4(rr),this.boundingSphere.union(Vr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Gr.geometry=this.geometry,Gr.material=this.material,Gr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Vr.copy(this.boundingSphere),Vr.applyMatrix4(n),e.ray.intersectsSphere(Vr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,rr),hd.multiplyMatrices(n,rr),Gr.matrixWorld=hd,Gr.raycast(e,ao);for(let a=0,o=ao.length;a<o;a++){let l=ao[a];l.instanceId=r,l.object=this,t.push(l)}ao.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ho(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var rs=class extends yi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},dd=new L,fd=new L,pd=new Jt,ac=new jr,oo=new Fi,_r=class extends ln{constructor(e=new en,t=new rs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)dd.fromBufferAttribute(t,s-1),fd.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=dd.distanceTo(fd);e.setAttribute("lineDistance",new wt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),oo.copy(n.boundingSphere),oo.applyMatrix4(s),oo.radius+=r,e.ray.intersectsSphere(oo)===!1)return;pd.copy(s).invert(),ac.copy(e.ray).applyMatrix4(pd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new L,h=new L,u=new L,d=new L,m=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){let f=Math.max(0,a.start),S=Math.min(g.count,a.start+a.count);for(let y=f,T=S-1;y<T;y+=m){let z=g.getX(y),D=g.getX(y+1);if(c.fromBufferAttribute(p,z),h.fromBufferAttribute(p,D),ac.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);let J=e.ray.origin.distanceTo(d);J<e.near||J>e.far||t.push({distance:J,point:u.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{let f=Math.max(0,a.start),S=Math.min(p.count,a.start+a.count);for(let y=f,T=S-1;y<T;y+=m){if(c.fromBufferAttribute(p,y),h.fromBufferAttribute(p,y+1),ac.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);let D=e.ray.origin.distanceTo(d);D<e.near||D>e.far||t.push({distance:D,point:u.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}},md=new L,gd=new L,ia=class extends _r{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)md.fromBufferAttribute(t,s),gd.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+md.distanceTo(gd);e.setAttribute("lineDistance",new wt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var sa=class extends yi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},_d=new Jt,Bc=new jr,lo=new Fi,co=new L,ko=class extends ln{constructor(e=new en,t=new sa){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),lo.copy(n.boundingSphere),lo.applyMatrix4(s),lo.radius+=r,e.ray.intersectsSphere(lo)===!1)return;_d.copy(s).invert(),Bc.copy(e.ray).applyMatrix4(_d);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let g=d,v=m;g<v;g++){let p=c.getX(g);co.fromBufferAttribute(u,p),xd(co,p,l,s,e,t,this)}}else{let d=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let g=d,v=m;g<v;g++)co.fromBufferAttribute(u,g),xd(co,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function xd(i,e,t,n,s,r,a){let o=Bc.distanceSqToPoint(i);if(o<t){let l=new L;Bc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}var xr=class extends jn{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},ci=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,m=(a-h)/d;return(s+m)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new Me:new L);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new L,s=[],r=[],a=[],o=new L,l=new Jt;for(let m=0;m<=e;m++){let g=m/e;s[m]=this.getTangentAt(g,new L)}r[0]=new L,a[0]=new L;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let m=1;m<=e;m++){if(r[m]=r[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(s[m-1],s[m]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Un(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(l.makeRotationAxis(o,g))}a[m].crossVectors(s[m],r[m])}if(t===!0){let m=Math.acos(Un(r[0].dot(r[e]),-1,1));m/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(m=-m);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],m*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ra=class extends ci{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){let n=t||new Me,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,m=c-this.aY;l=d*h-m*u+this.aX,c=d*u+m*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},zc=class extends ra{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function uh(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,m=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,m*=h,s(a,o,d,m)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var ho=new L,oc=new uh,lc=new uh,cc=new uh,Hc=class extends ci{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new L){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(ho.subVectors(s[0],s[1]).add(s[0]),c=ho);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(ho.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ho),this.curveType==="centripetal"||this.curveType==="chordal"){let m=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),m),v=Math.pow(u.distanceToSquared(d),m),p=Math.pow(d.distanceToSquared(h),m);v<1e-4&&(v=1),g<1e-4&&(g=v),p<1e-4&&(p=v),oc.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,v,p),lc.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,v,p),cc.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,v,p)}else this.curveType==="catmullrom"&&(oc.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),lc.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),cc.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(oc.calc(l),lc.calc(l),cc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new L().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function yd(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function px(i,e){let t=1-i;return t*t*e}function mx(i,e){return 2*(1-i)*i*e}function gx(i,e){return i*i*e}function Yr(i,e,t,n){return px(i,e)+mx(i,t)+gx(i,n)}function _x(i,e){let t=1-i;return t*t*t*e}function xx(i,e){let t=1-i;return 3*t*t*i*e}function yx(i,e){return 3*(1-i)*i*i*e}function vx(i,e){return i*i*i*e}function Zr(i,e,t,n,s){return _x(i,e)+xx(i,t)+yx(i,n)+vx(i,s)}var Go=class extends ci{constructor(e=new Me,t=new Me,n=new Me,s=new Me){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Me){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Zr(e,s.x,r.x,a.x,o.x),Zr(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},kc=class extends ci{constructor(e=new L,t=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new L){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Zr(e,s.x,r.x,a.x,o.x),Zr(e,s.y,r.y,a.y,o.y),Zr(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Vo=class extends ci{constructor(e=new Me,t=new Me){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Me){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Me){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Gc=class extends ci{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Wo=class extends ci{constructor(e=new Me,t=new Me,n=new Me){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Me){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Yr(e,s.x,r.x,a.x),Yr(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Vc=class extends ci{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Yr(e,s.x,r.x,a.x),Yr(e,s.y,r.y,a.y),Yr(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Xo=class extends ci{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Me){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(yd(o,l.x,c.x,h.x,u.x),yd(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Me().fromArray(s))}return this}},Wc=Object.freeze({__proto__:null,ArcCurve:zc,CatmullRomCurve3:Hc,CubicBezierCurve:Go,CubicBezierCurve3:kc,EllipseCurve:ra,LineCurve:Vo,LineCurve3:Gc,QuadraticBezierCurve:Wo,QuadraticBezierCurve3:Vc,SplineCurve:Xo}),Xc=class extends ci{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Wc[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Wc[s.type]().fromJSON(s))}return this}},yr=class extends Xc{constructor(e){super(),this.type="Path",this.currentPoint=new Me,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Vo(this.currentPoint.clone(),new Me(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Wo(this.currentPoint.clone(),new Me(e,t),new Me(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new Go(this.currentPoint.clone(),new Me(e,t),new Me(n,s),new Me(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Xo(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new ra(e,t,n,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}};var vr=class i extends en{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new L,h=new Me;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let m=n+u/t*s;c.x=e*Math.cos(m),c.y=e*Math.sin(m),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new wt(a,3)),this.setAttribute("normal",new wt(o,3)),this.setAttribute("uv",new wt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},cn=class i extends en{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],m=[],g=0,v=[],p=n/2,f=0;S(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new wt(u,3)),this.setAttribute("normal",new wt(d,3)),this.setAttribute("uv",new wt(m,2));function S(){let T=new L,z=new L,D=0,U=(t-e)/n;for(let J=0;J<=r;J++){let E=[],C=J/r,Z=C*(t-e)+e;for(let se=0;se<=s;se++){let N=se/s,_=N*l+o,W=Math.sin(_),te=Math.cos(_);z.x=Z*W,z.y=-C*n+p,z.z=Z*te,u.push(z.x,z.y,z.z),T.set(W,U,te).normalize(),d.push(T.x,T.y,T.z),m.push(N,1-C),E.push(g++)}v.push(E)}for(let J=0;J<s;J++)for(let E=0;E<r;E++){let C=v[E][J],Z=v[E+1][J],se=v[E+1][J+1],N=v[E][J+1];h.push(C,Z,N),h.push(Z,se,N),D+=6}c.addGroup(f,D,0),f+=D}function y(T){let z=g,D=new Me,U=new L,J=0,E=T===!0?e:t,C=T===!0?1:-1;for(let se=1;se<=s;se++)u.push(0,p*C,0),d.push(0,C,0),m.push(.5,.5),g++;let Z=g;for(let se=0;se<=s;se++){let _=se/s*l+o,W=Math.cos(_),te=Math.sin(_);U.x=E*te,U.y=p*C,U.z=E*W,u.push(U.x,U.y,U.z),d.push(0,C,0),D.x=W*.5+.5,D.y=te*.5*C+.5,m.push(D.x,D.y),g++}for(let se=0;se<s;se++){let N=z+se,_=Z+se;T===!0?h.push(_,_+1,N):h.push(_+1,_,N),J+=3}c.addGroup(f,J,T===!0?1:2),f+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},vi=class i extends cn{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},qo=class i extends en{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new wt(r,3)),this.setAttribute("normal",new wt(r.slice(),3)),this.setAttribute("uv",new wt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(S){let y=new L,T=new L,z=new L;for(let D=0;D<t.length;D+=3)m(t[D+0],y),m(t[D+1],T),m(t[D+2],z),l(y,T,z,S)}function l(S,y,T,z){let D=z+1,U=[];for(let J=0;J<=D;J++){U[J]=[];let E=S.clone().lerp(T,J/D),C=y.clone().lerp(T,J/D),Z=D-J;for(let se=0;se<=Z;se++)se===0&&J===D?U[J][se]=E:U[J][se]=E.clone().lerp(C,se/Z)}for(let J=0;J<D;J++)for(let E=0;E<2*(D-J)-1;E++){let C=Math.floor(E/2);E%2===0?(d(U[J][C+1]),d(U[J+1][C]),d(U[J][C])):(d(U[J][C+1]),d(U[J+1][C+1]),d(U[J+1][C]))}}function c(S){let y=new L;for(let T=0;T<r.length;T+=3)y.x=r[T+0],y.y=r[T+1],y.z=r[T+2],y.normalize().multiplyScalar(S),r[T+0]=y.x,r[T+1]=y.y,r[T+2]=y.z}function h(){let S=new L;for(let y=0;y<r.length;y+=3){S.x=r[y+0],S.y=r[y+1],S.z=r[y+2];let T=p(S)/2/Math.PI+.5,z=f(S)/Math.PI+.5;a.push(T,1-z)}g(),u()}function u(){for(let S=0;S<a.length;S+=6){let y=a[S+0],T=a[S+2],z=a[S+4],D=Math.max(y,T,z),U=Math.min(y,T,z);D>.9&&U<.1&&(y<.2&&(a[S+0]+=1),T<.2&&(a[S+2]+=1),z<.2&&(a[S+4]+=1))}}function d(S){r.push(S.x,S.y,S.z)}function m(S,y){let T=S*3;y.x=e[T+0],y.y=e[T+1],y.z=e[T+2]}function g(){let S=new L,y=new L,T=new L,z=new L,D=new Me,U=new Me,J=new Me;for(let E=0,C=0;E<r.length;E+=9,C+=6){S.set(r[E+0],r[E+1],r[E+2]),y.set(r[E+3],r[E+4],r[E+5]),T.set(r[E+6],r[E+7],r[E+8]),D.set(a[C+0],a[C+1]),U.set(a[C+2],a[C+3]),J.set(a[C+4],a[C+5]),z.copy(S).add(y).add(T).divideScalar(3);let Z=p(z);v(D,C+0,S,Z),v(U,C+2,y,Z),v(J,C+4,T,Z)}}function v(S,y,T,z){z<0&&S.x===1&&(a[y]=S.x-1),T.x===0&&T.z===0&&(a[y]=z/2/Math.PI+.5)}function p(S){return Math.atan2(S.z,-S.x)}function f(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}},Yo=class i extends qo{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},uo=new L,fo=new L,hc=new L,po=new $i,Zo=class extends en{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let s=Math.pow(10,4),r=Math.cos(xo*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},m=[];for(let g=0;g<l;g+=3){a?(c[0]=a.getX(g),c[1]=a.getX(g+1),c[2]=a.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);let{a:v,b:p,c:f}=po;if(v.fromBufferAttribute(o,c[0]),p.fromBufferAttribute(o,c[1]),f.fromBufferAttribute(o,c[2]),po.getNormal(hc),u[0]=`${Math.round(v.x*s)},${Math.round(v.y*s)},${Math.round(v.z*s)}`,u[1]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,u[2]=`${Math.round(f.x*s)},${Math.round(f.y*s)},${Math.round(f.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let S=0;S<3;S++){let y=(S+1)%3,T=u[S],z=u[y],D=po[h[S]],U=po[h[y]],J=`${T}_${z}`,E=`${z}_${T}`;E in d&&d[E]?(hc.dot(d[E].normal)<=r&&(m.push(D.x,D.y,D.z),m.push(U.x,U.y,U.z)),d[E]=null):J in d||(d[J]={index0:c[S],index1:c[y],normal:hc.clone()})}}for(let g in d)if(d[g]){let{index0:v,index1:p}=d[g];uo.fromBufferAttribute(o,v),fo.fromBufferAttribute(o,p),m.push(uo.x,uo.y,uo.z),m.push(fo.x,fo.y,fo.z)}this.setAttribute("position",new wt(m,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Bi=class extends yr{constructor(e){super(e),this.uuid=Di(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new yr().fromJSON(s))}return this}},Mx={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=$d(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,d,m;if(n&&(r=wx(i,e,r,t)),i.length>80*t){o=c=i[0],l=h=i[1];for(let g=t;g<s;g+=t)u=i[g],d=i[g+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);m=Math.max(c-o,h-l),m=m!==0?32767/m:0}return aa(r,a,t,o,l,m,0),a}};function $d(i,e,t,n,s){let r,a;if(s===Fx(i,e,t,n)>0)for(r=e;r<t;r+=n)a=vd(r,i[r],i[r+1],a);else for(r=t-n;r>=e;r-=n)a=vd(r,i[r],i[r+1],a);return a&&rl(a,a.next)&&(la(a),a=a.next),a}function Es(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(rl(t,t.next)||on(t.prev,t,t.next)===0)){if(la(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function aa(i,e,t,n,s,r,a){if(!i)return;!a&&r&&Ix(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?Sx(i,n,s,r):Ex(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),la(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=bx(Es(i),e,t),aa(i,e,t,n,s,r,2)):a===2&&Tx(i,e,t,n,s,r):aa(Es(i),e,t,n,s,r,1);break}}}function Ex(i){let e=i.prev,t=i,n=i.next;if(on(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=s<r?s<a?s:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,d=s>r?s>a?s:a:r>a?r:a,m=o>l?o>c?o:c:l>c?l:c,g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=m&&lr(s,o,r,l,a,c,g.x,g.y)&&on(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Sx(i,e,t,n){let s=i.prev,r=i,a=i.next;if(on(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,d=a.y,m=o<l?o<c?o:c:l<c?l:c,g=h<u?h<d?h:d:u<d?u:d,v=o>l?o>c?o:c:l>c?l:c,p=h>u?h>d?h:d:u>d?u:d,f=qc(m,g,e,t,n),S=qc(v,p,e,t,n),y=i.prevZ,T=i.nextZ;for(;y&&y.z>=f&&T&&T.z<=S;){if(y.x>=m&&y.x<=v&&y.y>=g&&y.y<=p&&y!==s&&y!==a&&lr(o,h,l,u,c,d,y.x,y.y)&&on(y.prev,y,y.next)>=0||(y=y.prevZ,T.x>=m&&T.x<=v&&T.y>=g&&T.y<=p&&T!==s&&T!==a&&lr(o,h,l,u,c,d,T.x,T.y)&&on(T.prev,T,T.next)>=0))return!1;T=T.nextZ}for(;y&&y.z>=f;){if(y.x>=m&&y.x<=v&&y.y>=g&&y.y<=p&&y!==s&&y!==a&&lr(o,h,l,u,c,d,y.x,y.y)&&on(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;T&&T.z<=S;){if(T.x>=m&&T.x<=v&&T.y>=g&&T.y<=p&&T!==s&&T!==a&&lr(o,h,l,u,c,d,T.x,T.y)&&on(T.prev,T,T.next)>=0)return!1;T=T.nextZ}return!0}function bx(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!rl(s,r)&&Kd(s,n,n.next,r)&&oa(s,r)&&oa(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),la(n),la(n.next),n=i=r),n=n.next}while(n!==i);return Es(n)}function Tx(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Ux(a,o)){let l=jd(a,o);a=Es(a,a.next),l=Es(l,l.next),aa(a,e,t,n,s,r,0),aa(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function wx(i,e,t,n){let s=[],r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=$d(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(Dx(c));for(s.sort(Ax),r=0;r<s.length;r++)t=Rx(s[r],t);return t}function Ax(i,e){return i.x-e.x}function Rx(i,e){let t=Cx(i,e);if(!t)return e;let n=jd(t,i);return Es(n,n.next),Es(t,t.next)}function Cx(i,e){let t=e,n=-1/0,s,r=i.x,a=i.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){let d=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,s=t.x<t.next.x?t:t.next,d===r))return s}t=t.next}while(t!==e);if(!s)return null;let o=s,l=s.x,c=s.y,h=1/0,u;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&lr(a<c?r:n,a,l,c,a<c?n:r,a,t.x,t.y)&&(u=Math.abs(a-t.y)/(r-t.x),oa(t,i)&&(u<h||u===h&&(t.x>s.x||t.x===s.x&&Px(s,t)))&&(s=t,h=u)),t=t.next;while(t!==o);return s}function Px(i,e){return on(i.prev,i,e.prev)<0&&on(e.next,i,i.next)<0}function Ix(i,e,t,n){let s=i;do s.z===0&&(s.z=qc(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Lx(s)}function Lx(i){let e,t,n,s,r,a,o,l,c=1;do{for(t=i,i=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(a>1);return i}function qc(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Dx(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function lr(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function Ux(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Nx(i,e)&&(oa(i,e)&&oa(e,i)&&Ox(i,e)&&(on(i.prev,i,e.prev)||on(i,e.prev,e))||rl(i,e)&&on(i.prev,i,i.next)>0&&on(e.prev,e,e.next)>0)}function on(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function rl(i,e){return i.x===e.x&&i.y===e.y}function Kd(i,e,t,n){let s=go(on(i,e,t)),r=go(on(i,e,n)),a=go(on(t,n,i)),o=go(on(t,n,e));return!!(s!==r&&a!==o||s===0&&mo(i,t,e)||r===0&&mo(i,n,e)||a===0&&mo(t,i,n)||o===0&&mo(t,e,n))}function mo(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function go(i){return i>0?1:i<0?-1:0}function Nx(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Kd(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function oa(i,e){return on(i.prev,i,i.next)<0?on(i,e,i.next)>=0&&on(i,i.prev,e)>=0:on(i,e,i.prev)<0||on(i,i.next,e)<0}function Ox(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function jd(i,e){let t=new Yc(i.i,i.x,i.y),n=new Yc(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function vd(i,e,t,n){let s=new Yc(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function la(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Yc(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Fx(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var es=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Md(e),Ed(n,e);let a=e.length;t.forEach(Md);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,Ed(n,t[l]);let o=Mx.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Md(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Ed(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var ca=class i extends en{constructor(e=new Bi([new Me(.5,.5),new Me(-.5,.5),new Me(-.5,-.5),new Me(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new wt(s,3)),this.setAttribute("uv",new wt(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,m=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:m-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3,f=t.extrudePath,S=t.UVGenerator!==void 0?t.UVGenerator:Bx,y,T=!1,z,D,U,J;f&&(y=f.getSpacedPoints(h),T=!0,d=!1,z=f.computeFrenetFrames(h,!1),D=new L,U=new L,J=new L),d||(p=0,m=0,g=0,v=0);let E=o.extractPoints(c),C=E.shape,Z=E.holes;if(!es.isClockWise(C)){C=C.reverse();for(let F=0,we=Z.length;F<we;F++){let le=Z[F];es.isClockWise(le)&&(Z[F]=le.reverse())}}let N=es.triangulateShape(C,Z),_=C;for(let F=0,we=Z.length;F<we;F++){let le=Z[F];C=C.concat(le)}function W(F,we,le){return we||console.error("THREE.ExtrudeGeometry: vec does not exist"),F.clone().addScaledVector(we,le)}let te=C.length,fe=N.length;function $(F,we,le){let Ee,ue,Qe,Ne=F.x-we.x,w=F.y-we.y,M=le.x-F.x,q=le.y-F.y,ge=Ne*Ne+w*w,oe=Ne*q-w*M;if(Math.abs(oe)>Number.EPSILON){let I=Math.sqrt(ge),Fe=Math.sqrt(M*M+q*q),Re=we.x-w/I,A=we.y+Ne/I,re=le.x-q/Fe,Xe=le.y+M/Fe,xe=((re-Re)*q-(Xe-A)*M)/(Ne*q-w*M);Ee=Re+Ne*xe-F.x,ue=A+w*xe-F.y;let Dt=Ee*Ee+ue*ue;if(Dt<=2)return new Me(Ee,ue);Qe=Math.sqrt(Dt/2)}else{let I=!1;Ne>Number.EPSILON?M>Number.EPSILON&&(I=!0):Ne<-Number.EPSILON?M<-Number.EPSILON&&(I=!0):Math.sign(w)===Math.sign(q)&&(I=!0),I?(Ee=-w,ue=Ne,Qe=Math.sqrt(ge)):(Ee=Ne,ue=w,Qe=Math.sqrt(ge/2))}return new Me(Ee/Qe,ue/Qe)}let ce=[];for(let F=0,we=_.length,le=we-1,Ee=F+1;F<we;F++,le++,Ee++)le===we&&(le=0),Ee===we&&(Ee=0),ce[F]=$(_[F],_[le],_[Ee]);let pe=[],me,Pe=ce.concat();for(let F=0,we=Z.length;F<we;F++){let le=Z[F];me=[];for(let Ee=0,ue=le.length,Qe=ue-1,Ne=Ee+1;Ee<ue;Ee++,Qe++,Ne++)Qe===ue&&(Qe=0),Ne===ue&&(Ne=0),me[Ee]=$(le[Ee],le[Qe],le[Ne]);pe.push(me),Pe=Pe.concat(me)}for(let F=0;F<p;F++){let we=F/p,le=m*Math.cos(we*Math.PI/2),Ee=g*Math.sin(we*Math.PI/2)+v;for(let ue=0,Qe=_.length;ue<Qe;ue++){let Ne=W(_[ue],ce[ue],Ee);Be(Ne.x,Ne.y,-le)}for(let ue=0,Qe=Z.length;ue<Qe;ue++){let Ne=Z[ue];me=pe[ue];for(let w=0,M=Ne.length;w<M;w++){let q=W(Ne[w],me[w],Ee);Be(q.x,q.y,-le)}}}let ee=g+v;for(let F=0;F<te;F++){let we=d?W(C[F],Pe[F],ee):C[F];T?(U.copy(z.normals[0]).multiplyScalar(we.x),D.copy(z.binormals[0]).multiplyScalar(we.y),J.copy(y[0]).add(U).add(D),Be(J.x,J.y,J.z)):Be(we.x,we.y,0)}for(let F=1;F<=h;F++)for(let we=0;we<te;we++){let le=d?W(C[we],Pe[we],ee):C[we];T?(U.copy(z.normals[F]).multiplyScalar(le.x),D.copy(z.binormals[F]).multiplyScalar(le.y),J.copy(y[F]).add(U).add(D),Be(J.x,J.y,J.z)):Be(le.x,le.y,u/h*F)}for(let F=p-1;F>=0;F--){let we=F/p,le=m*Math.cos(we*Math.PI/2),Ee=g*Math.sin(we*Math.PI/2)+v;for(let ue=0,Qe=_.length;ue<Qe;ue++){let Ne=W(_[ue],ce[ue],Ee);Be(Ne.x,Ne.y,u+le)}for(let ue=0,Qe=Z.length;ue<Qe;ue++){let Ne=Z[ue];me=pe[ue];for(let w=0,M=Ne.length;w<M;w++){let q=W(Ne[w],me[w],Ee);T?Be(q.x,q.y+y[h-1].y,y[h-1].x+le):Be(q.x,q.y,u+le)}}}_e(),Ue();function _e(){let F=s.length/3;if(d){let we=0,le=te*we;for(let Ee=0;Ee<fe;Ee++){let ue=N[Ee];rt(ue[2]+le,ue[1]+le,ue[0]+le)}we=h+p*2,le=te*we;for(let Ee=0;Ee<fe;Ee++){let ue=N[Ee];rt(ue[0]+le,ue[1]+le,ue[2]+le)}}else{for(let we=0;we<fe;we++){let le=N[we];rt(le[2],le[1],le[0])}for(let we=0;we<fe;we++){let le=N[we];rt(le[0]+te*h,le[1]+te*h,le[2]+te*h)}}n.addGroup(F,s.length/3-F,0)}function Ue(){let F=s.length/3,we=0;We(_,we),we+=_.length;for(let le=0,Ee=Z.length;le<Ee;le++){let ue=Z[le];We(ue,we),we+=ue.length}n.addGroup(F,s.length/3-F,1)}function We(F,we){let le=F.length;for(;--le>=0;){let Ee=le,ue=le-1;ue<0&&(ue=F.length-1);for(let Qe=0,Ne=h+p*2;Qe<Ne;Qe++){let w=te*Qe,M=te*(Qe+1),q=we+Ee+w,ge=we+ue+w,oe=we+ue+M,I=we+Ee+M;lt(q,ge,oe,I)}}}function Be(F,we,le){l.push(F),l.push(we),l.push(le)}function rt(F,we,le){qe(F),qe(we),qe(le);let Ee=s.length/3,ue=S.generateTopUV(n,s,Ee-3,Ee-2,Ee-1);ht(ue[0]),ht(ue[1]),ht(ue[2])}function lt(F,we,le,Ee){qe(F),qe(we),qe(Ee),qe(we),qe(le),qe(Ee);let ue=s.length/3,Qe=S.generateSideWallUV(n,s,ue-6,ue-3,ue-2,ue-1);ht(Qe[0]),ht(Qe[1]),ht(Qe[3]),ht(Qe[1]),ht(Qe[2]),ht(Qe[3])}function qe(F){s.push(l[F*3+0]),s.push(l[F*3+1]),s.push(l[F*3+2])}function ht(F){r.push(F.x),r.push(F.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return zx(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Wc[s.type]().fromJSON(s)),new i(n,e.options)}},Bx={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new Me(r,a),new Me(o,l),new Me(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[s*3],m=e[s*3+1],g=e[s*3+2],v=e[r*3],p=e[r*3+1],f=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new Me(a,1-l),new Me(c,1-u),new Me(d,1-g),new Me(v,1-f)]:[new Me(o,1-l),new Me(h,1-u),new Me(m,1-g),new Me(p,1-f)]}};function zx(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var ha=class i extends qo{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var ua=class i extends en{constructor(e=new Bi([new Me(0,.5),new Me(-.5,-.5),new Me(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new wt(s,3)),this.setAttribute("normal",new wt(r,3)),this.setAttribute("uv",new wt(a,2));function c(h){let u=s.length/3,d=h.extractPoints(t),m=d.shape,g=d.holes;es.isClockWise(m)===!1&&(m=m.reverse());for(let p=0,f=g.length;p<f;p++){let S=g[p];es.isClockWise(S)===!0&&(g[p]=S.reverse())}let v=es.triangulateShape(m,g);for(let p=0,f=g.length;p<f;p++){let S=g[p];m=m.concat(S)}for(let p=0,f=m.length;p<f;p++){let S=m[p];s.push(S.x,S.y,0),r.push(0,0,1),a.push(S.x,S.y)}for(let p=0,f=v.length;p<f;p++){let S=v[p],y=S[0]+u,T=S[1]+u,z=S[2]+u;n.push(y,T,z),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Hx(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];n.push(a)}return new i(n,e.curveSegments)}};function Hx(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var Vn=class i extends en{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new L,d=new L,m=[],g=[],v=[],p=[];for(let f=0;f<=n;f++){let S=[],y=f/n,T=0;f===0&&a===0?T=.5/t:f===n&&l===Math.PI&&(T=-.5/t);for(let z=0;z<=t;z++){let D=z/t;u.x=-e*Math.cos(s+D*r)*Math.sin(a+y*o),u.y=e*Math.cos(a+y*o),u.z=e*Math.sin(s+D*r)*Math.sin(a+y*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),p.push(D+T,1-y),S.push(c++)}h.push(S)}for(let f=0;f<n;f++)for(let S=0;S<t;S++){let y=h[f][S+1],T=h[f][S],z=h[f+1][S],D=h[f+1][S+1];(f!==0||a>0)&&m.push(y,T,D),(f!==n-1||l<Math.PI)&&m.push(T,z,D)}this.setIndex(m),this.setAttribute("position",new wt(g,3)),this.setAttribute("normal",new wt(v,3)),this.setAttribute("uv",new wt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Jo=class i extends en{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],l=[],c=[],h=new L,u=new L,d=new L;for(let m=0;m<=n;m++)for(let g=0;g<=s;g++){let v=g/s*r,p=m/n*Math.PI*2;u.x=(e+t*Math.cos(p))*Math.cos(v),u.y=(e+t*Math.cos(p))*Math.sin(v),u.z=t*Math.sin(p),o.push(u.x,u.y,u.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(m/n)}for(let m=1;m<=n;m++)for(let g=1;g<=s;g++){let v=(s+1)*m+g-1,p=(s+1)*(m-1)+g-1,f=(s+1)*(m-1)+g,S=(s+1)*m+g;a.push(v,p,S),a.push(p,f,S)}this.setIndex(a),this.setAttribute("position",new wt(o,3)),this.setAttribute("normal",new wt(l,3)),this.setAttribute("uv",new wt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var $o=class extends yi{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new je(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};var vn=class extends yi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bd,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Ko=class extends rs{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};function _o(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function kx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Mr=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Zc=class extends Mr{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:yu,endingEnd:yu}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case vu:r=e,o=2*t-n;break;case Mu:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case vu:a=e,l=2*n-t;break;case Mu:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,m=this._weightNext,g=(n-t)/(s-t),v=g*g,p=v*g,f=-d*p+2*d*v-d*g,S=(1+d)*p+(-1.5-2*d)*v+(-.5+d)*g+1,y=(-1-m)*p+(1.5+m)*v+.5*g,T=m*p-m*v;for(let z=0;z!==o;++z)r[z]=f*a[h+z]+S*a[c+z]+y*a[l+z]+T*a[u+z];return r}},Jc=class extends Mr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},$c=class extends Mr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Mi=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=_o(t,this.TimeBufferType),this.values=_o(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:_o(e.times,Array),values:_o(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new $c(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Jc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Zc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case vo:t=this.InterpolantFactoryMethodDiscrete;break;case Mo:t=this.InterpolantFactoryMethodLinear;break;case Nl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return vo;case this.InterpolantFactoryMethodLinear:return Mo;case this.InterpolantFactoryMethodSmooth:return Nl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&kx(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Nl,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*n,d=u-n,m=u+n;for(let g=0;g!==n;++g){let v=t[u+g];if(v!==t[d+g]||v!==t[m+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let m=0;m!==n;++m)t[d+m]=t[u+m]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Mi.prototype.TimeBufferType=Float32Array;Mi.prototype.ValueBufferType=Float32Array;Mi.prototype.DefaultInterpolation=Mo;var Ss=class extends Mi{};Ss.prototype.ValueTypeName="bool";Ss.prototype.ValueBufferType=Array;Ss.prototype.DefaultInterpolation=vo;Ss.prototype.InterpolantFactoryMethodLinear=void 0;Ss.prototype.InterpolantFactoryMethodSmooth=void 0;var Kc=class extends Mi{};Kc.prototype.ValueTypeName="color";var jc=class extends Mi{};jc.prototype.ValueTypeName="number";var Qc=class extends Mr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)is.slerpFlat(r,0,a,c-o,a,c,l);return r}},da=class extends Mi{InterpolantFactoryMethodLinear(e){return new Qc(this.times,this.values,this.getValueSize(),e)}};da.prototype.ValueTypeName="quaternion";da.prototype.DefaultInterpolation=Mo;da.prototype.InterpolantFactoryMethodSmooth=void 0;var bs=class extends Mi{};bs.prototype.ValueTypeName="string";bs.prototype.ValueBufferType=Array;bs.prototype.DefaultInterpolation=vo;bs.prototype.InterpolantFactoryMethodLinear=void 0;bs.prototype.InterpolantFactoryMethodSmooth=void 0;var eh=class extends Mi{};eh.prototype.ValueTypeName="vector";var Sd={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},th=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let m=c[u],g=c[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}},Gx=new th,fa=class{constructor(e){this.manager=e!==void 0?e:Gx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};fa.DEFAULT_MATERIAL_NAME="__DEFAULT";var nh=class extends fa{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Sd.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;let o=Kr("img");function l(){h(),Sd.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}};var jo=class extends fa{constructor(e){super(e)}load(e,t,n,s){let r=new jn,a=new nh(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},pa=class extends ln{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new je(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Qo=class extends pa{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ln.DEFAULT_UP),this.updateMatrix(),this.groundColor=new je(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},uc=new Jt,bd=new L,Td=new L,el=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Me(512,512),this.map=null,this.mapPass=null,this.matrix=new Jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qr,this._frameExtents=new Me(1,1),this._viewportCount=1,this._viewports=[new sn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;bd.setFromMatrixPosition(e.matrixWorld),t.position.copy(bd),Td.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Td),t.updateMatrixWorld(),uc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(uc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(uc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var wd=new Jt,Wr=new L,dc=new L,ih=class extends el{constructor(){super(new Nn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Me(4,2),this._viewportCount=6,this._viewports=[new sn(2,1,1,1),new sn(0,1,1,1),new sn(3,1,1,1),new sn(1,1,1,1),new sn(3,0,1,1),new sn(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Wr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Wr),dc.copy(n.position),dc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(dc),n.updateMatrixWorld(),s.makeTranslation(-Wr.x,-Wr.y,-Wr.z),wd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wd)}},Er=class extends pa{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new ih}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},sh=class extends el{constructor(){super(new No(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},tl=class extends pa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ln.DEFAULT_UP),this.updateMatrix(),this.target=new ln,this.shadow=new sh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var dh="\\[\\]\\.:\\/",Vx=new RegExp("["+dh+"]","g"),fh="[^"+dh+"]",Wx="[^"+dh.replace("\\.","")+"]",Xx=/((?:WC+[\/:])*)/.source.replace("WC",fh),qx=/(WCOD+)?/.source.replace("WCOD",Wx),Yx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",fh),Zx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",fh),Jx=new RegExp("^"+Xx+qx+Yx+Zx+"$"),$x=["material","materials","bones","map"],rh=class{constructor(e,t,n){let s=n||nn.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},nn=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Vx,"")}static parseTrackName(e){let t=Jx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);$x.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};nn.Composite=rh;nn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};nn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};nn.prototype.GetterByBindingType=[nn.prototype._getValue_direct,nn.prototype._getValue_array,nn.prototype._getValue_arrayElement,nn.prototype._getValue_toArray];nn.prototype.SetterByBindingTypeAndVersioning=[[nn.prototype._setValue_direct,nn.prototype._setValue_direct_setNeedsUpdate,nn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[nn.prototype._setValue_array,nn.prototype._setValue_array_setNeedsUpdate,nn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[nn.prototype._setValue_arrayElement,nn.prototype._setValue_arrayElement_setNeedsUpdate,nn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[nn.prototype._setValue_fromArray,nn.prototype._setValue_fromArray_setNeedsUpdate,nn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var sy=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var $t=(i,e,t)=>Math.max(e,Math.min(t,i)),Qd=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,jx=i=>i*i*(3-2*i),ma=i=>1-Math.pow(1-i,3),ph=i=>1+2.70158*Math.pow(i-1,3)+1.70158*Math.pow(i-1,2),ef=-1.7,Qx=(i,e,t)=>new L(i+ef,e,t);function Qn(i,e,t,n=!0){let s=document.createElement("canvas");s.width=i,s.height=e,t(s.getContext("2d"),i,e);let r=new xr(s);return r.colorSpace=dn,r.anisotropy=4,n&&(r.wrapS=r.wrapT=Ms),r}var tf={roof:"skillion",cladding:"boardbatten",accent:"cedar",wall:"#2f3a3d",roofColor:"#1f2428",joinery:"#161e1b",door:"timber",garage:!0,chimney:!1,solar:!0,deck:!0,shape:"twostorey",windows:"floor",veranda:!1,bay:!1,fence:"none",detail:"none",balcony:!0,driveway:!0,tod:"auto"},ey=[{key:"frame",title:"Framing",text:"Treated timber framing goes up first. With the roof on, the house is weathertight before any work starts inside."},{key:"lining",title:"Insulation and lining",text:"Insulation goes into the walls and ceiling, then plasterboard is fixed and stopped, ready for paint."},{key:"floor",title:"Flooring",text:"Pale oak flooring is laid through the open-plan living area and the skirtings are fitted."},{key:"kitchen",title:"Kitchen and joinery",text:"The kitchen goes in with a stone island bench, handleless cabinetry and an integrated fridge."},{key:"furnished",title:"Furnished and lit",text:"Lights, furniture and plants finish the home. The open-plan living area flows to the deck and the garden."}],nf=[{key:"arrive",title:"Arrive at the section",text:"Approach from the street. The garage is on the left and the covered entry is on the right."},{key:"front",title:"The front elevation",text:null},{key:"roof",title:"Roof and cladding",text:null},{key:"garden",title:"Native planting",text:"P\u014Dhutukawa, ponga tree ferns and flax frame the house and soften the boundary."},{key:"back",title:"Around the back",text:null},{key:"doll",title:"Roof off: the floor plan",text:"Lift the roof to see the layout: garage, living, kitchen and dining, two bedrooms and the entry."},{key:"door",title:"The front door",text:"Under the covered entry. The door swings open as we step inside."},{key:"living",title:"Entry and living room",text:"The living room opens to the front window and gets the afternoon light."},{key:"kitchen",title:"Kitchen and dining",text:"An island bench, a dining table and a window onto the back garden."},{key:"bed",title:"Bedroom",text:"A quiet bedroom at the back of the house, away from the street."},{key:"end",title:"Golden hour",text:"Back outside as the light drops. Every design choice can still be changed."}];function ty(i,e={}){let t=matchMedia("(prefers-reduced-motion: reduce)").matches,n;try{n=new ea({antialias:!0,alpha:!!e.cutout,preserveDrawingBuffer:!!e.cutout,powerPreference:"high-performance"})}catch{return null}let s=!!e.hero,r=!!e.cutout;r&&n.setClearColor(0,0),n.setPixelRatio(Math.min(window.devicePixelRatio||1,s?window.innerWidth<900?1.25:1.5:2)),n.shadowMap.enabled=!0,n.shadowMap.type=ah,s&&(n.shadowMap.autoUpdate=!1,n.shadowMap.needsUpdate=!0),n.outputColorSpace=dn,n.toneMapping=oh,n.localClippingEnabled=!0,n.domElement.style.cssText="display:block;width:100%;height:100%;touch-action:pan-y;cursor:"+(s?"default":"grab"),i.appendChild(n.domElement);let a=new ta,o=new Nn(46,1,.3,500),l=[],c=new Set,h=new gi(new L(0,-1,0),100),u={top:{value:new je},mid:{value:new je},bot:{value:new je},sd:{value:new L(0,1,0)},sc:{value:new je},t:{value:0}},d=new Te(new Vn(300,32,16),new li({side:Pn,depthWrite:!1,uniforms:u,vertexShader:"varying vec3 vP;void main(){vP=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"uniform vec3 top;uniform vec3 mid;uniform vec3 bot;uniform vec3 sd;uniform vec3 sc;uniform float t;varying vec3 vP;float h21(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}float n2(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h21(i),h21(i+vec2(1.,0.)),f.x),mix(h21(i+vec2(0.,1.)),h21(i+vec2(1.,1.)),f.x),f.y);}float fbm(vec2 p){float a=.5,s=0.;for(int i=0;i<5;i++){s+=a*n2(p);p=p*2.03+17.;a*=.5;}return s;}void main(){float h=clamp(vP.y,-.1,1.);vec3 c=mix(bot,mid,smoothstep(0.,.35,h));c=mix(c,top,smoothstep(.3,1.,h));float sdot=max(dot(normalize(vP),sd),0.);c+=sc*(pow(sdot,60.)*.6+pow(sdot,7.)*.16);if(vP.y>0.){vec2 uv=vP.xz/(vP.y+.2)*.8+vec2(t*.006,t*.002);float n=fbm(uv*1.5);float m=smoothstep(.48,.8,n)*smoothstep(.0,.2,vP.y);float lum=dot(mid,vec3(.3,.6,.1));float k=smoothstep(.06,.5,lum);vec3 cc=mix(mid,vec3(1.),.82*k)*(.88+.4*pow(sdot,3.));cc=mix(cc,sc*1.2,pow(sdot,8.)*.35*k);float under=smoothstep(.62,.48,n);cc*=.9+.1*under;c=mix(c,cc,m*.88);}gl_FragColor=vec4(pow(c,vec3(.4545)),1.);}"}));a.add(d),a.fog=new Fo(2837056,r?1e5:60,r?2e5:210);{let x=new gr(n),P=new ta;P.add(new Te(new Vn(60,32,16),new li({side:Pn,uniforms:{},vertexShader:"varying vec3 vP;void main(){vP=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec3 vP;void main(){float h=vP.y;vec3 c=mix(vec3(.22,.26,.2),vec3(.82,.88,.92),smoothstep(-.05,.08,h));c=mix(c,vec3(.32,.55,.9),smoothstep(.1,.85,h));gl_FragColor=vec4(c,1.);}"})));let b=new Te(new Vn(5,16,8),new Fn({color:new je(14,11,8)}));b.position.set(-26,34,28),P.add(b),a.environment=x.fromScene(P,.03).texture,a.environmentIntensity=.3,x.dispose()}let m=new Qo(11127232,2308143,.85);a.add(m);let g=new tl(14674404,1.5);g.castShadow=!0,g.shadow.mapSize.set(s?2048:3072,s?2048:3072),g.shadow.radius=3;let v=g.shadow.camera;v.left=-24,v.right=24,v.top=24,v.bottom=-24,v.near=5,v.far=100,g.shadow.bias=-4e-4,g.shadow.normalBias=.04,a.add(g);let p=new Er(16762234,0,16,1.6);p.position.set(.5,1.6,1.2),a.add(p);let f=new Er(16769712,0,14,1.4);f.position.set(1,2.3,0),a.add(f);let S=new Er(16769712,0,12,1.4);S.position.set(5.5,2.3,-1.5),a.add(S);let y={dusk:{top:726803,mid:1451807,bot:2837056,fog:2837056,fogFar:210,hemi:11127232,hemiG:2308143,hi:.85,sun:14674404,si:1.5,sp:[-18,30,22],exp:1.05,li:0},day:{top:5214159,mid:10275817,bot:14938613,fog:13624298,fogFar:240,hemi:14150911,hemiG:6978138,hi:1.05,sun:16774366,si:2.6,sp:[-14,34,24],exp:1,li:0},golden:{top:2438506,mid:15176298,bot:16237946,fog:15315578,fogFar:200,hemi:16767400,hemiG:6969922,hi:1.45,sun:16756838,si:2.6,sp:[-24,16,20],exp:1.45,li:1},night:{top:329746,mid:857648,bot:1911370,fog:1055283,fogFar:120,hemi:5926560,hemiG:1712688,hi:.55,sun:9085695,si:.55,sp:[-16,26,18],exp:1.15,li:1}},T={top:new je,mid:new je,bot:new je,fog:new je,hemi:new je,hemiG:new je,sun:new je,fogFar:210,hi:.85,si:1.5,exp:1.05,li:0,sp:new L(-18,30,22)},z=new je;function D(x,P,b){let G=y[b||"dusk"],B=y[x],j=(O,X)=>z.set(G[O]).lerp(new je(B[X]),P).clone();return{top:j("top","top"),mid:j("mid","mid"),bot:j("bot","bot"),fog:j("fog","fog"),hemi:j("hemi","hemi"),hemiG:j("hemiG","hemiG"),sun:j("sun","sun"),fogFar:G.fogFar+(B.fogFar-G.fogFar)*P,hi:G.hi+(B.hi-G.hi)*P,si:G.si+(B.si-G.si)*P,exp:G.exp+(B.exp-G.exp)*P,li:G.li+(B.li-G.li)*P,sp:new L(...G.sp).lerp(new L(...B.sp),P)}}let U=!!e.pbr&&!s,J=e.texBase||"tex/",E=new jo,C={};function Z(x,P,b){if(C[x]){C[x].image?b(C[x]):C[x].__q.push(b);return}let G=E.load(J+x+".jpg",B=>{(B.__q||[]).forEach(j=>j(B)),B.__q=[]});G.__q=[b],P&&(G.colorSpace=dn),C[x]=G}function se(x,P){if(!U)return x;x.userData.pbrO=P;let[b,G]=P.rep||[1,1];return(P.maps||[]).forEach(([B,j])=>Z(j,B==="map",O=>{let X=O.clone();X.needsUpdate=!0,X.wrapS=X.wrapT=Ms,X.repeat.set(b,G),X.anisotropy=8,P.rot&&(X.center.set(.5,.5),X.rotation=P.rot),B==="map"&&(X.colorSpace=dn),x[B]=X,(B==="map"||B==="normalMap")&&(x.bumpMap=null),B==="normalMap"&&(x.normalScale=new Me(P.ns||1,P.ns||1)),x.needsUpdate=!0})),x}let N=(x,P={})=>new vn(Object.assign({color:x,roughness:.85,metalness:0},P)),_=(x,P,b,G,B=0,j=0,O=0,X=!0)=>{let Y=new Te(new yn(x,P,b),G);return Y.position.set(B,j,O),Y.castShadow=X,Y.receiveShadow=!0,Y},W=(x,P,b,G)=>(x.position.set(P,b,G),x),te=(...x)=>{let P=new ke;return x.forEach(b=>P.add(b)),P};function fe(x){x.traverse(P=>{P.material&&(P.material=Array.isArray(P.material)?P.material.map(b=>b.clone()):P.material.clone(),(Array.isArray(P.material)?P.material:[P.material]).forEach(b=>{b.userData.op=b.opacity,c.add(b),b.userData.pbrO&&se(b,b.userData.pbrO)}))})}function $(x,{start:P,dur:b=1,kind:G="fade",end:B=null,fn:j=null,add:O=!0,parent:X=a,tag:Y=null}){O&&X.add(x);let de={o:x,start:P,dur:b,kind:G,end:B,fn:j,tag:Y,sx:x.scale.x,sy:x.scale.y,sz:x.scale.z,py:x.position.y};return(G==="fade"||G==="drop")&&fe(x),l.push(de),de}function ce(x,P){x.traverse(b=>{b.isMesh&&(b.userData.cs0===void 0&&(b.userData.cs0=b.castShadow),b.castShadow=b.userData.cs0&&P>.55),b.material&&(Array.isArray(b.material)?b.material:[b.material]).forEach(G=>{G.transparent=!0,G.opacity=(G.userData.op??1)*P,G.depthWrite=P>.98})})}function pe(x){let P=x.attributes.position,b=x.attributes.normal,G=new Float32Array(P.count*2);for(let B=0;B<P.count;B++){let j=Math.abs(b.getX(B)),O=Math.abs(b.getY(B)),X=Math.abs(b.getZ(B)),Y,de;O>.6?(Y=P.getX(B),de=P.getZ(B)):j>X?(Y=P.getZ(B),de=P.getY(B)):(Y=P.getX(B),de=P.getY(B)),G[B*2]=Y,G[B*2+1]=de}return x.setAttribute("uv",new On(G,2)),x}let me=Qn(1024,1024,(x,P,b)=>{x.fillStyle="#4c7a46",x.fillRect(0,0,P,b);for(let G=0;G<70;G++){let B=Math.random()*P,j=Math.random()*b,O=60+Math.random()*160,X=x.createRadialGradient(B,j,0,B,j,O),Y=Math.random()<.5?"160,170,80":Math.random()<.5?"30,70,35":"90,140,70";X.addColorStop(0,"rgba("+Y+",.28)"),X.addColorStop(1,"rgba("+Y+",0)"),x.fillStyle=X,x.fillRect(B-O,j-O,O*2,O*2)}for(let G=0;G<26e3;G++){let B=Math.random();x.fillStyle=B<.3?"rgba(170,205,110,.16)":B<.6?"rgba(15,45,22,.2)":B<.85?"rgba(110,150,70,.14)":"rgba(255,255,230,.05)",x.fillRect(Math.random()*P,Math.random()*b,1.1,3+Math.random()*7)}for(let G=0;G<10;G++)x.fillStyle="rgba(255,255,255,.025)",x.fillRect(0,G*(b/10),P,b/20);for(let G=0;G<260;G++)x.fillStyle=Math.random()<.6?"rgba(245,240,200,.55)":"rgba(255,255,255,.45)",x.beginPath(),x.arc(Math.random()*P,Math.random()*b,1+Math.random()*1.2,0,6.28),x.fill()});me.repeat.set(13,13),me.anisotropy=8;let Pe=new Te(new vr(95,64),new vn({map:me,bumpMap:me,bumpScale:.6,roughness:1,envMapIntensity:.2}));if(Pe.rotation.x=-Math.PI/2,Pe.receiveShadow=!0,a.add(Pe),U){se(Pe.material,{maps:[["map","grass-c"],["normalMap","grass-n"]],rep:[110,110],ns:.9}),Pe.material.color.set(14674128),Pe.material.roughness=.95;let x=Qn(512,512,(b,G,B)=>{for(let j=0;j<70;j++){let O=Math.random()*G,X=Math.random()*B,Y=50+Math.random()*130,de=Math.random()<.5?"175,170,80":"20,60,30",be=b.createRadialGradient(O,X,0,O,X,Y);be.addColorStop(0,"rgba("+de+",.5)"),be.addColorStop(1,"rgba("+de+",0)"),b.fillStyle=be,b.fillRect(O-Y,X-Y,Y*2,Y*2)}},!0);x.repeat.set(5,5);let P=new Te(new vr(95,48),new Fn({map:x,transparent:!0,opacity:.32,depthWrite:!1,fog:!0}));P.rotation.x=-Math.PI/2,P.position.y=.012,a.add(P)}let ee=new ke;if(a.add(ee),r){Pe.visible=!1,ee.visible=!1,d.visible=!1;let x=new Te(new An(90,90),new $o({opacity:.42}));x.rotation.x=-Math.PI/2,x.position.y=.03,x.receiveShadow=!0,a.add(x)}let _e=Qn(128,128,(x,P,b)=>{x.fillStyle="#d9c79e",x.fillRect(0,0,P,b);for(let G=0;G<1400;G++)x.fillStyle=Math.random()<.5?"rgba(120,95,55,.12)":"rgba(255,255,255,.16)",x.fillRect(Math.random()*P,Math.random()*b,2,2)});_e.repeat.set(30,3);let Ue=new Te(new An(260,11),new vn({map:_e,roughness:1}));Ue.rotation.x=-Math.PI/2,Ue.position.set(0,.04,-30.5),Ue.receiveShadow=!0,ee.add(Ue);let We=new Te(new An(260,3.5),new vn({color:8227669,roughness:1}));We.rotation.x=-Math.PI/2,We.position.set(0,.05,-25),ee.add(We);let Be=(()=>{let P=document.createElement("canvas");P.width=P.height=256;let b=P.getContext("2d"),G=b.createImageData(256,256),B=new Float32Array(256*256);for(let O=0;O<256;O++)for(let X=0;X<256;X++){let Y=X/256*6.2832,de=O/256*6.2832;B[O*256+X]=Math.sin(Y*3+Math.sin(de*2)*1.3)*.5+Math.sin(de*5+Y*2)*.3+Math.sin(Y*9+de*7)*.15+Math.sin(Y*14-de*11)*.08}for(let O=0;O<256;O++)for(let X=0;X<256;X++){let Y=B[O*256+(X+1)%256]-B[O*256+(X+256-1)%256],de=B[(O+1)%256*256+X]-B[(O+256-1)%256*256+X],be=-Y*1.7,Se=-de*1.7,ye=Math.hypot(be,Se,1),Ge=(O*256+X)*4;G.data[Ge]=(be/ye*.5+.5)*255,G.data[Ge+1]=(Se/ye*.5+.5)*255,G.data[Ge+2]=(1/ye*.5+.5)*255,G.data[Ge+3]=255}b.putImageData(G,0,0);let j=new xr(P);return j.wrapS=j.wrapT=Ms,j.repeat.set(60,30),j.anisotropy=8,j})(),rt=new vn({color:2060160,roughness:.16,metalness:.3,normalMap:Be,normalScale:new Me(.45,.45),envMapIntensity:.55}),lt=new Te(new An(600,200),rt);lt.rotation.x=-Math.PI/2,lt.position.set(0,.07,-136),ee.add(lt);let qe=[];for(let x=0;x<3;x++){let P=new Te(new An(260,.5),new Fn({color:16777215,transparent:!0,opacity:.5,depthWrite:!1}));P.rotation.x=-Math.PI/2,P.position.set(0,.09,-36),ee.add(P),qe.push(P)}let ht=N(1784368,{roughness:1});[[-90,-150,50,16],[10,-175,70,14],[110,-150,50,13],[-170,-120,50,14],[180,-100,44,12]].forEach(([x,P,b,G])=>{let B=new Te(new Vn(b,24,12),ht);B.scale.y=G/b,B.position.set(x,0,P),ee.add(B)});let F=new Te(new vi(70,22,48,1,!0),N(2775626,{roughness:1}));F.position.set(-64,11,-165),ee.add(F);let we=Qn(64,64,(x,P,b)=>{x.fillStyle="#fff",x.fillRect(0,0,P,b),x.fillStyle="#35505c",x.fillRect(7,9,50,40),x.fillStyle="rgba(255,255,255,.28)",x.fillRect(7,9,50,8),x.fillStyle="rgba(0,0,0,.25)",x.fillRect(31,9,2,40)});we.repeat.set(1/1.7,1/2.3),we.anisotropy=8;let le=new ke,Ee=N(10334908,{roughness:.55,metalness:.1,fog:!0,map:we}),ue=N(9085099,{roughness:.55,metalness:.1,fog:!0,map:we});(()=>{let x=[],P=(b=>()=>(b=b*16807%2147483647)/2147483647)(11);for(let b=0;b<3;b++)for(let G=-66+b*3;G<70;G+=4.4+P()*2.2){let B=1-Math.min(1,Math.abs(G-4)/64),j=7+P()*10+B*(b===0?19:b===1?12:6);x.push([G+P()*1.4,j,3.6+P()*3.4,3.6+P()*3,b])}return x})().forEach(([x,P,b,G,B],j)=>{let O=_(b,P,G,j%3===0?ue:Ee,x,P/2,-B*6.5,!1);if(pe(O.geometry),le.add(O),P>34)for(let X=0;X<2;X++)le.add(_(b*.92,.5,G*1.02,N(12044496,{fog:!1}),x,P*(.45+.3*X),-B*6.5,!1));j%5===0&&le.add(_(b*.55,2.2,G*.55,N(5268075,{fog:!1}),x,P+1.1,-B*6.5,!1))}),le.add(_(150,2.4,40,N(8096386,{roughness:1,fog:!1}),2,1.2,-6,!1));let Ne=new ke,w=N(13227740,{roughness:.5,metalness:.2,fog:!1});Ne.add(W(new Te(new cn(.9,1.8,96,12),w),0,48,0),W(new Te(new cn(6.4,4.6,8,20),w),0,82,0),W(new Te(new cn(4.4,5.4,2.2,20),N(1780272)),0,88,0),W(new Te(new cn(.14,.5,34,6),w),0,110,0)),Ne.add(W(new Te(new Vn(.9,10,10),N(14701131,{emissive:14701131,emissiveIntensity:.8})),0,128,0)),Ne.scale.setScalar(.56),Ne.position.set(8,0,-3),le.add(Ne),le.scale.setScalar(.82),le.position.set(12,0,-122),ee.add(le);{let x=new ss(new cn(.07,.07,1,5),N(15331056,{roughness:.6}),110),P=new ss(new yn(2.6,.5,.9),N(16054004,{roughness:.5}),110),b=new ln,G=5,B=()=>(G=G*16807%2147483647)/2147483647;for(let O=0;O<110;O++){let X=-78+O%22*2.4+B()*.5,Y=-66+Math.floor(O/22)*3.2+B()*.6,de=5+B()*4;b.position.set(X,de/2+.3,Y),b.rotation.set(0,0,0),b.scale.set(1,de,1),b.updateMatrix(),x.setMatrixAt(O,b.matrix),b.position.set(X,.3,Y),b.rotation.y=(B()-.5)*.15,b.scale.set(1,1,1),b.updateMatrix(),P.setMatrixAt(O,b.matrix)}ee.add(x,P);let j=_(46,.3,1.2,N(9080716),-54,.35,-69.5,!1);ee.add(j);for(let O=0;O<3;O++){let X=new ke;X.add(_(.5,9,.5,N(14263361,{fog:!1}),0,4.5,0,!1),_(9,.35,.35,N(14263361,{fog:!1}),2.5,9,0,!1)),X.position.set(52+O*9,2.4,-108-O*2),X.rotation.y=.3*O,le.add(X)}}function M(x,P,b,G){let B=new ke;B.add(_(3.2*b,.5*b,1.1*b,N(15659754),0,.25*b,0),W(new Te(new cn(.06*b,.06*b,5*b,6),N(13227212)),0,3*b,0));let j=new Te(new en,new vn({color:16777215,side:wn,roughness:.8}));return j.geometry.setAttribute("position",new wt([0,.6*b,0,0,5.3*b,0,1.8*b,.7*b,0],3)),j.geometry.computeVertexNormals(),B.add(j),B.position.set(x,.1,P),B.rotation.y=G,B.userData.b=P,ee.add(B),B}let q=[M(-22,-58,1.4,.3),M(26,-72,1.8,-.5),M(-60,-96,2.2,.1),M(70,-100,2.4,.7)],ge=new ke;for(let x=0;x<14;x++)ge.add(_(2.4,.12,.55,N(8084026),0,.45,-x*.62));for(let x=0;x<8;x++)ge.add(_(.14,1.5,.14,N(4930350),-1.1,0,-x*1.1),_(.14,1.5,.14,N(4930350),1.1,0,-x*1.1));ge.position.set(18,.05,-31),ee.add(ge),[[-14,-28],[6,-27.5],[34,-28.5],[-40,-28]].forEach(([x,P])=>{let b=new Te(new Yo(.9,0),N(5857373,{roughness:1}));b.position.set(x,.3,P),b.scale.y=.6,b.castShadow=!0,ee.add(b)});for(let x=0;x<26;x++){let P=-60+x*4.6+x%3,b=new Te(new vi(.35,1.3,5),N(9083470,{roughness:1}));b.position.set(P,.65,-26.6+x*7%3*.4),ee.add(b)}let oe=new ke;oe.position.x=ef,a.add(oe);let I=.15,Fe=2.7,Re=2.4,A={x0:0,x1:8.6,z0:-4.5,z1:4.5},re={x0:-5.2,x1:0,z0:-3,z1:3.2},Xe={x0:-13,x1:15,z0:-9,z1:17},xe=new ke;for(let x=0;x<7;x++){let P=[],b=6+x*5.2;for(let G=0;G<=64;G++){let B=G/64*Math.PI*2,j=b*(1+.1*Math.sin(B*2+x)+.07*Math.sin(B*3+1.5));P.push(new L(Math.cos(B)*j*1.25+1.5,.03,Math.sin(B)*j*.95+4))}xe.add(new _r(new en().setFromPoints(P),new rs({color:10470062,transparent:!0,opacity:.45})))}$(xe,{start:0,dur:2.2,kind:"fade",end:11.5});let Dt=[[Xe.x0,Xe.z0],[Xe.x1,Xe.z0],[Xe.x1,Xe.z1],[Xe.x0,Xe.z1],[Xe.x0,Xe.z0]].map(([x,P])=>new L(x,.06,P)),xt=new _r(new en().setFromPoints(Dt),new Ko({color:14701131,dashSize:.8,gapSize:.5}));xt.computeLineDistances(),$(xt,{start:2.2,dur:1.4,kind:"fade",end:14.6,parent:oe}),[[Xe.x0,Xe.z0],[Xe.x1,Xe.z0],[Xe.x1,Xe.z1],[Xe.x0,Xe.z1]].forEach(([x,P],b)=>{let G=new ke;G.add(_(.14,1.4,.14,N(14701131),0,.7,0));let B=new Te(new An(.7,.45),new Fn({color:14701131,side:wn}));B.position.set(.38,1.2,0),G.add(B),G.position.set(x,0,P),$(G,{start:1+b*.35,dur:.7,kind:"pop",end:14.6,parent:oe})});let st=new ke,et=N(13227212);for(let x=0;x<3;x++){let P=x/3*Math.PI*2,b=_(.06,1.7,.06,et,Math.cos(P)*.45,.82,Math.sin(P)*.45);b.rotation.z=Math.cos(P)*.3,b.rotation.x=-Math.sin(P)*.3,st.add(b)}st.add(_(.34,.3,.3,N(3885646),0,1.75,0),_(.08,.08,.5,N(14701131),0,1.92,.2));let He=te(_(.38,.8,.26,N(15895592),0,1.15,0),_(.14,.8,.14,N(2765880),-.1,.4,0),_(.14,.8,.14,N(2765880),.1,.4,0),W(new Te(new Vn(.2,12,12),N(14857356)),0,1.75,0),W(new Te(new Vn(.22,12,8,0,Math.PI*2,0,Math.PI/2),N(15659754)),0,1.8,0));He.position.set(1.4,0,-.4),st.add(He),st.position.set(11,0,10),st.rotation.y=-.8,$(st,{start:1.4,dur:.9,kind:"grow",end:8.2,parent:oe});let mt=new ke,Ot=new rs({color:15659754,transparent:!0,opacity:.7}),Kt=(x,P,b,G,B)=>{let j=new ia(new Zo(new yn(P-x,B,G-b)),Ot);return j.position.set((x+P)/2,I+B/2,(b+G)/2),j};mt.add(Kt(A.x0,A.x1,A.z0,A.z1,Fe),Kt(re.x0,re.x1,re.z0,re.z1,Re)),$(mt,{start:4,dur:1.6,kind:"fade",end:9,parent:oe});let yt=Qn(512,200,(x,P,b)=>{x.clearRect(0,0,P,b),x.strokeStyle="#e0524b",x.lineWidth=12,x.strokeRect(10,10,P-20,b-20),x.fillStyle="#e0524b",x.font='700 92px "IBM Plex Mono",monospace',x.textAlign="center",x.textBaseline="middle",x.fillText("APPROVED",P/2,b/2+4)},!1),Ce=new Te(new An(7.5,2.9),new Fn({map:yt,transparent:!0,side:wn,depthWrite:!1}));Ce.position.set(3.6,7.2,6),Ce.rotation.z=.12,$(Ce,{start:6.4,dur:.8,kind:"pop",end:9.2,parent:oe});let H=new ke,Le=N(15906116,{roughness:.55}),De=N(2239277);H.add(_(3.4,.55,1.1,De,0,.3,.9),_(3.4,.55,1.1,De,0,.3,-.9),_(2.1,.7,2.2,Le,0,.95,0),_(1.1,1.1,1.4,Le,-.5,1.7,0),_(.9,.6,1.1,N(10338240,{roughness:.1}),-.5,1.85,.06));let tt=new ke;tt.position.set(.5,1.4,0),tt.add(_(3.2,.32,.32,Le,1.5,.7,0)),tt.children[0].rotation.z=.55;let $e=new ke;$e.position.set(2.9,1.8,0),$e.add(_(.28,2,.28,Le,.2,-.8,0)),$e.children[0].rotation.z=.4,$e.add(_(.7,.5,.9,N(13209382),.8,-1.8,0)),tt.add($e),H.add(tt),H.position.set(-10,0,4),H.rotation.y=.4,$(H,{start:7,dur:.9,kind:"grow",end:10.6,parent:oe,fn:x=>{tt.rotation.z=Math.sin(x*1.6)*.2-.05,$e.rotation.z=Math.sin(x*1.6+1)*.3}}),$(_(15,.3,11.6,se(N(9073496,{roughness:1}),{maps:[["map","dirt-c"],["normalMap","dirt-n"]],rep:[6,5],ns:1.2}),1.7,.05,0,!1),{start:7.4,dur:1.1,kind:"rise",parent:oe});let zt=_(14,.3,10.2,se(N(10135200,{roughness:.9}),{maps:[["map","concrete-c"],["normalMap","concrete-n"]],rep:[5,4],ns:.8}),1.7,.14,0);zt.geometry.translate(0,.15,0),zt.position.y=0,$(zt,{start:8.2,dur:1.1,kind:"rise",parent:oe});let kt=new yn(.05,1,.1),rn=[],an=(x,P,b,G,B)=>{let j=Math.hypot(b-x,G-P),O=Math.max(2,Math.round(j/.6));for(let X=0;X<=O;X++){let Y=X/O;rn.push({x:x+(b-x)*Y,z:P+(G-P)*Y,h:B,ry:Math.atan2(b-x,G-P)+Math.PI/2})}};an(A.x0,A.z1,A.x1,A.z1,Fe),an(A.x0,A.z0,A.x1,A.z0,Fe),an(A.x0,A.z0,A.x0,A.z1,Fe),an(A.x1,A.z0,A.x1,A.z1,Fe),an(re.x0,re.z1,re.x1,re.z1,Re),an(re.x0,re.z0,re.x1,re.z0,Re),an(re.x0,re.z0,re.x0,re.z1,Re);let Ft=new ss(kt,N(14268285,{roughness:.7}),rn.length);Ft.castShadow=!0;let fn=new ln;$(Ft,{start:9,dur:2,kind:"custom",end:13.2,parent:oe,fn:(x,P)=>{rn.forEach((b,G)=>{let B=$t(P*1.6-G/rn.length*.6,0,1),j=Math.max(.001,b.h*ma(B));fn.position.set(b.x,I+j/2,b.z),fn.rotation.set(0,b.ry,0),fn.scale.set(1,j,1),fn.updateMatrix(),Ft.setMatrixAt(G,fn.matrix)}),Ft.instanceMatrix.needsUpdate=!0}});let In=N(14268285,{roughness:.7}),br=te();[[A,Fe],[re,Re]].forEach(([x,P])=>{[I+.05,I+P-.05].forEach(b=>{br.add(_(x.x1-x.x0,.08,.1,In,(x.x0+x.x1)/2,b,x.z1),_(x.x1-x.x0,.08,.1,In,(x.x0+x.x1)/2,b,x.z0),_(.1,.08,x.z1-x.z0,In,x.x0,b,(x.z0+x.z1)/2),_(.1,.08,x.z1-x.z0,In,x.x1,b,(x.z0+x.z1)/2))})}),$(br,{start:9.9,dur:1,kind:"fade",parent:oe,end:13.2});let ga=new ke;{let x=(P,b,G,B,j,O,X)=>{let Y=j+O,de=P+X,be=b-X,Se=(G+B)/2,ye=(Ge,Ke)=>{let Ve=new L().subVectors(Ke,Ge),It=new Te(new yn(.07,.1,Ve.length()),In);It.position.copy(Ge).addScaledVector(Ve,.5),It.lookAt(Ke),It.castShadow=!0,ga.add(It)};for(let Ge=P;Ge<=b+.01;Ge+=.9){let Ke=$t((Ge-P)/(b-P),0,1),Ve=de+(be-de)*Ke;ye(new L(Ge,j,B),new L(Ve,Y,Se)),ye(new L(Ge,j,G),new L(Ve,Y,Se))}ye(new L(de,Y,Se),new L(be,Y,Se))};x(A.x0-.6,A.x1+.6,A.z0-.6,A.z1+.6,I+Fe,2.1,2.6),x(re.x0-.5,re.x1+.1,re.z0-.5,re.z1+.5,I+Re,1.1,1.4)}$(ga,{start:10.4,dur:1.3,kind:"rise",parent:oe,end:13.4});let Ts=te(_(A.x1-A.x0+.05,Fe,A.z1-A.z0+.05,N(2503738),(A.x0+A.x1)/2,I+Fe/2,0),_(re.x1-re.x0+.05,Re,re.z1-re.z0+.05,N(2503738),(re.x0+re.x1)/2,I+Re/2,(re.z0+re.z1)/2));$(Ts,{start:11.4,dur:.8,kind:"fade",parent:oe,end:12.2});let ws=new ke,bi=[];for(let x=A.x0;x<=A.x1+.1;x+=2.15)bi.push(new L(x,0,A.z1+.7),new L(x,4.4,A.z1+.7));[1.1,2.2,3.3,4.4].forEach(x=>bi.push(new L(A.x0,x,A.z1+.7),new L(A.x1,x,A.z1+.7)));for(let x=A.x0;x<A.x1;x+=2.15)bi.push(new L(x,0,A.z1+.7),new L(x+2.15,2.2,A.z1+.7));ws.add(new ia(new en().setFromPoints(bi),new rs({color:13227212,transparent:!0,opacity:.9}))),[2.2,3.3].forEach(x=>ws.add(_(A.x1-A.x0,.06,.8,N(9402968),(A.x0+A.x1)/2,x,A.z1+.9))),$(ws,{start:11.2,dur:.9,kind:"fade",end:14.4,parent:oe});let zi=new ke,_a=se(N(12107962,{roughness:.9}),{maps:[["map","concrete-c"],["normalMap","concrete-n"]],rep:[1.5,1.5],ns:.8});zi.add(_(4.4,.08,12,_a,-2.9,.04,9.2,!1));for(let x=0;x<5;x++)zi.add(_(4.4,.09,.06,N(9081997),-2.9,.045,4+x*2.4,!1));zi.add(_(1.2,.07,12,N(11844789),A.x0+6.95,.04,10.7,!1));for(let x=0;x<5;x++)zi.add(_(1.2,.08,.05,N(9739927),A.x0+6.95,.045,5.6+x*2.2,!1));r||$(zi,{start:14.2,dur:1.1,kind:"fade",parent:oe});let xa=te(_(.1,1.1,.1,N(5917498),0,.55,0),_(.6,.34,.4,N(15659754),0,1.2,0),_(.5,.06,.02,N(12727348),0,1.22,.21));xa.position.set(3.4,0,13.4),r||$(xa,{start:14.6,dur:.6,kind:"pop",parent:oe});let Tr=Qn(256,256,(x,P,b)=>{x.fillStyle="#fff",x.fillRect(0,0,P,b);for(let G=0;G<2400;G++){let B=Math.random();x.fillStyle=B<.4?"rgba(0,0,0,.22)":B<.8?"rgba(255,255,255,.18)":"rgba(0,0,0,.1)",x.beginPath(),x.ellipse(Math.random()*P,Math.random()*b,3+Math.random()*4,1.5+Math.random()*2,Math.random()*3.14,0,6.28),x.fill()}});Tr.repeat.set(4,3);function ya(x,P,b,G){let B=new ke,j=N(5917498,{roughness:1}),O=new Te(new cn(.22*b,.42*b,3.6*b,9),j);O.position.y=1.8*b,O.rotation.z=.12,O.castShadow=!0,B.add(O),B.add(W(Object.assign(new Te(new cn(.12*b,.22*b,2.4*b,7),j),{}),-.8*b,3.5*b,0)),B.children[1].rotation.z=.9;let X=[3103301,3499600,2838848,4090706,3828306],Y=[[0,4.8,0,2.5],[2,4.3,.6,2],[-2.2,4.5,-.5,1.9],[.8,6.2,.3,1.8],[-1,6,1,1.5]];Y.forEach(([Se,ye,Ge,Ke],Ve)=>{let It=new Te(new ha(Ke*b,3),N(X[Ve%5],{roughness:.95,map:Tr,bumpMap:Tr,bumpScale:1.6}));It.position.set(Se*b,ye*b,Ge*b),It.scale.y=.82,It.castShadow=!0,B.add(It)});let de=[];for(let Se=0;Se<260;Se++){let ye=Y[Se%5],Ge=Math.random()*6.28,Ke=Math.acos(2*Math.random()-1),Ve=ye[3]*b*1.04;de.push(ye[0]*b+Ve*Math.sin(Ke)*Math.cos(Ge),ye[1]*b+Ve*Math.cos(Ke)*.82,ye[2]*b+Ve*Math.sin(Ke)*Math.sin(Ge))}let be=new en;be.setAttribute("position",new wt(de,3)),B.add(new ko(be,new sa({color:14701131,size:.13*b+.06,sizeAttenuation:!0}))),B.position.set(x,0,P),$(B,{start:G,dur:1.1,kind:"grow",parent:oe})}if(r||(ya(12.5,.5,1.1,14.4),ya(-11,-3,.9,14.8)),!r){let x=window.innerWidth<900?420:900,P=new ss(new vi(.06,.5,3),N(6261326,{roughness:1}),x),b=new ln,G=7,B=()=>(G=G*16807%2147483647)/2147483647,j=0;for(let O=0;O<x*4&&j<x;O++){let X=-34+B()*68,Y=-8+B()*40;if(X>-9&&X<14&&Y>-9&&Y<17||Math.abs(X-6.9)<1.6&&Y>4||X>-5.6&&X<0&&Y>3)continue;b.position.set(X,.2,Y),b.rotation.set((B()-.5)*.5,B()*6,(B()-.5)*.5);let de=.7+B()*1.1;b.scale.set(de,de*(.7+B()*.9),de),b.updateMatrix(),P.setMatrixAt(j++,b.matrix)}P.count=j,P.instanceMatrix.needsUpdate=!0,a.add(P)}function R(x,P,b,G){let B=new ke;B.add(W(new Te(new cn(.18*b,.26*b,3*b,8),N(4930350,{roughness:1})),0,1.5*b,0));for(let j=0;j<10;j++){let O=j/10*Math.PI*2,X=new Te(new vi(.24*b,2.6*b,4),N(j%2?4090706:5012575,{roughness:.9}));X.scale.z=.25,X.position.set(Math.cos(O)*.9*b,3*b-.25*b,Math.sin(O)*.9*b),X.rotation.set(Math.sin(O)*1.25,0,-Math.cos(O)*1.25),X.castShadow=!0,B.add(X)}B.position.set(x,0,P),$(B,{start:G,dur:1,kind:"grow",parent:oe})}r||(R(-8.4,5.6,1,14.9),R(11,9,.8,15));function V(x,P,b,G){let B=new ke,j=N(5209950,{roughness:.9});for(let O=0;O<9;O++){let X=O/9*Math.PI*2,Y=new Te(new vi(.09*b,1.6*b,3),j);Y.position.set(Math.cos(X)*.18*b,.8*b,Math.sin(X)*.18*b),Y.rotation.set(Math.sin(X)*.45,0,-Math.cos(X)*.45),B.add(Y)}B.position.set(x,0,P),$(B,{start:G,dur:.8,kind:"grow",parent:oe})}r||(V(-.5,5.4,1,15.1),V(8.4,5.4,1.1,15.2),V(-5.6,4.8,1,15.2),V(1.4,12,.9,15.3),V(5.2,11,.9,15.3),V(-6.8,14,.9,15.4));let Q=[];for(let x=0;x<8;x++){let P=new Te(new Vn(.28,10,10),new Fn({color:15659754,transparent:!0,opacity:0,depthWrite:!1}));oe.add(P),Q.push(P)}{let x=N(16742938,{roughness:.6}),P=N(14725260,{roughness:.7}),b=N(2371642,{roughness:.8}),G=N(16053486,{roughness:.4}),B=N(15266504,{roughness:.3,metalness:.2}),j=Qn(128,128,(ze,jt,Et)=>{ze.clearRect(0,0,jt,Et),ze.strokeStyle="#cfd6d4",ze.lineWidth=2.2;for(let hn=0;hn<=jt;hn+=16)ze.beginPath(),ze.moveTo(hn,0),ze.lineTo(hn,Et),ze.stroke(),ze.beginPath(),ze.moveTo(0,hn),ze.lineTo(jt,hn),ze.stroke();ze.lineWidth=5,ze.strokeRect(1,1,jt-2,Et-2)},!0),O=new Fn({map:j,transparent:!0,alphaTest:.35,side:wn}),X=new ke,Y=-9,de=12.5,be=-8.5,Se=9.5,ye=3.4,Ge=(ze,jt,Et)=>{let hn=new ke,si=new Te(new An(ye,2),O);return si.position.y=1.05,hn.add(si),[-ye/2,ye/2].forEach(ki=>hn.add(_(.07,2.1,.07,N(12568516,{metalness:.5,roughness:.4}),ki,1.05,0))),hn.add(_(.5,.18,.5,N(10134176,{roughness:.9}),-ye/2,.09,0),_(.5,.18,.5,N(10134176,{roughness:.9}),ye/2,.09,0)),hn.position.set(ze,0,jt),hn.rotation.y=Et,hn};for(let ze=Y+ye/2;ze<de;ze+=ye)X.add(Ge(ze,be,0)),ze>3&&ze<9.5||X.add(Ge(ze,Se,0));for(let ze=be+ye/2+ye;ze<Se;ze+=ye)X.add(Ge(Y,ze,Math.PI/2),Ge(de,ze,Math.PI/2));let Ke=te(_(2.2,1.3,.08,N(16777215,{roughness:.7}),0,1.9,0),_(2,.3,.1,N(12727348),0,2.25,0),_(.08,2.4,.08,N(5594458),-.9,1.2,0),_(.08,2.4,.08,N(5594458),.9,1.2,0));Ke.position.set(2.2,0,Se+.1),X.add(Ke),$(X,{start:6.6,dur:1.2,kind:"fade",end:14.6,parent:oe});let Ve=te(_(1.2,2.3,1.2,N(3112895,{roughness:.55}),0,1.15,0),_(.9,.12,.9,N(15265522),0,2.36,0),_(.7,1.7,.05,N(2320547),0,1.1,.62));Ve.position.set(-7.6,0,6.6),Ve.rotation.y=.2,$(Ve,{start:6.8,dur:.8,kind:"pop",end:14.7,parent:oe});let It=(ze,jt)=>{let Et=new Te(new vi(.2,.55,10),N(16738847,{roughness:.6}));Et.position.set(ze,.28,jt),Et.castShadow=!0;let hn=_(.4,.04,.4,N(2239022),ze,.02,jt,!1);return te(Et,hn)},Cn=te(It(4,10.4),It(7.6,10.4),It(10.8,8.6),It(-8.2,9));$(Cn,{start:7,dur:.6,kind:"pop",end:14.7,parent:oe});let Ht=N(14268285,{roughness:.75}),ct=new ke;for(let ze=0;ze<4;ze++)for(let jt=0;jt<5;jt++)ct.add(_(3.2,.12,.1,Ht,0,.18+ze*.14,-.3+jt*.15,!1));ct.add(_(3.4,.1,.9,N(9071172,{roughness:.9}),0,.06,0)),ct.position.set(-6.8,0,2.2),$(ct,{start:9,dur:.8,kind:"pop",end:13.4,parent:oe});let Ze=new ke;Ze.add(_(1.4,.12,1.2,N(9071172,{roughness:.9}),0,.06,0));for(let ze=0;ze<5;ze++)for(let jt=0;jt<4;jt++)Ze.add(_(.32,.18,.64,N(12104356,{roughness:.9}),-.48+jt*.32,.21+ze*.18,0,!1));Ze.position.set(10.2,0,3.2),$(Ze,{start:10.4,dur:.8,kind:"pop",end:14.6,parent:oe});let Mt=(ze,jt,Et,hn)=>{let si=new ke;si.add(_(.2,.8,.2,b,-.12,.4,0),_(.2,.8,.2,b,.12,.4,0),_(.5,.62,.3,x,0,1.13,0),_(.52,.07,.31,B,0,1.02,0),_(.52,.07,.31,B,0,1.22,0),_(.14,.55,.14,x,-.34,1.1,0),_(.14,.55,.14,x,.34,1.1,0));let ki=new Te(new Vn(.17,12,10),P);ki.position.y=1.62,ki.castShadow=!0,si.add(ki);let ne=new Te(new Vn(.19,12,8,0,6.28,0,1.5),G);return ne.position.y=1.67,ne.castShadow=!0,si.add(ne),si.position.set(ze,0,jt),si.rotation.y=Et,si.userData.ph=hn,si},Rt=Mt(3.4,3.6,-.6,0),Lt=Mt(-3.4,-6.3,.4,1.7),bn=Mt(7.8,-3.2,2.4,3.1);[[Rt,8.4,14.5],[Lt,9.6,14.5],[bn,10.8,14.5]].forEach(([ze,jt,Et])=>$(ze,{start:jt,dur:.6,kind:"custom",end:Et,parent:oe,fn:hn=>{ze.position.y=Math.abs(Math.sin(hn*2.2+ze.userData.ph))*.04,ze.rotation.y+=Math.sin(hn*.6+ze.userData.ph)*.004}}));let Ut=new ke,di=_(1.9,1.7,2.1,N(15921902,{roughness:.5}),0,1.45,2.6),Ei=new Te(new cn(.95,.7,3.4,18),N(16747039,{roughness:.45,metalness:.2}));Ei.rotation.x=Math.PI/2.4,Ei.position.set(0,2.15,-.3),Ei.castShadow=!0,Ut.add(_(2.1,.35,6.6,b,0,.75,.2),di,Ei,_(1.2,.5,.05,N(7044230,{metalness:.5}),0,1.8,3.66)),[[-.85,2.5],[.85,2.5],[-.85,-1.4],[.85,-1.4],[-.85,-2.4],[.85,-2.4]].forEach(([ze,jt])=>{let Et=new Te(new cn(.5,.5,.4,14),N(1382683,{roughness:.9}));Et.rotation.z=Math.PI/2,Et.position.set(ze,.5,jt),Et.castShadow=!0,Ut.add(Et)}),Ut.position.set(15.5,0,1.5),Ut.rotation.y=-Math.PI/2+.15,$(Ut,{start:8,dur:.9,kind:"custom",end:10.8,parent:oe,fn:ze=>{Ei.rotation.y=ze*2.2}})}let K=Object.assign({},tf,e.design||{}),k=x=>(x.clippingPlanes=[h],x.clipShadows=!0,x),Oe={};function Ye(x,P){if(!Oe[x]){let B={weatherboard:{tw:.4,th:.18,draw:(O,X,Y)=>{O.fillStyle="#fff",O.fillRect(0,0,X,Y),O.fillStyle="rgba(0,0,0,.28)",O.fillRect(0,Y-5,X,5),O.fillStyle="rgba(255,255,255,.7)",O.fillRect(0,0,X,3)},w:16,h:64},boardbatten:{tw:.32,th:1,draw:(O,X,Y)=>{O.fillStyle="#fff",O.fillRect(0,0,X,Y),O.fillStyle="rgba(0,0,0,.3)",O.fillRect(0,0,6,Y),O.fillStyle="rgba(255,255,255,.7)",O.fillRect(6,0,3,Y)},w:64,h:16},brick:{tw:.46,th:.15,draw:(O,X,Y)=>{O.fillStyle="#d8d8d8",O.fillRect(0,0,X,Y),O.fillStyle="#8a8a8a",O.fillRect(0,0,X,3),O.fillRect(0,Y/2,X,3),O.fillRect(0,0,3,Y/2),O.fillRect(X/2,Y/2,3,Y/2);for(let de=0;de<60;de++)O.fillStyle=Math.random()<.5?"rgba(0,0,0,.07)":"rgba(255,255,255,.1)",O.fillRect(Math.random()*X,Math.random()*Y,8+Math.random()*10,4)},w:128,h:64},plaster:{tw:2,th:2,draw:(O,X,Y)=>{O.fillStyle="#fff",O.fillRect(0,0,X,Y);for(let de=0;de<900;de++)O.fillStyle=Math.random()<.5?"rgba(0,0,0,.05)":"rgba(255,255,255,.35)",O.fillRect(Math.random()*X,Math.random()*Y,2,2)},w:128,h:128},cedar:{tw:.14,th:1,draw:(O,X,Y)=>{O.fillStyle="#fff",O.fillRect(0,0,X,Y);for(let de=0;de<2;de++)O.fillStyle="rgba(0,0,0,.42)",O.fillRect(de*X/2,0,3,Y);for(let de=0;de<90;de++)O.fillStyle=Math.random()<.5?"rgba(0,0,0,.10)":"rgba(255,255,255,.16)",O.fillRect(Math.random()*X,Math.random()*Y,1,10+Math.random()*Y*.5)},w:48,h:128},charred:{tw:.2,th:1,draw:(O,X,Y)=>{O.fillStyle="#fff",O.fillRect(0,0,X,Y),O.fillStyle="rgba(0,0,0,.4)",O.fillRect(0,0,3,Y),O.fillRect(X/2,0,3,Y);for(let de=0;de<160;de++)O.fillStyle=Math.random()<.6?"rgba(0,0,0,.18)":"rgba(255,255,255,.1)",O.fillRect(Math.random()*X,Math.random()*Y,1+Math.random()*2,3+Math.random()*14)},w:64,h:128},concrete:{tw:1.6,th:.5,draw:(O,X,Y)=>{O.fillStyle="#fff",O.fillRect(0,0,X,Y);for(let de=0;de<4;de++)O.fillStyle="rgba(0,0,0,.2)",O.fillRect(0,de*Y/4,X,2),O.fillStyle="rgba(255,255,255,.25)",O.fillRect(0,de*Y/4+2,X,1);for(let de=0;de<700;de++)O.fillStyle=Math.random()<.5?"rgba(0,0,0,.07)":"rgba(255,255,255,.2)",O.fillRect(Math.random()*X,Math.random()*Y,1+Math.random()*3,1);O.fillStyle="rgba(0,0,0,.35)",[X*.25,X*.75].forEach(de=>{O.beginPath(),O.arc(de,Y/2+Y/8,2.2,0,6.3),O.fill()})},w:256,h:128},corrugated:{tw:.152,th:1,draw:(O,X,Y)=>{for(let de=0;de<2;de++){let be=O.createLinearGradient(de*X/2,0,(de+1)*X/2,0);be.addColorStop(0,"#8e969a"),be.addColorStop(.5,"#ffffff"),be.addColorStop(1,"#8e969a"),O.fillStyle=be,O.fillRect(de*X/2,0,X/2,Y)}},w:64,h:8},stone:{tw:1.4,th:.7,draw:(O,X,Y)=>{O.fillStyle="#4a4742",O.fillRect(0,0,X,Y);let de=5;for(let be=0;be<de;be++){let Se=-Math.random()*20,ye=be*Y/de,Ge=Y/de-3;for(;Se<X;){let Ke=26+Math.random()*34,Ve=150+Math.random()*90|0;O.fillStyle="rgb("+Ve+","+(Ve-4)+","+(Ve-12)+")",O.fillRect(Se+2,ye+2,Ke-3,Ge),O.fillStyle="rgba(255,255,255,.18)",O.fillRect(Se+2,ye+2,Ke-3,2),O.fillStyle="rgba(0,0,0,.22)",O.fillRect(Se+2,ye+Ge,Ke-3,2),Se+=Ke}}},w:256,h:128},fibrecement:{tw:1.2,th:1.2,draw:(O,X,Y)=>{O.fillStyle="#fff",O.fillRect(0,0,X,Y);for(let de=0;de<500;de++)O.fillStyle=Math.random()<.5?"rgba(0,0,0,.035)":"rgba(255,255,255,.3)",O.fillRect(Math.random()*X,Math.random()*Y,2,2);O.fillStyle="rgba(0,0,0,.5)",O.fillRect(0,0,X,3),O.fillRect(0,0,3,Y),O.fillStyle="rgba(255,255,255,.4)",O.fillRect(3,3,X,1)},w:128,h:128},metal:{tw:.2,th:1,draw:(O,X,Y)=>{let de=O.createLinearGradient(0,0,X,0);de.addColorStop(0,"#aaa"),de.addColorStop(.5,"#fff"),de.addColorStop(1,"#aaa"),O.fillStyle=de,O.fillRect(0,0,X,Y)},w:64,h:8}}[x],j=Qn(B.w,B.h,B.draw);j.repeat.set(1/B.tw,1/B.th),Oe[x]=j}let b=k(new vn({map:Oe[x],bumpMap:Oe[x],bumpScale:x==="plaster"?1.2:x==="stone"?5:3,color:P,roughness:x==="metal"||x==="corrugated"?.4:x==="concrete"?.9:.82,metalness:x==="metal"||x==="corrugated"?.35:0,envMapIntensity:.4}));return x==="brick"?se(b,{maps:[["map","brick-g"],["normalMap","brick-n"]],rep:[1/1.7,1/1.15],ns:1.4}):x==="weatherboard"?se(b,{maps:[["map","siding-g"],["normalMap","siding-n"]],rep:[1/1.4,1/1.4],ns:1.6}):x==="plaster"&&se(b,{maps:[["map","plaster-g"],["normalMap","plaster-n"]],rep:[1/1.6,1/1.6],ns:.8}),b}let nt=null;function it(x){return nt||(nt=Qn(128,8,(P,b,G)=>{for(let B=0;B<b;B+=b/4){let j=P.createLinearGradient(B,0,B+b/4,0);j.addColorStop(0,"#9aa7ac"),j.addColorStop(.5,"#ffffff"),j.addColorStop(1,"#9aa7ac"),P.fillStyle=j,P.fillRect(B,0,b/4,G)}})),se(k(new vn({map:nt,bumpMap:nt,bumpScale:2,roughness:.45,metalness:.3,color:x,side:wn,envMapIntensity:1.1})),{maps:[["normalMap","corr-n"]],rep:[1/1.2,1/1.2],ns:1.1})}function gt(x,P,b,G,B,j,O){let X;if(x==="hip"||x==="flat")X=new yn(b-P,j,B-G),X.translate((P+b)/2,I+j/2,(G+B)/2);else if(x==="gablefront"){let Y=new Bi;Y.moveTo(P,I),Y.lineTo(b,I),Y.lineTo(b,I+j),Y.lineTo((P+b)/2,I+j+O),Y.lineTo(P,I+j),Y.closePath(),X=new ca(Y,{depth:B-G,bevelEnabled:!1}),X.translate(0,0,G)}else{let Y=new Bi;if(x==="gable")Y.moveTo(-B,I),Y.lineTo(-G,I),Y.lineTo(-G,I+j),Y.lineTo(-(G+B)/2,I+j+O),Y.lineTo(-B,I+j);else if(x==="butterfly")Y.moveTo(-B,I),Y.lineTo(-G,I),Y.lineTo(-G,I+j+O),Y.lineTo(-(G+B)/2,I+j),Y.lineTo(-B,I+j+O);else if(x==="stepped"){let de=(G+B)/2;Y.moveTo(-B,I),Y.lineTo(-G,I),Y.lineTo(-G,I+j+2*O+.45),Y.lineTo(-de,I+j+O+.45),Y.lineTo(-de,I+j+O),Y.lineTo(-B,I+j)}else Y.moveTo(-B,I),Y.lineTo(-G,I),Y.lineTo(-G,I+j+O),Y.lineTo(-B,I+j);Y.closePath(),X=new ca(Y,{depth:b-P,bevelEnabled:!1}),X.rotateY(Math.PI/2),X.translate(P,0,0)}return pe(X.toNonIndexed?X.toNonIndexed():X)}function ut(x,P,b,G,B){let j=(b+G)/2;return I+x+P*(1-$t(Math.abs(B-j)/((G-b)/2),0,1))}function ft(x,P,b,G,B,j){let O=(G+B)/2;return x==="butterfly"?I+P+b*$t(Math.abs(j-O)/((B-G)/2),0,1):x==="stepped"?j>=O?I+P+b*$t((B-j)/(B-O),0,1):I+P+b+.45+b*$t((O-j)/(O-G),0,1):x==="skillion"?I+P+b*$t((B-j)/(B-G),0,1):I+P+b*(1-$t(Math.abs(j-O)/((B-G)/2),0,1))}let tn="none";function Rn(x,P,b,G,B,j,O,X,Y){let de=new ke,be=I+j,Se=P-Y,ye=b+Y,Ge=G-Y,Ke=B+Y,Ve=(G+B)/2,It=1/.45,Cn=(ct,Ze)=>{let Mt=new en,Rt=[],Lt=[];(ct.length===4?[[0,1,2],[0,2,3]]:[[0,1,2]]).forEach(Ut=>Ut.forEach(di=>{Rt.push(...ct[di]),Lt.push(...Ze(ct[di]))})),Mt.setAttribute("position",new wt(Rt,3)),Mt.setAttribute("uv",new wt(Lt,2)),Mt.computeVertexNormals();let bn=new Te(Mt,X);bn.castShadow=!0,bn.receiveShadow=!0,de.add(bn)},Ht=k(N(1976105,{roughness:.6}));if(x==="flat"){let ct=k(N(9411222,{roughness:.9}));de.add(_(b-P+.3,.16,B-G+.3,ct,(P+b)/2,be+.08,(G+B)/2));let Ze=k(N(15855074,{roughness:.9})),Mt=.2,Rt=.55;de.add(_(b-P+.3,Rt,Mt,Ze,(P+b)/2,be+Rt/2,B+.15),_(b-P+.3,Rt,Mt,Ze,(P+b)/2,be+Rt/2,G-.15),_(Mt,Rt,B-G+.3,Ze,P-.15,be+Rt/2,(G+B)/2),_(Mt,Rt,B-G+.3,Ze,b+.15,be+Rt/2,(G+B)/2))}else if(x==="hip"){let ct=Math.max(1.4,(b-P)*.3),Ze=Se+ct,Mt=ye-ct,Rt=be+O;if(tn==="villa"){let Lt=k(N(1976105,{roughness:.5}));[Ze,Mt].forEach(bn=>{let Ut=new Te(new vi(.07,.55,8),Lt);Ut.position.set(bn,Rt+.32,Ve),de.add(Ut);let di=new Te(new Vn(.1,10,10),Lt);di.position.set(bn,Rt+.1,Ve),de.add(di)})}Cn([[Se,be,Ke],[ye,be,Ke],[Mt,Rt,Ve],[Ze,Rt,Ve]],Lt=>[Lt[0]*It,0]),Cn([[ye,be,Ge],[Se,be,Ge],[Ze,Rt,Ve],[Mt,Rt,Ve]],Lt=>[Lt[0]*It,0]),Cn([[ye,be,Ke],[ye,be,Ge],[Mt,Rt,Ve]],Lt=>[Lt[2]*It,0]),Cn([[Se,be,Ge],[Se,be,Ke],[Ze,Rt,Ve]],Lt=>[Lt[2]*It,0]),de.add(_(ye-Se,.22,.12,Ht,(Se+ye)/2,be,Ke),_(ye-Se,.22,.12,Ht,(Se+ye)/2,be,Ge),_(.12,.22,Ke-Ge,Ht,Se,be,Ve),_(.12,.22,Ke-Ge,Ht,ye,be,Ve),_(Mt-Ze,.14,.22,Ht,(Ze+Mt)/2,Rt+.05,Ve))}else if(x==="gablefront"){let ct=be+O,Ze=(Se+ye)/2,Mt=Math.hypot(Ze-Se,O),Rt=Math.atan2(O,Ze-Se);Cn([[Se,be,Ke],[Ze,ct,Ke],[Ze,ct,Ge],[Se,be,Ge]],Lt=>[Lt[2]*It,0]),Cn([[ye,be,Ge],[Ze,ct,Ge],[Ze,ct,Ke],[ye,be,Ke]],Lt=>[Lt[2]*It,0]),de.add(_(.12,.22,Ke-Ge,Ht,Se,be,Ve),_(.12,.22,Ke-Ge,Ht,ye,be,Ve),_(.22,.14,Ke-Ge,Ht,Ze,ct+.04,Ve)),[Ge,Ke].forEach(Lt=>{let bn=_(Mt,.14,.12,Ht,(Se+Ze)/2,(be+ct)/2,Lt);bn.rotation.z=Rt,de.add(bn);let Ut=_(Mt,.14,.12,Ht,(ye+Ze)/2,(be+ct)/2,Lt);Ut.rotation.z=-Rt,de.add(Ut)})}else if(x==="gable"){let ct=be+O;Cn([[Se,be,Ke],[ye,be,Ke],[ye,ct,Ve],[Se,ct,Ve]],Ze=>[Ze[0]*It,0]),Cn([[ye,be,Ge],[Se,be,Ge],[Se,ct,Ve],[ye,ct,Ve]],Ze=>[Ze[0]*It,0]),de.add(_(ye-Se,.22,.12,Ht,(Se+ye)/2,be,Ke),_(ye-Se,.22,.12,Ht,(Se+ye)/2,be,Ge),_(ye-Se,.14,.22,Ht,(Se+ye)/2,ct+.04,Ve)),[Se,ye].forEach(Ze=>{let Mt=_(.12,.14,Math.hypot(Ke-Ve,O),Ht,Ze,(be+ct)/2,(Ke+Ve)/2);Mt.rotation.x=Math.atan2(O,Ke-Ve),de.add(Mt);let Rt=_(.12,.14,Math.hypot(Ve-Ge,O),Ht,Ze,(be+ct)/2,(Ve+Ge)/2);Rt.rotation.x=-Math.atan2(O,Ve-Ge),de.add(Rt)})}else if(x==="butterfly"){let ct=be+O;Cn([[Se,ct,Ke],[ye,ct,Ke],[ye,be,Ve],[Se,be,Ve]],Ze=>[Ze[0]*It,0]),Cn([[ye,ct,Ge],[Se,ct,Ge],[Se,be,Ve],[ye,be,Ve]],Ze=>[Ze[0]*It,0]),de.add(_(ye-Se,.22,.12,Ht,(Se+ye)/2,ct,Ke),_(ye-Se,.22,.12,Ht,(Se+ye)/2,ct,Ge),_(ye-Se,.16,.34,Ht,(Se+ye)/2,be,Ve))}else if(x==="stepped"){let Ze=be+O,Mt=be+O+.45,Rt=be+2*O+.45;Cn([[Se,be,Ke],[ye,be,Ke],[ye,Ze,Ve],[Se,Ze,Ve]],bn=>[bn[0]*It,0]),Cn([[Se,Mt,Ve],[ye,Mt,Ve],[ye,Rt,Ge],[Se,Rt,Ge]],bn=>[bn[0]*It,0]),de.add(_(ye-Se,.22,.12,Ht,(Se+ye)/2,be,Ke),_(ye-Se,.22,.12,Ht,(Se+ye)/2,Rt,Ge),_(ye-Se,.14,.16,Ht,(Se+ye)/2,Ze,Ve),_(ye-Se,.14,.16,Ht,(Se+ye)/2,Mt+.05,Ve));let Lt=new Te(new yn(ye-Se-.5,.45-.04,.05),k(new vn({color:8827318,roughness:.05,metalness:.6,transparent:!0,opacity:.85})));Lt.position.set((Se+ye)/2,(Ze+Mt)/2,Ve),de.add(Lt)}else{let ct=be+O;Cn([[Se,be,Ke],[ye,be,Ke],[ye,ct,Ge],[Se,ct,Ge]],Ze=>[Ze[0]*It,0]),de.add(_(ye-Se,.22,.12,Ht,(Se+ye)/2,be,Ke),_(ye-Se,.22,.12,Ht,(Se+ye)/2,ct,Ge)),[Se,ye].forEach(Ze=>{let Mt=_(.12,.16,Math.hypot(Ke-Ge,O),Ht,Ze,(be+ct)/2,(Ge+Ke)/2);Mt.rotation.x=-Math.atan2(O,Ke-Ge),de.add(Mt)})}return de}let At=4,mn=!1,Gt=e.onInside||null,pt=[],Wn=null,Vt=null,Mn=null,al=null,ei=null,as=[],pn=new L(5.6,6,1.2),hi=[],gn="house",Xn=()=>k(new vn({color:8827318,roughness:.04,metalness:.7,transparent:!0,opacity:.82,envMapIntensity:1.4}));function As(x){if(Vt){Vt.traverse(ne=>{ne.geometry&&ne.geometry.dispose()}),oe.remove(Vt);for(let ne=l.length-1;ne>=0;ne--)l[ne].tag===gn&&l.splice(ne,1)}as=[],hi=[],pt=[];let P=new ke;Vt=P,oe.add(P),tn=x.detail||"none";let b=x.roof,G=x.shape==="twostorey",B=x.shape==="lshape",j=x.garage===!0,O=x.garage==="carport",X=b==="skillion"?2.55:b==="butterfly"?2.5:b==="stepped"?2.45:Fe,Y=G?X+2.6:X,de=b==="butterfly"?1.3:b==="stepped"?.85:b==="flat"?.3:b==="hip"?2.1:b==="gable"||b==="gablefront"?2.3:1.5,be=b==="skillion"?2.3:Re,Se=b==="butterfly"?.8:b==="stepped"?.5:b==="flat"?.3:b==="hip"?1.1:b==="gable"||b==="gablefront"?1.3:.9,ye={x0:0,x1:3.8,z0:-9.2,z1:-4.5},Ge=b==="butterfly"?.9:b==="stepped"?.6:b==="flat"?.3:b==="hip"?1.3:b==="gable"||b==="gablefront"?1.4:1,Ke=()=>Ye(x.cladding,x.wall),Ve=new Te(gt(b,A.x0,A.x1,A.z0,A.z1,Y,de),Ke());Ve.castShadow=Ve.receiveShadow=!0;let It=new Te(gt(b,re.x0,re.x1,re.z0,re.z1,be,Se),Ke());It.castShadow=It.receiveShadow=!0;let Cn={cedar:"#b4814f",charred:"#23262a",concrete:"#a3a5a2",corrugated:"#7c8a90",stone:"#a49c90",fibrecement:"#d9d4c8",brick:"#b5543f",plaster:"#ece7da",weatherboard:"#ece7da",boardbatten:"#6b6f68",metal:"#7d8387"},Ht=!!x.accent&&x.accent!=="none",ct=()=>Ye(x.accent,Cn[x.accent]||"#b4814f");Ht&&j&&(It.material=ct());let Ze=new ke;Ze.add(Ve),j&&Ze.add(It);let Mt=null;if(B&&(Mt=new Te(gt(b,ye.x0,ye.x1,ye.z0,ye.z1,X,Ge),Ke()),Mt.castShadow=Mt.receiveShadow=!0,Ze.add(Mt)),[Ve,It].forEach(ne=>{ne.geometry.computeBoundingBox(),ne.userData.top=ne.geometry.boundingBox.max.y}),Ht){if(G){let ae=new Te(pe(new yn(A.x1-A.x0+.06,Y-X,A.z1-A.z0+.06).toNonIndexed()),ct());ae.position.set((A.x0+A.x1)/2,I+X+(Y-X)/2,(A.z0+A.z1)/2),ae.castShadow=ae.receiveShadow=!0,Ze.add(ae)}let ne=(G?Y:X)+.12,ie=new Te(pe(new yn(.95,ne,.32).toNonIndexed()),ct());ie.position.set(A.x1-.4,I+ne/2-.06,A.z1+.14),ie.castShadow=ie.receiveShadow=!0,Ze.add(ie)}P.add(Ze);{let ne=Qn(128,128,(ae,he,ve)=>{let Ae=ae.createRadialGradient(he/2,ve/2,he*.2,he/2,ve/2,he/2);Ae.addColorStop(0,"rgba(0,0,0,.5)"),Ae.addColorStop(.6,"rgba(0,0,0,.22)"),Ae.addColorStop(1,"rgba(0,0,0,0)"),ae.fillStyle=Ae,ae.fillRect(0,0,he,ve)}),ie=new Te(new An(j?25:17,16),new Fn({map:ne,transparent:!0,depthWrite:!1,opacity:.9}));ie.rotation.x=-Math.PI/2,ie.position.set(j?1.4:4.3,.035,0),ie.renderOrder=1,P.add(ie),$(ie,{start:12.4,dur:1.2,kind:"fade",tag:gn,add:!1})}let Rt=I;$(Ze,{start:12,dur:1.3,kind:"custom",tag:gn,add:!1,fn:(ne,ie)=>{let ae=Math.max(.001,ma(ie));Ze.scale.y=ae,Ze.position.y=Rt*(1-ae)}}),Mn=new ke,P.add(Mn);let Lt=new ke;if(Mn.add(Lt),Lt.add(Rn(b,A.x0,A.x1,A.z0,A.z1,Y,de,it(x.roofColor),.6)),j&&Lt.add(Rn(b,re.x0,re.x1,re.z0,re.z1,be,Se,it(x.roofColor),.5)),B&&Lt.add(Rn(b,ye.x0,ye.x1,ye.z0,ye.z1,X,Ge,it(x.roofColor),.5)),O){let ne=k(N(3813158,{roughness:.8})),ie=new ke;[[re.x0+.2,re.z0+.2],[re.x1-.2,re.z0+.2],[re.x0+.2,re.z1-.2],[re.x1-.2,re.z1-.2]].forEach(([he,ve])=>ie.add(_(.16,2.4,.16,ne,he,I+1.2,ve)));let ae=new Te(new yn(re.x1-re.x0+.8,.14,re.z1-re.z0+.8),it(x.roofColor));ae.position.set((re.x0+re.x1)/2,I+2.5,(re.z0+re.z1)/2),ae.castShadow=!0,ie.add(ae),Lt.add(ie)}if($(Lt,{start:12.9,dur:1.3,kind:"drop",tag:gn,add:!1}),x.chimney){let ne=b==="gablefront"?-1.2:1.2,ie=b==="hip"?5.6:b==="gablefront"?6.6:6.2,ae=(b==="gablefront"?ut(Y,de,A.x0-.6,A.x1+.6,ie):ft(b,Y,de,A.z0-.6,A.z1+.6,ne))-.4,he=te(_(.7,2.4,.7,k(N(9189938,{roughness:.95})),0,1.2,0),_(.9,.18,.9,k(N(2239277)),0,2.5,0));he.position.set(ie,ae,ne),Mn.add(he),$(he,{start:13.6,dur:.7,kind:"rise",tag:gn,add:!1}),pn.set(ie,ae+2.6,ne)}if(x.solar){let ne=Qn(64,96,(ae,he,ve)=>{ae.fillStyle="#1a2a4c",ae.fillRect(0,0,he,ve),ae.strokeStyle="rgba(180,200,240,.55)",ae.lineWidth=1;for(let Ae=1;Ae<4;Ae++)ae.beginPath(),ae.moveTo(Ae*he/4,0),ae.lineTo(Ae*he/4,ve),ae.stroke();for(let Ae=1;Ae<6;Ae++)ae.beginPath(),ae.moveTo(0,Ae*ve/6),ae.lineTo(he,Ae*ve/6),ae.stroke()},!1),ie=k(new vn({map:ne,roughness:.25,metalness:.6}));if(b==="gablefront"){let ae=A.x0-.6,he=A.x1+.6,ve=(ae+he)/2,Ae=Math.atan2(de,ve-ae);for(let _t=0;_t<4;_t++)[.3,.62].forEach(dt=>{let at=he-(he-ve)*dt,Ct=_(1.6,.05,1,ie,at,ut(Y,de,ae,he,at)+.1,-3+_t*1.7);Ct.rotation.z=-Ae,Lt.add(Ct)})}else{let ae=A.z0-.6,he=A.z1+.6,ve=Math.atan2(de,b==="skillion"?he-ae:he-(A.z0+A.z1)/2),Ae=b==="skillion"?[.28,.62]:[.34,.7];for(let _t=0;_t<4;_t++)Ae.forEach(dt=>{let at=b==="skillion"?he-(he-ae)*dt:A.z1+.6-(A.z1+.6-(A.z0+A.z1)/2)*dt,Ct=_(1,.05,1.6,ie,1.6+_t*1.2,ft(b,Y,de,ae,he,at)+.1,at);Ct.rotation.x=b==="butterfly"?-ve:ve,Lt.add(Ct)})}}if(x.detail==="bungalow"&&b==="gablefront"){let ne=Qn(64,64,(he,ve,Ae)=>{he.fillStyle="#8a6b4a",he.fillRect(0,0,ve,Ae);for(let _t=0;_t<Ae;_t+=8)he.fillStyle=_t%16?"rgba(0,0,0,.18)":"rgba(255,255,255,.08)",he.fillRect(0,_t,ve,6),he.fillStyle="rgba(0,0,0,.35)",he.fillRect(0,_t+6,ve,2)});ne.repeat.set(4,2);let ie=new Bi;ie.moveTo(A.x0,I+Y),ie.lineTo(A.x1,I+Y),ie.lineTo((A.x0+A.x1)/2,I+Y+de),ie.closePath(),[A.z1+.03,A.z0-.03].forEach((he,ve)=>{let Ae=new Te(new ua(ie),k(new vn({map:ne,roughness:.9})));Ae.position.z=he,ve&&(Ae.rotation.y=Math.PI),Mn.add(Ae)});let ae=k(N(3813158,{roughness:.8}));for(let he=A.z0-.3;he<=A.z1+.3;he+=.7)[A.x0-.55,A.x1+.55].forEach(ve=>Mn.add(_(.12,.12,.35,ae,ve,I+Y-.12,he)))}if(x.detail==="deco"){let ne=k(N(15855074,{roughness:.8})),ie=k(N(15855074,{roughness:.8}));[[A.z1+.05,0],[A.z0-.05,0]].forEach(([ae])=>{[I+1.1,I+Y-.5].forEach(he=>Mn.add(_(A.x1-A.x0+.12,.09,.16,ie,(A.x0+A.x1)/2,he,ae)))}),Mn.add(_(3.4,1.25,.32,ne,A.x0+6.6,I+Y+.62,A.z1+.12)),[-1.1,0,1.1].forEach(ae=>Mn.add(_(.1,1,.36,k(N(13214794,{roughness:.5,metalness:.4})),A.x0+6.6+ae,I+Y+.62,A.z1+.14)))}let bn=[],Ut=k(N(new je(x.joinery),{roughness:.5})),di=Xn(),Ei=k(N(16052714,{roughness:.6})),ze=new ke;P.add(ze);let jt=()=>new Fn({color:13625070,side:wn});function Et(ne,ie,ae,he,ve,Ae,_t){let dt=new ke,at=.07;dt.add(_(ne,at,.14,Ut,0,ie/2-at/2,0),_(ne,at,.14,Ut,0,-ie/2+at/2,0),_(at,ie,.14,Ut,-ne/2+at/2,0,0),_(at,ie,.14,Ut,ne/2-at/2,0,0));for(let Zt=1;Zt<=_t;Zt++)dt.add(_(.05,ie,.1,Ut,-ne/2+ne*Zt/(_t+1),0,0));let Ct=new Te(new An(ne-at*2,ie-at*2),di.clone());Ct.position.z=-.01,dt.add(Ct);let Yt=new Te(new An(ne-at*2,ie-at*2),new Fn({color:16764805,transparent:!0,opacity:0}));Yt.position.z=-.06,dt.add(Yt),as.push(Yt);let St=new Te(new An(ne-at*2,ie-at*2),jt());St.position.z=-.17,dt.add(St),pt.push(St);{let Zt=Math.abs(Ae)<.01?"front":Math.abs(Math.abs(Ae)-Math.PI)<.01?"back":Ae>0?"right":"left",Gi=Zt==="front"||Zt==="back"?ae:ve;(Zt==="front"||Zt==="back"?ae>A.x0+.3&&ae<A.x1-.3:ve>A.z0+.3&&ve<A.z1-.3)&&he-ie/2<I+X-.2&&(Zt!=="right"||ae>A.x1-.2)&&(Zt!=="left"||ae<A.x0+.2)&&(Zt!=="front"||ve<A.z1+.5)&&bn.push({wl:Zt,c:Gi,w:ne-.14,h:ie-.14,y:he})}dt.add(_(ne,.05,.05,Ut,0,ie/2,-.17),_(ne,.05,.05,Ut,0,-ie/2,-.17),_(.05,ie,.05,Ut,-ne/2,0,-.17),_(.05,ie,.05,Ut,ne/2,0,-.17)),x.detail==="villa"&&(dt.add(_(ne,.045,.1,Ut,0,ie*.08,.01)),_t===0&&dt.add(_(.045,ie,.1,Ut,0,0,.01)),dt.add(_(.045,ie*.5,.1,Ut,-ne*.25,-ie*.25,.01),_(.045,ie*.5,.1,Ut,ne*.25,-ie*.25,.01))),dt.add(_(ne+.22,.06,.24,Ei,0,-ie/2-.04,.09),_(ne+.14,.08,.1,Ei,0,ie/2+.05,.04),_(.07,ie+.1,.1,Ei,-ne/2-.06,0,.03),_(.07,ie+.1,.1,Ei,ne/2+.06,0,.03)),dt.position.set(ae,he,ve),dt.rotation.y=Ae,ze.add(dt)}let hn=()=>Ye(x.cladding,x.wall);if(x.windows==="large")Et(4.2,2,A.x0+2.3,I+1.2,A.z1+.03,0,2);else if(x.windows==="floor")Et(5,2.4,A.x0+2.6,I+1.35,A.z1+.03,0,3);else if(x.bay){let ne=A.x0+2.35,ie=A.z1,ae=hn();ze.add(_(.12,2.2,1.1,ae,ne-1.15,I+1.15,ie+.55),_(.12,2.2,1.1,ae,ne+1.15,I+1.15,ie+.55),_(2.4,.5,1.1,ae,ne,I+.4,ie+.55)),Et(2.2,1.4,ne,I+1.6,ie+1.1,0,2);let he=new Te(new yn(2.8,.1,1.6),it(x.roofColor));he.position.set(ne,I+2.38,ie+.7),he.rotation.x=.18,ze.add(he)}else Et(2.9,1.4,A.x0+2.35,I+1.6,A.z1+.03,0,1);if(x.windows==="clerestory"&&!x.bay&&Et(6.6,.36,A.x0+4,I+2.48,A.z1+.03,0,3),x.windows!=="large"&&x.windows!=="floor"&&Et(.9,1.4,A.x0+4.75,I+1.6,A.z1+.03,0,0),Et(.7,2,A.x0+6.05,I+1.15,A.z1+.03,0,0),Et(1.6,1.2,A.x1+.03,I+1.6,0,Math.PI/2,1),Et(1.6,1.2,A.x1+.03,I+1.6,-2.8,Math.PI/2,0),B||Et(2.2,1.2,3,I+1.6,A.z0-.03,Math.PI,1),Et(1.2,1.2,7,I+1.6,A.z0-.03,Math.PI,0),B&&(Et(1.6,1.2,1.9,I+1.6,ye.z0-.03,Math.PI,1),Et(1.4,1.2,ye.x1+.03,I+1.6,-6.9,Math.PI/2,0),Et(1.4,1.2,ye.x0-.03,I+1.6,-6.9,-Math.PI/2,0)),G){let ne=X+.05;Et(2.9,1.4,A.x0+2.35,I+1.6+ne,A.z1+.03,0,1),Et(1.4,1.4,A.x0+5.2,I+1.6+ne,A.z1+.03,0,0),Et(1.4,1.4,A.x0+7.3,I+1.6+ne,A.z1+.03,0,0),Et(1.6,1.2,A.x1+.03,I+1.6+ne,0,Math.PI/2,1),Et(2.2,1.2,3,I+1.6+ne,A.z0-.03,Math.PI,1),Et(1.2,1.2,7,I+1.6+ne,A.z0-.03,Math.PI,0),ze.add(_(8.8,.1,.35,Ut,(A.x0+A.x1)/2,I+X+.05,A.z1+.18))}ei=new ke,ei.position.set(A.x0+6.42,I+1.025,A.z1+.04);let si=x.door==="timber"?k(N(11039817,{roughness:.55})):k(N(new je(x.door),{roughness:.45}));if(ei.add(_(1.05,2.05,.1,si,.525,0,0),_(.4,.9,.04,di.clone(),.525,.45,.07),_(.05,.5,.05,k(N(15919049,{metalness:.7,roughness:.3})),.95,-.1,.1)),ze.add(ei),x.detail==="deco"){let ne=new Te(new cn(.34,.34,.1,24),di.clone());ne.rotation.x=Math.PI/2,ne.position.set(A.x0+5.55,I+1.75,A.z1+.06),ze.add(ne);let ie=new Te(new Jo(.35,.04,8,24),Ut);ie.position.copy(ne.position),ie.position.z+=.04,ze.add(ie)}ze.add(_(.12,2.1,.12,Ut,A.x0+6.38,I+1.05,A.z1+.04));{let ne=new ke;P.add(ne);let ie=A.x0+.13,ae=A.x1-.13,he=A.z0+.13,ve=A.z1-.13,Ae=X-.06,_t=new ke,dt=new ke,at=new ke,Ct=new ke,Yt=new ke;ne.add(_t,dt,at,Ct,Yt);let St=(Je,ot={})=>k(new vn(Object.assign({color:Je,roughness:.9},ot))),Zt=()=>k(new vn({color:15987180,roughness:.95,side:wn})),Gi=St(14268285,{roughness:.7});{let Je=[],ot=(Bt,un,Yn,wl)=>{let zh=Math.max(2,Math.round(Math.hypot(Yn-Bt,wl-un)/.6));for(let Al=0;Al<=zh;Al++){let Hh=Al/zh;Je.push([Bt+(Yn-Bt)*Hh,un+(wl-un)*Hh,Math.atan2(Yn-Bt,wl-un)+Math.PI/2])}};ot(ie,ve,ae,ve),ot(ie,he,ae,he),ot(ie,he,ie,ve),ot(ae,he,ae,ve),ot(5.2,he,5.2,.35),ot(5.2,1.5,5.2,ve);let Pt=new ss(new yn(.05,1,.1),Gi,Je.length),bt=new ln;Je.forEach((Bt,un)=>{bt.position.set(Bt[0],I+Ae/2,Bt[1]),bt.rotation.set(0,Bt[2],0),bt.scale.set(1,Ae,1),bt.updateMatrix(),Pt.setMatrixAt(un,bt.matrix)}),Pt.castShadow=!0,_t.add(Pt),[I+.06,I+Ae-.04,I+Ae*.5].forEach(Bt=>{_t.add(_(ae-ie,.06,.1,Gi,(ie+ae)/2,Bt,ve),_(ae-ie,.06,.1,Gi,(ie+ae)/2,Bt,he),_(.1,.06,ve-he,Gi,ie,Bt,(he+ve)/2),_(.1,.06,ve-he,Gi,ae,Bt,(he+ve)/2))});for(let Bt=ie+.3;Bt<ae;Bt+=.6)_t.add(_(.05,.2,ve-he,Gi,Bt,I+Ae+.04,(he+ve)/2))}let Dr=(Je,ot,Pt)=>{let bt=new Bi;bt.moveTo(0,0),bt.lineTo(Je,0),bt.lineTo(Je,Ae),bt.lineTo(0,Ae),bt.closePath(),ot.forEach(un=>{let Yn=new yr;Yn.moveTo(un.u0,un.v0),Yn.lineTo(un.u1,un.v0),Yn.lineTo(un.u1,un.v1),Yn.lineTo(un.u0,un.v1),Yn.closePath(),bt.holes.push(Yn)});let Bt=new Te(new ua(bt),Zt());Pt(Bt),Bt.receiveShadow=!0,dt.add(Bt)},Ia=(Je,ot,Pt)=>bn.filter(bt=>bt.wl===Je).map(bt=>({u0:Math.max(.03,bt.c-bt.w/2-ot),u1:Math.min(Pt-.03,bt.c+bt.w/2-ot),v0:Math.max(.03,bt.y-bt.h/2-I),v1:Math.min(Ae-.03,bt.y+bt.h/2-I)})),Nh=Ia("front",ie,ae-ie);{let Je=A.x0+6.42+.525;Nh.push({u0:Je-.52-ie,u1:Je+.52-ie,v0:.03,v1:2.04})}Dr(ae-ie,Nh,Je=>Je.position.set(ie,I,ve)),Dr(ae-ie,Ia("back",ie,ae-ie),Je=>Je.position.set(ie,I,he)),Dr(ve-he,Ia("right",he,ve-he),Je=>{Je.rotation.y=-Math.PI/2,Je.position.set(ae,I,he)}),Dr(ve-he,Ia("left",he,ve-he),Je=>{Je.rotation.y=-Math.PI/2,Je.position.set(ie,I,he)}),[[5.2,he,.35],[5.2,1.5,ve]].forEach(([Je,ot,Pt])=>dt.add(_(.1,Ae-.04,Pt-ot,Zt(),Je,I+Ae/2,(ot+Pt)/2))),[[5.2,6,0],[7.1,ae,0]].forEach(([Je,ot,Pt])=>dt.add(_(ot-Je,Ae-.04,.1,Zt(),(Je+ot)/2,I+Ae/2,Pt)));let El=new Te(new An(ae-ie,ve-he),Zt());El.rotation.x=Math.PI/2,El.position.set((ie+ae)/2,I+Ae,(he+ve)/2),dt.add(El);let mf=St(3095101,{roughness:.8});dt.add(_(.05,Ae-.1,4.6,mf,ie+.04,I+Ae/2,1.2));let Oh=Qn(256,256,(Je,ot,Pt)=>{Je.fillStyle="#d2b48a",Je.fillRect(0,0,ot,Pt);for(let bt=0;bt<12;bt++){Je.fillStyle=bt%2?"rgba(0,0,0,.05)":"rgba(255,255,255,.1)",Je.fillRect(0,bt*(Pt/12),ot,Pt/12),Je.fillStyle="rgba(60,40,20,.35)",Je.fillRect(0,bt*(Pt/12),ot,1.5);for(let Bt=0;Bt<5;Bt++)Je.fillStyle="rgba(60,40,20,.15)",Je.fillRect(Math.random()*ot,bt*(Pt/12),1.5,Pt/12)}});Oh.repeat.set(4,4);let La=new Te(new An(ae-ie,ve-he),k(new vn({map:Oh,roughness:.45})));La.rotation.x=-Math.PI/2,La.position.set((ie+ae)/2,I+.025,(he+ve)/2),La.receiveShadow=!0,at.add(La);let gf=St(15987180);[[ae-ie,.1,.03,(ie+ae)/2,I+.07,ve-.02],[ae-ie,.1,.03,(ie+ae)/2,I+.07,he+.02],[.03,.1,ve-he,ie+.02,I+.07,(he+ve)/2],[.03,.1,ve-he,ae-.02,I+.07,(he+ve)/2]].forEach(([Je,ot,Pt,bt,Bt,un])=>at.add(_(Je,ot,Pt,gf,bt,Bt,un)));let Sl=St(2765366,{roughness:.55}),Da=St(15658730,{roughness:.25,metalness:.05}),bl=St(11187384,{roughness:.35,metalness:.6}),Bs=St(11039817,{roughness:.6});Ct.add(_(4.2,.9,.6,Sl,2.2,I+.47,-4.1),_(4.3,.05,.66,Da,2.2,I+.95,-4.08),_(4.2,.55,.03,St(14674152,{roughness:.1}),2.2,I+1.25,-4.4),_(3.2,.7,.36,Sl,1.7,I+2,-4.2),_(.9,.12,.55,bl,3.8,I+1.55,-4.1),_(.8,2,.62,bl,4.7,I+1.02,-4.1)),Ct.add(_(2.7,.9,1,Sl,2.5,I+.47,-2.2),_(2.9,.06,1.15,Da,2.5,I+.96,-2.2),_(.06,.9,1.1,Da,1.08,I+.47,-2.2),_(.06,.9,1.1,Da,3.92,I+.47,-2.2)),[1.7,2.5,3.3].forEach(Je=>{let ot=new ke;ot.add(W(new Te(new cn(.19,.19,.06,16),Bs),0,.68,0),W(new Te(new cn(.03,.03,.66,8),bl),0,.33,0)),ot.position.set(Je,I,-1.35),Ct.add(ot)}),Ct.add(_(1.3,2.15,.55,Bs,6,I+1.1,-4.1),_(.55,.7,.06,St(2765366),7.9,I+1.1,-4.35));let Ur=St(7174782,{roughness:.95}),Fh=St(15327954,{roughness:1}),Ua=St(1778470,{roughness:.5});Yt.add(_(2.7,.42,1,Ur,2.4,I+.25,1.4),_(2.7,.55,.24,Ur,2.4,I+.6,.9),_(.22,.62,1,Ur,1,I+.4,1.4),_(.22,.62,1,Ur,3.8,I+.4,1.4),_(1,.42,1,Ur,4.3,I+.25,2.2),_(3,.03,2,Fh,2.4,I+.04,2.7),_(1.1,.3,.6,Bs,2.4,I+.2,2.7),_(.05,.3,.05,Ua,1.9,I+.05,2.5)),Yt.add(_(.5,.5,2.1,St(2765366,{roughness:.5}),.45,I+.28,2.4),_(.05,.85,1.5,Ua,.28,I+1.35,2.4)),Yt.add(_(1.9,.05,.95,Bs,.95,I+.78,-1)),[[.1,-1.35],[1.8,-1.35],[.1,-.65],[1.8,-.65]].forEach(([Je,ot])=>Yt.add(_(.06,.76,.06,Ua,Je,I+.4,ot))),[[.5,-1.7],[1.4,-1.7],[.5,-.3],[1.4,-.3]].forEach(([Je,ot])=>Yt.add(_(.42,.45,.42,St(3885646,{roughness:.8}),Je,I+.24,ot),_(.42,.4,.05,St(3885646,{roughness:.8}),Je,I+.62,ot+(ot<-1?-.2:.2))));let Bh=new Fn({color:16769712});[1.7,2.5,3.3].forEach(Je=>{let ot=new ke;ot.add(W(new Te(new cn(.01,.01,.9,5),Ua),0,.45,0),W(new Te(new Vn(.2,16,12),Bh),0,-.02,0)),ot.position.set(Je,I+Ae-.9,-2.2),ot.userData.glow=1,Yt.add(ot)});for(let Je=0;Je<4;Je++)for(let ot=0;ot<3;ot++){let Pt=new Te(new vr(.09,12),Bh);Pt.rotation.x=Math.PI/2,Pt.position.set(1+Je*1.2,I+Ae-.01,-3.4+ot*2.6),Yt.add(Pt)}Yt.add(_(1.7,.4,2.1,Fh,7,I+.25,-2.7),_(1.8,.18,.4,St(16777215),7,I+.5,-3.55),_(.7,.4,.3,St(16777215),6.6,I+.55,-3.5),_(.7,.4,.3,St(16777215),7.4,I+.55,-3.5),_(2.1,.9,.08,St(7174782),7,I+.7,-3.75),_(.45,.45,.45,Bs,6,I+.25,-3.5),_(.45,.45,.45,Bs,8,I+.25,-3.5),_(1.9,.04,1.2,St(13227212),7,I+.04,-2));let Tl=(Je,ot,Pt)=>{let bt=new ke;bt.add(W(new Te(new cn(.22*Pt,.18*Pt,.4*Pt,12),St(15327954)),0,.2*Pt,0));for(let Bt=0;Bt<8;Bt++){let un=Bt/8*Math.PI*2,Yn=new Te(new vi(.12*Pt,1.1*Pt,4),St(Bt%2?4090706:5012575));Yn.position.set(Math.cos(un)*.14*Pt,.9*Pt,Math.sin(un)*.14*Pt),Yn.rotation.set(Math.sin(un)*.5,0,-Math.cos(un)*.5),bt.add(Yn)}return bt.position.set(Je,I,ot),bt};Yt.add(Tl(.55,.55,1.3),Tl(4.6,-4,1.1),Tl(8,.9,1),_(.04,1,.7,St(13227212),ie+.06,I+1.7,-.2),_(.04,.7,1.1,St(11883583),ie+.06,I+1.4,-1.6)),Wn={Ifr:_t,Ili:dt,Ifl:at,Ijo:Ct,Ifu:Yt,IN:ne},Ct.children.forEach(Je=>{Je.userData.s=1}),Yt.children.forEach(Je=>{Je.userData.s=1})}$(Wn.IN,{start:13.4,dur:.3,kind:"custom",tag:gn,add:!1,fn:()=>{}});let ki=te(_(2.7,.12,1.5,Ut,0,0,0),_(.14,2.3,.14,k(N(12160606)),-1.2,-1.2,.62),_(.14,2.3,.14,k(N(12160606)),1.2,-1.2,.62),_(.14,.14,1.5,Ut,-1.35,.02,0),_(.14,.14,1.5,Ut,1.35,.02,0));if(ki.position.set(A.x0+6.6,I+2.45,A.z1+.75),x.veranda){let ne=k(N(15921384,{roughness:.6})),ie=k(N(10122312,{roughness:.8})),ae=new ke;ae.add(_(9.6,.12,2.3,ie,(A.x0+A.x1)/2,.12,A.z1+1.2));let he=k(N(9061946,{roughness:.95}));for(let Ae=A.x0-.2;Ae<=A.x1+.3;Ae+=1.75){if(x.detail==="bungalow"){let _t=_(.55,.85,.55,he,Ae,.5,A.z1+2.2);ae.add(_t);let dt=new Te(new cn(.14,.24,1.7,4),ne);dt.rotation.y=Math.PI/4,dt.position.set(Ae,.85+.85,A.z1+2.2),dt.castShadow=!0,ae.add(dt)}else ae.add(_(.13,2.45,.13,ne,Ae,I+1.25,A.z1+2.2));if(x.detail==="villa"){ae.add(_(.5,.05,.05,ne,Ae+.3,I+2.2,A.z1+2.2).rotateZ(-.7),_(.5,.05,.05,ne,Ae-.3,I+2.2,A.z1+2.2).rotateZ(.7));for(let _t=0;_t<7;_t++)ae.add(_(.035,.3,.035,ne,Ae+.2+_t*.2,I+2.3,A.z1+2.2))}else ae.add(_(1.3,.14,.06,ne,Ae+.87,I+2.35,A.z1+2.2))}let ve=new Te(new yn(9.8,.09,2.7),it(x.roofColor));ve.position.set((A.x0+A.x1)/2,I+2.82,A.z1+1.25),ve.rotation.x=.17,ve.castShadow=!0,ae.add(ve),ae.add(_(9.8,.2,.07,ne,(A.x0+A.x1)/2,I+2.6,A.z1+2.46)),ze.add(ae)}else ze.add(ki);if(j){let ne=new ke;ne.add(_(3.3,2,.1,k(N(9280149,{roughness:.55})),0,0,0));for(let ie=0;ie<4;ie++)ne.add(_(3.3,.03,.12,k(N(7306359)),0,-.75+ie*.5,.02));ne.position.set((re.x0+re.x1)/2,I+1,re.z1+.04),ze.add(ne)}if(ze.traverse(ne=>ne.castShadow=!0),$(ze,{start:13.8,dur:1,kind:"pop",tag:gn,add:!1}),x.veranda||$(_(3,.18,1.5,k(N(10989736)),A.x0+6.6,.09,A.z1+.8),{start:13.9,dur:.5,kind:"rise",tag:gn,parent:P}),x.fence&&x.fence!=="none"){let ne=new ke,ie=[[-13,-5.3],[-.5,6.15],[7.75,14.5]],ae=15.2,he=k(N(x.fence==="picket"?16052714:3103301,{roughness:.8}));ie.forEach(([ve,Ae])=>{let _t=Ae-ve,dt=(ve+Ae)/2;if(x.fence==="picket"){ne.add(_(_t,.07,.05,he,dt,.35,ae),_(_t,.07,.05,he,dt,.8,ae));for(let at=ve;at<=Ae;at+=.2){let Ct=_(.09,.95,.03,he,at,.5,ae+.03);ne.add(Ct)}[ve,Ae].forEach(at=>ne.add(_(.12,1.1,.12,he,at,.55,ae)))}else{ne.add(_(_t,1.05,.8,k(N(2841150,{roughness:1})),dt,.55,ae));for(let at=ve+.3;at<Ae;at+=.7){let Ct=new Te(new ha(.42,1),k(N(3501386,{roughness:1})));Ct.position.set(at,1.1,ae),Ct.scale.set(1,.7,1),Ct.castShadow=!0,ne.add(Ct)}}}),$(ne,{start:14.7,dur:.6,kind:"pop",tag:gn,parent:P})}{let ne=k(N(2765880,{roughness:.5,metalness:.3})),ie=k(N(5858666,{roughness:.5,metalness:.4})),ae=new ke,he=.6,ve=I+Y-.06;b!=="gablefront"?ae.add(_(A.x1-A.x0+he*2,.1,.12,ne,(A.x0+A.x1)/2,ve,A.z1+he),_(A.x1-A.x0+he*2,.1,.12,ne,(A.x0+A.x1)/2,ve,A.z0-he)):ae.add(_(.12,.1,A.z1-A.z0+he*2,ne,A.x0-he,ve,0),_(.12,.1,A.z1-A.z0+he*2,ne,A.x1+he,ve,0));let Ae=(Ct,Yt,St)=>{let Zt=new Te(new cn(.045,.045,St-I,8),ie);Zt.position.set(Ct,I+(St-I)/2,Yt),Zt.castShadow=!0,ae.add(Zt)};b!=="gablefront"?(Ae(A.x0+.12,A.z1+.1,ve),Ae(A.x1-.12,A.z1+.1,ve),Ae(A.x1-.12,A.z0-.1,ve)):(Ae(A.x0-.1,A.z1-.2,ve),Ae(A.x1+.1,A.z1-.2,ve)),j&&(ae.add(_(re.x1-re.x0+1,.09,.11,ne,(re.x0+re.x1)/2,I+be-.05,re.z1+.5)),Ae(re.x0+.1,re.z1+.1,I+be-.05));let _t=(Ct,Yt,St)=>{let Zt=new ke;return Zt.add(_(.55,.95,.7,k(N(3095101,{roughness:.8})),0,.5,0),_(.6,.08,.75,k(N(St,{roughness:.6})),0,1,0)),Zt.position.set(Ct,0,Yt),Zt.rotation.y=.1,Zt};ae.add(_t(re.x1+.9,re.z1+1.4,15123514),_t(re.x1+1.7,re.z1+1.5,12727348));let dt=k(N(5916210,{roughness:.9}));ae.add(_(5.4,.22,.6,dt,A.x0+2.6,.12,A.z1+.55),_(5.4,.1,.5,k(N(3878691,{roughness:1})),A.x0+2.6,.2,A.z1+.55)),ae.add(W(new Te(new cn(.6,.6,1.9,16),k(N(6979462,{roughness:.55,metalness:.3}))),A.x1-1.6,.95,A.z0-1.2));let at=new ke;[-1,1].forEach(Ct=>at.add(_(.06,2,.06,ie,Ct*1.2,1,0))),at.add(_(2.4,.04,.04,ie,0,2,0),_(2.4,.04,.04,ie,0,1.85,.25)),at.position.set(A.x1+1.5,0,-6.4),ae.add(at),$(ae,{start:14.5,dur:.8,kind:"fade",tag:gn,parent:P})}if(x.deck){let ne=new ke,ie=k(N(10122312,{roughness:.8})),ae=k(N(3813158));ne.add(_(3.6,.14,5,ie,A.x1+1.9,.12,-1.8));for(let he=0;he<4;he++)ne.add(_(.12,2.5,.12,ae,A.x1+(he%2?3.6:.2),1.35,he<2?-4.2:.4));for(let he=0;he<10;he++)ne.add(_(.06,.1,5.2,ae,A.x1+.15+he*.38,2.6,-1.9));ne.add(_(3.8,.12,.12,ae,A.x1+1.9,2.55,-4.2),_(3.8,.12,.12,ae,A.x1+1.9,2.55,.4)),$(ne,{start:14.3,dur:.9,kind:"pop",tag:gn,parent:P})}if(x.patio){let ne=new ke,ie=k(N(3813158,{roughness:.7})),ae=k(N(10122312,{roughness:.8})),he=k(N(14210248,{roughness:.5})),ve=A.z1+.3,Ae=A.z1+3.9,_t=(ve+Ae)/2,dt=A.x0+.3,at=A.x0+4.7,Ct=(dt+at)/2;ne.add(_(at-dt,.1,Ae-ve,ae,Ct,.1,_t)),[[dt,ve],[at,ve],[dt,Ae],[at,Ae]].forEach(([Yt,St])=>ne.add(_(.14,2.5,.14,ie,Yt,1.4,St))),ne.add(_(at-dt,.14,.14,ie,Ct,2.7,ve),_(at-dt,.14,.14,ie,Ct,2.7,Ae));for(let Yt=0;Yt<9;Yt++){let St=_(.2,.04,Ae-ve-.2,he,dt+.25+Yt*.5,2.78,_t);St.rotation.z=.45,ne.add(St)}ne.add(_(1.7,.4,.8,k(N(5858666,{roughness:.8})),Ct,.4,_t+.2),_(1.7,.2,.55,k(N(15262418,{roughness:.9})),Ct,.7,_t+.12)),$(ne,{start:14.4,dur:.8,kind:"pop",tag:gn,parent:P})}if(x.pool){let ne=new ke,ie=k(N(14210248,{roughness:.8}));ne.add(_(5.4,.1,3.6,ie,11.6,.1,8.6));let ae=new Te(new yn(4.6,.06,2.8),k(new vn({color:4174020,roughness:.05,metalness:.2,transparent:!0,opacity:.88,emissive:737098,emissiveIntensity:.55})));ae.position.set(11.6,.17,8.6),ne.add(ae),$(ne,{start:14.5,dur:.7,kind:"pop",tag:gn,parent:P})}if(x.screen){let ne=new ke,ie=k(N(10119742,{roughness:.7})),ae=k(N(1976105,{roughness:.6}));for(let he=0;he<9;he++)ne.add(_(.07,2.5,.1,ie,A.x0+5.1,I+1.25,A.z1+.15+he*.26));ne.add(_(.1,.1,2.4,ae,A.x0+5.1,I+2.55,A.z1+1.25),_(.1,.1,2.4,ae,A.x0+5.1,I+.05,A.z1+1.25)),$(ne,{start:14.1,dur:.7,kind:"pop",tag:gn,parent:P})}if(G&&x.balcony){let ne=new ke,ie=k(N(14473420,{roughness:.7})),ae=k(new vn({color:10473688,roughness:.05,metalness:.2,transparent:!0,opacity:.35,side:wn}));ne.add(_(5.4,.16,1.7,ie,A.x0+3,I+X+.02,A.z1+.9)),ne.add(_(5.4,.95,.04,ae,A.x0+3,I+X+.62,A.z1+1.72),_(.04,.95,1.6,ae,A.x0+.3,I+X+.62,A.z1+.95),_(.04,.95,1.6,ae,A.x0+5.7,I+X+.62,A.z1+.95),_(5.5,.05,.06,k(N(1449499)),A.x0+3,I+X+1.1,A.z1+1.72)),$(ne,{start:14.2,dur:.7,kind:"pop",tag:gn,parent:P})}if(x.driveway&&(j||O)){let ne=new ke;ne.add(_(re.x1-re.x0-.3,.06,15.1-re.z1,k(N(12170926,{roughness:.95})),(re.x0+re.x1)/2,.04,(re.z1+15.1)/2));for(let ie=1;ie<4;ie++)ne.add(_(re.x1-re.x0-.3,.07,.03,k(N(7828588)),(re.x0+re.x1)/2,.05,re.z1+ie*(15.1-re.z1)/4));$(ne,{start:14,dur:.6,kind:"fade",tag:gn,parent:P})}return[["LIVING",2.4,1.6],["KITCHEN",2.6,-2.2],["BEDROOM",7,-2.4],["ENTRY",6.9,2.4],[O?"CARPORT":"GARAGE",-2.6,.1]].concat(B?[["BEDROOM 2",1.9,-7]]:[]).forEach(([ne,ie,ae])=>{if((ne==="GARAGE"||ne==="CARPORT")&&!j&&!O)return;let he=document.createElement("canvas");he.width=256,he.height=64;let ve=he.getContext("2d");ve.fillStyle="rgba(15,28,23,.82)",ve.beginPath(),ve.roundRect(0,6,256,52,26),ve.fill(),ve.fillStyle="#eef2ea",ve.font='600 28px "IBM Plex Mono",monospace',ve.textAlign="center",ve.textBaseline="middle",ve.fillText(ne,128,33);let Ae=new zo(new na({map:new xr(he),transparent:!0,depthTest:!1}));Ae.scale.set(2.8,.7,1),Ae.position.set(ie,I+1.1,ae),Ae.visible=!1,Ae.renderOrder=10,P.add(Ae),hi.push(Ae)}),P}function os(x){if(!Wn)return;let P=j=>$t(j,0,1);Wn.Ifr.visible=x<.985;let b=P(x);Wn.Ili.visible=b>0,ce(Wn.Ili,b);let G=P(x-1);Wn.Ifl.visible=G>0,ce(Wn.Ifl,G);let B=(j,O)=>{j.visible=O>0;let X=j.children.length;j.children.forEach((Y,de)=>{let be=P(O*(X+4)-de);Y.visible=be>0;let Se=be>=1?1:Math.max(.001,ph(be));Y.scale.setScalar(Se),Y.userData.glow&&Y.traverse(ye=>{})})};B(Wn.Ijo,P(x-2)),B(Wn.Ifu,P(x-3))}As(K),os(At);let Xt=0,_n=0,ls=!1,ol=0,ll=0,wr=1,Rs=null;function cl(x){l.forEach(P=>{let b=$t((Xt-P.start)/P.dur,0,1),G=P.end!=null?1-$t((Xt-P.end)/.7,0,1):1,B=P.o;if(b<=0||G<=0){B.visible=!1;return}B.visible=!0;let j=Qd(b);switch(P.kind){case"fade":ce(B,j*G);break;case"pop":{let O=Math.max(.001,ph(b))*G;B.scale.set(P.sx*O,P.sy*O,P.sz*O);break}case"grow":{let O=Math.max(.001,ph(b))*G;B.scale.set(P.sx*O,P.sy*O,P.sz*O);break}case"rise":B.scale.y=P.sy*Math.max(.001,ma(b));break;case"drop":B.position.y=P.py+(1-ma(b))*6,ce(B,Math.min(1,b*3));break;case"custom":P.fn&&P.fn(x,b),P.end!=null&&ce(B,G);break}P.fn&&P.kind!=="custom"&&P.fn(x,b)})}function sf(){if(s)return D("golden",1);let x=Rs||(K.tod!=="auto"?K.tod:null);if(x&&Xt>=15.9)return D(x,1);let P=Qd($t((Xt-13.6)/2.4,0,1));return D("golden",P,"day")}let Cs=0,mh=0;function gh(x,P){let b=sf(),G=P?1:Math.min(1,x*3.2);r&&b.sp.applyAxisAngle(new L(0,1,0),mh),["top","mid","bot","fog","hemi","hemiG","sun"].forEach(O=>T[O].lerp(b[O],G)),["fogFar","hi","si","exp","li"].forEach(O=>T[O]+=(b[O]-T[O])*G),T.sp.lerp(b.sp,G),u.top.value.copy(T.top),u.mid.value.copy(T.mid),u.bot.value.copy(T.bot),a.fog.color.copy(T.fog),r||(a.fog.far=T.fogFar),u.sd.value.copy(T.sp).normalize(),u.sc.value.copy(T.sun),u.t.value+=x,m.color.copy(T.hemi),m.groundColor.copy(T.hemiG),m.intensity=T.hi,g.color.copy(T.sun),g.intensity=T.si,g.position.copy(T.sp),n.toneMappingExposure=T.exp,a.environmentIntensity=$t((T.hi-.45)*.62,0,.6);let B=T.li>.5&&Xt>=15.3?1:0;Cs+=(B-Cs)*Math.min(1,x*(B>Cs?.45:2.5)),P&&!B&&(Cs=0);let j=$t(T.li,0,1)*Cs;as.forEach((O,X)=>{O.material.opacity=$t(Cs*1.7-X*.11,0,1)*$t(T.li,0,1)*.92}),p.intensity=j*2.4,f.intensity=mn?.5+2.4*$t(At-3,0,1):Math.max(j*1.4,ui?1.6:0)*(ui&&ni>=6||j?1:0),S.intensity=f.intensity*.8}let ti=new L(0,r?3.3:s?7.6:7.5,2),_h=-.28,hl=.07,va=28,xh=0,yh=0;s&&window.addEventListener("pointermove",x=>{xh=(x.clientX/window.innerWidth-.5)*2,yh=(x.clientY/window.innerHeight-.5)*2},{passive:!0});let Bn=-.5,Zn=1.44,Ps=26,Is=Bn,Ar=Zn,Ls=!1,Ds=0,Us=0,Ma=!1,Ea=0,Jn=n.domElement;Jn.addEventListener("pointerdown",x=>{if(mn){Ls=!0,Ds=x.clientX,Us=x.clientY,Jn.setPointerCapture(x.pointerId),Jn.style.cursor="grabbing";return}ui||s||r||(Ls=!0,Ds=x.clientX,Us=x.clientY,Ma=!0,Ea=0,Jn.setPointerCapture(x.pointerId),Jn.style.cursor="grabbing")}),Jn.addEventListener("pointermove",x=>{if(Ls){if(mn){Ta=$t(Ta-(x.clientX-Ds)*.005,-1.2,1.2),wa=$t(wa-(x.clientY-Us)*.002,-.35,.35),Ds=x.clientX,Us=x.clientY;return}Is-=(x.clientX-Ds)*.0075,Ar=$t(Ar-(x.clientY-Us)*.0055,.45,1.5),Ds=x.clientX,Us=x.clientY}});let vh=()=>{Ls=!1,Jn.style.cursor=ui?"default":"grab",Ea=0};Jn.addEventListener("pointerup",vh),Jn.addEventListener("pointercancel",vh);function Mh(){Bn+=(Is-Bn)*.12,Zn+=(Ar-Zn)*.12,o.position.set(ti.x+Ps*Math.sin(Zn)*Math.sin(Bn),ti.y+Ps*Math.cos(Zn),ti.z+Ps*Math.sin(Zn)*Math.cos(Bn)),o.lookAt(ti)}let ul=600,dl=400;function Eh(){let x=i.clientWidth||600,P=i.clientHeight||400;if(ul=x,dl=P,n.setSize(x,P,!1),o.aspect=x/P,r)o.fov=26,va=Math.max(24,46/(x/P)),o.clearViewOffset();else if(s){let b=x/P>1.15;Ps=b?x/P>1.8?30:33:38,o.setViewOffset(x,P,b?x*.03:0,b?-P*.03:-P*.02,x,P)}else Ps=x/P<1.1?36:x/P<1.5?27:24,o.clearViewOffset();o.updateProjectionMatrix()}let Sh=new ResizeObserver(Eh);Sh.observe(i),Eh();let Nt=(x,P,b)=>Qx(x,P,b),Ns=[{p:Nt(-4,2,26),l:Nt(2.5,1.8,3)},{p:Nt(11,2.6,16),l:Nt(4.3,2,3.5)},{p:Nt(13,5.4,9),l:Nt(4.3,3.4,2)},{p:Nt(19,2.4,6),l:Nt(12.5,3.6,.5)},{p:Nt(15,3.2,-12),l:Nt(5,1.8,-2)},{p:Nt(4.3,23,15),l:Nt(3,0,.5),cut:!0},{p:Nt(6.95,1.6,8.8),l:Nt(6.95,1.4,4.4),open:!0},{p:Nt(6.4,1.6,3.5),l:Nt(2.5,1.2,1.8),open:!0},{p:Nt(4.7,1.6,-.4),l:Nt(1.4,1.1,-3.4),open:!0},{p:Nt(5.9,1.6,.9),l:Nt(7.4,.9,-2.8),open:!0},{p:Nt(-9,3.4,23),l:Nt(2.5,2.2,3),tod:"golden"}],ui=!1,ni=0,cs=0,Rr=!0,fl=new L,pl=new L,ml=new L,bh=new L,Sa=e.onTour||null,gl=0,rf=5.2,af=2.4;function Cr(x){ni=$t(x,0,Ns.length-1);let P=Ns[ni];fl.copy(o.position);let b=new L;o.getWorldDirection(b),pl.copy(o.position).addScaledVector(b,10),cs=0,gl=0,ls=!!P.cut,ll=P.open?1:0,Rs=P.tod||(K.tod!=="auto"?K.tod:null),Sa&&Sa(ni,nf[ni],!0)}function of(){Xt=_n=16,qn=!1,ui=!0,Ma=!0,Jn.style.cursor="default";let x=Ns[0];o.position.copy(x.p),fl.copy(x.p),pl.copy(x.l),Cr(0),cs=1}function Th(){ui=!1,ls=!1,ll=0,Rs=null,Is=Bn,Ar=Zn,Jn.style.cursor="grab",Sa&&Sa(-1,null,!1)}let Hi=new L,lf=[new L(26,41,-116),new L(-36,1.5,-66),new L(2.6,5.2,1)],cf=[{p:Nt(.9,1.55,3.6),l:Nt(4.8,1.2,-2.8)},{p:Nt(1,1.5,3.5),l:Nt(4.6,1.2,-3)},{p:Nt(4.7,1.55,3.7),l:Nt(1,.2,-2.6)},{p:Nt(4.4,1.6,1.8),l:Nt(2.3,.95,-4)},{p:Nt(4.6,1.6,3.7),l:Nt(.7,1,-1.6)}],ii=4,Os=!0,ba=0,_l=-1,Ta=0,wa=0,xl=new L,yl=new L,vl=!1,hf=4.6;function uf(){Fs(),Xt=_n=16,qn=!1,mn=!0,Ma=!0,At=0,ii=0,Os=!0,ba=0,vl=!1,_l=-1,Ta=0,wa=0,ls=!1,pt.forEach(x=>x.visible=!1),Rs="day",Jn.style.cursor="grab",os(At)}function wh(){mn=!1,At=4,ii=4,os(4),pt.forEach(x=>x.visible=!0),Rs=null,Is=Bn,Ar=Zn,Jn.style.cursor="grab",Gt&&Gt(-1,4)}function df(x){Os&&(ii<4?ii=Math.min(4,ii+x/hf):(ba+=x,ba>7&&(ba=0,ii=0,At=0))),At+=(ii-At)*Math.min(1,x*(Os?2.2:3.5)),Math.abs(ii-At)<.002&&(At=ii),os(At);let P=Math.min(4,Math.round(At));P!==_l&&(_l=P,Gt&&Gt(P,At)),Rs=At>3.3?"golden":"day";let b=cf[P];vl||(xl.copy(b.p),yl.copy(b.l),vl=!0),xl.lerp(b.p,Math.min(1,x*1.6)),yl.lerp(b.l,Math.min(1,x*1.6));let G=xl.clone();G.x+=Math.sin(zn*.35)*.14,G.z+=Math.cos(zn*.3)*.1;let B=new L().subVectors(yl,G),j=B.length();B.applyAxisAngle(new L(0,1,0),Ta),B.y+=wa*j,o.position.copy(G),o.lookAt(G.clone().add(B))}let Aa=!1,qn=e.autoplay!==!1&&!t&&!e.startFinished,Ah=!0,Ml=0,Ra=performance.now(),hs=0,zn=0,Rh=e.onProgress||null,ff=e.speed||(s?16/15:16/20);(t||e.startFinished)&&(Xt=_n=16,qn=!1,e.tod&&(K.tod=e.tod));let Ch=0,Ph=-1,Ih=0,Pr=16.7,Ca=0,Pa=0,Lh=0,Ir=n.getPixelRatio();function pf(x){let P=Math.min(250,Ca?x-Ca:16.7);if(Ca=x,Pa++,Pr=Pr*.94+P*.06,s&&Pa>90&&Ir<=.75&&Pr>46&&!Aa){Aa=!0,i.dispatchEvent(new CustomEvent("h3d-lite"));return}Pa>60&&Pr>27&&x-Lh>1500&&Ir>.75&&(Lh=x,Ir=Math.max(.75,Ir-.25),n.setPixelRatio(Ir),n.setSize(ul,dl,!1),Pr=16.7,Pa=60)}function Dh(x){if(Ml=requestAnimationFrame(Dh),!Ah||Aa){Ca=0;return}if(pf(x),s){if(x-Ch<30)return;Ch=x,(Math.abs(Xt-Ph)>.03||x-Ih>1500)&&(n.shadowMap.needsUpdate=!0,Ph=Xt,Ih=x)}let P=Math.min(.05,(x-Ra)/1e3);Ra=x,zn+=P,qn&&!ui&&(_n<16?_n=Math.min(16,_n+P*ff):s?e.loop&&(hs+=P,hs>3.5&&(hs=0,_n=0)):(hs+=P,hs>5&&(hs=0,_n=0,Xt=0))),Xt+=(_n-Xt)*Math.min(1,P*(qn?6:4.5)),Math.abs(_n-Xt)<.002&&(Xt=_n),Ls||(Ea+=P),h.constant+=((ls?2.45:100)-h.constant)*Math.min(1,P*(ls?5:3)),Mn&&(Mn.visible=!(ls&&h.constant<20)),hi.forEach(G=>G.visible=ls&&h.constant<12),ol+=(ll-ol)*Math.min(1,P*3),ei&&(ei.rotation.y=-ol*1.7),wr<1&&(wr=Math.min(1,wr+P*2.2),Vt.scale.setScalar(.96+.04*ma(wr))),Be.offset.set(zn*.003,zn*.0015),qe.forEach((G,B)=>{let j=(zn*.12+B/3)%1;G.position.z=-34.2-j*5,G.material.opacity=.55*(1-j),G.scale.y=1+j*1.5}),q.forEach((G,B)=>{G.position.y=.1+Math.sin(zn*.9+B*1.7)*.12,G.rotation.z=Math.sin(zn*.7+B)*.03});let b=K.chimney?$t((Xt-15.6)/.4,0,1):0;if(Q.forEach((G,B)=>{let j=(zn*.35+B/Q.length)%1;G.visible=b>0,G.position.set(pn.x+j*1.2+Math.sin(zn+B)*.1,pn.y+j*3.2,pn.z),G.scale.setScalar(.5+j*2),G.material.opacity=b*.4*(1-j)*Math.min(1,j*6)}),mn)df(P);else if(ui){cs=Math.min(1,cs+P/rf);let G=jx(cs),B=Ns[ni];ml.copy(fl).lerp(B.p,G),bh.copy(pl).lerp(B.l,G),ml.y+=Math.sin(zn*.8)*.05,o.position.copy(ml),o.lookAt(bh),cs>=1&&Rr&&(gl+=P,gl>af&&(ni<Ns.length-1?Cr(ni+1):Rr=!1))}else if(r){Bn+=(_h-Bn)*.18;let G=Math.cos(hl);o.position.set(ti.x+va*Math.sin(Bn)*G,ti.y+va*Math.sin(hl),ti.z+va*Math.cos(Bn)*G),o.lookAt(ti)}else if(s){let G=$t(window.scrollY/Math.max(1,window.innerHeight),0,1),B=-.34+Math.sin(zn*.1)*.1+xh*.08+G*.7,j=1.43-yh*.025-G*.12,O=Ps*(1-G*.2);Bn+=(B-Bn)*.06,Zn+=(j-Zn)*.06,o.position.set(ti.x+O*Math.sin(Zn)*Math.sin(Bn),ti.y+O*Math.cos(Zn),ti.z+O*Math.sin(Zn)*Math.cos(Bn)),o.lookAt(ti)}else!t&&(!Ma||Ea>5)&&!Ls&&(Is+=(-.5+Math.sin(zn*.16)*.8-Is)*.02),Mh();if(cl(zn),gh(P,!1),n.render(a,o),Rh&&Rh(Xt),e.onAnchors){let G=lf.map(B=>(Hi.copy(B).project(o),{x:(Hi.x*.5+.5)*ul,y:(-Hi.y*.5+.5)*dl,v:Hi.z<1&&Hi.x>-1.05&&Hi.x<1.05&&Hi.y>-1.05&&Hi.y<1.05}));e.onAnchors(G)}}cl(0),Mh(),gh(1,!0),n.render(a,o);let Uh=new IntersectionObserver(x=>{Ah=x[0].isIntersecting,Ra=performance.now()},{threshold:.05});return Uh.observe(i),Ml=requestAnimationFrame(Dh),{setProgress(x){Fs(),Lr(),_n=$t(x,0,16),qn=!1},goStage(x){Fs(),Lr(),_n=$t(x*4,0,16),qn=!1},resume(){ui||mn||(qn=!0,_n>=16&&s&&(_n=0))},play(){Fs(),Lr(),qn=!0,_n>=16&&(_n=0,Xt=0)},pause(){qn=!1},setCutView(x,P){_h=x,P!=null&&(hl=P)},setSun(x){mh=x},setHeld(x){Aa=!!x,Ra=performance.now()},get playing(){return qn},get progress(){return Xt},getDesign(){return Object.assign({},K)},setDesign(x,P){Fs(),K=Object.assign({},K,x),!P&&Xt<15.9&&(_n=16,Xt=16,qn=!1),As(K),os(At),pt.forEach(b=>b.visible=!mn),wr=0,cl(zn)},setTod(x){K.tod=x,Xt<15.9&&(_n=16,Xt=16,qn=!1)},buildNow(){Fs(),Lr(),_n=0,Xt=0,hs=0,qn=!0},startTour(){Lr(),of()},stopTour(){Th()},startInside(){uf()},stopInside(){wh()},setInsideStage(x){Os=!1,ii=$t(x,0,4)},insideAutoplay(x){Os=!!x,x&&ii>=4&&(ii=0,At=0)},get insideOn(){return mn},get insideAuto(){return Os},tourNext(){Rr=!1,Cr(ni+1)},tourPrev(){Rr=!1,Cr(ni-1)},tourAutoplay(x){Rr=x,x&&ni>=Ns.length-1&&cs>=1&&Cr(0)},get touring(){return ui},get tourIndex(){return ni},dispose(){cancelAnimationFrame(Ml),Sh.disconnect(),Uh.disconnect(),n.dispose(),n.domElement.remove()}};function Fs(){ui&&Th()}function Lr(){mn&&wh()}}return Ef(ny);})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
