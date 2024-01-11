"use strict";(self.webpackChunk_gemeente_denhaag_storybook=self.webpackChunk_gemeente_denhaag_storybook||[]).push([[1673],{"../../components/Page/dist/mjs/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T3:()=>Page,WA:()=>PageFooter,mr:()=>PageHeader});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),css_248z=".denhaag-page{display:flex;flex-direction:column;min-height:100vh}.denhaag-page-header{background-color:var(--denhaag-page-header-background-color);z-index:var(--denhaag-page-header-index)}.denhaag-page-content{margin-block-end:80px;margin-block-start:var(--denhaag-page-content-main-margin-block-start)}@media (width >= 768px){.denhaag-page-content{margin-block-start:var(--denhaag-page-content-main-sm-margin-block-start)}}@media (width >= 1024px){.denhaag-page-content{margin-block-start:var(--denhaag-page-content-main-md-margin-block-start)}}.denhaag-page-content__main{flex-grow:1}@media (width <= 1023px){.denhaag-page-content__main{max-width:100%}}.denhaag-page-footer{margin-block-start:auto}";const head=document.head||document.getElementsByTagName("head")[0],style=document.createElement("style");function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}style.type="text/css",style.nonce=window.NONCE,head.appendChild(style),style.styleSheet?style.styleSheet.cssText=css_248z:style.appendChild(document.createTextNode(css_248z));var Page=function(props){var classNames=clsx("denhaag-page",props.className);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:classNames},props.children)},PageHeader=function(props){var classNames=clsx("denhaag-page-header",props.className);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:classNames},props.children)},PageFooter=function(props){var classNames=clsx("denhaag-page-footer",props.className);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:classNames},props.children)}},"./src/templates/01-Login-page.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Login:()=>Login,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var _gemeente_denhaag_typography__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../components/Typography/dist/mjs/index.js"),_gemeente_denhaag_page__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../components/Page/dist/mjs/index.js"),_gemeente_denhaag_header__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../components/Header/dist/mjs/index.js"),_gemeente_denhaag_footer__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../components/Footer/dist/mjs/index.js"),_gemeente_denhaag_responsive_content__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../components/ResponsiveContent/dist/mjs/index.js"),_gemeente_denhaag_link__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../components/Link/dist/mjs/index.js"),_gemeente_denhaag_alert__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../components/Alert/dist/mjs/index.js"),_util__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/templates/util.tsx"),_css_CardGroupUtils__WEBPACK_IMPORTED_MODULE_10__=(__webpack_require__("./src/templates/template-story.scss"),__webpack_require__("./src/css/CardGroupUtils.tsx")),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const loginPageHeaderProps={..._util__WEBPACK_IMPORTED_MODULE_8__.TJ,breadcrumbs:{navigationPath:[{label:"Home",href:"https://denhaag.nl/"},{label:"Inloggen bij MijnDenHaag"}]},userprofileMenu:void 0},Login={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_gemeente_denhaag_page__WEBPACK_IMPORTED_MODULE_2__.T3,{...args,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_gemeente_denhaag_page__WEBPACK_IMPORTED_MODULE_2__.mr,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_gemeente_denhaag_header__WEBPACK_IMPORTED_MODULE_3__.t9,{...loginPageHeaderProps})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_gemeente_denhaag_responsive_content__WEBPACK_IMPORTED_MODULE_5__.C,{className:"denhaag-page-content",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_gemeente_denhaag_typography__WEBPACK_IMPORTED_MODULE_1__.XJ,{children:"Inloggen"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_gemeente_denhaag_typography__WEBPACK_IMPORTED_MODULE_1__.nv,{children:["Bent u gemachtigd? ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_gemeente_denhaag_link__WEBPACK_IMPORTED_MODULE_6__.r,{href:"#",children:"Log in plaats hiervan in als gemachtigde."})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_css_CardGroupUtils__WEBPACK_IMPORTED_MODULE_10__.g,{cards:["DigiD","eHerkenning","eIDAS"],responsive:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_gemeente_denhaag_typography__WEBPACK_IMPORTED_MODULE_1__.XJ,{children:"Inloggen als gemachtigde"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_gemeente_denhaag_alert__WEBPACK_IMPORTED_MODULE_7__.b,{text:"",title:"Om in te loggen als gemachtigde heeft u een geldige machtiging nodig.",variant:"info",className:"denhaag-authentication__alert"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_css_CardGroupUtils__WEBPACK_IMPORTED_MODULE_10__.g,{cards:["DigiD","eHerkenning"],responsive:!0})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_gemeente_denhaag_page__WEBPACK_IMPORTED_MODULE_2__.WA,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_gemeente_denhaag_footer__WEBPACK_IMPORTED_MODULE_4__.$_,{newsletterData:_util__WEBPACK_IMPORTED_MODULE_8__.lH,contactData:_util__WEBPACK_IMPORTED_MODULE_8__.Yf,legalData:_util__WEBPACK_IMPORTED_MODULE_8__.Hb,copyrightLabel:_util__WEBPACK_IMPORTED_MODULE_8__.iF,socialData:_util__WEBPACK_IMPORTED_MODULE_8__.nk})})]})},__WEBPACK_DEFAULT_EXPORT__={title:"Templates/Login",parameters:{layout:"fullscreen",chromatic:{viewports:[1768,1280,768,360]}}};Login.parameters={...Login.parameters,docs:{...Login.parameters?.docs,source:{originalSource:'{\n  render: args => <Page {...args}>\n      <PageHeader>\n        <HeaderLogic {...loginPageHeaderProps} />\n      </PageHeader>\n      <ResponsiveContent className="denhaag-page-content">\n        <Heading2>Inloggen</Heading2>\n        <Paragraph>\n          Bent u gemachtigd? <Link href="#">Log in plaats hiervan in als gemachtigde.</Link>\n        </Paragraph>\n        <AuthenticationCardGroup cards={[\'DigiD\', \'eHerkenning\', \'eIDAS\']} responsive />\n        <Heading2>Inloggen als gemachtigde</Heading2>\n        <Alert text="" title="Om in te loggen als gemachtigde heeft u een geldige machtiging nodig." variant="info" className="denhaag-authentication__alert" />\n        <AuthenticationCardGroup cards={[\'DigiD\', \'eHerkenning\']} responsive />\n      </ResponsiveContent>\n      <PageFooter>\n        <Footer newsletterData={newsletterData} contactData={contactData} legalData={footerLegalData} copyrightLabel={copyright} socialData={footerSocialData} />\n      </PageFooter>\n    </Page>\n}',...Login.parameters?.docs?.source}}};const __namedExportsOrder=["Login"]},"./src/templates/util.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Hb:()=>footerLegalData,NF:()=>linkData,TJ:()=>headerProps,Ub:()=>dateFormatLabels,Yf:()=>contactData,iF:()=>copyright,lH:()=>newsletterData,nk:()=>footerSocialData});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var _gemeente_denhaag_icons__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../components/Icons/dist/mjs/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const headerProps={breadcrumbs:{navigationPath:[{label:"Home",href:"https://denhaag.nl/"}]},userprofileMenu:{label:"Welkom Anne Klap",authorisedLoginLabel:"Ingelogd namens Jason Verploeg",navigationGroups:[{label:"MijnDenHaag",navigation:[{label:"Overzicht",href:""},{label:"Lopende zaken",href:""},{label:"Thema's",href:""},{label:"Mijn account",href:""}]}]},languageSwitcherMenu:{currentLanguageLabel:"NL",languageSwitcherProps:{variant:"button",label:"Kies uw voorkeurstaal",languages:[{id:"nl",label:"Nederlands",linkProps:{href:"#nl",lang:"nl",hrefLang:"nl-NL"},active:!0},{id:"en",label:"Engels",linkProps:{href:"#en",lang:"en",hrefLang:"en-GB"},active:!1},{id:"fr",label:"Français",linkProps:{href:"#fr",lang:"fr",hrefLang:"fr-FR"},active:!1}]}},logoutButton:{label:"Uitloggen",onLogoutClick:()=>{}},mobileMenu:{openLabel:"Menu",closeLabel:"Sluiten",navigation:[{label:"Home",href:"https://www.denhaag.nl"},{label:"Onderwerpen",navigation:[{label:"Omgeving",navigation:[{label:"Parkeren",href:"https://www.denhaag.nl/parkeren"},{label:"Afval",href:"https://www.denhaag.nl/afval"}]},{label:"Wonen",navigation:[{label:"Verhuizen en migratie",href:"https://www.denhaag.nl/verhuizen"},{label:"Belastingen",href:"https://www.denhaag.nl/belastingen"}]}]},{label:"MijnDenHaag",navigation:[{label:"Overzicht",href:"https://klantportaal.denhaag.nl/overzicht"},{label:"Lopende zaken",href:"https://klantportaal.denhaag.nl/zaken"},{label:"Thema's",href:"https://klantportaal.denhaag.nl/themas"},{label:"Mijn account",href:"https://klantportaal.denhaag.nl/account"}]}]}},linkData={name:"Example",link:"test/example.png",size:2e3,lastUpdated:"Thu Aug 31 2023 11:22:11 GMT+0200"},footerLegalData=[{label:"Sitemap",href:"https://denhaag.nl/"},{label:"Toegankelijkheid",href:"https://denhaag.nl/"},{label:"Privacy",href:"https://denhaag.nl/"},{label:"Proclaimer",href:"https://denhaag.nl/"},{label:"Disclaimer",href:"https://denhaag.nl/"},{label:"Voorwaarden",href:"https://denhaag.nl/"}],footerSocialData={title:"Volg ons op",links:[{icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_gemeente_denhaag_icons__WEBPACK_IMPORTED_MODULE_1__.FacebookIcon,{}),label:"Facebook",href:"https://www.facebook.com/gemeenteDH/"},{icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_gemeente_denhaag_icons__WEBPACK_IMPORTED_MODULE_1__.TwitterIcon,{}),label:"Twitter",href:"https://twitter.com/gemeentedenhaag"},{icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_gemeente_denhaag_icons__WEBPACK_IMPORTED_MODULE_1__.LinkedInIcon,{}),label:"LinkedIn",href:"https://www.linkedin.com/company/gemeente-den-haag/"},{icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_gemeente_denhaag_icons__WEBPACK_IMPORTED_MODULE_1__.InstagramIcon,{}),label:"Instagram",href:"https://www.instagram.com/gemeentedenhaag/"},{icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_gemeente_denhaag_icons__WEBPACK_IMPORTED_MODULE_1__.YouTubeIcon,{}),label:"YouTube",href:"https://www.youtube.com/channel/UC5_HpKvZl7Oxr_UimTfC2Jg"}]},dateFormatLabels={today:"vandaag",yesterday:"gisteren",before:"vóór",approachingDeadline:daysDifference=>1===daysDifference?`nog ${daysDifference} dag`:`nog ${daysDifference} dagen`},newsletterData={title:"Meld u aan voor de nieuwsbrief",text:"Blijf gemakkelijk op de hoogte van ontwikkelingen in uw stadsdeel en de belangrijkste zaken van Den Haag.",buttonLabel:"Aanmelden nieuwsbrief",href:"#"},contactData={title:"Contact",links:[{label:"Bel ons op 14070",href:"#"},{label:"Contactformulier",href:"#"}],buttonLabel:"Contactpagina",href:"https://www.denhaag.nl/nl/bestuur-en-organisatie/contact-met-de-gemeente.htm"},copyright="© 2022 Gemeente Den Haag"},"../../node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.2/node_modules/css-loader/dist/cjs.js!../../node_modules/.pnpm/sass-loader@13.3.2_sass@1.66.1_webpack@5.88.2/node_modules/sass-loader/dist/cjs.js!./src/templates/template-story.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.2/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.2/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".denhaag-authentication{margin-block-start:32px;margin-block-end:32px}.denhaag-authentication__alert{margin-block-start:24px}.denhaag-header--without-breadcrumbs{margin-block-end:56px}.denhaag-page-content .denhaag-page-content__heading{--utrecht-heading-3-margin-block-start: 64px;--utrecht-heading-3-margin-block-end: 24px}.denhaag-page-content .denhaag-page-content__task{margin-block-start:32px}.denhaag-page-content .denhaag-tabs{margin-block-end:40px}","",{version:3,sources:["webpack://./src/templates/template-story.scss"],names:[],mappings:"AAAA,wBACE,uBAAA,CACA,qBAAA,CAGF,+BACE,uBAAA,CAGF,qCACE,qBAAA,CAIA,qDACE,4CAAA,CACA,0CAAA,CAGF,kDACE,uBAAA,CAGF,oCACE,qBAAA",sourcesContent:[".denhaag-authentication {\n  margin-block-start: 32px;\n  margin-block-end: 32px;\n}\n\n.denhaag-authentication__alert {\n  margin-block-start: 24px;\n}\n\n.denhaag-header--without-breadcrumbs {\n  margin-block-end: 56px;\n}\n\n.denhaag-page-content {\n  & &__heading {\n    --utrecht-heading-3-margin-block-start: 64px;\n    --utrecht-heading-3-margin-block-end: 24px;\n  }\n\n  & &__task {\n    margin-block-start: 32px;\n  }\n\n  & .denhaag-tabs {\n    margin-block-end: 40px;\n  }\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.2/node_modules/css-loader/dist/runtime/api.js":module=>{module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"../../node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.2/node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */");return[content].concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./src/templates/template-story.scss":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var _node_modules_pnpm_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_node_modules_pnpm_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_pnpm_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/styleDomAPI.js"),_node_modules_pnpm_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_pnpm_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/insertBySelector.js"),_node_modules_pnpm_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_node_modules_pnpm_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_node_modules_pnpm_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_node_modules_pnpm_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/insertStyleElement.js"),_node_modules_pnpm_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_node_modules_pnpm_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/styleTagTransform.js"),_node_modules_pnpm_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_sass_loader_13_3_2_sass_1_66_1_webpack_5_88_2_node_modules_sass_loader_dist_cjs_js_template_story_scss__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.2/node_modules/css-loader/dist/cjs.js!../../node_modules/.pnpm/sass-loader@13.3.2_sass@1.66.1_webpack@5.88.2/node_modules/sass-loader/dist/cjs.js!./src/templates/template-story.scss"),options={};options.styleTagTransform=_node_modules_pnpm_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_node_modules_pnpm_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_node_modules_pnpm_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_node_modules_pnpm_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_node_modules_pnpm_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_node_modules_pnpm_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_sass_loader_13_3_2_sass_1_66_1_webpack_5_88_2_node_modules_sass_loader_dist_cjs_js_template_story_scss__WEBPACK_IMPORTED_MODULE_6__.Z,options),_node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_sass_loader_13_3_2_sass_1_66_1_webpack_5_88_2_node_modules_sass_loader_dist_cjs_js_template_story_scss__WEBPACK_IMPORTED_MODULE_6__.Z&&_node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_sass_loader_13_3_2_sass_1_66_1_webpack_5_88_2_node_modules_sass_loader_dist_cjs_js_template_story_scss__WEBPACK_IMPORTED_MODULE_6__.Z.locals&&_node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_sass_loader_13_3_2_sass_1_66_1_webpack_5_88_2_node_modules_sass_loader_dist_cjs_js_template_story_scss__WEBPACK_IMPORTED_MODULE_6__.Z.locals},"../../node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"../../node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"../../node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"../../node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"../../node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{module.exports=function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"../../node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}}}]);