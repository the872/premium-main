(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"0b8eb3e35929778b339a":function(e,t,n){"use strict";n.r(t);var o=n("8af190b70a6bc55c6f1b"),r=n.n(o),i=(n("b845abb1787ef9ba76c8"),n("bb63faa1fdb116e40ae6"));i.initializeApp({apiKey:"AIzaSyDOyZ0nRp7Mh64Om-_Z4JqsthlAH9B3epA",authDomain:"premium-ads-90dee.firebaseapp.com",databaseURL:"https://premium-ads-90dee.firebaseio.com",projectId:"premium-ads-90dee",storageBucket:"premium-ads-90dee.appspot.com",messagingSenderId:"112720234825",appId:"1:112720234825:web:007381df90c7fa5ab7b298",measurementId:"G-MX3M579H2L"});var a,u=i;function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t,n,o){a||(a="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&r)for(var u in r)void 0===t[u]&&(t[u]=r[u]);else t||(t=r||{});if(1===i)t.children=o;else if(i>1){for(var c=new Array(i),s=0;s<i;s++)c[s]=arguments[s+3];t.children=c}return{$$typeof:a,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function l(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b,y=s("div",{id:"recaptcha-container"}),m=s("p",{},void 0,"Enter verification code below:"),g=function(e){function t(e){var n,o,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,r=f(t).call(this,e),n=!r||"object"!==c(r)&&"function"!==typeof r?d(o):r,h(d(d(n)),"signIn",function(){var e=n.state.phoneNumber;n.setState({message:"Sending code ..."}),u.auth().signInWithPhoneNumber("+1   ".concat(e),new u.auth.RecaptchaVerifier("recaptcha-container")).then(function(e){return n.setState({confirmResult:e,message:"Code has been sent!"})}).catch(function(e){return n.setState({message:"Sign In With Phone Number Error: ".concat(e.message)})})}),h(d(d(n)),"confirmCode",function(){var e=n.state,t=e.codeInput,o=e.confirmResult;o&&t.length&&o.confirm(t).then(function(e){n.setState({message:"Code Confirmed!"})}).catch(function(e){return n.setState({message:"Code Confirm Error: ".concat(e.message)})})}),h(d(d(n)),"signOut",function(){u.auth().signOut()}),h(d(d(n)),"onInputChange",function(e){var t=e.target.value.replace(/\D/g,"").match(/(\d{0,3})(\d{0,3})(\d{0,4})/);e.target.value=t[2]?"(".concat(t[1],") ").concat(t[2]).concat(t[3]?"-".concat(t[3]):""):t[1],n.setState({phoneNumber:e.target.value})}),n.unsubscribe=null,n.state={user:null,message:"",codeInput:"",phoneNumber:"",confirmResult:null},n}var n,o,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,r.a.Component),n=t,(o=[{key:"componentDidMount",value:function(){var e=this;this.unsubscribe=u.auth().onAuthStateChanged(function(t){t?e.setState({user:t.toJSON()}):e.setState({user:null,message:"",codeInput:"",phoneNumber:"",confirmResult:null})})}},{key:"componentWillUnmount",value:function(){this.unsubscribe&&this.unsubscribe()}},{key:"renderPhoneNumberInput",value:function(){var e=this,t=this.state.phoneNumber;return s("div",{style:{padding:10,display:"flex",width:"100vw",justifyContent:"center",flexWrap:"wrap",backgroundColor:"linen"}},void 0,s("span",{style:{display:"flex",justifyContent:"center",width:"100vw",margin:20}},void 0,s("img",{draggable:"false",style:{userSelect:"none",width:360,height:"auto"},src:"https://premiumads.org/assets/media/premiumLogo.png"})),s("div",{style:{height:"600px",overflow:"hidden"}},void 0,s("iframe",{title:"hello",style:{pointerEvents:"none"},width:"360",height:"600",scrolling:"false",allow:"camera",src:"https://shaderbooth.com/?33ac0"})),s("div",{style:{width:"100vw",display:"flex",justifyContent:"center",margin:20}},void 0,s("input",{style:{backgroundColor:"#8BC8CD75",padding:10,borderRadius:5,color:"#00000090"},type:"text",id:"phone",placeholder:"555-555-5555",onChange:function(t){return e.onInputChange(t)},value:t}),s("button",{style:{marginLeft:20,cursor:"pointer",backgroundColor:"#828BD3",color:"#00000090",padding:10,borderRadius:5,fontWeight:700},onClick:this.signIn},void 0,"SIGN IN")),y)}},{key:"renderMessage",value:function(){var e=this.state.message;return e.length?s("p",{style:{padding:5,backgroundColor:"#000",color:"#fff"}},void 0,e):null}},{key:"renderVerificationCodeInput",value:function(){var e=this,t=this.state.codeInput;return s("div",{style:{marginTop:25,padding:25}},void 0,m,s("input",{style:{height:40,marginTop:15,marginBottom:15},onChange:function(t){return e.setState({codeInput:t.target.value})},placeholder:"Code ... ",value:t}),s("button",{style:{backgroundColor:"#841584"},onClick:this.confirmCode},void 0,"confirm"))}},{key:"render",value:function(){var e=this.state,t=e.user,n=e.confirmResult;return s("div",{style:{flex:1}},void 0,!t&&!n&&this.renderPhoneNumberInput(),this.renderMessage(),!t&&n&&this.renderVerificationCodeInput(),t&&s("div",{style:{padding:15,justifyContent:"center",alignItems:"center",backgroundColor:"#77dd77",flex:1}},void 0,s("img",{src:"https://cdn.pixabay.com/photo/2015/06/09/16/12/icon-803718_1280.png",style:{width:100,height:100,marginBottom:25}}),s("p",{style:{fontSize:25}},void 0,"Signed In!"),s("p",{},void 0,JSON.stringify(t)),s("button",{style:{backgroudColor:"blue"},onClick:this.signOut},void 0,"logout")))}}])&&l(n.prototype,o),i&&l(n,i),t}();function v(e){return(v="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,t,n,o){b||(b="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&r)for(var a in r)void 0===t[a]&&(t[a]=r[a]);else t||(t=r||{});if(1===i)t.children=o;else if(i>1){for(var u=new Array(i),c=0;c<i;c++)u[c]=arguments[c+3];t.children=u}return{$$typeof:b,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function S(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function C(e,t){return!t||"object"!==v(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function k(e,t){return(k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"default",function(){return j});var I=w(g,{}),j=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),C(this,O(t).apply(this,arguments))}var n,o,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)}(t,r.a.PureComponent),n=t,(o=[{key:"render",value:function(){return w("div",{style:{display:"flex",width:"100vw",height:"100vh",flexWrap:"wrap",backgroundColor:"linen"}},void 0,I)}}])&&S(n.prototype,o),i&&S(n,i),t}()}}]);