(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(6005)}])},6005:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return x}});var r=t(4051),c=t.n(r),a=t(5893),s=t(7294),o=t(9917),i=t(7999),u=JSON.parse('{"_":{"r":{"0":166,"1":120,"2":116,"3":38,"4":217,"5":198,"6":255,"7":12,"8":190,"9":133,"10":130,"11":136,"12":55,"13":86,"14":69,"15":196,"16":172,"17":177,"18":117,"19":108,"20":147,"21":77,"22":103,"23":115,"24":21,"25":131,"26":59,"27":91,"28":88,"29":72,"30":47,"31":74,"32":71,"33":120,"34":205,"35":38,"36":139,"37":174,"38":137,"39":184,"40":28,"41":153,"42":157,"43":76,"44":77,"45":174,"46":147,"47":82,"48":7,"49":234,"50":96,"51":125,"52":162,"53":213,"54":131,"55":246,"56":161,"57":223,"58":245,"59":218,"60":63,"61":162,"62":197,"63":176}}}'),l=JSON.parse('{"version":"0.1.0","name":"myepicproject","instructions":[{"name":"startStuffOff","accounts":[{"name":"baseAccount","isMut":true,"isSigner":true},{"name":"user","isMut":true,"isSigner":true},{"name":"systemProgram","isMut":false,"isSigner":false}],"args":[]},{"name":"addGif","accounts":[{"name":"baseAccount","isMut":true,"isSigner":false},{"name":"user","isMut":true,"isSigner":true}],"args":[{"name":"gifLink","type":"string"}]}],"accounts":[{"name":"BaseAccount","type":{"kind":"struct","fields":[{"name":"totalGifs","type":"u64"},{"name":"gifList","type":{"vec":{"defined":"ItemStruct"}}}]}}],"types":[{"name":"ItemStruct","type":{"kind":"struct","fields":[{"name":"gifLink","type":"string"},{"name":"userAddress","type":"publicKey"}]}}],"metadata":{"address":"638tMGkYYsuNfGJ1c2MCMinxEcuCzbGxMYqqck16CWM1"}}');function f(e,n,t,r,c,a,s){try{var o=e[a](s),i=o.value}catch(u){return void t(u)}o.done?n(i):Promise.resolve(i).then(r,c)}function p(e){return function(){var n=this,t=arguments;return new Promise((function(r,c){var a=e.apply(n,t);function s(e){f(a,r,c,s,o,"next",e)}function o(e){f(a,r,c,s,o,"throw",e)}s(void 0)}))}}var d=i.rV.SystemProgram,m=(i.rV.Keypair,Object.values(u._.r)),v=new Uint8Array(m),h=i.rV.Keypair.fromSecretKey(v),g=new o.PublicKey(l.metadata.address),b=(0,o.clusterApiUrl)("devnet"),w="processed";function x(){var e=(0,s.useState)(null),n=e[0],t=e[1],r=(0,s.useState)(""),u=r[0],f=r[1],m=(0,s.useState)([]),v=m[0],x=m[1],y=function(){var e=p(c().mark((function e(){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!(n=window.solana)){e.next=12;break}if(!n.isPhantom){e.next=10;break}return console.log("Phantom wallet found! \ud83e\udd73s"),e.next=7,n.connect({onlyIfTrusted:!0});case 7:r=e.sent,console.log("Connected with Public Key \ud83d\udd11 :",r.publicKey.toString()),t(r.publicKey.toString());case 10:e.next=13;break;case 12:alert("Solana object not found! Get a Phantom Wallet \ud83d\udc7b");case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.error(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=p(c().mark((function e(){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n=window.solana)){e.next=7;break}return e.next=4,n.connect();case 4:r=e.sent,console.log("Connected with Public Key \ud83d\udd11 :",r.publicKey.toString()),t(r.publicKey.toString());case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=p(c().mark((function e(){var n,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==u.length){e.next=3;break}return console.log("No gif link given!"),e.abrupt("return");case 3:return f(""),console.log("Gif link:",u),e.prev=5,n=j(),t=new i.$r(l,g,n),e.next=10,t.rpc.addGif(u,{accounts:{baseAccount:h.publicKey,user:n.wallet.publicKey}});case 10:return console.log("GIF successfully sent to program",u),e.next=13,C();case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(5),console.log("Error sending GIF:",e.t0);case 18:case"end":return e.stop()}}),e,null,[[5,15]])})));return function(){return e.apply(this,arguments)}}(),N=function(e){var n=e.target.value;f(n)},j=function(){var e=new o.Connection(b,w);return new i.zt(e,window.solana,w)},K=function(){var e=p(c().mark((function e(){var n,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=j(),t=new i.$r(l,g,n),console.log("ping"),e.next=6,t.rpc.startStuffOff({accounts:{baseAccount:h.publicKey,user:n.wallet.publicKey,systemProgram:d.programId},signers:[h]});case 6:return console.log("Created a new BaseAccount w/ address:",h.publicKey.toString()),e.next=9,C();case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log("Error creating BaseAccount account:",e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();(0,s.useEffect)((function(){var e=function(){var e=p(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return window.addEventListener("load",e),function(){return window.removeEventListener("load",e)}}),[]);var C=function(){var e=p(c().mark((function e(){var n,t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=j(),t=new i.$r(l,g,n),e.next=5,t.account.baseAccount.fetch(h.publicKey);case 5:r=e.sent,console.log("Got the account",r),x(r.gifList),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),console.log("Error in getGifList: ",e.t0),x(null);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return(0,s.useEffect)((function(){n&&(console.log("Fetching GIF list..."),C())}),[n]),(0,a.jsx)("div",{className:"App",children:(0,a.jsxs)("div",{className:n?"authed-container":"container",children:[(0,a.jsxs)("div",{className:"header-container",children:[(0,a.jsx)("p",{className:"header",children:"\ud83d\udc7e Cypherpunk Movement"}),(0,a.jsx)("p",{className:"sub-text",children:"Join to the Cypherpunk movement and be part of the best IT revolution \ud83c\udff4\u200d\u2620\ufe0f"}),!n&&(0,a.jsx)("button",{className:"cta-button connect-wallet-button",onClick:k,children:"Connect to Wallet"}),n&&(null===v?(0,a.jsx)("div",{className:"connected-container",children:(0,a.jsx)("button",{className:"cta-button submit-gif-button",onClick:K,children:"Do One-Time Initialization For GIF Program Account"})}):(0,a.jsxs)("div",{className:"connected-container",children:[(0,a.jsxs)("form",{onSubmit:function(e){e.preventDefault(),S()},children:[(0,a.jsx)("input",{type:"text",placeholder:"Enter gif link!",value:u,onChange:N}),(0,a.jsx)("button",{type:"submit",className:"cta-button submit-gif-button",children:"Submit"})]}),(0,a.jsx)("div",{className:"gif-grid",children:v.map((function(e,n){return(0,a.jsx)("div",{className:"gif-item",children:(0,a.jsx)("img",{src:e.gifLink})},n)}))})]}))]}),(0,a.jsx)("div",{className:"footer-container",children:(0,a.jsx)("a",{className:"footer-text",href:"https://twitter.com/Rafael41603219",target:"_blank",rel:"noreferrer",children:"\ud83d\udc23 built by @".concat("rafaelfuentes.eth")})})]})})}},5365:function(){},6601:function(){},9214:function(){},5568:function(){},5024:function(){}},function(e){e.O(0,[655,766,895,774,888,179],(function(){return n=5557,e(e.s=n);var n}));var n=e.O();_N_E=n}]);