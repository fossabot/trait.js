module.exports=function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){"use strict";function n(...t){this.name="Trait",this.$traits=t}n.prototype.inheritTo=r(1),n.prototype.call=r(2),n.prototype.in=n.prototype.inheritTo;const o=t=>new n(t);t.exports=o,t.exports.trait=o,t.exports.default=o,t.exports.Trait=n},function(t,e,r){"use strict";t.exports=function(t){const e=t.prototype;return this.$traits.forEach(t=>{for(let r in t){const n=t[r],o=r;if(t.hasOwnProperty(o)){if(e[o])return;e[o]=n}}}),this}},function(t,e,r){"use strict";t.exports=async function(t){let e=null;if(this.$traits.forEach(r=>{r[t]&&(e=r[t])}),!e)throw new Error(`${t} does not exist on ${this.name}`);return e.apply(this)}}]);