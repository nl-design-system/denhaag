(self.webpackChunk_gemeente_denhaag_storybook=self.webpackChunk_gemeente_denhaag_storybook||[]).push([[2558],{"../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/css/CardNews.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>CardNews_stories,defaultStory:()=>defaultStory,focus:()=>CardNews_stories_focus,hover:()=>hover});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var lib=__webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.6.7_@types+react-dom@18.2.18_@types+react@18.2.47_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs");__webpack_require__("../../components/CardNews/dist/mjs/index.js");const package_namespaceObject=JSON.parse('{"u2":"@gemeente-denhaag/card-news","i8":"0.1.1-alpha.219"}'),README_namespaceObject="# News card\n\n## Introduction\n\nA newcard is used to display a newsitem on another page.\n\n## When to use\n\nA newscard is used in a group on an overview.\n\n## Alternatives and related components\n\n- Images\n\n## Anatomy\n\nA newscard consist of:\n\n1. Card\n2. Image\n3. Title\n4. Intro\n5. Icon\n\n## (Interactive) states\n\nThe newscard contains the states normal, hover and focus.\n\n## Design properties\n\n## Desktop\n\n### Typography big card\n\n- Title: Mix/2xl/700\n- Intro: Sans/md/400\n\n### Typography small card\n\n- Title: Mix/lg/700\n- Intro: Sans/md/400\n\n## Mobile\n\n### Typography big card\n\n- Title: Mix/2xl/700\n- Intro: Sans/md/400\n\n## Colors\n\n- Title: Green/3\n- Controls: see the icon-only button\n- Border: 1px grey/2\n\n## Interactive states\n\n- Hoverstate: box shadow 0px 4px 16px 0px black 16%\n- Focus state: container border color Ocher/5\n\n## Structure\n\n### Desktop big card\n\n- Card: margin 16px\n- Image: padding-right: 64px\n- Texts: align-center\n- Padding: 8px\n- Icon: Padding-left 8px\n- Image aspect ratio 4:3\n\n### Desktop small card\n\n- Card: margin 16px\n- Text: margin 12px\n- Padding-bottom 8px\n- Image aspect ratio 16:9\n\n### Mobile big card\n\n- Image: padding-bottom 8px\n- Texts: padding 16px\n- Image aspect ratio 4:3\n\n### Mobile small card\n\n- Card: margin 16px\n- Text: margin 12px\n- Padding-bottom 8px\n- Image aspect ratio 4:3\n\n### Mobile\n\n- Image: padding-bottom 16px\n- Controls: button padding-left and padding-right 12px\n- Indicator: width 32px, height 3px, padding-right 4px, padding-bottom 16px\n\n## Accessibility\n\n-\n\n## Content Guidelines\n\nBe concise in the title and intro lenght. The intro should be no longer than 1 sentence.\n\n## Best practices\n\n### Do's\n\nNews card should:\n\n- ave an appealing image that refers or conlude the message of the news item\n- ave a clear and consice title\n- ave short and readable intro\n\n### Don'ts\n\nNews cards should not\n\n- Have more than 2 sentences intro.\n- Be inserted seperatly on a page, but always be showed in a group. At the end of a page to support referral reading, or the main page has the main purpose to show news items.\n\n## References\n\n-\n";__webpack_require__("./src/css/_storybook.scss");var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h2:"h2",h3:"h3",div:"div",img:"img",h4:"h4",a:"a",p:"p",svg:"svg",path:"path"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"CSS/Cards/News Card",parameters:{componentSubtitle:`${package_namespaceObject.u2} - ${package_namespaceObject.i8}`,docs:{source:{type:"dynamic"}},status:{type:"WORK IN PROGRESS"}}}),"\n",(0,jsx_runtime.jsx)(dist.dk,{markdown:README_namespaceObject}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"stories",children:"Stories"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"default",children:"Default"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Default",children:()=>(0,jsx_runtime.jsxs)(_components.div,{class:"denhaag-card-news",children:[(0,jsx_runtime.jsx)(_components.img,{class:"denhaag-card-news__image",src:"https://images.unsplash.com/photo-1612799675078-ac368b17e488?w=307&h=173",alt:""}),(0,jsx_runtime.jsxs)(_components.div,{class:"denhaag-card-news__content",children:[(0,jsx_runtime.jsx)(_components.h4,{class:"utrecht-heading-4 denhaag-card-news__heading",children:(0,jsx_runtime.jsx)(_components.a,{class:"denhaag-card-news__link",href:"#example-url",children:"Fietsflat Rijnstraat: opknappen fietsenstalling"})}),(0,jsx_runtime.jsx)(_components.p,{class:"utrecht-paragraph denhaag-card-news__paragraph",children:"Het weekend van 15 en 16 januari in beide richtingen dicht."}),(0,jsx_runtime.jsx)(_components.div,{className:"denhaag-card-news__icon",children:(0,jsx_runtime.jsx)(_components.svg,{"aria-hidden":"true",class:"denhaag-icon",focusable:"false",height:"1em",viewBox:"0 0 24 24",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:(0,jsx_runtime.jsx)(_components.path,{d:"M12.293 5.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L16.586 13H5a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",fill:"currentColor"})})})]})]})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"hover",children:"Hover"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Hover",children:()=>(0,jsx_runtime.jsxs)(_components.div,{class:"denhaag-card-news denhaag-card-news--hover",children:[(0,jsx_runtime.jsx)(_components.img,{class:"denhaag-card-news__image",src:"https://images.unsplash.com/photo-1612799675078-ac368b17e488?w=307&h=173",alt:""}),(0,jsx_runtime.jsxs)(_components.div,{class:"denhaag-card-news__content",children:[(0,jsx_runtime.jsx)(_components.h4,{class:"utrecht-heading-4 denhaag-card-news__heading",children:(0,jsx_runtime.jsx)(_components.a,{class:"denhaag-card-news__link",href:"#example-url",children:"Fietsflat Rijnstraat: opknappen fietsenstalling"})}),(0,jsx_runtime.jsx)(_components.p,{class:"utrecht-paragraph denhaag-card-news__paragraph",children:"Het weekend van 15 en 16 januari in beide richtingen dicht."}),(0,jsx_runtime.jsx)(_components.div,{className:"denhaag-card-news__icon",children:(0,jsx_runtime.jsx)(_components.svg,{"aria-hidden":"true",class:"denhaag-icon",focusable:"false",height:"1em",viewBox:"0 0 24 24",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:(0,jsx_runtime.jsx)(_components.path,{d:"M12.293 5.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L16.586 13H5a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",fill:"currentColor"})})})]})]})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"focus",children:"Focus"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Focus",children:()=>(0,jsx_runtime.jsxs)(_components.div,{class:"denhaag-card-news denhaag-card-news--focus",children:[(0,jsx_runtime.jsx)(_components.img,{class:"denhaag-card-news__image",src:"https://images.unsplash.com/photo-1612799675078-ac368b17e488?w=307&h=173",alt:""}),(0,jsx_runtime.jsxs)(_components.div,{class:"denhaag-card-news__content",children:[(0,jsx_runtime.jsx)(_components.h4,{class:"utrecht-heading-4 denhaag-card-news__heading",children:(0,jsx_runtime.jsx)(_components.a,{class:"denhaag-card-news__link",href:"#example-url",children:"Fietsflat Rijnstraat: opknappen fietsenstalling"})}),(0,jsx_runtime.jsx)(_components.p,{class:"utrecht-paragraph denhaag-card-news__paragraph",children:"Het weekend van 15 en 16 januari in beide richtingen dicht."}),(0,jsx_runtime.jsx)(_components.div,{className:"denhaag-card-news__icon",children:(0,jsx_runtime.jsx)(_components.svg,{"aria-hidden":"true",class:"denhaag-icon",focusable:"false",height:"1em",viewBox:"0 0 24 24",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:(0,jsx_runtime.jsx)(_components.path,{d:"M12.293 5.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L16.586 13H5a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",fill:"currentColor"})})})]})]})})})]})}const defaultStory=()=>(0,jsx_runtime.jsxs)("div",{class:"denhaag-card-news",children:[(0,jsx_runtime.jsx)("img",{class:"denhaag-card-news__image",src:"https://images.unsplash.com/photo-1612799675078-ac368b17e488?w=307&h=173",alt:""}),(0,jsx_runtime.jsxs)("div",{class:"denhaag-card-news__content",children:[(0,jsx_runtime.jsx)("h4",{class:"utrecht-heading-4 denhaag-card-news__heading",children:(0,jsx_runtime.jsx)("a",{class:"denhaag-card-news__link",href:"#example-url",children:"Fietsflat Rijnstraat: opknappen fietsenstalling"})}),(0,jsx_runtime.jsx)("p",{class:"utrecht-paragraph denhaag-card-news__paragraph",children:"Het weekend van 15 en 16 januari in beide richtingen dicht."}),(0,jsx_runtime.jsx)("div",{className:"denhaag-card-news__icon",children:(0,jsx_runtime.jsx)("svg",{"aria-hidden":"true",class:"denhaag-icon",focusable:"false",height:"1em",viewBox:"0 0 24 24",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:(0,jsx_runtime.jsx)("path",{d:"M12.293 5.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L16.586 13H5a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",fill:"currentColor"})})})]})]});defaultStory.storyName="Default",defaultStory.parameters={storySource:{source:'() => <div class="denhaag-card-news">\n        <img class="denhaag-card-news__image" src="https://images.unsplash.com/photo-1612799675078-ac368b17e488?w=307&h=173" alt="" />\n        <div class="denhaag-card-news__content">\n          <h4 class="utrecht-heading-4 denhaag-card-news__heading">\n            <a class="denhaag-card-news__link" href="#example-url">\n              Fietsflat Rijnstraat: opknappen fietsenstalling\n            </a>\n          </h4>\n          <p class="utrecht-paragraph denhaag-card-news__paragraph">\n            Het weekend van 15 en 16 januari in beide richtingen dicht.\n          </p>\n          <div className="denhaag-card-news__icon">\n            <svg aria-hidden="true" class="denhaag-icon" focusable="false" height="1em" viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">\n              <path d="M12.293 5.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L16.586 13H5a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" fill="currentColor" />\n            </svg>\n          </div>\n        </div>\n      </div>'}};const hover=()=>(0,jsx_runtime.jsxs)("div",{class:"denhaag-card-news denhaag-card-news--hover",children:[(0,jsx_runtime.jsx)("img",{class:"denhaag-card-news__image",src:"https://images.unsplash.com/photo-1612799675078-ac368b17e488?w=307&h=173",alt:""}),(0,jsx_runtime.jsxs)("div",{class:"denhaag-card-news__content",children:[(0,jsx_runtime.jsx)("h4",{class:"utrecht-heading-4 denhaag-card-news__heading",children:(0,jsx_runtime.jsx)("a",{class:"denhaag-card-news__link",href:"#example-url",children:"Fietsflat Rijnstraat: opknappen fietsenstalling"})}),(0,jsx_runtime.jsx)("p",{class:"utrecht-paragraph denhaag-card-news__paragraph",children:"Het weekend van 15 en 16 januari in beide richtingen dicht."}),(0,jsx_runtime.jsx)("div",{className:"denhaag-card-news__icon",children:(0,jsx_runtime.jsx)("svg",{"aria-hidden":"true",class:"denhaag-icon",focusable:"false",height:"1em",viewBox:"0 0 24 24",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:(0,jsx_runtime.jsx)("path",{d:"M12.293 5.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L16.586 13H5a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",fill:"currentColor"})})})]})]});hover.storyName="Hover",hover.parameters={storySource:{source:'() => <div class="denhaag-card-news denhaag-card-news--hover">\n        <img class="denhaag-card-news__image" src="https://images.unsplash.com/photo-1612799675078-ac368b17e488?w=307&h=173" alt="" />\n        <div class="denhaag-card-news__content">\n          <h4 class="utrecht-heading-4 denhaag-card-news__heading">\n            <a class="denhaag-card-news__link" href="#example-url">\n              Fietsflat Rijnstraat: opknappen fietsenstalling\n            </a>\n          </h4>\n          <p class="utrecht-paragraph denhaag-card-news__paragraph">\n            Het weekend van 15 en 16 januari in beide richtingen dicht.\n          </p>\n          <div className="denhaag-card-news__icon">\n            <svg aria-hidden="true" class="denhaag-icon" focusable="false" height="1em" viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">\n              <path d="M12.293 5.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L16.586 13H5a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" fill="currentColor" />\n            </svg>\n          </div>\n        </div>\n      </div>'}};const CardNews_stories_focus=()=>(0,jsx_runtime.jsxs)("div",{class:"denhaag-card-news denhaag-card-news--focus",children:[(0,jsx_runtime.jsx)("img",{class:"denhaag-card-news__image",src:"https://images.unsplash.com/photo-1612799675078-ac368b17e488?w=307&h=173",alt:""}),(0,jsx_runtime.jsxs)("div",{class:"denhaag-card-news__content",children:[(0,jsx_runtime.jsx)("h4",{class:"utrecht-heading-4 denhaag-card-news__heading",children:(0,jsx_runtime.jsx)("a",{class:"denhaag-card-news__link",href:"#example-url",children:"Fietsflat Rijnstraat: opknappen fietsenstalling"})}),(0,jsx_runtime.jsx)("p",{class:"utrecht-paragraph denhaag-card-news__paragraph",children:"Het weekend van 15 en 16 januari in beide richtingen dicht."}),(0,jsx_runtime.jsx)("div",{className:"denhaag-card-news__icon",children:(0,jsx_runtime.jsx)("svg",{"aria-hidden":"true",class:"denhaag-icon",focusable:"false",height:"1em",viewBox:"0 0 24 24",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:(0,jsx_runtime.jsx)("path",{d:"M12.293 5.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L16.586 13H5a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",fill:"currentColor"})})})]})]});CardNews_stories_focus.storyName="Focus",CardNews_stories_focus.parameters={storySource:{source:'() => <div class="denhaag-card-news denhaag-card-news--focus">\n        <img class="denhaag-card-news__image" src="https://images.unsplash.com/photo-1612799675078-ac368b17e488?w=307&h=173" alt="" />\n        <div class="denhaag-card-news__content">\n          <h4 class="utrecht-heading-4 denhaag-card-news__heading">\n            <a class="denhaag-card-news__link" href="#example-url">\n              Fietsflat Rijnstraat: opknappen fietsenstalling\n            </a>\n          </h4>\n          <p class="utrecht-paragraph denhaag-card-news__paragraph">\n            Het weekend van 15 en 16 januari in beide richtingen dicht.\n          </p>\n          <div className="denhaag-card-news__icon">\n            <svg aria-hidden="true" class="denhaag-icon" focusable="false" height="1em" viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">\n              <path d="M12.293 5.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L16.586 13H5a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" fill="currentColor" />\n            </svg>\n          </div>\n        </div>\n      </div>'}};const componentMeta={title:"CSS/Cards/News Card",parameters:{componentSubtitle:`${package_namespaceObject.u2} - ${package_namespaceObject.i8}`,docs:{source:{type:"dynamic"}},status:{type:"WORK IN PROGRESS"}},tags:["stories-mdx"],includeStories:["defaultStory","hover","focus"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const CardNews_stories=componentMeta,__namedExportsOrder=["defaultStory","hover","focus"]},"../../components/CardNews/dist/mjs/index.js":()=>{var css_248z='.denhaag-card-news{--denhaag-card-news-icon-display:none;--denhaag-card-news-paragraph-display:none;border:var(--denhaag-card-news-border);display:flex;flex-direction:column;gap:var(--denhaag-card-news-gap);height:var(--denhaag-card-news-height);margin-block-end:var(--denhaag-card-news-margin);margin-block-start:var(--denhaag-card-news-margin);margin-inline-end:var(--denhaag-card-news-margin);margin-inline-start:var(--denhaag-card-news-margin);padding-block-end:var(--denhaag-card-news-padding);padding-block-start:var(--denhaag-card-news-padding);padding-inline-end:var(--denhaag-card-news-padding);padding-inline-start:var(--denhaag-card-news-padding);position:relative;text-decoration:var(--denhaag-card-news-text-decoration);width:var(--denhaag-card-news-width)}@media (width >= 25.9375rem){.denhaag-card-news{--denhaag-card-news-paragraph-display:block}}.denhaag-card-news--hover,.denhaag-card-news:hover{box-shadow:var(--denhaag-card-news-box-shadow)}.denhaag-card-news--focus,.denhaag-card-news:focus-visible,.denhaag-card-news:focus-within:not(:focus-visible){--denhaag-card-news-box-shadow:none;--denhaag-card-news-icon-display:inline-block}@media (width >= 25.9375rem){.denhaag-card-news__icon .denhaag-icon{display:var(--denhaag-card-news-icon-display,none)}}.denhaag-card-news__image{aspect-ratio:var(--denhaag-card-news-image-aspect-ratio);height:var(--denhaag-card-news-image-height);object-fit:var(--denhaag-card-news-image-object-fit);width:var(--denhaag-card-news-image-width)}@media (width >= 25.9375rem){.denhaag-card-news__content{padding-block-end:var(--denhaag-card-news-figcaption-padding);padding-block-start:var(--denhaag-card-news-figcaption-padding);padding-inline-end:var(--denhaag-card-news-figcaption-padding);padding-inline-start:var(--denhaag-card-news-figcaption-padding)}}.denhaag-card-news__content .denhaag-card-news__heading,.denhaag-card-news__content .denhaag-card-news__paragraph{margin-block-end:var(--denhaag-card-news-text-margin-block-end)}.denhaag-card-news .utrecht-paragraph{display:var(--denhaag-card-news-paragraph-display,none)}.denhaag-card-news__icon{color:var(--denhaag-card-news-icon-color);height:var(--denhaag-card-news-icon-height);text-align:var(--denhaag-card-news-icon-text-align)}.denhaag-card-news__link{color:inherit;text-decoration:inherit}.denhaag-card-news__link:focus-visible{outline:none}.denhaag-card-news__link:after{bottom:0;content:"";left:0;position:absolute;right:0;top:0}.denhaag-card-news--focus .denhaag-card-news__link:after,.denhaag-card-news:focus-within .denhaag-card-news__link:focus-visible:after{outline:var(--denhaag-card-news-outline)}';const head=document.head||document.getElementsByTagName("head")[0],style=document.createElement("style");style.type="text/css",style.nonce=window.NONCE,head.appendChild(style),style.styleSheet?style.styleSheet.cssText=css_248z:style.appendChild(document.createTextNode(css_248z))},"../../node_modules/.pnpm/css-loader@6.9.0_webpack@5.89.0/node_modules/css-loader/dist/cjs.js!../../node_modules/.pnpm/sass-loader@13.3.3_sass@1.69.7_webpack@5.89.0/node_modules/sass-loader/dist/cjs.js!./src/css/_storybook.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_pnpm_css_loader_6_9_0_webpack_5_89_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.9.0_webpack@5.89.0/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_pnpm_css_loader_6_9_0_webpack_5_89_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_css_loader_6_9_0_webpack_5_89_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_pnpm_css_loader_6_9_0_webpack_5_89_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.9.0_webpack@5.89.0/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_pnpm_css_loader_6_9_0_webpack_5_89_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_pnpm_css_loader_6_9_0_webpack_5_89_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".denhaag-card-news{max-width:320px}.denhaag-storybook-floating-contact-wrapper{height:100vh;width:100vw;margin-block-start:-1rem;margin-block-end:-1rem;margin-inline-start:-1rem;margin-inline-end:-1rem}.denhaag-hero{margin-block-start:-1rem;margin-block-end:-1rem;margin-inline-start:-1rem;margin-inline-end:-1rem}.denhaag-story--css-components-feedback-modal-wrapper{height:100vh;position:relative;overflow:hidden}.denhaag-story--css-components-feedback-modal-wrapper .denhaag-modal{position:absolute}","",{version:3,sources:["webpack://./src/css/_storybook.scss"],names:[],mappings:"AACA,mBACE,eAAA,CAGF,4CACE,YAAA,CACA,WAAA,CACA,wBAAA,CACA,sBAAA,CACA,yBAAA,CACA,uBAAA,CAGF,cACE,wBAAA,CACA,sBAAA,CACA,yBAAA,CACA,uBAAA,CAIF,sDACE,YAAA,CACA,iBAAA,CACA,eAAA,CAGF,qEACE,iBAAA",sourcesContent:["/* This file is meant only for storybook overwrites. NOT FOR EXPORT! */\n.denhaag-card-news {\n  max-width: 320px;\n}\n\n.denhaag-storybook-floating-contact-wrapper {\n  height: 100vh;\n  width: 100vw;\n  margin-block-start: -1rem;\n  margin-block-end: -1rem;\n  margin-inline-start: -1rem;\n  margin-inline-end: -1rem;\n}\n\n.denhaag-hero {\n  margin-block-start: -1rem;\n  margin-block-end: -1rem;\n  margin-inline-start: -1rem;\n  margin-inline-end: -1rem;\n}\n\n/* Only purpose is to show stories correct */\n.denhaag-story--css-components-feedback-modal-wrapper {\n  height: 100vh;\n  position: relative;\n  overflow: hidden;\n}\n\n.denhaag-story--css-components-feedback-modal-wrapper .denhaag-modal {\n  position: absolute;\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../node_modules/.pnpm/memoizerific@1.11.3/node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="../../node_modules/.pnpm/memoizerific@1.11.3/node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./src/css/_storybook.scss":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var _node_modules_pnpm_style_loader_3_3_4_webpack_5_89_0_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.89.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_node_modules_pnpm_style_loader_3_3_4_webpack_5_89_0_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_4_webpack_5_89_0_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_pnpm_style_loader_3_3_4_webpack_5_89_0_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.89.0/node_modules/style-loader/dist/runtime/styleDomAPI.js"),_node_modules_pnpm_style_loader_3_3_4_webpack_5_89_0_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_4_webpack_5_89_0_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_pnpm_style_loader_3_3_4_webpack_5_89_0_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.89.0/node_modules/style-loader/dist/runtime/insertBySelector.js"),_node_modules_pnpm_style_loader_3_3_4_webpack_5_89_0_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_4_webpack_5_89_0_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_node_modules_pnpm_style_loader_3_3_4_webpack_5_89_0_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.89.0/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_node_modules_pnpm_style_loader_3_3_4_webpack_5_89_0_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_4_webpack_5_89_0_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_node_modules_pnpm_style_loader_3_3_4_webpack_5_89_0_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.89.0/node_modules/style-loader/dist/runtime/insertStyleElement.js"),_node_modules_pnpm_style_loader_3_3_4_webpack_5_89_0_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_4_webpack_5_89_0_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_node_modules_pnpm_style_loader_3_3_4_webpack_5_89_0_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.89.0/node_modules/style-loader/dist/runtime/styleTagTransform.js"),_node_modules_pnpm_style_loader_3_3_4_webpack_5_89_0_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_4_webpack_5_89_0_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_node_modules_pnpm_css_loader_6_9_0_webpack_5_89_0_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_sass_loader_13_3_3_sass_1_69_7_webpack_5_89_0_node_modules_sass_loader_dist_cjs_js_storybook_scss__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.9.0_webpack@5.89.0/node_modules/css-loader/dist/cjs.js!../../node_modules/.pnpm/sass-loader@13.3.3_sass@1.69.7_webpack@5.89.0/node_modules/sass-loader/dist/cjs.js!./src/css/_storybook.scss"),options={};options.styleTagTransform=_node_modules_pnpm_style_loader_3_3_4_webpack_5_89_0_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_node_modules_pnpm_style_loader_3_3_4_webpack_5_89_0_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_node_modules_pnpm_style_loader_3_3_4_webpack_5_89_0_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_node_modules_pnpm_style_loader_3_3_4_webpack_5_89_0_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_node_modules_pnpm_style_loader_3_3_4_webpack_5_89_0_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_node_modules_pnpm_style_loader_3_3_4_webpack_5_89_0_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_pnpm_css_loader_6_9_0_webpack_5_89_0_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_sass_loader_13_3_3_sass_1_69_7_webpack_5_89_0_node_modules_sass_loader_dist_cjs_js_storybook_scss__WEBPACK_IMPORTED_MODULE_6__.Z,options),_node_modules_pnpm_css_loader_6_9_0_webpack_5_89_0_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_sass_loader_13_3_3_sass_1_69_7_webpack_5_89_0_node_modules_sass_loader_dist_cjs_js_storybook_scss__WEBPACK_IMPORTED_MODULE_6__.Z&&_node_modules_pnpm_css_loader_6_9_0_webpack_5_89_0_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_sass_loader_13_3_3_sass_1_69_7_webpack_5_89_0_node_modules_sass_loader_dist_cjs_js_storybook_scss__WEBPACK_IMPORTED_MODULE_6__.Z.locals&&_node_modules_pnpm_css_loader_6_9_0_webpack_5_89_0_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_sass_loader_13_3_3_sass_1_69_7_webpack_5_89_0_node_modules_sass_loader_dist_cjs_js_storybook_scss__WEBPACK_IMPORTED_MODULE_6__.Z.locals}}]);