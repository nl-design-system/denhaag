import{R as d}from"./index-Cs7sjTYM.js";var c=".denhaag-page{display:flex;flex-direction:column;min-height:100vh}.denhaag-page-header{background-color:var(--denhaag-page-header-background-color);z-index:var(--denhaag-page-header-index)}.denhaag-page-content{margin-block-end:80px;margin-block-start:var(--denhaag-page-content-main-margin-block-start)}@media (width >= 768px){.denhaag-page-content{margin-block-start:var(--denhaag-page-content-main-sm-margin-block-start)}}@media (width >= 1024px){.denhaag-page-content{margin-block-start:var(--denhaag-page-content-main-md-margin-block-start)}}.denhaag-page-content__main{flex-grow:1}@media (width <= 1023px){.denhaag-page-content__main{max-width:100%}}.denhaag-page-footer{margin-block-start:auto}";if(typeof document<"u"){const e=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css",a.nonce=window.NONCE,e.appendChild(a),a.styleSheet?a.styleSheet.cssText=c:a.appendChild(document.createTextNode(c))}function s(e){var a,t,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var r=e.length;for(a=0;a<r;a++)e[a]&&(t=s(e[a]))&&(n&&(n+=" "),n+=t)}else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function o(){for(var e,a,t=0,n="",r=arguments.length;t<r;t++)(e=arguments[t])&&(a=s(e))&&(n&&(n+=" "),n+=a);return n}var g=function(e){var a=o("denhaag-page",e.className);return d.createElement("div",{className:a},e.children)},i=function(e){var a=o("denhaag-page-header",e.className);return d.createElement("div",{className:a},e.children)},m=function(e){var a=o("denhaag-page-footer",e.className);return d.createElement("div",{className:a},e.children)};g.__docgenInfo={description:"",methods:[],displayName:"Page"};m.__docgenInfo={description:"",methods:[],displayName:"PageFooter"};i.__docgenInfo={description:"",methods:[],displayName:"PageHeader"};export{g as P,i as a,m as b};