import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{a as l}from"./index-D9DdIy7k.js";import{P as c,a as p,b as d}from"./index-KiyqMnDY.js";import{H as g}from"./index-yKkejtJu.js";import{F as m}from"./index-B8YvCRv5.js";import{R as h}from"./index-CYZyLAOJ.js";import{T as f}from"./index-DsqOJc5V.js";import{C as e}from"./index-CMjyaJhI.js";import"./index-CMBaHEP0.js";import{n as j,c as v,f as b,a as x,b as P,h as D,t}from"./util-BontghLu.js";/* empty css                       */import{S as u}from"./Sidenav-MbpjwHWG.js";import"./index-raSRI-5R.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DgcIFbrm.js";import"./index-BMfqj8mp.js";import"./index.esm-CEkH1hZj.js";import"./clsx-B-dksMZM.js";const G={title:"Templates/Zaak Overzicht",parameters:{layout:"fullscreen",chromatic:{viewports:[1768,1280,768,360]}}},H={...D,breadcrumbs:{navigationPath:[{label:"Home",href:"https://denhaag.nl/"},{label:"MijnDenHaag",href:"https://denhaag.nl/"},{label:"Mijn lopende zaken"}]}},k={tabData:[{label:"Lopende Zaken",panelContent:a.jsxs("section",{className:"denhaag-card-group",children:[a.jsx(e,{date:"2020-01-21T00:00:00.000Z",locale:t,title:"Aanvraag subsidie geluidsisolatie"}),a.jsx(e,{date:"2020-01-21T00:00:00.000Z",locale:t,title:"Aanvraag Ooievaarspas"})]})},{label:"Afgeronde zaken",panelContent:a.jsxs("section",{className:"denhaag-card-group",children:[a.jsx(e,{active:!1,date:"2019-01-21T00:00:00.000Z",locale:t,title:"Aanvraag Parkeervergunning"}),a.jsx(e,{active:!1,date:"2019-01-21T00:00:00.000Z",locale:t,title:"Aanvraag Omgevingsvergunning"})]})}]},n={render:i=>a.jsxs(c,{...i,children:[a.jsx(p,{children:a.jsx(g,{...H})}),a.jsxs(h,{className:"denhaag-page-content denhaag-responsive-content--sidebar",children:[a.jsx(u,{}),a.jsxs("main",{className:"denhaag-page-content__main",children:[a.jsx(l,{children:"Mijn lopende zaken"}),a.jsx(f,{...k})]})]}),a.jsx(d,{children:a.jsx(m,{newsletterData:j,contactData:v,legalData:b,copyrightLabel:x,socialData:P})})]})};var r,s,o;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(o=(s=n.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};const I=["ZaakOverzicht"];export{n as ZaakOverzicht,I as __namedExportsOrder,G as default};
