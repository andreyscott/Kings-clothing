(this["webpackJsonpkings-clothing"]=this["webpackJsonpkings-clothing"]||[]).push([[0],{104:function(e,t,n){},105:function(e,t,n){},106:function(e,t,n){},107:function(e,t,n){},108:function(e,t,n){},109:function(e,t,n){},111:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),r=n(32),c=n.n(r),s=n(26),l=n(11),o=n(49),d=n(20),u=n(39),p=n(50),m=n.n(p),b=n(51),h=n.n(b),j=n(5),g={currentUser:null},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT_USER":return Object(j.a)(Object(j.a)({},e),{},{currentUser:t.payload});default:return e}},f={TOGGLE_CART_HIDDEN:"TOGGLE_CART_HIDDEN",ADD_ITEM:"ADD_ITEM",REMOVE_ITEM:"REMOVE_ITEM",CLEAR_ITEM_FROM_CART:"CLEAR_ITEM_FROM_CART"},v=n(55),x=function(e,t){return e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?Object(j.a)(Object(j.a)({},e),{},{quantity:e.quantity+1}):e})):[].concat(Object(v.a)(e),[Object(j.a)(Object(j.a)({},t),{},{quantity:1})])},y=function(e,t){return 1===e.find((function(e){return e.id===t.id})).quantity?e.filter((function(e){return e.id!==t.id})):e.map((function(e){return e.id===t.id?Object(j.a)(Object(j.a)({},e),{},{quantity:e.quantity-1}):e}))},w={hidden:!0,cartItems:[]},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f.TOGGLE_CART_HIDDEN:return Object(j.a)(Object(j.a)({},e),{},{hidden:!e.hidden});case f.ADD_ITEM:return Object(j.a)(Object(j.a)({},e),{},{cartItems:x(e.cartItems,t.payload)});case f.REMOVE_ITEM:return Object(j.a)(Object(j.a)({},e),{},{cartItems:y(e.cartItems,t.payload)});case f.CLEAR_ITEM_FROM_CART:return Object(j.a)(Object(j.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.id!==t.payload.id}))});default:return e}},C={key:"root",storage:h.a,whitelist:["cart"]},k=Object(d.c)({user:O,cart:E}),N=Object(u.a)(C,k),A=[m.a],D=Object(d.d)(N,d.a.apply(void 0,A)),B=Object(u.b)(D),U=(n(67),n(17)),I=n.n(U),F=n(28),T=n(21),S=n(22),_=n(24),R=n(23),M=n(7),P=n(9),z=n(34);n(112),n(70);z.a.initializeApp({apiKey:"AIzaSyA4cf2N5wm64GspSuh2DaPiGGidfJu2XfU",authDomain:"kings-clothing-6b3ca.firebaseapp.com",projectId:"kings-clothing-6b3ca",storageBucket:"kings-clothing-6b3ca.appspot.com",messagingSenderId:"151239121536",appId:"1:151239121536:web:91e89d5692a64fe6a2e465",measurementId:"G-74ZDLRNQPH"});var H=function(){var e=Object(F.a)(I.a.mark((function e(t,n){var a,i,r,c;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return a=L.doc("users/".concat(t.uid)),e.next=5,a.get();case 5:if(e.sent.exists){e.next=17;break}return i=t.displayName,r=t.email,c=new Date,e.prev=9,e.next=12,a.set(Object(j.a)({displayName:i,email:r,createdAt:c},n));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("error creating user",e.t0.message);case 17:return e.abrupt("return",a);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t,n){return e.apply(this,arguments)}}(),G=z.a.auth(),L=z.a.firestore(),W=new z.a.auth.GoogleAuthProvider;W.setCustomParameters({prompt:"select_account"});var q,V,J,Y,K,Q,X,Z,$,ee,te,ne,ae,ie,re,ce=function(){return G.signInWithPopup(W)},se=(z.a,function(){return{type:f.TOGGLE_CART_HIDDEN}}),le=function(e){return{type:f.ADD_ITEM,payload:e}},oe=function(e){return e.cart},de=Object(P.a)([oe],(function(e){return e.cartItems})),ue=Object(P.a)([oe],(function(e){return e.hidden})),pe=Object(P.a)([de],(function(e){return e.reduce((function(e,t){return e+t.quantity}),0)})),me=Object(P.a)([de],(function(e){return e.reduce((function(e,t){return e+t.quantity*t.price}),0)}));function be(){return(be=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function he(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function je(e,t){var n=e.title,i=e.titleId,r=he(e,["title","titleId"]);return a.createElement("svg",be({id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t,"aria-labelledby":i},r),n?a.createElement("title",{id:i},n):null,a.createElement("g",null,a.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),a.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),a.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),a.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),a.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),q||(q=a.createElement("g",null)),V||(V=a.createElement("g",null)),J||(J=a.createElement("g",null)),Y||(Y=a.createElement("g",null)),K||(K=a.createElement("g",null)),Q||(Q=a.createElement("g",null)),X||(X=a.createElement("g",null)),Z||(Z=a.createElement("g",null)),$||($=a.createElement("g",null)),ee||(ee=a.createElement("g",null)),te||(te=a.createElement("g",null)),ne||(ne=a.createElement("g",null)),ae||(ae=a.createElement("g",null)),ie||(ie=a.createElement("g",null)),re||(re=a.createElement("g",null)))}var ge,Oe=a.forwardRef(je),fe=(n.p,n(72),n(2)),ve=Object(P.b)({itemCount:pe}),xe=Object(l.b)(ve,(function(e){return{toggleCartHidden:function(){return e(se())}}}))((function(e){var t=e.toggleCartHidden,n=e.itemCount;return Object(fe.jsxs)("div",{className:"cart-icon",onClick:t,children:[Object(fe.jsx)(Oe,{className:"shopping-icon"}),Object(fe.jsx)("span",{className:"item-count",children:n})]})})),ye=n(29),we=(n(74),function(e){var t=e.children,n=e.isGoogleSignIn,a=e.inverted,i=Object(ye.a)(e,["children","isGoogleSignIn","inverted"]);return Object(fe.jsx)("button",Object(j.a)(Object(j.a)({className:" ".concat(a?"inverted":"","  ").concat(n?"google-sign-in":""," custom-button")},i),{},{children:t}))}),Ee=(n(75),function(e){var t=e.item,n=t.imageUrl,a=t.price,i=t.name,r=t.quantity;return Object(fe.jsxs)("div",{className:"cart-item",children:[Object(fe.jsx)("img",{src:n,alt:"item"}),Object(fe.jsxs)("div",{className:"item-details",children:[Object(fe.jsx)("span",{className:"name",children:i}),Object(fe.jsxs)("span",{className:"price",children:[r," x $",a]})]})]})}),Ce=(n(76),Object(P.b)({cartItems:de})),ke=Object(M.g)(Object(l.b)(Ce)((function(e){var t=e.cartItems,n=e.history,a=e.dispatch;return Object(fe.jsxs)("div",{className:"cart-dropdown",children:[Object(fe.jsx)("div",{className:"cart-items",children:t.length?t.map((function(e){return Object(fe.jsx)(Ee,{item:e},e.id)})):Object(fe.jsx)("span",{className:"empty-message",children:"Your cart is empty"})}),Object(fe.jsx)(we,{onClick:function(){n.push("/checkout"),a(se())},children:"GO TO CHECKOUT"})]})})));function Ne(){return(Ne=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function Ae(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function De(e,t){var n=e.title,i=e.titleId,r=Ae(e,["title","titleId"]);return a.createElement("svg",Ne({xmlns:"http://www.w3.org/2000/svg",width:"512.000000pt",height:"512.000000pt",viewBox:"0 0 512.000000 512.000000",preserveAspectRatio:"xMidYMid meet",ref:t,"aria-labelledby":i},r),n?a.createElement("title",{id:i},n):null,ge||(ge=a.createElement("g",{transform:"translate(0.000000,512.000000) scale(0.100000,-0.100000)",fill:"#000000",stroke:"none"},a.createElement("path",{d:"M2463 4242 c-215 -77 -271 -345 -104 -502 l48 -45 -143 -250 c-79 -138 -145 -254 -147 -259 -1 -5 -125 73 -275 173 l-272 181 30 42 c112 154 55 372 -119 452 -64 29 -178 29 -242 0 -66 -31 -114 -78 -146 -142 -23 -47 -28 -70 -28 -132 0 -112 45 -195 143 -260 l22 -15 -84 -254 c-47 -139 -88 -256 -90 -258 -3 -4 -494 323 -544 363 -2 1 10 21 28 45 110 152 58 364 -108 446 -47 23 -70 28 -132 28 -174 0 -294 -121 -295 -295 0 -62 5 -85 28 -132 31 -62 91 -121 144 -140 20 -7 36 -21 38 -33 3 -11 29 -167 59 -348 l55 -327 -35 -53 c-87 -132 -118 -384 -69 -572 36 -140 128 -262 216 -285 27 -8 40 -17 44 -33 3 -12 30 -173 60 -357 31 -184 60 -348 67 -363 23 -59 1 -57 792 -57 541 0 732 3 751 12 29 13 55 55 55 88 0 33 -26 75 -55 88 -19 9 -198 12 -699 12 l-673 0 -12 83 c-7 45 -14 90 -17 100 -5 16 86 17 1806 17 1720 0 1811 -1 1806 -17 -3 -10 -10 -55 -17 -100 l-12 -83 -673 0 c-501 0 -680 -3 -699 -12 -29 -13 -55 -55 -55 -88 0 -33 26 -75 55 -88 19 -9 210 -12 751 -12 791 0 769 -2 792 57 7 15 36 179 67 363 30 184 57 345 60 357 4 16 17 25 44 33 88 23 178 143 216 285 49 186 18 440 -69 572 l-35 53 55 327 c30 181 56 337 59 348 2 12 18 26 38 33 53 19 113 78 144 140 23 47 28 70 28 132 -1 124 -56 214 -163 267 -47 23 -70 28 -132 28 -62 0 -85 -5 -132 -28 -166 -82 -218 -294 -108 -446 18 -24 30 -44 28 -45 -21 -17 -526 -360 -534 -363 -8 -3 -42 87 -94 243 -46 136 -83 253 -84 259 -1 7 22 30 50 53 75 59 109 133 109 232 0 174 -121 295 -295 295 -55 0 -87 -6 -121 -21 -174 -80 -231 -298 -119 -452 l30 -42 -272 -181 c-150 -100 -274 -178 -275 -173 -2 5 -68 121 -147 259 l-143 250 48 45 c67 63 94 125 94 220 0 85 -21 142 -74 203 -72 81 -213 117 -318 79z m146 -196 c67 -35 65 -143 -4 -174 -51 -23 -107 -7 -131 39 -47 91 44 182 135 135z m-1200 -200 c67 -35 65 -143 -4 -174 -51 -23 -107 -7 -131 39 -47 91 44 182 135 135z m2400 0 c67 -35 65 -143 -4 -174 -91 -41 -179 51 -131 137 26 47 84 63 135 37z m-3460 -200 c67 -35 65 -143 -4 -174 -51 -23 -107 -7 -131 39 -47 91 44 182 135 135z m4520 0 c67 -35 65 -143 -4 -174 -91 -41 -179 51 -131 137 26 47 84 63 135 37z m-1944 -727 c373 -654 377 -659 439 -659 28 0 19 -6 806 533 277 190 506 344 508 343 3 -3 -62 -404 -73 -453 -4 -16 -17 -25 -44 -33 -88 -23 -180 -145 -216 -285 -49 -188 -18 -440 69 -572 l35 -53 -20 -117 c-10 -65 -22 -128 -24 -140 l-5 -23 -1840 0 -1840 0 -5 23 c-2 12 -14 75 -24 140 l-20 118 31 45 c90 134 123 391 73 579 -38 142 -128 262 -216 285 -27 8 -40 17 -44 33 -11 51 -75 450 -72 453 1 2 230 -153 507 -343 788 -540 778 -533 806 -533 62 0 66 5 439 659 198 347 362 631 365 631 3 0 167 -284 365 -631z m-1217 290 c158 -105 291 -195 295 -199 7 -6 -248 -469 -273 -494 -6 -6 -446 282 -494 325 -7 7 170 559 180 559 2 0 134 -86 292 -191z m2092 -85 c51 -152 88 -279 84 -284 -45 -40 -488 -330 -494 -324 -19 20 -281 486 -276 492 11 11 581 391 588 391 3 1 48 -123 98 -275z m-3262 -704 c40 -60 57 -135 57 -260 0 -125 -17 -200 -58 -261 -29 -43 -45 -43 -74 0 -87 128 -78 441 14 543 21 24 33 19 61 -22z m4120 0 c40 -60 57 -135 57 -260 0 -125 -17 -200 -58 -261 -29 -43 -45 -43 -74 0 -87 128 -78 441 14 543 21 24 33 19 61 -22z"}),a.createElement("path",{d:"M2492 2647 c-53 -17 -128 -91 -162 -160 -50 -104 -64 -176 -64 -327 0 -205 46 -345 143 -432 105 -94 210 -91 311 10 45 46 63 73 87 137 98 253 52 584 -98 719 -70 63 -137 79 -217 53z m106 -227 c40 -60 57 -135 57 -260 0 -125 -17 -200 -58 -261 -29 -43 -45 -43 -74 0 -87 128 -78 441 14 543 21 24 33 19 61 -22z"}),a.createElement("path",{d:"M2511 1046 c-87 -48 -50 -186 49 -186 51 0 100 49 100 99 0 75 -83 124 -149 87z"}))))}var Be=a.forwardRef(De),Ue=(n.p,Object(P.a)([function(e){return e.user}],(function(e){return e.currentUser}))),Ie=(n(78),{width:"150%",height:"120%",marginTop:"-1rem"}),Fe=Object(P.b)({currentUser:Ue,hidden:ue}),Te=Object(l.b)(Fe)((function(e){var t=e.currentUser,n=e.hidden;return Object(fe.jsxs)("div",{className:"header",children:[Object(fe.jsx)(s.b,{className:"logo-container",to:"/",children:Object(fe.jsx)(Be,{style:Ie})}),Object(fe.jsxs)("div",{className:"options",children:[Object(fe.jsx)(s.b,{className:"options",to:"/shop",children:"Shop"}),t?Object(fe.jsx)("div",{className:"option",onClick:function(){return G.signOut()},children:"Sign Out"}):Object(fe.jsx)(s.b,{className:"option",to:"/signin",children:"signIn"}),Object(fe.jsx)(xe,{})]}),n?null:Object(fe.jsx)(ke,{})]})})),Se=(n(79),Object(M.g)((function(e){var t=e.title,n=e.imageUrl,a=e.size,i=e.history,r=e.linkUrl,c=e.match;return Object(fe.jsxs)("div",{className:"".concat(a," menu-item"),onClick:function(){return i.push("".concat(c.url).concat(r))},children:[Object(fe.jsx)("div",{className:"background-image",style:{backgroundImage:"url(".concat(n,")")}}),Object(fe.jsxs)("div",{className:"content",children:[Object(fe.jsx)("h1",{className:"title",children:t.toUpperCase()}),Object(fe.jsx)("span",{className:"subtitle",children:"SHOP NOW"})]})]})}))),_e=(n(80),function(e){Object(_.a)(n,e);var t=Object(R.a)(n);function n(){var e;return Object(T.a)(this,n),(e=t.call(this)).state={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,LinkUrl:"hats"},{title:"jackets",imageUrl:"https://images.unsplash.com/photo-1605022600390-071c6f969b32?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGphY2tldHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",id:2,LinkUrl:""},{title:"sneakers",imageUrl:"https://images.unsplash.com/photo-1612202686023-7fa91082956c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHNuZWFrZXJzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",id:3,LinkUrl:""},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,LinkUrl:""},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,LinkUrl:""}]},e}return Object(S.a)(n,[{key:"render",value:function(){return Object(fe.jsx)("div",{className:"directory-menu",children:this.state.sections.map((function(e){var t=e.id,n=Object(ye.a)(e,["id"]);return Object(fe.jsx)(Se,Object(j.a)({},n),t)}))})}}]),n}(i.a.Component)),Re=(n(81),function(){return Object(fe.jsx)("div",{className:"homepage",children:Object(fe.jsx)(_e,{})})}),Me=n(33);n(82);var Pe=function(e){var t=e.handleChange,n=e.label,a=Object(ye.a)(e,["handleChange","label"]);return Object(fe.jsxs)("div",{className:"group",children:[Object(fe.jsx)("input",Object(j.a)({className:"form-input",onChange:t},a)),n?Object(fe.jsx)("label",{className:"".concat(a.value.length?"shrink":""," form-input-label"),children:n}):null]})},ze=(n(83),function(e){Object(_.a)(n,e);var t=Object(R.a)(n);function n(e){var a;return Object(T.a)(this,n),(a=t.call(this,e)).handleSubmit=function(){var e=Object(F.a)(I.a.mark((function e(t){var n,i,r;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=a.state,i=n.email,r=n.password,e.prev=2,e.next=5,G.signInWithEmailAndPassword(i,r);case 5:a.setState({email:"",password:""}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),a.handleChange=function(e){var t=e.target,n=t.value,i=t.name;a.setState(Object(Me.a)({},i,n))},a.state={email:"",password:""},a}return Object(S.a)(n,[{key:"render",value:function(){return Object(fe.jsxs)("div",{className:"sign-in",children:[Object(fe.jsx)("h2",{children:"Already have an account?"}),Object(fe.jsx)("span",{children:"login in with email and password"}),Object(fe.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(fe.jsx)(Pe,{name:"email",type:"email",handleChange:this.handleChange,value:this.state.email,label:"email",required:!0}),Object(fe.jsx)(Pe,{name:"password",type:"password",value:this.state.password,handleChange:this.handleChange,label:"password",required:!0}),Object(fe.jsxs)("div",{className:"buttons",children:[Object(fe.jsx)(we,{type:"submit",children:" Login"}),Object(fe.jsx)(we,{onClick:ce,isGoogleSignIn:!0,children:"Sign in with Google"})]})]})]})}}]),n}(i.a.Component)),He=(n(84),function(e){Object(_.a)(n,e);var t=Object(R.a)(n);function n(){var e;return Object(T.a)(this,n),(e=t.call(this)).handleSubmit=function(){var t=Object(F.a)(I.a.mark((function t(n){var a,i,r,c,s,l,o;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),a=e.state,i=a.displayName,r=a.email,c=a.password,s=a.confirmPassword,c===s){t.next=5;break}return alert("passwords don't match"),t.abrupt("return");case 5:return t.prev=5,t.next=8,G.createUserWithEmailAndPassword(r,c);case 8:return l=t.sent,o=l.user,t.next=12,H(o,{displayName:i});case 12:e.setState({displayName:"",email:"",password:"",confirmPassword:""}),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(5),console.error(t.t0);case 18:case"end":return t.stop()}}),t,null,[[5,15]])})));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(t){var n=t.target,a=n.name,i=n.value;e.setState(Object(Me.a)({},a,i))},e.state={displayName:"",email:"",password:"",confirmPassword:""},e}return Object(S.a)(n,[{key:"render",value:function(){var e=this.state,t=e.displayName,n=e.email,a=e.password,i=e.confirmPassword;return Object(fe.jsxs)("div",{className:"sign-up",children:[Object(fe.jsx)("h2",{className:"title",children:"Don't have an account?"}),Object(fe.jsx)("span",{children:"Sign up with your email and password"}),Object(fe.jsxs)("form",{className:"sign-up-form",onSubmit:this.handleSubmit,children:[Object(fe.jsx)(Pe,{type:"text",name:"displayName",value:t,onChange:this.handleChange,label:"Display Name",required:!0}),Object(fe.jsx)(Pe,{type:"email",name:"email",value:n,onChange:this.handleChange,label:"Email",required:!0}),Object(fe.jsx)(Pe,{type:"password",name:"password",value:a,onChange:this.handleChange,label:"Password",required:!0}),Object(fe.jsx)(Pe,{type:"password",name:"confirmPassword",value:i,onChange:this.handleChange,label:"Confirm Password",required:!0}),Object(fe.jsx)(we,{type:"submit",children:"SIGN UP"})]})]})}}]),n}(i.a.Component)),Ge=(n(85),function(){return Object(fe.jsxs)("div",{className:"sign-in-and-sign-up",children:[Object(fe.jsx)(ze,{}),Object(fe.jsx)(He,{})]})}),Le=[{id:1,title:"Hats",routeName:"hats",items:[{id:1,name:"Brown Brim",imageUrl:"https://i.ibb.co/ZYW3VTp/brown-brim.png",price:25},{id:2,name:"Blue Beanie",imageUrl:"https://i.ibb.co/ypkgK0X/blue-beanie.png",price:18},{id:3,name:"Brown Cowboy",imageUrl:"https://i.ibb.co/QdJwgmp/brown-cowboy.png",price:35},{id:4,name:"Grey Brim",imageUrl:"https://i.ibb.co/RjBLWxB/grey-brim.png",price:25},{id:5,name:"Green Beanie",imageUrl:"https://i.ibb.co/YTjW3vF/green-beanie.png",price:18},{id:6,name:"Palm Tree Cap",imageUrl:"https://i.ibb.co/rKBDvJX/palm-tree-cap.png",price:14},{id:7,name:"Red Beanie",imageUrl:"https://i.ibb.co/bLB646Z/red-beanie.png",price:18},{id:8,name:"Wolf Cap",imageUrl:"https://i.ibb.co/1f2nWMM/wolf-cap.png",price:14},{id:9,name:"Blue Snapback",imageUrl:"https://i.ibb.co/X2VJP2W/blue-snapback.png",price:16}]},{id:2,title:"Sneakers",routeName:"sneakers",items:[{id:10,name:"Adidas NMD",imageUrl:"https://i.ibb.co/0s3pdnc/adidas-nmd.png",price:220},{id:11,name:"Adidas Yeezy",imageUrl:"https://i.ibb.co/dJbG1cT/yeezy.png",price:280},{id:12,name:"Black Converse",imageUrl:"https://i.ibb.co/bPmVXyP/black-converse.png",price:110},{id:13,name:"Nike White AirForce",imageUrl:"https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",price:160},{id:14,name:"Nike Red High Tops",imageUrl:"https://i.ibb.co/QcvzydB/nikes-red.png",price:160},{id:15,name:"Nike Brown High Tops",imageUrl:"https://i.ibb.co/fMTV342/nike-brown.png",price:160},{id:16,name:"Air Jordan Limited",imageUrl:"https://i.ibb.co/w4k6Ws9/nike-funky.png",price:190},{id:17,name:"Timberlands",imageUrl:"https://i.ibb.co/Mhh6wBg/timberlands.png",price:200}]},{id:3,title:"Jackets",routeName:"jackets",items:[{id:18,name:"Black Jean Shearling",imageUrl:"https://i.ibb.co/XzcwL5s/black-shearling.png",price:125},{id:19,name:"Blue Jean Jacket",imageUrl:"https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",price:90},{id:20,name:"Grey Jean Jacket",imageUrl:"https://i.ibb.co/N71k1ML/grey-jean-jacket.png",price:90},{id:21,name:"Brown Shearling",imageUrl:"https://i.ibb.co/s96FpdP/brown-shearling.png",price:165},{id:22,name:"Tan Trench",imageUrl:"https://i.ibb.co/M6hHc3F/brown-trench.png",price:185}]},{id:4,title:"Womens",routeName:"womens",items:[{id:23,name:"Blue Tanktop",imageUrl:"https://i.ibb.co/7CQVJNm/blue-tank.png",price:25},{id:24,name:"Floral Blouse",imageUrl:"https://i.ibb.co/4W2DGKm/floral-blouse.png",price:20},{id:25,name:"Floral Dress",imageUrl:"https://i.ibb.co/KV18Ysr/floral-skirt.png",price:80},{id:26,name:"Red Dots Dress",imageUrl:"https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",price:80},{id:27,name:"Striped Sweater",imageUrl:"https://i.ibb.co/KmSkMbH/striped-sweater.png",price:45},{id:28,name:"Yellow Track Suit",imageUrl:"https://i.ibb.co/v1cvwNf/yellow-track-suit.png",price:135},{id:29,name:"White Blouse",imageUrl:"https://i.ibb.co/qBcrsJg/white-vest.png",price:20}]},{id:5,title:"Mens",routeName:"mens",items:[{id:30,name:"Camo Down Vest",imageUrl:"https://i.ibb.co/xJS0T3Y/camo-vest.png",price:325},{id:31,name:"Floral T-shirt",imageUrl:"https://i.ibb.co/qMQ75QZ/floral-shirt.png",price:20},{id:32,name:"Black & White Longsleeve",imageUrl:"https://i.ibb.co/55z32tw/long-sleeve.png",price:25},{id:33,name:"Pink T-shirt",imageUrl:"https://i.ibb.co/RvwnBL8/pink-shirt.png",price:25},{id:34,name:"Jean Long Sleeve",imageUrl:"https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",price:40},{id:35,name:"Burgundy T-shirt",imageUrl:"https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",price:25}]}],We=n(52),qe=n.n(We),Ve=n(54),Je=n.n(Ve),Ye=n(53),Ke=n.n(Ye),Qe=(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_KEY,Ke.a,Je.a,{dots:!0,accessibility:!0,infinite:!0,autoplay:!0,autoplaySpeed:6e3,speed:700,centerMode:!1,slidesToShow:1,slidesToScroll:1,centerPadding:"100px",responsive:[{breakpoint:992},{breakpoint:1e4,centerMode:!0}]}),Xe=[{id:"1",textImage:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F33AA99395CB84E547F8D4ED40D9328D48201FEAF1EF431E4EF3C2F7509A6D09/scale?width=1440&aspectRatio=3.91",url:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/83363D03F4F637E001C0FF3BE7AE5B6461E498E1673A2EB944276D6399263C01/scale?width=1440&aspectRatio=3.91&format=jpeg"},{id:"2",textImage:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/28682B85A5D90C8639CA2438740F6DF1256540349A96761B28082E4D50EFBFFA/scale?width=1440&aspectRatio=3.91",url:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2A48A0BD869191F88F25C46001A94B8146C43C0B8AA69220733A46444B49E80F/scale?width=1440&aspectRatio=3.91&format=jpeg"},{id:"3",textImage:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D650E8DB7537D1C7B607BD7D4046937FB96B8053448FD934D054B9782A95DDDF/scale?width=1440&aspectRatio=3.91 ",url:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2D79190EE1ECBA1C48713150D430582515E92D47E824FB15BBB53CEA30D9B3BA/scale?width=1440&aspectRatio=3.91&format=jpeg"},{id:"4",textImage:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/816003FE6AD4DFC19E3CA024601A7179135744283C9571FFBE0AB05E5A3E25D7/scale?width=1440&amp;aspectRatio=3.91",url:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5E814613F6B18A9FE66B65EB49F75310A725668027051A9F502497124CE06B4B/scale?width=1440&aspectRatio=3.91&format=jpeg"},{id:"5",textImage:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/72FF1160F04E32A65899BB07A3A6AC58A06783E9806D82D95966D3745DF4EC70/scale?width=1440&aspectRatio=3.91",url:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A38B478F4FFCBF16886C14872D13CB64EC615E97B380028FC51162EC61495800/scale?width=1440&aspectRatio=3.91&format=jpeg"}],Ze=(n(102),n(103),n(104),function(){return Object(fe.jsx)("article",{children:Object(fe.jsx)(qe.a,Object(j.a)(Object(j.a)({className:"imageSlider"},Qe),{},{children:Xe.map((function(e){return Object(fe.jsxs)("div",{className:"slider__container",children:[Object(fe.jsx)("img",{className:"slider__textImage",src:e.textImage}),Object(fe.jsx)("div",{class:"slider__imgContainer",children:Object(fe.jsx)("img",{className:"slider__img",src:e.url})})]},e.id)}))}))})}),$e=(n(105),Object(l.b)(null,(function(e){return{addItem:function(t){return e(le(t))}}}))((function(e){var t=e.item,n=e.addItem,a=t.name,i=t.price,r=t.imageUrl;return Object(fe.jsxs)("div",{className:"collection-item",children:[Object(fe.jsx)("div",{className:"image",style:{backgroundImage:"url(".concat(r,")")}}),Object(fe.jsxs)("div",{className:"collection-footer",children:[Object(fe.jsx)("span",{className:"name",children:a}),Object(fe.jsx)("span",{className:"price",children:i})]}),Object(fe.jsx)(we,{onClick:function(){return n(t)},inverted:!0,children:"Add to Cart"})]})}))),et=(n(106),function(e){var t=e.title,n=e.items;return Object(fe.jsxs)("div",{className:"collection-preview",children:[Object(fe.jsx)("h1",{className:"title",children:t.toUpperCase()}),Object(fe.jsx)("div",{className:"preview",children:n.filter((function(e,t){return t<4})).map((function(e){return Object(fe.jsx)($e,{item:e},e.id)}))})]})}),tt=function(e){Object(_.a)(n,e);var t=Object(R.a)(n);function n(e){var a;return Object(T.a)(this,n),(a=t.call(this,e)).state={Collection:Le},a}return Object(S.a)(n,[{key:"render",value:function(){var e=this.state.Collection;return Object(fe.jsx)("div",{className:"shop",children:Object(fe.jsxs)("div",{className:"shop-page",children:[Object(fe.jsx)(Ze,{}),e.map((function(e){var t=e.id,n=Object(ye.a)(e,["id"]);return Object(fe.jsx)(et,Object(j.a)({},n),t)}))]})})}}]),n}(i.a.Component),nt=(n(107),Object(l.b)(null,(function(e){return{clearItem:function(t){return e(function(e){return{type:f.CLEAR_ITEM_FROM_CART,payload:e}}(t))},addItem:function(t){return e(le(t))},removeItem:function(t){return e(function(e){return{type:f.REMOVE_ITEM,payload:e}}(t))}}}))((function(e){var t=e.cartItem,n=e.removeItem,a=e.addItem,i=e.clearItem,r=t.name,c=t.imageUrl,s=t.price,l=t.quantity;return Object(fe.jsxs)("div",{className:"checkout-item",children:[Object(fe.jsx)("div",{className:"image-container",children:Object(fe.jsx)("img",{src:c,alt:"item"})}),Object(fe.jsx)("span",{className:"name",children:r}),Object(fe.jsxs)("span",{className:"quantity",children:[Object(fe.jsx)("div",{id:"w2",className:"arrow",onClick:function(){return n(t)},children:"\u276e"}),Object(fe.jsx)("span",{className:"value",children:l}),Object(fe.jsx)("div",{id:"w1",className:"arrow",onClick:function(){return a(t)},children:"\u276f"})]}),Object(fe.jsx)("span",{className:"price",children:s}),Object(fe.jsx)("div",{className:"remove-button",onClick:function(){return i(t)},children:"\u2715"})]})}))),at=(n(108),Object(P.b)({cartItems:de,total:me})),it=Object(l.b)(at)((function(e){var t=e.cartItems,n=e.total;return Object(fe.jsxs)("div",{className:"checkout-page",children:[Object(fe.jsxs)("div",{className:"checkout-header",children:[Object(fe.jsx)("div",{className:"header-block",children:Object(fe.jsx)("span",{children:"Product"})}),Object(fe.jsx)("div",{className:"header-block",children:Object(fe.jsx)("span",{children:"Description"})}),Object(fe.jsx)("div",{className:"header-block",children:Object(fe.jsx)("span",{children:"Quantity"})}),Object(fe.jsx)("div",{className:"header-block",children:Object(fe.jsx)("span",{children:"Price"})}),Object(fe.jsx)("div",{className:"header-block",children:Object(fe.jsx)("span",{children:"Remove"})})]}),t.map((function(e){return Object(fe.jsx)(nt,{cartItem:e},e.id)})),Object(fe.jsxs)("div",{className:"total",children:["TOTAL: $",n]})]})})),rt=(n(109),function(e){Object(_.a)(n,e);var t=Object(R.a)(n);function n(){var e;Object(T.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).unsubscribeFromAuth=null,e}return Object(S.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.setCurrentUser;this.unsubscribeFromAuth=G.onAuthStateChanged(function(){var t=Object(F.a)(I.a.mark((function t(n){return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=5;break}return t.next=3,H(n);case 3:t.sent.onSnapshot((function(t){e(Object(j.a)({id:t.id},t.data()))}));case 5:e(n);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"componentWillUnmount",value:function(){this.unsubscribeFromAuth()}},{key:"render",value:function(){var e=this;return Object(fe.jsxs)("div",{children:[Object(fe.jsx)(Te,{}),Object(fe.jsxs)(M.d,{children:[Object(fe.jsx)(M.b,{exact:!0,path:"/",component:Re}),Object(fe.jsx)(M.b,{path:"/shop",component:tt}),Object(fe.jsx)(M.b,{exact:!0,path:"/checkout",component:it}),Object(fe.jsx)(M.b,{exact:!0,path:"/signin",render:function(){return e.props.currentUser?Object(fe.jsx)(M.a,{to:"/"}):Object(fe.jsx)(Ge,{})}})]})]})}}]),n}(i.a.Component)),ct=Object(P.b)({currentUser:Ue}),st=Object(l.b)(ct,(function(e){return{setCurrentUser:function(t){return e(function(e){return{type:"SET_CURRENT_USER",payload:e}}(t))}}}))(rt);c.a.render(Object(fe.jsxs)(l.a,{store:D,children:["s",Object(fe.jsx)(s.a,{children:Object(fe.jsx)(o.a,{persistor:B,children:Object(fe.jsx)(st,{})})})]}),document.getElementById("root"))},67:function(e,t,n){},72:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){}},[[111,1,2]]]);
//# sourceMappingURL=main.90834767.chunk.js.map