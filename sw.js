if(!self.define){let e,i={};const s=(s,r)=>(s=new URL(s+".js",r).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(r,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let o={};const t=e=>s(e,c),d={module:{uri:c},exports:o,require:t};i[c]=Promise.all(r.map((e=>d[e]||t(e)))).then((e=>(n(...e),o)))}}define(["./workbox-3e4da89b"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index.dc290f0b.css",revision:null},{url:"assets/index.f88f3c3c.js",revision:null},{url:"assets/vendor.771a80ad.js",revision:null},{url:"index.html",revision:"a2da28c909ec0806cebe3e9f30795af5"},{url:"registerSW.js",revision:"cde204d2b5d8a4c2a8c02cb454a77759"},{url:"favicon.ico",revision:"1690a2edb0ec384178b9a176d0ff2bee"},{url:"robots.txt",revision:"f77c87f977e0fcce05a6df46c885a129"},{url:"apple-touch-icon.png",revision:"386bdf2af1ee6ac683cee065673cc540"},{url:"android-chrome-192x192.png",revision:"2ae07e92cb00d6e284febda1be4d8fd1"},{url:"android-chrome-512x512.png",revision:"54c42803eb170301cd68f6215ac6b191"},{url:"manifest.webmanifest",revision:"0f462b59ccf2c84b21f1d74217e3ac44"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
