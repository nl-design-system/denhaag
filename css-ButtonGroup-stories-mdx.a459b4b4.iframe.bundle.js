(self.webpackChunk_gemeente_denhaag_storybook=self.webpackChunk_gemeente_denhaag_storybook||[]).push([[3879],{"../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/css/ButtonGroup.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>ButtonGroup_stories,multiple:()=>multiple,single:()=>single});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var lib=__webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.6.7_@types+react-dom@18.2.18_@types+react@18.2.47_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs");__webpack_require__("../../components/Button/dist/mjs/index.js"),__webpack_require__("../../components/ButtonGroup/dist/mjs/index.js"),__webpack_require__("../../components/Icons/dist/mjs/index.js");const package_namespaceObject=JSON.parse('{"u2":"@gemeente-denhaag/button-group","i8":"0.1.1-alpha.235"}'),README_namespaceObject="# Button Group\n\nButton groups are used to group buttons.\n\n## When to use\n\nMainly used to wrap buttons in the Gutenberg Editor of WordPress.\n\n## Anatomy\n\nThe button group consists of:\n\n1. Container\n";var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h2:"h2",h3:"h3",div:"div",button:"button",span:"span",svg:"svg",path:"path"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"CSS/Input/Button Group",parameters:{componentSubtitle:`${package_namespaceObject.u2} - ${package_namespaceObject.i8}`,docs:{source:{type:"dynamic"}},status:{type:"WORK IN PROGRESS"}}}),"\n",(0,jsx_runtime.jsx)(dist.dk,{markdown:README_namespaceObject}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"stories",children:"Stories"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"single",children:"Single"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Single",children:()=>(0,jsx_runtime.jsx)(_components.div,{class:"denhaag-button-group",children:(0,jsx_runtime.jsxs)(_components.button,{class:"denhaag-button denhaag-button--secondary-action denhaag-button--start-icon",children:[(0,jsx_runtime.jsx)(_components.span,{class:"denhaag-button__icon",children:(0,jsx_runtime.jsx)(_components.svg,{width:"1em",height:"1em",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",class:"denhaag-icon",focusable:"false","aria-hidden":"true",children:(0,jsx_runtime.jsx)(_components.path,{d:"M11.707 18.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 111.414 1.414L7.414 11H19a1 1 0 110 2H7.414l4.293 4.293a1 1 0 010 1.414z"})})}),"Button"]})})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"multiple",children:"Multiple"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Multiple",children:()=>(0,jsx_runtime.jsxs)(_components.div,{class:"denhaag-button-group",children:[(0,jsx_runtime.jsxs)(_components.button,{class:"denhaag-button denhaag-button--secondary-action denhaag-button--start-icon",children:[(0,jsx_runtime.jsx)(_components.span,{class:"denhaag-button__icon",children:(0,jsx_runtime.jsx)(_components.svg,{width:"1em",height:"1em",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",class:"denhaag-icon",focusable:"false","aria-hidden":"true",children:(0,jsx_runtime.jsx)(_components.path,{d:"M11.707 18.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 111.414 1.414L7.414 11H19a1 1 0 110 2H7.414l4.293 4.293a1 1 0 010 1.414z"})})}),"Button"]}),(0,jsx_runtime.jsxs)(_components.button,{class:"denhaag-button denhaag-button--secondary-action denhaag-button--start-icon",children:[(0,jsx_runtime.jsx)(_components.span,{class:"denhaag-button__icon",children:(0,jsx_runtime.jsx)(_components.svg,{width:"1em",height:"1em",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",class:"denhaag-icon",focusable:"false","aria-hidden":"true",children:(0,jsx_runtime.jsx)(_components.path,{d:"M11.707 18.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 111.414 1.414L7.414 11H19a1 1 0 110 2H7.414l4.293 4.293a1 1 0 010 1.414z"})})}),"Button"]})]})})})]})}const single=()=>(0,jsx_runtime.jsx)("div",{class:"denhaag-button-group",children:(0,jsx_runtime.jsxs)("button",{class:"denhaag-button denhaag-button--secondary-action denhaag-button--start-icon",children:[(0,jsx_runtime.jsx)("span",{class:"denhaag-button__icon",children:(0,jsx_runtime.jsx)("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",class:"denhaag-icon",focusable:"false","aria-hidden":"true",children:(0,jsx_runtime.jsx)("path",{d:"M11.707 18.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 111.414 1.414L7.414 11H19a1 1 0 110 2H7.414l4.293 4.293a1 1 0 010 1.414z"})})}),"Button"]})});single.storyName="Single",single.parameters={storySource:{source:'() => <div class="denhaag-button-group">\n        <button class={"denhaag-button denhaag-button--secondary-action denhaag-button--start-icon"}>\n          <span class={"denhaag-button__icon"}>\n            <svg width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="denhaag-icon" focusable="false" aria-hidden="true">\n              <path d="M11.707 18.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 111.414 1.414L7.414 11H19a1 1 0 110 2H7.414l4.293 4.293a1 1 0 010 1.414z"></path>\n            </svg>\n          </span>\n          Button\n        </button>\n      </div>'}};const multiple=()=>(0,jsx_runtime.jsxs)("div",{class:"denhaag-button-group",children:[(0,jsx_runtime.jsxs)("button",{class:"denhaag-button denhaag-button--secondary-action denhaag-button--start-icon",children:[(0,jsx_runtime.jsx)("span",{class:"denhaag-button__icon",children:(0,jsx_runtime.jsx)("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",class:"denhaag-icon",focusable:"false","aria-hidden":"true",children:(0,jsx_runtime.jsx)("path",{d:"M11.707 18.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 111.414 1.414L7.414 11H19a1 1 0 110 2H7.414l4.293 4.293a1 1 0 010 1.414z"})})}),"Button"]}),(0,jsx_runtime.jsxs)("button",{class:"denhaag-button denhaag-button--secondary-action denhaag-button--start-icon",children:[(0,jsx_runtime.jsx)("span",{class:"denhaag-button__icon",children:(0,jsx_runtime.jsx)("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",class:"denhaag-icon",focusable:"false","aria-hidden":"true",children:(0,jsx_runtime.jsx)("path",{d:"M11.707 18.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 111.414 1.414L7.414 11H19a1 1 0 110 2H7.414l4.293 4.293a1 1 0 010 1.414z"})})}),"Button"]})]});multiple.storyName="Multiple",multiple.parameters={storySource:{source:'() => <div class="denhaag-button-group">\n        <button class={"denhaag-button denhaag-button--secondary-action denhaag-button--start-icon"}>\n          <span class={"denhaag-button__icon"}>\n            <svg width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="denhaag-icon" focusable="false" aria-hidden="true">\n              <path d="M11.707 18.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 111.414 1.414L7.414 11H19a1 1 0 110 2H7.414l4.293 4.293a1 1 0 010 1.414z"></path>\n            </svg>\n          </span>\n          Button\n        </button>\n        <button class={"denhaag-button denhaag-button--secondary-action denhaag-button--start-icon"}>\n          <span class={"denhaag-button__icon"}>\n            <svg width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="denhaag-icon" focusable="false" aria-hidden="true">\n              <path d="M11.707 18.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 111.414 1.414L7.414 11H19a1 1 0 110 2H7.414l4.293 4.293a1 1 0 010 1.414z"></path>\n            </svg>\n          </span>\n          Button\n        </button>\n      </div>'}};const componentMeta={title:"CSS/Input/Button Group",parameters:{componentSubtitle:`${package_namespaceObject.u2} - ${package_namespaceObject.i8}`,docs:{source:{type:"dynamic"}},status:{type:"WORK IN PROGRESS"}},tags:["stories-mdx"],includeStories:["single","multiple"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const ButtonGroup_stories=componentMeta,__namedExportsOrder=["single","multiple"]},"../../components/Button/dist/mjs/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{z:()=>Button});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__assign=function(){return __assign=Object.assign||function __assign(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)};"function"==typeof SuppressedError&&SuppressedError;var css_248z='.denhaag-button{align-items:center;background-color:var(--denhaag-button-primary-action-background-color);border:0;border-radius:var(--denhaag-button-border-radius);color:var(--denhaag-button-primary-action-color);cursor:var(--denhaag-button-cursor,default);display:inline-flex;font-family:var(--denhaag-button-font-family);font-size:var(--denhaag-typography-scale-base-font-size);font-weight:var(--denhaag-button-font-weight,400);justify-content:center;line-height:1.5;padding-block-end:var(--denhaag-button-medium-size-padding-block,var(--denhaag-button-padding-block));padding-block-start:var(--denhaag-button-medium-size-padding-block,var(--denhaag-button-padding-block));padding-inline-end:var(--denhaag-button-medium-size-padding-inline,var(--denhaag-button-padding-inline));padding-inline-start:var(--denhaag-button-medium-size-padding-inline,var(--denhaag-button-padding-inline));position:relative;text-decoration:none}a.denhaag-button{--denhaag-button-cursor:pointer}.denhaag-button--focus-visible:after,.denhaag-button--focus:after,.denhaag-button:focus-visible:after,.denhaag-button:focus:after{border:var(--denhaag-focus-border);border-radius:var(--denhaag-border-radius);bottom:-2px;content:"";display:block;left:-2px;position:absolute;right:-2px;top:-2px}.denhaag-button--focus-visible,.denhaag-button:focus-visible{outline:none}.denhaag-button--secondary-action.denhaag-button--focus:after,.denhaag-button--secondary-action:focus:after{bottom:-3px;left:-3px;right:-3px;top:-3px}.denhaag-button.denhaag-button--hover,.denhaag-button:hover{background-color:var(--denhaag-button-primary-action-hover-background-color);color:var(--denhaag-button-primary-action-hover-color)}.denhaag-button.denhaag-button--disabled,.denhaag-button.denhaag-button:disabled{background-color:var(--denhaag-button-primary-action-disabled-background-color);color:var(--denhaag-button-primary-action-disabled-color)}.denhaag-button--secondary-action{background-color:var(--denhaag-button-secondary-action-background-color);border-color:var(--denhaag-button-secondary-action-border-color);border-style:solid;border-width:var(--denhaag-button-border-width);color:var(--denhaag-button-secondary-action-color);padding-block-end:calc(var(--denhaag-button-medium-size-padding-block, var(--denhaag-button-padding-block)) - var(--denhaag-button-border-width));padding-block-start:calc(var(--denhaag-button-medium-size-padding-block, var(--denhaag-button-padding-block)) - var(--denhaag-button-border-width));padding-inline-end:calc(var(--denhaag-button-medium-size-padding-inline, var(--denhaag-button-padding-inline)) - var(--denhaag-button-border-width));padding-inline-start:calc(var(--denhaag-button-medium-size-padding-inline, var(--denhaag-button-padding-inline)) - var(--denhaag-button-border-width))}.denhaag-button--secondary-action.denhaag-button--hover,.denhaag-button--secondary-action:hover{background-color:var(--denhaag-button-secondary-action-hover-background-color);border-color:var(--denhaag-button-secondary-action-hover-border-color);color:var(--denhaag-button-secondary-action-hover-color)}.denhaag-button--secondary-action.denhaag-button--disabled,.denhaag-button--secondary-action.denhaag-button:disabled{background-color:var(--denhaag-button-secondary-action-disabled-background-color);border-color:var(--denhaag-button-secondary-action-disabled-border-color);color:var(--denhaag-button-secondary-action-disabled-color)}.denhaag-button--large{font-size:var(--denhaag-typography-scale-lg-font-size);line-height:var(--denhaag-button-large-size-line-height);padding-block-end:var(--denhaag-button-large-size-padding-block,var(--denhaag-button-padding-block));padding-block-start:var(--denhaag-button-large-size-padding-block,var(--denhaag-button-padding-block));padding-inline-end:var(--denhaag-button-large-size-padding-inline,var(--denhaag-button-padding-inline));padding-inline-start:var(--denhaag-button-large-size-padding-inline,var(--denhaag-button-padding-inline))}.denhaag-button--large.denhaag-button--secondary-action{padding-block-end:calc(var(--denhaag-button-large-size-padding-block, var(--denhaag-button-padding-block)) - var(--denhaag-button-border-width));padding-block-start:calc(var(--denhaag-button-large-size-padding-block, var(--denhaag-button-padding-block)) - var(--denhaag-button-border-width));padding-inline-end:calc(var(--denhaag-button-large-size-padding-inline, var(--denhaag-button-padding-inline)) - var(--denhaag-button-border-width));padding-inline-start:calc(var(--denhaag-button-large-size-padding-inline, var(--denhaag-button-padding-inline)) - var(--denhaag-button-border-width))}.denhaag-button__icon>:first-child{font-size:var(--denhaag-typography-scale-lg-font-size)}.denhaag-button--large .denhaag-button__icon>:first-child{font-size:var(--denhaag-typography-scale-xl-font-size)}.denhaag-button--start-icon .denhaag-button__icon{display:inherit;margin-inline-end:8px;margin-inline-start:-4px}.denhaag-button--end-icon .denhaag-button__icon{display:inherit;margin-inline-end:-4px;margin-inline-start:8px}.denhaag-button__sr-only{clip:rect(0,0,0,0);border:0;height:1px;margin-block-end:-1px;margin-block-start:-1px;margin-inline-end:-1px;margin-inline-start:-1px;overflow:hidden;padding-block-end:0;padding-block-start:0;padding-inline-end:0;padding-inline-start:0;position:absolute;width:1px}.denhaag-button--icon-only{--denhaag-button-medium-size-padding-inline:0.75rem;height:var(--denhaag-button-icon-only-height);padding-inline-end:var(--denhaag-button-medium-size-padding-inline);padding-inline-start:var(--denhaag-button-medium-size-padding-inline)}.denhaag-button--icon-only .denhaag-button__icon{height:var(--denhaag-button-icon-only-icon-height)}';const head=document.head||document.getElementsByTagName("head")[0],style=document.createElement("style");function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}style.type="text/css",style.nonce=window.NONCE,head.appendChild(style),style.styleSheet?style.styleSheet.cssText=css_248z:style.appendChild(document.createTextNode(css_248z));var Button=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function Button(_a,ref){var icon=_a.icon,className=_a.className,_b=_a.type,type=void 0===_b?"button":_b,_c=_a.iconAlign,iconAlign=void 0===_c?"start":_c,props=function __rest(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t}(_a,["icon","className","type","iconAlign"]),buttonClassNames=function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}("denhaag-button",{"denhaag-button--secondary-action":"secondary-action"===props.variant,"denhaag-button--large":"large"===props.size,"denhaag-button--start-icon":"start"===iconAlign&&void 0!==icon,"denhaag-button--end-icon":"end"===iconAlign},className),iconWrapped=void 0!==icon?react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"denhaag-button__icon"},icon):"";return react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",__assign({},props,{ref,type,className:buttonClassNames}),"start"===iconAlign?iconWrapped:"",react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"denhaag-button__label"},props.children),"end"===iconAlign?iconWrapped:"")}));Button.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"Button"}},"../../components/ButtonGroup/dist/mjs/index.js":()=>{var css_248z=".denhaag-button-group{display:flex;flex-direction:var(--denhaag-button-group-flex-direction,column);gap:var(--denhaag-button-group-gap);padding-block-end:var(--denhaag-button-group-padding,var(--denhaag-button-group-gap));padding-block-start:var(--denhaag-button-group-padding,var(--denhaag-button-group-gap))}@media (width <= 767px){.denhaag-button-group{width:100%}}@media (width >= 768px){.denhaag-button-group{--denhaag-button-group-flex-direction:row}}";const head=document.head||document.getElementsByTagName("head")[0],style=document.createElement("style");style.type="text/css",style.nonce=window.NONCE,head.appendChild(style),style.styleSheet?style.styleSheet.cssText=css_248z:style.appendChild(document.createTextNode(css_248z))},"../../node_modules/.pnpm/memoizerific@1.11.3/node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="../../node_modules/.pnpm/memoizerific@1.11.3/node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);