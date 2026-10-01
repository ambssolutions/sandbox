var House3D=(()=>{var To=Object.defineProperty;var Yu=Object.getOwnPropertyDescriptor;var Zu=Object.getOwnPropertyNames;var Ju=Object.prototype.hasOwnProperty;var $u=(i,e)=>{for(var t in e)To(i,t,{get:e[t],enumerable:!0})},Ku=(i,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of Zu(e))!Ju.call(i,s)&&s!==t&&To(i,s,{get:()=>e[s],enumerable:!(n=Yu(e,s))||n.enumerable});return i};var Qu=i=>Ku(To({},"__esModule",{value:!0}),i);var I_={};$u(I_,{DESIGN_DEFAULT:()=>Fu,TOUR_STEPS:()=>Bu,createHouseScene:()=>L_});var ju=0,El=1,ed=2;var cu=1,il=2,fi=3,Bi=0,an=1,An=2;var Di=0,Ns=1,bl=2,Tl=3,wl=4,td=5,es=100,nd=101,id=102,Al=103,Rl=104,sd=200,rd=201,ad=202,od=203,hc=204,uc=205,cd=206,ld=207,hd=208,ud=209,dd=210,fd=211,pd=212,md=213,gd=214,_d=0,xd=1,yd=2,Sa=3,vd=4,Md=5,Sd=6,Ed=7,lu=0,bd=1,Td=2,Ni=0,wd=1,Ad=2,Rd=3,sl=4,Cd=5,Pd=6;var hu=300,Bs=301,zs=302,dc=303,fc=304,ho=306,dr=1e3,Zn=1001,pc=1002,wn=1003,Cl=1004;var wo=1005;var Fn=1006,Ld=1007;var fr=1008;var Oi=1009,Id=1010,Ud=1011,rl=1012,uu=1013,Li=1014,Ii=1015,pr=1016,du=1017,fu=1018,ns=1020,Dd=1021,Jn=1023,Nd=1024,Od=1025,is=1026,Hs=1027,Fd=1028,pu=1029,Bd=1030,mu=1031,gu=1033,Ao=33776,Ro=33777,Co=33778,Po=33779,Pl=35840,Ll=35841,Il=35842,Ul=35843,_u=36196,Dl=37492,Nl=37496,Ol=37808,Fl=37809,Bl=37810,zl=37811,Hl=37812,kl=37813,Vl=37814,Gl=37815,Wl=37816,Xl=37817,ql=37818,Yl=37819,Zl=37820,Jl=37821,Lo=36492,$l=36494,Kl=36495,zd=36283,Ql=36284,jl=36285,eh=36286;var Ea=2300,ba=2301,Io=2302,th=2400,nh=2401,ih=2402;var xu=3e3,ss=3001,Hd=3200,kd=3201,yu=0,Vd=1,Bn="",Kt="srgb",_i="srgb-linear",al="display-p3",uo="display-p3-linear",Ta="linear",Bt="srgb",wa="rec709",Aa="p3";var us=7680;var sh=519,Gd=512,Wd=513,Xd=514,vu=515,qd=516,Yd=517,Zd=518,Jd=519,mc=35044;var rh="300 es",gc=1035,mi=2e3,Ra=2001,zi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ma=Math.PI/180,_c=180/Math.PI;function gi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(gn[i&255]+gn[i>>8&255]+gn[i>>16&255]+gn[i>>24&255]+"-"+gn[e&255]+gn[e>>8&255]+"-"+gn[e>>16&15|64]+gn[e>>24&255]+"-"+gn[t&63|128]+gn[t>>8&255]+"-"+gn[t>>16&255]+gn[t>>24&255]+gn[n&255]+gn[n>>8&255]+gn[n>>16&255]+gn[n>>24&255]).toLowerCase()}function xn(i,e,t){return Math.max(e,Math.min(t,i))}function $d(i,e){return(i%e+e)%e}function Uo(i,e,t){return(1-t)*i+t*e}function ah(i){return(i&i-1)===0&&i!==0}function xc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function pi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ut(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var me=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(xn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},gt=class i{constructor(e,t,n,s,r,a,o,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],m=n[5],g=n[8],y=s[0],p=s[3],f=s[6],M=s[1],x=s[4],A=s[7],w=s[2],_=s[5],L=s[8];return r[0]=a*y+o*M+c*w,r[3]=a*p+o*x+c*_,r[6]=a*f+o*A+c*L,r[1]=l*y+h*M+u*w,r[4]=l*p+h*x+u*_,r[7]=l*f+h*A+u*L,r[2]=d*y+m*M+g*w,r[5]=d*p+m*x+g*_,r[8]=d*f+m*A+g*L,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*r,m=l*r-a*c,g=t*u+n*d+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=u*y,e[1]=(s*l-h*n)*y,e[2]=(o*n-s*a)*y,e[3]=d*y,e[4]=(h*t-s*c)*y,e[5]=(s*r-o*t)*y,e[6]=m*y,e[7]=(n*c-l*t)*y,e[8]=(a*t-n*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Do.makeScale(e,t)),this}rotate(e){return this.premultiply(Do.makeRotation(-e)),this}translate(e,t){return this.premultiply(Do.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Do=new gt;function Mu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ca(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Kd(){let i=Ca("canvas");return i.style.display="block",i}var oh={};function cr(i){i in oh||(oh[i]=!0,console.warn(i))}var ch=new gt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),lh=new gt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),zr={[_i]:{transfer:Ta,primaries:wa,toReference:i=>i,fromReference:i=>i},[Kt]:{transfer:Bt,primaries:wa,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[uo]:{transfer:Ta,primaries:Aa,toReference:i=>i.applyMatrix3(lh),fromReference:i=>i.applyMatrix3(ch)},[al]:{transfer:Bt,primaries:Aa,toReference:i=>i.convertSRGBToLinear().applyMatrix3(lh),fromReference:i=>i.applyMatrix3(ch).convertLinearToSRGB()}},Qd=new Set([_i,uo]),Pt={enabled:!0,_workingColorSpace:_i,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Qd.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=zr[e].toReference,s=zr[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return zr[i].primaries},getTransfer:function(i){return i===Bn?Ta:zr[i].transfer}};function Os(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function No(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ds,Pa=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ds===void 0&&(ds=Ca("canvas")),ds.width=e.width,ds.height=e.height;let n=ds.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ds}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ca("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Os(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Os(t[n]/255)*255):t[n]=Os(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},jd=0,La=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jd++}),this.uuid=gi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Oo(s[a].image)):r.push(Oo(s[a]))}else r=Oo(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Oo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Pa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var ef=0,zn=class i extends zi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Zn,s=Zn,r=Fn,a=fr,o=Jn,c=Oi,l=i.DEFAULT_ANISOTROPY,h=Bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ef++}),this.uuid=gi(),this.name="",this.source=new La(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new me(0,0),this.repeat=new me(1,1),this.center=new me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(cr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===ss?Kt:Bn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case dr:e.x=e.x-Math.floor(e.x);break;case Zn:e.x=e.x<0?0:1;break;case pc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case dr:e.y=e.y-Math.floor(e.y);break;case Zn:e.y=e.y<0?0:1;break;case pc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return cr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Kt?ss:xu}set encoding(e){cr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ss?Kt:Bn}};zn.DEFAULT_IMAGE=null;zn.DEFAULT_MAPPING=hu;zn.DEFAULT_ANISOTROPY=1;var Wt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],m=c[5],g=c[9],y=c[2],p=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-y)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+y)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(l+1)/2,A=(m+1)/2,w=(f+1)/2,_=(h+d)/4,L=(u+y)/4,V=(g+p)/4;return x>A&&x>w?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=_/n,r=L/n):A>w?A<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(A),n=_/s,r=V/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=L/r,s=V/r),this.set(n,s,r,t),this}let M=Math.sqrt((p-g)*(p-g)+(u-y)*(u-y)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(u-y)/M,this.z=(d-h)/M,this.w=Math.acos((l+m+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},yc=class extends zi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Wt(0,0,e,t),this.scissorTest=!1,this.viewport=new Wt(0,0,e,t);let s={width:e,height:t,depth:1};n.encoding!==void 0&&(cr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ss?Kt:Bn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new zn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new La(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},xi=class extends yc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ia=class extends zn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=wn,this.minFilter=wn,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var vc=class extends zn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=wn,this.minFilter=wn,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Hi=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],m=r[a+1],g=r[a+2],y=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=m,e[t+2]=g,e[t+3]=y;return}if(u!==y||c!==d||l!==m||h!==g){let p=1-o,f=c*d+l*m+h*g+u*y,M=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){let w=Math.sqrt(x),_=Math.atan2(w,f*M);p=Math.sin(p*_)/w,o=Math.sin(o*_)/w}let A=o*M;if(c=c*p+d*A,l=l*p+m*A,h=h*p+g*A,u=u*p+y*A,p===1-o){let w=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=w,l*=w,h*=w,u*=w}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[a],d=r[a+1],m=r[a+2],g=r[a+3];return e[t]=o*g+h*u+c*m-l*d,e[t+1]=c*g+h*d+l*u-o*m,e[t+2]=l*g+h*m+o*d-c*u,e[t+3]=h*g-o*u-c*d-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),u=o(r/2),d=c(n/2),m=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*m*g,this._y=l*m*u-d*h*g,this._z=l*h*g+d*m*u,this._w=l*h*u-d*m*g;break;case"YXZ":this._x=d*h*u+l*m*g,this._y=l*m*u-d*h*g,this._z=l*h*g-d*m*u,this._w=l*h*u+d*m*g;break;case"ZXY":this._x=d*h*u-l*m*g,this._y=l*m*u+d*h*g,this._z=l*h*g+d*m*u,this._w=l*h*u-d*m*g;break;case"ZYX":this._x=d*h*u-l*m*g,this._y=l*m*u+d*h*g,this._z=l*h*g-d*m*u,this._w=l*h*u+d*m*g;break;case"YZX":this._x=d*h*u+l*m*g,this._y=l*m*u+d*h*g,this._z=l*h*g-d*m*u,this._w=l*h*u-d*m*g;break;case"XZY":this._x=d*h*u-l*m*g,this._y=l*m*u-d*h*g,this._z=l*h*g+d*m*u,this._w=l*h*u+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-c)*m,this._y=(r-l)*m,this._z=(a-s)*m}else if(n>o&&n>u){let m=2*Math.sqrt(1+n-o-u);this._w=(h-c)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+l)/m}else if(o>u){let m=2*Math.sqrt(1+o-n-u);this._w=(r-l)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(c+h)/m}else{let m=2*Math.sqrt(1+u-n-o);this._w=(a-s)/m,this._x=(r+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xn(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(hh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(hh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Fo.copy(this).projectOnVector(e),this.sub(Fo)}reflect(e){return this.sub(Fo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(xn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Fo=new P,hh=new Hi,yi=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Wn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Wn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Wn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Wn):Wn.fromBufferAttribute(r,a),Wn.applyMatrix4(e.matrixWorld),this.expandByPoint(Wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Hr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Hr.copy(n.boundingBox)),Hr.applyMatrix4(e.matrixWorld),this.union(Hr)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Wn),Wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qs),kr.subVectors(this.max,Qs),fs.subVectors(e.a,Qs),ps.subVectors(e.b,Qs),ms.subVectors(e.c,Qs),wi.subVectors(ps,fs),Ai.subVectors(ms,ps),Ji.subVectors(fs,ms);let t=[0,-wi.z,wi.y,0,-Ai.z,Ai.y,0,-Ji.z,Ji.y,wi.z,0,-wi.x,Ai.z,0,-Ai.x,Ji.z,0,-Ji.x,-wi.y,wi.x,0,-Ai.y,Ai.x,0,-Ji.y,Ji.x,0];return!Bo(t,fs,ps,ms,kr)||(t=[1,0,0,0,1,0,0,0,1],!Bo(t,fs,ps,ms,kr))?!1:(Vr.crossVectors(wi,Ai),t=[Vr.x,Vr.y,Vr.z],Bo(t,fs,ps,ms,kr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},ci=[new P,new P,new P,new P,new P,new P,new P,new P],Wn=new P,Hr=new yi,fs=new P,ps=new P,ms=new P,wi=new P,Ai=new P,Ji=new P,Qs=new P,kr=new P,Vr=new P,$i=new P;function Bo(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){$i.fromArray(i,r);let o=s.x*Math.abs($i.x)+s.y*Math.abs($i.y)+s.z*Math.abs($i.z),c=e.dot($i),l=t.dot($i),h=n.dot($i);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var tf=new yi,js=new P,zo=new P,vi=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):tf.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;js.subVectors(e,this.center);let t=js.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(js,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(js.copy(e.center).add(zo)),this.expandByPoint(js.copy(e.center).sub(zo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},li=new P,Ho=new P,Gr=new P,Ri=new P,ko=new P,Wr=new P,Vo=new P,mr=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,li)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=li.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(li.copy(this.origin).addScaledVector(this.direction,t),li.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ho.copy(e).add(t).multiplyScalar(.5),Gr.copy(t).sub(e).normalize(),Ri.copy(this.origin).sub(Ho);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Gr),o=Ri.dot(this.direction),c=-Ri.dot(Gr),l=Ri.lengthSq(),h=Math.abs(1-a*a),u,d,m,g;if(h>0)if(u=a*c-o,d=a*o-c,g=r*h,u>=0)if(d>=-g)if(d<=g){let y=1/h;u*=y,d*=y,m=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),m=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),m=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),m=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ho).addScaledVector(Gr,d),m}intersectSphere(e,t){li.subVectors(e.center,this.origin);let n=li.dot(this.direction),s=li.dot(li)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,li)!==null}intersectTriangle(e,t,n,s,r){ko.subVectors(t,e),Wr.subVectors(n,e),Vo.crossVectors(ko,Wr);let a=this.direction.dot(Vo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ri.subVectors(this.origin,e);let c=o*this.direction.dot(Wr.crossVectors(Ri,Wr));if(c<0)return null;let l=o*this.direction.dot(ko.cross(Ri));if(l<0||c+l>a)return null;let h=-o*Ri.dot(Vo);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Nt=class i{constructor(e,t,n,s,r,a,o,c,l,h,u,d,m,g,y,p){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,h,u,d,m,g,y,p)}set(e,t,n,s,r,a,o,c,l,h,u,d,m,g,y,p){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=d,f[3]=m,f[7]=g,f[11]=y,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/gs.setFromMatrixColumn(e,0).length(),r=1/gs.setFromMatrixColumn(e,1).length(),a=1/gs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,m=a*u,g=o*h,y=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=m+g*l,t[5]=d-y*l,t[9]=-o*c,t[2]=y-d*l,t[6]=g+m*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*h,m=c*u,g=l*h,y=l*u;t[0]=d+y*o,t[4]=g*o-m,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=m*o-g,t[6]=y+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*h,m=c*u,g=l*h,y=l*u;t[0]=d-y*o,t[4]=-a*u,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*h,t[9]=y-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*h,m=a*u,g=o*h,y=o*u;t[0]=c*h,t[4]=g*l-m,t[8]=d*l+y,t[1]=c*u,t[5]=y*l+d,t[9]=m*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,m=a*l,g=o*c,y=o*l;t[0]=c*h,t[4]=y-d*u,t[8]=g*u+m,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=m*u+g,t[10]=d-y*u}else if(e.order==="XZY"){let d=a*c,m=a*l,g=o*c,y=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+y,t[5]=a*h,t[9]=m*u-g,t[2]=g*u-m,t[6]=o*h,t[10]=y*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(nf,e,sf)}lookAt(e,t,n){let s=this.elements;return Pn.subVectors(e,t),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),Ci.crossVectors(n,Pn),Ci.lengthSq()===0&&(Math.abs(n.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),Ci.crossVectors(n,Pn)),Ci.normalize(),Xr.crossVectors(Pn,Ci),s[0]=Ci.x,s[4]=Xr.x,s[8]=Pn.x,s[1]=Ci.y,s[5]=Xr.y,s[9]=Pn.y,s[2]=Ci.z,s[6]=Xr.z,s[10]=Pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],m=n[13],g=n[2],y=n[6],p=n[10],f=n[14],M=n[3],x=n[7],A=n[11],w=n[15],_=s[0],L=s[4],V=s[8],S=s[12],b=s[1],k=s[5],j=s[9],fe=s[13],F=s[2],z=s[6],J=s[10],ie=s[14],ne=s[3],te=s[7],le=s[11],he=s[15];return r[0]=a*_+o*b+c*F+l*ne,r[4]=a*L+o*k+c*z+l*te,r[8]=a*V+o*j+c*J+l*le,r[12]=a*S+o*fe+c*ie+l*he,r[1]=h*_+u*b+d*F+m*ne,r[5]=h*L+u*k+d*z+m*te,r[9]=h*V+u*j+d*J+m*le,r[13]=h*S+u*fe+d*ie+m*he,r[2]=g*_+y*b+p*F+f*ne,r[6]=g*L+y*k+p*z+f*te,r[10]=g*V+y*j+p*J+f*le,r[14]=g*S+y*fe+p*ie+f*he,r[3]=M*_+x*b+A*F+w*ne,r[7]=M*L+x*k+A*z+w*te,r[11]=M*V+x*j+A*J+w*le,r[15]=M*S+x*fe+A*ie+w*he,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],m=e[14],g=e[3],y=e[7],p=e[11],f=e[15];return g*(+r*c*u-s*l*u-r*o*d+n*l*d+s*o*m-n*c*m)+y*(+t*c*m-t*l*d+r*a*d-s*a*m+s*l*h-r*c*h)+p*(+t*l*u-t*o*m-r*a*u+n*a*m+r*o*h-n*l*h)+f*(-s*o*h-t*c*u+t*o*d+s*a*u-n*a*d+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],m=e[11],g=e[12],y=e[13],p=e[14],f=e[15],M=u*p*l-y*d*l+y*c*m-o*p*m-u*c*f+o*d*f,x=g*d*l-h*p*l-g*c*m+a*p*m+h*c*f-a*d*f,A=h*y*l-g*u*l+g*o*m-a*y*m-h*o*f+a*u*f,w=g*u*c-h*y*c-g*o*d+a*y*d+h*o*p-a*u*p,_=t*M+n*x+s*A+r*w;if(_===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/_;return e[0]=M*L,e[1]=(y*d*r-u*p*r-y*s*m+n*p*m+u*s*f-n*d*f)*L,e[2]=(o*p*r-y*c*r+y*s*l-n*p*l-o*s*f+n*c*f)*L,e[3]=(u*c*r-o*d*r-u*s*l+n*d*l+o*s*m-n*c*m)*L,e[4]=x*L,e[5]=(h*p*r-g*d*r+g*s*m-t*p*m-h*s*f+t*d*f)*L,e[6]=(g*c*r-a*p*r-g*s*l+t*p*l+a*s*f-t*c*f)*L,e[7]=(a*d*r-h*c*r+h*s*l-t*d*l-a*s*m+t*c*m)*L,e[8]=A*L,e[9]=(g*u*r-h*y*r-g*n*m+t*y*m+h*n*f-t*u*f)*L,e[10]=(a*y*r-g*o*r+g*n*l-t*y*l-a*n*f+t*o*f)*L,e[11]=(h*o*r-a*u*r-h*n*l+t*u*l+a*n*m-t*o*m)*L,e[12]=w*L,e[13]=(h*y*s-g*u*s+g*n*d-t*y*d-h*n*p+t*u*p)*L,e[14]=(g*o*s-a*y*s-g*n*c+t*y*c+a*n*p-t*o*p)*L,e[15]=(a*u*s-h*o*s+h*n*c-t*u*c-a*n*d+t*o*d)*L,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,u=o+o,d=r*l,m=r*h,g=r*u,y=a*h,p=a*u,f=o*u,M=c*l,x=c*h,A=c*u,w=n.x,_=n.y,L=n.z;return s[0]=(1-(y+f))*w,s[1]=(m+A)*w,s[2]=(g-x)*w,s[3]=0,s[4]=(m-A)*_,s[5]=(1-(d+f))*_,s[6]=(p+M)*_,s[7]=0,s[8]=(g+x)*L,s[9]=(p-M)*L,s[10]=(1-(d+y))*L,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=gs.set(s[0],s[1],s[2]).length(),a=gs.set(s[4],s[5],s[6]).length(),o=gs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Xn.copy(this);let l=1/r,h=1/a,u=1/o;return Xn.elements[0]*=l,Xn.elements[1]*=l,Xn.elements[2]*=l,Xn.elements[4]*=h,Xn.elements[5]*=h,Xn.elements[6]*=h,Xn.elements[8]*=u,Xn.elements[9]*=u,Xn.elements[10]*=u,t.setFromRotationMatrix(Xn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=mi){let c=this.elements,l=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s),m,g;if(o===mi)m=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Ra)m=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=mi){let c=this.elements,l=1/(t-e),h=1/(n-s),u=1/(a-r),d=(t+e)*l,m=(n+s)*h,g,y;if(o===mi)g=(a+r)*u,y=-2*u;else if(o===Ra)g=r*u,y=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=y,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},gs=new P,Xn=new Nt,nf=new P(0,0,0),sf=new P(1,1,1),Ci=new P,Xr=new P,Pn=new P,uh=new Nt,dh=new Hi,Ua=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(xn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-xn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(xn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-xn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(xn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-xn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return uh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(uh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return dh.setFromEuler(this),this.setFromQuaternion(dh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ua.DEFAULT_ORDER="XYZ";var Da=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},rf=0,fh=new P,_s=new Hi,hi=new Nt,qr=new P,er=new P,af=new P,of=new Hi,ph=new P(1,0,0),mh=new P(0,1,0),gh=new P(0,0,1),cf={type:"added"},lf={type:"removed"},Qt=class i extends zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rf++}),this.uuid=gi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new P,t=new Ua,n=new Hi,s=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Nt},normalMatrix:{value:new gt}}),this.matrix=new Nt,this.matrixWorld=new Nt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Da,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _s.setFromAxisAngle(e,t),this.quaternion.multiply(_s),this}rotateOnWorldAxis(e,t){return _s.setFromAxisAngle(e,t),this.quaternion.premultiply(_s),this}rotateX(e){return this.rotateOnAxis(ph,e)}rotateY(e){return this.rotateOnAxis(mh,e)}rotateZ(e){return this.rotateOnAxis(gh,e)}translateOnAxis(e,t){return fh.copy(e).applyQuaternion(this.quaternion),this.position.add(fh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ph,e)}translateY(e){return this.translateOnAxis(mh,e)}translateZ(e){return this.translateOnAxis(gh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?qr.copy(e):qr.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),er.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hi.lookAt(er,qr,this.up):hi.lookAt(qr,er,this.up),this.quaternion.setFromRotationMatrix(hi),s&&(hi.extractRotation(s.matrixWorld),_s.setFromRotationMatrix(hi),this.quaternion.premultiply(_s.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(cf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(lf)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hi.multiply(e.parent.matrixWorld)),e.applyMatrix4(hi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(er,e,af),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(er,of,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Qt.DEFAULT_UP=new P(0,1,0);Qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var qn=new P,ui=new P,Go=new P,di=new P,xs=new P,ys=new P,_h=new P,Wo=new P,Xo=new P,qo=new P,Yr=!1,Ui=class i{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),qn.subVectors(e,t),s.cross(qn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){qn.subVectors(s,t),ui.subVectors(n,t),Go.subVectors(e,t);let a=qn.dot(qn),o=qn.dot(ui),c=qn.dot(Go),l=ui.dot(ui),h=ui.dot(Go),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,m=(l*c-o*h)*d,g=(a*h-o*c)*d;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,di)===null?!1:di.x>=0&&di.y>=0&&di.x+di.y<=1}static getUV(e,t,n,s,r,a,o,c){return Yr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Yr=!0),this.getInterpolation(e,t,n,s,r,a,o,c)}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,di)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,di.x),c.addScaledVector(a,di.y),c.addScaledVector(o,di.z),c)}static isFrontFacing(e,t,n,s){return qn.subVectors(n,t),ui.subVectors(e,t),qn.cross(ui).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qn.subVectors(this.c,this.b),ui.subVectors(this.a,this.b),qn.cross(ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return Yr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Yr=!0),i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;xs.subVectors(s,n),ys.subVectors(r,n),Wo.subVectors(e,n);let c=xs.dot(Wo),l=ys.dot(Wo);if(c<=0&&l<=0)return t.copy(n);Xo.subVectors(e,s);let h=xs.dot(Xo),u=ys.dot(Xo);if(h>=0&&u<=h)return t.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(xs,a);qo.subVectors(e,r);let m=xs.dot(qo),g=ys.dot(qo);if(g>=0&&m<=g)return t.copy(r);let y=m*l-c*g;if(y<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(ys,o);let p=h*g-m*u;if(p<=0&&u-h>=0&&m-g>=0)return _h.subVectors(r,s),o=(u-h)/(u-h+(m-g)),t.copy(s).addScaledVector(_h,o);let f=1/(p+y+d);return a=y*f,o=d*f,t.copy(n).addScaledVector(xs,a).addScaledVector(ys,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Su={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pi={h:0,s:0,l:0},Zr={h:0,s:0,l:0};function Yo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var He=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Pt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Pt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Pt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Pt.workingColorSpace){if(e=$d(e,1),t=xn(t,0,1),n=xn(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Yo(a,r,e+1/3),this.g=Yo(a,r,e),this.b=Yo(a,r,e-1/3)}return Pt.toWorkingColorSpace(this,s),this}setStyle(e,t=Kt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Kt){let n=Su[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Os(e.r),this.g=Os(e.g),this.b=Os(e.b),this}copyLinearToSRGB(e){return this.r=No(e.r),this.g=No(e.g),this.b=No(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kt){return Pt.fromWorkingColorSpace(_n.copy(this),e),Math.round(xn(_n.r*255,0,255))*65536+Math.round(xn(_n.g*255,0,255))*256+Math.round(xn(_n.b*255,0,255))}getHexString(e=Kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Pt.workingColorSpace){Pt.fromWorkingColorSpace(_n.copy(this),t);let n=_n.r,s=_n.g,r=_n.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Pt.workingColorSpace){return Pt.fromWorkingColorSpace(_n.copy(this),t),e.r=_n.r,e.g=_n.g,e.b=_n.b,e}getStyle(e=Kt){Pt.fromWorkingColorSpace(_n.copy(this),e);let t=_n.r,n=_n.g,s=_n.b;return e!==Kt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Pi),this.setHSL(Pi.h+e,Pi.s+t,Pi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Pi),e.getHSL(Zr);let n=Uo(Pi.h,Zr.h,t),s=Uo(Pi.s,Zr.s,t),r=Uo(Pi.l,Zr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},_n=new He;He.NAMES=Su;var hf=0,ii=class extends zi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hf++}),this.uuid=gi(),this.name="",this.type="Material",this.blending=Ns,this.side=Bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hc,this.blendDst=uc,this.blendEquation=es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=Sa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=us,this.stencilZFail=us,this.stencilZPass=us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ns&&(n.blending=this.blending),this.side!==Bi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==hc&&(n.blendSrc=this.blendSrc),this.blendDst!==uc&&(n.blendDst=this.blendDst),this.blendEquation!==es&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Sa&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==sh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==us&&(n.stencilFail=this.stencilFail),this.stencilZFail!==us&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==us&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},$n=class extends ii{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=lu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var $t=new P,Jr=new me,vn=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=mc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Jr.fromBufferAttribute(this,t),Jr.applyMatrix3(e),this.setXY(t,Jr.x,Jr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix3(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=pi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ut(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=pi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=pi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=pi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=pi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array),s=Ut(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array),s=Ut(s,this.array),r=Ut(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==mc&&(e.usage=this.usage),e}};var Na=class extends vn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Oa=class extends vn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var xt=class extends vn{constructor(e,t,n){super(new Float32Array(e),t,n)}};var uf=0,On=new Nt,Zo=new Qt,vs=new P,Ln=new yi,tr=new yi,rn=new P,zt=class i extends zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:uf++}),this.uuid=gi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Mu(e)?Oa:Na)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new gt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return On.makeRotationFromQuaternion(e),this.applyMatrix4(On),this}rotateX(e){return On.makeRotationX(e),this.applyMatrix4(On),this}rotateY(e){return On.makeRotationY(e),this.applyMatrix4(On),this}rotateZ(e){return On.makeRotationZ(e),this.applyMatrix4(On),this}translate(e,t,n){return On.makeTranslation(e,t,n),this.applyMatrix4(On),this}scale(e,t,n){return On.makeScale(e,t,n),this.applyMatrix4(On),this}lookAt(e){return Zo.lookAt(e),Zo.updateMatrix(),this.applyMatrix4(Zo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vs).negate(),this.translate(vs.x,vs.y,vs.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new xt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Ln.setFromBufferAttribute(r),this.morphTargetsRelative?(rn.addVectors(this.boundingBox.min,Ln.min),this.boundingBox.expandByPoint(rn),rn.addVectors(this.boundingBox.max,Ln.max),this.boundingBox.expandByPoint(rn)):(this.boundingBox.expandByPoint(Ln.min),this.boundingBox.expandByPoint(Ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(e){let n=this.boundingSphere.center;if(Ln.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];tr.setFromBufferAttribute(o),this.morphTargetsRelative?(rn.addVectors(Ln.min,tr.min),Ln.expandByPoint(rn),rn.addVectors(Ln.max,tr.max),Ln.expandByPoint(rn)):(Ln.expandByPoint(tr.min),Ln.expandByPoint(tr.max))}Ln.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)rn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(rn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)rn.fromBufferAttribute(o,l),c&&(vs.fromBufferAttribute(e,l),rn.add(vs)),s=Math.max(s,n.distanceToSquared(rn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vn(new Float32Array(4*o),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let b=0;b<o;b++)l[b]=new P,h[b]=new P;let u=new P,d=new P,m=new P,g=new me,y=new me,p=new me,f=new P,M=new P;function x(b,k,j){u.fromArray(s,b*3),d.fromArray(s,k*3),m.fromArray(s,j*3),g.fromArray(a,b*2),y.fromArray(a,k*2),p.fromArray(a,j*2),d.sub(u),m.sub(u),y.sub(g),p.sub(g);let fe=1/(y.x*p.y-p.x*y.y);isFinite(fe)&&(f.copy(d).multiplyScalar(p.y).addScaledVector(m,-y.y).multiplyScalar(fe),M.copy(m).multiplyScalar(y.x).addScaledVector(d,-p.x).multiplyScalar(fe),l[b].add(f),l[k].add(f),l[j].add(f),h[b].add(M),h[k].add(M),h[j].add(M))}let A=this.groups;A.length===0&&(A=[{start:0,count:n.length}]);for(let b=0,k=A.length;b<k;++b){let j=A[b],fe=j.start,F=j.count;for(let z=fe,J=fe+F;z<J;z+=3)x(n[z+0],n[z+1],n[z+2])}let w=new P,_=new P,L=new P,V=new P;function S(b){L.fromArray(r,b*3),V.copy(L);let k=l[b];w.copy(k),w.sub(L.multiplyScalar(L.dot(k))).normalize(),_.crossVectors(V,k);let fe=_.dot(h[b])<0?-1:1;c[b*4]=w.x,c[b*4+1]=w.y,c[b*4+2]=w.z,c[b*4+3]=fe}for(let b=0,k=A.length;b<k;++b){let j=A[b],fe=j.start,F=j.count;for(let z=fe,J=fe+F;z<J;z+=3)S(n[z+0]),S(n[z+1]),S(n[z+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new vn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);let s=new P,r=new P,a=new P,o=new P,c=new P,l=new P,h=new P,u=new P;if(e)for(let d=0,m=e.count;d<m;d+=3){let g=e.getX(d+0),y=e.getX(d+1),p=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,p),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,y),l.fromBufferAttribute(n,p),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,m=t.count;d<m;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)rn.fromBufferAttribute(e,t),rn.normalize(),e.setXYZ(t,rn.x,rn.y,rn.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),m=0,g=0;for(let y=0,p=c.length;y<p;y++){o.isInterleavedBufferAttribute?m=c[y]*o.data.stride+o.offset:m=c[y]*h;for(let f=0;f<h;f++)d[g++]=l[m++]}return new vn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let d=l[h],m=e(d,n);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let m=l[u];h.push(m.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},xh=new Nt,Ki=new mr,$r=new vi,yh=new P,Ms=new P,Ss=new P,Es=new P,Jo=new P,Kr=new P,Qr=new me,jr=new me,ea=new me,vh=new P,Mh=new P,Sh=new P,ta=new P,na=new P,Le=class extends Qt{constructor(e=new zt,t=new $n){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Kr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&(Jo.fromBufferAttribute(u,e),a?Kr.addScaledVector(Jo,h):Kr.addScaledVector(Jo.sub(t),h))}t.add(Kr)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$r.copy(n.boundingSphere),$r.applyMatrix4(r),Ki.copy(e.ray).recast(e.near),!($r.containsPoint(Ki.origin)===!1&&(Ki.intersectSphere($r,yh)===null||Ki.origin.distanceToSquared(yh)>(e.far-e.near)**2))&&(xh.copy(r).invert(),Ki.copy(e.ray).applyMatrix4(xh),!(n.boundingBox!==null&&Ki.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ki)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=d.length;g<y;g++){let p=d[g],f=a[p.materialIndex],M=Math.max(p.start,m.start),x=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let A=M,w=x;A<w;A+=3){let _=o.getX(A),L=o.getX(A+1),V=o.getX(A+2);s=ia(this,f,e,n,l,h,u,_,L,V),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,m.start),y=Math.min(o.count,m.start+m.count);for(let p=g,f=y;p<f;p+=3){let M=o.getX(p),x=o.getX(p+1),A=o.getX(p+2);s=ia(this,a,e,n,l,h,u,M,x,A),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,y=d.length;g<y;g++){let p=d[g],f=a[p.materialIndex],M=Math.max(p.start,m.start),x=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let A=M,w=x;A<w;A+=3){let _=A,L=A+1,V=A+2;s=ia(this,f,e,n,l,h,u,_,L,V),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,m.start),y=Math.min(c.count,m.start+m.count);for(let p=g,f=y;p<f;p+=3){let M=p,x=p+1,A=p+2;s=ia(this,a,e,n,l,h,u,M,x,A),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function df(i,e,t,n,s,r,a,o){let c;if(e.side===an?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===Bi,o),c===null)return null;na.copy(o),na.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(na);return l<t.near||l>t.far?null:{distance:l,point:na.clone(),object:i}}function ia(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,Ms),i.getVertexPosition(c,Ss),i.getVertexPosition(l,Es);let h=df(i,e,t,n,Ms,Ss,Es,ta);if(h){s&&(Qr.fromBufferAttribute(s,o),jr.fromBufferAttribute(s,c),ea.fromBufferAttribute(s,l),h.uv=Ui.getInterpolation(ta,Ms,Ss,Es,Qr,jr,ea,new me)),r&&(Qr.fromBufferAttribute(r,o),jr.fromBufferAttribute(r,c),ea.fromBufferAttribute(r,l),h.uv1=Ui.getInterpolation(ta,Ms,Ss,Es,Qr,jr,ea,new me),h.uv2=h.uv1),a&&(vh.fromBufferAttribute(a,o),Mh.fromBufferAttribute(a,c),Sh.fromBufferAttribute(a,l),h.normal=Ui.getInterpolation(ta,Ms,Ss,Es,vh,Mh,Sh,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:c,c:l,normal:new P,materialIndex:0};Ui.getNormal(Ms,Ss,Es,u.normal),h.face=u}return h}var Mn=class i extends zt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,m=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new xt(l,3)),this.setAttribute("normal",new xt(h,3)),this.setAttribute("uv",new xt(u,2));function g(y,p,f,M,x,A,w,_,L,V,S){let b=A/L,k=w/V,j=A/2,fe=w/2,F=_/2,z=L+1,J=V+1,ie=0,ne=0,te=new P;for(let le=0;le<J;le++){let he=le*k-fe;for(let Te=0;Te<z;Te++){let $=Te*b-j;te[y]=$*M,te[p]=he*x,te[f]=F,l.push(te.x,te.y,te.z),te[y]=0,te[p]=0,te[f]=_>0?1:-1,h.push(te.x,te.y,te.z),u.push(Te/L),u.push(1-le/V),ie+=1}}for(let le=0;le<V;le++)for(let he=0;he<L;he++){let Te=d+he+z*le,$=d+he+z*(le+1),se=d+(he+1)+z*(le+1),we=d+(he+1)+z*le;c.push(Te,$,we),c.push($,se,we),ne+=6}o.addGroup(m,ne,S),m+=ne,d+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function ks(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Tn(i){let e={};for(let t=0;t<i.length;t++){let n=ks(i[t]);for(let s in n)e[s]=n[s]}return e}function ff(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Eu(i){return i.getRenderTarget()===null?i.outputColorSpace:Pt.workingColorSpace}var pf={clone:ks,merge:Tn},mf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Kn=class extends ii{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mf,this.fragmentShader=gf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ks(e.uniforms),this.uniformsGroups=ff(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Fa=class extends Qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Nt,this.projectionMatrix=new Nt,this.projectionMatrixInverse=new Nt,this.coordinateSystem=mi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},yn=class extends Fa{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=_c*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ma*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _c*2*Math.atan(Math.tan(Ma*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ma*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},bs=-90,Ts=1,Mc=class extends Qt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new yn(bs,Ts,e,t);s.layers=this.layers,this.add(s);let r=new yn(bs,Ts,e,t);r.layers=this.layers,this.add(r);let a=new yn(bs,Ts,e,t);a.layers=this.layers,this.add(a);let o=new yn(bs,Ts,e,t);o.layers=this.layers,this.add(o);let c=new yn(bs,Ts,e,t);c.layers=this.layers,this.add(c);let l=new yn(bs,Ts,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===mi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ra)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ba=class extends zn{constructor(e,t,n,s,r,a,o,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Bs,super(e,t,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Sc=class extends xi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(cr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ss?Kt:Bn),this.texture=new Ba(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Fn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Mn(5,5,5),r=new Kn({name:"CubemapFromEquirect",uniforms:ks(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:an,blending:Di});r.uniforms.tEquirect.value=t;let a=new Le(s,r),o=t.minFilter;return t.minFilter===fr&&(t.minFilter=Fn),new Mc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},$o=new P,_f=new P,xf=new gt,Yn=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=$o.subVectors(n,t).cross(_f.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta($o),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||xf.getNormalMatrix(e),s=this.coplanarPoint($o).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Qi=new vi,sa=new P,gr=class{constructor(e=new Yn,t=new Yn,n=new Yn,s=new Yn,r=new Yn,a=new Yn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=mi){let n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],m=s[8],g=s[9],y=s[10],p=s[11],f=s[12],M=s[13],x=s[14],A=s[15];if(n[0].setComponents(c-r,d-l,p-m,A-f).normalize(),n[1].setComponents(c+r,d+l,p+m,A+f).normalize(),n[2].setComponents(c+a,d+h,p+g,A+M).normalize(),n[3].setComponents(c-a,d-h,p-g,A-M).normalize(),n[4].setComponents(c-o,d-u,p-y,A-x).normalize(),t===mi)n[5].setComponents(c+o,d+u,p+y,A+x).normalize();else if(t===Ra)n[5].setComponents(o,u,y,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Qi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qi)}intersectsSprite(e){return Qi.center.set(0,0,0),Qi.radius=.7071067811865476,Qi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qi)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(sa.x=s.normal.x>0?e.max.x:e.min.x,sa.y=s.normal.y>0?e.max.y:e.min.y,sa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(sa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function bu(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function yf(i,e){let t=e.isWebGL2,n=new WeakMap;function s(l,h){let u=l.array,d=l.usage,m=u.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,u,d),l.onUploadCallback();let y;if(u instanceof Float32Array)y=i.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)y=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)y=i.SHORT;else if(u instanceof Uint32Array)y=i.UNSIGNED_INT;else if(u instanceof Int32Array)y=i.INT;else if(u instanceof Int8Array)y=i.BYTE;else if(u instanceof Uint8Array)y=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)y=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:y,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:m}}function r(l,h,u){let d=h.array,m=h._updateRange,g=h.updateRanges;if(i.bindBuffer(u,l),m.count===-1&&g.length===0&&i.bufferSubData(u,0,d),g.length!==0){for(let y=0,p=g.length;y<p;y++){let f=g[y];t?i.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):i.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}h.clearUpdateRanges()}m.count!==-1&&(t?i.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):i.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=n.get(l);h&&(i.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let u=n.get(l);if(u===void 0)n.set(l,s(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,l,h),u.version=l.version}}return{get:a,remove:o,update:c}}var Sn=class i extends zt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,u=e/o,d=t/c,m=[],g=[],y=[],p=[];for(let f=0;f<h;f++){let M=f*d-a;for(let x=0;x<l;x++){let A=x*u-r;g.push(A,-M,0),y.push(0,0,1),p.push(x/o),p.push(1-f/c)}}for(let f=0;f<c;f++)for(let M=0;M<o;M++){let x=M+l*f,A=M+l*(f+1),w=M+1+l*(f+1),_=M+1+l*f;m.push(x,A,_),m.push(A,w,_)}this.setIndex(m),this.setAttribute("position",new xt(g,3)),this.setAttribute("normal",new xt(y,3)),this.setAttribute("uv",new xt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},vf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Mf=`#ifdef USE_ALPHAHASH
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
#endif`,Sf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ef=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Tf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wf=`#ifdef USE_AOMAP
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
#endif`,Af=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Rf=`#ifdef USE_BATCHING
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
#endif`,Cf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Pf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Lf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,If=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Uf=`#ifdef USE_IRIDESCENCE
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
#endif`,Df=`#ifdef USE_BUMPMAP
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
#endif`,Nf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Of=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ff=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Hf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,kf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Vf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Gf=`#define PI 3.141592653589793
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
} // validated`,Wf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Xf=`vec3 transformedNormal = objectNormal;
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
#endif`,qf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$f="gl_FragColor = linearToOutputTexel( gl_FragColor );",Kf=`
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
}`,Qf=`#ifdef USE_ENVMAP
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
#endif`,jf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ep=`#ifdef USE_ENVMAP
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
#endif`,tp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,np=`#ifdef USE_ENVMAP
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
#endif`,ip=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ap=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,op=`#ifdef USE_GRADIENTMAP
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
}`,cp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,lp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,up=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dp=`uniform bool receiveShadow;
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
#endif`,fp=`#ifdef USE_ENVMAP
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
#endif`,pp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_p=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xp=`PhysicalMaterial material;
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
#endif`,yp=`struct PhysicalMaterial {
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
}`,vp=`
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
#endif`,Mp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Sp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ep=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,wp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Ap=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Cp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Pp=`#if defined( USE_POINTS_UV )
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
#endif`,Lp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ip=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Up=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Dp=`#ifdef USE_MORPHNORMALS
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
#endif`,Np=`#ifdef USE_MORPHTARGETS
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
#endif`,Op=`#ifdef USE_MORPHTARGETS
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
#endif`,Fp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Bp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,zp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Vp=`#ifdef USE_NORMALMAP
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
#endif`,Gp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Wp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Xp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Jp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$p=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Kp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,em=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,nm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,im=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,sm=`float getShadowMask() {
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
}`,rm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,am=`#ifdef USE_SKINNING
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
#endif`,om=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cm=`#ifdef USE_SKINNING
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
#endif`,lm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,um=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,fm=`#ifdef USE_TRANSMISSION
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
#endif`,pm=`#ifdef USE_TRANSMISSION
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
#endif`,mm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_m=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ym=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vm=`uniform sampler2D t2D;
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
}`,Mm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Em=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tm=`#include <common>
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
}`,wm=`#if DEPTH_PACKING == 3200
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
}`,Am=`#define DISTANCE
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
}`,Rm=`#define DISTANCE
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
}`,Cm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Pm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lm=`uniform float scale;
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
}`,Im=`uniform vec3 diffuse;
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
}`,Um=`#include <common>
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
}`,Dm=`uniform vec3 diffuse;
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
}`,Nm=`#define LAMBERT
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
}`,Om=`#define LAMBERT
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
}`,Fm=`#define MATCAP
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
}`,Bm=`#define MATCAP
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
}`,zm=`#define NORMAL
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
}`,Hm=`#define NORMAL
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
}`,km=`#define PHONG
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
}`,Vm=`#define PHONG
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
}`,Gm=`#define STANDARD
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
}`,Wm=`#define STANDARD
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
}`,Xm=`#define TOON
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
}`,qm=`#define TOON
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
}`,Ym=`uniform float size;
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
}`,Zm=`uniform vec3 diffuse;
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
}`,Jm=`#include <common>
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
}`,$m=`uniform vec3 color;
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
}`,Km=`uniform float rotation;
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
}`,Qm=`uniform vec3 diffuse;
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
}`,mt={alphahash_fragment:vf,alphahash_pars_fragment:Mf,alphamap_fragment:Sf,alphamap_pars_fragment:Ef,alphatest_fragment:bf,alphatest_pars_fragment:Tf,aomap_fragment:wf,aomap_pars_fragment:Af,batching_pars_vertex:Rf,batching_vertex:Cf,begin_vertex:Pf,beginnormal_vertex:Lf,bsdfs:If,iridescence_fragment:Uf,bumpmap_pars_fragment:Df,clipping_planes_fragment:Nf,clipping_planes_pars_fragment:Of,clipping_planes_pars_vertex:Ff,clipping_planes_vertex:Bf,color_fragment:zf,color_pars_fragment:Hf,color_pars_vertex:kf,color_vertex:Vf,common:Gf,cube_uv_reflection_fragment:Wf,defaultnormal_vertex:Xf,displacementmap_pars_vertex:qf,displacementmap_vertex:Yf,emissivemap_fragment:Zf,emissivemap_pars_fragment:Jf,colorspace_fragment:$f,colorspace_pars_fragment:Kf,envmap_fragment:Qf,envmap_common_pars_fragment:jf,envmap_pars_fragment:ep,envmap_pars_vertex:tp,envmap_physical_pars_fragment:fp,envmap_vertex:np,fog_vertex:ip,fog_pars_vertex:sp,fog_fragment:rp,fog_pars_fragment:ap,gradientmap_pars_fragment:op,lightmap_fragment:cp,lightmap_pars_fragment:lp,lights_lambert_fragment:hp,lights_lambert_pars_fragment:up,lights_pars_begin:dp,lights_toon_fragment:pp,lights_toon_pars_fragment:mp,lights_phong_fragment:gp,lights_phong_pars_fragment:_p,lights_physical_fragment:xp,lights_physical_pars_fragment:yp,lights_fragment_begin:vp,lights_fragment_maps:Mp,lights_fragment_end:Sp,logdepthbuf_fragment:Ep,logdepthbuf_pars_fragment:bp,logdepthbuf_pars_vertex:Tp,logdepthbuf_vertex:wp,map_fragment:Ap,map_pars_fragment:Rp,map_particle_fragment:Cp,map_particle_pars_fragment:Pp,metalnessmap_fragment:Lp,metalnessmap_pars_fragment:Ip,morphcolor_vertex:Up,morphnormal_vertex:Dp,morphtarget_pars_vertex:Np,morphtarget_vertex:Op,normal_fragment_begin:Fp,normal_fragment_maps:Bp,normal_pars_fragment:zp,normal_pars_vertex:Hp,normal_vertex:kp,normalmap_pars_fragment:Vp,clearcoat_normal_fragment_begin:Gp,clearcoat_normal_fragment_maps:Wp,clearcoat_pars_fragment:Xp,iridescence_pars_fragment:qp,opaque_fragment:Yp,packing:Zp,premultiplied_alpha_fragment:Jp,project_vertex:$p,dithering_fragment:Kp,dithering_pars_fragment:Qp,roughnessmap_fragment:jp,roughnessmap_pars_fragment:em,shadowmap_pars_fragment:tm,shadowmap_pars_vertex:nm,shadowmap_vertex:im,shadowmask_pars_fragment:sm,skinbase_vertex:rm,skinning_pars_vertex:am,skinning_vertex:om,skinnormal_vertex:cm,specularmap_fragment:lm,specularmap_pars_fragment:hm,tonemapping_fragment:um,tonemapping_pars_fragment:dm,transmission_fragment:fm,transmission_pars_fragment:pm,uv_pars_fragment:mm,uv_pars_vertex:gm,uv_vertex:_m,worldpos_vertex:xm,background_vert:ym,background_frag:vm,backgroundCube_vert:Mm,backgroundCube_frag:Sm,cube_vert:Em,cube_frag:bm,depth_vert:Tm,depth_frag:wm,distanceRGBA_vert:Am,distanceRGBA_frag:Rm,equirect_vert:Cm,equirect_frag:Pm,linedashed_vert:Lm,linedashed_frag:Im,meshbasic_vert:Um,meshbasic_frag:Dm,meshlambert_vert:Nm,meshlambert_frag:Om,meshmatcap_vert:Fm,meshmatcap_frag:Bm,meshnormal_vert:zm,meshnormal_frag:Hm,meshphong_vert:km,meshphong_frag:Vm,meshphysical_vert:Gm,meshphysical_frag:Wm,meshtoon_vert:Xm,meshtoon_frag:qm,points_vert:Ym,points_frag:Zm,shadow_vert:Jm,shadow_frag:$m,sprite_vert:Km,sprite_frag:Qm},Me={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new gt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new gt},normalScale:{value:new me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0},uvTransform:{value:new gt}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}}},ni={basic:{uniforms:Tn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:Tn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new He(0)}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:Tn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:Tn([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:Tn([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new He(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:Tn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:Tn([Me.points,Me.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:Tn([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:Tn([Me.common,Me.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:Tn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:Tn([Me.sprite,Me.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distanceRGBA:{uniforms:Tn([Me.common,Me.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distanceRGBA_vert,fragmentShader:mt.distanceRGBA_frag},shadow:{uniforms:Tn([Me.lights,Me.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};ni.physical={uniforms:Tn([ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new gt},clearcoatNormalScale:{value:new me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new gt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new gt},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new gt},transmissionSamplerSize:{value:new me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new gt},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new gt},anisotropyVector:{value:new me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new gt}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};var ra={r:0,b:0,g:0};function jm(i,e,t,n,s,r,a){let o=new He(0),c=r===!0?0:1,l,h,u=null,d=0,m=null;function g(p,f){let M=!1,x=f.isScene===!0?f.background:null;x&&x.isTexture&&(x=(f.backgroundBlurriness>0?t:e).get(x)),x===null?y(o,c):x&&x.isColor&&(y(x,1),M=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||M)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===ho)?(h===void 0&&(h=new Le(new Mn(1,1,1),new Kn({name:"BackgroundCubeMaterial",uniforms:ks(ni.backgroundCube.uniforms),vertexShader:ni.backgroundCube.vertexShader,fragmentShader:ni.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,_,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=Pt.getTransfer(x.colorSpace)!==Bt,(u!==x||d!==x.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,m=i.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Le(new Sn(2,2),new Kn({name:"BackgroundMaterial",uniforms:ks(ni.background.uniforms),vertexShader:ni.background.vertexShader,fragmentShader:ni.background.fragmentShader,side:Bi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,l.material.toneMapped=Pt.getTransfer(x.colorSpace)!==Bt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,m=i.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function y(p,f){p.getRGB(ra,Eu(i)),n.buffers.color.setClear(ra.r,ra.g,ra.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(p,f=1){o.set(p),c=f,y(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,y(o,c)},render:g}}function eg(i,e,t,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},c=p(null),l=c,h=!1;function u(F,z,J,ie,ne){let te=!1;if(a){let le=y(ie,J,z);l!==le&&(l=le,m(l.object)),te=f(F,ie,J,ne),te&&M(F,ie,J,ne)}else{let le=z.wireframe===!0;(l.geometry!==ie.id||l.program!==J.id||l.wireframe!==le)&&(l.geometry=ie.id,l.program=J.id,l.wireframe=le,te=!0)}ne!==null&&t.update(ne,i.ELEMENT_ARRAY_BUFFER),(te||h)&&(h=!1,V(F,z,J,ie),ne!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(ne).buffer))}function d(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function m(F){return n.isWebGL2?i.bindVertexArray(F):r.bindVertexArrayOES(F)}function g(F){return n.isWebGL2?i.deleteVertexArray(F):r.deleteVertexArrayOES(F)}function y(F,z,J){let ie=J.wireframe===!0,ne=o[F.id];ne===void 0&&(ne={},o[F.id]=ne);let te=ne[z.id];te===void 0&&(te={},ne[z.id]=te);let le=te[ie];return le===void 0&&(le=p(d()),te[ie]=le),le}function p(F){let z=[],J=[],ie=[];for(let ne=0;ne<s;ne++)z[ne]=0,J[ne]=0,ie[ne]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:J,attributeDivisors:ie,object:F,attributes:{},index:null}}function f(F,z,J,ie){let ne=l.attributes,te=z.attributes,le=0,he=J.getAttributes();for(let Te in he)if(he[Te].location>=0){let se=ne[Te],we=te[Te];if(we===void 0&&(Te==="instanceMatrix"&&F.instanceMatrix&&(we=F.instanceMatrix),Te==="instanceColor"&&F.instanceColor&&(we=F.instanceColor)),se===void 0||se.attribute!==we||we&&se.data!==we.data)return!0;le++}return l.attributesNum!==le||l.index!==ie}function M(F,z,J,ie){let ne={},te=z.attributes,le=0,he=J.getAttributes();for(let Te in he)if(he[Te].location>=0){let se=te[Te];se===void 0&&(Te==="instanceMatrix"&&F.instanceMatrix&&(se=F.instanceMatrix),Te==="instanceColor"&&F.instanceColor&&(se=F.instanceColor));let we={};we.attribute=se,se&&se.data&&(we.data=se.data),ne[Te]=we,le++}l.attributes=ne,l.attributesNum=le,l.index=ie}function x(){let F=l.newAttributes;for(let z=0,J=F.length;z<J;z++)F[z]=0}function A(F){w(F,0)}function w(F,z){let J=l.newAttributes,ie=l.enabledAttributes,ne=l.attributeDivisors;J[F]=1,ie[F]===0&&(i.enableVertexAttribArray(F),ie[F]=1),ne[F]!==z&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,z),ne[F]=z)}function _(){let F=l.newAttributes,z=l.enabledAttributes;for(let J=0,ie=z.length;J<ie;J++)z[J]!==F[J]&&(i.disableVertexAttribArray(J),z[J]=0)}function L(F,z,J,ie,ne,te,le){le===!0?i.vertexAttribIPointer(F,z,J,ne,te):i.vertexAttribPointer(F,z,J,ie,ne,te)}function V(F,z,J,ie){if(n.isWebGL2===!1&&(F.isInstancedMesh||ie.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();let ne=ie.attributes,te=J.getAttributes(),le=z.defaultAttributeValues;for(let he in te){let Te=te[he];if(Te.location>=0){let $=ne[he];if($===void 0&&(he==="instanceMatrix"&&F.instanceMatrix&&($=F.instanceMatrix),he==="instanceColor"&&F.instanceColor&&($=F.instanceColor)),$!==void 0){let se=$.normalized,we=$.itemSize,Fe=t.get($);if(Fe===void 0)continue;let Ue=Fe.buffer,ke=Fe.type,Qe=Fe.bytesPerElement,Ne=n.isWebGL2===!0&&(ke===i.INT||ke===i.UNSIGNED_INT||$.gpuType===uu);if($.isInterleavedBufferAttribute){let tt=$.data,D=tt.stride,re=$.offset;if(tt.isInstancedInterleavedBuffer){for(let I=0;I<Te.locationSize;I++)w(Te.location+I,tt.meshPerAttribute);F.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let I=0;I<Te.locationSize;I++)A(Te.location+I);i.bindBuffer(i.ARRAY_BUFFER,Ue);for(let I=0;I<Te.locationSize;I++)L(Te.location+I,we/Te.locationSize,ke,se,D*Qe,(re+we/Te.locationSize*I)*Qe,Ne)}else{if($.isInstancedBufferAttribute){for(let tt=0;tt<Te.locationSize;tt++)w(Te.location+tt,$.meshPerAttribute);F.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let tt=0;tt<Te.locationSize;tt++)A(Te.location+tt);i.bindBuffer(i.ARRAY_BUFFER,Ue);for(let tt=0;tt<Te.locationSize;tt++)L(Te.location+tt,we/Te.locationSize,ke,se,we*Qe,we/Te.locationSize*tt*Qe,Ne)}}else if(le!==void 0){let se=le[he];if(se!==void 0)switch(se.length){case 2:i.vertexAttrib2fv(Te.location,se);break;case 3:i.vertexAttrib3fv(Te.location,se);break;case 4:i.vertexAttrib4fv(Te.location,se);break;default:i.vertexAttrib1fv(Te.location,se)}}}}_()}function S(){j();for(let F in o){let z=o[F];for(let J in z){let ie=z[J];for(let ne in ie)g(ie[ne].object),delete ie[ne];delete z[J]}delete o[F]}}function b(F){if(o[F.id]===void 0)return;let z=o[F.id];for(let J in z){let ie=z[J];for(let ne in ie)g(ie[ne].object),delete ie[ne];delete z[J]}delete o[F.id]}function k(F){for(let z in o){let J=o[z];if(J[F.id]===void 0)continue;let ie=J[F.id];for(let ne in ie)g(ie[ne].object),delete ie[ne];delete J[F.id]}}function j(){fe(),h=!0,l!==c&&(l=c,m(l.object))}function fe(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:j,resetDefaultState:fe,dispose:S,releaseStatesOfGeometry:b,releaseStatesOfProgram:k,initAttributes:x,enableAttribute:A,disableUnusedAttributes:_}}function tg(i,e,t,n){let s=n.isWebGL2,r;function a(h){r=h}function o(h,u){i.drawArrays(r,h,u),t.update(u,r,1)}function c(h,u,d){if(d===0)return;let m,g;if(s)m=i,g="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](r,h,u,d),t.update(u,r,d)}function l(h,u,d){if(d===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{m.multiDrawArraysWEBGL(r,h,0,u,0,d);let g=0;for(let y=0;y<d;y++)g+=u[y];t.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=l}function ng(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let L=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",o=t.precision!==void 0?t.precision:"highp",c=r(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);let l=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),y=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),f=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,A=a||e.has("OES_texture_float"),w=x&&A,_=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:g,maxAttributes:y,maxVertexUniforms:p,maxVaryings:f,maxFragmentUniforms:M,vertexTextures:x,floatFragmentTextures:A,floatVertexTextures:w,maxSamples:_}}function ig(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Yn,o=new gt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let m=u.length!==0||d||n!==0||s;return s=d,n=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,m){let g=u.clippingPlanes,y=u.clipIntersection,p=u.clipShadows,f=i.get(u);if(!s||g===null||g.length===0||r&&!p)r?h(null):l();else{let M=r?0:n,x=M*4,A=f.clippingState||null;c.value=A,A=h(g,d,x,m);for(let w=0;w!==x;++w)A[w]=t[w];f.clippingState=A,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,m,g){let y=u!==null?u.length:0,p=null;if(y!==0){if(p=c.value,g!==!0||p===null){let f=m+y*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(p===null||p.length<f)&&(p=new Float32Array(f));for(let x=0,A=m;x!==y;++x,A+=4)a.copy(u[x]).applyMatrix4(M,o),a.normal.toArray(p,A),p[A+3]=a.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,p}}function sg(i){let e=new WeakMap;function t(a,o){return o===dc?a.mapping=Bs:o===fc&&(a.mapping=zs),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===dc||o===fc)if(e.has(a)){let c=e.get(a).texture;return t(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new Sc(c.height/2);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var za=class extends Fa{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Is=4,Eh=[.125,.215,.35,.446,.526,.582],ts=20,Ko=new za,bh=new He,Qo=null,jo=0,ec=0,ji=(1+Math.sqrt(5))/2,ws=1/ji,Th=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,ji,ws),new P(0,ji,-ws),new P(ws,0,ji),new P(-ws,0,ji),new P(ji,ws,0),new P(-ji,ws,0)],Ha=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Qo=this._renderer.getRenderTarget(),jo=this._renderer.getActiveCubeFace(),ec=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ah(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Qo,jo,ec),e.scissorTest=!1,aa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Bs||e.mapping===zs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qo=this._renderer.getRenderTarget(),jo=this._renderer.getActiveCubeFace(),ec=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Fn,minFilter:Fn,generateMipmaps:!1,type:pr,format:Jn,colorSpace:_i,depthBuffer:!1},s=wh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wh(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=rg(r)),this._blurMaterial=ag(r,e,t)}return s}_compileMaterial(e){let t=new Le(this._lodPlanes[0],e);this._renderer.compile(t,Ko)}_sceneToCubeUV(e,t,n,s){let o=new yn(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(bh),h.toneMapping=Ni,h.autoClear=!1;let m=new $n({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1}),g=new Le(new Mn,m),y=!1,p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,y=!0):(m.color.copy(bh),y=!0);for(let f=0;f<6;f++){let M=f%3;M===0?(o.up.set(0,c[f],0),o.lookAt(l[f],0,0)):M===1?(o.up.set(0,0,c[f]),o.lookAt(0,l[f],0)):(o.up.set(0,c[f],0),o.lookAt(0,0,l[f]));let x=this._cubeSize;aa(s,M*x,f>2?x:0,x,x),h.setRenderTarget(s),y&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=p}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Bs||e.mapping===zs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ah());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Le(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;aa(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Ko)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Th[(s-1)%Th.length];this._blur(e,s-1,s,r,a)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Le(this._lodPlanes[s],l),d=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*ts-1),y=r/g,p=isFinite(r)?1+Math.floor(h*y):ts;p>ts&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ts}`);let f=[],M=0;for(let L=0;L<ts;++L){let V=L/y,S=Math.exp(-V*V/2);f.push(S),L===0?M+=S:L<p&&(M+=2*S)}for(let L=0;L<f.length;L++)f[L]=f[L]/M;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;let A=this._sizeLods[s],w=3*A*(s>x-Is?s-x+Is:0),_=4*(this._cubeSize-A);aa(t,w,_,3*A,2*A),c.setRenderTarget(t),c.render(u,Ko)}};function rg(i){let e=[],t=[],n=[],s=i,r=i-Is+1+Eh.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let c=1/o;a>i-Is?c=Eh[a-i+Is-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,y=3,p=2,f=1,M=new Float32Array(y*g*m),x=new Float32Array(p*g*m),A=new Float32Array(f*g*m);for(let _=0;_<m;_++){let L=_%3*2/3-1,V=_>2?0:-1,S=[L,V,0,L+2/3,V,0,L+2/3,V+1,0,L,V,0,L+2/3,V+1,0,L,V+1,0];M.set(S,y*g*_),x.set(d,p*g*_);let b=[_,_,_,_,_,_];A.set(b,f*g*_)}let w=new zt;w.setAttribute("position",new vn(M,y)),w.setAttribute("uv",new vn(x,p)),w.setAttribute("faceIndex",new vn(A,f)),e.push(w),s>Is&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function wh(i,e,t){let n=new xi(i,e,t);return n.texture.mapping=ho,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function aa(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function ag(i,e,t){let n=new Float32Array(ts),s=new P(0,1,0);return new Kn({name:"SphericalGaussianBlur",defines:{n:ts,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ol(),fragmentShader:`

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
		`,blending:Di,depthTest:!1,depthWrite:!1})}function Ah(){return new Kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ol(),fragmentShader:`

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
		`,blending:Di,depthTest:!1,depthWrite:!1})}function Rh(){return new Kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ol(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function ol(){return`

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
	`}function og(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===dc||c===fc,h=c===Bs||c===zs;if(l||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=e.get(o);return t===null&&(t=new Ha(i)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),e.set(o,u),u.texture}else{if(e.has(o))return e.get(o).texture;{let u=o.image;if(l&&u&&u.height>0||h&&u&&s(u)){t===null&&(t=new Ha(i));let d=l?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function s(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function cg(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function lg(i,e,t,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let y=d.morphAttributes[g];for(let p=0,f=y.length;p<f;p++)e.remove(y[p])}d.removeEventListener("dispose",a),delete s[d.id];let m=r.get(d);m&&(e.remove(m),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function c(u){let d=u.attributes;for(let g in d)e.update(d[g],i.ARRAY_BUFFER);let m=u.morphAttributes;for(let g in m){let y=m[g];for(let p=0,f=y.length;p<f;p++)e.update(y[p],i.ARRAY_BUFFER)}}function l(u){let d=[],m=u.index,g=u.attributes.position,y=0;if(m!==null){let M=m.array;y=m.version;for(let x=0,A=M.length;x<A;x+=3){let w=M[x+0],_=M[x+1],L=M[x+2];d.push(w,_,_,L,L,w)}}else if(g!==void 0){let M=g.array;y=g.version;for(let x=0,A=M.length/3-1;x<A;x+=3){let w=x+0,_=x+1,L=x+2;d.push(w,_,_,L,L,w)}}else return;let p=new(Mu(d)?Oa:Na)(d,1);p.version=y;let f=r.get(u);f&&e.remove(f),r.set(u,p)}function h(u){let d=r.get(u);if(d){let m=u.index;m!==null&&d.version<m.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function hg(i,e,t,n){let s=n.isWebGL2,r;function a(m){r=m}let o,c;function l(m){o=m.type,c=m.bytesPerElement}function h(m,g){i.drawElements(r,g,o,m*c),t.update(g,r,1)}function u(m,g,y){if(y===0)return;let p,f;if(s)p=i,f="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](r,g,o,m*c,y),t.update(g,r,y)}function d(m,g,y){if(y===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<y;f++)this.render(m[f]/c,g[f]);else{p.multiDrawElementsWEBGL(r,g,0,o,m,0,y);let f=0;for(let M=0;M<y;M++)f+=g[M];t.update(f,r,1)}}this.setMode=a,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function ug(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function dg(i,e){return i[0]-e[0]}function fg(i,e){return Math.abs(e[1])-Math.abs(i[1])}function pg(i,e,t){let n={},s=new Float32Array(8),r=new WeakMap,a=new Wt,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,h,u){let d=l.morphTargetInfluences;if(e.isWebGL2===!0){let m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=m!==void 0?m.length:0,y=r.get(h);if(y===void 0||y.count!==g){let F=function(){j.dispose(),r.delete(h),h.removeEventListener("dispose",F)};y!==void 0&&y.texture.dispose();let M=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,A=h.morphAttributes.color!==void 0,w=h.morphAttributes.position||[],_=h.morphAttributes.normal||[],L=h.morphAttributes.color||[],V=0;M===!0&&(V=1),x===!0&&(V=2),A===!0&&(V=3);let S=h.attributes.position.count*V,b=1;S>e.maxTextureSize&&(b=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);let k=new Float32Array(S*b*4*g),j=new Ia(k,S,b,g);j.type=Ii,j.needsUpdate=!0;let fe=V*4;for(let z=0;z<g;z++){let J=w[z],ie=_[z],ne=L[z],te=S*b*4*z;for(let le=0;le<J.count;le++){let he=le*fe;M===!0&&(a.fromBufferAttribute(J,le),k[te+he+0]=a.x,k[te+he+1]=a.y,k[te+he+2]=a.z,k[te+he+3]=0),x===!0&&(a.fromBufferAttribute(ie,le),k[te+he+4]=a.x,k[te+he+5]=a.y,k[te+he+6]=a.z,k[te+he+7]=0),A===!0&&(a.fromBufferAttribute(ne,le),k[te+he+8]=a.x,k[te+he+9]=a.y,k[te+he+10]=a.z,k[te+he+11]=ne.itemSize===4?a.w:1)}}y={count:g,texture:j,size:new me(S,b)},r.set(h,y),h.addEventListener("dispose",F)}let p=0;for(let M=0;M<d.length;M++)p+=d[M];let f=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(i,"morphTargetBaseInfluence",f),u.getUniforms().setValue(i,"morphTargetInfluences",d),u.getUniforms().setValue(i,"morphTargetsTexture",y.texture,t),u.getUniforms().setValue(i,"morphTargetsTextureSize",y.size)}else{let m=d===void 0?0:d.length,g=n[h.id];if(g===void 0||g.length!==m){g=[];for(let x=0;x<m;x++)g[x]=[x,0];n[h.id]=g}for(let x=0;x<m;x++){let A=g[x];A[0]=x,A[1]=d[x]}g.sort(fg);for(let x=0;x<8;x++)x<m&&g[x][1]?(o[x][0]=g[x][0],o[x][1]=g[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(dg);let y=h.morphAttributes.position,p=h.morphAttributes.normal,f=0;for(let x=0;x<8;x++){let A=o[x],w=A[0],_=A[1];w!==Number.MAX_SAFE_INTEGER&&_?(y&&h.getAttribute("morphTarget"+x)!==y[w]&&h.setAttribute("morphTarget"+x,y[w]),p&&h.getAttribute("morphNormal"+x)!==p[w]&&h.setAttribute("morphNormal"+x,p[w]),s[x]=_,f+=_):(y&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),p&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),s[x]=0)}let M=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(i,"morphTargetBaseInfluence",M),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:c}}function mg(i,e,t,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function a(){s=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}var ka=class extends zn{constructor(e,t,n,s,r,a,o,c,l,h){if(h=h!==void 0?h:is,h!==is&&h!==Hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===is&&(n=Li),n===void 0&&h===Hs&&(n=ns),super(null,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:wn,this.minFilter=c!==void 0?c:wn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Tu=new zn,wu=new ka(1,1);wu.compareFunction=vu;var Au=new Ia,Ru=new vc,Cu=new Ba,Ch=[],Ph=[],Lh=new Float32Array(16),Ih=new Float32Array(9),Uh=new Float32Array(4);function Xs(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Ch[s];if(r===void 0&&(r=new Float32Array(s),Ch[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function en(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function tn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function fo(i,e){let t=Ph[e];t===void 0&&(t=new Int32Array(e),Ph[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function gg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function _g(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;i.uniform2fv(this.addr,e),tn(t,e)}}function xg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(en(t,e))return;i.uniform3fv(this.addr,e),tn(t,e)}}function yg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;i.uniform4fv(this.addr,e),tn(t,e)}}function vg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;Uh.set(n),i.uniformMatrix2fv(this.addr,!1,Uh),tn(t,n)}}function Mg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;Ih.set(n),i.uniformMatrix3fv(this.addr,!1,Ih),tn(t,n)}}function Sg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;Lh.set(n),i.uniformMatrix4fv(this.addr,!1,Lh),tn(t,n)}}function Eg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function bg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;i.uniform2iv(this.addr,e),tn(t,e)}}function Tg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;i.uniform3iv(this.addr,e),tn(t,e)}}function wg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;i.uniform4iv(this.addr,e),tn(t,e)}}function Ag(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Rg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;i.uniform2uiv(this.addr,e),tn(t,e)}}function Cg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;i.uniform3uiv(this.addr,e),tn(t,e)}}function Pg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;i.uniform4uiv(this.addr,e),tn(t,e)}}function Lg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?wu:Tu;t.setTexture2D(e||r,s)}function Ig(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Ru,s)}function Ug(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Cu,s)}function Dg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Au,s)}function Ng(i){switch(i){case 5126:return gg;case 35664:return _g;case 35665:return xg;case 35666:return yg;case 35674:return vg;case 35675:return Mg;case 35676:return Sg;case 5124:case 35670:return Eg;case 35667:case 35671:return bg;case 35668:case 35672:return Tg;case 35669:case 35673:return wg;case 5125:return Ag;case 36294:return Rg;case 36295:return Cg;case 36296:return Pg;case 35678:case 36198:case 36298:case 36306:case 35682:return Lg;case 35679:case 36299:case 36307:return Ig;case 35680:case 36300:case 36308:case 36293:return Ug;case 36289:case 36303:case 36311:case 36292:return Dg}}function Og(i,e){i.uniform1fv(this.addr,e)}function Fg(i,e){let t=Xs(e,this.size,2);i.uniform2fv(this.addr,t)}function Bg(i,e){let t=Xs(e,this.size,3);i.uniform3fv(this.addr,t)}function zg(i,e){let t=Xs(e,this.size,4);i.uniform4fv(this.addr,t)}function Hg(i,e){let t=Xs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function kg(i,e){let t=Xs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Vg(i,e){let t=Xs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Gg(i,e){i.uniform1iv(this.addr,e)}function Wg(i,e){i.uniform2iv(this.addr,e)}function Xg(i,e){i.uniform3iv(this.addr,e)}function qg(i,e){i.uniform4iv(this.addr,e)}function Yg(i,e){i.uniform1uiv(this.addr,e)}function Zg(i,e){i.uniform2uiv(this.addr,e)}function Jg(i,e){i.uniform3uiv(this.addr,e)}function $g(i,e){i.uniform4uiv(this.addr,e)}function Kg(i,e,t){let n=this.cache,s=e.length,r=fo(t,s);en(n,r)||(i.uniform1iv(this.addr,r),tn(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Tu,r[a])}function Qg(i,e,t){let n=this.cache,s=e.length,r=fo(t,s);en(n,r)||(i.uniform1iv(this.addr,r),tn(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Ru,r[a])}function jg(i,e,t){let n=this.cache,s=e.length,r=fo(t,s);en(n,r)||(i.uniform1iv(this.addr,r),tn(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Cu,r[a])}function e0(i,e,t){let n=this.cache,s=e.length,r=fo(t,s);en(n,r)||(i.uniform1iv(this.addr,r),tn(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Au,r[a])}function t0(i){switch(i){case 5126:return Og;case 35664:return Fg;case 35665:return Bg;case 35666:return zg;case 35674:return Hg;case 35675:return kg;case 35676:return Vg;case 5124:case 35670:return Gg;case 35667:case 35671:return Wg;case 35668:case 35672:return Xg;case 35669:case 35673:return qg;case 5125:return Yg;case 36294:return Zg;case 36295:return Jg;case 36296:return $g;case 35678:case 36198:case 36298:case 36306:case 35682:return Kg;case 35679:case 36299:case 36307:return Qg;case 35680:case 36300:case 36308:case 36293:return jg;case 36289:case 36303:case 36311:case 36292:return e0}}var Ec=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ng(t.type)}},bc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=t0(t.type)}},Tc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},tc=/(\w+)(\])?(\[|\.)?/g;function Dh(i,e){i.seq.push(e),i.map[e.id]=e}function n0(i,e,t){let n=i.name,s=n.length;for(tc.lastIndex=0;;){let r=tc.exec(n),a=tc.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Dh(t,l===void 0?new Ec(o,i,e):new bc(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new Tc(o),Dh(t,u)),t=u}}}var Fs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);n0(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Nh(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var i0=37297,s0=0;function r0(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function a0(i){let e=Pt.getPrimaries(Pt.workingColorSpace),t=Pt.getPrimaries(i),n;switch(e===t?n="":e===Aa&&t===wa?n="LinearDisplayP3ToLinearSRGB":e===wa&&t===Aa&&(n="LinearSRGBToLinearDisplayP3"),i){case _i:case uo:return[n,"LinearTransferOETF"];case Kt:case al:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Oh(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+r0(i.getShaderSource(e),a)}else return s}function o0(i,e){let t=a0(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function c0(i,e){let t;switch(e){case wd:t="Linear";break;case Ad:t="Reinhard";break;case Rd:t="OptimizedCineon";break;case sl:t="ACESFilmic";break;case Pd:t="AgX";break;case Cd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function l0(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Us).join(`
`)}function h0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Us).join(`
`)}function u0(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function d0(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Us(i){return i!==""}function Fh(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Bh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var f0=/^[ \t]*#include +<([\w\d./]+)>/gm;function wc(i){return i.replace(f0,m0)}var p0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function m0(i,e){let t=mt[e];if(t===void 0){let n=p0.get(e);if(n!==void 0)t=mt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return wc(t)}var g0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zh(i){return i.replace(g0,_0)}function _0(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Hh(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function x0(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===cu?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===il?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===fi&&(e="SHADOWMAP_TYPE_VSM"),e}function y0(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Bs:case zs:e="ENVMAP_TYPE_CUBE";break;case ho:e="ENVMAP_TYPE_CUBE_UV";break}return e}function v0(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===zs&&(e="ENVMAP_MODE_REFRACTION"),e}function M0(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case lu:e="ENVMAP_BLENDING_MULTIPLY";break;case bd:e="ENVMAP_BLENDING_MIX";break;case Td:e="ENVMAP_BLENDING_ADD";break}return e}function S0(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function E0(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=x0(t),l=y0(t),h=v0(t),u=M0(t),d=S0(t),m=t.isWebGL2?"":l0(t),g=h0(t),y=u0(r),p=s.createProgram(),f,M,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Us).join(`
`),f.length>0&&(f+=`
`),M=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Us).join(`
`),M.length>0&&(M+=`
`)):(f=[Hh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Us).join(`
`),M=[m,Hh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ni?"#define TONE_MAPPING":"",t.toneMapping!==Ni?mt.tonemapping_pars_fragment:"",t.toneMapping!==Ni?c0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,o0("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Us).join(`
`)),a=wc(a),a=Fh(a,t),a=Bh(a,t),o=wc(o),o=Fh(o,t),o=Bh(o,t),a=zh(a),o=zh(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,M=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===rh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===rh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);let A=x+f+a,w=x+M+o,_=Nh(s,s.VERTEX_SHADER,A),L=Nh(s,s.FRAGMENT_SHADER,w);s.attachShader(p,_),s.attachShader(p,L),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function V(j){if(i.debug.checkShaderErrors){let fe=s.getProgramInfoLog(p).trim(),F=s.getShaderInfoLog(_).trim(),z=s.getShaderInfoLog(L).trim(),J=!0,ie=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(J=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,_,L);else{let ne=Oh(s,_,"vertex"),te=Oh(s,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Program Info Log: `+fe+`
`+ne+`
`+te)}else fe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",fe):(F===""||z==="")&&(ie=!1);ie&&(j.diagnostics={runnable:J,programLog:fe,vertexShader:{log:F,prefix:f},fragmentShader:{log:z,prefix:M}})}s.deleteShader(_),s.deleteShader(L),S=new Fs(s,p),b=d0(s,p)}let S;this.getUniforms=function(){return S===void 0&&V(this),S};let b;this.getAttributes=function(){return b===void 0&&V(this),b};let k=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=s.getProgramParameter(p,i0)),k},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=s0++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=_,this.fragmentShader=L,this}var b0=0,Ac=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Rc(e),t.set(e,n)),n}},Rc=class{constructor(e){this.id=b0++,this.code=e,this.usedTimes=0}};function T0(i,e,t,n,s,r,a){let o=new Da,c=new Ac,l=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,d=s.vertexTextures,m=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(S){return S===0?"uv":`uv${S}`}function p(S,b,k,j,fe){let F=j.fog,z=fe.geometry,J=S.isMeshStandardMaterial?j.environment:null,ie=(S.isMeshStandardMaterial?t:e).get(S.envMap||J),ne=ie&&ie.mapping===ho?ie.image.height:null,te=g[S.type];S.precision!==null&&(m=s.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));let le=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,he=le!==void 0?le.length:0,Te=0;z.morphAttributes.position!==void 0&&(Te=1),z.morphAttributes.normal!==void 0&&(Te=2),z.morphAttributes.color!==void 0&&(Te=3);let $,se,we,Fe;if(te){let cn=ni[te];$=cn.vertexShader,se=cn.fragmentShader}else $=S.vertexShader,se=S.fragmentShader,c.update(S),we=c.getVertexShaderID(S),Fe=c.getFragmentShaderID(S);let Ue=i.getRenderTarget(),ke=fe.isInstancedMesh===!0,Qe=fe.isBatchedMesh===!0,Ne=!!S.map,tt=!!S.matcap,D=!!ie,re=!!S.aoMap,I=!!S.lightMap,de=!!S.bumpMap,K=!!S.normalMap,C=!!S.displacementMap,Y=!!S.emissiveMap,E=!!S.metalnessMap,v=!!S.roughnessMap,H=S.anisotropy>0,ue=S.clearcoat>0,ae=S.iridescence>0,oe=S.sheen>0,Oe=S.transmission>0,Ee=H&&!!S.anisotropyMap,Ie=ue&&!!S.clearcoatMap,Ve=ue&&!!S.clearcoatNormalMap,rt=ue&&!!S.clearcoatRoughnessMap,ce=ae&&!!S.iridescenceMap,_t=ae&&!!S.iridescenceThicknessMap,ct=oe&&!!S.sheenColorMap,je=oe&&!!S.sheenRoughnessMap,Be=!!S.specularMap,Pe=!!S.specularColorMap,nt=!!S.specularIntensityMap,St=Oe&&!!S.transmissionMap,Lt=Oe&&!!S.thicknessMap,et=!!S.gradientMap,_e=!!S.alphaMap,N=S.alphaTest>0,ve=!!S.alphaHash,be=!!S.extensions,$e=!!z.attributes.uv1,Ze=!!z.attributes.uv2,wt=!!z.attributes.uv3,Et=Ni;return S.toneMapped&&(Ue===null||Ue.isXRRenderTarget===!0)&&(Et=i.toneMapping),{isWebGL2:h,shaderID:te,shaderType:S.type,shaderName:S.name,vertexShader:$,fragmentShader:se,defines:S.defines,customVertexShaderID:we,customFragmentShaderID:Fe,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,batching:Qe,instancing:ke,instancingColor:ke&&fe.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Ue===null?i.outputColorSpace:Ue.isXRRenderTarget===!0?Ue.texture.colorSpace:_i,map:Ne,matcap:tt,envMap:D,envMapMode:D&&ie.mapping,envMapCubeUVHeight:ne,aoMap:re,lightMap:I,bumpMap:de,normalMap:K,displacementMap:d&&C,emissiveMap:Y,normalMapObjectSpace:K&&S.normalMapType===Vd,normalMapTangentSpace:K&&S.normalMapType===yu,metalnessMap:E,roughnessMap:v,anisotropy:H,anisotropyMap:Ee,clearcoat:ue,clearcoatMap:Ie,clearcoatNormalMap:Ve,clearcoatRoughnessMap:rt,iridescence:ae,iridescenceMap:ce,iridescenceThicknessMap:_t,sheen:oe,sheenColorMap:ct,sheenRoughnessMap:je,specularMap:Be,specularColorMap:Pe,specularIntensityMap:nt,transmission:Oe,transmissionMap:St,thicknessMap:Lt,gradientMap:et,opaque:S.transparent===!1&&S.blending===Ns,alphaMap:_e,alphaTest:N,alphaHash:ve,combine:S.combine,mapUv:Ne&&y(S.map.channel),aoMapUv:re&&y(S.aoMap.channel),lightMapUv:I&&y(S.lightMap.channel),bumpMapUv:de&&y(S.bumpMap.channel),normalMapUv:K&&y(S.normalMap.channel),displacementMapUv:C&&y(S.displacementMap.channel),emissiveMapUv:Y&&y(S.emissiveMap.channel),metalnessMapUv:E&&y(S.metalnessMap.channel),roughnessMapUv:v&&y(S.roughnessMap.channel),anisotropyMapUv:Ee&&y(S.anisotropyMap.channel),clearcoatMapUv:Ie&&y(S.clearcoatMap.channel),clearcoatNormalMapUv:Ve&&y(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&y(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&y(S.iridescenceMap.channel),iridescenceThicknessMapUv:_t&&y(S.iridescenceThicknessMap.channel),sheenColorMapUv:ct&&y(S.sheenColorMap.channel),sheenRoughnessMapUv:je&&y(S.sheenRoughnessMap.channel),specularMapUv:Be&&y(S.specularMap.channel),specularColorMapUv:Pe&&y(S.specularColorMap.channel),specularIntensityMapUv:nt&&y(S.specularIntensityMap.channel),transmissionMapUv:St&&y(S.transmissionMap.channel),thicknessMapUv:Lt&&y(S.thicknessMap.channel),alphaMapUv:_e&&y(S.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(K||H),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,vertexUv1s:$e,vertexUv2s:Ze,vertexUv3s:wt,pointsUvs:fe.isPoints===!0&&!!z.attributes.uv&&(Ne||_e),fog:!!F,useFog:S.fog===!0,fogExp2:F&&F.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:fe.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:Te,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&k.length>0,shadowMapType:i.shadowMap.type,toneMapping:Et,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Ne&&S.map.isVideoTexture===!0&&Pt.getTransfer(S.map.colorSpace)===Bt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===An,flipSided:S.side===an,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:be&&S.extensions.derivatives===!0,extensionFragDepth:be&&S.extensions.fragDepth===!0,extensionDrawBuffers:be&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:be&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:be&&S.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function f(S){let b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(let k in S.defines)b.push(k),b.push(S.defines[k]);return S.isRawShaderMaterial===!1&&(M(b,S),x(b,S),b.push(i.outputColorSpace)),b.push(S.customProgramCacheKey),b.join()}function M(S,b){S.push(b.precision),S.push(b.outputColorSpace),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.anisotropyMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.numLightProbes),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function x(S,b){o.disableAll(),b.isWebGL2&&o.enable(0),b.supportsVertexTextures&&o.enable(1),b.instancing&&o.enable(2),b.instancingColor&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),S.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.skinning&&o.enable(4),b.morphTargets&&o.enable(5),b.morphNormals&&o.enable(6),b.morphColors&&o.enable(7),b.premultipliedAlpha&&o.enable(8),b.shadowMapEnabled&&o.enable(9),b.useLegacyLights&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),S.push(o.mask)}function A(S){let b=g[S.type],k;if(b){let j=ni[b];k=pf.clone(j.uniforms)}else k=S.uniforms;return k}function w(S,b){let k;for(let j=0,fe=l.length;j<fe;j++){let F=l[j];if(F.cacheKey===b){k=F,++k.usedTimes;break}}return k===void 0&&(k=new E0(i,b,S,r),l.push(k)),k}function _(S){if(--S.usedTimes===0){let b=l.indexOf(S);l[b]=l[l.length-1],l.pop(),S.destroy()}}function L(S){c.remove(S)}function V(){c.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:A,acquireProgram:w,releaseProgram:_,releaseShaderCache:L,programs:l,dispose:V}}function w0(){let i=new WeakMap;function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function t(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function A0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function kh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Vh(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u,d,m,g,y,p){let f=i[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:m,groupOrder:g,renderOrder:u.renderOrder,z:y,group:p},i[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=m,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=y,f.group=p),e++,f}function o(u,d,m,g,y,p){let f=a(u,d,m,g,y,p);m.transmission>0?n.push(f):m.transparent===!0?s.push(f):t.push(f)}function c(u,d,m,g,y,p){let f=a(u,d,m,g,y,p);m.transmission>0?n.unshift(f):m.transparent===!0?s.unshift(f):t.unshift(f)}function l(u,d){t.length>1&&t.sort(u||A0),n.length>1&&n.sort(d||kh),s.length>1&&s.sort(d||kh)}function h(){for(let u=e,d=i.length;u<d;u++){let m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function R0(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Vh,i.set(n,[a])):s>=r.length?(a=new Vh,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function C0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new He};break;case"SpotLight":t={position:new P,direction:new P,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function P0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var L0=0;function I0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function U0(i,e){let t=new C0,n=P0(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new P);let r=new P,a=new Nt,o=new Nt;function c(h,u){let d=0,m=0,g=0;for(let j=0;j<9;j++)s.probe[j].set(0,0,0);let y=0,p=0,f=0,M=0,x=0,A=0,w=0,_=0,L=0,V=0,S=0;h.sort(I0);let b=u===!0?Math.PI:1;for(let j=0,fe=h.length;j<fe;j++){let F=h[j],z=F.color,J=F.intensity,ie=F.distance,ne=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)d+=z.r*J*b,m+=z.g*J*b,g+=z.b*J*b;else if(F.isLightProbe){for(let te=0;te<9;te++)s.probe[te].addScaledVector(F.sh.coefficients[te],J);S++}else if(F.isDirectionalLight){let te=t.get(F);if(te.color.copy(F.color).multiplyScalar(F.intensity*b),F.castShadow){let le=F.shadow,he=n.get(F);he.shadowBias=le.bias,he.shadowNormalBias=le.normalBias,he.shadowRadius=le.radius,he.shadowMapSize=le.mapSize,s.directionalShadow[y]=he,s.directionalShadowMap[y]=ne,s.directionalShadowMatrix[y]=F.shadow.matrix,A++}s.directional[y]=te,y++}else if(F.isSpotLight){let te=t.get(F);te.position.setFromMatrixPosition(F.matrixWorld),te.color.copy(z).multiplyScalar(J*b),te.distance=ie,te.coneCos=Math.cos(F.angle),te.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),te.decay=F.decay,s.spot[f]=te;let le=F.shadow;if(F.map&&(s.spotLightMap[L]=F.map,L++,le.updateMatrices(F),F.castShadow&&V++),s.spotLightMatrix[f]=le.matrix,F.castShadow){let he=n.get(F);he.shadowBias=le.bias,he.shadowNormalBias=le.normalBias,he.shadowRadius=le.radius,he.shadowMapSize=le.mapSize,s.spotShadow[f]=he,s.spotShadowMap[f]=ne,_++}f++}else if(F.isRectAreaLight){let te=t.get(F);te.color.copy(z).multiplyScalar(J),te.halfWidth.set(F.width*.5,0,0),te.halfHeight.set(0,F.height*.5,0),s.rectArea[M]=te,M++}else if(F.isPointLight){let te=t.get(F);if(te.color.copy(F.color).multiplyScalar(F.intensity*b),te.distance=F.distance,te.decay=F.decay,F.castShadow){let le=F.shadow,he=n.get(F);he.shadowBias=le.bias,he.shadowNormalBias=le.normalBias,he.shadowRadius=le.radius,he.shadowMapSize=le.mapSize,he.shadowCameraNear=le.camera.near,he.shadowCameraFar=le.camera.far,s.pointShadow[p]=he,s.pointShadowMap[p]=ne,s.pointShadowMatrix[p]=F.shadow.matrix,w++}s.point[p]=te,p++}else if(F.isHemisphereLight){let te=t.get(F);te.skyColor.copy(F.color).multiplyScalar(J*b),te.groundColor.copy(F.groundColor).multiplyScalar(J*b),s.hemi[x]=te,x++}}M>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Me.LTC_FLOAT_1,s.rectAreaLTC2=Me.LTC_FLOAT_2):(s.rectAreaLTC1=Me.LTC_HALF_1,s.rectAreaLTC2=Me.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Me.LTC_FLOAT_1,s.rectAreaLTC2=Me.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Me.LTC_HALF_1,s.rectAreaLTC2=Me.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=m,s.ambient[2]=g;let k=s.hash;(k.directionalLength!==y||k.pointLength!==p||k.spotLength!==f||k.rectAreaLength!==M||k.hemiLength!==x||k.numDirectionalShadows!==A||k.numPointShadows!==w||k.numSpotShadows!==_||k.numSpotMaps!==L||k.numLightProbes!==S)&&(s.directional.length=y,s.spot.length=f,s.rectArea.length=M,s.point.length=p,s.hemi.length=x,s.directionalShadow.length=A,s.directionalShadowMap.length=A,s.pointShadow.length=w,s.pointShadowMap.length=w,s.spotShadow.length=_,s.spotShadowMap.length=_,s.directionalShadowMatrix.length=A,s.pointShadowMatrix.length=w,s.spotLightMatrix.length=_+L-V,s.spotLightMap.length=L,s.numSpotLightShadowsWithMaps=V,s.numLightProbes=S,k.directionalLength=y,k.pointLength=p,k.spotLength=f,k.rectAreaLength=M,k.hemiLength=x,k.numDirectionalShadows=A,k.numPointShadows=w,k.numSpotShadows=_,k.numSpotMaps=L,k.numLightProbes=S,s.version=L0++)}function l(h,u){let d=0,m=0,g=0,y=0,p=0,f=u.matrixWorldInverse;for(let M=0,x=h.length;M<x;M++){let A=h[M];if(A.isDirectionalLight){let w=s.directional[d];w.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(f),d++}else if(A.isSpotLight){let w=s.spot[g];w.position.setFromMatrixPosition(A.matrixWorld),w.position.applyMatrix4(f),w.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(f),g++}else if(A.isRectAreaLight){let w=s.rectArea[y];w.position.setFromMatrixPosition(A.matrixWorld),w.position.applyMatrix4(f),o.identity(),a.copy(A.matrixWorld),a.premultiply(f),o.extractRotation(a),w.halfWidth.set(A.width*.5,0,0),w.halfHeight.set(0,A.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),y++}else if(A.isPointLight){let w=s.point[m];w.position.setFromMatrixPosition(A.matrixWorld),w.position.applyMatrix4(f),m++}else if(A.isHemisphereLight){let w=s.hemi[p];w.direction.setFromMatrixPosition(A.matrixWorld),w.direction.transformDirection(f),p++}}}return{setup:c,setupView:l,state:s}}function Gh(i,e){let t=new U0(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function a(u){n.push(u)}function o(u){s.push(u)}function c(u){t.setup(n,u)}function l(u){t.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function D0(i,e){let t=new WeakMap;function n(r,a=0){let o=t.get(r),c;return o===void 0?(c=new Gh(i,e),t.set(r,[c])):a>=o.length?(c=new Gh(i,e),o.push(c)):c=o[a],c}function s(){t=new WeakMap}return{get:n,dispose:s}}var Cc=class extends ii{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Pc=class extends ii{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},N0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,O0=`uniform sampler2D shadow_pass;
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
}`;function F0(i,e,t){let n=new gr,s=new me,r=new me,a=new Wt,o=new Cc({depthPacking:kd}),c=new Pc,l={},h=t.maxTextureSize,u={[Bi]:an,[an]:Bi,[An]:An},d=new Kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new me},radius:{value:4}},vertexShader:N0,fragmentShader:O0}),m=d.clone();m.defines.HORIZONTAL_PASS=1;let g=new zt;g.setAttribute("position",new vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Le(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cu;let f=this.type;this.render=function(_,L,V){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||_.length===0)return;let S=i.getRenderTarget(),b=i.getActiveCubeFace(),k=i.getActiveMipmapLevel(),j=i.state;j.setBlending(Di),j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);let fe=f!==fi&&this.type===fi,F=f===fi&&this.type!==fi;for(let z=0,J=_.length;z<J;z++){let ie=_[z],ne=ie.shadow;if(ne===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(ne.autoUpdate===!1&&ne.needsUpdate===!1)continue;s.copy(ne.mapSize);let te=ne.getFrameExtents();if(s.multiply(te),r.copy(ne.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/te.x),s.x=r.x*te.x,ne.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/te.y),s.y=r.y*te.y,ne.mapSize.y=r.y)),ne.map===null||fe===!0||F===!0){let he=this.type!==fi?{minFilter:wn,magFilter:wn}:{};ne.map!==null&&ne.map.dispose(),ne.map=new xi(s.x,s.y,he),ne.map.texture.name=ie.name+".shadowMap",ne.camera.updateProjectionMatrix()}i.setRenderTarget(ne.map),i.clear();let le=ne.getViewportCount();for(let he=0;he<le;he++){let Te=ne.getViewport(he);a.set(r.x*Te.x,r.y*Te.y,r.x*Te.z,r.y*Te.w),j.viewport(a),ne.updateMatrices(ie,he),n=ne.getFrustum(),A(L,V,ne.camera,ie,this.type)}ne.isPointLightShadow!==!0&&this.type===fi&&M(ne,V),ne.needsUpdate=!1}f=this.type,p.needsUpdate=!1,i.setRenderTarget(S,b,k)};function M(_,L){let V=e.update(y);d.defines.VSM_SAMPLES!==_.blurSamples&&(d.defines.VSM_SAMPLES=_.blurSamples,m.defines.VSM_SAMPLES=_.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),_.mapPass===null&&(_.mapPass=new xi(s.x,s.y)),d.uniforms.shadow_pass.value=_.map.texture,d.uniforms.resolution.value=_.mapSize,d.uniforms.radius.value=_.radius,i.setRenderTarget(_.mapPass),i.clear(),i.renderBufferDirect(L,null,V,d,y,null),m.uniforms.shadow_pass.value=_.mapPass.texture,m.uniforms.resolution.value=_.mapSize,m.uniforms.radius.value=_.radius,i.setRenderTarget(_.map),i.clear(),i.renderBufferDirect(L,null,V,m,y,null)}function x(_,L,V,S){let b=null,k=V.isPointLight===!0?_.customDistanceMaterial:_.customDepthMaterial;if(k!==void 0)b=k;else if(b=V.isPointLight===!0?c:o,i.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){let j=b.uuid,fe=L.uuid,F=l[j];F===void 0&&(F={},l[j]=F);let z=F[fe];z===void 0&&(z=b.clone(),F[fe]=z,L.addEventListener("dispose",w)),b=z}if(b.visible=L.visible,b.wireframe=L.wireframe,S===fi?b.side=L.shadowSide!==null?L.shadowSide:L.side:b.side=L.shadowSide!==null?L.shadowSide:u[L.side],b.alphaMap=L.alphaMap,b.alphaTest=L.alphaTest,b.map=L.map,b.clipShadows=L.clipShadows,b.clippingPlanes=L.clippingPlanes,b.clipIntersection=L.clipIntersection,b.displacementMap=L.displacementMap,b.displacementScale=L.displacementScale,b.displacementBias=L.displacementBias,b.wireframeLinewidth=L.wireframeLinewidth,b.linewidth=L.linewidth,V.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let j=i.properties.get(b);j.light=V}return b}function A(_,L,V,S,b){if(_.visible===!1)return;if(_.layers.test(L.layers)&&(_.isMesh||_.isLine||_.isPoints)&&(_.castShadow||_.receiveShadow&&b===fi)&&(!_.frustumCulled||n.intersectsObject(_))){_.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,_.matrixWorld);let fe=e.update(_),F=_.material;if(Array.isArray(F)){let z=fe.groups;for(let J=0,ie=z.length;J<ie;J++){let ne=z[J],te=F[ne.materialIndex];if(te&&te.visible){let le=x(_,te,S,b);_.onBeforeShadow(i,_,L,V,fe,le,ne),i.renderBufferDirect(V,null,fe,le,_,ne),_.onAfterShadow(i,_,L,V,fe,le,ne)}}}else if(F.visible){let z=x(_,F,S,b);_.onBeforeShadow(i,_,L,V,fe,z,null),i.renderBufferDirect(V,null,fe,z,_,null),_.onAfterShadow(i,_,L,V,fe,z,null)}}let j=_.children;for(let fe=0,F=j.length;fe<F;fe++)A(j[fe],L,V,S,b)}function w(_){_.target.removeEventListener("dispose",w);for(let V in l){let S=l[V],b=_.target.uuid;b in S&&(S[b].dispose(),delete S[b])}}}function B0(i,e,t){let n=t.isWebGL2;function s(){let N=!1,ve=new Wt,be=null,$e=new Wt(0,0,0,0);return{setMask:function(Ze){be!==Ze&&!N&&(i.colorMask(Ze,Ze,Ze,Ze),be=Ze)},setLocked:function(Ze){N=Ze},setClear:function(Ze,wt,Et,Ht,cn){cn===!0&&(Ze*=Ht,wt*=Ht,Et*=Ht),ve.set(Ze,wt,Et,Ht),$e.equals(ve)===!1&&(i.clearColor(Ze,wt,Et,Ht),$e.copy(ve))},reset:function(){N=!1,be=null,$e.set(-1,0,0,0)}}}function r(){let N=!1,ve=null,be=null,$e=null;return{setTest:function(Ze){Ze?Qe(i.DEPTH_TEST):Ne(i.DEPTH_TEST)},setMask:function(Ze){ve!==Ze&&!N&&(i.depthMask(Ze),ve=Ze)},setFunc:function(Ze){if(be!==Ze){switch(Ze){case _d:i.depthFunc(i.NEVER);break;case xd:i.depthFunc(i.ALWAYS);break;case yd:i.depthFunc(i.LESS);break;case Sa:i.depthFunc(i.LEQUAL);break;case vd:i.depthFunc(i.EQUAL);break;case Md:i.depthFunc(i.GEQUAL);break;case Sd:i.depthFunc(i.GREATER);break;case Ed:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}be=Ze}},setLocked:function(Ze){N=Ze},setClear:function(Ze){$e!==Ze&&(i.clearDepth(Ze),$e=Ze)},reset:function(){N=!1,ve=null,be=null,$e=null}}}function a(){let N=!1,ve=null,be=null,$e=null,Ze=null,wt=null,Et=null,Ht=null,cn=null;return{setTest:function(Rt){N||(Rt?Qe(i.STENCIL_TEST):Ne(i.STENCIL_TEST))},setMask:function(Rt){ve!==Rt&&!N&&(i.stencilMask(Rt),ve=Rt)},setFunc:function(Rt,nn,Cn){(be!==Rt||$e!==nn||Ze!==Cn)&&(i.stencilFunc(Rt,nn,Cn),be=Rt,$e=nn,Ze=Cn)},setOp:function(Rt,nn,Cn){(wt!==Rt||Et!==nn||Ht!==Cn)&&(i.stencilOp(Rt,nn,Cn),wt=Rt,Et=nn,Ht=Cn)},setLocked:function(Rt){N=Rt},setClear:function(Rt){cn!==Rt&&(i.clearStencil(Rt),cn=Rt)},reset:function(){N=!1,ve=null,be=null,$e=null,Ze=null,wt=null,Et=null,Ht=null,cn=null}}}let o=new s,c=new r,l=new a,h=new WeakMap,u=new WeakMap,d={},m={},g=new WeakMap,y=[],p=null,f=!1,M=null,x=null,A=null,w=null,_=null,L=null,V=null,S=new He(0,0,0),b=0,k=!1,j=null,fe=null,F=null,z=null,J=null,ie=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ne=!1,te=0,le=i.getParameter(i.VERSION);le.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(le)[1]),ne=te>=1):le.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(le)[1]),ne=te>=2);let he=null,Te={},$=i.getParameter(i.SCISSOR_BOX),se=i.getParameter(i.VIEWPORT),we=new Wt().fromArray($),Fe=new Wt().fromArray(se);function Ue(N,ve,be,$e){let Ze=new Uint8Array(4),wt=i.createTexture();i.bindTexture(N,wt),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Et=0;Et<be;Et++)n&&(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)?i.texImage3D(ve,0,i.RGBA,1,1,$e,0,i.RGBA,i.UNSIGNED_BYTE,Ze):i.texImage2D(ve+Et,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ze);return wt}let ke={};ke[i.TEXTURE_2D]=Ue(i.TEXTURE_2D,i.TEXTURE_2D,1),ke[i.TEXTURE_CUBE_MAP]=Ue(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(ke[i.TEXTURE_2D_ARRAY]=Ue(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ke[i.TEXTURE_3D]=Ue(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Qe(i.DEPTH_TEST),c.setFunc(Sa),Y(!1),E(El),Qe(i.CULL_FACE),K(Di);function Qe(N){d[N]!==!0&&(i.enable(N),d[N]=!0)}function Ne(N){d[N]!==!1&&(i.disable(N),d[N]=!1)}function tt(N,ve){return m[N]!==ve?(i.bindFramebuffer(N,ve),m[N]=ve,n&&(N===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=ve),N===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=ve)),!0):!1}function D(N,ve){let be=y,$e=!1;if(N)if(be=g.get(ve),be===void 0&&(be=[],g.set(ve,be)),N.isWebGLMultipleRenderTargets){let Ze=N.texture;if(be.length!==Ze.length||be[0]!==i.COLOR_ATTACHMENT0){for(let wt=0,Et=Ze.length;wt<Et;wt++)be[wt]=i.COLOR_ATTACHMENT0+wt;be.length=Ze.length,$e=!0}}else be[0]!==i.COLOR_ATTACHMENT0&&(be[0]=i.COLOR_ATTACHMENT0,$e=!0);else be[0]!==i.BACK&&(be[0]=i.BACK,$e=!0);$e&&(t.isWebGL2?i.drawBuffers(be):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(be))}function re(N){return p!==N?(i.useProgram(N),p=N,!0):!1}let I={[es]:i.FUNC_ADD,[nd]:i.FUNC_SUBTRACT,[id]:i.FUNC_REVERSE_SUBTRACT};if(n)I[Al]=i.MIN,I[Rl]=i.MAX;else{let N=e.get("EXT_blend_minmax");N!==null&&(I[Al]=N.MIN_EXT,I[Rl]=N.MAX_EXT)}let de={[sd]:i.ZERO,[rd]:i.ONE,[ad]:i.SRC_COLOR,[hc]:i.SRC_ALPHA,[dd]:i.SRC_ALPHA_SATURATE,[hd]:i.DST_COLOR,[cd]:i.DST_ALPHA,[od]:i.ONE_MINUS_SRC_COLOR,[uc]:i.ONE_MINUS_SRC_ALPHA,[ud]:i.ONE_MINUS_DST_COLOR,[ld]:i.ONE_MINUS_DST_ALPHA,[fd]:i.CONSTANT_COLOR,[pd]:i.ONE_MINUS_CONSTANT_COLOR,[md]:i.CONSTANT_ALPHA,[gd]:i.ONE_MINUS_CONSTANT_ALPHA};function K(N,ve,be,$e,Ze,wt,Et,Ht,cn,Rt){if(N===Di){f===!0&&(Ne(i.BLEND),f=!1);return}if(f===!1&&(Qe(i.BLEND),f=!0),N!==td){if(N!==M||Rt!==k){if((x!==es||_!==es)&&(i.blendEquation(i.FUNC_ADD),x=es,_=es),Rt)switch(N){case Ns:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case bl:i.blendFunc(i.ONE,i.ONE);break;case Tl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case wl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Ns:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case bl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Tl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case wl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}A=null,w=null,L=null,V=null,S.set(0,0,0),b=0,M=N,k=Rt}return}Ze=Ze||ve,wt=wt||be,Et=Et||$e,(ve!==x||Ze!==_)&&(i.blendEquationSeparate(I[ve],I[Ze]),x=ve,_=Ze),(be!==A||$e!==w||wt!==L||Et!==V)&&(i.blendFuncSeparate(de[be],de[$e],de[wt],de[Et]),A=be,w=$e,L=wt,V=Et),(Ht.equals(S)===!1||cn!==b)&&(i.blendColor(Ht.r,Ht.g,Ht.b,cn),S.copy(Ht),b=cn),M=N,k=!1}function C(N,ve){N.side===An?Ne(i.CULL_FACE):Qe(i.CULL_FACE);let be=N.side===an;ve&&(be=!be),Y(be),N.blending===Ns&&N.transparent===!1?K(Di):K(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),c.setFunc(N.depthFunc),c.setTest(N.depthTest),c.setMask(N.depthWrite),o.setMask(N.colorWrite);let $e=N.stencilWrite;l.setTest($e),$e&&(l.setMask(N.stencilWriteMask),l.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),l.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),H(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?Qe(i.SAMPLE_ALPHA_TO_COVERAGE):Ne(i.SAMPLE_ALPHA_TO_COVERAGE)}function Y(N){j!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),j=N)}function E(N){N!==ju?(Qe(i.CULL_FACE),N!==fe&&(N===El?i.cullFace(i.BACK):N===ed?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ne(i.CULL_FACE),fe=N}function v(N){N!==F&&(ne&&i.lineWidth(N),F=N)}function H(N,ve,be){N?(Qe(i.POLYGON_OFFSET_FILL),(z!==ve||J!==be)&&(i.polygonOffset(ve,be),z=ve,J=be)):Ne(i.POLYGON_OFFSET_FILL)}function ue(N){N?Qe(i.SCISSOR_TEST):Ne(i.SCISSOR_TEST)}function ae(N){N===void 0&&(N=i.TEXTURE0+ie-1),he!==N&&(i.activeTexture(N),he=N)}function oe(N,ve,be){be===void 0&&(he===null?be=i.TEXTURE0+ie-1:be=he);let $e=Te[be];$e===void 0&&($e={type:void 0,texture:void 0},Te[be]=$e),($e.type!==N||$e.texture!==ve)&&(he!==be&&(i.activeTexture(be),he=be),i.bindTexture(N,ve||ke[N]),$e.type=N,$e.texture=ve)}function Oe(){let N=Te[he];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Ee(){try{i.compressedTexImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ie(){try{i.compressedTexImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ve(){try{i.texSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function rt(){try{i.texSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ce(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function _t(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ct(){try{i.texStorage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function je(){try{i.texStorage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Be(){try{i.texImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Pe(){try{i.texImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function nt(N){we.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),we.copy(N))}function St(N){Fe.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),Fe.copy(N))}function Lt(N,ve){let be=u.get(ve);be===void 0&&(be=new WeakMap,u.set(ve,be));let $e=be.get(N);$e===void 0&&($e=i.getUniformBlockIndex(ve,N.name),be.set(N,$e))}function et(N,ve){let $e=u.get(ve).get(N);h.get(ve)!==$e&&(i.uniformBlockBinding(ve,$e,N.__bindingPointIndex),h.set(ve,$e))}function _e(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},he=null,Te={},m={},g=new WeakMap,y=[],p=null,f=!1,M=null,x=null,A=null,w=null,_=null,L=null,V=null,S=new He(0,0,0),b=0,k=!1,j=null,fe=null,F=null,z=null,J=null,we.set(0,0,i.canvas.width,i.canvas.height),Fe.set(0,0,i.canvas.width,i.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:Qe,disable:Ne,bindFramebuffer:tt,drawBuffers:D,useProgram:re,setBlending:K,setMaterial:C,setFlipSided:Y,setCullFace:E,setLineWidth:v,setPolygonOffset:H,setScissorTest:ue,activeTexture:ae,bindTexture:oe,unbindTexture:Oe,compressedTexImage2D:Ee,compressedTexImage3D:Ie,texImage2D:Be,texImage3D:Pe,updateUBOMapping:Lt,uniformBlockBinding:et,texStorage2D:ct,texStorage3D:je,texSubImage2D:Ve,texSubImage3D:rt,compressedTexSubImage2D:ce,compressedTexSubImage3D:_t,scissor:nt,viewport:St,reset:_e}}function z0(i,e,t,n,s,r,a){let o=s.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,v){return m?new OffscreenCanvas(E,v):Ca("canvas")}function y(E,v,H,ue){let ae=1;if((E.width>ue||E.height>ue)&&(ae=ue/Math.max(E.width,E.height)),ae<1||v===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){let oe=v?xc:Math.floor,Oe=oe(ae*E.width),Ee=oe(ae*E.height);u===void 0&&(u=g(Oe,Ee));let Ie=H?g(Oe,Ee):u;return Ie.width=Oe,Ie.height=Ee,Ie.getContext("2d").drawImage(E,0,0,Oe,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+Oe+"x"+Ee+")."),Ie}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function p(E){return ah(E.width)&&ah(E.height)}function f(E){return o?!1:E.wrapS!==Zn||E.wrapT!==Zn||E.minFilter!==wn&&E.minFilter!==Fn}function M(E,v){return E.generateMipmaps&&v&&E.minFilter!==wn&&E.minFilter!==Fn}function x(E){i.generateMipmap(E)}function A(E,v,H,ue,ae=!1){if(o===!1)return v;if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let oe=v;if(v===i.RED&&(H===i.FLOAT&&(oe=i.R32F),H===i.HALF_FLOAT&&(oe=i.R16F),H===i.UNSIGNED_BYTE&&(oe=i.R8)),v===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(oe=i.R8UI),H===i.UNSIGNED_SHORT&&(oe=i.R16UI),H===i.UNSIGNED_INT&&(oe=i.R32UI),H===i.BYTE&&(oe=i.R8I),H===i.SHORT&&(oe=i.R16I),H===i.INT&&(oe=i.R32I)),v===i.RG&&(H===i.FLOAT&&(oe=i.RG32F),H===i.HALF_FLOAT&&(oe=i.RG16F),H===i.UNSIGNED_BYTE&&(oe=i.RG8)),v===i.RGBA){let Oe=ae?Ta:Pt.getTransfer(ue);H===i.FLOAT&&(oe=i.RGBA32F),H===i.HALF_FLOAT&&(oe=i.RGBA16F),H===i.UNSIGNED_BYTE&&(oe=Oe===Bt?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(oe=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(oe=i.RGB5_A1)}return(oe===i.R16F||oe===i.R32F||oe===i.RG16F||oe===i.RG32F||oe===i.RGBA16F||oe===i.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function w(E,v,H){return M(E,H)===!0||E.isFramebufferTexture&&E.minFilter!==wn&&E.minFilter!==Fn?Math.log2(Math.max(v.width,v.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?v.mipmaps.length:1}function _(E){return E===wn||E===Cl||E===wo?i.NEAREST:i.LINEAR}function L(E){let v=E.target;v.removeEventListener("dispose",L),S(v),v.isVideoTexture&&h.delete(v)}function V(E){let v=E.target;v.removeEventListener("dispose",V),k(v)}function S(E){let v=n.get(E);if(v.__webglInit===void 0)return;let H=E.source,ue=d.get(H);if(ue){let ae=ue[v.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&b(E),Object.keys(ue).length===0&&d.delete(H)}n.remove(E)}function b(E){let v=n.get(E);i.deleteTexture(v.__webglTexture);let H=E.source,ue=d.get(H);delete ue[v.__cacheKey],a.memory.textures--}function k(E){let v=E.texture,H=n.get(E),ue=n.get(v);if(ue.__webglTexture!==void 0&&(i.deleteTexture(ue.__webglTexture),a.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(H.__webglFramebuffer[ae]))for(let oe=0;oe<H.__webglFramebuffer[ae].length;oe++)i.deleteFramebuffer(H.__webglFramebuffer[ae][oe]);else i.deleteFramebuffer(H.__webglFramebuffer[ae]);H.__webglDepthbuffer&&i.deleteRenderbuffer(H.__webglDepthbuffer[ae])}else{if(Array.isArray(H.__webglFramebuffer))for(let ae=0;ae<H.__webglFramebuffer.length;ae++)i.deleteFramebuffer(H.__webglFramebuffer[ae]);else i.deleteFramebuffer(H.__webglFramebuffer);if(H.__webglDepthbuffer&&i.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&i.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let ae=0;ae<H.__webglColorRenderbuffer.length;ae++)H.__webglColorRenderbuffer[ae]&&i.deleteRenderbuffer(H.__webglColorRenderbuffer[ae]);H.__webglDepthRenderbuffer&&i.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let ae=0,oe=v.length;ae<oe;ae++){let Oe=n.get(v[ae]);Oe.__webglTexture&&(i.deleteTexture(Oe.__webglTexture),a.memory.textures--),n.remove(v[ae])}n.remove(v),n.remove(E)}let j=0;function fe(){j=0}function F(){let E=j;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),j+=1,E}function z(E){let v=[];return v.push(E.wrapS),v.push(E.wrapT),v.push(E.wrapR||0),v.push(E.magFilter),v.push(E.minFilter),v.push(E.anisotropy),v.push(E.internalFormat),v.push(E.format),v.push(E.type),v.push(E.generateMipmaps),v.push(E.premultiplyAlpha),v.push(E.flipY),v.push(E.unpackAlignment),v.push(E.colorSpace),v.join()}function J(E,v){let H=n.get(E);if(E.isVideoTexture&&C(E),E.isRenderTargetTexture===!1&&E.version>0&&H.__version!==E.version){let ue=E.image;if(ue===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ue.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{we(H,E,v);return}}t.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+v)}function ie(E,v){let H=n.get(E);if(E.version>0&&H.__version!==E.version){we(H,E,v);return}t.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+v)}function ne(E,v){let H=n.get(E);if(E.version>0&&H.__version!==E.version){we(H,E,v);return}t.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+v)}function te(E,v){let H=n.get(E);if(E.version>0&&H.__version!==E.version){Fe(H,E,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+v)}let le={[dr]:i.REPEAT,[Zn]:i.CLAMP_TO_EDGE,[pc]:i.MIRRORED_REPEAT},he={[wn]:i.NEAREST,[Cl]:i.NEAREST_MIPMAP_NEAREST,[wo]:i.NEAREST_MIPMAP_LINEAR,[Fn]:i.LINEAR,[Ld]:i.LINEAR_MIPMAP_NEAREST,[fr]:i.LINEAR_MIPMAP_LINEAR},Te={[Gd]:i.NEVER,[Jd]:i.ALWAYS,[Wd]:i.LESS,[vu]:i.LEQUAL,[Xd]:i.EQUAL,[Zd]:i.GEQUAL,[qd]:i.GREATER,[Yd]:i.NOTEQUAL};function $(E,v,H){if(H?(i.texParameteri(E,i.TEXTURE_WRAP_S,le[v.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,le[v.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,le[v.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,he[v.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,he[v.minFilter])):(i.texParameteri(E,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(E,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(v.wrapS!==Zn||v.wrapT!==Zn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(E,i.TEXTURE_MAG_FILTER,_(v.magFilter)),i.texParameteri(E,i.TEXTURE_MIN_FILTER,_(v.minFilter)),v.minFilter!==wn&&v.minFilter!==Fn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,Te[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let ue=e.get("EXT_texture_filter_anisotropic");if(v.magFilter===wn||v.minFilter!==wo&&v.minFilter!==fr||v.type===Ii&&e.has("OES_texture_float_linear")===!1||o===!1&&v.type===pr&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||n.get(v).__currentAnisotropy)&&(i.texParameterf(E,ue.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy)}}function se(E,v){let H=!1;E.__webglInit===void 0&&(E.__webglInit=!0,v.addEventListener("dispose",L));let ue=v.source,ae=d.get(ue);ae===void 0&&(ae={},d.set(ue,ae));let oe=z(v);if(oe!==E.__cacheKey){ae[oe]===void 0&&(ae[oe]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,H=!0),ae[oe].usedTimes++;let Oe=ae[E.__cacheKey];Oe!==void 0&&(ae[E.__cacheKey].usedTimes--,Oe.usedTimes===0&&b(v)),E.__cacheKey=oe,E.__webglTexture=ae[oe].texture}return H}function we(E,v,H){let ue=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(ue=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(ue=i.TEXTURE_3D);let ae=se(E,v),oe=v.source;t.bindTexture(ue,E.__webglTexture,i.TEXTURE0+H);let Oe=n.get(oe);if(oe.version!==Oe.__version||ae===!0){t.activeTexture(i.TEXTURE0+H);let Ee=Pt.getPrimaries(Pt.workingColorSpace),Ie=v.colorSpace===Bn?null:Pt.getPrimaries(v.colorSpace),Ve=v.colorSpace===Bn||Ee===Ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);let rt=f(v)&&p(v.image)===!1,ce=y(v.image,rt,!1,s.maxTextureSize);ce=Y(v,ce);let _t=p(ce)||o,ct=r.convert(v.format,v.colorSpace),je=r.convert(v.type),Be=A(v.internalFormat,ct,je,v.colorSpace,v.isVideoTexture);$(ue,v,_t);let Pe,nt=v.mipmaps,St=o&&v.isVideoTexture!==!0&&Be!==_u,Lt=Oe.__version===void 0||ae===!0,et=w(v,ce,_t);if(v.isDepthTexture)Be=i.DEPTH_COMPONENT,o?v.type===Ii?Be=i.DEPTH_COMPONENT32F:v.type===Li?Be=i.DEPTH_COMPONENT24:v.type===ns?Be=i.DEPTH24_STENCIL8:Be=i.DEPTH_COMPONENT16:v.type===Ii&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===is&&Be===i.DEPTH_COMPONENT&&v.type!==rl&&v.type!==Li&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=Li,je=r.convert(v.type)),v.format===Hs&&Be===i.DEPTH_COMPONENT&&(Be=i.DEPTH_STENCIL,v.type!==ns&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=ns,je=r.convert(v.type))),Lt&&(St?t.texStorage2D(i.TEXTURE_2D,1,Be,ce.width,ce.height):t.texImage2D(i.TEXTURE_2D,0,Be,ce.width,ce.height,0,ct,je,null));else if(v.isDataTexture)if(nt.length>0&&_t){St&&Lt&&t.texStorage2D(i.TEXTURE_2D,et,Be,nt[0].width,nt[0].height);for(let _e=0,N=nt.length;_e<N;_e++)Pe=nt[_e],St?t.texSubImage2D(i.TEXTURE_2D,_e,0,0,Pe.width,Pe.height,ct,je,Pe.data):t.texImage2D(i.TEXTURE_2D,_e,Be,Pe.width,Pe.height,0,ct,je,Pe.data);v.generateMipmaps=!1}else St?(Lt&&t.texStorage2D(i.TEXTURE_2D,et,Be,ce.width,ce.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,ce.width,ce.height,ct,je,ce.data)):t.texImage2D(i.TEXTURE_2D,0,Be,ce.width,ce.height,0,ct,je,ce.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){St&&Lt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,et,Be,nt[0].width,nt[0].height,ce.depth);for(let _e=0,N=nt.length;_e<N;_e++)Pe=nt[_e],v.format!==Jn?ct!==null?St?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,_e,0,0,0,Pe.width,Pe.height,ce.depth,ct,Pe.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,_e,Be,Pe.width,Pe.height,ce.depth,0,Pe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):St?t.texSubImage3D(i.TEXTURE_2D_ARRAY,_e,0,0,0,Pe.width,Pe.height,ce.depth,ct,je,Pe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,_e,Be,Pe.width,Pe.height,ce.depth,0,ct,je,Pe.data)}else{St&&Lt&&t.texStorage2D(i.TEXTURE_2D,et,Be,nt[0].width,nt[0].height);for(let _e=0,N=nt.length;_e<N;_e++)Pe=nt[_e],v.format!==Jn?ct!==null?St?t.compressedTexSubImage2D(i.TEXTURE_2D,_e,0,0,Pe.width,Pe.height,ct,Pe.data):t.compressedTexImage2D(i.TEXTURE_2D,_e,Be,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):St?t.texSubImage2D(i.TEXTURE_2D,_e,0,0,Pe.width,Pe.height,ct,je,Pe.data):t.texImage2D(i.TEXTURE_2D,_e,Be,Pe.width,Pe.height,0,ct,je,Pe.data)}else if(v.isDataArrayTexture)St?(Lt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,et,Be,ce.width,ce.height,ce.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,ct,je,ce.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Be,ce.width,ce.height,ce.depth,0,ct,je,ce.data);else if(v.isData3DTexture)St?(Lt&&t.texStorage3D(i.TEXTURE_3D,et,Be,ce.width,ce.height,ce.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,ct,je,ce.data)):t.texImage3D(i.TEXTURE_3D,0,Be,ce.width,ce.height,ce.depth,0,ct,je,ce.data);else if(v.isFramebufferTexture){if(Lt)if(St)t.texStorage2D(i.TEXTURE_2D,et,Be,ce.width,ce.height);else{let _e=ce.width,N=ce.height;for(let ve=0;ve<et;ve++)t.texImage2D(i.TEXTURE_2D,ve,Be,_e,N,0,ct,je,null),_e>>=1,N>>=1}}else if(nt.length>0&&_t){St&&Lt&&t.texStorage2D(i.TEXTURE_2D,et,Be,nt[0].width,nt[0].height);for(let _e=0,N=nt.length;_e<N;_e++)Pe=nt[_e],St?t.texSubImage2D(i.TEXTURE_2D,_e,0,0,ct,je,Pe):t.texImage2D(i.TEXTURE_2D,_e,Be,ct,je,Pe);v.generateMipmaps=!1}else St?(Lt&&t.texStorage2D(i.TEXTURE_2D,et,Be,ce.width,ce.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,ct,je,ce)):t.texImage2D(i.TEXTURE_2D,0,Be,ct,je,ce);M(v,_t)&&x(ue),Oe.__version=oe.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function Fe(E,v,H){if(v.image.length!==6)return;let ue=se(E,v),ae=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+H);let oe=n.get(ae);if(ae.version!==oe.__version||ue===!0){t.activeTexture(i.TEXTURE0+H);let Oe=Pt.getPrimaries(Pt.workingColorSpace),Ee=v.colorSpace===Bn?null:Pt.getPrimaries(v.colorSpace),Ie=v.colorSpace===Bn||Oe===Ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let Ve=v.isCompressedTexture||v.image[0].isCompressedTexture,rt=v.image[0]&&v.image[0].isDataTexture,ce=[];for(let _e=0;_e<6;_e++)!Ve&&!rt?ce[_e]=y(v.image[_e],!1,!0,s.maxCubemapSize):ce[_e]=rt?v.image[_e].image:v.image[_e],ce[_e]=Y(v,ce[_e]);let _t=ce[0],ct=p(_t)||o,je=r.convert(v.format,v.colorSpace),Be=r.convert(v.type),Pe=A(v.internalFormat,je,Be,v.colorSpace),nt=o&&v.isVideoTexture!==!0,St=oe.__version===void 0||ue===!0,Lt=w(v,_t,ct);$(i.TEXTURE_CUBE_MAP,v,ct);let et;if(Ve){nt&&St&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Lt,Pe,_t.width,_t.height);for(let _e=0;_e<6;_e++){et=ce[_e].mipmaps;for(let N=0;N<et.length;N++){let ve=et[N];v.format!==Jn?je!==null?nt?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,N,0,0,ve.width,ve.height,je,ve.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,N,Pe,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):nt?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,N,0,0,ve.width,ve.height,je,Be,ve.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,N,Pe,ve.width,ve.height,0,je,Be,ve.data)}}}else{et=v.mipmaps,nt&&St&&(et.length>0&&Lt++,t.texStorage2D(i.TEXTURE_CUBE_MAP,Lt,Pe,ce[0].width,ce[0].height));for(let _e=0;_e<6;_e++)if(rt){nt?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,ce[_e].width,ce[_e].height,je,Be,ce[_e].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,Pe,ce[_e].width,ce[_e].height,0,je,Be,ce[_e].data);for(let N=0;N<et.length;N++){let be=et[N].image[_e].image;nt?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,N+1,0,0,be.width,be.height,je,Be,be.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,N+1,Pe,be.width,be.height,0,je,Be,be.data)}}else{nt?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,je,Be,ce[_e]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,Pe,je,Be,ce[_e]);for(let N=0;N<et.length;N++){let ve=et[N];nt?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,N+1,0,0,je,Be,ve.image[_e]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,N+1,Pe,je,Be,ve.image[_e])}}}M(v,ct)&&x(i.TEXTURE_CUBE_MAP),oe.__version=ae.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function Ue(E,v,H,ue,ae,oe){let Oe=r.convert(H.format,H.colorSpace),Ee=r.convert(H.type),Ie=A(H.internalFormat,Oe,Ee,H.colorSpace);if(!n.get(v).__hasExternalTextures){let rt=Math.max(1,v.width>>oe),ce=Math.max(1,v.height>>oe);ae===i.TEXTURE_3D||ae===i.TEXTURE_2D_ARRAY?t.texImage3D(ae,oe,Ie,rt,ce,v.depth,0,Oe,Ee,null):t.texImage2D(ae,oe,Ie,rt,ce,0,Oe,Ee,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),K(v)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ue,ae,n.get(H).__webglTexture,0,de(v)):(ae===i.TEXTURE_2D||ae>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ue,ae,n.get(H).__webglTexture,oe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ke(E,v,H){if(i.bindRenderbuffer(i.RENDERBUFFER,E),v.depthBuffer&&!v.stencilBuffer){let ue=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(H||K(v)){let ae=v.depthTexture;ae&&ae.isDepthTexture&&(ae.type===Ii?ue=i.DEPTH_COMPONENT32F:ae.type===Li&&(ue=i.DEPTH_COMPONENT24));let oe=de(v);K(v)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,oe,ue,v.width,v.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,oe,ue,v.width,v.height)}else i.renderbufferStorage(i.RENDERBUFFER,ue,v.width,v.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,E)}else if(v.depthBuffer&&v.stencilBuffer){let ue=de(v);H&&K(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ue,i.DEPTH24_STENCIL8,v.width,v.height):K(v)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue,i.DEPTH24_STENCIL8,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,E)}else{let ue=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let ae=0;ae<ue.length;ae++){let oe=ue[ae],Oe=r.convert(oe.format,oe.colorSpace),Ee=r.convert(oe.type),Ie=A(oe.internalFormat,Oe,Ee,oe.colorSpace),Ve=de(v);H&&K(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ve,Ie,v.width,v.height):K(v)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ve,Ie,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Ie,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Qe(E,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),J(v.depthTexture,0);let ue=n.get(v.depthTexture).__webglTexture,ae=de(v);if(v.depthTexture.format===is)K(v)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ue,0,ae):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ue,0);else if(v.depthTexture.format===Hs)K(v)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ue,0,ae):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ue,0);else throw new Error("Unknown depthTexture format")}function Ne(E){let v=n.get(E),H=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!v.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Qe(v.__webglFramebuffer,E)}else if(H){v.__webglDepthbuffer=[];for(let ue=0;ue<6;ue++)t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[ue]),v.__webglDepthbuffer[ue]=i.createRenderbuffer(),ke(v.__webglDepthbuffer[ue],E,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=i.createRenderbuffer(),ke(v.__webglDepthbuffer,E,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function tt(E,v,H){let ue=n.get(E);v!==void 0&&Ue(ue.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&Ne(E)}function D(E){let v=E.texture,H=n.get(E),ue=n.get(v);E.addEventListener("dispose",V),E.isWebGLMultipleRenderTargets!==!0&&(ue.__webglTexture===void 0&&(ue.__webglTexture=i.createTexture()),ue.__version=v.version,a.memory.textures++);let ae=E.isWebGLCubeRenderTarget===!0,oe=E.isWebGLMultipleRenderTargets===!0,Oe=p(E)||o;if(ae){H.__webglFramebuffer=[];for(let Ee=0;Ee<6;Ee++)if(o&&v.mipmaps&&v.mipmaps.length>0){H.__webglFramebuffer[Ee]=[];for(let Ie=0;Ie<v.mipmaps.length;Ie++)H.__webglFramebuffer[Ee][Ie]=i.createFramebuffer()}else H.__webglFramebuffer[Ee]=i.createFramebuffer()}else{if(o&&v.mipmaps&&v.mipmaps.length>0){H.__webglFramebuffer=[];for(let Ee=0;Ee<v.mipmaps.length;Ee++)H.__webglFramebuffer[Ee]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(oe)if(s.drawBuffers){let Ee=E.texture;for(let Ie=0,Ve=Ee.length;Ie<Ve;Ie++){let rt=n.get(Ee[Ie]);rt.__webglTexture===void 0&&(rt.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&E.samples>0&&K(E)===!1){let Ee=oe?v:[v];H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let Ie=0;Ie<Ee.length;Ie++){let Ve=Ee[Ie];H.__webglColorRenderbuffer[Ie]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[Ie]);let rt=r.convert(Ve.format,Ve.colorSpace),ce=r.convert(Ve.type),_t=A(Ve.internalFormat,rt,ce,Ve.colorSpace,E.isXRRenderTarget===!0),ct=de(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,ct,_t,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,H.__webglColorRenderbuffer[Ie])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),ke(H.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ae){t.bindTexture(i.TEXTURE_CUBE_MAP,ue.__webglTexture),$(i.TEXTURE_CUBE_MAP,v,Oe);for(let Ee=0;Ee<6;Ee++)if(o&&v.mipmaps&&v.mipmaps.length>0)for(let Ie=0;Ie<v.mipmaps.length;Ie++)Ue(H.__webglFramebuffer[Ee][Ie],E,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ie);else Ue(H.__webglFramebuffer[Ee],E,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0);M(v,Oe)&&x(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(oe){let Ee=E.texture;for(let Ie=0,Ve=Ee.length;Ie<Ve;Ie++){let rt=Ee[Ie],ce=n.get(rt);t.bindTexture(i.TEXTURE_2D,ce.__webglTexture),$(i.TEXTURE_2D,rt,Oe),Ue(H.__webglFramebuffer,E,rt,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,0),M(rt,Oe)&&x(i.TEXTURE_2D)}t.unbindTexture()}else{let Ee=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(o?Ee=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Ee,ue.__webglTexture),$(Ee,v,Oe),o&&v.mipmaps&&v.mipmaps.length>0)for(let Ie=0;Ie<v.mipmaps.length;Ie++)Ue(H.__webglFramebuffer[Ie],E,v,i.COLOR_ATTACHMENT0,Ee,Ie);else Ue(H.__webglFramebuffer,E,v,i.COLOR_ATTACHMENT0,Ee,0);M(v,Oe)&&x(Ee),t.unbindTexture()}E.depthBuffer&&Ne(E)}function re(E){let v=p(E)||o,H=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ue=0,ae=H.length;ue<ae;ue++){let oe=H[ue];if(M(oe,v)){let Oe=E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Ee=n.get(oe).__webglTexture;t.bindTexture(Oe,Ee),x(Oe),t.unbindTexture()}}}function I(E){if(o&&E.samples>0&&K(E)===!1){let v=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],H=E.width,ue=E.height,ae=i.COLOR_BUFFER_BIT,oe=[],Oe=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ee=n.get(E),Ie=E.isWebGLMultipleRenderTargets===!0;if(Ie)for(let Ve=0;Ve<v.length;Ve++)t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ve,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ve,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let Ve=0;Ve<v.length;Ve++){oe.push(i.COLOR_ATTACHMENT0+Ve),E.depthBuffer&&oe.push(Oe);let rt=Ee.__ignoreDepthValues!==void 0?Ee.__ignoreDepthValues:!1;if(rt===!1&&(E.depthBuffer&&(ae|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&(ae|=i.STENCIL_BUFFER_BIT)),Ie&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[Ve]),rt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Oe]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Oe])),Ie){let ce=n.get(v[Ve]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ce,0)}i.blitFramebuffer(0,0,H,ue,0,0,H,ue,ae,i.NEAREST),l&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,oe)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ie)for(let Ve=0;Ve<v.length;Ve++){t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ve,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[Ve]);let rt=n.get(v[Ve]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ve,i.TEXTURE_2D,rt,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}}function de(E){return Math.min(s.maxSamples,E.samples)}function K(E){let v=n.get(E);return o&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function C(E){let v=a.render.frame;h.get(E)!==v&&(h.set(E,v),E.update())}function Y(E,v){let H=E.colorSpace,ue=E.format,ae=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===gc||H!==_i&&H!==Bn&&(Pt.getTransfer(H)===Bt?o===!1?e.has("EXT_sRGB")===!0&&ue===Jn?(E.format=gc,E.minFilter=Fn,E.generateMipmaps=!1):v=Pa.sRGBToLinear(v):(ue!==Jn||ae!==Oi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),v}this.allocateTextureUnit=F,this.resetTextureUnits=fe,this.setTexture2D=J,this.setTexture2DArray=ie,this.setTexture3D=ne,this.setTextureCube=te,this.rebindTextures=tt,this.setupRenderTarget=D,this.updateRenderTargetMipmap=re,this.updateMultisampleRenderTarget=I,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=Ue,this.useMultisampledRTT=K}function H0(i,e,t){let n=t.isWebGL2;function s(r,a=Bn){let o,c=Pt.getTransfer(a);if(r===Oi)return i.UNSIGNED_BYTE;if(r===du)return i.UNSIGNED_SHORT_4_4_4_4;if(r===fu)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Id)return i.BYTE;if(r===Ud)return i.SHORT;if(r===rl)return i.UNSIGNED_SHORT;if(r===uu)return i.INT;if(r===Li)return i.UNSIGNED_INT;if(r===Ii)return i.FLOAT;if(r===pr)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Dd)return i.ALPHA;if(r===Jn)return i.RGBA;if(r===Nd)return i.LUMINANCE;if(r===Od)return i.LUMINANCE_ALPHA;if(r===is)return i.DEPTH_COMPONENT;if(r===Hs)return i.DEPTH_STENCIL;if(r===gc)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Fd)return i.RED;if(r===pu)return i.RED_INTEGER;if(r===Bd)return i.RG;if(r===mu)return i.RG_INTEGER;if(r===gu)return i.RGBA_INTEGER;if(r===Ao||r===Ro||r===Co||r===Po)if(c===Bt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Ao)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ro)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Co)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Po)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Ao)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ro)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Co)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Po)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Pl||r===Ll||r===Il||r===Ul)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Pl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ll)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Il)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ul)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===_u)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Dl||r===Nl)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Dl)return c===Bt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Nl)return c===Bt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ol||r===Fl||r===Bl||r===zl||r===Hl||r===kl||r===Vl||r===Gl||r===Wl||r===Xl||r===ql||r===Yl||r===Zl||r===Jl)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Ol)return c===Bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Fl)return c===Bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Bl)return c===Bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===zl)return c===Bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Hl)return c===Bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===kl)return c===Bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Vl)return c===Bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Gl)return c===Bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Wl)return c===Bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Xl)return c===Bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ql)return c===Bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Yl)return c===Bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Zl)return c===Bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Jl)return c===Bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Lo||r===$l||r===Kl)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===Lo)return c===Bt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===$l)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Kl)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===zd||r===Ql||r===jl||r===eh)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===Lo)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Ql)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===jl)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===eh)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ns?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var Lc=class extends yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},st=class extends Qt{constructor(){super(),this.isGroup=!0,this.type="Group"}},k0={type:"move"},lr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new st,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new st,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new st,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let y of e.hand.values()){let p=t.getJointPose(y,n),f=this._getHandJoint(l,y);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,g=.005;l.inputState.pinching&&d>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(k0)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new st;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Ic=class extends zi{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,m=null,g=null,y=t.getContextAttributes(),p=null,f=null,M=[],x=[],A=new me,w=null,_=new yn;_.layers.enable(1),_.viewport=new Wt;let L=new yn;L.layers.enable(2),L.viewport=new Wt;let V=[_,L],S=new Lc;S.layers.enable(1),S.layers.enable(2);let b=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let se=M[$];return se===void 0&&(se=new lr,M[$]=se),se.getTargetRaySpace()},this.getControllerGrip=function($){let se=M[$];return se===void 0&&(se=new lr,M[$]=se),se.getGripSpace()},this.getHand=function($){let se=M[$];return se===void 0&&(se=new lr,M[$]=se),se.getHandSpace()};function j($){let se=x.indexOf($.inputSource);if(se===-1)return;let we=M[se];we!==void 0&&(we.update($.inputSource,$.frame,l||a),we.dispatchEvent({type:$.type,data:$.inputSource}))}function fe(){s.removeEventListener("select",j),s.removeEventListener("selectstart",j),s.removeEventListener("selectend",j),s.removeEventListener("squeeze",j),s.removeEventListener("squeezestart",j),s.removeEventListener("squeezeend",j),s.removeEventListener("end",fe),s.removeEventListener("inputsourceschange",F);for(let $=0;$<M.length;$++){let se=x[$];se!==null&&(x[$]=null,M[$].disconnect(se))}b=null,k=null,e.setRenderTarget(p),m=null,d=null,u=null,s=null,f=null,Te.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",j),s.addEventListener("selectstart",j),s.addEventListener("selectend",j),s.addEventListener("squeeze",j),s.addEventListener("squeezestart",j),s.addEventListener("squeezeend",j),s.addEventListener("end",fe),s.addEventListener("inputsourceschange",F),y.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(A),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let se={antialias:s.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,se),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),f=new xi(m.framebufferWidth,m.framebufferHeight,{format:Jn,type:Oi,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let se=null,we=null,Fe=null;y.depth&&(Fe=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=y.stencil?Hs:is,we=y.stencil?ns:Li);let Ue={colorFormat:t.RGBA8,depthFormat:Fe,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(Ue),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),f=new xi(d.textureWidth,d.textureHeight,{format:Jn,type:Oi,depthTexture:new ka(d.textureWidth,d.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});let ke=e.properties.get(f);ke.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Te.setContext(s),Te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function F($){for(let se=0;se<$.removed.length;se++){let we=$.removed[se],Fe=x.indexOf(we);Fe>=0&&(x[Fe]=null,M[Fe].disconnect(we))}for(let se=0;se<$.added.length;se++){let we=$.added[se],Fe=x.indexOf(we);if(Fe===-1){for(let ke=0;ke<M.length;ke++)if(ke>=x.length){x.push(we),Fe=ke;break}else if(x[ke]===null){x[ke]=we,Fe=ke;break}if(Fe===-1)break}let Ue=M[Fe];Ue&&Ue.connect(we)}}let z=new P,J=new P;function ie($,se,we){z.setFromMatrixPosition(se.matrixWorld),J.setFromMatrixPosition(we.matrixWorld);let Fe=z.distanceTo(J),Ue=se.projectionMatrix.elements,ke=we.projectionMatrix.elements,Qe=Ue[14]/(Ue[10]-1),Ne=Ue[14]/(Ue[10]+1),tt=(Ue[9]+1)/Ue[5],D=(Ue[9]-1)/Ue[5],re=(Ue[8]-1)/Ue[0],I=(ke[8]+1)/ke[0],de=Qe*re,K=Qe*I,C=Fe/(-re+I),Y=C*-re;se.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Y),$.translateZ(C),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert();let E=Qe+C,v=Ne+C,H=de-Y,ue=K+(Fe-Y),ae=tt*Ne/v*E,oe=D*Ne/v*E;$.projectionMatrix.makePerspective(H,ue,ae,oe,E,v),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}function ne($,se){se===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(se.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;S.near=L.near=_.near=$.near,S.far=L.far=_.far=$.far,(b!==S.near||k!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),b=S.near,k=S.far);let se=$.parent,we=S.cameras;ne(S,se);for(let Fe=0;Fe<we.length;Fe++)ne(we[Fe],se);we.length===2?ie(S,_,L):S.projectionMatrix.copy(_.projectionMatrix),te($,S,se)};function te($,se,we){we===null?$.matrix.copy(se.matrixWorld):($.matrix.copy(we.matrixWorld),$.matrix.invert(),$.matrix.multiply(se.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(se.projectionMatrix),$.projectionMatrixInverse.copy(se.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=_c*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function($){c=$,d!==null&&(d.fixedFoveation=$),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=$)};let le=null;function he($,se){if(h=se.getViewerPose(l||a),g=se,h!==null){let we=h.views;m!==null&&(e.setRenderTargetFramebuffer(f,m.framebuffer),e.setRenderTarget(f));let Fe=!1;we.length!==S.cameras.length&&(S.cameras.length=0,Fe=!0);for(let Ue=0;Ue<we.length;Ue++){let ke=we[Ue],Qe=null;if(m!==null)Qe=m.getViewport(ke);else{let tt=u.getViewSubImage(d,ke);Qe=tt.viewport,Ue===0&&(e.setRenderTargetTextures(f,tt.colorTexture,d.ignoreDepthValues?void 0:tt.depthStencilTexture),e.setRenderTarget(f))}let Ne=V[Ue];Ne===void 0&&(Ne=new yn,Ne.layers.enable(Ue),Ne.viewport=new Wt,V[Ue]=Ne),Ne.matrix.fromArray(ke.transform.matrix),Ne.matrix.decompose(Ne.position,Ne.quaternion,Ne.scale),Ne.projectionMatrix.fromArray(ke.projectionMatrix),Ne.projectionMatrixInverse.copy(Ne.projectionMatrix).invert(),Ne.viewport.set(Qe.x,Qe.y,Qe.width,Qe.height),Ue===0&&(S.matrix.copy(Ne.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),Fe===!0&&S.cameras.push(Ne)}}for(let we=0;we<M.length;we++){let Fe=x[we],Ue=M[we];Fe!==null&&Ue!==void 0&&Ue.update(Fe,se,l||a)}le&&le($,se),se.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:se}),g=null}let Te=new bu;Te.setAnimationLoop(he),this.setAnimationLoop=function($){le=$},this.dispose=function(){}}};function V0(i,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,Eu(i)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function s(p,f,M,x,A){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(p,f):f.isMeshToonMaterial?(r(p,f),u(p,f)):f.isMeshPhongMaterial?(r(p,f),h(p,f)):f.isMeshStandardMaterial?(r(p,f),d(p,f),f.isMeshPhysicalMaterial&&m(p,f,A)):f.isMeshMatcapMaterial?(r(p,f),g(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),y(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?c(p,f,M,x):f.isSpriteMaterial?l(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===an&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===an&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let M=e.get(f).envMap;if(M&&(p.envMap.value=M,p.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;let x=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*x,t(f.lightMap,p.lightMapTransform)}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function c(p,f,M,x){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*M,p.scale.value=x*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function l(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function h(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function u(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),e.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,M){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===an&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function y(p,f){let M=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function G0(i,e,t,n){let s={},r={},a=[],o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(M,x){let A=x.program;n.uniformBlockBinding(M,A)}function l(M,x){let A=s[M.id];A===void 0&&(g(M),A=h(M),s[M.id]=A,M.addEventListener("dispose",p));let w=x.program;n.updateUBOMapping(M,w);let _=e.render.frame;r[M.id]!==_&&(d(M),r[M.id]=_)}function h(M){let x=u();M.__bindingPointIndex=x;let A=i.createBuffer(),w=M.__size,_=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,w,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,A),A}function u(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){let x=s[M.id],A=M.uniforms,w=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let _=0,L=A.length;_<L;_++){let V=Array.isArray(A[_])?A[_]:[A[_]];for(let S=0,b=V.length;S<b;S++){let k=V[S];if(m(k,_,S,w)===!0){let j=k.__offset,fe=Array.isArray(k.value)?k.value:[k.value],F=0;for(let z=0;z<fe.length;z++){let J=fe[z],ie=y(J);typeof J=="number"||typeof J=="boolean"?(k.__data[0]=J,i.bufferSubData(i.UNIFORM_BUFFER,j+F,k.__data)):J.isMatrix3?(k.__data[0]=J.elements[0],k.__data[1]=J.elements[1],k.__data[2]=J.elements[2],k.__data[3]=0,k.__data[4]=J.elements[3],k.__data[5]=J.elements[4],k.__data[6]=J.elements[5],k.__data[7]=0,k.__data[8]=J.elements[6],k.__data[9]=J.elements[7],k.__data[10]=J.elements[8],k.__data[11]=0):(J.toArray(k.__data,F),F+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,j,k.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(M,x,A,w){let _=M.value,L=x+"_"+A;if(w[L]===void 0)return typeof _=="number"||typeof _=="boolean"?w[L]=_:w[L]=_.clone(),!0;{let V=w[L];if(typeof _=="number"||typeof _=="boolean"){if(V!==_)return w[L]=_,!0}else if(V.equals(_)===!1)return V.copy(_),!0}return!1}function g(M){let x=M.uniforms,A=0,w=16;for(let L=0,V=x.length;L<V;L++){let S=Array.isArray(x[L])?x[L]:[x[L]];for(let b=0,k=S.length;b<k;b++){let j=S[b],fe=Array.isArray(j.value)?j.value:[j.value];for(let F=0,z=fe.length;F<z;F++){let J=fe[F],ie=y(J),ne=A%w;ne!==0&&w-ne<ie.boundary&&(A+=w-ne),j.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=A,A+=ie.storage}}}let _=A%w;return _>0&&(A+=w-_),M.__size=A,M.__cache={},this}function y(M){let x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function p(M){let x=M.target;x.removeEventListener("dispose",p);let A=a.indexOf(x.__bindingPointIndex);a.splice(A,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function f(){for(let M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:c,update:l,dispose:f}}var _r=class{constructor(e={}){let{canvas:t=Kd(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;let m=new Uint32Array(4),g=new Int32Array(4),y=null,p=null,f=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Kt,this._useLegacyLights=!1,this.toneMapping=Ni,this.toneMappingExposure=1;let x=this,A=!1,w=0,_=0,L=null,V=-1,S=null,b=new Wt,k=new Wt,j=null,fe=new He(0),F=0,z=t.width,J=t.height,ie=1,ne=null,te=null,le=new Wt(0,0,z,J),he=new Wt(0,0,z,J),Te=!1,$=new gr,se=!1,we=!1,Fe=null,Ue=new Nt,ke=new me,Qe=new P,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function tt(){return L===null?ie:1}let D=n;function re(T,B){for(let X=0;X<T.length;X++){let q=T[X],G=t.getContext(q,B);if(G!==null)return G}return null}try{let T={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",_e,!1),t.addEventListener("webglcontextrestored",N,!1),t.addEventListener("webglcontextcreationerror",ve,!1),D===null){let B=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&B.shift(),D=re(B,T),D===null)throw re(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&D instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),D.getShaderPrecisionFormat===void 0&&(D.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let I,de,K,C,Y,E,v,H,ue,ae,oe,Oe,Ee,Ie,Ve,rt,ce,_t,ct,je,Be,Pe,nt,St;function Lt(){I=new cg(D),de=new ng(D,I,e),I.init(de),Pe=new H0(D,I,de),K=new B0(D,I,de),C=new ug(D),Y=new w0,E=new z0(D,I,K,Y,de,Pe,C),v=new sg(x),H=new og(x),ue=new yf(D,de),nt=new eg(D,I,ue,de),ae=new lg(D,ue,C,nt),oe=new mg(D,ae,ue,C),ct=new pg(D,de,E),rt=new ig(Y),Oe=new T0(x,v,H,I,de,nt,rt),Ee=new V0(x,Y),Ie=new R0,Ve=new D0(I,de),_t=new jm(x,v,H,K,oe,d,c),ce=new F0(x,oe,de),St=new G0(D,C,de,K),je=new tg(D,I,C,de),Be=new hg(D,I,C,de),C.programs=Oe.programs,x.capabilities=de,x.extensions=I,x.properties=Y,x.renderLists=Ie,x.shadowMap=ce,x.state=K,x.info=C}Lt();let et=new Ic(x,D);this.xr=et,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let T=I.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=I.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(T){T!==void 0&&(ie=T,this.setSize(z,J,!1))},this.getSize=function(T){return T.set(z,J)},this.setSize=function(T,B,X=!0){if(et.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=T,J=B,t.width=Math.floor(T*ie),t.height=Math.floor(B*ie),X===!0&&(t.style.width=T+"px",t.style.height=B+"px"),this.setViewport(0,0,T,B)},this.getDrawingBufferSize=function(T){return T.set(z*ie,J*ie).floor()},this.setDrawingBufferSize=function(T,B,X){z=T,J=B,ie=X,t.width=Math.floor(T*X),t.height=Math.floor(B*X),this.setViewport(0,0,T,B)},this.getCurrentViewport=function(T){return T.copy(b)},this.getViewport=function(T){return T.copy(le)},this.setViewport=function(T,B,X,q){T.isVector4?le.set(T.x,T.y,T.z,T.w):le.set(T,B,X,q),K.viewport(b.copy(le).multiplyScalar(ie).floor())},this.getScissor=function(T){return T.copy(he)},this.setScissor=function(T,B,X,q){T.isVector4?he.set(T.x,T.y,T.z,T.w):he.set(T,B,X,q),K.scissor(k.copy(he).multiplyScalar(ie).floor())},this.getScissorTest=function(){return Te},this.setScissorTest=function(T){K.setScissorTest(Te=T)},this.setOpaqueSort=function(T){ne=T},this.setTransparentSort=function(T){te=T},this.getClearColor=function(T){return T.copy(_t.getClearColor())},this.setClearColor=function(){_t.setClearColor.apply(_t,arguments)},this.getClearAlpha=function(){return _t.getClearAlpha()},this.setClearAlpha=function(){_t.setClearAlpha.apply(_t,arguments)},this.clear=function(T=!0,B=!0,X=!0){let q=0;if(T){let G=!1;if(L!==null){let Ae=L.texture.format;G=Ae===gu||Ae===mu||Ae===pu}if(G){let Ae=L.texture.type,De=Ae===Oi||Ae===Li||Ae===rl||Ae===ns||Ae===du||Ae===fu,We=_t.getClearColor(),Je=_t.getClearAlpha(),at=We.r,ze=We.g,ot=We.b;De?(m[0]=at,m[1]=ze,m[2]=ot,m[3]=Je,D.clearBufferuiv(D.COLOR,0,m)):(g[0]=at,g[1]=ze,g[2]=ot,g[3]=Je,D.clearBufferiv(D.COLOR,0,g))}else q|=D.COLOR_BUFFER_BIT}B&&(q|=D.DEPTH_BUFFER_BIT),X&&(q|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",_e,!1),t.removeEventListener("webglcontextrestored",N,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),Ie.dispose(),Ve.dispose(),Y.dispose(),v.dispose(),H.dispose(),oe.dispose(),nt.dispose(),St.dispose(),Oe.dispose(),et.dispose(),et.removeEventListener("sessionstart",cn),et.removeEventListener("sessionend",Rt),Fe&&(Fe.dispose(),Fe=null),nn.stop()};function _e(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function N(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let T=C.autoReset,B=ce.enabled,X=ce.autoUpdate,q=ce.needsUpdate,G=ce.type;Lt(),C.autoReset=T,ce.enabled=B,ce.autoUpdate=X,ce.needsUpdate=q,ce.type=G}function ve(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function be(T){let B=T.target;B.removeEventListener("dispose",be),$e(B)}function $e(T){Ze(T),Y.remove(T)}function Ze(T){let B=Y.get(T).programs;B!==void 0&&(B.forEach(function(X){Oe.releaseProgram(X)}),T.isShaderMaterial&&Oe.releaseShaderCache(T))}this.renderBufferDirect=function(T,B,X,q,G,Ae){B===null&&(B=Ne);let De=G.isMesh&&G.matrixWorld.determinant()<0,We=Si(T,B,X,q,G);K.setMaterial(q,De);let Je=X.index,at=1;if(q.wireframe===!0){if(Je=ae.getWireframeAttribute(X),Je===void 0)return;at=2}let ze=X.drawRange,ot=X.attributes.position,kt=ze.start*at,vt=(ze.start+ze.count)*at;Ae!==null&&(kt=Math.max(kt,Ae.start*at),vt=Math.min(vt,(Ae.start+Ae.count)*at)),Je!==null?(kt=Math.max(kt,0),vt=Math.min(vt,Je.count)):ot!=null&&(kt=Math.max(kt,0),vt=Math.min(vt,ot.count));let Mt=vt-kt;if(Mt<0||Mt===1/0)return;nt.setup(G,q,We,X,Je);let fn,It=je;if(Je!==null&&(fn=ue.get(Je),It=Be,It.setIndex(fn)),G.isMesh)q.wireframe===!0?(K.setLineWidth(q.wireframeLinewidth*tt()),It.setMode(D.LINES)):It.setMode(D.TRIANGLES);else if(G.isLine){let lt=q.linewidth;lt===void 0&&(lt=1),K.setLineWidth(lt*tt()),G.isLineSegments?It.setMode(D.LINES):G.isLineLoop?It.setMode(D.LINE_LOOP):It.setMode(D.LINE_STRIP)}else G.isPoints?It.setMode(D.POINTS):G.isSprite&&It.setMode(D.TRIANGLES);if(G.isBatchedMesh)It.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else if(G.isInstancedMesh)It.renderInstances(kt,Mt,G.count);else if(X.isInstancedBufferGeometry){let lt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,ai=Math.min(X.instanceCount,lt);It.renderInstances(kt,Mt,ai)}else It.render(kt,Mt)};function wt(T,B,X){T.transparent===!0&&T.side===An&&T.forceSinglePass===!1?(T.side=an,T.needsUpdate=!0,Mi(T,B,X),T.side=Bi,T.needsUpdate=!0,Mi(T,B,X),T.side=An):Mi(T,B,X)}this.compile=function(T,B,X=null){X===null&&(X=T),p=Ve.get(X),p.init(),M.push(p),X.traverseVisible(function(G){G.isLight&&G.layers.test(B.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),T!==X&&T.traverseVisible(function(G){G.isLight&&G.layers.test(B.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),p.setupLights(x._useLegacyLights);let q=new Set;return T.traverse(function(G){let Ae=G.material;if(Ae)if(Array.isArray(Ae))for(let De=0;De<Ae.length;De++){let We=Ae[De];wt(We,X,G),q.add(We)}else wt(Ae,X,G),q.add(Ae)}),M.pop(),p=null,q},this.compileAsync=function(T,B,X=null){let q=this.compile(T,B,X);return new Promise(G=>{function Ae(){if(q.forEach(function(De){Y.get(De).currentProgram.isReady()&&q.delete(De)}),q.size===0){G(T);return}setTimeout(Ae,10)}I.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let Et=null;function Ht(T){Et&&Et(T)}function cn(){nn.stop()}function Rt(){nn.start()}let nn=new bu;nn.setAnimationLoop(Ht),typeof self<"u"&&nn.setContext(self),this.setAnimationLoop=function(T){Et=T,et.setAnimationLoop(T),T===null?nn.stop():nn.start()},et.addEventListener("sessionstart",cn),et.addEventListener("sessionend",Rt),this.render=function(T,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),et.enabled===!0&&et.isPresenting===!0&&(et.cameraAutoUpdate===!0&&et.updateCamera(B),B=et.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,B,L),p=Ve.get(T,M.length),p.init(),M.push(p),Ue.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),$.setFromProjectionMatrix(Ue),we=this.localClippingEnabled,se=rt.init(this.clippingPlanes,we),y=Ie.get(T,f.length),y.init(),f.push(y),Cn(T,B,0,x.sortObjects),y.finish(),x.sortObjects===!0&&y.sort(ne,te),this.info.render.frame++,se===!0&&rt.beginShadows();let X=p.state.shadowsArray;if(ce.render(X,T,B),se===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset(),_t.render(y,T),p.setupLights(x._useLegacyLights),B.isArrayCamera){let q=B.cameras;for(let G=0,Ae=q.length;G<Ae;G++){let De=q[G];ri(y,T,De,De.viewport)}}else ri(y,T,B);L!==null&&(E.updateMultisampleRenderTarget(L),E.updateRenderTargetMipmap(L)),T.isScene===!0&&T.onAfterRender(x,T,B),nt.resetDefaultState(),V=-1,S=null,M.pop(),M.length>0?p=M[M.length-1]:p=null,f.pop(),f.length>0?y=f[f.length-1]:y=null};function Cn(T,B,X,q){if(T.visible===!1)return;if(T.layers.test(B.layers)){if(T.isGroup)X=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(B);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||$.intersectsSprite(T)){q&&Qe.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Ue);let De=oe.update(T),We=T.material;We.visible&&y.push(T,De,We,X,Qe.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||$.intersectsObject(T))){let De=oe.update(T),We=T.material;if(q&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Qe.copy(T.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),Qe.copy(De.boundingSphere.center)),Qe.applyMatrix4(T.matrixWorld).applyMatrix4(Ue)),Array.isArray(We)){let Je=De.groups;for(let at=0,ze=Je.length;at<ze;at++){let ot=Je[at],kt=We[ot.materialIndex];kt&&kt.visible&&y.push(T,De,kt,X,Qe.z,ot)}}else We.visible&&y.push(T,De,We,X,Qe.z,null)}}let Ae=T.children;for(let De=0,We=Ae.length;De<We;De++)Cn(Ae[De],B,X,q)}function ri(T,B,X,q){let G=T.opaque,Ae=T.transmissive,De=T.transparent;p.setupLightsView(X),se===!0&&rt.setGlobalState(x.clippingPlanes,X),Ae.length>0&&qs(G,Ae,B,X),q&&K.viewport(b.copy(q)),G.length>0&&ln(G,B,X),Ae.length>0&&ln(Ae,B,X),De.length>0&&ln(De,B,X),K.buffers.depth.setTest(!0),K.buffers.depth.setMask(!0),K.buffers.color.setMask(!0),K.setPolygonOffset(!1)}function qs(T,B,X,q){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;let Ae=de.isWebGL2;Fe===null&&(Fe=new xi(1,1,{generateMipmaps:!0,type:I.has("EXT_color_buffer_half_float")?pr:Oi,minFilter:fr,samples:Ae?4:0})),x.getDrawingBufferSize(ke),Ae?Fe.setSize(ke.x,ke.y):Fe.setSize(xc(ke.x),xc(ke.y));let De=x.getRenderTarget();x.setRenderTarget(Fe),x.getClearColor(fe),F=x.getClearAlpha(),F<1&&x.setClearColor(16777215,.5),x.clear();let We=x.toneMapping;x.toneMapping=Ni,ln(T,X,q),E.updateMultisampleRenderTarget(Fe),E.updateRenderTargetMipmap(Fe);let Je=!1;for(let at=0,ze=B.length;at<ze;at++){let ot=B[at],kt=ot.object,vt=ot.geometry,Mt=ot.material,fn=ot.group;if(Mt.side===An&&kt.layers.test(q.layers)){let It=Mt.side;Mt.side=an,Mt.needsUpdate=!0,Ge(kt,X,q,vt,Mt,fn),Mt.side=It,Mt.needsUpdate=!0,Je=!0}}Je===!0&&(E.updateMultisampleRenderTarget(Fe),E.updateRenderTargetMipmap(Fe)),x.setRenderTarget(De),x.setClearColor(fe,F),x.toneMapping=We}function ln(T,B,X){let q=B.isScene===!0?B.overrideMaterial:null;for(let G=0,Ae=T.length;G<Ae;G++){let De=T[G],We=De.object,Je=De.geometry,at=q===null?De.material:q,ze=De.group;We.layers.test(X.layers)&&Ge(We,B,X,Je,at,ze)}}function Ge(T,B,X,q,G,Ae){T.onBeforeRender(x,B,X,q,G,Ae),T.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),G.onBeforeRender(x,B,X,q,T,Ae),G.transparent===!0&&G.side===An&&G.forceSinglePass===!1?(G.side=an,G.needsUpdate=!0,x.renderBufferDirect(X,B,q,G,T,Ae),G.side=Bi,G.needsUpdate=!0,x.renderBufferDirect(X,B,q,G,T,Ae),G.side=An):x.renderBufferDirect(X,B,q,G,T,Ae),T.onAfterRender(x,B,X,q,G,Ae)}function Mi(T,B,X){B.isScene!==!0&&(B=Ne);let q=Y.get(T),G=p.state.lights,Ae=p.state.shadowsArray,De=G.state.version,We=Oe.getParameters(T,G.state,Ae,B,X),Je=Oe.getProgramCacheKey(We),at=q.programs;q.environment=T.isMeshStandardMaterial?B.environment:null,q.fog=B.fog,q.envMap=(T.isMeshStandardMaterial?H:v).get(T.envMap||q.environment),at===void 0&&(T.addEventListener("dispose",be),at=new Map,q.programs=at);let ze=at.get(Je);if(ze!==void 0){if(q.currentProgram===ze&&q.lightsStateVersion===De)return Xi(T,We),ze}else We.uniforms=Oe.getUniforms(T),T.onBuild(X,We,x),T.onBeforeCompile(We,x),ze=Oe.acquireProgram(We,Je),at.set(Je,ze),q.uniforms=We.uniforms;let ot=q.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(ot.clippingPlanes=rt.uniform),Xi(T,We),q.needsLights=Lr(T),q.lightsStateVersion=De,q.needsLights&&(ot.ambientLightColor.value=G.state.ambient,ot.lightProbe.value=G.state.probe,ot.directionalLights.value=G.state.directional,ot.directionalLightShadows.value=G.state.directionalShadow,ot.spotLights.value=G.state.spot,ot.spotLightShadows.value=G.state.spotShadow,ot.rectAreaLights.value=G.state.rectArea,ot.ltc_1.value=G.state.rectAreaLTC1,ot.ltc_2.value=G.state.rectAreaLTC2,ot.pointLights.value=G.state.point,ot.pointLightShadows.value=G.state.pointShadow,ot.hemisphereLights.value=G.state.hemi,ot.directionalShadowMap.value=G.state.directionalShadowMap,ot.directionalShadowMatrix.value=G.state.directionalShadowMatrix,ot.spotShadowMap.value=G.state.spotShadowMap,ot.spotLightMatrix.value=G.state.spotLightMatrix,ot.spotLightMap.value=G.state.spotLightMap,ot.pointShadowMap.value=G.state.pointShadowMap,ot.pointShadowMatrix.value=G.state.pointShadowMatrix),q.currentProgram=ze,q.uniformsList=null,ze}function Ys(T){if(T.uniformsList===null){let B=T.currentProgram.getUniforms();T.uniformsList=Fs.seqWithValue(B.seq,T.uniforms)}return T.uniformsList}function Xi(T,B){let X=Y.get(T);X.outputColorSpace=B.outputColorSpace,X.batching=B.batching,X.instancing=B.instancing,X.instancingColor=B.instancingColor,X.skinning=B.skinning,X.morphTargets=B.morphTargets,X.morphNormals=B.morphNormals,X.morphColors=B.morphColors,X.morphTargetsCount=B.morphTargetsCount,X.numClippingPlanes=B.numClippingPlanes,X.numIntersection=B.numClipIntersection,X.vertexAlphas=B.vertexAlphas,X.vertexTangents=B.vertexTangents,X.toneMapping=B.toneMapping}function Si(T,B,X,q,G){B.isScene!==!0&&(B=Ne),E.resetTextureUnits();let Ae=B.fog,De=q.isMeshStandardMaterial?B.environment:null,We=L===null?x.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:_i,Je=(q.isMeshStandardMaterial?H:v).get(q.envMap||De),at=q.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,ze=!!X.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),ot=!!X.morphAttributes.position,kt=!!X.morphAttributes.normal,vt=!!X.morphAttributes.color,Mt=Ni;q.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Mt=x.toneMapping);let fn=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,It=fn!==void 0?fn.length:0,lt=Y.get(q),ai=p.state.lights;if(se===!0&&(we===!0||T!==S)){let Xt=T===S&&q.id===V;rt.setState(q,T,Xt)}let Dt=!1;q.version===lt.__version?(lt.needsLights&&lt.lightsStateVersion!==ai.state.version||lt.outputColorSpace!==We||G.isBatchedMesh&&lt.batching===!1||!G.isBatchedMesh&&lt.batching===!0||G.isInstancedMesh&&lt.instancing===!1||!G.isInstancedMesh&&lt.instancing===!0||G.isSkinnedMesh&&lt.skinning===!1||!G.isSkinnedMesh&&lt.skinning===!0||G.isInstancedMesh&&lt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&lt.instancingColor===!1&&G.instanceColor!==null||lt.envMap!==Je||q.fog===!0&&lt.fog!==Ae||lt.numClippingPlanes!==void 0&&(lt.numClippingPlanes!==rt.numPlanes||lt.numIntersection!==rt.numIntersection)||lt.vertexAlphas!==at||lt.vertexTangents!==ze||lt.morphTargets!==ot||lt.morphNormals!==kt||lt.morphColors!==vt||lt.toneMapping!==Mt||de.isWebGL2===!0&&lt.morphTargetsCount!==It)&&(Dt=!0):(Dt=!0,lt.__version=q.version);let kn=lt.currentProgram;Dt===!0&&(kn=Mi(q,B,G));let Ir=!1,In=!1,cs=!1,Ot=kn.getUniforms(),jn=lt.uniforms;if(K.useProgram(kn.program)&&(Ir=!0,In=!0,cs=!0),q.id!==V&&(V=q.id,In=!0),Ir||S!==T){Ot.setValue(D,"projectionMatrix",T.projectionMatrix),Ot.setValue(D,"viewMatrix",T.matrixWorldInverse);let Xt=Ot.map.cameraPosition;Xt!==void 0&&Xt.setValue(D,Qe.setFromMatrixPosition(T.matrixWorld)),de.logarithmicDepthBuffer&&Ot.setValue(D,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Ot.setValue(D,"isOrthographic",T.isOrthographicCamera===!0),S!==T&&(S=T,In=!0,cs=!0)}if(G.isSkinnedMesh){Ot.setOptional(D,G,"bindMatrix"),Ot.setOptional(D,G,"bindMatrixInverse");let Xt=G.skeleton;Xt&&(de.floatVertexTextures?(Xt.boneTexture===null&&Xt.computeBoneTexture(),Ot.setValue(D,"boneTexture",Xt.boneTexture,E)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}G.isBatchedMesh&&(Ot.setOptional(D,G,"batchingTexture"),Ot.setValue(D,"batchingTexture",G._matricesTexture,E));let ls=X.morphAttributes;if((ls.position!==void 0||ls.normal!==void 0||ls.color!==void 0&&de.isWebGL2===!0)&&ct.update(G,X,kn),(In||lt.receiveShadow!==G.receiveShadow)&&(lt.receiveShadow=G.receiveShadow,Ot.setValue(D,"receiveShadow",G.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(jn.envMap.value=Je,jn.flipEnvMap.value=Je.isCubeTexture&&Je.isRenderTargetTexture===!1?-1:1),In&&(Ot.setValue(D,"toneMappingExposure",x.toneMappingExposure),lt.needsLights&&Zs(jn,cs),Ae&&q.fog===!0&&Ee.refreshFogUniforms(jn,Ae),Ee.refreshMaterialUniforms(jn,q,ie,J,Fe),Fs.upload(D,Ys(lt),jn,E)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Fs.upload(D,Ys(lt),jn,E),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Ot.setValue(D,"center",G.center),Ot.setValue(D,"modelViewMatrix",G.modelViewMatrix),Ot.setValue(D,"normalMatrix",G.normalMatrix),Ot.setValue(D,"modelMatrix",G.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){let Xt=q.uniformsGroups;for(let pn=0,Ei=Xt.length;pn<Ei;pn++)if(de.isWebGL2){let bi=Xt[pn];St.update(bi,kn),St.bind(bi,kn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return kn}function Zs(T,B){T.ambientLightColor.needsUpdate=B,T.lightProbe.needsUpdate=B,T.directionalLights.needsUpdate=B,T.directionalLightShadows.needsUpdate=B,T.pointLights.needsUpdate=B,T.pointLightShadows.needsUpdate=B,T.spotLights.needsUpdate=B,T.spotLightShadows.needsUpdate=B,T.rectAreaLights.needsUpdate=B,T.hemisphereLights.needsUpdate=B}function Lr(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return _},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(T,B,X){Y.get(T.texture).__webglTexture=B,Y.get(T.depthTexture).__webglTexture=X;let q=Y.get(T);q.__hasExternalTextures=!0,q.__hasExternalTextures&&(q.__autoAllocateDepthBuffer=X===void 0,q.__autoAllocateDepthBuffer||I.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,B){let X=Y.get(T);X.__webglFramebuffer=B,X.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(T,B=0,X=0){L=T,w=B,_=X;let q=!0,G=null,Ae=!1,De=!1;if(T){let Je=Y.get(T);Je.__useDefaultFramebuffer!==void 0?(K.bindFramebuffer(D.FRAMEBUFFER,null),q=!1):Je.__webglFramebuffer===void 0?E.setupRenderTarget(T):Je.__hasExternalTextures&&E.rebindTextures(T,Y.get(T.texture).__webglTexture,Y.get(T.depthTexture).__webglTexture);let at=T.texture;(at.isData3DTexture||at.isDataArrayTexture||at.isCompressedArrayTexture)&&(De=!0);let ze=Y.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(ze[B])?G=ze[B][X]:G=ze[B],Ae=!0):de.isWebGL2&&T.samples>0&&E.useMultisampledRTT(T)===!1?G=Y.get(T).__webglMultisampledFramebuffer:Array.isArray(ze)?G=ze[X]:G=ze,b.copy(T.viewport),k.copy(T.scissor),j=T.scissorTest}else b.copy(le).multiplyScalar(ie).floor(),k.copy(he).multiplyScalar(ie).floor(),j=Te;if(K.bindFramebuffer(D.FRAMEBUFFER,G)&&de.drawBuffers&&q&&K.drawBuffers(T,G),K.viewport(b),K.scissor(k),K.setScissorTest(j),Ae){let Je=Y.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+B,Je.__webglTexture,X)}else if(De){let Je=Y.get(T.texture),at=B||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Je.__webglTexture,X||0,at)}V=-1},this.readRenderTargetPixels=function(T,B,X,q,G,Ae,De){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=Y.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&De!==void 0&&(We=We[De]),We){K.bindFramebuffer(D.FRAMEBUFFER,We);try{let Je=T.texture,at=Je.format,ze=Je.type;if(at!==Jn&&Pe.convert(at)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let ot=ze===pr&&(I.has("EXT_color_buffer_half_float")||de.isWebGL2&&I.has("EXT_color_buffer_float"));if(ze!==Oi&&Pe.convert(ze)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ze===Ii&&(de.isWebGL2||I.has("OES_texture_float")||I.has("WEBGL_color_buffer_float")))&&!ot){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=T.width-q&&X>=0&&X<=T.height-G&&D.readPixels(B,X,q,G,Pe.convert(at),Pe.convert(ze),Ae)}finally{let Je=L!==null?Y.get(L).__webglFramebuffer:null;K.bindFramebuffer(D.FRAMEBUFFER,Je)}}},this.copyFramebufferToTexture=function(T,B,X=0){let q=Math.pow(2,-X),G=Math.floor(B.image.width*q),Ae=Math.floor(B.image.height*q);E.setTexture2D(B,0),D.copyTexSubImage2D(D.TEXTURE_2D,X,0,0,T.x,T.y,G,Ae),K.unbindTexture()},this.copyTextureToTexture=function(T,B,X,q=0){let G=B.image.width,Ae=B.image.height,De=Pe.convert(X.format),We=Pe.convert(X.type);E.setTexture2D(X,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,X.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,X.unpackAlignment),B.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,q,T.x,T.y,G,Ae,De,We,B.image.data):B.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,q,T.x,T.y,B.mipmaps[0].width,B.mipmaps[0].height,De,B.mipmaps[0].data):D.texSubImage2D(D.TEXTURE_2D,q,T.x,T.y,De,We,B.image),q===0&&X.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),K.unbindTexture()},this.copyTextureToTexture3D=function(T,B,X,q,G=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Ae=T.max.x-T.min.x+1,De=T.max.y-T.min.y+1,We=T.max.z-T.min.z+1,Je=Pe.convert(q.format),at=Pe.convert(q.type),ze;if(q.isData3DTexture)E.setTexture3D(q,0),ze=D.TEXTURE_3D;else if(q.isDataArrayTexture||q.isCompressedArrayTexture)E.setTexture2DArray(q,0),ze=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,q.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,q.unpackAlignment);let ot=D.getParameter(D.UNPACK_ROW_LENGTH),kt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),vt=D.getParameter(D.UNPACK_SKIP_PIXELS),Mt=D.getParameter(D.UNPACK_SKIP_ROWS),fn=D.getParameter(D.UNPACK_SKIP_IMAGES),It=X.isCompressedTexture?X.mipmaps[G]:X.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,It.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,It.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,T.min.x),D.pixelStorei(D.UNPACK_SKIP_ROWS,T.min.y),D.pixelStorei(D.UNPACK_SKIP_IMAGES,T.min.z),X.isDataTexture||X.isData3DTexture?D.texSubImage3D(ze,G,B.x,B.y,B.z,Ae,De,We,Je,at,It.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),D.compressedTexSubImage3D(ze,G,B.x,B.y,B.z,Ae,De,We,Je,It.data)):D.texSubImage3D(ze,G,B.x,B.y,B.z,Ae,De,We,Je,at,It),D.pixelStorei(D.UNPACK_ROW_LENGTH,ot),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,kt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,vt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Mt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,fn),G===0&&q.generateMipmaps&&D.generateMipmap(ze),K.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?E.setTextureCube(T,0):T.isData3DTexture?E.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?E.setTexture2DArray(T,0):E.setTexture2D(T,0),K.unbindTexture()},this.resetState=function(){w=0,_=0,L=null,K.reset(),nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===al?"display-p3":"srgb",t.unpackColorSpace=Pt.workingColorSpace===uo?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Kt?ss:xu}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ss?Kt:_i}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Uc=class extends _r{};Uc.prototype.isWebGL1Renderer=!0;var Va=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new He(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ga=class extends Qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},Dc=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=mc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=gi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},bn=new P,Wa=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)bn.fromBufferAttribute(this,t),bn.applyMatrix4(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)bn.fromBufferAttribute(this,t),bn.applyNormalMatrix(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)bn.fromBufferAttribute(this,t),bn.transformDirection(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}setX(e,t){return this.normalized&&(t=Ut(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=pi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=pi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=pi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=pi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array),s=Ut(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array),s=Ut(s,this.array),r=Ut(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new vn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},xr=class extends ii{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},As,nr=new P,Rs=new P,Cs=new P,Ps=new me,ir=new me,Pu=new Nt,oa=new P,sr=new P,ca=new P,Wh=new me,nc=new me,Xh=new me,Xa=class extends Qt{constructor(e=new xr){if(super(),this.isSprite=!0,this.type="Sprite",As===void 0){As=new zt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Dc(t,5);As.setIndex([0,1,2,0,2,3]),As.setAttribute("position",new Wa(n,3,0,!1)),As.setAttribute("uv",new Wa(n,2,3,!1))}this.geometry=As,this.material=e,this.center=new me(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Rs.setFromMatrixScale(this.matrixWorld),Pu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Cs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Rs.multiplyScalar(-Cs.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;la(oa.set(-.5,-.5,0),Cs,a,Rs,s,r),la(sr.set(.5,-.5,0),Cs,a,Rs,s,r),la(ca.set(.5,.5,0),Cs,a,Rs,s,r),Wh.set(0,0),nc.set(1,0),Xh.set(1,1);let o=e.ray.intersectTriangle(oa,sr,ca,!1,nr);if(o===null&&(la(sr.set(-.5,.5,0),Cs,a,Rs,s,r),nc.set(0,1),o=e.ray.intersectTriangle(oa,ca,sr,!1,nr),o===null))return;let c=e.ray.origin.distanceTo(nr);c<e.near||c>e.far||t.push({distance:c,point:nr.clone(),uv:Ui.getInterpolation(nr,oa,sr,ca,Wh,nc,Xh,new me),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function la(i,e,t,n,s,r){Ps.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(ir.x=r*Ps.x-s*Ps.y,ir.y=s*Ps.x+r*Ps.y):ir.copy(Ps),i.copy(e),i.x+=ir.x,i.y+=ir.y,i.applyMatrix4(Pu)}var qa=class extends vn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ls=new Nt,qh=new Nt,ha=[],Yh=new yi,W0=new Nt,rr=new Le,ar=new vi,Ya=class extends Le{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new qa(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,W0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new yi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ls),Yh.copy(e.boundingBox).applyMatrix4(Ls),this.boundingBox.union(Yh)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new vi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ls),ar.copy(e.boundingSphere).applyMatrix4(Ls),this.boundingSphere.union(ar)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,s=this.count;if(rr.geometry=this.geometry,rr.material=this.material,rr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ar.copy(this.boundingSphere),ar.applyMatrix4(n),e.ray.intersectsSphere(ar)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ls),qh.multiplyMatrices(n,Ls),rr.matrixWorld=qh,rr.raycast(e,ha);for(let a=0,o=ha.length;a<o;a++){let c=ha[a];c.instanceId=r,c.object=this,t.push(c)}ha.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new qa(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var ki=class extends ii{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new He(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Zh=new P,Jh=new P,$h=new Nt,ic=new mr,ua=new vi,Vs=class extends Qt{constructor(e=new zt,t=new ki){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Zh.fromBufferAttribute(t,s-1),Jh.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Zh.distanceTo(Jh);e.setAttribute("lineDistance",new xt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ua.copy(n.boundingSphere),ua.applyMatrix4(s),ua.radius+=r,e.ray.intersectsSphere(ua)===!1)return;$h.copy(s).invert(),ic.copy(e.ray).applyMatrix4($h);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=new P,h=new P,u=new P,d=new P,m=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){let f=Math.max(0,a.start),M=Math.min(g.count,a.start+a.count);for(let x=f,A=M-1;x<A;x+=m){let w=g.getX(x),_=g.getX(x+1);if(l.fromBufferAttribute(p,w),h.fromBufferAttribute(p,_),ic.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);let V=e.ray.origin.distanceTo(d);V<e.near||V>e.far||t.push({distance:V,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{let f=Math.max(0,a.start),M=Math.min(p.count,a.start+a.count);for(let x=f,A=M-1;x<A;x+=m){if(l.fromBufferAttribute(p,x),h.fromBufferAttribute(p,x+1),ic.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);let _=e.ray.origin.distanceTo(d);_<e.near||_>e.far||t.push({distance:_,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}},Kh=new P,Qh=new P,yr=class extends Vs{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Kh.fromBufferAttribute(t,s),Qh.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Kh.distanceTo(Qh);e.setAttribute("lineDistance",new xt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var vr=class extends ii{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},jh=new Nt,Nc=new mr,da=new vi,fa=new P,Za=class extends Qt{constructor(e=new zt,t=new vr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),da.copy(n.boundingSphere),da.applyMatrix4(s),da.radius+=r,e.ray.intersectsSphere(da)===!1)return;jh.copy(s).invert(),Nc.copy(e.ray).applyMatrix4(jh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,a.start),m=Math.min(l.count,a.start+a.count);for(let g=d,y=m;g<y;g++){let p=l.getX(g);fa.fromBufferAttribute(u,p),eu(fa,p,c,s,e,t,this)}}else{let d=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let g=d,y=m;g<y;g++)fa.fromBufferAttribute(u,g),eu(fa,g,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function eu(i,e,t,n,s,r,a){let o=Nc.distanceSqToPoint(i);if(o<t){let c=new P;Nc.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,object:a})}}var Mr=class extends zn{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Hn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,m=(a-h)/d;return(s+m)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=t||(a.isVector2?new me:new P);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new P,s=[],r=[],a=[],o=new P,c=new Nt;for(let m=0;m<=e;m++){let g=m/e;s[m]=this.getTangentAt(g,new P)}r[0]=new P,a[0]=new P;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let m=1;m<=e;m++){if(r[m]=r[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(s[m-1],s[m]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(xn(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(c.makeRotationAxis(o,g))}a[m].crossVectors(s[m],r[m])}if(t===!0){let m=Math.acos(xn(r[0].dot(r[e]),-1,1));m/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(m=-m);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],m*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Sr=class extends Hn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t){let n=t||new me,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,m=l-this.aY;c=d*h-m*u+this.aX,l=d*u+m*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Oc=class extends Sr{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function cl(){let i=0,e=0,t=0,n=0;function s(r,a,o,c){i=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,u){let d=(a-r)/l-(o-r)/(l+h)+(o-a)/h,m=(o-a)/h-(c-a)/(h+u)+(c-o)/u;d*=h,m*=h,s(a,o,d,m)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var pa=new P,sc=new cl,rc=new cl,ac=new cl,Fc=class extends Hn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new P){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(pa.subVectors(s[0],s[1]).add(s[0]),l=pa);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(pa.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=pa),this.curveType==="centripetal"||this.curveType==="chordal"){let m=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),m),y=Math.pow(u.distanceToSquared(d),m),p=Math.pow(d.distanceToSquared(h),m);y<1e-4&&(y=1),g<1e-4&&(g=y),p<1e-4&&(p=y),sc.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,y,p),rc.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,y,p),ac.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,y,p)}else this.curveType==="catmullrom"&&(sc.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),rc.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),ac.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(sc.calc(c),rc.calc(c),ac.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new P().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function tu(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,c=i*o;return(2*t-2*n+r+a)*c+(-3*t+3*n-2*r-a)*o+r*i+t}function X0(i,e){let t=1-i;return t*t*e}function q0(i,e){return 2*(1-i)*i*e}function Y0(i,e){return i*i*e}function hr(i,e,t,n){return X0(i,e)+q0(i,t)+Y0(i,n)}function Z0(i,e){let t=1-i;return t*t*t*e}function J0(i,e){let t=1-i;return 3*t*t*i*e}function $0(i,e){return 3*(1-i)*i*i*e}function K0(i,e){return i*i*i*e}function ur(i,e,t,n,s){return Z0(i,e)+J0(i,t)+$0(i,n)+K0(i,s)}var Ja=class extends Hn{constructor(e=new me,t=new me,n=new me,s=new me){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new me){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ur(e,s.x,r.x,a.x,o.x),ur(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Bc=class extends Hn{constructor(e=new P,t=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new P){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ur(e,s.x,r.x,a.x,o.x),ur(e,s.y,r.y,a.y,o.y),ur(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},$a=class extends Hn{constructor(e=new me,t=new me){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new me){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new me){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},zc=class extends Hn{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ka=class extends Hn{constructor(e=new me,t=new me,n=new me){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new me){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(hr(e,s.x,r.x,a.x),hr(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Hc=class extends Hn{constructor(e=new P,t=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new P){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(hr(e,s.x,r.x,a.x),hr(e,s.y,r.y,a.y),hr(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Qa=class extends Hn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new me){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(tu(o,c.x,l.x,h.x,u.x),tu(o,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new me().fromArray(s))}return this}},kc=Object.freeze({__proto__:null,ArcCurve:Oc,CatmullRomCurve3:Fc,CubicBezierCurve:Ja,CubicBezierCurve3:Bc,EllipseCurve:Sr,LineCurve:$a,LineCurve3:zc,QuadraticBezierCurve:Ka,QuadraticBezierCurve3:Hc,SplineCurve:Qa}),Vc=class extends Hn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new kc[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new kc[s.type]().fromJSON(s))}return this}},ja=class extends Vc{constructor(e){super(),this.type="Path",this.currentPoint=new me,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new $a(this.currentPoint.clone(),new me(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Ka(this.currentPoint.clone(),new me(e,t),new me(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new Ja(this.currentPoint.clone(),new me(e,t),new me(n,s),new me(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Qa(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,a,o,c),this}absellipse(e,t,n,s,r,a,o,c){let l=new Sr(e,t,n,s,r,a,o,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}};var eo=class i extends zt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],c=[],l=new P,h=new me;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let m=n+u/t*s;l.x=e*Math.cos(m),l.y=e*Math.sin(m),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new xt(a,3)),this.setAttribute("normal",new xt(o,3)),this.setAttribute("uv",new xt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},En=class i extends zt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],m=[],g=0,y=[],p=n/2,f=0;M(),a===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new xt(u,3)),this.setAttribute("normal",new xt(d,3)),this.setAttribute("uv",new xt(m,2));function M(){let A=new P,w=new P,_=0,L=(t-e)/n;for(let V=0;V<=r;V++){let S=[],b=V/r,k=b*(t-e)+e;for(let j=0;j<=s;j++){let fe=j/s,F=fe*c+o,z=Math.sin(F),J=Math.cos(F);w.x=k*z,w.y=-b*n+p,w.z=k*J,u.push(w.x,w.y,w.z),A.set(z,L,J).normalize(),d.push(A.x,A.y,A.z),m.push(fe,1-b),S.push(g++)}y.push(S)}for(let V=0;V<s;V++)for(let S=0;S<r;S++){let b=y[S][V],k=y[S+1][V],j=y[S+1][V+1],fe=y[S][V+1];h.push(b,k,fe),h.push(k,j,fe),_+=6}l.addGroup(f,_,0),f+=_}function x(A){let w=g,_=new me,L=new P,V=0,S=A===!0?e:t,b=A===!0?1:-1;for(let j=1;j<=s;j++)u.push(0,p*b,0),d.push(0,b,0),m.push(.5,.5),g++;let k=g;for(let j=0;j<=s;j++){let F=j/s*c+o,z=Math.cos(F),J=Math.sin(F);L.x=S*J,L.y=p*b,L.z=S*z,u.push(L.x,L.y,L.z),d.push(0,b,0),_.x=z*.5+.5,_.y=J*.5*b+.5,m.push(_.x,_.y),g++}for(let j=0;j<s;j++){let fe=w+j,F=k+j;A===!0?h.push(F,F+1,fe):h.push(F+1,F,fe),V+=3}l.addGroup(f,V,A===!0?1:2),f+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Vi=class i extends En{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},to=class i extends zt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),l(n),h(),this.setAttribute("position",new xt(r,3)),this.setAttribute("normal",new xt(r.slice(),3)),this.setAttribute("uv",new xt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){let x=new P,A=new P,w=new P;for(let _=0;_<t.length;_+=3)m(t[_+0],x),m(t[_+1],A),m(t[_+2],w),c(x,A,w,M)}function c(M,x,A,w){let _=w+1,L=[];for(let V=0;V<=_;V++){L[V]=[];let S=M.clone().lerp(A,V/_),b=x.clone().lerp(A,V/_),k=_-V;for(let j=0;j<=k;j++)j===0&&V===_?L[V][j]=S:L[V][j]=S.clone().lerp(b,j/k)}for(let V=0;V<_;V++)for(let S=0;S<2*(_-V)-1;S++){let b=Math.floor(S/2);S%2===0?(d(L[V][b+1]),d(L[V+1][b]),d(L[V][b])):(d(L[V][b+1]),d(L[V+1][b+1]),d(L[V+1][b]))}}function l(M){let x=new P;for(let A=0;A<r.length;A+=3)x.x=r[A+0],x.y=r[A+1],x.z=r[A+2],x.normalize().multiplyScalar(M),r[A+0]=x.x,r[A+1]=x.y,r[A+2]=x.z}function h(){let M=new P;for(let x=0;x<r.length;x+=3){M.x=r[x+0],M.y=r[x+1],M.z=r[x+2];let A=p(M)/2/Math.PI+.5,w=f(M)/Math.PI+.5;a.push(A,1-w)}g(),u()}function u(){for(let M=0;M<a.length;M+=6){let x=a[M+0],A=a[M+2],w=a[M+4],_=Math.max(x,A,w),L=Math.min(x,A,w);_>.9&&L<.1&&(x<.2&&(a[M+0]+=1),A<.2&&(a[M+2]+=1),w<.2&&(a[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function m(M,x){let A=M*3;x.x=e[A+0],x.y=e[A+1],x.z=e[A+2]}function g(){let M=new P,x=new P,A=new P,w=new P,_=new me,L=new me,V=new me;for(let S=0,b=0;S<r.length;S+=9,b+=6){M.set(r[S+0],r[S+1],r[S+2]),x.set(r[S+3],r[S+4],r[S+5]),A.set(r[S+6],r[S+7],r[S+8]),_.set(a[b+0],a[b+1]),L.set(a[b+2],a[b+3]),V.set(a[b+4],a[b+5]),w.copy(M).add(x).add(A).divideScalar(3);let k=p(w);y(_,b+0,M,k),y(L,b+2,x,k),y(V,b+4,A,k)}}function y(M,x,A,w){w<0&&M.x===1&&(a[x]=M.x-1),A.x===0&&A.z===0&&(a[x]=w/2/Math.PI+.5)}function p(M){return Math.atan2(M.z,-M.x)}function f(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}},no=class i extends to{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},ma=new P,ga=new P,oc=new P,_a=new Ui,io=class extends zt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let s=Math.pow(10,4),r=Math.cos(Ma*t),a=e.getIndex(),o=e.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],h=["a","b","c"],u=new Array(3),d={},m=[];for(let g=0;g<c;g+=3){a?(l[0]=a.getX(g),l[1]=a.getX(g+1),l[2]=a.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);let{a:y,b:p,c:f}=_a;if(y.fromBufferAttribute(o,l[0]),p.fromBufferAttribute(o,l[1]),f.fromBufferAttribute(o,l[2]),_a.getNormal(oc),u[0]=`${Math.round(y.x*s)},${Math.round(y.y*s)},${Math.round(y.z*s)}`,u[1]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,u[2]=`${Math.round(f.x*s)},${Math.round(f.y*s)},${Math.round(f.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let M=0;M<3;M++){let x=(M+1)%3,A=u[M],w=u[x],_=_a[h[M]],L=_a[h[x]],V=`${A}_${w}`,S=`${w}_${A}`;S in d&&d[S]?(oc.dot(d[S].normal)<=r&&(m.push(_.x,_.y,_.z),m.push(L.x,L.y,L.z)),d[S]=null):V in d||(d[V]={index0:l[M],index1:l[x],normal:oc.clone()})}}for(let g in d)if(d[g]){let{index0:y,index1:p}=d[g];ma.fromBufferAttribute(o,y),ga.fromBufferAttribute(o,p),m.push(ma.x,ma.y,ma.z),m.push(ga.x,ga.y,ga.z)}this.setAttribute("position",new xt(m,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Gi=class extends ja{constructor(e){super(e),this.uuid=gi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new ja().fromJSON(s))}return this}},Q0={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Lu(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,l,h,u,d,m;if(n&&(r=i_(i,e,r,t)),i.length>80*t){o=l=i[0],c=h=i[1];for(let g=t;g<s;g+=t)u=i[g],d=i[g+1],u<o&&(o=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);m=Math.max(l-o,h-c),m=m!==0?32767/m:0}return Er(r,a,t,o,c,m,0),a}};function Lu(i,e,t,n,s){let r,a;if(s===p_(i,e,t,n)>0)for(r=e;r<t;r+=n)a=nu(r,i[r],i[r+1],a);else for(r=t-n;r>=e;r-=n)a=nu(r,i[r],i[r+1],a);return a&&po(a,a.next)&&(Tr(a),a=a.next),a}function rs(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(po(t,t.next)||Yt(t.prev,t,t.next)===0)){if(Tr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Er(i,e,t,n,s,r,a){if(!i)return;!a&&r&&c_(i,n,s,r);let o=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?e_(i,n,s,r):j0(i)){e.push(c.i/t|0),e.push(i.i/t|0),e.push(l.i/t|0),Tr(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=t_(rs(i),e,t),Er(i,e,t,n,s,r,2)):a===2&&n_(i,e,t,n,s,r):Er(rs(i),e,t,n,s,r,1);break}}}function j0(i){let e=i.prev,t=i,n=i.next;if(Yt(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,c=t.y,l=n.y,h=s<r?s<a?s:a:r<a?r:a,u=o<c?o<l?o:l:c<l?c:l,d=s>r?s>a?s:a:r>a?r:a,m=o>c?o>l?o:l:c>l?c:l,g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=m&&Ds(s,o,r,c,a,l,g.x,g.y)&&Yt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function e_(i,e,t,n){let s=i.prev,r=i,a=i.next;if(Yt(s,r,a)>=0)return!1;let o=s.x,c=r.x,l=a.x,h=s.y,u=r.y,d=a.y,m=o<c?o<l?o:l:c<l?c:l,g=h<u?h<d?h:d:u<d?u:d,y=o>c?o>l?o:l:c>l?c:l,p=h>u?h>d?h:d:u>d?u:d,f=Gc(m,g,e,t,n),M=Gc(y,p,e,t,n),x=i.prevZ,A=i.nextZ;for(;x&&x.z>=f&&A&&A.z<=M;){if(x.x>=m&&x.x<=y&&x.y>=g&&x.y<=p&&x!==s&&x!==a&&Ds(o,h,c,u,l,d,x.x,x.y)&&Yt(x.prev,x,x.next)>=0||(x=x.prevZ,A.x>=m&&A.x<=y&&A.y>=g&&A.y<=p&&A!==s&&A!==a&&Ds(o,h,c,u,l,d,A.x,A.y)&&Yt(A.prev,A,A.next)>=0))return!1;A=A.nextZ}for(;x&&x.z>=f;){if(x.x>=m&&x.x<=y&&x.y>=g&&x.y<=p&&x!==s&&x!==a&&Ds(o,h,c,u,l,d,x.x,x.y)&&Yt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;A&&A.z<=M;){if(A.x>=m&&A.x<=y&&A.y>=g&&A.y<=p&&A!==s&&A!==a&&Ds(o,h,c,u,l,d,A.x,A.y)&&Yt(A.prev,A,A.next)>=0)return!1;A=A.nextZ}return!0}function t_(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!po(s,r)&&Iu(s,n,n.next,r)&&br(s,r)&&br(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Tr(n),Tr(n.next),n=i=r),n=n.next}while(n!==i);return rs(n)}function n_(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&u_(a,o)){let c=Uu(a,o);a=rs(a,a.next),c=rs(c,c.next),Er(a,e,t,n,s,r,0),Er(c,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function i_(i,e,t,n){let s=[],r,a,o,c,l;for(r=0,a=e.length;r<a;r++)o=e[r]*n,c=r<a-1?e[r+1]*n:i.length,l=Lu(i,o,c,n,!1),l===l.next&&(l.steiner=!0),s.push(h_(l));for(s.sort(s_),r=0;r<s.length;r++)t=r_(s[r],t);return t}function s_(i,e){return i.x-e.x}function r_(i,e){let t=a_(i,e);if(!t)return e;let n=Uu(t,i);return rs(n,n.next),rs(t,t.next)}function a_(i,e){let t=e,n=-1/0,s,r=i.x,a=i.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){let d=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,s=t.x<t.next.x?t:t.next,d===r))return s}t=t.next}while(t!==e);if(!s)return null;let o=s,c=s.x,l=s.y,h=1/0,u;t=s;do r>=t.x&&t.x>=c&&r!==t.x&&Ds(a<l?r:n,a,c,l,a<l?n:r,a,t.x,t.y)&&(u=Math.abs(a-t.y)/(r-t.x),br(t,i)&&(u<h||u===h&&(t.x>s.x||t.x===s.x&&o_(s,t)))&&(s=t,h=u)),t=t.next;while(t!==o);return s}function o_(i,e){return Yt(i.prev,i,e.prev)<0&&Yt(e.next,i,i.next)<0}function c_(i,e,t,n){let s=i;do s.z===0&&(s.z=Gc(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,l_(s)}function l_(i){let e,t,n,s,r,a,o,c,l=1;do{for(t=i,i=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<l&&(o++,n=n.nextZ,!!n);e++);for(c=l;o>0||c>0&&n;)o!==0&&(c===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,o--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,l*=2}while(a>1);return i}function Gc(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function h_(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Ds(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function u_(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!d_(i,e)&&(br(i,e)&&br(e,i)&&f_(i,e)&&(Yt(i.prev,i,e.prev)||Yt(i,e.prev,e))||po(i,e)&&Yt(i.prev,i,i.next)>0&&Yt(e.prev,e,e.next)>0)}function Yt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function po(i,e){return i.x===e.x&&i.y===e.y}function Iu(i,e,t,n){let s=ya(Yt(i,e,t)),r=ya(Yt(i,e,n)),a=ya(Yt(t,n,i)),o=ya(Yt(t,n,e));return!!(s!==r&&a!==o||s===0&&xa(i,t,e)||r===0&&xa(i,n,e)||a===0&&xa(t,i,n)||o===0&&xa(t,e,n))}function xa(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function ya(i){return i>0?1:i<0?-1:0}function d_(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Iu(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function br(i,e){return Yt(i.prev,i,i.next)<0?Yt(i,e,i.next)>=0&&Yt(i,i.prev,e)>=0:Yt(i,e,i.prev)<0||Yt(i,i.next,e)<0}function f_(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Uu(i,e){let t=new Wc(i.i,i.x,i.y),n=new Wc(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function nu(i,e,t,n){let s=new Wc(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Tr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Wc(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function p_(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Fi=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];iu(e),su(n,e);let a=e.length;t.forEach(iu);for(let c=0;c<t.length;c++)s.push(a),a+=t[c].length,su(n,t[c]);let o=Q0.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function iu(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function su(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var wr=class i extends zt{constructor(e=new Gi([new me(.5,.5),new me(-.5,.5),new me(-.5,-.5),new me(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,c=e.length;o<c;o++){let l=e[o];a(l)}this.setAttribute("position",new xt(s,3)),this.setAttribute("uv",new xt(r,2)),this.computeVertexNormals();function a(o){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,m=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:m-.1,y=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3,f=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:m_,x,A=!1,w,_,L,V;f&&(x=f.getSpacedPoints(h),A=!0,d=!1,w=f.computeFrenetFrames(h,!1),_=new P,L=new P,V=new P),d||(p=0,m=0,g=0,y=0);let S=o.extractPoints(l),b=S.shape,k=S.holes;if(!Fi.isClockWise(b)){b=b.reverse();for(let D=0,re=k.length;D<re;D++){let I=k[D];Fi.isClockWise(I)&&(k[D]=I.reverse())}}let fe=Fi.triangulateShape(b,k),F=b;for(let D=0,re=k.length;D<re;D++){let I=k[D];b=b.concat(I)}function z(D,re,I){return re||console.error("THREE.ExtrudeGeometry: vec does not exist"),D.clone().addScaledVector(re,I)}let J=b.length,ie=fe.length;function ne(D,re,I){let de,K,C,Y=D.x-re.x,E=D.y-re.y,v=I.x-D.x,H=I.y-D.y,ue=Y*Y+E*E,ae=Y*H-E*v;if(Math.abs(ae)>Number.EPSILON){let oe=Math.sqrt(ue),Oe=Math.sqrt(v*v+H*H),Ee=re.x-E/oe,Ie=re.y+Y/oe,Ve=I.x-H/Oe,rt=I.y+v/Oe,ce=((Ve-Ee)*H-(rt-Ie)*v)/(Y*H-E*v);de=Ee+Y*ce-D.x,K=Ie+E*ce-D.y;let _t=de*de+K*K;if(_t<=2)return new me(de,K);C=Math.sqrt(_t/2)}else{let oe=!1;Y>Number.EPSILON?v>Number.EPSILON&&(oe=!0):Y<-Number.EPSILON?v<-Number.EPSILON&&(oe=!0):Math.sign(E)===Math.sign(H)&&(oe=!0),oe?(de=-E,K=Y,C=Math.sqrt(ue)):(de=Y,K=E,C=Math.sqrt(ue/2))}return new me(de/C,K/C)}let te=[];for(let D=0,re=F.length,I=re-1,de=D+1;D<re;D++,I++,de++)I===re&&(I=0),de===re&&(de=0),te[D]=ne(F[D],F[I],F[de]);let le=[],he,Te=te.concat();for(let D=0,re=k.length;D<re;D++){let I=k[D];he=[];for(let de=0,K=I.length,C=K-1,Y=de+1;de<K;de++,C++,Y++)C===K&&(C=0),Y===K&&(Y=0),he[de]=ne(I[de],I[C],I[Y]);le.push(he),Te=Te.concat(he)}for(let D=0;D<p;D++){let re=D/p,I=m*Math.cos(re*Math.PI/2),de=g*Math.sin(re*Math.PI/2)+y;for(let K=0,C=F.length;K<C;K++){let Y=z(F[K],te[K],de);Ue(Y.x,Y.y,-I)}for(let K=0,C=k.length;K<C;K++){let Y=k[K];he=le[K];for(let E=0,v=Y.length;E<v;E++){let H=z(Y[E],he[E],de);Ue(H.x,H.y,-I)}}}let $=g+y;for(let D=0;D<J;D++){let re=d?z(b[D],Te[D],$):b[D];A?(L.copy(w.normals[0]).multiplyScalar(re.x),_.copy(w.binormals[0]).multiplyScalar(re.y),V.copy(x[0]).add(L).add(_),Ue(V.x,V.y,V.z)):Ue(re.x,re.y,0)}for(let D=1;D<=h;D++)for(let re=0;re<J;re++){let I=d?z(b[re],Te[re],$):b[re];A?(L.copy(w.normals[D]).multiplyScalar(I.x),_.copy(w.binormals[D]).multiplyScalar(I.y),V.copy(x[D]).add(L).add(_),Ue(V.x,V.y,V.z)):Ue(I.x,I.y,u/h*D)}for(let D=p-1;D>=0;D--){let re=D/p,I=m*Math.cos(re*Math.PI/2),de=g*Math.sin(re*Math.PI/2)+y;for(let K=0,C=F.length;K<C;K++){let Y=z(F[K],te[K],de);Ue(Y.x,Y.y,u+I)}for(let K=0,C=k.length;K<C;K++){let Y=k[K];he=le[K];for(let E=0,v=Y.length;E<v;E++){let H=z(Y[E],he[E],de);A?Ue(H.x,H.y+x[h-1].y,x[h-1].x+I):Ue(H.x,H.y,u+I)}}}se(),we();function se(){let D=s.length/3;if(d){let re=0,I=J*re;for(let de=0;de<ie;de++){let K=fe[de];ke(K[2]+I,K[1]+I,K[0]+I)}re=h+p*2,I=J*re;for(let de=0;de<ie;de++){let K=fe[de];ke(K[0]+I,K[1]+I,K[2]+I)}}else{for(let re=0;re<ie;re++){let I=fe[re];ke(I[2],I[1],I[0])}for(let re=0;re<ie;re++){let I=fe[re];ke(I[0]+J*h,I[1]+J*h,I[2]+J*h)}}n.addGroup(D,s.length/3-D,0)}function we(){let D=s.length/3,re=0;Fe(F,re),re+=F.length;for(let I=0,de=k.length;I<de;I++){let K=k[I];Fe(K,re),re+=K.length}n.addGroup(D,s.length/3-D,1)}function Fe(D,re){let I=D.length;for(;--I>=0;){let de=I,K=I-1;K<0&&(K=D.length-1);for(let C=0,Y=h+p*2;C<Y;C++){let E=J*C,v=J*(C+1),H=re+de+E,ue=re+K+E,ae=re+K+v,oe=re+de+v;Qe(H,ue,ae,oe)}}}function Ue(D,re,I){c.push(D),c.push(re),c.push(I)}function ke(D,re,I){Ne(D),Ne(re),Ne(I);let de=s.length/3,K=M.generateTopUV(n,s,de-3,de-2,de-1);tt(K[0]),tt(K[1]),tt(K[2])}function Qe(D,re,I,de){Ne(D),Ne(re),Ne(de),Ne(re),Ne(I),Ne(de);let K=s.length/3,C=M.generateSideWallUV(n,s,K-6,K-3,K-2,K-1);tt(C[0]),tt(C[1]),tt(C[3]),tt(C[1]),tt(C[2]),tt(C[3])}function Ne(D){s.push(c[D*3+0]),s.push(c[D*3+1]),s.push(c[D*3+2])}function tt(D){r.push(D.x),r.push(D.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return g_(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new kc[s.type]().fromJSON(s)),new i(n,e.options)}},m_={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],c=e[n*3+1],l=e[s*3],h=e[s*3+1];return[new me(r,a),new me(o,c),new me(l,h)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[s*3],m=e[s*3+1],g=e[s*3+2],y=e[r*3],p=e[r*3+1],f=e[r*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new me(a,1-c),new me(l,1-u),new me(d,1-g),new me(y,1-f)]:[new me(o,1-c),new me(h,1-u),new me(m,1-g),new me(p,1-f)]}};function g_(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Ar=class i extends to{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var so=class i extends zt{constructor(e=new Gi([new me(0,.5),new me(-.5,-.5),new me(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],a=[],o=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(o,c,h),o+=c,c=0;this.setIndex(n),this.setAttribute("position",new xt(s,3)),this.setAttribute("normal",new xt(r,3)),this.setAttribute("uv",new xt(a,2));function l(h){let u=s.length/3,d=h.extractPoints(t),m=d.shape,g=d.holes;Fi.isClockWise(m)===!1&&(m=m.reverse());for(let p=0,f=g.length;p<f;p++){let M=g[p];Fi.isClockWise(M)===!0&&(g[p]=M.reverse())}let y=Fi.triangulateShape(m,g);for(let p=0,f=g.length;p<f;p++){let M=g[p];m=m.concat(M)}for(let p=0,f=m.length;p<f;p++){let M=m[p];s.push(M.x,M.y,0),r.push(0,0,1),a.push(M.x,M.y)}for(let p=0,f=y.length;p<f;p++){let M=y[p],x=M[0]+u,A=M[1]+u,w=M[2]+u;n.push(x,A,w),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return __(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];n.push(a)}return new i(n,e.curveSegments)}};function __(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var si=class i extends zt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new P,d=new P,m=[],g=[],y=[],p=[];for(let f=0;f<=n;f++){let M=[],x=f/n,A=0;f===0&&a===0?A=.5/t:f===n&&c===Math.PI&&(A=-.5/t);for(let w=0;w<=t;w++){let _=w/t;u.x=-e*Math.cos(s+_*r)*Math.sin(a+x*o),u.y=e*Math.cos(a+x*o),u.z=e*Math.sin(s+_*r)*Math.sin(a+x*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),y.push(d.x,d.y,d.z),p.push(_+A,1-x),M.push(l++)}h.push(M)}for(let f=0;f<n;f++)for(let M=0;M<t;M++){let x=h[f][M+1],A=h[f][M],w=h[f+1][M],_=h[f+1][M+1];(f!==0||a>0)&&m.push(x,A,_),(f!==n-1||c<Math.PI)&&m.push(A,w,_)}this.setIndex(m),this.setAttribute("position",new xt(g,3)),this.setAttribute("normal",new xt(y,3)),this.setAttribute("uv",new xt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var ro=class i extends zt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],c=[],l=[],h=new P,u=new P,d=new P;for(let m=0;m<=n;m++)for(let g=0;g<=s;g++){let y=g/s*r,p=m/n*Math.PI*2;u.x=(e+t*Math.cos(p))*Math.cos(y),u.y=(e+t*Math.cos(p))*Math.sin(y),u.z=t*Math.sin(p),o.push(u.x,u.y,u.z),h.x=e*Math.cos(y),h.y=e*Math.sin(y),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(m/n)}for(let m=1;m<=n;m++)for(let g=1;g<=s;g++){let y=(s+1)*m+g-1,p=(s+1)*(m-1)+g-1,f=(s+1)*(m-1)+g,M=(s+1)*m+g;a.push(y,p,M),a.push(p,f,M)}this.setIndex(a),this.setAttribute("position",new xt(o,3)),this.setAttribute("normal",new xt(c,3)),this.setAttribute("uv",new xt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var on=class extends ii{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new He(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yu,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var ao=class extends ki{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};function va(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function x_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Gs=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Xc=class extends Gs{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:th,endingEnd:th}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case nh:r=e,o=2*t-n;break;case ih:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case nh:a=e,c=2*n-t;break;case ih:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,m=this._weightNext,g=(n-t)/(s-t),y=g*g,p=y*g,f=-d*p+2*d*y-d*g,M=(1+d)*p+(-1.5-2*d)*y+(-.5+d)*g+1,x=(-1-m)*p+(1.5+m)*y+.5*g,A=m*p-m*y;for(let w=0;w!==o;++w)r[w]=f*a[h+w]+M*a[l+w]+x*a[c+w]+A*a[u+w];return r}},qc=class extends Gs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*u+a[c+d]*h;return r}},Yc=class extends Gs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Qn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=va(t,this.TimeBufferType),this.values=va(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:va(e.times,Array),values:va(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Yc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new qc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Xc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ea:t=this.InterpolantFactoryMethodDiscrete;break;case ba:t=this.InterpolantFactoryMethodLinear;break;case Io:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ea;case this.InterpolantFactoryMethodLinear:return ba;case this.InterpolantFactoryMethodSmooth:return Io}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&x_(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Io,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(s)c=!0;else{let u=o*n,d=u-n,m=u+n;for(let g=0;g!==n;++g){let y=t[u+g];if(y!==t[d+g]||y!==t[m+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let m=0;m!==n;++m)t[d+m]=t[u+m]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Qn.prototype.TimeBufferType=Float32Array;Qn.prototype.ValueBufferType=Float32Array;Qn.prototype.DefaultInterpolation=ba;var as=class extends Qn{};as.prototype.ValueTypeName="bool";as.prototype.ValueBufferType=Array;as.prototype.DefaultInterpolation=Ea;as.prototype.InterpolantFactoryMethodLinear=void 0;as.prototype.InterpolantFactoryMethodSmooth=void 0;var Zc=class extends Qn{};Zc.prototype.ValueTypeName="color";var Jc=class extends Qn{};Jc.prototype.ValueTypeName="number";var $c=class extends Gs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),l=e*o;for(let h=l+o;l!==h;l+=4)Hi.slerpFlat(r,0,a,l-o,a,l,c);return r}},Rr=class extends Qn{InterpolantFactoryMethodLinear(e){return new $c(this.times,this.values,this.getValueSize(),e)}};Rr.prototype.ValueTypeName="quaternion";Rr.prototype.DefaultInterpolation=ba;Rr.prototype.InterpolantFactoryMethodSmooth=void 0;var os=class extends Qn{};os.prototype.ValueTypeName="string";os.prototype.ValueBufferType=Array;os.prototype.DefaultInterpolation=Ea;os.prototype.InterpolantFactoryMethodLinear=void 0;os.prototype.InterpolantFactoryMethodSmooth=void 0;var Kc=class extends Qn{};Kc.prototype.ValueTypeName="vector";var Qc=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let m=l[u],g=l[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}},y_=new Qc,jc=class{constructor(e){this.manager=e!==void 0?e:y_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};jc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Cr=class extends Qt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},oo=class extends Cr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Qt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new He(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},cc=new Nt,ru=new P,au=new P,co=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new me(512,512),this.map=null,this.mapPass=null,this.matrix=new Nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gr,this._frameExtents=new me(1,1),this._viewportCount=1,this._viewports=[new Wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;ru.setFromMatrixPosition(e.matrixWorld),t.position.copy(ru),au.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(au),t.updateMatrixWorld(),cc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(cc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var ou=new Nt,or=new P,lc=new P,el=class extends co{constructor(){super(new yn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new me(4,2),this._viewportCount=6,this._viewports=[new Wt(2,1,1,1),new Wt(0,1,1,1),new Wt(3,1,1,1),new Wt(1,1,1,1),new Wt(3,0,1,1),new Wt(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),or.setFromMatrixPosition(e.matrixWorld),n.position.copy(or),lc.copy(n.position),lc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(lc),n.updateMatrixWorld(),s.makeTranslation(-or.x,-or.y,-or.z),ou.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ou)}},Ws=class extends Cr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new el}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},tl=class extends co{constructor(){super(new za(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},lo=class extends Cr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Qt.DEFAULT_UP),this.updateMatrix(),this.target=new Qt,this.shadow=new tl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var ll="\\[\\]\\.:\\/",v_=new RegExp("["+ll+"]","g"),hl="[^"+ll+"]",M_="[^"+ll.replace("\\.","")+"]",S_=/((?:WC+[\/:])*)/.source.replace("WC",hl),E_=/(WCOD+)?/.source.replace("WCOD",M_),b_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",hl),T_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",hl),w_=new RegExp("^"+S_+E_+b_+T_+"$"),A_=["material","materials","bones","map"],nl=class{constructor(e,t,n){let s=n||Gt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Gt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(v_,"")}static parseTrackName(e){let t=w_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);A_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Gt.Composite=nl;Gt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Gt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Gt.prototype.GetterByBindingType=[Gt.prototype._getValue_direct,Gt.prototype._getValue_array,Gt.prototype._getValue_arrayElement,Gt.prototype._getValue_toArray];Gt.prototype.SetterByBindingTypeAndVersioning=[[Gt.prototype._setValue_direct,Gt.prototype._setValue_direct_setNeedsUpdate,Gt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Gt.prototype._setValue_array,Gt.prototype._setValue_array_setNeedsUpdate,Gt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Gt.prototype._setValue_arrayElement,Gt.prototype._setValue_arrayElement_setNeedsUpdate,Gt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Gt.prototype._setValue_fromArray,Gt.prototype._setValue_fromArray_setNeedsUpdate,Gt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var D_=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var dn=(i,e,t)=>Math.max(e,Math.min(t,i)),Du=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,C_=i=>i*i*(3-2*i),Pr=i=>1-Math.pow(1-i,3),Nu=i=>1+2.70158*Math.pow(i-1,3)+1.70158*Math.pow(i-1,2),Ou=-1.7,P_=(i,e,t)=>new P(i+Ou,e,t);function Wi(i,e,t,n=!0){let s=document.createElement("canvas");s.width=i,s.height=e,t(s.getContext("2d"),i,e);let r=new Mr(s);return r.colorSpace=Kt,r.anisotropy=4,n&&(r.wrapS=r.wrapT=dr),r}var Fu={roof:"hip",cladding:"weatherboard",wall:"#ece7da",roofColor:"#8d9ea5",joinery:"#161e1b",door:"#c23434",garage:!0,chimney:!0,solar:!1,deck:!1,shape:"single",windows:"standard",veranda:!1,bay:!1,fence:"none",detail:"none",tod:"auto"},Bu=[{key:"arrive",title:"Arrive at the section",text:"Approach from the street. The garage is on the left and the covered entry is on the right."},{key:"front",title:"The front elevation",text:null},{key:"roof",title:"Roof and cladding",text:null},{key:"garden",title:"Native planting",text:"P\u014Dhutukawa, ponga tree ferns and flax frame the house and soften the boundary."},{key:"back",title:"Around the back",text:null},{key:"doll",title:"Roof off: the floor plan",text:"Lift the roof to see the layout: garage, living, kitchen and dining, two bedrooms and the entry."},{key:"door",title:"The front door",text:"Under the covered entry. The door swings open as we step inside."},{key:"living",title:"Entry and living room",text:"The living room opens to the front window and gets the afternoon light."},{key:"kitchen",title:"Kitchen and dining",text:"An island bench, a dining table and a window onto the back garden."},{key:"bed",title:"Bedroom",text:"A quiet bedroom at the back of the house, away from the street."},{key:"end",title:"Golden hour",text:"Back outside as the light drops. Every design choice can still be changed."}];function L_(i,e={}){let t=matchMedia("(prefers-reduced-motion: reduce)").matches,n;try{n=new _r({antialias:!0,alpha:!1,powerPreference:"high-performance"})}catch{return null}let s=!!e.hero;n.setPixelRatio(Math.min(window.devicePixelRatio||1,s&&window.innerWidth<900?1.5:2)),n.shadowMap.enabled=!0,n.shadowMap.type=il,n.outputColorSpace=Kt,n.toneMapping=sl,n.localClippingEnabled=!0,n.domElement.style.cssText="display:block;width:100%;height:100%;touch-action:pan-y;cursor:"+(s?"default":"grab"),i.appendChild(n.domElement);let r=new Ga,a=new yn(46,1,.3,500),o=[],c=new Set,l=new Yn(new P(0,-1,0),100),h={top:{value:new He},mid:{value:new He},bot:{value:new He}};r.add(new Le(new si(300,32,16),new Kn({side:an,depthWrite:!1,uniforms:h,vertexShader:"varying vec3 vP;void main(){vP=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"uniform vec3 top;uniform vec3 mid;uniform vec3 bot;varying vec3 vP;void main(){float h=clamp(vP.y,-.1,1.);vec3 c=mix(bot,mid,smoothstep(0.,.35,h));c=mix(c,top,smoothstep(.3,1.,h));gl_FragColor=vec4(c,1.);}"}))),r.fog=new Va(2837056,60,210);let u=new oo(11127232,2308143,.85);r.add(u);let d=new lo(14674404,1.5);d.castShadow=!0,d.shadow.mapSize.set(2048,2048);let m=d.shadow.camera;m.left=-24,m.right=24,m.top=24,m.bottom=-24,m.near=5,m.far=100,d.shadow.bias=-4e-4,d.shadow.normalBias=.04,r.add(d);let g=new Ws(16762234,0,16,1.6);g.position.set(.5,1.6,1.2),r.add(g);let y=new Ws(16769712,0,14,1.4);y.position.set(1,2.3,0),r.add(y);let p=new Ws(16769712,0,12,1.4);p.position.set(5.5,2.3,-1.5),r.add(p);let f={dusk:{top:726803,mid:1451807,bot:2837056,fog:2837056,fogFar:210,hemi:11127232,hemiG:2308143,hi:.85,sun:14674404,si:1.5,sp:[-18,30,22],exp:1.05,li:0},day:{top:5214159,mid:10275817,bot:14938613,fog:13624298,fogFar:240,hemi:14150911,hemiG:6978138,hi:1.05,sun:16774366,si:2.6,sp:[-14,34,24],exp:1,li:0},golden:{top:2438506,mid:15176298,bot:16237946,fog:15315578,fogFar:200,hemi:16767400,hemiG:6969922,hi:1.45,sun:16756838,si:2.6,sp:[-24,16,20],exp:1.45,li:1},night:{top:329746,mid:857648,bot:1911370,fog:1055283,fogFar:120,hemi:5926560,hemiG:1712688,hi:.55,sun:9085695,si:.55,sp:[-16,26,18],exp:1.15,li:1}},M={top:new He,mid:new He,bot:new He,fog:new He,hemi:new He,hemiG:new He,sun:new He,fogFar:210,hi:.85,si:1.5,exp:1.05,li:0,sp:new P(-18,30,22)},x=new He;function A(R,O){let U=f.dusk,Z=f[R],W=(ee,pe)=>x.set(U[ee]).lerp(new He(Z[pe]),O).clone();return{top:W("top","top"),mid:W("mid","mid"),bot:W("bot","bot"),fog:W("fog","fog"),hemi:W("hemi","hemi"),hemiG:W("hemiG","hemiG"),sun:W("sun","sun"),fogFar:U.fogFar+(Z.fogFar-U.fogFar)*O,hi:U.hi+(Z.hi-U.hi)*O,si:U.si+(Z.si-U.si)*O,exp:U.exp+(Z.exp-U.exp)*O,li:U.li+(Z.li-U.li)*O,sp:new P(...U.sp).lerp(new P(...Z.sp),O)}}let w=(R,O={})=>new on(Object.assign({color:R,roughness:.85,metalness:0},O)),_=(R,O,U,Z,W=0,ee=0,pe=0,Ce=!0)=>{let ye=new Le(new Mn(R,O,U),Z);return ye.position.set(W,ee,pe),ye.castShadow=Ce,ye.receiveShadow=!0,ye},L=(R,O,U,Z)=>(R.position.set(O,U,Z),R),V=(...R)=>{let O=new st;return R.forEach(U=>O.add(U)),O};function S(R){R.traverse(O=>{O.material&&(O.material=Array.isArray(O.material)?O.material.map(U=>U.clone()):O.material.clone(),(Array.isArray(O.material)?O.material:[O.material]).forEach(U=>{U.userData.op=U.opacity,c.add(U)}))})}function b(R,{start:O,dur:U=1,kind:Z="fade",end:W=null,fn:ee=null,add:pe=!0,parent:Ce=r,tag:ye=null}){pe&&Ce.add(R);let pt={o:R,start:O,dur:U,kind:Z,end:W,fn:ee,tag:ye,sx:R.scale.x,sy:R.scale.y,sz:R.scale.z,py:R.position.y};return(Z==="fade"||Z==="drop")&&S(R),o.push(pt),pt}function k(R,O){R.traverse(U=>{U.material&&(Array.isArray(U.material)?U.material:[U.material]).forEach(Z=>{Z.transparent=!0,Z.opacity=(Z.userData.op??1)*O,Z.depthWrite=O>.98})})}function j(R){let O=R.attributes.position,U=R.attributes.normal,Z=new Float32Array(O.count*2);for(let W=0;W<O.count;W++){let ee=Math.abs(U.getX(W)),pe=Math.abs(U.getY(W)),Ce=Math.abs(U.getZ(W)),ye,pt;pe>.6?(ye=O.getX(W),pt=O.getZ(W)):ee>Ce?(ye=O.getZ(W),pt=O.getY(W)):(ye=O.getX(W),pt=O.getY(W)),Z[W*2]=ye,Z[W*2+1]=pt}return R.setAttribute("uv",new vn(Z,2)),R}let fe=Wi(256,256,(R,O,U)=>{R.fillStyle="#3b6e52",R.fillRect(0,0,O,U);for(let Z=0;Z<2600;Z++)R.fillStyle=Math.random()<.5?"rgba(255,255,255,.035)":"rgba(0,0,0,.06)",R.fillRect(Math.random()*O,Math.random()*U,1.5,3+Math.random()*3)});fe.repeat.set(26,26);let F=new Le(new eo(95,64),new on({map:fe,roughness:1}));F.rotation.x=-Math.PI/2,F.receiveShadow=!0,r.add(F);let z=new st;r.add(z);let J=Wi(128,128,(R,O,U)=>{R.fillStyle="#d9c79e",R.fillRect(0,0,O,U);for(let Z=0;Z<1400;Z++)R.fillStyle=Math.random()<.5?"rgba(120,95,55,.12)":"rgba(255,255,255,.16)",R.fillRect(Math.random()*O,Math.random()*U,2,2)});J.repeat.set(30,3);let ie=new Le(new Sn(260,11),new on({map:J,roughness:1}));ie.rotation.x=-Math.PI/2,ie.position.set(0,.04,-30.5),ie.receiveShadow=!0,z.add(ie);let ne=new Le(new Sn(260,3.5),new on({color:8227669,roughness:1}));ne.rotation.x=-Math.PI/2,ne.position.set(0,.05,-25),z.add(ne);let te=new on({color:2785164,roughness:.25,metalness:.25}),le=new Le(new Sn(600,200),te);le.rotation.x=-Math.PI/2,le.position.set(0,.07,-136),z.add(le);let he=[];for(let R=0;R<3;R++){let O=new Le(new Sn(260,.5),new $n({color:16777215,transparent:!0,opacity:.5,depthWrite:!1}));O.rotation.x=-Math.PI/2,O.position.set(0,.09,-36),z.add(O),he.push(O)}let Te=w(1784368,{roughness:1});[[-90,-150,50,16],[10,-175,70,14],[110,-150,50,13],[-170,-120,50,14],[180,-100,44,12]].forEach(([R,O,U,Z])=>{let W=new Le(new si(U,24,12),Te);W.scale.y=Z/U,W.position.set(R,0,O),z.add(W)});let $=new Le(new Vi(70,22,48,1,!0),w(2775626,{roughness:1}));$.position.set(-64,11,-165),z.add($);let se=new st,we=w(7309974,{roughness:.6,metalness:.15,fog:!1}),Fe=w(5796736,{roughness:.6,fog:!1});[[14,30,6,5],[24,40,5,5],[-12,22,7,5],[34,26,5,6],[-22,18,6,5],[44,20,6,5],[-34,24,6,6],[54,16,6,5],[-46,14,6,5],[64,18,5,5],[8,46,5,5],[-4,16,6,5]].forEach(([R,O,U,Z],W)=>{let ee=_(U,O,Z,W%2?we:Fe,R,O/2,0,!1);se.add(ee);for(let pe=0;pe<3;pe++)se.add(_(U*.9,.4,Z*1.02,w(10466494),R,O*(.25+.25*pe),0,!1))});let ke=new st,Qe=w(13227740,{roughness:.5,metalness:.2,fog:!1});ke.add(L(new Le(new En(.9,1.8,96,12),Qe),0,48,0),L(new Le(new En(6.4,4.6,8,20),Qe),0,82,0),L(new Le(new En(4.4,5.4,2.2,20),w(1780272)),0,88,0),L(new Le(new En(.14,.5,34,6),Qe),0,110,0)),ke.add(L(new Le(new si(.9,10,10),w(14701131,{emissive:14701131,emissiveIntensity:.8})),0,128,0)),ke.scale.setScalar(.62),ke.position.set(0,0,2),se.add(ke),se.scale.setScalar(.8),se.position.set(26,0,-118),z.add(se);function Ne(R,O,U,Z){let W=new st;W.add(_(3.2*U,.5*U,1.1*U,w(15659754),0,.25*U,0),L(new Le(new En(.06*U,.06*U,5*U,6),w(13227212)),0,3*U,0));let ee=new Le(new zt,new on({color:16777215,side:An,roughness:.8}));return ee.geometry.setAttribute("position",new xt([0,.6*U,0,0,5.3*U,0,1.8*U,.7*U,0],3)),ee.geometry.computeVertexNormals(),W.add(ee),W.position.set(R,.1,O),W.rotation.y=Z,W.userData.b=O,z.add(W),W}let tt=[Ne(-22,-58,1.4,.3),Ne(26,-72,1.8,-.5),Ne(-60,-96,2.2,.1),Ne(70,-100,2.4,.7)],D=new st;for(let R=0;R<14;R++)D.add(_(2.4,.12,.55,w(8084026),0,.45,-R*.62));for(let R=0;R<8;R++)D.add(_(.14,1.5,.14,w(4930350),-1.1,0,-R*1.1),_(.14,1.5,.14,w(4930350),1.1,0,-R*1.1));D.position.set(18,.05,-31),z.add(D),[[-14,-28],[6,-27.5],[34,-28.5],[-40,-28]].forEach(([R,O])=>{let U=new Le(new no(.9,0),w(5857373,{roughness:1}));U.position.set(R,.3,O),U.scale.y=.6,U.castShadow=!0,z.add(U)});for(let R=0;R<26;R++){let O=-60+R*4.6+R%3,U=new Le(new Vi(.35,1.3,5),w(9083470,{roughness:1}));U.position.set(O,.65,-26.6+R*7%3*.4),z.add(U)}let re=new st;re.position.x=Ou,r.add(re);let I=.15,de=2.7,K=2.4,C={x0:0,x1:8.6,z0:-4.5,z1:4.5},Y={x0:-5.2,x1:0,z0:-3,z1:3.2},E={x0:-13,x1:15,z0:-9,z1:17},v=new st;for(let R=0;R<7;R++){let O=[],U=6+R*5.2;for(let Z=0;Z<=64;Z++){let W=Z/64*Math.PI*2,ee=U*(1+.1*Math.sin(W*2+R)+.07*Math.sin(W*3+1.5));O.push(new P(Math.cos(W)*ee*1.25+1.5,.03,Math.sin(W)*ee*.95+4))}v.add(new Vs(new zt().setFromPoints(O),new ki({color:10470062,transparent:!0,opacity:.45})))}b(v,{start:0,dur:2.2,kind:"fade",end:11.5});let H=[[E.x0,E.z0],[E.x1,E.z0],[E.x1,E.z1],[E.x0,E.z1],[E.x0,E.z0]].map(([R,O])=>new P(R,.06,O)),ue=new Vs(new zt().setFromPoints(H),new ao({color:14701131,dashSize:.8,gapSize:.5}));ue.computeLineDistances(),b(ue,{start:2.2,dur:1.4,kind:"fade",end:14.6,parent:re}),[[E.x0,E.z0],[E.x1,E.z0],[E.x1,E.z1],[E.x0,E.z1]].forEach(([R,O],U)=>{let Z=new st;Z.add(_(.14,1.4,.14,w(14701131),0,.7,0));let W=new Le(new Sn(.7,.45),new $n({color:14701131,side:An}));W.position.set(.38,1.2,0),Z.add(W),Z.position.set(R,0,O),b(Z,{start:1+U*.35,dur:.7,kind:"pop",end:14.6,parent:re})});let ae=new st,oe=w(13227212);for(let R=0;R<3;R++){let O=R/3*Math.PI*2,U=_(.06,1.7,.06,oe,Math.cos(O)*.45,.82,Math.sin(O)*.45);U.rotation.z=Math.cos(O)*.3,U.rotation.x=-Math.sin(O)*.3,ae.add(U)}ae.add(_(.34,.3,.3,w(3885646),0,1.75,0),_(.08,.08,.5,w(14701131),0,1.92,.2));let Oe=V(_(.38,.8,.26,w(15895592),0,1.15,0),_(.14,.8,.14,w(2765880),-.1,.4,0),_(.14,.8,.14,w(2765880),.1,.4,0),L(new Le(new si(.2,12,12),w(14857356)),0,1.75,0),L(new Le(new si(.22,12,8,0,Math.PI*2,0,Math.PI/2),w(15659754)),0,1.8,0));Oe.position.set(1.4,0,-.4),ae.add(Oe),ae.position.set(11,0,10),ae.rotation.y=-.8,b(ae,{start:1.4,dur:.9,kind:"grow",end:8.2,parent:re});let Ee=new st,Ie=new ki({color:15659754,transparent:!0,opacity:.7}),Ve=(R,O,U,Z,W)=>{let ee=new yr(new io(new Mn(O-R,W,Z-U)),Ie);return ee.position.set((R+O)/2,I+W/2,(U+Z)/2),ee};Ee.add(Ve(C.x0,C.x1,C.z0,C.z1,de),Ve(Y.x0,Y.x1,Y.z0,Y.z1,K)),b(Ee,{start:4,dur:1.6,kind:"fade",end:9,parent:re});let rt=Wi(512,200,(R,O,U)=>{R.clearRect(0,0,O,U),R.strokeStyle="#e0524b",R.lineWidth=12,R.strokeRect(10,10,O-20,U-20),R.fillStyle="#e0524b",R.font='700 92px "IBM Plex Mono",monospace',R.textAlign="center",R.textBaseline="middle",R.fillText("APPROVED",O/2,U/2+4)},!1),ce=new Le(new Sn(7.5,2.9),new $n({map:rt,transparent:!0,side:An,depthWrite:!1}));ce.position.set(3.6,7.2,6),ce.rotation.z=.12,b(ce,{start:6.4,dur:.8,kind:"pop",end:9.2,parent:re});let _t=new st,ct=w(15906116,{roughness:.55}),je=w(2239277);_t.add(_(3.4,.55,1.1,je,0,.3,.9),_(3.4,.55,1.1,je,0,.3,-.9),_(2.1,.7,2.2,ct,0,.95,0),_(1.1,1.1,1.4,ct,-.5,1.7,0),_(.9,.6,1.1,w(10338240,{roughness:.1}),-.5,1.85,.06));let Be=new st;Be.position.set(.5,1.4,0),Be.add(_(3.2,.32,.32,ct,1.5,.7,0)),Be.children[0].rotation.z=.55;let Pe=new st;Pe.position.set(2.9,1.8,0),Pe.add(_(.28,2,.28,ct,.2,-.8,0)),Pe.children[0].rotation.z=.4,Pe.add(_(.7,.5,.9,w(13209382),.8,-1.8,0)),Be.add(Pe),_t.add(Be),_t.position.set(-10,0,4),_t.rotation.y=.4,b(_t,{start:7,dur:.9,kind:"grow",end:10.6,parent:re,fn:R=>{Be.rotation.z=Math.sin(R*1.6)*.2-.05,Pe.rotation.z=Math.sin(R*1.6+1)*.3}}),b(_(15,.3,11.6,w(7035460,{roughness:1}),1.7,.05,0,!1),{start:7.4,dur:1.1,kind:"rise",parent:re});let nt=_(14,.3,10.2,w(8030850),1.7,.14,0);nt.geometry.translate(0,.15,0),nt.position.y=0,b(nt,{start:8.2,dur:1.1,kind:"rise",parent:re});let St=new Mn(.05,1,.1),Lt=[],et=(R,O,U,Z,W)=>{let ee=Math.hypot(U-R,Z-O),pe=Math.max(2,Math.round(ee/.6));for(let Ce=0;Ce<=pe;Ce++){let ye=Ce/pe;Lt.push({x:R+(U-R)*ye,z:O+(Z-O)*ye,h:W,ry:Math.atan2(U-R,Z-O)+Math.PI/2})}};et(C.x0,C.z1,C.x1,C.z1,de),et(C.x0,C.z0,C.x1,C.z0,de),et(C.x0,C.z0,C.x0,C.z1,de),et(C.x1,C.z0,C.x1,C.z1,de),et(Y.x0,Y.z1,Y.x1,Y.z1,K),et(Y.x0,Y.z0,Y.x1,Y.z0,K),et(Y.x0,Y.z0,Y.x0,Y.z1,K);let _e=new Ya(St,w(14268285,{roughness:.7}),Lt.length);_e.castShadow=!0;let N=new Qt;b(_e,{start:9,dur:2,kind:"custom",end:13.2,parent:re,fn:(R,O)=>{Lt.forEach((U,Z)=>{let W=dn(O*1.6-Z/Lt.length*.6,0,1),ee=Math.max(.001,U.h*Pr(W));N.position.set(U.x,I+ee/2,U.z),N.rotation.set(0,U.ry,0),N.scale.set(1,ee,1),N.updateMatrix(),_e.setMatrixAt(Z,N.matrix)}),_e.instanceMatrix.needsUpdate=!0}});let ve=w(14268285,{roughness:.7}),be=V();[[C,de],[Y,K]].forEach(([R,O])=>{[I+.05,I+O-.05].forEach(U=>{be.add(_(R.x1-R.x0,.08,.1,ve,(R.x0+R.x1)/2,U,R.z1),_(R.x1-R.x0,.08,.1,ve,(R.x0+R.x1)/2,U,R.z0),_(.1,.08,R.z1-R.z0,ve,R.x0,U,(R.z0+R.z1)/2),_(.1,.08,R.z1-R.z0,ve,R.x1,U,(R.z0+R.z1)/2))})}),b(be,{start:9.9,dur:1,kind:"fade",parent:re,end:13.2});let $e=new st;{let R=(O,U,Z,W,ee,pe,Ce)=>{let ye=ee+pe,pt=O+Ce,Xe=U-Ce,Ke=(Z+W)/2,Re=(it,ht)=>{let ut=new P().subVectors(ht,it),Vt=new Le(new Mn(.07,.1,ut.length()),ve);Vt.position.copy(it).addScaledVector(ut,.5),Vt.lookAt(ht),Vt.castShadow=!0,$e.add(Vt)};for(let it=O;it<=U+.01;it+=.9){let ht=dn((it-O)/(U-O),0,1),ut=pt+(Xe-pt)*ht;Re(new P(it,ee,W),new P(ut,ye,Ke)),Re(new P(it,ee,Z),new P(ut,ye,Ke))}Re(new P(pt,ye,Ke),new P(Xe,ye,Ke))};R(C.x0-.6,C.x1+.6,C.z0-.6,C.z1+.6,I+de,2.1,2.6),R(Y.x0-.5,Y.x1+.1,Y.z0-.5,Y.z1+.5,I+K,1.1,1.4)}b($e,{start:10.4,dur:1.3,kind:"rise",parent:re,end:13.4});let Ze=V(_(C.x1-C.x0+.05,de,C.z1-C.z0+.05,w(2503738),(C.x0+C.x1)/2,I+de/2,0),_(Y.x1-Y.x0+.05,K,Y.z1-Y.z0+.05,w(2503738),(Y.x0+Y.x1)/2,I+K/2,(Y.z0+Y.z1)/2));b(Ze,{start:11.4,dur:.8,kind:"fade",parent:re,end:12.2});let wt=new st,Et=[];for(let R=C.x0;R<=C.x1+.1;R+=2.15)Et.push(new P(R,0,C.z1+.7),new P(R,4.4,C.z1+.7));[1.1,2.2,3.3,4.4].forEach(R=>Et.push(new P(C.x0,R,C.z1+.7),new P(C.x1,R,C.z1+.7)));for(let R=C.x0;R<C.x1;R+=2.15)Et.push(new P(R,0,C.z1+.7),new P(R+2.15,2.2,C.z1+.7));wt.add(new yr(new zt().setFromPoints(Et),new ki({color:13227212,transparent:!0,opacity:.9}))),[2.2,3.3].forEach(R=>wt.add(_(C.x1-C.x0,.06,.8,w(9402968),(C.x0+C.x1)/2,R,C.z1+.9))),b(wt,{start:11.2,dur:.9,kind:"fade",end:14.4,parent:re});let Ht=new st,cn=w(10792615,{roughness:.9});Ht.add(_(4.4,.08,12,cn,-2.9,.04,9.2,!1));for(let R=0;R<5;R++)Ht.add(_(4.4,.09,.06,w(9081997),-2.9,.045,4+R*2.4,!1));Ht.add(_(1.2,.07,12,w(11844789),C.x0+6.95,.04,10.7,!1));for(let R=0;R<5;R++)Ht.add(_(1.2,.08,.05,w(9739927),C.x0+6.95,.045,5.6+R*2.2,!1));b(Ht,{start:14.2,dur:1.1,kind:"fade",parent:re});let Rt=V(_(.1,1.1,.1,w(5917498),0,.55,0),_(.6,.34,.4,w(15659754),0,1.2,0),_(.5,.06,.02,w(12727348),0,1.22,.21));Rt.position.set(3.4,0,13.4),b(Rt,{start:14.6,dur:.6,kind:"pop",parent:re});function nn(R,O,U,Z){let W=new st,ee=w(5917498,{roughness:1}),pe=new Le(new En(.22*U,.42*U,3.6*U,9),ee);pe.position.y=1.8*U,pe.rotation.z=.12,pe.castShadow=!0,W.add(pe),W.add(L(Object.assign(new Le(new En(.12*U,.22*U,2.4*U,7),ee),{}),-.8*U,3.5*U,0)),W.children[1].rotation.z=.9;let Ce=[3103301,3499600,2838848,4090706,3828306],ye=[[0,4.8,0,2.5],[2,4.3,.6,2],[-2.2,4.5,-.5,1.9],[.8,6.2,.3,1.8],[-1,6,1,1.5]];ye.forEach(([Ke,Re,it,ht],ut)=>{let Vt=new Le(new Ar(ht*U,2),w(Ce[ut%5],{roughness:.95}));Vt.position.set(Ke*U,Re*U,it*U),Vt.scale.y=.82,Vt.castShadow=!0,W.add(Vt)});let pt=[];for(let Ke=0;Ke<260;Ke++){let Re=ye[Ke%5],it=Math.random()*6.28,ht=Math.acos(2*Math.random()-1),ut=Re[3]*U*1.04;pt.push(Re[0]*U+ut*Math.sin(ht)*Math.cos(it),Re[1]*U+ut*Math.cos(ht)*.82,Re[2]*U+ut*Math.sin(ht)*Math.sin(it))}let Xe=new zt;Xe.setAttribute("position",new xt(pt,3)),W.add(new Za(Xe,new vr({color:14701131,size:.22*U+.1,sizeAttenuation:!0}))),W.position.set(R,0,O),b(W,{start:Z,dur:1.1,kind:"grow",parent:re})}nn(12.5,.5,1.1,14.4),nn(-11,-3,.9,14.8);function Cn(R,O,U,Z){let W=new st;W.add(L(new Le(new En(.18*U,.26*U,3*U,8),w(4930350,{roughness:1})),0,1.5*U,0));for(let ee=0;ee<10;ee++){let pe=ee/10*Math.PI*2,Ce=new Le(new Vi(.24*U,2.6*U,4),w(ee%2?4090706:5012575,{roughness:.9}));Ce.scale.z=.25,Ce.position.set(Math.cos(pe)*.9*U,3*U-.25*U,Math.sin(pe)*.9*U),Ce.rotation.set(Math.sin(pe)*1.25,0,-Math.cos(pe)*1.25),Ce.castShadow=!0,W.add(Ce)}W.position.set(R,0,O),b(W,{start:Z,dur:1,kind:"grow",parent:re})}Cn(-8.4,5.6,1,14.9),Cn(11,9,.8,15);function ri(R,O,U,Z){let W=new st,ee=w(5209950,{roughness:.9});for(let pe=0;pe<9;pe++){let Ce=pe/9*Math.PI*2,ye=new Le(new Vi(.09*U,1.6*U,3),ee);ye.position.set(Math.cos(Ce)*.18*U,.8*U,Math.sin(Ce)*.18*U),ye.rotation.set(Math.sin(Ce)*.45,0,-Math.cos(Ce)*.45),W.add(ye)}W.position.set(R,0,O),b(W,{start:Z,dur:.8,kind:"grow",parent:re})}ri(-.5,5.4,1,15.1),ri(8.4,5.4,1.1,15.2),ri(-5.6,4.8,1,15.2),ri(1.4,12,.9,15.3),ri(5.2,11,.9,15.3),ri(-6.8,14,.9,15.4);let qs=[];for(let R=0;R<8;R++){let O=new Le(new si(.28,10,10),new $n({color:15659754,transparent:!0,opacity:0,depthWrite:!1}));re.add(O),qs.push(O)}let ln=Object.assign({},Fu,e.design||{}),Ge=R=>(R.clippingPlanes=[l],R.clipShadows=!0,R),Mi={};function Ys(R,O){if(!Mi[R]){let Z={weatherboard:{tw:.4,th:.18,draw:(ee,pe,Ce)=>{ee.fillStyle="#fff",ee.fillRect(0,0,pe,Ce),ee.fillStyle="rgba(0,0,0,.28)",ee.fillRect(0,Ce-5,pe,5),ee.fillStyle="rgba(255,255,255,.7)",ee.fillRect(0,0,pe,3)},w:16,h:64},boardbatten:{tw:.32,th:1,draw:(ee,pe,Ce)=>{ee.fillStyle="#fff",ee.fillRect(0,0,pe,Ce),ee.fillStyle="rgba(0,0,0,.3)",ee.fillRect(0,0,6,Ce),ee.fillStyle="rgba(255,255,255,.7)",ee.fillRect(6,0,3,Ce)},w:64,h:16},brick:{tw:.46,th:.15,draw:(ee,pe,Ce)=>{ee.fillStyle="#d8d8d8",ee.fillRect(0,0,pe,Ce),ee.fillStyle="#8a8a8a",ee.fillRect(0,0,pe,3),ee.fillRect(0,Ce/2,pe,3),ee.fillRect(0,0,3,Ce/2),ee.fillRect(pe/2,Ce/2,3,Ce/2);for(let ye=0;ye<60;ye++)ee.fillStyle=Math.random()<.5?"rgba(0,0,0,.07)":"rgba(255,255,255,.1)",ee.fillRect(Math.random()*pe,Math.random()*Ce,8+Math.random()*10,4)},w:128,h:64},plaster:{tw:2,th:2,draw:(ee,pe,Ce)=>{ee.fillStyle="#fff",ee.fillRect(0,0,pe,Ce);for(let ye=0;ye<900;ye++)ee.fillStyle=Math.random()<.5?"rgba(0,0,0,.05)":"rgba(255,255,255,.35)",ee.fillRect(Math.random()*pe,Math.random()*Ce,2,2)},w:128,h:128},metal:{tw:.2,th:1,draw:(ee,pe,Ce)=>{let ye=ee.createLinearGradient(0,0,pe,0);ye.addColorStop(0,"#aaa"),ye.addColorStop(.5,"#fff"),ye.addColorStop(1,"#aaa"),ee.fillStyle=ye,ee.fillRect(0,0,pe,Ce)},w:64,h:8}}[R],W=Wi(Z.w,Z.h,Z.draw);W.repeat.set(1/Z.tw,1/Z.th),Mi[R]=W}return Ge(new on({map:Mi[R],color:O,roughness:R==="metal"?.45:.85,metalness:R==="metal"?.3:0}))}let Xi=null;function Si(R){return Xi||(Xi=Wi(128,8,(O,U,Z)=>{for(let W=0;W<U;W+=U/4){let ee=O.createLinearGradient(W,0,W+U/4,0);ee.addColorStop(0,"#9aa7ac"),ee.addColorStop(.5,"#ffffff"),ee.addColorStop(1,"#9aa7ac"),O.fillStyle=ee,O.fillRect(W,0,U/4,Z)}})),Ge(new on({map:Xi,bumpMap:Xi,bumpScale:2,roughness:.45,metalness:.3,color:R,side:An}))}function Zs(R,O,U,Z,W,ee,pe){let Ce;if(R==="hip"||R==="flat")Ce=new Mn(U-O,ee,W-Z),Ce.translate((O+U)/2,I+ee/2,(Z+W)/2);else if(R==="gablefront"){let ye=new Gi;ye.moveTo(O,I),ye.lineTo(U,I),ye.lineTo(U,I+ee),ye.lineTo((O+U)/2,I+ee+pe),ye.lineTo(O,I+ee),ye.closePath(),Ce=new wr(ye,{depth:W-Z,bevelEnabled:!1}),Ce.translate(0,0,Z)}else{let ye=new Gi;R==="gable"?(ye.moveTo(-W,I),ye.lineTo(-Z,I),ye.lineTo(-Z,I+ee),ye.lineTo(-(Z+W)/2,I+ee+pe),ye.lineTo(-W,I+ee)):(ye.moveTo(-W,I),ye.lineTo(-Z,I),ye.lineTo(-Z,I+ee+pe),ye.lineTo(-W,I+ee)),ye.closePath(),Ce=new wr(ye,{depth:U-O,bevelEnabled:!1}),Ce.rotateY(Math.PI/2),Ce.translate(O,0,0)}return j(Ce.toNonIndexed?Ce.toNonIndexed():Ce)}function Lr(R,O,U,Z,W){let ee=(U+Z)/2;return I+R+O*(1-dn(Math.abs(W-ee)/((Z-U)/2),0,1))}function T(R,O,U,Z,W,ee){let pe=(Z+W)/2;return R==="skillion"?I+O+U*dn((W-ee)/(W-Z),0,1):I+O+U*(1-dn(Math.abs(ee-pe)/((W-Z)/2),0,1))}let B="none";function X(R,O,U,Z,W,ee,pe,Ce,ye){let pt=new st,Xe=I+ee,Ke=O-ye,Re=U+ye,it=Z-ye,ht=W+ye,ut=(Z+W)/2,Vt=1/.45,hn=(bt,dt)=>{let ft=new zt,Tt=[],Ft=[];(bt.length===4?[[0,1,2],[0,2,3]]:[[0,1,2]]).forEach(ti=>ti.forEach(un=>{Tt.push(...bt[un]),Ft.push(...dt(bt[un]))})),ft.setAttribute("position",new xt(Tt,3)),ft.setAttribute("uv",new xt(Ft,2)),ft.computeVertexNormals();let Dn=new Le(ft,Ce);Dn.castShadow=!0,Dn.receiveShadow=!0,pt.add(Dn)},qt=Ge(w(1976105,{roughness:.6}));if(R==="flat"){let bt=Ge(w(9411222,{roughness:.9}));pt.add(_(U-O+.3,.16,W-Z+.3,bt,(O+U)/2,Xe+.08,(Z+W)/2));let dt=Ge(w(15855074,{roughness:.9})),ft=.2,Tt=.55;pt.add(_(U-O+.3,Tt,ft,dt,(O+U)/2,Xe+Tt/2,W+.15),_(U-O+.3,Tt,ft,dt,(O+U)/2,Xe+Tt/2,Z-.15),_(ft,Tt,W-Z+.3,dt,O-.15,Xe+Tt/2,(Z+W)/2),_(ft,Tt,W-Z+.3,dt,U+.15,Xe+Tt/2,(Z+W)/2))}else if(R==="hip"){let bt=Math.max(1.4,(U-O)*.3),dt=Ke+bt,ft=Re-bt,Tt=Xe+pe;if(B==="villa"){let Ft=Ge(w(1976105,{roughness:.5}));[dt,ft].forEach(Dn=>{let ti=new Le(new Vi(.07,.55,8),Ft);ti.position.set(Dn,Tt+.32,ut),pt.add(ti);let un=new Le(new si(.1,10,10),Ft);un.position.set(Dn,Tt+.1,ut),pt.add(un)})}hn([[Ke,Xe,ht],[Re,Xe,ht],[ft,Tt,ut],[dt,Tt,ut]],Ft=>[Ft[0]*Vt,0]),hn([[Re,Xe,it],[Ke,Xe,it],[dt,Tt,ut],[ft,Tt,ut]],Ft=>[Ft[0]*Vt,0]),hn([[Re,Xe,ht],[Re,Xe,it],[ft,Tt,ut]],Ft=>[Ft[2]*Vt,0]),hn([[Ke,Xe,it],[Ke,Xe,ht],[dt,Tt,ut]],Ft=>[Ft[2]*Vt,0]),pt.add(_(Re-Ke,.22,.12,qt,(Ke+Re)/2,Xe,ht),_(Re-Ke,.22,.12,qt,(Ke+Re)/2,Xe,it),_(.12,.22,ht-it,qt,Ke,Xe,ut),_(.12,.22,ht-it,qt,Re,Xe,ut),_(ft-dt,.14,.22,qt,(dt+ft)/2,Tt+.05,ut))}else if(R==="gablefront"){let bt=Xe+pe,dt=(Ke+Re)/2,ft=Math.hypot(dt-Ke,pe),Tt=Math.atan2(pe,dt-Ke);hn([[Ke,Xe,ht],[dt,bt,ht],[dt,bt,it],[Ke,Xe,it]],Ft=>[Ft[2]*Vt,0]),hn([[Re,Xe,it],[dt,bt,it],[dt,bt,ht],[Re,Xe,ht]],Ft=>[Ft[2]*Vt,0]),pt.add(_(.12,.22,ht-it,qt,Ke,Xe,ut),_(.12,.22,ht-it,qt,Re,Xe,ut),_(.22,.14,ht-it,qt,dt,bt+.04,ut)),[it,ht].forEach(Ft=>{let Dn=_(ft,.14,.12,qt,(Ke+dt)/2,(Xe+bt)/2,Ft);Dn.rotation.z=Tt,pt.add(Dn);let ti=_(ft,.14,.12,qt,(Re+dt)/2,(Xe+bt)/2,Ft);ti.rotation.z=-Tt,pt.add(ti)})}else if(R==="gable"){let bt=Xe+pe;hn([[Ke,Xe,ht],[Re,Xe,ht],[Re,bt,ut],[Ke,bt,ut]],dt=>[dt[0]*Vt,0]),hn([[Re,Xe,it],[Ke,Xe,it],[Ke,bt,ut],[Re,bt,ut]],dt=>[dt[0]*Vt,0]),pt.add(_(Re-Ke,.22,.12,qt,(Ke+Re)/2,Xe,ht),_(Re-Ke,.22,.12,qt,(Ke+Re)/2,Xe,it),_(Re-Ke,.14,.22,qt,(Ke+Re)/2,bt+.04,ut)),[Ke,Re].forEach(dt=>{let ft=_(.12,.14,Math.hypot(ht-ut,pe),qt,dt,(Xe+bt)/2,(ht+ut)/2);ft.rotation.x=Math.atan2(pe,ht-ut),pt.add(ft);let Tt=_(.12,.14,Math.hypot(ut-it,pe),qt,dt,(Xe+bt)/2,(ut+it)/2);Tt.rotation.x=-Math.atan2(pe,ut-it),pt.add(Tt)})}else{let bt=Xe+pe;hn([[Ke,Xe,ht],[Re,Xe,ht],[Re,bt,it],[Ke,bt,it]],dt=>[dt[0]*Vt,0]),pt.add(_(Re-Ke,.22,.12,qt,(Ke+Re)/2,Xe,ht),_(Re-Ke,.22,.12,qt,(Ke+Re)/2,bt,it)),[Ke,Re].forEach(dt=>{let ft=_(.12,.16,Math.hypot(ht-it,pe),qt,dt,(Xe+bt)/2,(it+ht)/2);ft.rotation.x=-Math.atan2(pe,ht-it),pt.add(ft)})}return pt}let q=null,G=null,Ae=null,De=null,We=[],Je=new P(5.6,6,1.2),at=[],ze="house",ot=()=>Ge(new on({color:8827318,roughness:.05,metalness:.55,transparent:!0,opacity:.88}));function kt(R){if(q){q.traverse(Q=>{Q.geometry&&Q.geometry.dispose()}),re.remove(q);for(let Q=o.length-1;Q>=0;Q--)o[Q].tag===ze&&o.splice(Q,1)}We=[],at=[];let O=new st;q=O,re.add(O),B=R.detail||"none";let U=R.roof,Z=R.shape==="twostorey",W=R.shape==="lshape",ee=R.garage===!0,pe=R.garage==="carport",Ce=U==="skillion"?2.55:de,ye=Z?Ce+2.6:Ce,pt=U==="flat"?.3:U==="hip"?2.1:U==="gable"||U==="gablefront"?2.3:1.5,Xe=U==="skillion"?2.3:K,Ke=U==="flat"?.3:U==="hip"?1.1:U==="gable"||U==="gablefront"?1.3:.9,Re={x0:0,x1:3.8,z0:-9.2,z1:-4.5},it=U==="flat"?.3:U==="hip"?1.3:U==="gable"||U==="gablefront"?1.4:1,ht=()=>Ys(R.cladding,R.wall),ut=new Le(Zs(U,C.x0,C.x1,C.z0,C.z1,ye,pt),ht());ut.castShadow=ut.receiveShadow=!0;let Vt=new Le(Zs(U,Y.x0,Y.x1,Y.z0,Y.z1,Xe,Ke),ht());Vt.castShadow=Vt.receiveShadow=!0;let hn=new st;hn.add(ut),ee&&hn.add(Vt);let qt=null;W&&(qt=new Le(Zs(U,Re.x0,Re.x1,Re.z0,Re.z1,Ce,it),ht()),qt.castShadow=qt.receiveShadow=!0,hn.add(qt)),[ut,Vt].forEach(Q=>{Q.geometry.computeBoundingBox(),Q.userData.top=Q.geometry.boundingBox.max.y}),O.add(hn);let bt=I;b(hn,{start:12,dur:1.3,kind:"custom",tag:ze,add:!1,fn:(Q,ge)=>{let xe=Math.max(.001,Pr(ge));hn.scale.y=xe,hn.position.y=bt*(1-xe)}}),G=new st,O.add(G);let dt=new st;if(G.add(dt),dt.add(X(U,C.x0,C.x1,C.z0,C.z1,ye,pt,Si(R.roofColor),.6)),ee&&dt.add(X(U,Y.x0,Y.x1,Y.z0,Y.z1,Xe,Ke,Si(R.roofColor),.5)),W&&dt.add(X(U,Re.x0,Re.x1,Re.z0,Re.z1,Ce,it,Si(R.roofColor),.5)),pe){let Q=Ge(w(3813158,{roughness:.8})),ge=new st;[[Y.x0+.2,Y.z0+.2],[Y.x1-.2,Y.z0+.2],[Y.x0+.2,Y.z1-.2],[Y.x1-.2,Y.z1-.2]].forEach(([Se,qe])=>ge.add(_(.16,2.4,.16,Q,Se,I+1.2,qe)));let xe=new Le(new Mn(Y.x1-Y.x0+.8,.14,Y.z1-Y.z0+.8),Si(R.roofColor));xe.position.set((Y.x0+Y.x1)/2,I+2.5,(Y.z0+Y.z1)/2),xe.castShadow=!0,ge.add(xe),dt.add(ge)}if(b(dt,{start:12.9,dur:1.3,kind:"drop",tag:ze,add:!1}),R.chimney){let Q=U==="gablefront"?-1.2:1.2,ge=U==="hip"?5.6:U==="gablefront"?6.6:6.2,xe=(U==="gablefront"?Lr(ye,pt,C.x0-.6,C.x1+.6,ge):T(U,ye,pt,C.z0-.6,C.z1+.6,Q))-.4,Se=V(_(.7,2.4,.7,Ge(w(9189938,{roughness:.95})),0,1.2,0),_(.9,.18,.9,Ge(w(2239277)),0,2.5,0));Se.position.set(ge,xe,Q),G.add(Se),b(Se,{start:13.6,dur:.7,kind:"rise",tag:ze,add:!1}),Je.set(ge,xe+2.6,Q)}if(R.solar){let Q=Wi(64,96,(xe,Se,qe)=>{xe.fillStyle="#1a2a4c",xe.fillRect(0,0,Se,qe),xe.strokeStyle="rgba(180,200,240,.55)",xe.lineWidth=1;for(let Ye=1;Ye<4;Ye++)xe.beginPath(),xe.moveTo(Ye*Se/4,0),xe.lineTo(Ye*Se/4,qe),xe.stroke();for(let Ye=1;Ye<6;Ye++)xe.beginPath(),xe.moveTo(0,Ye*qe/6),xe.lineTo(Se,Ye*qe/6),xe.stroke()},!1),ge=Ge(new on({map:Q,roughness:.25,metalness:.6}));if(U==="gablefront"){let xe=C.x0-.6,Se=C.x1+.6,qe=(xe+Se)/2,Ye=Math.atan2(pt,qe-xe);for(let At=0;At<4;At++)[.3,.62].forEach(Ct=>{let yt=Se-(Se-qe)*Ct,Jt=_(1.6,.05,1,ge,yt,Lr(ye,pt,xe,Se,yt)+.1,-3+At*1.7);Jt.rotation.z=-Ye,G.add(Jt)})}else{let xe=C.z0-.6,Se=C.z1+.6,qe=Math.atan2(pt,U==="skillion"?Se-xe:Se-(C.z0+C.z1)/2),Ye=U==="skillion"?[.28,.62]:[.34,.7];for(let At=0;At<4;At++)Ye.forEach(Ct=>{let yt=U==="skillion"?Se-(Se-xe)*Ct:C.z1+.6-(C.z1+.6-(C.z0+C.z1)/2)*Ct,Jt=_(1,.05,1.6,ge,1.6+At*1.2,T(U,ye,pt,xe,Se,yt)+.1,yt);Jt.rotation.x=qe,G.add(Jt)})}}if(R.detail==="bungalow"&&U==="gablefront"){let Q=Wi(64,64,(Se,qe,Ye)=>{Se.fillStyle="#8a6b4a",Se.fillRect(0,0,qe,Ye);for(let At=0;At<Ye;At+=8)Se.fillStyle=At%16?"rgba(0,0,0,.18)":"rgba(255,255,255,.08)",Se.fillRect(0,At,qe,6),Se.fillStyle="rgba(0,0,0,.35)",Se.fillRect(0,At+6,qe,2)});Q.repeat.set(4,2);let ge=new Gi;ge.moveTo(C.x0,I+ye),ge.lineTo(C.x1,I+ye),ge.lineTo((C.x0+C.x1)/2,I+ye+pt),ge.closePath(),[C.z1+.03,C.z0-.03].forEach((Se,qe)=>{let Ye=new Le(new so(ge),Ge(new on({map:Q,roughness:.9})));Ye.position.z=Se,qe&&(Ye.rotation.y=Math.PI),G.add(Ye)});let xe=Ge(w(3813158,{roughness:.8}));for(let Se=C.z0-.3;Se<=C.z1+.3;Se+=.7)[C.x0-.55,C.x1+.55].forEach(qe=>G.add(_(.12,.12,.35,xe,qe,I+ye-.12,Se)))}if(R.detail==="deco"){let Q=Ge(w(15855074,{roughness:.8})),ge=Ge(w(15855074,{roughness:.8}));[[C.z1+.05,0],[C.z0-.05,0]].forEach(([xe])=>{[I+1.1,I+ye-.5].forEach(Se=>G.add(_(C.x1-C.x0+.12,.09,.16,ge,(C.x0+C.x1)/2,Se,xe)))}),G.add(_(3.4,1.25,.32,Q,C.x0+6.6,I+ye+.62,C.z1+.12)),[-1.1,0,1.1].forEach(xe=>G.add(_(.1,1,.36,Ge(w(13214794,{roughness:.5,metalness:.4})),C.x0+6.6+xe,I+ye+.62,C.z1+.14)))}let ft=new st;O.add(ft);let Tt=Wi(128,128,(Q,ge,xe)=>{Q.fillStyle="#b98e5e",Q.fillRect(0,0,ge,xe);for(let Se=0;Se<8;Se++)Q.fillStyle=Se%2?"rgba(0,0,0,.07)":"rgba(255,255,255,.08)",Q.fillRect(0,Se*16,ge,16),Q.fillStyle="rgba(0,0,0,.35)",Q.fillRect(0,Se*16,ge,1.5)});Tt.repeat.set(4,4);let Ft=new Le(new Sn(C.x1-C.x0-.3,C.z1-C.z0-.3),Ge(new on({map:Tt,roughness:.7})));Ft.rotation.x=-Math.PI/2,Ft.position.set((C.x0+C.x1)/2,I+.02,0),Ft.receiveShadow=!0,ft.add(Ft);let Dn=new Le(new Mn(C.x1-C.x0-.26,ye-.04,C.z1-C.z0-.26),Ge(new on({color:16052714,roughness:.95,side:an})));if(Dn.position.set((C.x0+C.x1)/2,I+ye/2,0),ft.add(Dn),Ae=new Le(new Sn(C.x1-C.x0-.3,C.z1-C.z0-.3),Ge(w(16448250,{roughness:1}))),Ae.rotation.x=Math.PI/2,Ae.position.set((C.x0+C.x1)/2,I+Ce-.06,0),ft.add(Ae),W){let Q=new Le(new Sn(Re.x1-Re.x0-.3,Re.z1-Re.z0-.3),Ge(new on({map:Tt,roughness:.7})));Q.rotation.x=-Math.PI/2,Q.position.set((Re.x0+Re.x1)/2,I+.02,(Re.z0+Re.z1)/2),ft.add(Q);let ge=new Le(new Mn(Re.x1-Re.x0-.26,Ce-.04,Re.z1-Re.z0-.26),Ge(new on({color:16052714,roughness:.95,side:an})));ge.position.set((Re.x0+Re.x1)/2,I+Ce/2,(Re.z0+Re.z1)/2),ft.add(ge)}let ti=Ge(w(16052714,{roughness:.95})),un=Ge(w(11039817,{roughness:.7})),mn=Q=>Ge(w(Q,{roughness:.95}));[[5.2,-4.4,.35],[5.2,1.5,4.4]].forEach(([Q,ge,xe])=>ft.add(_(.1,ye-.1,xe-ge,ti,Q,I+ye/2,(ge+xe)/2))),[[5.2,6,0],[7.1,8.5,0]].forEach(([Q,ge,xe])=>ft.add(_(ge-Q,ye-.1,.1,ti,(Q+ge)/2,I+ye/2,xe))),ft.add(_(2.3,.42,.95,mn(5664890),2.4,I+.25,1.3),_(2.3,.5,.22,mn(5664890),2.4,I+.55,.85),_(.2,.55,.95,mn(5664890),1.3,I+.4,1.3),_(.2,.55,.95,mn(5664890),3.5,I+.4,1.3),_(1.2,.05,.8,mn(14273976),2.4,I+.04,2.7),_(1,.36,.55,un,2.4,I+.2,2.7),_(1.5,.5,.4,mn(2765880),.5,I+.28,3.4)),ft.add(_(2.4,.9,.9,mn(15328470),2.7,I+.46,-2.2),_(2.5,.06,1,un,2.7,I+.93,-2.2),_(4.2,.9,.6,mn(14672864),2.2,I+.46,-4.15),_(.8,1.8,.6,mn(13227212),4.6,I+.92,-4.15)),ft.add(_(1.6,.06,.9,un,.9,I+.76,-1),_(.08,.7,.08,un,.2,I+.4,-1.35),_(.08,.7,.08,un,1.6,I+.4,-1.35),_(.08,.7,.08,un,.2,I+.4,-.65),_(.08,.7,.08,un,1.6,I+.4,-.65)),[[.5,-1.7],[1.3,-1.7],[.5,-.3],[1.3,-.3]].forEach(([Q,ge])=>ft.add(_(.4,.45,.4,mn(3885646),Q,I+.24,ge))),ft.add(_(1.6,.45,2,mn(14999506),7,I+.25,-2.7),_(1.6,.2,.4,mn(16777215),7,I+.55,-3.5),_(.7,.4,.3,mn(16777215),6.6,I+.55,-3.6),_(.7,.4,.3,mn(16777215),7.4,I+.55,-3.6),_(1,2,.5,un,5.7,I+1.05,-4.1),_(.5,.5,.5,un,8,I+.28,-3.7)),W&&ft.add(_(1.5,.45,1.9,mn(14999506),1.9,I+.25,-7.4),_(1.5,.2,.4,mn(16777215),1.9,I+.55,-8.2),_(.8,.5,.5,un,.5,I+.28,-5.2),_(.5,.5,.5,un,3.3,I+.28,-8.3)),b(ft,{start:13.4,dur:.3,kind:"custom",tag:ze,add:!1,fn:()=>{}});let jt=Ge(w(new He(R.joinery),{roughness:.5})),bo=ot(),Br=Ge(w(16052714,{roughness:.6})),Rn=new st;O.add(Rn);let Wu=()=>new $n({color:13625070,side:An});function sn(Q,ge,xe,Se,qe,Ye,At){let Ct=new st,yt=.07;Ct.add(_(Q,yt,.14,jt,0,ge/2-yt/2,0),_(Q,yt,.14,jt,0,-ge/2+yt/2,0),_(yt,ge,.14,jt,-Q/2+yt/2,0,0),_(yt,ge,.14,jt,Q/2-yt/2,0,0));for(let Nn=1;Nn<=At;Nn++)Ct.add(_(.05,ge,.1,jt,-Q/2+Q*Nn/(At+1),0,0));let Jt=new Le(new Sn(Q-yt*2,ge-yt*2),bo.clone());Jt.position.z=-.01,Ct.add(Jt);let Yi=new Le(new Sn(Q-yt*2,ge-yt*2),new $n({color:16764805,transparent:!0,opacity:0}));Yi.position.z=-.06,Ct.add(Yi),We.push(Yi);let Zi=new Le(new Sn(Q-yt*2,ge-yt*2),Wu());Zi.position.z=-.17,Ct.add(Zi),Ct.add(_(Q,.05,.05,jt,0,ge/2,-.17),_(Q,.05,.05,jt,0,-ge/2,-.17),_(.05,ge,.05,jt,-Q/2,0,-.17),_(.05,ge,.05,jt,Q/2,0,-.17)),R.detail==="villa"&&(Ct.add(_(Q,.045,.1,jt,0,ge*.08,.01)),At===0&&Ct.add(_(.045,ge,.1,jt,0,0,.01)),Ct.add(_(.045,ge*.5,.1,jt,-Q*.25,-ge*.25,.01),_(.045,ge*.5,.1,jt,Q*.25,-ge*.25,.01))),Ct.add(_(Q+.22,.06,.24,Br,0,-ge/2-.04,.09),_(Q+.14,.08,.1,Br,0,ge/2+.05,.04),_(.07,ge+.1,.1,Br,-Q/2-.06,0,.03),_(.07,ge+.1,.1,Br,Q/2+.06,0,.03)),Ct.position.set(xe,Se,qe),Ct.rotation.y=Ye,Rn.add(Ct)}let Xu=()=>Ys(R.cladding,R.wall);if(R.windows==="large")sn(4.2,2,C.x0+2.3,I+1.2,C.z1+.03,0,2);else if(R.bay){let Q=C.x0+2.35,ge=C.z1,xe=Xu();Rn.add(_(.12,2.2,1.1,xe,Q-1.15,I+1.15,ge+.55),_(.12,2.2,1.1,xe,Q+1.15,I+1.15,ge+.55),_(2.4,.5,1.1,xe,Q,I+.4,ge+.55)),sn(2.2,1.4,Q,I+1.6,ge+1.1,0,2);let Se=new Le(new Mn(2.8,.1,1.6),Si(R.roofColor));Se.position.set(Q,I+2.38,ge+.7),Se.rotation.x=.18,Rn.add(Se)}else sn(2.9,1.4,C.x0+2.35,I+1.6,C.z1+.03,0,1);if(R.windows!=="large"&&sn(.9,1.4,C.x0+4.75,I+1.6,C.z1+.03,0,0),sn(.7,2,C.x0+6.05,I+1.15,C.z1+.03,0,0),sn(1.6,1.2,C.x1+.03,I+1.6,0,Math.PI/2,1),sn(1.6,1.2,C.x1+.03,I+1.6,-2.8,Math.PI/2,0),W||sn(2.2,1.2,3,I+1.6,C.z0-.03,Math.PI,1),sn(1.2,1.2,7,I+1.6,C.z0-.03,Math.PI,0),W&&(sn(1.6,1.2,1.9,I+1.6,Re.z0-.03,Math.PI,1),sn(1.4,1.2,Re.x1+.03,I+1.6,-6.9,Math.PI/2,0),sn(1.4,1.2,Re.x0-.03,I+1.6,-6.9,-Math.PI/2,0)),Z){let Q=Ce+.05;sn(2.9,1.4,C.x0+2.35,I+1.6+Q,C.z1+.03,0,1),sn(1.4,1.4,C.x0+5.2,I+1.6+Q,C.z1+.03,0,0),sn(1.4,1.4,C.x0+7.3,I+1.6+Q,C.z1+.03,0,0),sn(1.6,1.2,C.x1+.03,I+1.6+Q,0,Math.PI/2,1),sn(2.2,1.2,3,I+1.6+Q,C.z0-.03,Math.PI,1),sn(1.2,1.2,7,I+1.6+Q,C.z0-.03,Math.PI,0),Rn.add(_(8.8,.1,.35,jt,(C.x0+C.x1)/2,I+Ce+.05,C.z1+.18))}De=new st,De.position.set(C.x0+6.42,I+1.025,C.z1+.04);let qu=R.door==="timber"?Ge(w(11039817,{roughness:.55})):Ge(w(new He(R.door),{roughness:.45}));if(De.add(_(1.05,2.05,.1,qu,.525,0,0),_(.4,.9,.04,bo.clone(),.525,.45,.07),_(.05,.5,.05,Ge(w(15919049,{metalness:.7,roughness:.3})),.95,-.1,.1)),Rn.add(De),R.detail==="deco"){let Q=new Le(new En(.34,.34,.1,24),bo.clone());Q.rotation.x=Math.PI/2,Q.position.set(C.x0+5.55,I+1.75,C.z1+.06),Rn.add(Q);let ge=new Le(new ro(.35,.04,8,24),jt);ge.position.copy(Q.position),ge.position.z+=.04,Rn.add(ge)}Rn.add(_(.12,2.1,.12,jt,C.x0+6.38,I+1.05,C.z1+.04));let Sl=V(_(2.7,.12,1.5,jt,0,0,0),_(.14,2.3,.14,Ge(w(12160606)),-1.2,-1.2,.62),_(.14,2.3,.14,Ge(w(12160606)),1.2,-1.2,.62),_(.14,.14,1.5,jt,-1.35,.02,0),_(.14,.14,1.5,jt,1.35,.02,0));if(Sl.position.set(C.x0+6.6,I+2.45,C.z1+.75),R.veranda){let Q=Ge(w(15921384,{roughness:.6})),ge=Ge(w(10122312,{roughness:.8})),xe=new st;xe.add(_(9.6,.12,2.3,ge,(C.x0+C.x1)/2,.12,C.z1+1.2));let Se=Ge(w(9061946,{roughness:.95}));for(let Ye=C.x0-.2;Ye<=C.x1+.3;Ye+=1.75){if(R.detail==="bungalow"){let At=_(.55,.85,.55,Se,Ye,.5,C.z1+2.2);xe.add(At);let Ct=new Le(new En(.14,.24,1.7,4),Q);Ct.rotation.y=Math.PI/4,Ct.position.set(Ye,.85+.85,C.z1+2.2),Ct.castShadow=!0,xe.add(Ct)}else xe.add(_(.13,2.45,.13,Q,Ye,I+1.25,C.z1+2.2));if(R.detail==="villa"){xe.add(_(.5,.05,.05,Q,Ye+.3,I+2.2,C.z1+2.2).rotateZ(-.7),_(.5,.05,.05,Q,Ye-.3,I+2.2,C.z1+2.2).rotateZ(.7));for(let At=0;At<7;At++)xe.add(_(.035,.3,.035,Q,Ye+.2+At*.2,I+2.3,C.z1+2.2))}else xe.add(_(1.3,.14,.06,Q,Ye+.87,I+2.35,C.z1+2.2))}let qe=new Le(new Mn(9.8,.09,2.7),Si(R.roofColor));qe.position.set((C.x0+C.x1)/2,I+2.82,C.z1+1.25),qe.rotation.x=.17,qe.castShadow=!0,xe.add(qe),xe.add(_(9.8,.2,.07,Q,(C.x0+C.x1)/2,I+2.6,C.z1+2.46)),Rn.add(xe)}else Rn.add(Sl);if(ee){let Q=new st;Q.add(_(3.3,2,.1,Ge(w(9280149,{roughness:.55})),0,0,0));for(let ge=0;ge<4;ge++)Q.add(_(3.3,.03,.12,Ge(w(7306359)),0,-.75+ge*.5,.02));Q.position.set((Y.x0+Y.x1)/2,I+1,Y.z1+.04),Rn.add(Q)}if(Rn.traverse(Q=>Q.castShadow=!0),b(Rn,{start:13.8,dur:1,kind:"pop",tag:ze,add:!1}),R.veranda||b(_(3,.18,1.5,Ge(w(10989736)),C.x0+6.6,.09,C.z1+.8),{start:13.9,dur:.5,kind:"rise",tag:ze,parent:O}),R.fence&&R.fence!=="none"){let Q=new st,ge=[[-13,-5.3],[-.5,6.15],[7.75,14.5]],xe=15.2,Se=Ge(w(R.fence==="picket"?16052714:3103301,{roughness:.8}));ge.forEach(([qe,Ye])=>{let At=Ye-qe,Ct=(qe+Ye)/2;if(R.fence==="picket"){Q.add(_(At,.07,.05,Se,Ct,.35,xe),_(At,.07,.05,Se,Ct,.8,xe));for(let yt=qe;yt<=Ye;yt+=.2){let Jt=_(.09,.95,.03,Se,yt,.5,xe+.03);Q.add(Jt)}[qe,Ye].forEach(yt=>Q.add(_(.12,1.1,.12,Se,yt,.55,xe)))}else{Q.add(_(At,1.05,.8,Ge(w(2841150,{roughness:1})),Ct,.55,xe));for(let yt=qe+.3;yt<Ye;yt+=.7){let Jt=new Le(new Ar(.42,1),Ge(w(3501386,{roughness:1})));Jt.position.set(yt,1.1,xe),Jt.scale.set(1,.7,1),Jt.castShadow=!0,Q.add(Jt)}}}),b(Q,{start:14.7,dur:.6,kind:"pop",tag:ze,parent:O})}{let Q=Ge(w(2765880,{roughness:.5,metalness:.3})),ge=Ge(w(5858666,{roughness:.5,metalness:.4})),xe=new st,Se=.6,qe=I+ye-.06;U!=="gablefront"?xe.add(_(C.x1-C.x0+Se*2,.1,.12,Q,(C.x0+C.x1)/2,qe,C.z1+Se),_(C.x1-C.x0+Se*2,.1,.12,Q,(C.x0+C.x1)/2,qe,C.z0-Se)):xe.add(_(.12,.1,C.z1-C.z0+Se*2,Q,C.x0-Se,qe,0),_(.12,.1,C.z1-C.z0+Se*2,Q,C.x1+Se,qe,0));let Ye=(Jt,Yi,Zi)=>{let Nn=new Le(new En(.045,.045,Zi-I,8),ge);Nn.position.set(Jt,I+(Zi-I)/2,Yi),Nn.castShadow=!0,xe.add(Nn)};U!=="gablefront"?(Ye(C.x0+.12,C.z1+.1,qe),Ye(C.x1-.12,C.z1+.1,qe),Ye(C.x1-.12,C.z0-.1,qe)):(Ye(C.x0-.1,C.z1-.2,qe),Ye(C.x1+.1,C.z1-.2,qe)),ee&&(xe.add(_(Y.x1-Y.x0+1,.09,.11,Q,(Y.x0+Y.x1)/2,I+Xe-.05,Y.z1+.5)),Ye(Y.x0+.1,Y.z1+.1,I+Xe-.05));let At=(Jt,Yi,Zi)=>{let Nn=new st;return Nn.add(_(.55,.95,.7,Ge(w(3095101,{roughness:.8})),0,.5,0),_(.6,.08,.75,Ge(w(Zi,{roughness:.6})),0,1,0)),Nn.position.set(Jt,0,Yi),Nn.rotation.y=.1,Nn};xe.add(At(Y.x1+.9,Y.z1+1.4,15123514),At(Y.x1+1.7,Y.z1+1.5,12727348));let Ct=Ge(w(5916210,{roughness:.9}));xe.add(_(5.4,.22,.6,Ct,C.x0+2.6,.12,C.z1+.55),_(5.4,.1,.5,Ge(w(3878691,{roughness:1})),C.x0+2.6,.2,C.z1+.55)),xe.add(L(new Le(new En(.6,.6,1.9,16),Ge(w(6979462,{roughness:.55,metalness:.3}))),C.x1-1.6,.95,C.z0-1.2));let yt=new st;[-1,1].forEach(Jt=>yt.add(_(.06,2,.06,ge,Jt*1.2,1,0))),yt.add(_(2.4,.04,.04,ge,0,2,0),_(2.4,.04,.04,ge,0,1.85,.25)),yt.position.set(C.x1+1.5,0,-6.4),xe.add(yt),b(xe,{start:14.5,dur:.8,kind:"fade",tag:ze,parent:O})}if(R.deck){let Q=new st,ge=Ge(w(10122312,{roughness:.8})),xe=Ge(w(3813158));Q.add(_(3.6,.14,5,ge,C.x1+1.9,.12,-1.8));for(let Se=0;Se<4;Se++)Q.add(_(.12,2.5,.12,xe,C.x1+(Se%2?3.6:.2),1.35,Se<2?-4.2:.4));for(let Se=0;Se<10;Se++)Q.add(_(.06,.1,5.2,xe,C.x1+.15+Se*.38,2.6,-1.9));Q.add(_(3.8,.12,.12,xe,C.x1+1.9,2.55,-4.2),_(3.8,.12,.12,xe,C.x1+1.9,2.55,.4)),b(Q,{start:14.3,dur:.9,kind:"pop",tag:ze,parent:O})}return[["LIVING",2.4,1.6],["KITCHEN",2.6,-2.2],["BEDROOM",7,-2.4],["ENTRY",6.9,2.4],[pe?"CARPORT":"GARAGE",-2.6,.1]].concat(W?[["BEDROOM 2",1.9,-7]]:[]).forEach(([Q,ge,xe])=>{if((Q==="GARAGE"||Q==="CARPORT")&&!ee&&!pe)return;let Se=document.createElement("canvas");Se.width=256,Se.height=64;let qe=Se.getContext("2d");qe.fillStyle="rgba(15,28,23,.82)",qe.beginPath(),qe.roundRect(0,6,256,52,26),qe.fill(),qe.fillStyle="#eef2ea",qe.font='600 28px "IBM Plex Mono",monospace',qe.textAlign="center",qe.textBaseline="middle",qe.fillText(Q,128,33);let Ye=new Xa(new xr({map:new Mr(Se),transparent:!0,depthTest:!1}));Ye.scale.set(2.8,.7,1),Ye.position.set(ge,I+1.1,xe),Ye.visible=!1,Ye.renderOrder=10,O.add(Ye),at.push(Ye)}),O}kt(ln);let vt=0,Mt=0,fn=!1,It=0,lt=0,ai=1,Dt=null;function kn(R){o.forEach(O=>{let U=dn((vt-O.start)/O.dur,0,1),Z=O.end!=null?1-dn((vt-O.end)/.7,0,1):1,W=O.o;if(U<=0||Z<=0){W.visible=!1;return}W.visible=!0;let ee=Du(U);switch(O.kind){case"fade":k(W,ee*Z);break;case"pop":{let pe=Math.max(.001,Nu(U))*Z;W.scale.set(O.sx*pe,O.sy*pe,O.sz*pe);break}case"grow":{let pe=Math.max(.001,Nu(U))*Z;W.scale.set(O.sx*pe,O.sy*pe,O.sz*pe);break}case"rise":W.scale.y=O.sy*Math.max(.001,Pr(U));break;case"drop":W.position.y=O.py+(1-Pr(U))*6,k(W,Math.min(1,U*3));break;case"custom":O.fn&&O.fn(R,U),O.end!=null&&k(W,Z);break}O.fn&&O.kind!=="custom"&&O.fn(R,U)})}function Ir(){if(s)return A("golden",1);let R=Dt||(ln.tod!=="auto"?ln.tod:null);if(R&&vt>=15.9)return A(R,1);let O=Du(dn((vt-14.6)/1.4,0,1));return A("golden",O)}let In=0;function cs(R,O){let U=Ir(),Z=O?1:Math.min(1,R*3.2);["top","mid","bot","fog","hemi","hemiG","sun"].forEach(pe=>M[pe].lerp(U[pe],Z)),["fogFar","hi","si","exp","li"].forEach(pe=>M[pe]+=(U[pe]-M[pe])*Z),M.sp.lerp(U.sp,Z),h.top.value.copy(M.top),h.mid.value.copy(M.mid),h.bot.value.copy(M.bot),r.fog.color.copy(M.fog),r.fog.far=M.fogFar,u.color.copy(M.hemi),u.groundColor.copy(M.hemiG),u.intensity=M.hi,d.color.copy(M.sun),d.intensity=M.si,d.position.copy(M.sp),n.toneMappingExposure=M.exp;let W=M.li>.5&&vt>=15.3?1:0;In+=(W-In)*Math.min(1,R*(W>In?.45:2.5)),O&&!W&&(In=0);let ee=dn(M.li,0,1)*In;We.forEach((pe,Ce)=>{pe.material.opacity=dn(In*1.7-Ce*.11,0,1)*dn(M.li,0,1)*.92}),g.intensity=ee*2.4,y.intensity=Math.max(ee*1.4,ei?1.6:0)*(ei&&Un>=6||ee?1:0),p.intensity=y.intensity*.8}let Ot=new P(0,s?7.6:7.5,2),jn=0,ls=0;s&&window.addEventListener("pointermove",R=>{jn=(R.clientX/window.innerWidth-.5)*2,ls=(R.clientY/window.innerHeight-.5)*2},{passive:!0});let Xt=-.5,pn=1.44,Ei=26,bi=Xt,Ur=pn,Js=!1,mo=0,go=0,_o=!1,Dr=0,oi=n.domElement;oi.addEventListener("pointerdown",R=>{ei||s||(Js=!0,mo=R.clientX,go=R.clientY,_o=!0,Dr=0,oi.setPointerCapture(R.pointerId),oi.style.cursor="grabbing")}),oi.addEventListener("pointermove",R=>{Js&&(bi-=(R.clientX-mo)*.0075,Ur=dn(Ur-(R.clientY-go)*.0055,.45,1.5),mo=R.clientX,go=R.clientY)});let ul=()=>{Js=!1,oi.style.cursor=ei?"default":"grab",Dr=0};oi.addEventListener("pointerup",ul),oi.addEventListener("pointercancel",ul);function dl(){Xt+=(bi-Xt)*.12,pn+=(Ur-pn)*.12,a.position.set(Ot.x+Ei*Math.sin(pn)*Math.sin(Xt),Ot.y+Ei*Math.cos(pn),Ot.z+Ei*Math.sin(pn)*Math.cos(Xt)),a.lookAt(Ot)}function fl(){let R=i.clientWidth||600,O=i.clientHeight||400;if(n.setSize(R,O,!1),a.aspect=R/O,s){let U=R/O>1.15;Ei=U?R/O>1.8?30:33:38,a.setViewOffset(R,O,U?R*.03:0,U?-O*.03:-O*.02,R,O)}else Ei=R/O<1.1?36:R/O<1.5?27:24,a.clearViewOffset();a.updateProjectionMatrix()}let pl=new ResizeObserver(fl);pl.observe(i),fl();let Zt=(R,O,U)=>P_(R,O,U),hs=[{p:Zt(-4,2,26),l:Zt(2.5,1.8,3)},{p:Zt(11,2.6,16),l:Zt(4.3,2,3.5)},{p:Zt(13,5.4,9),l:Zt(4.3,3.4,2)},{p:Zt(19,2.4,6),l:Zt(12.5,3.6,.5)},{p:Zt(15,3.2,-12),l:Zt(5,1.8,-2)},{p:Zt(4.3,23,15),l:Zt(3,0,.5),cut:!0},{p:Zt(6.95,1.6,8.8),l:Zt(6.95,1.4,4.4),open:!0},{p:Zt(6.4,1.6,3.5),l:Zt(2.5,1.2,1.8),open:!0},{p:Zt(4.7,1.6,-.4),l:Zt(1.4,1.1,-3.4),open:!0},{p:Zt(5.9,1.6,.9),l:Zt(7.4,.9,-2.8),open:!0},{p:Zt(-9,3.4,23),l:Zt(2.5,2.2,3),tod:"golden"}],ei=!1,Un=0,qi=0,$s=!0,xo=new P,yo=new P,vo=new P,ml=new P,Nr=e.onTour||null,Mo=0,zu=5.2,Hu=2.4;function Ks(R){Un=dn(R,0,hs.length-1);let O=hs[Un];xo.copy(a.position);let U=new P;a.getWorldDirection(U),yo.copy(a.position).addScaledVector(U,10),qi=0,Mo=0,fn=!!O.cut,lt=O.open?1:0,Dt=O.tod||(ln.tod!=="auto"?ln.tod:null),Nr&&Nr(Un,Bu[Un],!0)}function ku(){vt=Mt=16,Vn=!1,ei=!0,_o=!0,oi.style.cursor="default";let R=hs[0];a.position.copy(R.p),xo.copy(R.p),yo.copy(R.l),Ks(0),qi=1}function gl(){ei=!1,fn=!1,lt=0,Dt=null,bi=Xt,Ur=pn,oi.style.cursor="grab",Nr&&Nr(-1,null,!1)}let Ti=new P,Vu=[new P(26,41,-116),new P(-36,1.5,-66),new P(2.6,5.2,1)],_l=!1,Vn=e.autoplay!==!1&&!t&&!e.startFinished,xl=!0,So=0,Or=performance.now(),Eo=0,Gn=0,yl=e.onProgress||null,Gu=e.speed||(s?16/15:16/20);(t||e.startFinished)&&(vt=Mt=16,Vn=!1,e.tod&&(ln.tod=e.tod));function vl(R){if(So=requestAnimationFrame(vl),!xl||_l)return;let O=Math.min(.05,(R-Or)/1e3);Or=R,Gn+=O,Vn&&!ei&&(Mt<16?Mt=Math.min(16,Mt+O*Gu):s||(Eo+=O,Eo>5&&(Eo=0,Mt=0,vt=0))),vt+=(Mt-vt)*Math.min(1,O*(Vn?6:4.5)),Math.abs(Mt-vt)<.002&&(vt=Mt),Js||(Dr+=O),l.constant+=((fn?2.45:100)-l.constant)*Math.min(1,O*(fn?5:3)),G&&(G.visible=!(fn&&l.constant<20)),at.forEach(Z=>Z.visible=fn&&l.constant<12),It+=(lt-It)*Math.min(1,O*3),De&&(De.rotation.y=-It*1.7),ai<1&&(ai=Math.min(1,ai+O*2.2),q.scale.setScalar(.96+.04*Pr(ai))),he.forEach((Z,W)=>{let ee=(Gn*.12+W/3)%1;Z.position.z=-34.2-ee*5,Z.material.opacity=.55*(1-ee),Z.scale.y=1+ee*1.5}),tt.forEach((Z,W)=>{Z.position.y=.1+Math.sin(Gn*.9+W*1.7)*.12,Z.rotation.z=Math.sin(Gn*.7+W)*.03});let U=ln.chimney?dn((vt-15.6)/.4,0,1):0;if(qs.forEach((Z,W)=>{let ee=(Gn*.35+W/qs.length)%1;Z.visible=U>0,Z.position.set(Je.x+ee*1.2+Math.sin(Gn+W)*.1,Je.y+ee*3.2,Je.z),Z.scale.setScalar(.5+ee*2),Z.material.opacity=U*.4*(1-ee)*Math.min(1,ee*6)}),ei){qi=Math.min(1,qi+O/zu);let Z=C_(qi),W=hs[Un];vo.copy(xo).lerp(W.p,Z),ml.copy(yo).lerp(W.l,Z),vo.y+=Math.sin(Gn*.8)*.05,a.position.copy(vo),a.lookAt(ml),qi>=1&&$s&&(Mo+=O,Mo>Hu&&(Un<hs.length-1?Ks(Un+1):$s=!1))}else if(s){let Z=dn(window.scrollY/Math.max(1,window.innerHeight),0,1),W=-.34+Math.sin(Gn*.1)*.1+jn*.08+Z*.7,ee=1.43-ls*.025-Z*.12,pe=Ei*(1-Z*.2);Xt+=(W-Xt)*.06,pn+=(ee-pn)*.06,a.position.set(Ot.x+pe*Math.sin(pn)*Math.sin(Xt),Ot.y+pe*Math.cos(pn),Ot.z+pe*Math.sin(pn)*Math.cos(Xt)),a.lookAt(Ot)}else!t&&(!_o||Dr>5)&&!Js&&(bi+=(-.5+Math.sin(Gn*.16)*.8-bi)*.02),dl();if(kn(Gn),cs(O,!1),n.render(r,a),yl&&yl(vt),e.onAnchors){let Z=Vu.map(W=>(Ti.copy(W).project(a),{x:(Ti.x*.5+.5)*i.clientWidth,y:(-Ti.y*.5+.5)*i.clientHeight,v:Ti.z<1&&Ti.x>-1.05&&Ti.x<1.05&&Ti.y>-1.05&&Ti.y<1.05}));e.onAnchors(Z)}}kn(0),dl(),cs(1,!0),n.render(r,a);let Ml=new IntersectionObserver(R=>{xl=R[0].isIntersecting,Or=performance.now()},{threshold:.05});return Ml.observe(i),So=requestAnimationFrame(vl),{setProgress(R){Fr(),Mt=dn(R,0,16),Vn=!1},goStage(R){Fr(),Mt=dn(R*4,0,16),Vn=!1},play(){Fr(),Vn=!0,Mt>=16&&(Mt=0,vt=0)},pause(){Vn=!1},setHeld(R){_l=!!R,Or=performance.now()},get playing(){return Vn},get progress(){return vt},getDesign(){return Object.assign({},ln)},setDesign(R){Fr(),ln=Object.assign({},ln,R),vt<15.9&&(Mt=16,vt=16,Vn=!1),kt(ln),ai=0,kn(Gn)},setTod(R){ln.tod=R,vt<15.9&&(Mt=16,vt=16,Vn=!1)},startTour(){ku()},stopTour(){gl()},tourNext(){$s=!1,Ks(Un+1)},tourPrev(){$s=!1,Ks(Un-1)},tourAutoplay(R){$s=R,R&&Un>=hs.length-1&&qi>=1&&Ks(0)},get touring(){return ei},get tourIndex(){return Un},dispose(){cancelAnimationFrame(So),pl.disconnect(),Ml.disconnect(),n.dispose(),n.domElement.remove()}};function Fr(){ei&&gl()}}return Qu(I_);})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
