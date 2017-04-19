!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.swal=t():e.swal=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist",t(t.s=8)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.CLASS_NAMES={MODAL:"swal-modal",OVERLAY:"swal-overlay",SHOW_MODAL:"swal-modal--show",MODAL_TITLE:"swal-title",MODAL_TEXT:"swal-text",ICON:"swal-icon",BUTTONS:"swal-buttons",BUTTON_CONTAINER:"swal-button-container",BUTTON:"swal-button",CONFIRM_BUTTON:"swal-button--confirm",CANCEL_BUTTON:"swal-button--cancel"},t.default=t.CLASS_NAMES},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getNode=function(e){var t="."+e;return document.querySelector(t)},t.stringToNode=function(e){var t=document.createElement("div");return t.innerHTML=e.trim(),t.firstChild},t.insertAfter=function(e,t){var n=t.nextSibling;t.parentNode.insertBefore(e,n)},t.removeNode=function(e){e.parentElement.removeChild(e)},t.throwErr=function(e){throw e=e.replace(/ +(?= )/g,""),"SweetAlert: "+(e=e.trim())}},function(e,t,n){"use strict";function r(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}Object.defineProperty(t,"__esModule",{value:!0}),r(n(19));var o=n(20);t.overlayMarkup=o.default,r(n(18)),r(n(17));var i=n(0),u=i.default.MODAL_TITLE,a=i.default.MODAL_TEXT,s=i.default.ICON,l=i.default.BUTTONS;t.iconMarkup='\n  <div class="'+s+'"></div>',t.titleMarkup='\n  <div class="'+u+'"></div>\n',t.textMarkup='\n  <div class="'+a+'"></div>',t.buttonListMarkup='\n  <div class="'+l+'"></div>\n'},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={isOpen:!1,promise:null};t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=n(0),i=o.default.MODAL,u=o.default.SHOW_MODAL,a=n(3);t.openModal=function(){r.getNode(i).classList.add(u),a.default.isOpen=!0},t.closeModal=function(){r.getNode(i).classList.remove(u),a.default.isOpen=!1},t.getState=function(){var e=Object.assign({},a.default);return delete e.promise,e}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=n(2),i=n(0),u=i.default.MODAL,a=n(13),s=n(16),l=n(12);t.injectElIntoModal=function(e){var t=r.getNode(u),n=r.stringToNode(e);return t.appendChild(n),n};var c=function(e){e.className=u,e.textContent=""},d=function(e,t){c(e);var n=t.class;n&&e.classList.add(n)};t.initModalContent=function(e){var t=r.getNode(u);d(t,e),a.default(e.icon),s.initTitle(e.title),s.initText(e.text),l.default(e.buttons)};var f=function(){var e=r.stringToNode(o.modalMarkup);document.body.appendChild(e)};t.default=f},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){n(9);const r=n(10).default;e.exports=r},function(e,t,n){(function(t){e.exports=t.sweetAlert=n(7)}).call(t,n(6))},function(e,t){},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(14),o=n(4),i=n(3),u=n(22),a=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=u.getOpts.apply(void 0,e);return new Promise(function(e,t){i.default.promise={resolve:e,reject:t},r.default(n),setTimeout(function(){o.openModal()})})};a.open=o.openModal,a.close=o.closeModal,a.getState=o.getState,t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(3),o=n(4),i=n(1),u=n(0),a=u.default.MODAL,s=u.default.BUTTON,l=function(e){o.closeModal(),r.default.promise.resolve(null)},c=function(e){e.preventDefault(),b()},d=function(e){e.preventDefault(),O()},f=function(e){if(r.default.isOpen)switch(e.key){case"Escape":return l()}},v=function(e){if(r.default.isOpen)switch(e.key){case"Tab":return c(e)}},p=function(e){if(r.default.isOpen)return"Tab"===e.key&&e.shiftKey?d(e):void 0},b=function(){var e=i.getNode(a),t=e.querySelector(".swal-button");t.tabIndex=0,t.focus()},O=function(){var e=i.getNode(a),t=e.querySelectorAll("."+s);t[t.length-1].focus()},M=function(e){e[e.length-1].addEventListener("keydown",v)},_=function(e){e[0].addEventListener("keydown",p)},y=function(){var e=i.getNode(a),t=e.querySelectorAll("."+s);t.length&&(M(t),_(t))},g=function(){document.addEventListener("keyup",f),b(),y()};t.default=g},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=n(5),i=n(0),u=i.default.BUTTON,a=n(2),s=n(4),l=n(3),c=function(e){s.closeModal(),l.default.promise.resolve(e)},d=function(e,t){var n=t.text,o=t.value,i=t.class,s=r.stringToNode(a.buttonMarkup),l=s.querySelector("."+u),d=u+"--"+e;return l.classList.add(d),i&&l.classList.add(i),l.textContent=n,l.addEventListener("click",function(){return c(o)}),s},f=function(e){if(e){var t=o.injectElIntoModal(a.buttonListMarkup);for(var n in e){var r=e[n],i=d(n,r);r.visible&&t.appendChild(i)}}};t.default=f},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(5),o=n(2),i=n(0),u=i.default.ICON,a={error:o.errorIconMarkup(),warning:o.warningIconMarkup(),success:o.successIconMarkup()},s=function(e){if(e){var t=r.injectElIntoModal(o.iconMarkup),n=u+"--"+e;t.classList.add(n);var i=a[e];i&&(t.innerHTML=i)}};t.default=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=n(0),i=o.default.MODAL,u=n(5),a=n(15),s=n(11);t.init=function(e){r.getNode(i)||(u.default(),a.default()),u.initModalContent(e),s.default()},t.default=t.init},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=n(2),i=n(3),u=n(4),a=function(){u.closeModal(),i.default.promise.resolve(null)},s=function(){var e=r.stringToNode(o.overlayMarkup);e.addEventListener("click",function(){return a()}),document.body.appendChild(e)};t.default=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),o=n(5);t.initTitle=function(e){o.injectElIntoModal(r.titleMarkup).textContent=e},t.initText=function(e){if(e){o.injectElIntoModal(r.textMarkup).textContent=e}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=r.default.BUTTON_CONTAINER,i=r.default.BUTTON;t.buttonMarkup='\n  <div class="'+o+'">\n    <button\n      class="'+i+'"\n    ></button>\n  </div>\n'},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=r.default.ICON;t.errorIconMarkup=function(){var e=o+"--error",t=e+"__line";return'\n    <div class="'+e+'__x-mark">\n      <span class="'+t+" "+t+'--left"></span>\n      <span class="'+t+" "+t+'--right"></span>\n    </div>\n  '},t.warningIconMarkup=function(){var e=o+"--warning";return'\n    <span class="'+e+'__body">\n      <span class="'+e+'__dot"></span>\n    </span>\n  '},t.successIconMarkup=function(){var e=o+"--success";return'\n    <span class="'+e+"__line "+e+'__line--long"></span>\n    <span class="'+e+"__line "+e+'__line--tip"></span>\n\n    <div class="'+e+'__ring"></div>\n    <div class="'+e+'__hide-corners"></div>\n  '}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=r.default.MODAL;t.modalMarkup='\n  <div class="'+o+'"></div>',t.default=t.modalMarkup},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=r.default.OVERLAY,i='<div \n    class="'+o+'"\n    tabIndex="-1">\n  </div>';t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=function(e){return null!==e&&"object"==typeof e},i={visible:!0,text:null,value:null,class:""},u=Object.assign({},i,{visible:!1,text:"Cancel",value:!1}),a=Object.assign({},i,{text:"OK",value:!0});t.defaultButtonList={cancel:u,confirm:a};var s=function(e){switch(e){case"confirm":return a;case"cancel":return u;default:var t=e.charAt(0).toUpperCase()+e.slice(1);return Object.assign({},i,{text:t,value:e})}},l=function(e,t){var n=s(e);return!0===t?Object.assign({},n,{visible:!0}):"string"==typeof t?Object.assign({},n,{visible:!0,text:t}):o(t)?Object.assign({},n,t):Object.assign({},n,{visible:!1})},c=function(e){for(var t={},n=0,r=Object.keys(e);n<r.length;n++){var o=r[n],i=e[o],u=l(o,i);t[o]=u}return t},d=function(e){var t={};switch(e.length){case 1:t.cancel=Object.assign({},u,{visible:!1}),t.confirm=l("confirm",e[0]);break;case 2:t.cancel=l("cancel",e[0]),t.confirm=l("confirm",e[1]);break;default:r.throwErr("Invalid number of 'buttons' in array ("+e.length+").\n      If you want more than 2 buttons, you need to use an object!")}return t};t.getButtonListOpts=function(e){var n;return"string"==typeof e?(n={},n.confirm=l("confirm",e)):Array.isArray(e)?n=d(e):o(e)?n=c(e):void 0===e&&(n=t.defaultButtonList),n}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=n(21),i={title:null,text:null,icon:null,buttons:o.defaultButtonList,class:null},u=function(e){var t=e&&e.button,n=e&&e.buttons;return t&&n&&r.throwErr("Cannot set both 'button' and 'buttons' options!"),t?{confirm:t}:n};t.getOpts=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=e[0],r="string"==typeof n,a={};1===e.length&&r?a.text=n:r?(a.title=n,a.text=e[1],a.icon=e[2]):a=n;var s=u(a);return a.buttons=o.getButtonListOpts(s),Object.assign({},i,a)}}])});
//# sourceMappingURL=sweetalert.bundle.js.map