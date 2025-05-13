import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{a as m}from"./index-CNu5sYmo.js";import{P as d,a as g,b as p}from"./index-KiyqMnDY.js";import{H as h}from"./index-mNcmYFUA.js";import{F as x}from"./index-CwCMVzRz.js";import{R as f}from"./index-CYZyLAOJ.js";import{T as j}from"./index-DGVm4A0l.js";import{C as e,f as t,l as n}from"./index-CghZ-4ZG.js";import"./index-CMBaHEP0.js";import{h as v,f as D,c as b,b as P,d as u,n as S,t as r}from"./util-CWUwN0p1.js";/* empty css                       */import{S as H}from"./Sidenav-CqtAXswE.js";import"./index-raSRI-5R.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BNdFKZij.js";import"./index-BJ-DCbMk.js";import"./index-BMfqj8mp.js";const G={title:"Templates/Zaak Overzicht",args:{className:"denhaag-cases-page"},parameters:{layout:"fullscreen",chromatic:{viewports:[1768,1280,768,360]}}},T={...v,breadcrumbs:{navigationPath:[{label:"Home",href:"https://denhaag.nl/"},{label:"MijnDenHaag",href:"https://denhaag.nl/"},{label:"Mijn lopende zaken"}]}},k={tabData:[{label:"Lopende Zaken",panelContent:a.jsxs("section",{className:"denhaag-card-group",children:[a.jsx(e,{context:a.jsx("time",{dateTime:new Date("2020-01-21").toISOString(),children:t({dateTime:"2020-01-21",locale:r,format:n})[0]}),title:"Aanvraag subsidie geluidsisolatie"}),a.jsx(e,{context:a.jsx("time",{dateTime:new Date("2020-01-21").toISOString(),children:t({dateTime:"2020-01-21",locale:r,format:n})[0]}),title:"Aanvraag Ooievaarspas"})]})},{label:"Afgeronde zaken",panelContent:a.jsxs("section",{className:"denhaag-card-group",children:[a.jsx(e,{appearance:"archived",title:"Aanvraag Parkeervergunning",context:a.jsx("time",{dateTime:new Date("2020-01-21").toISOString(),children:t({dateTime:"2020-01-21",locale:r,format:n})[0]})}),a.jsx(e,{appearance:"archived",title:"Aanvraag Omgevingsvergunning",context:a.jsx("time",{dateTime:new Date("2020-01-21").toISOString(),children:t({dateTime:"2020-01-21",locale:r,format:n})[0]})})]})}]},o={render:l=>a.jsxs(d,{...l,children:[a.jsx(g,{children:a.jsx(h,{...T})}),a.jsxs(f,{className:"denhaag-page-content denhaag-responsive-content--sidebar",children:[a.jsx(H,{}),a.jsxs("main",{className:"denhaag-page-content__main",children:[a.jsx(m,{children:"Mijn lopende zaken"}),a.jsx(j,{...k})]})]}),a.jsx(p,{children:a.jsx(x,{newsletterData:S,contactData:u,legalData:P,copyrightLabel:b,socialData:D})})]})};var s,i,c;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => <Page {...args}>
      <PageHeader>
        <HeaderLogic {...zakenHeaderProps} />
      </PageHeader>
      <ResponsiveContent className="denhaag-page-content denhaag-responsive-content--sidebar">
        <Sidenav />
        <main className="denhaag-page-content__main">
          <Heading2>Mijn lopende zaken</Heading2>
          <Tabs {...tabsProps}></Tabs>
        </main>
      </ResponsiveContent>
      <PageFooter>
        <Footer newsletterData={newsletterData} contactData={contactData} legalData={footerLegalData} copyrightLabel={copyright} socialData={footerSocialData} />
      </PageFooter>
    </Page>
}`,...(c=(i=o.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const J=["ZaakOverzicht"];export{o as ZaakOverzicht,J as __namedExportsOrder,G as default};
