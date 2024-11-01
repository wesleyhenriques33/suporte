/* 
 
 Copyright The Closure Library Authors. 
 SPDX-License-Identifier: Apache-2.0 
*/ 
var e=this||self;/* 
 
 Copyright Google LLC 
 SPDX-License-Identifier: Apache-2.0 
*/ 
var f={};function g(){if(f!==f)throw Error("Bad secret");};function h(a){return Object.isFrozen(a)&&Object.isFrozen(a.raw)}function k(a){return a.toString().indexOf("`")===-1}const l=k(a=>a``)||k(a=>a`\0`)||k(a=>a`\n`)||k(a=>a`\u0000`),m=h``&&h`\0`&&h`\n`&&h`\u0000`;let n=globalThis.trustedTypes,p;function q(){let a=null;if(!n)return a;try{const d=c=>c;a=n.createPolicy("goog#html",{createHTML:d,createScript:d,createScriptURL:d})}catch(d){throw d;}return a};var r=class{constructor(a){g();this.g=a}toString(){return this.g+""}};function t(a){p===void 0&&(p=q());var d=p;return new r(d?d.createScriptURL(a):a)};var u=class{constructor(a){g();this.h=a}toString(){return this.h}};new u("about:blank");new u("about:invalid#zClosurez");const w=[];var x=a=>{console.warn(`A URL with content '${a}' was sanitized away.`)};w.indexOf(x)===-1&&w.push(x);function y(a,...d){if(!Array.isArray(a)||!Array.isArray(a.raw)||a.length!==a.raw.length||!l&&a===a.raw||!(l&&!m||h(a))||d.length+1!==a.length)throw new TypeError("\n    ############################## ERROR ##############################\n\n    It looks like you are trying to call a template tag function (fn`...`)\n    using the normal function syntax (fn(...)), which is not supported.\n\n    The functions in the safevalues library are not designed to be called\n    like normal functions, and doing so invalidates the security guarantees\n    that safevalues provides.\n\n    If you are stuck and not sure how to proceed, please reach out to us\n    instead through:\n     - go/ise-hardening-yaqs (preferred) // LINE-INTERNAL\n     - g/ise-hardening // LINE-INTERNAL\n     - https://github.com/google/safevalues/issues\n\n    ############################## ERROR ##############################"); 
if(d.length===0)return t(a[0]);var c=a[0].toLowerCase();if(/^data:/.test(c))throw Error("Data URLs cannot have expressions in the template literal input.");if(/^https:\/\//.test(c)||/^\/\//.test(c)){var b=c.indexOf("//")+2;var v=c.indexOf("/",b);if(v<=b)throw Error("Can't interpolate data in a url's origin, Please make sure to fully specify the origin, terminated with '/'.");b=c.substring(b,v);if(!/^[0-9a-z.:-]+$/i.test(b))throw Error("The origin contains unsupported characters.");if(!/^[^:]*(:[0-9]+)?$/i.test(b))throw Error("Invalid port number."); 
if(!/(^|\.)[a-z][^.]*$/i.test(b))throw Error("The top-level domain must start with a letter.");b=!0}else b=!1;if(!b)if(/^\//.test(c))if(c==="/"||c.length>1&&c[1]!=="/"&&c[1]!=="\\")b=!0;else throw Error("The path start in the url is invalid.");else b=!1;if(!(b=b||RegExp("^[^:\\s\\\\/]+/").test(c)))if(/^about:blank/.test(c)){if(c!=="about:blank"&&!/^about:blank#/.test(c))throw Error("The about url is invalid.");b=!0}else b=!1;if(!b)throw Error("Trying to interpolate expressions in an unsupported url format."); 
c=a[0];for(b=0;b<d.length;b++)c+=encodeURIComponent(d[b])+a[b+1];return t(c)};y`https://securepubads.g.doubleclick.net/pagead/js/car.js`;y`https://securepubads.g.doubleclick.net/pagead/js/cocar.js`;y`https://ep3.adtrafficquality.google/ivt/worklet/caw.js`;async function z(){var a=A(),d=await B.sharedStorage.get("ps_cct");d=Number(d);if(!d)return 0;a=(a-d)/864E5;return a<0?0:a<11?1:a<50?2:a<108?3:a<183?4:a<284?5:a<422?6:7};function A(){const a=e.performance;return a&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):Date.now()};const B=globalThis;class C{async run(){await B.sharedStorage.set("ps_cct",String(A()),{ignoreIfPresent:!0});return z()}}B.register("ps_caus",C);