import{j as a}from"./jsx-runtime-BlAj40OV.js";import{a as i}from"./index-D6j1Re9v.js";import{P as c,a as l,b as p}from"./index-CdEFNZVZ.js";import{H as d}from"./index-CYqq-I-b.js";import{F as g}from"./index-EukLVqu8.js";import{R as m}from"./index-D7lB6d1r.js";import{T as h}from"./index-D8JzUkg4.js";import{C as e}from"./index-B6vjwGUo.js";import"./index-CMBaHEP0.js";import{n as f,c as j,f as v,a as b,b as x,h as P}from"./util-CN-KBVNl.js";/* empty css                       */import{S as D}from"./Sidenav-DeYx3EiC.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DZxrVG7T.js";import"./index-BUl-PtSi.js";import"./index.esm-Dz5xT4yr.js";import"./clsx-B-dksMZM.js";import"./extends-CF3RwP-h.js";const G={title:"Templates/Zaak Overzicht",parameters:{layout:"fullscreen",chromatic:{viewports:[1768,1280,768,360]}}},u={...P,breadcrumbs:{navigationPath:[{label:"Home",href:"https://denhaag.nl/"},{label:"MijnDenHaag",href:"https://denhaag.nl/"},{label:"Mijn lopende zaken"}]}},H={tabData:[{label:"Lopende Zaken",panelContent:a.jsxs("section",{className:"denhaag-card-group",children:[a.jsx(e,{date:"2020-01-21T00:00:00.000Z",title:"Aanvraag subsidie geluidsisolatie"}),a.jsx(e,{date:"2020-01-21T00:00:00.000Z",title:"Aanvraag Ooievaarspas"})]})},{label:"Afgeronde zaken",panelContent:a.jsxs("section",{className:"denhaag-card-group",children:[a.jsx(e,{active:!1,date:"2019-01-21T00:00:00.000Z",title:"Aanvraag Parkeervergunning"}),a.jsx(e,{active:!1,date:"2019-01-21T00:00:00.000Z",title:"Aanvraag Omgevingsvergunning"})]})}]},t={render:o=>a.jsxs(c,{...o,children:[a.jsx(l,{children:a.jsx(d,{...u})}),a.jsxs(m,{className:"denhaag-page-content denhaag-responsive-content--sidebar",children:[a.jsx(D,{}),a.jsxs("main",{className:"denhaag-page-content__main",children:[a.jsx(i,{children:"Mijn lopende zaken"}),a.jsx(h,{...H})]})]}),a.jsx(p,{children:a.jsx(g,{newsletterData:f,contactData:j,legalData:v,copyrightLabel:b,socialData:x})})]})};var n,r,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(r=t.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const I=["ZaakOverzicht"];export{t as ZaakOverzicht,I as __namedExportsOrder,G as default};
