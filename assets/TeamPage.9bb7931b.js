import{k as O,l as dt,M as et,m as tt,p as it,q as gt,_ as nt,o as fe,c as Le,e as ae,v as re,a as _,n as V,t as Se,b as mt,d as Je,F as Oe,f as xt,r as We,h as yt}from"./index.d6a24121.js";import{A as bt}from"./AnchorSidebar.c38141dd.js";import{g as wt}from"./index.96b7f67e.js";/*!
 * Flip 3.11.3
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var _t=1,le,T,w,oe,Z,K,He=function(e,t){return e.actions.forEach(function(i){return i.vars[t]&&i.vars[t](i)})},Pe={},qe=180/Math.PI,vt=Math.PI/180,de={},Ge={},me={},Te=function(e){return typeof e=="string"?e.split(" ").join("").split(","):e},kt=Te("onStart,onUpdate,onComplete,onReverseComplete,onInterrupt"),xe=Te("transform,transformOrigin,width,height,position,top,left,opacity,zIndex,maxWidth,maxHeight,minWidth,minHeight"),he=function(e){return le(e)[0]||console.warn("Element not found:",e)},ie=function(e){return Math.round(e*1e4)/1e4||0},Ce=function(e,t,i){return e.forEach(function(s){return s.classList[i](t)})},Ke={zIndex:1,kill:1,simple:1,spin:1,clearProps:1,targets:1,toggleClass:1,onComplete:1,onUpdate:1,onInterrupt:1,onStart:1,delay:1,repeat:1,repeatDelay:1,yoyo:1,scale:1,fade:1,absolute:1,props:1,onEnter:1,onLeave:1,custom:1,paused:1,nested:1,prune:1,absoluteOnLeave:1},st={zIndex:1,simple:1,clearProps:1,scale:1,absolute:1,fitChild:1,getVars:1,props:1},lt=function(e){return e.replace(/([A-Z])/g,"-$1").toLowerCase()},ne=function(e,t){var i={},s;for(s in e)t[s]||(i[s]=e[s]);return i},Ae={},at=function(e){var t=Ae[e]=Te(e);return me[e]=t.concat(xe),t},St=function(e){var t=e._gsap||T.core.getCache(e);return t.gmCache===T.ticker.frame?t.gMatrix:(t.gmCache=T.ticker.frame,t.gMatrix=O(e,!0,!1,!0))},Ct=function a(e,t,i){i===void 0&&(i=0);for(var s=e.parentNode,n=1e3*Math.pow(10,i)*(t?-1:1),l=t?-n*900:0;e;)l+=n,e=e.previousSibling;return s?l+a(s,t,i+1):l},ge=function(e,t,i){return e.forEach(function(s){return s.d=Ct(i?s.element:s.t,t)}),e.sort(function(s,n){return s.d-n.d}),e},ue=function(e,t){for(var i=e.element.style,s=e.css=e.css||[],n=t.length,l,o;n--;)l=t[n],o=i[l]||i.getPropertyValue(l),s.push(o?l:Ge[l]||(Ge[l]=lt(l)),o);return i},Fe=function(e){var t=e.css,i=e.element.style,s=0;for(e.cache.uncache=1;s<t.length;s+=2)t[s+1]?i[t[s]]=t[s+1]:i.removeProperty(t[s])},Ue=function(e,t){e.forEach(function(i){return i.a.cache.uncache=1}),t||e.finalStates.forEach(Fe)},Ee="paddingTop,paddingRight,paddingBottom,paddingLeft,gridArea,transition".split(","),Ne=function(e,t,i){var s=e.element,n=e.width,l=e.height,o=e.uncache,h=e.getProp,r=s.style,f=4,c,v,k;if(typeof t!="object"&&(t=e),w&&i!==1)return w._abs.push({t:s,b:e,a:e,sd:0}),w._final.push(function(){return(e.cache.uncache=1)&&Fe(e)}),s;for(v=h("display")==="none",(!e.isVisible||v)&&(v&&(ue(e,["display"]).display=t.display),e.matrix=t.matrix,e.width=n=e.width||t.width,e.height=l=e.height||t.height),ue(e,Ee),k=window.getComputedStyle(s);f--;)r[Ee[f]]=k[Ee[f]];if(r.gridArea="1 / 1 / 1 / 1",r.transition="none",r.position="absolute",r.width=n+"px",r.height=l+"px",r.top||(r.top="0px"),r.left||(r.left="0px"),o)c=new $(s);else if(c=ne(e,de),c.position="absolute",e.simple){var y=s.getBoundingClientRect();c.matrix=new et(1,0,0,1,y.left+tt(),y.top+it())}else c.matrix=O(s,!1,!1,!0);return c=se(c,e,!0),e.x=K(c.x,.01),e.y=K(c.y,.01),s},Ze=function(e,t){return t!==!0&&(t=le(t),e=e.filter(function(i){if(t.indexOf((i.sd<0?i.b:i.a).element)!==-1)return!0;i.t._gsap.renderTransform(1),i.b.isVisible&&(i.t.style.width=i.b.width+"px",i.t.style.height=i.b.height+"px")})),e},rt=function(e){return ge(e,!0).forEach(function(t){return(t.a.isVisible||t.b.isVisible)&&Ne(t.sd<0?t.b:t.a,t.b,1)})},Et=function(e,t){return t&&e.idLookup[Ve(t).id]||e.elementStates[0]},Ve=function(e,t,i,s){return e instanceof $?e:e instanceof X?Et(e,s):new $(typeof e=="string"?he(e)||console.warn(e+" not found"):e,t,i)},Mt=function(e,t){for(var i=T.getProperty(e.element,null,"native"),s=e.props={},n=t.length;n--;)s[t[n]]=(i(t[n])+"").trim();return s.zIndex&&(s.zIndex=parseFloat(s.zIndex)||0),e},ot=function(e,t){var i=e.style||e,s;for(s in t)i[s]=t[s]},Dt=function(e){var t=e.getAttribute("data-flip-id");return t||e.setAttribute("data-flip-id",t="auto-"+_t++),t},ht=function(e){return e.map(function(t){return t.element})},Qe=function(e,t,i){return e&&t.length&&i.add(e(ht(t),i,new X(t,0,!0)),0)},se=function(e,t,i,s,n,l){var o=e.element,h=e.cache,r=e.parent,f=e.x,c=e.y,v=t.width,k=t.height,y=t.scaleX,S=t.scaleY,m=t.rotation,x=t.bounds,F=l&&o.style.cssText,g=l&&o.getBBox&&o.getAttribute("transform"),b=e,E=t.matrix,B=E.e,N=E.f,Y=e.bounds.width!==x.width||e.bounds.height!==x.height||e.scaleX!==y||e.scaleY!==S||e.rotation!==m,L=!Y&&e.simple&&t.simple&&!n,d,D,R,W,z,u,j;return L||!r?(y=S=1,m=d=0):(z=St(r),u=z.clone().multiply(t.ctm?t.matrix.clone().multiply(t.ctm):t.matrix),m=ie(Math.atan2(u.b,u.a)*qe),d=ie(Math.atan2(u.c,u.d)*qe+m)%360,y=Math.sqrt(Math.pow(u.a,2)+Math.pow(u.b,2)),S=Math.sqrt(Math.pow(u.c,2)+Math.pow(u.d,2))*Math.cos(d*vt),n&&(n=le(n)[0],W=T.getProperty(n),j=n.getBBox&&typeof n.getBBox=="function"&&n.getBBox(),b={scaleX:W("scaleX"),scaleY:W("scaleY"),width:j?j.width:Math.ceil(parseFloat(W("width","px"))),height:j?j.height:parseFloat(W("height","px"))}),h.rotation=m+"deg",h.skewX=d+"deg"),i?(y*=v===b.width||!b.width?1:v/b.width,S*=k===b.height||!b.height?1:k/b.height,h.scaleX=y,h.scaleY=S):(v=K(v*y/b.scaleX,0),k=K(k*S/b.scaleY,0),o.style.width=v+"px",o.style.height=k+"px"),s&&ot(o,t.props),L||!r?(f+=B-e.matrix.e,c+=N-e.matrix.f):Y||r!==t.parent?(h.renderTransform(1,h),u=O(n||o,!1,!1,!0),D=z.apply({x:u.e,y:u.f}),R=z.apply({x:B,y:N}),f+=R.x-D.x,c+=R.y-D.y):(z.e=z.f=0,R=z.apply({x:B-e.matrix.e,y:N-e.matrix.f}),f+=R.x,c+=R.y),f=K(f,.02),c=K(c,.02),l&&!(l instanceof $)?(o.style.cssText=F,o.getBBox&&o.setAttribute("transform",g||""),h.uncache=1):(h.x=f+"px",h.y=c+"px",h.renderTransform(1,h)),l&&(l.x=f,l.y=c,l.rotation=m,l.skewX=d,i?(l.scaleX=y,l.scaleY=S):(l.width=v,l.height=k)),l||h},Me=function(e,t){return e instanceof X?e:new X(e,t)},ut=function(e,t,i){var s=e.idLookup[i],n=e.alt[i];return n.isVisible&&(!(t.getElementState(n.element)||n).isVisible||!s.isVisible)?n:s},De=[],Ie="width,height,overflowX,overflowY".split(","),ce,$e=function(e){if(e!==ce){var t=Z.style,i=Z.clientWidth===window.outerWidth,s=Z.clientHeight===window.outerHeight,n=4;if(e&&(i||s)){for(;n--;)De[n]=t[Ie[n]];i&&(t.width=Z.clientWidth+"px",t.overflowY="hidden"),s&&(t.height=Z.clientHeight+"px",t.overflowX="hidden"),ce=e}else if(ce){for(;n--;)De[n]?t[Ie[n]]=De[n]:t.removeProperty(lt(Ie[n]));ce=e}}},Be=function(e,t,i,s){e instanceof X&&t instanceof X||console.warn("Not a valid state object."),i=i||{};var n=i,l=n.clearProps,o=n.onEnter,h=n.onLeave,r=n.absolute,f=n.absoluteOnLeave,c=n.custom,v=n.delay,k=n.paused,y=n.repeat,S=n.repeatDelay,m=n.yoyo,x=n.toggleClass,F=n.nested,g=n.zIndex,b=n.scale,E=n.fade,B=n.stagger,N=n.spin,Y=n.prune,L=("props"in i?i:e).props,d=ne(i,Ke),D=T.timeline({delay:v,paused:k,repeat:y,repeatDelay:S,yoyo:m,data:"isFlip"}),R=d,W=[],z=[],u=[],j=[],ct=N===!0?1:N||0,pt=typeof N=="function"?N:function(){return ct},be=e.interrupted||t.interrupted,Xe=D[s!==1?"to":"from"],ee,A,Ye,U,I,C,te,J,we,H,q,_e,M,P;for(A in t.idLookup)q=t.alt[A]?ut(t,e,A):t.idLookup[A],I=q.element,H=e.idLookup[A],e.alt[A]&&I===H.element&&(e.alt[A].isVisible||!q.isVisible)&&(H=e.alt[A]),H?(C={t:I,b:H,a:q,sd:H.element===I?0:q.isVisible?1:-1},u.push(C),C.sd&&(C.sd<0&&(C.b=q,C.a=H),be&&ue(C.b,L?me[L]:xe),E&&u.push(C.swap={t:H.element,b:C.b,a:C.a,sd:-C.sd,swap:C})),I._flip=H.element._flip=w?w.timeline:D):q.isVisible&&(u.push({t:I,b:ne(q,{isVisible:1}),a:q,sd:0,entering:1}),I._flip=w?w.timeline:D);if(L&&(Ae[L]||at(L)).forEach(function(G){return d[G]=function(Q){return u[Q].a.props[G]}}),u.finalStates=we=[],_e=function(){for(ge(u),$e(!0),U=0;U<u.length;U++)C=u[U],M=C.a,P=C.b,Y&&!M.isDifferent(P)&&!C.entering?u.splice(U--,1):(I=C.t,F&&!(C.sd<0)&&U&&(M.matrix=O(I,!1,!1,!0)),P.isVisible&&M.isVisible?(C.sd<0?(te=new $(I,L,e.simple),se(te,M,b,0,0,te),te.matrix=O(I,!1,!1,!0),te.css=C.b.css,C.a=M=te,E&&(I.style.opacity=be?P.opacity:M.opacity),B&&j.push(I)):C.sd>0&&E&&(I.style.opacity=be?M.opacity-P.opacity:"0"),se(M,P,b,L)):P.isVisible!==M.isVisible&&(P.isVisible?M.isVisible||(P.css=M.css,z.push(P),u.splice(U--,1),r&&F&&se(M,P,b,L)):(M.isVisible&&W.push(M),u.splice(U--,1))),b||(I.style.maxWidth=Math.max(M.width,P.width)+"px",I.style.maxHeight=Math.max(M.height,P.height)+"px",I.style.minWidth=Math.min(M.width,P.width)+"px",I.style.minHeight=Math.min(M.height,P.height)+"px"),F&&x&&I.classList.add(x)),we.push(M);var Q;if(x&&(Q=we.map(function(p){return p.element}),F&&Q.forEach(function(p){return p.classList.remove(x)})),$e(!1),b?(d.scaleX=function(p){return u[p].a.scaleX},d.scaleY=function(p){return u[p].a.scaleY}):(d.width=function(p){return u[p].a.width+"px"},d.height=function(p){return u[p].a.height+"px"},d.autoRound=i.autoRound||!1),d.x=function(p){return u[p].a.x+"px"},d.y=function(p){return u[p].a.y+"px"},d.rotation=function(p){return u[p].a.rotation+(N?pt(p,J[p],J)*360:0)},d.skewX=function(p){return u[p].a.skewX},J=u.map(function(p){return p.t}),(g||g===0)&&(d.modifiers={zIndex:function(){return g}},d.zIndex=g,d.immediateRender=i.immediateRender!==!1),E&&(d.opacity=function(p){return u[p].sd<0?0:u[p].sd>0?u[p].a.opacity:"+=0"}),j.length){B=T.utils.distribute(B);var ft=J.slice(j.length);d.stagger=function(p,je){return B(~j.indexOf(je)?J.indexOf(u[p].swap.t):p,je,ft)}}if(kt.forEach(function(p){return i[p]&&D.eventCallback(p,i[p],i[p+"Params"])}),c&&J.length){R=ne(d,Ke),"scale"in c&&(c.scaleX=c.scaleY=c.scale,delete c.scale);for(A in c)ee=ne(c[A],st),ee[A]=d[A],!("duration"in ee)&&"duration"in d&&(ee.duration=d.duration),ee.stagger=d.stagger,Xe.call(D,J,ee,0),delete R[A]}(J.length||z.length||W.length)&&(x&&D.add(function(){return Ce(Q,x,D._zTime<0?"remove":"add")},0)&&!k&&Ce(Q,x,"add"),J.length&&Xe.call(D,J,R,0)),Qe(o,W,D),Qe(h,z,D);var ke=w&&w.timeline;ke&&(ke.add(D,0),w._final.push(function(){return Ue(u,!l)})),Ye=D.duration(),D.call(function(){var p=D.time()>=Ye;p&&!ke&&Ue(u,!l),x&&Ce(Q,x,p?"remove":"add")})},f&&(r=u.filter(function(G){return!G.sd&&!G.a.isVisible&&G.b.isVisible}).map(function(G){return G.a.element})),w){var Re;r&&(Re=w._abs).push.apply(Re,Ze(u,r)),w._run.push(_e)}else r&&rt(Ze(u,r)),_e();var ve=w?w.timeline:D;return ve.revert=function(){return ze(ve,1)},ve},It=function a(e){e.vars.onInterrupt&&e.vars.onInterrupt.apply(e,e.vars.onInterruptParams||[]),e.getChildren(!0,!1,!0).forEach(a)},ze=function(e,t){if(e&&e.progress()<1&&!e.paused())return t&&(It(e),t<2&&e.progress(1),e.kill()),!0},pe=function(e){for(var t=e.idLookup={},i=e.alt={},s=e.elementStates,n=s.length,l;n--;)l=s[n],t[l.id]?i[l.id]=l:t[l.id]=l},X=function(){function a(t,i,s){if(this.props=i&&i.props,this.simple=!!(i&&i.simple),s)this.targets=ht(t),this.elementStates=t,pe(this);else{this.targets=le(t);var n=i&&(i.kill===!1||i.batch&&!i.kill);w&&!n&&w._kill.push(this),this.update(n||!!w)}}var e=a.prototype;return e.update=function(i){var s=this;return this.elementStates=this.targets.map(function(n){return new $(n,s.props,s.simple)}),pe(this),this.interrupt(i),this.recordInlineStyles(),this},e.clear=function(){return this.targets.length=this.elementStates.length=0,pe(this),this},e.fit=function(i,s,n){for(var l=ge(this.elementStates.slice(0),!1,!0),o=(i||this).idLookup,h=0,r,f;h<l.length;h++)r=l[h],n&&(r.matrix=O(r.element,!1,!1,!0)),f=o[r.id],f&&se(r,f,s,!0,0,r),r.matrix=O(r.element,!1,!1,!0);return this},e.getProperty=function(i,s){var n=this.getElementState(i)||de;return(s in n?n:n.props||de)[s]},e.add=function(i){for(var s=i.targets.length,n=this.idLookup,l=this.alt,o,h,r;s--;)h=i.elementStates[s],r=n[h.id],r&&(h.element===r.element||l[h.id]&&l[h.id].element===h.element)?(o=this.elementStates.indexOf(h.element===r.element?r:l[h.id]),this.targets.splice(o,1,i.targets[s]),this.elementStates.splice(o,1,h)):(this.targets.push(i.targets[s]),this.elementStates.push(h));return i.interrupted&&(this.interrupted=!0),i.simple||(this.simple=!1),pe(this),this},e.compare=function(i){var s=i.idLookup,n=this.idLookup,l=[],o=[],h=[],r=[],f=[],c=i.alt,v=this.alt,k=function(Y,L,d){return(Y.isVisible!==L.isVisible?Y.isVisible?h:r:Y.isVisible?o:l).push(d)&&f.push(d)},y=function(Y,L,d){return f.indexOf(d)<0&&k(Y,L,d)},S,m,x,F,g,b,E,B;for(x in s)g=c[x],b=v[x],S=g?ut(i,this,x):s[x],F=S.element,m=n[x],b?(B=m.isVisible||!b.isVisible&&F===m.element?m:b,E=g&&!S.isVisible&&!g.isVisible&&B.element===g.element?g:S,E.isVisible&&B.isVisible&&E.element!==B.element?((E.isDifferent(B)?o:l).push(E.element,B.element),f.push(E.element,B.element)):k(E,B,E.element),g&&E.element===g.element&&(g=s[x]),y(E.element!==m.element&&g?g:E,m,m.element),y(g&&g.element===b.element?g:E,b,b.element),g&&y(g,b.element===g.element?b:m,g.element)):(m?m.isDifferent(S)?k(S,m,F):l.push(F):h.push(F),g&&y(g,m,g.element));for(x in n)s[x]||(r.push(n[x].element),v[x]&&r.push(v[x].element));return{changed:o,unchanged:l,enter:h,leave:r}},e.recordInlineStyles=function(){for(var i=me[this.props]||xe,s=this.elementStates.length;s--;)ue(this.elementStates[s],i)},e.interrupt=function(i){var s=this,n=[];this.targets.forEach(function(l){var o=l._flip,h=ze(o,i?0:1);i&&h&&n.indexOf(o)<0&&o.add(function(){return s.updateVisibility()}),h&&n.push(o)}),!i&&n.length&&this.updateVisibility(),this.interrupted||(this.interrupted=!!n.length)},e.updateVisibility=function(){this.elementStates.forEach(function(i){var s=i.element.getBoundingClientRect();i.isVisible=!!(s.width||s.height||s.top||s.left),i.uncache=1})},e.getElementState=function(i){return this.elementStates[this.targets.indexOf(he(i))]},e.makeAbsolute=function(){return ge(this.elementStates.slice(0),!0,!0).map(Ne)},a}(),$=function(){function a(t,i,s){this.element=t,this.update(i,s)}var e=a.prototype;return e.isDifferent=function(i){var s=this.bounds,n=i.bounds;return s.top!==n.top||s.left!==n.left||s.width!==n.width||s.height!==n.height||!this.matrix.equals(i.matrix)||this.opacity!==i.opacity||this.props&&i.props&&JSON.stringify(this.props)!==JSON.stringify(i.props)},e.update=function(i,s){var n=this,l=n.element,o=T.getProperty(l),h=T.core.getCache(l),r=l.getBoundingClientRect(),f=l.getBBox&&typeof l.getBBox=="function"&&l.nodeName.toLowerCase()!=="svg"&&l.getBBox(),c=s?new et(1,0,0,1,r.left+tt(),r.top+it()):O(l,!1,!1,!0);n.getProp=o,n.element=l,n.id=Dt(l),n.matrix=c,n.cache=h,n.bounds=r,n.isVisible=!!(r.width||r.height||r.left||r.top),n.display=o("display"),n.position=o("position"),n.parent=l.parentNode,n.x=o("x"),n.y=o("y"),n.scaleX=h.scaleX,n.scaleY=h.scaleY,n.rotation=o("rotation"),n.skewX=o("skewX"),n.opacity=o("opacity"),n.width=f?f.width:K(o("width","px"),.04),n.height=f?f.height:K(o("height","px"),.04),i&&Mt(n,Ae[i]||at(i)),n.ctm=l.getCTM&&l.nodeName.toLowerCase()==="svg"&&gt(l).inverse(),n.simple=s||ie(c.a)===1&&!ie(c.b)&&!ie(c.c)&&ie(c.d)===1,n.uncache=0},a}(),Bt=function(){function a(t,i){this.vars=t,this.batch=i,this.states=[],this.timeline=i.timeline}var e=a.prototype;return e.getStateById=function(i){for(var s=this.states.length;s--;)if(this.states[s].idLookup[i])return this.states[s]},e.kill=function(){this.batch.remove(this)},a}(),Lt=function(){function a(t){this.id=t,this.actions=[],this._kill=[],this._final=[],this._abs=[],this._run=[],this.data={},this.state=new X,this.timeline=T.timeline()}var e=a.prototype;return e.add=function(i){var s=this.actions.filter(function(n){return n.vars===i});return s.length?s[0]:(s=new Bt(typeof i=="function"?{animate:i}:i,this),this.actions.push(s),s)},e.remove=function(i){var s=this.actions.indexOf(i);return s>=0&&this.actions.splice(s,1),this},e.getState=function(i){var s=this,n=w,l=oe;return w=this,this.state.clear(),this._kill.length=0,this.actions.forEach(function(o){o.vars.getState&&(o.states.length=0,oe=o,o.state=o.vars.getState(o)),i&&o.states.forEach(function(h){return s.state.add(h)})}),oe=l,w=n,this.killConflicts(),this},e.animate=function(){var i=this,s=w,n=this.timeline,l=this.actions.length,o,h;for(w=this,n.clear(),this._abs.length=this._final.length=this._run.length=0,this.actions.forEach(function(r){r.vars.animate&&r.vars.animate(r);var f=r.vars.onEnter,c=r.vars.onLeave,v=r.targets,k,y;v&&v.length&&(f||c)&&(k=new X,r.states.forEach(function(S){return k.add(S)}),y=k.compare(ye.getState(v)),y.enter.length&&f&&f(y.enter),y.leave.length&&c&&c(y.leave))}),rt(this._abs),this._run.forEach(function(r){return r()}),h=n.duration(),o=this._final.slice(0),n.add(function(){h<=n.time()&&(o.forEach(function(r){return r()}),He(i,"onComplete"))}),w=s;l--;)this.actions[l].vars.once&&this.actions[l].kill();return He(this,"onStart"),n.restart(),this},e.loadState=function(i){i||(i=function(){return 0});var s=[];return this.actions.forEach(function(n){if(n.vars.loadState){var l,o=function h(r){r&&(n.targets=r),l=s.indexOf(h),~l&&(s.splice(l,1),s.length||i())};s.push(o),n.vars.loadState(o)}}),s.length||i(),this},e.setState=function(){return this.actions.forEach(function(i){return i.targets=i.vars.setState&&i.vars.setState(i)}),this},e.killConflicts=function(i){return this.state.interrupt(i),this._kill.forEach(function(s){return s.interrupt(i)}),this},e.run=function(i,s){var n=this;return this!==w&&(i||this.getState(s),this.loadState(function(){n._killed||(n.setState(),n.animate())})),this},e.clear=function(i){this.state.clear(),i||(this.actions.length=0)},e.getStateById=function(i){for(var s=this.actions.length,n;s--;)if(n=this.actions[s].getStateById(i),n)return n;return this.state.idLookup[i]&&this.state},e.kill=function(){this._killed=1,this.clear(),delete Pe[this.id]},a}(),ye=function(){function a(){}return a.getState=function(t,i){var s=Me(t,i);return oe&&oe.states.push(s),i&&i.batch&&a.batch(i.batch).state.add(s),s},a.from=function(t,i){return i=i||{},"clearProps"in i||(i.clearProps=!0),Be(t,Me(i.targets||t.targets,{props:i.props||t.props,simple:i.simple,kill:!!i.kill}),i,-1)},a.to=function(t,i){return Be(t,Me(i.targets||t.targets,{props:i.props||t.props,simple:i.simple,kill:!!i.kill}),i,1)},a.fromTo=function(t,i,s){return Be(t,i,s)},a.fit=function(t,i,s){var n=s?ne(s,st):{},l=s||n,o=l.absolute,h=l.scale,r=l.getVars,f=l.props,c=l.runBackwards,v=l.onComplete,k=l.simple,y=s&&s.fitChild&&he(s.fitChild),S=Ve(i,f,k,t),m=Ve(t,0,k,S),x=f?me[f]:xe;return f&&ot(n,S.props),c&&(ue(m,x),"immediateRender"in n||(n.immediateRender=!0),n.onComplete=function(){Fe(m),v&&v.apply(this,arguments)}),o&&Ne(m,S),n=se(m,S,h||y,f,y,n.duration||r?n:0),r?n:n.duration?T.to(m.element,n):null},a.makeAbsolute=function(t,i){return(t instanceof X?t:new X(t,i)).makeAbsolute()},a.batch=function(t){return t||(t="default"),Pe[t]||(Pe[t]=new Lt(t))},a.killFlipsOf=function(t,i){(t instanceof X?t.targets:le(t)).forEach(function(s){return s&&ze(s._flip,i!==!1?1:2)})},a.isFlipping=function(t){var i=a.getByTarget(t);return!!i&&i.isActive()},a.getByTarget=function(t){return(he(t)||de)._flip},a.getElementState=function(t,i){return new $(he(t),i)},a.convertCoordinates=function(t,i,s){var n=O(i,!0,!0).multiply(O(t));return s?n.apply(s):n},a.register=function(t){if(Z=typeof document<"u"&&document.body,Z){T=t,dt(Z),le=T.utils.toArray;var i=T.utils.snap(.1);K=function(n,l){return i(parseFloat(n)+l)}}},a}();ye.version="3.11.3";typeof window<"u"&&window.gsap&&window.gsap.registerPlugin(ye);const Pt={name:"FishCard",components:{},emits:["changeStatus"],data(){return{}},methods:{openModel(a,e){a.open=!0,this.$emit("changeStatus",{num:e,open:a.open})},closeModel(a,e){a.open=!1,this.$emit("changeStatus",{num:e,open:a.open})}},props:{item:Object,num:Number}},Vt=["src"],Tt={class:"max-lg:my-11 lg:absolute lg:bottom-0 max-lg:flex max-lg:justify-center w-full"};function At(a,e,t,i,s,n){return fe(),Le("div",{class:V([t.item.open?"absolute lg:-top-10 lg:left-0 top-16 left-18 lg:w-[90%] lg:h-[110%] w-[75%] h-[45%] max-h-[1000px]":"lg:h-[180px] h-[200px]",""])},[ae(_("div",{class:V([t.item.open?"fixed top-0 left-0 w-full h-[100vh] lg:bg-[rgba(0,0,0,0.5)] z-0":"",""])},null,2),[[re,t.item.open]]),_("div",{class:V([t.item.open?"relative flex z-10 h-full lg:flex-row flex-col":"flex lg:mr-[6rem] h-full max-lg:justify-center",""])},[_("button",{onClick:e[0]||(e[0]=l=>n.openModel(t.item,t.num)),class:V([t.item.open?"lg:w-1/2 w-full lg:pt-14 lg:pr-14 lg:pl-14":"h-full flex justify-start max-lg:items-center",""])},[_("img",{class:V([t.item.open?"rounded-[10%] lg:h-full lg:w-[50vw] w-full border-1 border-[#57CED0]":"div_shadow h-full rounded-3xl border-2 border-[#57CED0] min-md:max-w-[230px] lg:max-h-none min-md:max-h-56 lg:max-w-none ",""]),src:t.item.img,alt:""},null,10,Vt)],2),_("div",{class:V([t.item.open?"lg:w-1/2 lg:pt-0 pt-16 lg:flex-none flex-1 w-full px-2 max-lg:px-4 relative lg:block flex justify-center max-lg:flex-col":"pl-8",""])},[_("div",{class:V([t.item.open?"lg:py-12 lg:pt-32 w-full":"h-full flex flex-col justify-center",""])},[_("div",{class:V([t.item.open?"lg:text-6xl lg:leading-tight max-lg:text-5xl max-lg:leading-tight":"text-3xl max-lg:text-3xl max-lg:leading-tight","text-white"])},Se(t.item.name),3),_("hr",{class:V([t.item.open?"w-60 ml-3 my-8":"max-lg:w-28 lg:w-1/2 my-4 h-1 border-t-2",""])},null,2),_("div",{class:V([t.item.open?"text-white":"",""])},[_("div",{class:V([t.item.open?"text-white lg:text-6xl lg:leading-tight max-lg:text-4xl max-lg:leading-snug":"text-xl  max-lg:text-xl max-lg:leading-tight","text-white font-normal"])},Se(t.item.title),3),ae(_("div",{class:V([t.item.open?"lg:text-3xl lg:leading-normal max-lg:text-2xl max-lg:leading-relaxed":"text-4xl leading-loose",""])},Se(t.item.story),3),[[re,t.item.open]])],2)],2),_("div",Tt,[ae(_("button",{onClick:e[1]||(e[1]=l=>n.closeModel(t.item,t.num)),class:"rounded-xl bg-black bg-opacity-20 px-3 py-1 border-solid border-cyan-800 border-2 hover:bg-gray-800 hover:opacity-80 text-white"}," BACK ",512),[[re,t.item.open]])])],2)],2)],2)}const Ft=nt(Pt,[["render",At]]),Nt="/assets/JL Shark.a8095f88.png",zt="/assets/KJ Shark.0735657a.png",Xt="/assets/DY Shark.faf46ce3.png",Yt="/assets/LH Shark.562f78b7.png",Rt="/assets/NL Shark.fb91ad7e.png",jt="/assets/MT Shark.60b30c85.png",Jt="/assets/MJ Shark.ab5fa347.png",Ot="/assets/JB Shark.73f4aa5c.png",Wt="/assets/MS Shark.a23ac028.png",Ht="/assets/AY Shark.0d3cc758.png",qt="/assets/TS Shark.025099fd.png",Gt="/assets/SW Shark.1291acfa.png";wt.registerPlugin(ye);const Kt={components:{FishCard:Ft,Anchor:bt},data(){return{slides:document.getElementsByClassName("slide"),slideIndex:0,showNum:-1,slideShowNum:window.screen.width>1023?6:3,fishCardData:[{name:"JL Shark",title:"Development",story:"Director of vibes and resident visionary. Here to shake up the metaverse!",img:Nt,open:!1},{name:"KJ Shark",title:"Development",story:"The one who always has your back. Practical, grounded, and with the biggest heart",img:zt,open:!1},{name:"DY Shark",title:"Development",story:"The glue that holds everyone together. Will fight KJ for the spot of biggest heart",img:Xt,open:!1},{name:"LH Shark",title:" Marketing Lead",story:"The hype man for all things Metanomics",img:Yt,open:!1},{name:"NL Shark",title:"Lead Content Editor ",story:"Oversees all content with her discerning eyes",img:Rt,open:!1},{name:"MT Shark",title:"Art Design Lead",story:"Fashionably late, but always looking fly",img:jt,open:!1},{name:"MJ Shark",title:" Social Media Lead",story:"Here to make sure we are always showing our best side to the world!",img:Jt,open:!1},{name:"JB Shark",title:"Lead Content Creator",story:"Artistic and talented across different mediums. She\u2019s always reppin\u2019 hard! ",img:Ot,open:!1},{name:"MS Shark",title:" Metaverse Tech Lead",story:"In charge of the fun! First to show up at the party, and last to leave\u2026 mostly because the lights won\u2019t stay on without him",img:Wt,open:!1},{name:"AY Shark",title:"Web 3 Development",story:"Runs on coffee. Rarely touches grass. Might hiss at the sun",img:Ht,open:!1},{name:"TS Shark",title:"Web 3 Development",story:"Just call me the exterminator. Here to make sure all our backend tech is bug free",img:qt,open:!1},{name:"SW Shark",title:"Web3 Development",story:"Do not disturb. Busy coding.",img:Gt,open:!1}],sidebar:[{name:"TEAM",hasDrop:!1},{name:"PARENT",hasDrop:!1}]}},mounted(){this.showSlide()},methods:{changeStatus(a){this.showNum=a.open?a.num:-1,this.showNum===-1&&setTimeout(this.showSlide,10)},showSlide(){for(let a=0;a<this.slides.length;a++)this.slides[a].style.display="none";for(let a=this.slideShowNum*this.slideIndex;a<this.slideShowNum+this.slideShowNum*this.slideIndex;a++)try{this.slides[a].style.display=""}catch{}},next(){this.slideIndex++,this.slideIndex>=this.slides.length/this.slideShowNum&&(this.slideIndex=Math.floor(this.slides.length/this.slideShowNum)-1),this.showSlide()},prev(){this.slideIndex--,this.slideIndex<0&&(this.slideIndex=0),this.showSlide()}}},Ut=_("img",{class:"fixed top-0 -z-50 w-full h-full bg-center bg-fixed bg-cover bg-[url('@/assets/\u9BCA\u9B5A\u7DB2\u7AD9-PC\u7248/\u7D20\u6750/05\u5206\u5716\u5C64.png')]"},null,-1),Zt={class:"pb-9 lg:pl-9 lg:h-[calc(100vh-2vh-3.625rem-40px)] h-[calc(100vh-2vh-40px)] flex flex-col lg:flex-row"},Qt={class:"max-lg:flex max-lg:justify-end max-lg:px-2 max-lg:w-full"},$t={class:"relative lg:flex-1 max-lg:h-full"},ei=_("span",{class:"sr-only"},"Previous",-1),ti=_("span",{class:"sr-only"},"Next",-1),ii={ref:"team_cards",class:"grid lg:grid-cols-2 grid-cols-1 lg:gap-4 gap-2 px-9 max-lg:px-16 max-lg:pt-5 lg:flex-wrap h-[102%] max-lg:pb-8 pb-0 lg:w-[calc(100%-256px)] lg:pr-6 md:justify-around max-lg:justify-between sm:w-full overflow-hidden"};function ni(a,e,t,i,s,n){const l=We("Anchor"),o=We("FishCard");return fe(),Le(Oe,null,[Ut,_("div",Zt,[ae(_("div",Qt,[mt(l,{data:s.sidebar},null,8,["data"])],512),[[re,s.showNum==-1]]),_("div",$t,[_("button",{class:V(["absolute top-0 lg:left-[-3rem] z-20 flex items-center justify-center h-full lg:px-4 cursor-pointer group focus:outline-none left-0 py-auto max-lg:px-5",s.showNum==-1?"":"lg:hidden"]),"data-carousel-prev":""},[_("span",{onClick:e[0]||(e[0]=h=>n.prev()),class:"inline-flex items-center justify-center w-8 h-8 text-white lg:text-6xl text-3xl"},[Je(" < "),ei])],2),_("button",{type:"button",class:V(["absolute top-0 lg:right-0 z-20 flex items-center justify-center h-full lg:px-4 cursor-pointer group focus:outline-none right-0 max-lg:px-5",s.showNum==-1?"":"lg:hidden"]),"data-carousel-next":""},[_("span",{onClick:e[1]||(e[1]=h=>n.next()),class:"inline-flex items-center justify-center w-8 h-8 text-white lg:text-6xl text-3xl"},[Je(" > "),ti])],2),_("div",ii,[(fe(!0),Le(Oe,null,xt(s.fishCardData,(h,r)=>ae((fe(),yt(o,{item:h,num:r,key:r,class:V(["slide",[h.open?"":"hover:scale-105"]]),onChangeStatus:n.changeStatus},null,8,["item","num","class","onChangeStatus"])),[[re,s.showNum==-1||s.showNum==r]])),128))],512)])])],64)}const ri=nt(Kt,[["render",ni]]);export{ri as default};
