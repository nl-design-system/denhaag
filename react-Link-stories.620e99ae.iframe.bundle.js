"use strict";(self.webpackChunk_gemeente_denhaag_storybook=self.webpackChunk_gemeente_denhaag_storybook||[]).push([[1895],{"../../components/Link/dist/mjs/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>Link});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__assign=function(){return __assign=Object.assign||function __assign(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)};function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}"function"==typeof SuppressedError&&SuppressedError;!function styleInject(css,ref){void 0===ref&&(ref={});var insertAt=ref.insertAt;if(css&&"undefined"!=typeof document){var head=document.head||document.getElementsByTagName("head")[0],style=document.createElement("style");style.type="text/css","top"===insertAt&&head.firstChild?head.insertBefore(style,head.firstChild):head.appendChild(style),style.styleSheet?style.styleSheet.cssText=css:style.appendChild(document.createTextNode(css))}}(".denhaag-link{color:var(--denhaag-link-color);cursor:var(--denhaag-link-cursor,pointer);font-family:inherit;font-size:inherit;font-weight:inherit;line-height:inherit;padding-inline-end:var(--denhaag-link-padding-inline-end,0);padding-inline-start:var(--denhaag-link-padding-inline-start,0);position:relative;text-decoration:var(--denhaag-link-text-decoration)}.denhaag-link--with-icon{align-items:center;display:inline-flex;gap:var(--denhaag-link-icon-gap);text-decoration:none;vertical-align:var(--denhaag-link-with-icon-vertical-align,baseline)}.denhaag-link--with-small-icon{--denhaag-link-icon-font-size:var(--denhaag-link-small-icon-font-size);--denhaag-link-icon-size:var(--denhaag-link-small-icon-size)}.denhaag-link--with-icon-start{--denhaag-link-icon-order:0;--denhaag-link-padding-inline-start:0}.denhaag-link--external,.denhaag-link--focus,.denhaag-link--hover,.denhaag-link:focus-visible,.denhaag-link:hover{text-decoration:var(--denhaag-link-text-decoration)}.denhaag-link--with-icon-end{--denhaag-link-icon-order:2;--denhaag-link-padding-inline-end:0}.denhaag-link--external{--denhaag-link-icon-align:var(--denhaag-link-external-icon-align)}.denhaag-link--focus,.denhaag-link:focus-visible{--denhaag-link-color:var(--denhaag-link-focus-color);outline:var(--denhaag-link-focus-outline)}.denhaag-link--hover,.denhaag-link:hover{--denhaag-link-color:var(--denhaag-link-hover-color);--denhaag-link-cursor:pointer}.denhaag-link--disabled,.denhaag-link--disabled--hover,.denhaag-link--disabled:hover{--denhaag-link-color:var(--denhaag-link-disabled-color);--denhaag-link-cursor:none;pointer-events:none}.denhaag-link__icon{align-items:var(--denhaag-link-icon-align);display:inline-flex;height:var(--denhaag-link-icon-size);justify-content:center;order:var(--denhaag-link-icon-order,0);position:relative;vertical-align:text-top;width:var(--denhaag-link-icon-size)}li .denhaag-link__icon{align-self:start;flex:1 0 auto}.denhaag-link__icon>:first-child{aspect-ratio:1/1;font-size:var(--denhaag-link-icon-font-size);height:var(--denhaag-link-icon-size);left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);width:var(--denhaag-link-icon-size)}.denhaag-link__sr-only{clip:rect(0,0,0,0);border:0;height:1px;margin-block-end:-1px;margin-block-start:-1px;margin-inline-end:-1px;margin-inline-start:-1px;overflow:hidden;padding-block-end:0;padding-block-start:0;padding-inline-end:0;padding-inline-start:0;position:absolute;width:1px}");var Link=function(_a){var href=_a.href,id=_a.id,_b=_a.children,children=void 0===_b?void 0:_b,_c=_a.disabled,disabled=void 0!==_c&&_c,_d=_a.icon,icon=void 0===_d?void 0:_d,_e=_a.iconAlign,iconAlign=void 0===_e?"end":_e,_f=_a.tabIndex,tabIndex=void 0===_f?0:_f,props=function __rest(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t}(_a,["href","id","children","disabled","icon","iconAlign","tabIndex"]),rootClassNames=clsx("denhaag-link",{"denhaag-link--disabled":disabled,"denhaag-link--with-icon":void 0!==icon,"denhaag-link--with-icon-start":void 0!==icon&&"start"===iconAlign,"denhaag-link--with-icon-end":void 0!==icon&&"end"===iconAlign},props.className),iconClassName=clsx("denhaag-link__icon"),iconWrapped=react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:iconClassName},icon);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",__assign({id,href,tabIndex:disabled?-1:tabIndex},props,{className:rootClassNames}),void 0!==icon&&"start"===iconAlign?iconWrapped:"",react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null,children),void 0!==icon&&"end"===iconAlign?iconWrapped:"")}},"../../components/Typography/dist/mjs/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{S0:()=>LeadParagraph,XJ:()=>Heading2,aC:()=>Heading3,by:()=>Heading5,k8:()=>Heading4,nL:()=>Heading1,nv:()=>Paragraph});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function styleInject(css,ref){void 0===ref&&(ref={});var insertAt=ref.insertAt;if(css&&"undefined"!=typeof document){var head=document.head||document.getElementsByTagName("head")[0],style=document.createElement("style");style.type="text/css","top"===insertAt&&head.firstChild?head.insertBefore(style,head.firstChild):head.appendChild(style),style.styleSheet?style.styleSheet.cssText=css:style.appendChild(document.createTextNode(css))}}styleInject(".utrecht-heading-1{break-inside:avoid-column;color:var(--utrecht-heading-1-color,var(--utrecht-heading-color,var(--utrecht-document-color,inherit)));font-family:var(--utrecht-heading-1-font-family,var(--utrecht-heading-font-family,var(--utrecht-document-font-family)));font-size:var(--utrecht-heading-1-font-size,revert);font-weight:var(--utrecht-heading-1-font-weight,var(--utrecht-heading-font-weight,bold));line-height:var(--utrecht-heading-1-line-height);margin-block-end:calc(var(--utrecht-space-around, 0)*var(--utrecht-heading-1-margin-block-end, 0));margin-block-start:calc(var(--utrecht-space-around, 0)*var(--utrecht-heading-1-margin-block-start, 0));page-break-after:avoid;page-break-inside:avoid}.utrecht-heading-1--distanced{--utrecht-space-around:1}.utrecht-heading-2{break-inside:avoid-column;color:var(--utrecht-heading-2-color,var(--utrecht-heading-color,var(--utrecht-document-color,inherit)));font-family:var(--utrecht-heading-2-font-family,var(--utrecht-heading-font-family,var(--utrecht-document-font-family)));font-size:var(--utrecht-heading-2-font-size,revert);font-weight:var(--utrecht-heading-2-font-weight,var(--utrecht-heading-font-weight,bold));line-height:var(--utrecht-heading-2-line-height);margin-block-end:calc(var(--utrecht-space-around, 0)*var(--utrecht-heading-2-margin-block-end, 0));margin-block-start:calc(var(--utrecht-space-around, 0)*var(--utrecht-heading-2-margin-block-start, 0));page-break-after:avoid;page-break-inside:avoid}.utrecht-heading-2--distanced{--utrecht-space-around:1}.utrecht-heading-3{break-inside:avoid-column;color:var(--utrecht-heading-3-color,var(--utrecht-heading-color,var(--utrecht-document-color,inherit)));font-family:var(--utrecht-heading-3-font-family,var(--utrecht-heading-font-family,var(--utrecht-document-font-family)));font-size:var(--utrecht-heading-3-font-size,revert);font-weight:var(--utrecht-heading-3-font-weight,var(--utrecht-heading-font-weight,bold));line-height:var(--utrecht-heading-3-line-height);margin-block-end:calc(var(--utrecht-space-around, 0)*var(--utrecht-heading-3-margin-block-end, 0));margin-block-start:calc(var(--utrecht-space-around, 0)*var(--utrecht-heading-3-margin-block-start, 0));page-break-after:avoid;page-break-inside:avoid}.utrecht-heading-3--distanced{--utrecht-space-around:1}.utrecht-heading-4{break-inside:avoid-column;color:var(--utrecht-heading-4-color,var(--utrecht-heading-color,var(--utrecht-document-color,inherit)));font-family:var(--utrecht-heading-4-font-family,var(--utrecht-heading-font-family,var(--utrecht-document-font-family)));font-size:var(--utrecht-heading-4-font-size,revert);font-weight:var(--utrecht-heading-4-font-weight,var(--utrecht-heading-font-weight,bold));line-height:var(--utrecht-heading-4-line-height);margin-block-end:calc(var(--utrecht-space-around, 0)*var(--utrecht-heading-4-margin-block-end, 0));margin-block-start:calc(var(--utrecht-space-around, 0)*var(--utrecht-heading-4-margin-block-start, 0));page-break-after:avoid;page-break-inside:avoid}.utrecht-heading-4--distanced{--utrecht-space-around:1}.utrecht-heading-5{break-inside:avoid-column;color:var(--utrecht-heading-5-color,var(--utrecht-heading-color,var(--utrecht-document-color,inherit)));font-family:var(--utrecht-heading-5-font-family,var(--utrecht-heading-font-family,var(--utrecht-document-font-family)));font-size:var(--utrecht-heading-5-font-size,revert);font-weight:var(--utrecht-heading-5-font-weight,var(--utrecht-heading-font-weight,bold));line-height:var(--utrecht-heading-5-line-height);margin-block-end:calc(var(--utrecht-space-around, 0)*var(--utrecht-heading-5-margin-block-end, 0));margin-block-start:calc(var(--utrecht-space-around, 0)*var(--utrecht-heading-5-margin-block-start, 0));page-break-after:avoid;page-break-inside:avoid}.utrecht-heading-5--distanced{--utrecht-space-around:1}.utrecht-heading-1,.utrecht-heading-2,.utrecht-heading-3,.utrecht-heading-4,.utrecht-heading-5{--utrecht-space-around:1;font-family:var(--utrecht-heading-font-family)}@media (width <= 768px){.denhaag-theme{--utrecht-heading-1-font-size:var(--denhaag-typography-mobile-scale-3xl-font-size);--utrecht-heading-2-font-size:var(--denhaag-typography-mobile-scale-2xl-font-size);--utrecht-heading-3-font-size:var(--denhaag-typography-mobile-scale-xl-font-size)}}.utrecht-paragraph{color:var(--utrecht-paragraph-color,var(--utrecht-document-color,inherit));font-family:var(--utrecht-paragraph-font-family,var(--utrecht-document-font-family,inherit));font-size:var(--utrecht-paragraph-font-size,var(--utrecht-document-font-size,inherit));font-weight:var(--utrecht-paragraph-font-weight,inherit);line-height:var(--utrecht-paragraph-line-height,var(--utrecht-document-line-height,inherit));margin-block-end:calc(var(--utrecht-space-around, 0)*var(--utrecht-paragraph-margin-block-end, 0));margin-block-start:calc(var(--utrecht-space-around, 0)*var(--utrecht-paragraph-margin-block-start, 0))}.utrecht-paragraph--lead{color:var(--utrecht-paragraph-lead-color,var(--utrecht-paragraph-color,var(--utrecht-document-color,inherit)));font-size:var(--utrecht-paragraph-lead-font-size,var(--utrecht-paragraph-font-size,inherit));font-weight:var(--utrecht-paragraph-lead-font-weight,var(--utrecht-paragraph-font-weight,inherit));line-height:var(--utrecht-paragraph-lead-line-height,var(--utrecht-paragraph-line-height,inherit))}.utrecht-paragraph--small{color:var(--utrecht-paragraph-small-color,var(--utrecht-paragraph-color,var(--utrecht-document-color,inherit)));font-size:var(--utrecht-paragraph-small-font-size,var(--utrecht-paragraph-font-size,inherit));font-weight:var(--utrecht-paragraph-small-font-weight,var(--utrecht-paragraph-font-weight,inherit));line-height:var(--utrecht-paragraph-small-line-height,var(--utrecht-paragraph-line-height,inherit))}.utrecht-paragraph__small{font-size:inherit}.utrecht-paragraph__b{font-weight:inherit}.utrecht-paragraph,.utrecht-paragraph--distanced{--utrecht-space-around:1}.utrecht-paragraph--denhaag-detail{--utrecht-paragraph-font-family:var(--denhaag-posttypelabel-font-family,inherit);--utrecht-paragraph-font-size:var(--denhaag-posttypelabel-font-size,0.75rem);--utrecht-paragraph-line-height:var(--denhaag-posttypelabel-line-height,1.5);letter-spacing:var(--denhaag-posttypelabel-letter-spacing,1px);text-transform:var(--denhaag-posttypelabel-text-transform,uppercase)}.utrecht-paragraph+.utrecht-paragraph{--utrecht-paragraph-margin-block-start:var(--utrecht-paragraph-paragraph-margin-block-start,inherit)}.utrecht-paragraph--lead+.utrecht-paragraph{--utrecht-paragraph-margin-block-start:var(--utrecht-paragraph-lead-paragraph-margin-block-start,inherit)}.denhaag-list+.utrecht-paragraph,.denhaag-list__wrapper+.utrecht-paragraph,.denhaag-ordered-list+.utrecht-paragraph,.denhaag-unordered-list+.utrecht-paragraph{--utrecht-paragraph-margin-block-start:var(--utrecht-paragraph-list-margin-block-start,inherit)}.denhaag-list+.utrecht-paragraph--lead,.denhaag-list__wrapper+.utrecht-paragraph--lead,.denhaag-ordered-list+.utrecht-paragraph--lead,.denhaag-unordered-list+.utrecht-paragraph--lead{--utrecht-paragraph-margin-block-start:var(--utrecht-paragraph-lead-list-margin-block-start,inherit)}");styleInject(".utrecht-heading-1{break-inside:avoid-column;color:var(--utrecht-heading-1-color,var(--utrecht-heading-color,var(--utrecht-document-color,inherit)));font-family:var(--utrecht-heading-1-font-family,var(--utrecht-heading-font-family,var(--utrecht-document-font-family)));font-size:var(--utrecht-heading-1-font-size,revert);font-weight:var(--utrecht-heading-1-font-weight,var(--utrecht-heading-font-weight,bold));line-height:var(--utrecht-heading-1-line-height);margin-block-end:calc(var(--utrecht-space-around, 0)*var(--utrecht-heading-1-margin-block-end, 0));margin-block-start:calc(var(--utrecht-space-around, 0)*var(--utrecht-heading-1-margin-block-start, 0));page-break-after:avoid;page-break-inside:avoid}.utrecht-heading-1--distanced{--utrecht-space-around:1}.utrecht-heading-2{break-inside:avoid-column;color:var(--utrecht-heading-2-color,var(--utrecht-heading-color,var(--utrecht-document-color,inherit)));font-family:var(--utrecht-heading-2-font-family,var(--utrecht-heading-font-family,var(--utrecht-document-font-family)));font-size:var(--utrecht-heading-2-font-size,revert);font-weight:var(--utrecht-heading-2-font-weight,var(--utrecht-heading-font-weight,bold));line-height:var(--utrecht-heading-2-line-height);margin-block-end:calc(var(--utrecht-space-around, 0)*var(--utrecht-heading-2-margin-block-end, 0));margin-block-start:calc(var(--utrecht-space-around, 0)*var(--utrecht-heading-2-margin-block-start, 0));page-break-after:avoid;page-break-inside:avoid}.utrecht-heading-2--distanced{--utrecht-space-around:1}.utrecht-heading-3{break-inside:avoid-column;color:var(--utrecht-heading-3-color,var(--utrecht-heading-color,var(--utrecht-document-color,inherit)));font-family:var(--utrecht-heading-3-font-family,var(--utrecht-heading-font-family,var(--utrecht-document-font-family)));font-size:var(--utrecht-heading-3-font-size,revert);font-weight:var(--utrecht-heading-3-font-weight,var(--utrecht-heading-font-weight,bold));line-height:var(--utrecht-heading-3-line-height);margin-block-end:calc(var(--utrecht-space-around, 0)*var(--utrecht-heading-3-margin-block-end, 0));margin-block-start:calc(var(--utrecht-space-around, 0)*var(--utrecht-heading-3-margin-block-start, 0));page-break-after:avoid;page-break-inside:avoid}.utrecht-heading-3--distanced{--utrecht-space-around:1}.utrecht-heading-4{break-inside:avoid-column;color:var(--utrecht-heading-4-color,var(--utrecht-heading-color,var(--utrecht-document-color,inherit)));font-family:var(--utrecht-heading-4-font-family,var(--utrecht-heading-font-family,var(--utrecht-document-font-family)));font-size:var(--utrecht-heading-4-font-size,revert);font-weight:var(--utrecht-heading-4-font-weight,var(--utrecht-heading-font-weight,bold));line-height:var(--utrecht-heading-4-line-height);margin-block-end:calc(var(--utrecht-space-around, 0)*var(--utrecht-heading-4-margin-block-end, 0));margin-block-start:calc(var(--utrecht-space-around, 0)*var(--utrecht-heading-4-margin-block-start, 0));page-break-after:avoid;page-break-inside:avoid}.utrecht-heading-4--distanced{--utrecht-space-around:1}.utrecht-heading-5{break-inside:avoid-column;color:var(--utrecht-heading-5-color,var(--utrecht-heading-color,var(--utrecht-document-color,inherit)));font-family:var(--utrecht-heading-5-font-family,var(--utrecht-heading-font-family,var(--utrecht-document-font-family)));font-size:var(--utrecht-heading-5-font-size,revert);font-weight:var(--utrecht-heading-5-font-weight,var(--utrecht-heading-font-weight,bold));line-height:var(--utrecht-heading-5-line-height);margin-block-end:calc(var(--utrecht-space-around, 0)*var(--utrecht-heading-5-margin-block-end, 0));margin-block-start:calc(var(--utrecht-space-around, 0)*var(--utrecht-heading-5-margin-block-start, 0));page-break-after:avoid;page-break-inside:avoid}.utrecht-heading-5--distanced{--utrecht-space-around:1}.utrecht-heading-1,.utrecht-heading-2,.utrecht-heading-3,.utrecht-heading-4,.utrecht-heading-5{--utrecht-space-around:1;font-family:var(--utrecht-heading-font-family)}@media (width <= 768px){.denhaag-theme{--utrecht-heading-1-font-size:var(--denhaag-typography-mobile-scale-3xl-font-size);--utrecht-heading-2-font-size:var(--denhaag-typography-mobile-scale-2xl-font-size);--utrecht-heading-3-font-size:var(--denhaag-typography-mobile-scale-xl-font-size)}}");function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}styleInject(":root:not(:root){--utrecht-space-around:1}:root *+.utrecht-heading-1,:root *+.utrecht-heading-2,:root *+.utrecht-heading-3,:root *+.utrecht-heading-4,:root *+.utrecht-heading-5,:root *+.utrecht-heading-6{--utrecht-heading-1-margin-block-start:1.125em}:root .utrecht-heading-1:first-child{--utrecht-heading-1-margin-block-start:0}:root .utrecht-heading-2:first-child{--utrecht-heading-2-margin-block-start:0}:root .utrecht-heading-3:first-child{--utrecht-heading-3-margin-block-start:0}:root .utrecht-heading-4:first-child{--utrecht-heading-4-margin-block-start:0}:root .utrecht-heading-5:first-child{--utrecht-heading-5-margin-block-start:0}:root .utrecht-heading-6:first-child{--utrecht-heading-6-margin-block-start:0}:root .utrecht-heading-1+.utrecht-paragraph{--utrecht-paragraph-margin-block-start:calc(var(--utrecht-heading-1-font-size)/4)}:root .utrecht-heading-2+.utrecht-paragraph{--utrecht-paragraph-margin-block-start:calc(var(--utrecht-heading-2-font-size)/4)}:root .utrecht-heading-3+.utrecht-paragraph{--utrecht-paragraph-margin-block-start:calc(var(--utrecht-heading-3-font-size)/4)}:root .utrecht-heading-4+.utrecht-paragraph{--utrecht-paragraph-margin-block-start:calc(var(--utrecht-heading-4-font-size)/4)}:root .utrecht-heading-5+.utrecht-paragraph{--utrecht-paragraph-margin-block-start:calc(var(--utrecht-heading-5-font-size)/4)}:root .utrecht-paragraph+.utrecht-paragraph{--utrecht-paragraph-margin-block-start:var(--utrecht-paragraph-paragraph-margin-block-start)}:root .utrecht-paragraph--lead+.utrecht-paragraph{--utrecht-paragraph-margin-block-start:var(--utrecht-paragraph-lead-paragraph-margin-block-start)}:root .denhaag-list+.utrecht-paragraph,:root .denhaag-list__wrapper+.utrecht-paragraph,:root .denhaag-ordered-list+.utrecht-paragraph,:root .denhaag-unordered-list+.utrecht-paragraph{--utrecht-paragraph-margin-block-start:var(--utrecht-paragraph-list-margin-block-start)}:root .denhaag-list+.utrecht-paragraph--lead,:root .denhaag-list__wrapper+.utrecht-paragraph--lead,:root .denhaag-ordered-list+.utrecht-paragraph--lead,:root .denhaag-unordered-list+.utrecht-paragraph--lead{--utrecht-paragraph-margin-block-start:var(--utrecht-paragraph-lead-list-margin-block-start)}");var Heading1=function(props){var rootClassNames=clsx("utrecht-heading-1",props.className);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1",{className:rootClassNames},props.children)},Heading2=function(props){var rootClassNames=clsx("utrecht-heading-2",props.className);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2",{className:rootClassNames},props.children)},Heading3=function(props){var rootClassNames=clsx("utrecht-heading-3",props.className);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3",{className:rootClassNames},props.children)},Heading4=function(props){var rootClassNames=clsx("utrecht-heading-4",props.className);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4",{className:rootClassNames},props.children)},Heading5=function(props){var rootClassNames=clsx("utrecht-heading-5",props.className);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5",{className:rootClassNames},props.children)};styleInject(".utrecht-paragraph{color:var(--utrecht-paragraph-color,var(--utrecht-document-color,inherit));font-family:var(--utrecht-paragraph-font-family,var(--utrecht-document-font-family,inherit));font-size:var(--utrecht-paragraph-font-size,var(--utrecht-document-font-size,inherit));font-weight:var(--utrecht-paragraph-font-weight,inherit);line-height:var(--utrecht-paragraph-line-height,var(--utrecht-document-line-height,inherit));margin-block-end:calc(var(--utrecht-space-around, 0)*var(--utrecht-paragraph-margin-block-end, 0));margin-block-start:calc(var(--utrecht-space-around, 0)*var(--utrecht-paragraph-margin-block-start, 0))}.utrecht-paragraph--lead{color:var(--utrecht-paragraph-lead-color,var(--utrecht-paragraph-color,var(--utrecht-document-color,inherit)));font-size:var(--utrecht-paragraph-lead-font-size,var(--utrecht-paragraph-font-size,inherit));font-weight:var(--utrecht-paragraph-lead-font-weight,var(--utrecht-paragraph-font-weight,inherit));line-height:var(--utrecht-paragraph-lead-line-height,var(--utrecht-paragraph-line-height,inherit))}.utrecht-paragraph--small{color:var(--utrecht-paragraph-small-color,var(--utrecht-paragraph-color,var(--utrecht-document-color,inherit)));font-size:var(--utrecht-paragraph-small-font-size,var(--utrecht-paragraph-font-size,inherit));font-weight:var(--utrecht-paragraph-small-font-weight,var(--utrecht-paragraph-font-weight,inherit));line-height:var(--utrecht-paragraph-small-line-height,var(--utrecht-paragraph-line-height,inherit))}.utrecht-paragraph__small{font-size:inherit}.utrecht-paragraph__b{font-weight:inherit}.utrecht-paragraph,.utrecht-paragraph--distanced{--utrecht-space-around:1}.utrecht-paragraph--denhaag-detail{--utrecht-paragraph-font-family:var(--denhaag-posttypelabel-font-family,inherit);--utrecht-paragraph-font-size:var(--denhaag-posttypelabel-font-size,0.75rem);--utrecht-paragraph-line-height:var(--denhaag-posttypelabel-line-height,1.5);letter-spacing:var(--denhaag-posttypelabel-letter-spacing,1px);text-transform:var(--denhaag-posttypelabel-text-transform,uppercase)}.utrecht-paragraph+.utrecht-paragraph{--utrecht-paragraph-margin-block-start:var(--utrecht-paragraph-paragraph-margin-block-start,inherit)}.utrecht-paragraph--lead+.utrecht-paragraph{--utrecht-paragraph-margin-block-start:var(--utrecht-paragraph-lead-paragraph-margin-block-start,inherit)}.denhaag-list+.utrecht-paragraph,.denhaag-list__wrapper+.utrecht-paragraph,.denhaag-ordered-list+.utrecht-paragraph,.denhaag-unordered-list+.utrecht-paragraph{--utrecht-paragraph-margin-block-start:var(--utrecht-paragraph-list-margin-block-start,inherit)}.denhaag-list+.utrecht-paragraph--lead,.denhaag-list__wrapper+.utrecht-paragraph--lead,.denhaag-ordered-list+.utrecht-paragraph--lead,.denhaag-unordered-list+.utrecht-paragraph--lead{--utrecht-paragraph-margin-block-start:var(--utrecht-paragraph-lead-list-margin-block-start,inherit)}");var Paragraph=function(props){var rootClassNames=clsx("utrecht-paragraph",props.className);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",{className:rootClassNames}," ",props.children)},LeadParagraph=function(props){var rootClassNames=clsx("utrecht-paragraph","utrecht-paragraph--lead",props.className);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",{className:rootClassNames},props.children)}},"./src/react/Link.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__,disabled:()=>disabled,iconEnd:()=>iconEnd,iconStart:()=>iconStart});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var _gemeente_denhaag_icons__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../components/Icons/dist/mjs/index.js"),_gemeente_denhaag_typography__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../components/Typography/dist/mjs/index.js"),_gemeente_denhaag_link__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../components/Link/dist/mjs/index.js"),_components_Link_README_md__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../components/Link/README.md"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={id:"react-navigation-link",title:"React/Navigation/Link",component:_gemeente_denhaag_link__WEBPACK_IMPORTED_MODULE_3__.r,args:{href:"#"},tags:["autodocs"],parameters:{docs:{description:{component:_components_Link_README_md__WEBPACK_IMPORTED_MODULE_4__}}}},Default={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_gemeente_denhaag_typography__WEBPACK_IMPORTED_MODULE_2__.nv,{children:["It is possible to put ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_gemeente_denhaag_link__WEBPACK_IMPORTED_MODULE_3__.r,{...args,children:"a link"})," in a Paragraph element."]})},disabled={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_gemeente_denhaag_typography__WEBPACK_IMPORTED_MODULE_2__.nv,{children:["It is possible to put"," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_gemeente_denhaag_link__WEBPACK_IMPORTED_MODULE_3__.r,{disabled:!0,...args,children:"a link"})," ","in a Paragraph element."]})},iconStart={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_gemeente_denhaag_typography__WEBPACK_IMPORTED_MODULE_2__.nv,{children:["It is possible to put"," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_gemeente_denhaag_link__WEBPACK_IMPORTED_MODULE_3__.r,{icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_gemeente_denhaag_icons__WEBPACK_IMPORTED_MODULE_1__.ArrowLeftIcon,{}),iconAlign:"start",...args,children:"a link"})," ","in a Paragraph element."]})},iconEnd={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_gemeente_denhaag_typography__WEBPACK_IMPORTED_MODULE_2__.nv,{children:["It is possible to put"," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_gemeente_denhaag_link__WEBPACK_IMPORTED_MODULE_3__.r,{icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_gemeente_denhaag_icons__WEBPACK_IMPORTED_MODULE_1__.ArrowRightIcon,{}),...args,children:"a link"})," ","in a Paragraph element."]})};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: args => <Paragraph>\n      It is possible to put <Link {...args}>a link</Link> in a Paragraph element.\n    </Paragraph>\n}",...Default.parameters?.docs?.source}}},disabled.parameters={...disabled.parameters,docs:{...disabled.parameters?.docs,source:{originalSource:"{\n  render: args => <Paragraph>\n      It is possible to put{' '}\n      <Link disabled {...args}>\n        a link\n      </Link>{' '}\n      in a Paragraph element.\n    </Paragraph>\n}",...disabled.parameters?.docs?.source}}},iconStart.parameters={...iconStart.parameters,docs:{...iconStart.parameters?.docs,source:{originalSource:"{\n  render: args => <Paragraph>\n      It is possible to put{' '}\n      <Link icon={<ArrowLeftIcon />} iconAlign=\"start\" {...args}>\n        a link\n      </Link>{' '}\n      in a Paragraph element.\n    </Paragraph>\n}",...iconStart.parameters?.docs?.source}}},iconEnd.parameters={...iconEnd.parameters,docs:{...iconEnd.parameters?.docs,source:{originalSource:"{\n  render: args => <Paragraph>\n      It is possible to put{' '}\n      <Link icon={<ArrowRightIcon />} {...args}>\n        a link\n      </Link>{' '}\n      in a Paragraph element.\n    </Paragraph>\n}",...iconEnd.parameters?.docs?.source}}};const __namedExportsOrder=["Default","disabled","iconStart","iconEnd"]},"../../components/Link/README.md":module=>{module.exports="# Navigation Link\n\n![npm (scoped)](https://img.shields.io/npm/v/@gemeente-denhaag/link?logo=npm&style=flat-square)\n![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/nl-design-system/denhaag/Build%20and%20deploy%20Storybook%20to%20Azure%20Web%20App/main?logo=github&style=flat-square)\n\n[Figma Design](https://www.figma.com/file/JpoY3waVoQGlLQzQXTL9nn/Design-System-Gemeente-Den-Haag?node-id=1485%3A1156)\n\nLinks are used as navigational elements. They may appear on their own, within a sentence or paragraph, or directly following the content.\n\n## When to use\n\nLinks are used as navigational elements and can be used on their own or inline with text. They provide a lightweight option for navigation but like other interactive elements, too many links will clutter a page and make it difficult for users to identify their next steps. This is especially true for inline links, which should be used sparingly.\n\nUse links when you want users to:\n\n- Navigate to a different page within the website\n- Navigate to an entirely different site\n- Link to emails or phone numbers\n\n## Alternatives and related components\n\nUse `Button` for actions that don’t appear within or directly following a sentence.\n\n[Navigate to Button](../?path=/docs/components-input-button--default)\n\n## Anatomy\n\nThe navigation link consists of:\n\n1. Label: communicates what is being linked to\n2. Icon (optional): this icon gives the label extra guidance\n\n## (Interactive) states\n\nThe navigation link contains the states normal, hover, disabled and focus.\n\n## Design properties\n\n## Typography\n\n- Label: TheSans/md/400\n\n### Color\n\n- Label: text color Blue/3\n- Icon: svg color Blue/3\n\n### Interactive states\n\n- Hover: label text color Blue/4, icon svg color Blue/4\n- Disabled: label text color Grey/2, icon svg color Grey/2\n- Focus: label text color Blue/4, icon svg color Blue/4, border color Ocher/5\n\n### Structure\n\n- Label: padding-top and padding-bottom 8px\n- Icon: height and width 20px\n- Icon-left: padding-right 8px\n- Icon-right: padding-left 8px\n\n## Best practices\n\n### Buttons versus navigation links\n\nNavigation links are used primarily for navigation, and usually appear within or directly following a sentence.\n\nButtons are used primarily for actions, such as “Add”, “Close”, “Cancel”, or “Save”. Plain buttons, which look similar to links, are used for less important or less commonly used actions, such as “view settings”.\n\n### Do's\n\nNavigation links should:\n\n- Be placed at the end of sentences where possible\n- Clearly explain where the link will take you to\n- Front-load the most relevant keyword\n- Be understandable out of context\n\n### Don'ts\n\nNavigation links should:\n\n- Never use a button in place of a link\n- Not use vague or generic labels for links\n- Not open internal link in a new tab\n\n## References\n\nhttps://www.interaction-design.org/literature/article/tips-for-better-hyperlink-ux <br/>\nhttps://blog.prototypr.io/a-guide-to-designing-perfect-links-in-ux-414558f35730 <br/>\nhttps://uxplanet.org/dos-and-don-ts-of-web-design-8c9d6a5de7c6 <br/>\nhttps://www.nngroup.com/articles/writing-links/\n"}}]);