"use strict";(self.webpackChunk_gemeente_denhaag_storybook=self.webpackChunk_gemeente_denhaag_storybook||[]).push([[3179],{"../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/css/Divider.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>Divider_stories,defaultStory:()=>defaultStory,vertical:()=>vertical,verticalImages:()=>verticalImages});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var lib=__webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.4.0_@types+react-dom@18.2.7_@types+react@18.2.21_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs");__webpack_require__("../../components/Divider/dist/mjs/index.js");const package_namespaceObject=JSON.parse('{"u2":"@gemeente-denhaag/divider","i8":"0.2.3-alpha.358"}');var README=__webpack_require__("../../components/Divider/README.md"),jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h2:"h2",h3:"h3",p:"p",hr:"hr",div:"div",img:"img"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"CSS/Data Display/Divider",parameters:{componentSubtitle:`${package_namespaceObject.u2} - ${package_namespaceObject.i8}`,status:{type:"WORK IN PROGRESS"}}}),"\n",(0,jsx_runtime.jsx)(dist.dk,{markdown:README}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"stories",children:"Stories"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"default",children:"Default"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Default",children:()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.p,{children:"I am above the divider."}),(0,jsx_runtime.jsx)(_components.hr,{class:"denhaag-divider",role:"presentation"}),(0,jsx_runtime.jsx)(_components.p,{children:"I am below the divider."})]})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"vertical",children:"Vertical"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Vertical",children:()=>(0,jsx_runtime.jsxs)(_components.div,{style:{display:"flex"},children:[(0,jsx_runtime.jsx)(_components.p,{children:"I am on the left side of the divider."}),(0,jsx_runtime.jsx)(_components.hr,{class:"denhaag-divider denhaag-divider--vertical",role:"presentation"}),(0,jsx_runtime.jsx)(_components.p,{children:"I am on the right side of the divider."})]})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"vertical-images",children:"Vertical Images"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Vertical Images",children:()=>(0,jsx_runtime.jsxs)(_components.div,{style:{display:"flex"},children:[(0,jsx_runtime.jsx)(_components.img,{alt:"The Lagoon Nebula.",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Lagoon_Nebula.jpg/1024px-Lagoon_Nebula.jpg",width:"500",height:"250"}),(0,jsx_runtime.jsx)(_components.hr,{class:"denhaag-divider denhaag-divider--vertical",role:"presentation"}),(0,jsx_runtime.jsx)(_components.img,{alt:"Four cassette tapes",src:"https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/Demos.jpg/1200px-Demos.jpg",width:"500",height:"250"})]})})})]})}const defaultStory=()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("p",{children:"I am above the divider."}),(0,jsx_runtime.jsx)("hr",{class:"denhaag-divider",role:"presentation"}),(0,jsx_runtime.jsx)("p",{children:"I am below the divider."})]});defaultStory.storyName="Default",defaultStory.parameters={storySource:{source:'() => <>\n        <p>I am above the divider.</p>\n        <hr class="denhaag-divider" role="presentation" />\n        <p>I am below the divider.</p>\n      </>'}};const vertical=()=>(0,jsx_runtime.jsxs)("div",{style:{display:"flex"},children:[(0,jsx_runtime.jsx)("p",{children:"I am on the left side of the divider."}),(0,jsx_runtime.jsx)("hr",{class:"denhaag-divider denhaag-divider--vertical",role:"presentation"}),(0,jsx_runtime.jsx)("p",{children:"I am on the right side of the divider."})]});vertical.storyName="Vertical",vertical.parameters={storySource:{source:'() => <div style={{\n  display: "flex"\n}}>\n        <p>I am on the left side of the divider.</p>\n        <hr class="denhaag-divider denhaag-divider--vertical" role="presentation" />\n        <p>I am on the right side of the divider.</p>\n      </div>'}};const verticalImages=()=>(0,jsx_runtime.jsxs)("div",{style:{display:"flex"},children:[(0,jsx_runtime.jsx)("img",{alt:"The Lagoon Nebula.",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Lagoon_Nebula.jpg/1024px-Lagoon_Nebula.jpg",width:"500",height:"250"}),(0,jsx_runtime.jsx)("hr",{class:"denhaag-divider denhaag-divider--vertical",role:"presentation"}),(0,jsx_runtime.jsx)("img",{alt:"Four cassette tapes",src:"https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/Demos.jpg/1200px-Demos.jpg",width:"500",height:"250"})]});verticalImages.storyName="Vertical Images",verticalImages.parameters={storySource:{source:'() => <div style={{\n  display: "flex"\n}}>\n        <img alt="The Lagoon Nebula." src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Lagoon_Nebula.jpg/1024px-Lagoon_Nebula.jpg" width="500" height="250" />\n        <hr class="denhaag-divider denhaag-divider--vertical" role="presentation" />\n        <img alt="Four cassette tapes" src="https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/Demos.jpg/1200px-Demos.jpg" width="500" height="250" />\n      </div>'}};const componentMeta={title:"CSS/Data Display/Divider",parameters:{componentSubtitle:`${package_namespaceObject.u2} - ${package_namespaceObject.i8}`,status:{type:"WORK IN PROGRESS"}},tags:["stories-mdx"],includeStories:["defaultStory","vertical","verticalImages"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const Divider_stories=componentMeta},"../../components/Divider/dist/mjs/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>Divider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__assign=function(){return __assign=Object.assign||function __assign(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)};function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}"function"==typeof SuppressedError&&SuppressedError;!function styleInject(css,ref){void 0===ref&&(ref={});var insertAt=ref.insertAt;if(css&&"undefined"!=typeof document){var head=document.head||document.getElementsByTagName("head")[0],style=document.createElement("style");style.type="text/css","top"===insertAt&&head.firstChild?head.insertBefore(style,head.firstChild):head.appendChild(style),style.styleSheet?style.styleSheet.cssText=css:style.appendChild(document.createTextNode(css))}}(".denhaag-divider{background:var(--denhaag-divider-border-color);border:0;flex-shrink:0;height:var(--denhaag-divider-border-width);margin-block-end:var(--denhaag-divider-margin-block-end);margin-block-start:var(--denhaag-divider-margin-block-start);width:100%}.denhaag-divider--vertical{height:inherit;margin-inline-end:var(--denhaag-divider-margin-inline-end);margin-inline-start:var(--denhaag-divider-margin-inline-start);width:var(--denhaag-divider-border-width)}");var Divider=function(_a){var orientation=_a.orientation,className=_a.className,props=function __rest(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t}(_a,["orientation","className"]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr",__assign({className:clsx("denhaag-divider",{"denhaag-divider--vertical":"vertical"===orientation},className),role:"presentation"},props))}},"../../components/Divider/README.md":module=>{module.exports="# Divider\n\nA divider is a thin line that groups content in lists and layouts. They separate content into clear groups.\n\n## When to use\n\nUse a divider when you want to make a distinction between sections of content or where a line is necessary to denote sections of a page to better organize information on a page. Use the vertical divider to form or separate different groups, such as a group of headings in a menu. A vertical divider will automatically swap to a horizontal divider at mobile resolutions.\n\n## Alternatives and related components\n\n## Anatomy\n\nThe divider consists of:\n\n1. Line: the separator\n\n## (Interactive) states\n\nNone.\n\n## Design properties\n\n### Color\n\n- Line: fill color Grey/2\n\n### Structure\n\n- Line: height 1px\n\nDividers are placed along the bottom edge of the content tiles, independent of the grid.\n\n## Accessibility\n\n[technical requirements]\n\n## Content guidelines\n\n## Best practices\n\n### Divider with subheader\n\nWhen using a divider with a subheader, place the divider above the subheader to reinforce the relationship between the subheader and the content.\n\n### Inset dividers\n\nInset dividers should:\n\n- Be used to separate related content.\n- Be used judicious to demarcate major sections of content\n- Be used in conjunction with anchoring elements such as avatars\n\nAnd should:\n\n- Not used for too many elements on one page because a heavy use of dividers can lead to visual noise and dilute their impact\n- Not be used if such strong divisions are not required. Consider using white space, subheaders, or inset dividers\n\n### Full-bleed dividers\n\nFull-bleed dividers should:\n\n- Be used to separate distinct content sections (e.g., biographic details from contact information) or distinct content elements (e.g., list items) in both lists and page layouts\n\nAnd should:\n\n- Not be overused because it creates visual noise and ultimately diminishes the meaning of the dividers\n\n## References\n\n[https://material-ui.com/components/dividers/](https://material-ui.com/components/dividers/)\n[https://material.io/archive/guidelines/components/dividers.html](https://material.io/archive/guidelines/components/dividers.html)\n"}}]);