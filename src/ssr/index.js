const {render} = require("./render");
const manifest = require("../../../frontend/build/asset-manifest.json");

function buildHtml(arg) {
  const {html, preloadedState} = arg;
    return `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8"/>
    <link rel="shortcut icon" href="/favicon.ico"/>
    <meta name="viewport" content="width=device-width,initial-scale=1"/>
    <meta name="theme-color" content="#000000"/>
    
    <link rel="manifest" href="/manifest.json"/>
    
    <title>React App</title>
    <link href="${manifest.files["node_modules$the_others~main.css"]}" rel="stylesheet">
    <link href="${manifest.files["main.css"]}" rel="stylesheet">
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>

    <!-- The pre-rendered document. -->
    <div id="root">${html}</div>
    
    <!-- The pre-loaded Redux store state. -->
    <script>window.__PRELOADED_STATE__ = ${preloadedState}</script>
    
    <script>!function(e){function r(r){for(var n,f,i=r[0],l=r[1],a=r[2],c=0,s=[];c<i.length;c++)f=i[c],o[f]&&s.push(o[f][0]),o[f]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);for(p&&p(r);s.length;)s.shift()();return u.push.apply(u,a||[]),t()}function t(){for(var e,r=0;r<u.length;r++){for(var t=u[r],n=!0,i=1;i<t.length;i++){var l=t[i];0!==o[l]&&(n=!1)}n&&(u.splice(r--,1),e=f(f.s=t[0]))}return e}var n={},o={3:0},u=[];function f(r){if(n[r])return n[r].exports;var t=n[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,f),t.l=!0,t.exports}f.m=e,f.c=n,f.d=function(e,r,t){f.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},f.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},f.t=function(e,r){if(1&r&&(e=f(e)),8&r)return e;if(4&r&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(f.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)f.d(t,n,function(r){return e[r]}.bind(null,n));return t},f.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return f.d(r,"a",r),r},f.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},f.p="/";var i=window.webpackJsonp=window.webpackJsonp||[],l=i.push.bind(i);i.push=r,i=i.slice();for(var a=0;a<i.length;a++)r(i[a]);var p=l;t()}([]);
//# sourceMappingURL=runtime~main.cba5edd743f4.js.map</script>
    <script src="${manifest.files["node_modules$react_redux~main.js"]}"></script>
    <script src="${manifest.files["node_modules$the_others~main.js"]}"></script>
    <script src="${manifest.files["main.js"]}"></script>
  </body>
</html>
`;
}

module.exports = async (ctx) => {
    let result = null;
    try {
        result = await render(ctx);
    }
    catch(e) {
        result = {
            html : "",
            preloadedState : null
        };
    }

    ctx.body = buildHtml(result);
};