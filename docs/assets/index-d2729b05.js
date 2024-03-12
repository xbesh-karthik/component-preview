(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();var v={exports:{}},p={};const R=React;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _=R,O=Symbol.for("react.element"),E=Symbol.for("react.fragment"),S=Object.prototype.hasOwnProperty,j=_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,P={key:!0,ref:!0,__self:!0,__source:!0};function w(n,t,i){var s,e={},r=null,a=null;i!==void 0&&(r=""+i),t.key!==void 0&&(r=""+t.key),t.ref!==void 0&&(a=t.ref);for(s in t)S.call(t,s)&&!P.hasOwnProperty(s)&&(e[s]=t[s]);if(n&&n.defaultProps)for(s in t=n.defaultProps,t)e[s]===void 0&&(e[s]=t[s]);return{$$typeof:O,type:n,key:r,ref:a,props:e,_owner:j.current}}p.Fragment=E;p.jsx=w;p.jsxs=w;v.exports=p;var d=v.exports,u={};const D=ReactDOM;var h=D;u.createRoot=h.createRoot,u.hydrateRoot=h.hydrateRoot;const N=`<!doctype html>\r
<html lang="en">\r
<head>\r
  <meta charset="UTF-8"/>\r
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>\r
  <title>Preview</title>\r
  <!-- es-module-shims -->\r
  <style>\r
    * {\r
      padding: 0;\r
      margin: 0;\r
    }\r
  </style>\r
</head>\r
<body>\r
<script type="importmap">\r
  {\r
    "imports": {\r
      "react": "https://esm.sh/react@18.2.0",\r
      "react-dom/client": "https://esm.sh/react-dom@18.2.0"\r
    }\r
  }\r
<\/script>\r
<script>\r
\r
<\/script>\r
<script type="module">\r
  import React, {useState, useEffect} from 'react';\r
  import ReactDOM from 'react-dom/client';\r
  import {Playground} from 'https://esm.sh/react-exercise-playground@#version#'\r
\r
  const App = () => {\r
    const [sandboxProps, setSandboxProps] = useState(null);\r
\r
    useEffect(() => {\r
      window.addEventListener('message', ({data}) => {\r
        if (data?.type === 'SANDBOX_RUN') {\r
          data.data.onFilesChange = (val) => {\r
            window.parent.postMessage({type: 'SANDBOX_ON_FILES_CHANGE', message: val})\r
          }\r
          setSandboxProps(data.data)\r
        }\r
      })\r
    }, [])\r
\r
    return sandboxProps ? React.createElement(React.StrictMode, null, React.createElement(Playground, sandboxProps)) : null\r
  };\r
\r
  window.addEventListener('load', () => {\r
    window.parent.postMessage({type: 'SANDBOX_LOADED', message: ''})\r
    const root = document.getElementById('root')\r
    ReactDOM.createRoot(root).render(React.createElement(App, null))\r
  })\r
<\/script>\r
<div id="root">\r
  <div style="position:absolute;top: 0;left:0;width:100%;height:100%;display: flex;justify-content: center;align-items: center;">\r
    Loading...\r
  </div>\r
</div>\r
</body>\r
</html>\r
`,L="react-exercise-playground",A="react-exercise-playground是一个react在线代码编辑器可实时预览运行效果",I="0.1.93",M={".":{import:{types:"./dist/@types/Playground/index.d.ts",default:"./dist/index.mjs"}},"./PlaygroundSandbox":{import:{types:"./dist/@types/Playground/PlaygroundSandbox.d.ts",default:"./dist/PlaygroundSandbox.mjs"}}},F=["dist/*"],B={type:"git",url:"https://github.com/fewismuch/react-playground.git"},U={url:"https://github.com/fewismuch/react-playground/issues",email:"779205344@qq.com"},C=["react","react-playground","playground","react-live","live-editor","codeSandbox","sandbox","live"],k="fewismuch",X="MIT",T={dev:"vite",build:"vite build && tsc",docs:"vite build && tsc",preview:"vite preview",prepare:"husky install",report:"tsc && vite build",prepublish:"npm run docs && npm run build && npm publish"},q={"@babel/standalone":"^7.23.1","@monaco-editor/react":"^4.5.2","@typescript/ata":"^0.9.4",allotment:"^1.19.3",classnames:"^2.3.2",fflate:"^0.8.1","file-saver":"^2.0.5",jszip:"^3.10.1","monaco-editor":"^0.43.0","monaco-jsx-syntax-highlight":"^1.2.0",react:"^18.2.0","react-copy-to-clipboard":"^5.1.0","react-dom":"^18.2.0"},$={react:">=18.2.0","react-dom":">=18.2.0"},H={"@types/babel__standalone":"^7.1.5","@types/file-saver":"^2.0.5","@types/node":"^20.8.10","@types/react":"^18.2.15","@types/react-dom":"^18.2.7","@typescript-eslint/eslint-plugin":"^6.8.0","@typescript-eslint/parser":"^6.8.0","@vitejs/plugin-react-swc":"^3.3.2",eslint:"^8.45.0","eslint-config-prettier":"^9.0.0","eslint-config-standard":"^17.1.0","eslint-plugin-import":"^2.28.1","eslint-plugin-n":"^16.2.0","eslint-plugin-prettier":"^5.0.1","eslint-plugin-promise":"^6.1.1","eslint-plugin-react":"^7.33.2","eslint-plugin-react-hooks":"^4.6.0","eslint-plugin-react-refresh":"^0.4.3","eslint-plugin-standard":"^5.0.0",husky:"^8.0.3",less:"^4.1.3","less-loader":"^11.1.2","lint-staged":"^15.0.2",prettier:"^3.0.3","rollup-plugin-visualizer":"^5.9.2",stylelint:"^15.11.0","stylelint-config-css-modules":"^4.3.0","stylelint-config-prettier":"^9.0.5","stylelint-config-recommended-less":"^2.0.0","stylelint-config-standard":"^34.0.0","stylelint-less":"^2.0.0","stylelint-order":"^6.0.3","stylelint-prettier":"^4.0.2",typescript:"^5.0.2",vite:"^4.4.5","vite-plugin-cdn-import":"^0.3.5","vite-plugin-css-injected-by-js":"^3.3.0"},V={name:L,description:A,private:!1,version:I,exports:M,files:F,repository:B,bugs:U,keywords:C,author:k,license:X,scripts:T,dependencies:q,peerDependencies:$,devDependencies:H,"lint-staged":{"src/**/*.{js,jsx,ts,tsx}":["eslint --max-warnings 0"],"src/**/*.{css,less,scss}":["stylelint --max-warnings 0"]}},W=n=>{const t="//unpkg.com/es-module-shims@1.8.0/dist/es-module-shims.js",i=typeof import.meta>"u"?n.replace("<!-- es-module-shims -->",`<script async src="${t}"><\/script>`):n;return URL.createObjectURL(new Blob([i],{type:"text/html"}))},z=N.replace("#version#",V.version),G=W(z)+window.location.hash,J=n=>{const{width:t="100vw",height:i="100vh"}=n,s=React.useRef(null),e=React.useRef(!1),[r,a]=React.useState(!1),l=React.useRef(null),b=o=>{o.forEach(c=>{c.isIntersecting&&a(!0)})},m=o=>{var f,y,g;const{type:c,message:x}=o.data;c==="SANDBOX_LOADED"?((y=(f=s.current)==null?void 0:f.contentWindow)==null||y.postMessage({type:"SANDBOX_RUN",data:{...n,onFilesChange:void 0}}),e.current=!0):c==="SANDBOX_ON_FILES_CHANGE"&&((g=n.onFilesChange)==null||g.call(n,x))};return React.useEffect(()=>{const o=new IntersectionObserver(b,{threshold:.2});return l.current&&o.observe(l.current),()=>{l.current&&o.unobserve(l.current)}},[]),React.useEffect(()=>(window.addEventListener("message",m),()=>{window.removeEventListener("message",m)}),[]),React.useEffect(()=>{var o,c;e.current&&((c=(o=s.current)==null?void 0:o.contentWindow)==null||c.postMessage({type:"SANDBOX_RUN",data:{...n,onFilesChange:void 0}}))},[n]),d.jsx("div",{ref:l,style:{width:t,height:i},children:r?d.jsx("iframe",{ref:s,src:G,style:{width:"100%",height:"100%",padding:0,border:"none"},sandbox:"allow-popups-to-escape-sandbox allow-scripts allow-popups allow-forms allow-pointer-lock allow-top-navigation allow-modals allow-same-origin"}):null})},K=J;function Y(){const n=t=>{window.location.hash=t};return d.jsx(K,{onFilesChange:n})}u.createRoot(document.getElementById("root")).render(d.jsx(React.StrictMode,{children:d.jsx(Y,{})}));
(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode("*{padding:0;margin:0}body{font-family:Helvetica Neue,Segoe UI,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,sans-serif}")),document.head.appendChild(e)}}catch(n){console.error("vite-plugin-css-injected-by-js",n)}})();
