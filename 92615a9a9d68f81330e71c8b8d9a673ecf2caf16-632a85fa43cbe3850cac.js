(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{HwUG:function(t,n,e){"use strict";e.d(n,"a",(function(){return i})),e.d(n,"i",(function(){return u})),e.d(n,"d",(function(){return c})),e.d(n,"b",(function(){return a})),e.d(n,"e",(function(){return s})),e.d(n,"h",(function(){return h})),e.d(n,"f",(function(){return o})),e.d(n,"g",(function(){return f})),e.d(n,"c",(function(){return l}));e("QFcT");var r=e("yU0y");function i(){var t=new r.a(9);return r.a!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[5]=0,t[6]=0,t[7]=0),t[0]=1,t[4]=1,t[8]=1,t}function u(t,n){if(t===n){var e=n[1],r=n[2],i=n[5];t[1]=n[3],t[2]=n[6],t[3]=e,t[5]=n[7],t[6]=r,t[7]=i}else t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8];return t}function c(t,n){var e=n[0],r=n[1],i=n[2],u=n[3],c=n[4],a=n[5],s=n[6],h=n[7],o=n[8],f=o*c-a*h,l=-o*u+a*s,v=h*u-c*s,y=e*f+r*l+i*v;return y?(y=1/y,t[0]=f*y,t[1]=(-o*r+i*h)*y,t[2]=(a*r-i*c)*y,t[3]=l*y,t[4]=(o*e-i*s)*y,t[5]=(-a*e+i*u)*y,t[6]=v*y,t[7]=(-h*e+r*s)*y,t[8]=(c*e-r*u)*y,t):null}function a(t){var n=t[0],e=t[1],r=t[2],i=t[3],u=t[4],c=t[5],a=t[6],s=t[7],h=t[8];return n*(h*u-c*s)+e*(-h*i+c*a)+r*(s*i-u*a)}function s(t,n,e){var r=n[0],i=n[1],u=n[2],c=n[3],a=n[4],s=n[5],h=n[6],o=n[7],f=n[8],l=e[0],v=e[1],y=e[2],k=e[3],d=e[4],g=e[5],p=e[6],b=e[7],M=e[8];return t[0]=l*r+v*c+y*h,t[1]=l*i+v*a+y*o,t[2]=l*u+v*s+y*f,t[3]=k*r+d*c+g*h,t[4]=k*i+d*a+g*o,t[5]=k*u+d*s+g*f,t[6]=p*r+b*c+M*h,t[7]=p*i+b*a+M*o,t[8]=p*u+b*s+M*f,t}function h(t,n,e){var r=n[0],i=n[1],u=n[2],c=n[3],a=n[4],s=n[5],h=n[6],o=n[7],f=n[8],l=e[0],v=e[1];return t[0]=r,t[1]=i,t[2]=u,t[3]=c,t[4]=a,t[5]=s,t[6]=l*r+v*c+h,t[7]=l*i+v*a+o,t[8]=l*u+v*s+f,t}function o(t,n,e){var r=n[0],i=n[1],u=n[2],c=n[3],a=n[4],s=n[5],h=n[6],o=n[7],f=n[8],l=Math.sin(e),v=Math.cos(e);return t[0]=v*r+l*c,t[1]=v*i+l*a,t[2]=v*u+l*s,t[3]=v*c-l*r,t[4]=v*a-l*i,t[5]=v*s-l*u,t[6]=h,t[7]=o,t[8]=f,t}function f(t,n,e){var r=e[0],i=e[1];return t[0]=r*n[0],t[1]=r*n[1],t[2]=r*n[2],t[3]=i*n[3],t[4]=i*n[4],t[5]=i*n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t}function l(t,n){var e=n[0],r=n[1],i=n[2],u=n[3],c=e+e,a=r+r,s=i+i,h=e*c,o=r*c,f=r*a,l=i*c,v=i*a,y=i*s,k=u*c,d=u*a,g=u*s;return t[0]=1-f-y,t[3]=o-g,t[6]=l+d,t[1]=o+g,t[4]=1-h-y,t[7]=v-k,t[2]=l-d,t[5]=v+k,t[8]=1-h-f,t}},Xjzu:function(t,n,e){"use strict";e.d(n,"a",(function(){return J}));var r=e("1OyB"),i=e("vuIU"),u=e("Ji7U"),c=e("md7G"),a=e("foSv"),s=e("41X0"),h=e("+H0l"),o=e("tS8E"),f=e("yU0y"),l=e("HwUG"),v=e("n+fv"),y=e("bl9R");function k(){var t=new f.a(4);return f.a!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0),t[3]=1,t}function d(t,n,e){e*=.5;var r=Math.sin(e);return t[0]=r*n[0],t[1]=r*n[1],t[2]=r*n[2],t[3]=Math.cos(e),t}function g(t,n,e){var r=n[0],i=n[1],u=n[2],c=n[3],a=e[0],s=e[1],h=e[2],o=e[3];return t[0]=r*o+c*a+i*h-u*s,t[1]=i*o+c*s+u*a-r*h,t[2]=u*o+c*h+r*s-i*a,t[3]=c*o-r*a-i*s-u*h,t}function p(t,n,e,r){var i,u,c,a,s,h=n[0],o=n[1],l=n[2],v=n[3],y=e[0],k=e[1],d=e[2],g=e[3];return(u=h*y+o*k+l*d+v*g)<0&&(u=-u,y=-y,k=-k,d=-d,g=-g),1-u>f.b?(i=Math.acos(u),c=Math.sin(i),a=Math.sin((1-r)*i)/c,s=Math.sin(r*i)/c):(a=1-r,s=r),t[0]=a*h+s*y,t[1]=a*o+s*k,t[2]=a*l+s*d,t[3]=a*v+s*g,t}function b(t,n){var e,r=n[0]+n[4]+n[8];if(r>0)e=Math.sqrt(r+1),t[3]=.5*e,e=.5/e,t[0]=(n[5]-n[7])*e,t[1]=(n[6]-n[2])*e,t[2]=(n[1]-n[3])*e;else{var i=0;n[4]>n[0]&&(i=1),n[8]>n[3*i+i]&&(i=2);var u=(i+1)%3,c=(i+2)%3;e=Math.sqrt(n[3*i+i]-n[3*u+u]-n[3*c+c]+1),t[i]=.5*e,e=.5/e,t[3]=(n[3*u+c]-n[3*c+u])*e,t[u]=(n[3*u+i]+n[3*i+u])*e,t[c]=(n[3*c+i]+n[3*i+c])*e}return t}y.b,y.g,y.c,y.l;var M,m,j,w,O,A,R=y.a,x=y.k,S=y.d,q=y.i,E=y.h,U=y.m,F=y.j,z=(y.f,y.e,M=v.b(),m=v.e(1,0,0),j=v.e(0,1,0),function(t,n,e){var r=v.d(n,e);return r<-.999999?(v.c(M,m,n),v.f(M)<1e-6&&v.c(M,j,n),v.i(M,M),d(t,M,Math.PI),t):r>.999999?(t[0]=0,t[1]=0,t[2]=0,t[3]=1,t):(v.c(M,n,e),t[0]=M[0],t[1]=M[1],t[2]=M[2],t[3]=1+r,F(t,t))});w=k(),O=k(),A=l.a();function G(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,r=Object(a.a)(t);if(n){var i=Object(a.a)(this).constructor;e=Reflect.construct(r,arguments,i)}else e=r.apply(this,arguments);return Object(c.a)(this,e)}}var H=[0,0,0,1],J=function(t){Object(u.a)(e,t);var n=G(e);function e(){var t,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;return Object(r.a)(this,e),t=n.call(this,-0,-0,-0,-0),Array.isArray(i)&&1===arguments.length?t.copy(i):t.set(i,u,c,a),t}return Object(i.a)(e,[{key:"copy",value:function(t){return this[0]=t[0],this[1]=t[1],this[2]=t[2],this[3]=t[3],this.check()}},{key:"set",value:function(t,n,e,r){return this[0]=t,this[1]=n,this[2]=e,this[3]=r,this.check()}},{key:"fromMatrix3",value:function(t){return b(this,t),this.check()}},{key:"identity",value:function(){var t;return(t=this)[0]=0,t[1]=0,t[2]=0,t[3]=1,this.check()}},{key:"fromAxisRotation",value:function(t,n){return d(this,t,n),this.check()}},{key:"setAxisAngle",value:function(t,n){return this.fromAxisRotation(t,n)}},{key:"len",value:function(){return E(this)}},{key:"lengthSquared",value:function(){return U(this)}},{key:"dot",value:function(t,n){if(void 0!==n)throw new Error("Quaternion.dot only takes one argument");return S(this,t)}},{key:"rotationTo",value:function(t,n){return z(this,t,n),this.check()}},{key:"add",value:function(t,n){if(void 0!==n)throw new Error("Quaternion.add only takes one argument");return R(this,this,t),this.check()}},{key:"calculateW",value:function(){var t,n,e,r,i;return t=this,e=(n=this)[0],r=n[1],i=n[2],t[0]=e,t[1]=r,t[2]=i,t[3]=Math.sqrt(Math.abs(1-e*e-r*r-i*i)),this.check()}},{key:"conjugate",value:function(){var t,n;return n=this,(t=this)[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t[3]=n[3],this.check()}},{key:"invert",value:function(){var t,n,e,r,i,u,c,a;return t=this,e=(n=this)[0],r=n[1],i=n[2],u=n[3],a=(c=e*e+r*r+i*i+u*u)?1/c:0,t[0]=-e*a,t[1]=-r*a,t[2]=-i*a,t[3]=u*a,this.check()}},{key:"lerp",value:function(t,n,e){return q(this,t,n,e),this.check()}},{key:"multiplyRight",value:function(t,n){return Object(o.a)(!n),g(this,this,t),this.check()}},{key:"multiplyLeft",value:function(t,n){return Object(o.a)(!n),g(this,t,this),this.check()}},{key:"normalize",value:function(){var t=this.len(),n=t>0?1/t:0;return this[0]=this[0]*n,this[1]=this[1]*n,this[2]=this[2]*n,this[3]=this[3]*n,0===t&&(this[3]=1),this.check()}},{key:"rotateX",value:function(t){return function(t,n,e){e*=.5;var r=n[0],i=n[1],u=n[2],c=n[3],a=Math.sin(e),s=Math.cos(e);t[0]=r*s+c*a,t[1]=i*s+u*a,t[2]=u*s-i*a,t[3]=c*s-r*a}(this,this,t),this.check()}},{key:"rotateY",value:function(t){return function(t,n,e){e*=.5;var r=n[0],i=n[1],u=n[2],c=n[3],a=Math.sin(e),s=Math.cos(e);t[0]=r*s-u*a,t[1]=i*s+c*a,t[2]=u*s+r*a,t[3]=c*s-i*a}(this,this,t),this.check()}},{key:"rotateZ",value:function(t){return function(t,n,e){e*=.5;var r=n[0],i=n[1],u=n[2],c=n[3],a=Math.sin(e),s=Math.cos(e);t[0]=r*s+i*a,t[1]=i*s-r*a,t[2]=u*s+c*a,t[3]=c*s-u*a}(this,this,t),this.check()}},{key:"scale",value:function(t){return x(this,this,t),this.check()}},{key:"slerp",value:function(t,n,e){switch(arguments.length){case 1:var r=arguments[0],i=r.start;t=void 0===i?H:i,n=r.target,e=r.ratio;break;case 2:var u=Array.prototype.slice.call(arguments);n=u[0],e=u[1],t=this}return p(this,t,n,e),this.check()}},{key:"transformVector4",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t;return y.o(n,t,this),Object(h.b)(n,4)}},{key:"lengthSq",value:function(){return this.lengthSquared()}},{key:"setFromAxisAngle",value:function(t,n){return this.setAxisAngle(t,n)}},{key:"premultiply",value:function(t,n){return this.multiplyLeft(t,n)}},{key:"multiply",value:function(t,n){return this.multiplyRight(t,n)}},{key:"ELEMENTS",get:function(){return 4}},{key:"x",get:function(){return this[0]},set:function(t){this[0]=Object(h.a)(t)}},{key:"y",get:function(){return this[1]},set:function(t){this[1]=Object(h.a)(t)}},{key:"z",get:function(){return this[2]},set:function(t){this[2]=Object(h.a)(t)}},{key:"w",get:function(){return this[3]},set:function(t){this[3]=Object(h.a)(t)}}]),e}(s.a)}}]);