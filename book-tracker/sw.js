if(!self.define){let e,i={};const n=(n,c)=>(n=new URL(n+".js",c).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(c,s)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let o={};const l=e=>n(e,r),a={module:{uri:r},exports:o,require:l};i[r]=Promise.all(c.map((e=>a[e]||l(e)))).then((e=>(s(...e),o)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"apple-touch-icon-180x180.png",revision:"95b069c1d60ec7569bb018240a8f9c3c"},{url:"assets/index-CMO_qPK1.js",revision:null},{url:"assets/index-DwDskk0e.css",revision:null},{url:"assets/index.lazy-JzvbZecu.js",revision:null},{url:"assets/search_icon-DhKAkwOG.svg",revision:null},{url:"favicon.ico",revision:"b0400f9e4fe39ec494a0e160d34e1622"},{url:"index.html",revision:"f0d0400c261feb9e2645e91d3ea0307a"},{url:"logo.png",revision:"080310360c4c0c0265d49cfccab49470"},{url:"maskable-icon-512x512.png",revision:"6655d23e2ac0f9586288e821ad660750"},{url:"pwa-192x192.png",revision:"e80a2c83ab36fd0216d4901b647bf248"},{url:"pwa-512x512.png",revision:"17c3196173d414746de7605cd7c25757"},{url:"pwa-64x64.png",revision:"d6cc0caa5c29323779f2c0ba5c6b982a"},{url:"registerSW.js",revision:"157195665170800d1c0c988c27b35ece"},{url:"favicon.ico",revision:"b0400f9e4fe39ec494a0e160d34e1622"},{url:"maskable-icon-512x512.png",revision:"6655d23e2ac0f9586288e821ad660750"},{url:"pwa-192x192.png",revision:"e80a2c83ab36fd0216d4901b647bf248"},{url:"pwa-512x512.png",revision:"17c3196173d414746de7605cd7c25757"},{url:"pwa-64x64.png",revision:"d6cc0caa5c29323779f2c0ba5c6b982a"},{url:"manifest.webmanifest",revision:"72192aa712eff6bc289f1f17febe247e"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
