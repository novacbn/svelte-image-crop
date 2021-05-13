import{S as t,i as e,s as r,t as a,g as n,f as o,h as s,d as i,e as l,k as c,c as u,a as d,n as f,b as h,G as p,J as m,L as $,M as g,N as v,O as b,l as x,v as y,r as E,j as w,m as L,o as _,w as D,P as k}from"../chunks/vendor-503fed67.js";import{a as C}from"../chunks/paths-2c73d5fe.js";async function B(t,e){const{x:r,y:a,width:n,height:o}=e,s=await createImageBitmap(t,r,a,n,o);return t=await function(t,e,r=1){return new Promise(((a,n)=>{const o=document.createElement("canvas"),s=o.getContext("bitmaprenderer");s?(o.width=t.width,o.height=t.height,s.transferFromImageBitmap(t),o.toBlob((t=>{t?a(t):n(new Error("bad dispatch to 'to_blob' (failed to convert to blob)")),o.remove()}),e,r)):n(new Error("bad dispatch to 'to_blob' (context of 'bitmaprenderer' unavailable)"))}))}(s,t.type),s.close(),t}function I(t,e){const{left:r,right:a,top:n,bottom:o}=e?O(t,e):t;return{x:r,y:n,width:a-r,height:o-n}}function O(t,e){const{x:r,y:a}=t,{x:n,y:o}=e;return{left:Math.min(r,n),right:Math.max(r,n),top:Math.min(a,o),bottom:Math.max(a,o)}}function R(t,e,r){const a=r.x/t.width,n=r.y/t.height;return{x:e.width*a,y:e.height*n}}function T(t){let e,r,l,c,u=t[4].width.toFixed()+"",d=t[4].height.toFixed()+"";return{c(){e=a(u),r=a("x"),l=a(d),c=a("px")},l(t){e=n(t,u),r=n(t,"x"),l=n(t,d),c=n(t,"px")},m(t,a){o(t,e,a),o(t,r,a),o(t,l,a),o(t,c,a)},p(t,r){16&r&&u!==(u=t[4].width.toFixed()+"")&&s(e,u),16&r&&d!==(d=t[4].height.toFixed()+"")&&s(l,d)},d(t){t&&i(e),t&&i(r),t&&i(l),t&&i(c)}}}function U(t){let e,r,a,n,s,$,g,v,b,x,y,E=t[4]&&T(t);return{c(){e=l("div"),r=l("img"),n=c(),s=l("div"),$=l("img"),v=c(),b=l("div"),E&&E.c(),this.h()},l(t){e=u(t,"DIV",{class:!0,"data-cropping":!0,"data-dragging":!0,style:!0});var a=d(e);r=u(a,"IMG",{class:!0,src:!0}),n=f(a),s=u(a,"DIV",{class:!0});var o=d(s);$=u(o,"IMG",{style:!0,src:!0,class:!0}),v=f(o),b=u(o,"DIV",{class:!0,style:!0});var l=d(b);E&&E.l(l),l.forEach(i),o.forEach(i),a.forEach(i),this.h()},h(){h(r,"class","image-crop-background svelte-3axw2x"),r.src!==(a=t[0])&&h(r,"src",a),h($,"style",t[6]),$.src!==(g=t[0])&&h($,"src",g),h($,"class","svelte-3axw2x"),h(b,"class","image-crop-selection svelte-3axw2x"),h(b,"style",t[7]),h(s,"class","image-crop-preview svelte-3axw2x"),h(e,"class","image-crop svelte-3axw2x"),h(e,"data-cropping",x=!!t[2]||void 0),h(e,"data-dragging",y=!!t[3]||void 0),h(e,"style",t[5])},m(a,i){o(a,e,i),p(e,r),t[16](r),p(e,n),p(e,s),p(s,$),p(s,v),p(s,b),E&&E.m(b,null)},p(t,[n]){1&n&&r.src!==(a=t[0])&&h(r,"src",a),64&n&&h($,"style",t[6]),1&n&&$.src!==(g=t[0])&&h($,"src",g),t[4]?E?E.p(t,n):(E=T(t),E.c(),E.m(b,null)):E&&(E.d(1),E=null),128&n&&h(b,"style",t[7]),4&n&&x!==(x=!!t[2]||void 0)&&h(e,"data-cropping",x),8&n&&y!==(y=!!t[3]||void 0)&&h(e,"data-dragging",y),32&n&&h(e,"style",t[5])},i:m,o:m,d(r){r&&i(e),t[16](null),E&&E.d()}}}const P="STATE_CROPPED",j="STATE_DEFAULT",F=t=>`${t.x}px ${t.y}px`;function M(t,e,r){let a,n,o,s;const i=$();let l,c,u,d,f,h=!1,p=null,m=null,{src:v}=e;function b(){r(3,h=!1),p&&m&&m.x===p.x&&m.y===p.y&&(r(12,m=null),r(11,p=null))}function x(t){r(3,h=!0),r(12,m=t),r(11,p=t)}function y(t){r(11,p=t)}return t.$$set=t=>{"src"in t&&r(0,v=t.src)},t.$$.update=()=>{if(6144&t.$$.dirty&&r(2,a=!(!p||!m)),14340&t.$$.dirty){const t=c;r(13,c=a?O(m,p):null),typeof t==typeof c&&(null==t?void 0:t.bottom)===(null==c?void 0:c.bottom)&&(null==t?void 0:t.left)===(null==c?void 0:c.left)&&(null==t?void 0:t.right)===(null==c?void 0:c.right)&&(null==t?void 0:t.top)===(null==c?void 0:c.top)||i("state",{state:null===c?j:P})}var e;if(8192&t.$$.dirty&&r(15,n=c?I(c):null),8192&t.$$.dirty&&r(6,o=c?(t=>{const{bottom:e,left:r,right:a,top:n}=t,o=F({x:r,y:n}),s=F({x:a,y:n});return`clip-path: polygon(${o}, ${F({x:r,y:e})}, ${F({x:a,y:e})}, ${s});`})(c):""),32768&t.$$.dirty&&r(7,s=n?`left:${(e=n).x}px;top:${e.y}px;width:${e.width}px;height:${e.height}px;`:""),6146&t.$$.dirty)if(l&&p&&m){const t={width:l.width,height:l.height},e={width:l.naturalWidth,height:l.naturalHeight};r(4,u=I(R(t,e,m),R(t,e,p)))}else r(4,u=null);16386&t.$$.dirty&&l&&(d&&(d.destroy(),r(14,d=null)),r(14,d=function(t,e={}){let{on_end:r,on_start:a,on_update:n}=e,o=!1;function s(e){if("touchmove"===e.type||"touchstart"===e.type){const r=t.getBoundingClientRect(),a=e.touches[0];return{x:a.clientX-r.x,y:a.clientY-r.y}}return{x:e.offsetX,y:e.offsetY}}function i(t){t.preventDefault(),o=!0,a&&a(s(t))}function l(t){t.preventDefault(),o=!1,r&&r()}function c(t){t.preventDefault(),o&&n&&n(s(t))}function u(t){o=!1}return t.addEventListener("touchstart",i),t.addEventListener("mousedown",i),t.addEventListener("touchend",l),t.addEventListener("mouseup",l),t.addEventListener("touchmove",c),t.addEventListener("mousemove",c),t.addEventListener("mouseleave",u),{destroy(){t.removeEventListener("touchstart",i),t.removeEventListener("mousedown",i),t.removeEventListener("touchend",l),t.removeEventListener("mouseup",l),t.removeEventListener("touchmove",c),t.removeEventListener("mousemove",c),t.removeEventListener("mouseleave",u)},update(t={}){({on_end:r,on_start:a,on_update:n}=t)}}}(l,{on_end:b,on_start:x,on_update:y}))),2&t.$$.dirty&&(l?l.addEventListener("load",(()=>r(5,f=l?`max-height:${l.height}px;`:""))):r(5,f=""))},[v,l,a,h,u,f,o,s,async function(){const t=await fetch(v),e=await t.blob();return a?B(e,u):e},function(){return a},function(){r(11,p=null),r(12,m=null)},p,m,c,d,n,function(t){g[t?"unshift":"push"]((()=>{l=t,r(1,l)}))}]}class N extends t{constructor(t){super(),e(this,t,M,U,r,{src:0,get_cropped_blob:8,is_cropping:9,reset:10})}get get_cropped_blob(){return this.$$.ctx[8]}get is_cropping(){return this.$$.ctx[9]}get reset(){return this.$$.ctx[10]}}function V(t){let e,r,$,g,x,y,E;return{c(){e=l("label"),r=l("code"),$=a(t[0]),g=c(),x=l("input"),this.h()},l(a){e=u(a,"LABEL",{});var o=d(e);r=u(o,"CODE",{});var s=d(r);$=n(s,t[0]),s.forEach(i),g=f(o),x=u(o,"INPUT",{type:!0}),o.forEach(i),this.h()},h(){h(x,"type","text")},m(a,n){o(a,e,n),p(e,r),p(r,$),p(e,g),p(e,x),v(x,t[1]),y||(E=b(x,"input",t[3]),y=!0)},p(t,[e]){1&e&&s($,t[0]),2&e&&x.value!==t[1]&&v(x,t[1])},i:m,o:m,d(t){t&&i(e),y=!1,E()}}}function Y(t,e,r){let{default:a}=e,{variable:n}=e,o=a;return t.$$set=t=>{"default"in t&&r(2,a=t.default),"variable"in t&&r(0,n=t.variable)},t.$$.update=()=>{3&t.$$.dirty&&document.body.style.setProperty(n,o)},[n,o,a,function(){o=this.value,r(1,o)}]}class z extends t{constructor(t){super(),e(this,t,Y,V,r,{default:2,variable:0})}}function A(t){let e,r,s;return{c(){e=l("div"),r=l("p"),s=a("Your client currently does not support Javascript, or is otherwise disabled."),this.h()},l(t){e=u(t,"DIV",{class:!0});var a=d(e);r=u(a,"P",{});var o=d(r);s=n(o,"Your client currently does not support Javascript, or is otherwise disabled."),o.forEach(i),a.forEach(i),this.h()},h(){h(e,"class","card")},m(t,a){o(t,e,a),p(e,r),p(r,s)},p:m,i:m,o:m,d(t){t&&i(e)}}}function G(t){let e,r,s,m,$,g,v,x,C,B,I,O,R,T,U,P,F,M,V,Y,A,G,J,H,X,K,W,q,Q,Z,tt,et,rt,at,nt,ot,st,it,lt,ct,ut,dt,ft,ht,pt,mt,$t,gt,vt,bt,xt,yt,Et,wt,Lt,_t,Dt,kt,Ct,Bt,It,Ot,Rt,Tt,Ut,Pt,jt,Ft,Mt,Nt,Vt={src:t[1]};return A=new N({props:Vt}),t[7](A),A.$on("state",t[6]),ft=new z({props:{variable:"--image-crop-cursor-dragging",default:"crosshair"}}),pt=new z({props:{variable:"--image-crop-cursor-hover",default:"se-resize"}}),vt=new z({props:{variable:"--image-crop-background-filter-cropping",default:"blur(1px) brightness(65%)"}}),Et=new z({props:{variable:"--image-crop-selection-border",default:"4px dashed whitesmoke"}}),Lt=new z({props:{variable:"--image-crop-selection-color",default:"whitesmoke"}}),Dt=new z({props:{variable:"--image-crop-selection-filter",default:"drop-shadow(0px 0px 6px black)"}}),It=new z({props:{variable:"--image-crop-selection-font-family",default:"inherit"}}),Rt=new z({props:{variable:"--image-crop-selection-font-size",default:"1rem"}}),Ut=new z({props:{variable:"--image-crop-selection-font-weight",default:"900"}}),{c(){e=l("h2"),r=a("Controls"),s=c(),m=l("ul"),$=l("li"),g=l("code"),v=a("mouse drag"),x=a(" / "),C=l("code"),B=a("touch drag"),I=a(" — Creates a crop selection"),O=c(),R=l("li"),T=l("code"),U=a("mouse click"),P=a(" / "),F=l("code"),M=a("touch tap"),V=a(" — Resets crop selection"),Y=c(),w(A.$$.fragment),G=c(),J=l("div"),H=l("button"),X=a("reset"),W=c(),q=l("button"),Q=a("clear"),tt=c(),et=l("button"),rt=a("commit"),nt=c(),ot=l("br"),st=c(),it=l("fieldset"),lt=l("legend"),ct=a("Customize"),ut=c(),dt=l("p"),w(ft.$$.fragment),ht=c(),w(pt.$$.fragment),mt=c(),$t=l("br"),gt=c(),w(vt.$$.fragment),bt=c(),xt=l("br"),yt=c(),w(Et.$$.fragment),wt=c(),w(Lt.$$.fragment),_t=c(),w(Dt.$$.fragment),kt=c(),Ct=l("br"),Bt=c(),w(It.$$.fragment),Ot=c(),w(Rt.$$.fragment),Tt=c(),w(Ut.$$.fragment),Pt=c(),jt=l("br"),this.h()},l(t){e=u(t,"H2",{});var a=d(e);r=n(a,"Controls"),a.forEach(i),s=f(t),m=u(t,"UL",{});var o=d(m);$=u(o,"LI",{});var l=d($);g=u(l,"CODE",{});var c=d(g);v=n(c,"mouse drag"),c.forEach(i),x=n(l," / "),C=u(l,"CODE",{});var h=d(C);B=n(h,"touch drag"),h.forEach(i),I=n(l," — Creates a crop selection"),l.forEach(i),O=f(o),R=u(o,"LI",{});var p=d(R);T=u(p,"CODE",{});var b=d(T);U=n(b,"mouse click"),b.forEach(i),P=n(p," / "),F=u(p,"CODE",{});var y=d(F);M=n(y,"touch tap"),y.forEach(i),V=n(p," — Resets crop selection"),p.forEach(i),o.forEach(i),Y=f(t),L(A.$$.fragment,t),G=f(t),J=u(t,"DIV",{class:!0});var E=d(J);H=u(E,"BUTTON",{class:!0,disabled:!0});var w=d(H);X=n(w,"reset"),w.forEach(i),W=f(E),q=u(E,"BUTTON",{class:!0,disabled:!0});var _=d(q);Q=n(_,"clear"),_.forEach(i),tt=f(E),et=u(E,"BUTTON",{class:!0,disabled:!0});var D=d(et);rt=n(D,"commit"),D.forEach(i),E.forEach(i),nt=f(t),ot=u(t,"BR",{}),st=f(t),it=u(t,"FIELDSET",{});var k=d(it);lt=u(k,"LEGEND",{});var j=d(lt);ct=n(j,"Customize"),j.forEach(i),ut=f(k),dt=u(k,"P",{});var N=d(dt);L(ft.$$.fragment,N),ht=f(N),L(pt.$$.fragment,N),mt=f(N),$t=u(N,"BR",{}),gt=f(N),L(vt.$$.fragment,N),bt=f(N),xt=u(N,"BR",{}),yt=f(N),L(Et.$$.fragment,N),wt=f(N),L(Lt.$$.fragment,N),_t=f(N),L(Dt.$$.fragment,N),kt=f(N),Ct=u(N,"BR",{}),Bt=f(N),L(It.$$.fragment,N),Ot=f(N),L(Rt.$$.fragment,N),Tt=f(N),L(Ut.$$.fragment,N),N.forEach(i),k.forEach(i),Pt=f(t),jt=u(t,"BR",{}),this.h()},h(){h(H,"class","button secondary is-full-width"),H.disabled=K=t[1]===S,h(q,"class","button error is-full-width"),q.disabled=Z=t[2]===j,h(et,"class","button primary is-full-width"),et.disabled=at=t[2]===j,h(J,"class","grouped gapless")},m(a,n){o(a,e,n),p(e,r),o(a,s,n),o(a,m,n),p(m,$),p($,g),p(g,v),p($,x),p($,C),p(C,B),p($,I),p(m,O),p(m,R),p(R,T),p(T,U),p(R,P),p(R,F),p(F,M),p(R,V),o(a,Y,n),_(A,a,n),o(a,G,n),o(a,J,n),p(J,H),p(H,X),p(J,W),p(J,q),p(q,Q),p(J,tt),p(J,et),p(et,rt),o(a,nt,n),o(a,ot,n),o(a,st,n),o(a,it,n),p(it,lt),p(lt,ct),p(it,ut),p(it,dt),_(ft,dt,null),p(dt,ht),_(pt,dt,null),p(dt,mt),p(dt,$t),p(dt,gt),_(vt,dt,null),p(dt,bt),p(dt,xt),p(dt,yt),_(Et,dt,null),p(dt,wt),_(Lt,dt,null),p(dt,_t),_(Dt,dt,null),p(dt,kt),p(dt,Ct),p(dt,Bt),_(It,dt,null),p(dt,Ot),_(Rt,dt,null),p(dt,Tt),_(Ut,dt,null),o(a,Pt,n),o(a,jt,n),Ft=!0,Mt||(Nt=[b(H,"click",t[5]),b(q,"click",t[3]),b(et,"click",t[4])],Mt=!0)},p(t,e){const r={};2&e&&(r.src=t[1]),A.$set(r),(!Ft||2&e&&K!==(K=t[1]===S))&&(H.disabled=K),(!Ft||4&e&&Z!==(Z=t[2]===j))&&(q.disabled=Z),(!Ft||4&e&&at!==(at=t[2]===j))&&(et.disabled=at)},i(t){Ft||(y(A.$$.fragment,t),y(ft.$$.fragment,t),y(pt.$$.fragment,t),y(vt.$$.fragment,t),y(Et.$$.fragment,t),y(Lt.$$.fragment,t),y(Dt.$$.fragment,t),y(It.$$.fragment,t),y(Rt.$$.fragment,t),y(Ut.$$.fragment,t),Ft=!0)},o(t){E(A.$$.fragment,t),E(ft.$$.fragment,t),E(pt.$$.fragment,t),E(vt.$$.fragment,t),E(Et.$$.fragment,t),E(Lt.$$.fragment,t),E(Dt.$$.fragment,t),E(It.$$.fragment,t),E(Rt.$$.fragment,t),E(Ut.$$.fragment,t),Ft=!1},d(r){r&&i(e),r&&i(s),r&&i(m),r&&i(Y),t[7](null),D(A,r),r&&i(G),r&&i(J),r&&i(nt),r&&i(ot),r&&i(st),r&&i(it),D(ft),D(pt),D(vt),D(Et),D(Lt),D(Dt),D(It),D(Rt),D(Ut),r&&i(Pt),r&&i(jt),Mt=!1,k(Nt)}}}function J(t){let e,r,a,n;const s=[G,A],l=[];return e=0,r=l[0]=s[0](t),{c(){r.c(),a=x()},l(t){r.l(t),a=x()},m(t,e){l[0].m(t,e),o(t,a,e),n=!0},p(t,[e]){r.p(t,e)},i(t){n||(y(r),n=!0)},o(t){E(r),n=!1},d(t){l[0].d(t),t&&i(a)}}}const S=`${C}/assets/images/jung-ho-park-sYiKL1JEOEk-unsplash.jpg`;function H(t,e,r){let a,n,o=S,s=j;return[n,o,s,function(t){n.reset()},async function(t){a=await n.get_cropped_blob(),r(1,o=URL.createObjectURL(a)),n.reset()},function(t){o!==S&&URL.revokeObjectURL(o),a=null,r(1,o=S),n.reset()},function(t){r(2,s=t.detail.state)},function(t){g[t?"unshift":"push"]((()=>{n=t,r(0,n)}))}]}export default class extends t{constructor(t){super(),e(this,t,H,J,r,{})}}
