import{j as a}from"./jsx-runtime-BlAj40OV.js";import{a as l}from"./index-D6j1Re9v.js";import{P as c,a as p,b as d}from"./index-CdEFNZVZ.js";import{H as g}from"./index-CYqq-I-b.js";import{F as m}from"./index-EukLVqu8.js";import{R as h}from"./index-D7lB6d1r.js";import{T as f}from"./index-D8JzUkg4.js";import{C as e}from"./index-BfZRi_Ub.js";import"./index-CMBaHEP0.js";import{n as j,c as v,f as b,a as x,b as P,h as D,t}from"./util-p4vC-r-m.js";/* empty css                       */import{S as u}from"./Sidenav-BbU7jQxr.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zeTQWRx.js";import"./index-Czr7FHMI.js";import"./index.esm-Dz5xT4yr.js";import"./clsx-B-dksMZM.js";import"./extends-CF3RwP-h.js";const I={title:"Templates/Zaak Overzicht",parameters:{layout:"fullscreen",chromatic:{viewports:[1768,1280,768,360]}}},H={...D,breadcrumbs:{navigationPath:[{label:"Home",href:"https://denhaag.nl/"},{label:"MijnDenHaag",href:"https://denhaag.nl/"},{label:"Mijn lopende zaken"}]}},k={tabData:[{label:"Lopende Zaken",panelContent:a.jsxs("section",{className:"denhaag-card-group",children:[a.jsx(e,{date:"2020-01-21T00:00:00.000Z",locale:t,title:"Aanvraag subsidie geluidsisolatie"}),a.jsx(e,{date:"2020-01-21T00:00:00.000Z",locale:t,title:"Aanvraag Ooievaarspas"})]})},{label:"Afgeronde zaken",panelContent:a.jsxs("section",{className:"denhaag-card-group",children:[a.jsx(e,{active:!1,date:"2019-01-21T00:00:00.000Z",locale:t,title:"Aanvraag Parkeervergunning"}),a.jsx(e,{active:!1,date:"2019-01-21T00:00:00.000Z",locale:t,title:"Aanvraag Omgevingsvergunning"})]})}]},n={render:i=>a.jsxs(c,{...i,children:[a.jsx(p,{children:a.jsx(g,{...H})}),a.jsxs(h,{className:"denhaag-page-content denhaag-responsive-content--sidebar",children:[a.jsx(u,{}),a.jsxs("main",{className:"denhaag-page-content__main",children:[a.jsx(l,{children:"Mijn lopende zaken"}),a.jsx(f,{...k})]})]}),a.jsx(d,{children:a.jsx(m,{newsletterData:j,contactData:v,legalData:b,copyrightLabel:x,socialData:P})})]})};var r,o,s;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(s=(o=n.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const J=["ZaakOverzicht"];export{n as ZaakOverzicht,J as __namedExportsOrder,I as default};
