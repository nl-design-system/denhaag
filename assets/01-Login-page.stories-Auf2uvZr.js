import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{a as t,P as g}from"./index-D9DdIy7k.js";import{P as l,a as c,b as m}from"./index-KiyqMnDY.js";import{H as p}from"./index-yKkejtJu.js";import{F as d}from"./index-B8YvCRv5.js";import{R as h}from"./index-CYZyLAOJ.js";import{L as f}from"./index-CoUGp_r7.js";import{A as D}from"./index-BXbb1K7N.js";import{n as u,c as P,f as x,a as H,b as j,h as L}from"./util-BontghLu.js";/* empty css                       */import{A as r}from"./CardGroupUtils-Dfh2Ohbw.js";import"./index-raSRI-5R.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DgcIFbrm.js";import"./index-DMcw6jc8.js";import"./index-Mas5QbYc.js";import"./index-DU0mHMLr.js";import"./index-CMBaHEP0.js";import"./index-BiJOcIA0.js";import"./clsx-B-dksMZM.js";const J={title:"Templates/Login",parameters:{layout:"fullscreen",chromatic:{viewports:[1768,1280,768,360]}}},v={...L,breadcrumbs:{navigationPath:[{label:"Home",href:"https://denhaag.nl/"},{label:"Inloggen bij MijnDenHaag"}]},userprofileMenu:void 0},a={render:s=>e.jsxs(l,{...s,children:[e.jsx(c,{children:e.jsx(p,{...v})}),e.jsxs(h,{className:"denhaag-page-content",children:[e.jsx(t,{children:"Inloggen"}),e.jsxs(g,{children:["Bent u gemachtigd? ",e.jsx(f,{href:"#",children:"Log in plaats hiervan in als gemachtigde."})]}),e.jsx(r,{cards:["DigiD","eHerkenning","eIDAS"],responsive:!0}),e.jsx(t,{children:"Inloggen als gemachtigde"}),e.jsx(D,{text:"",title:"Om in te loggen als gemachtigde heeft u een geldige machtiging nodig.",variant:"info",className:"denhaag-authentication__alert"}),e.jsx(r,{cards:["DigiD","eHerkenning"],responsive:!0})]}),e.jsx(m,{children:e.jsx(d,{newsletterData:u,contactData:P,legalData:x,copyrightLabel:H,socialData:j})})]})};var o,i,n;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => <Page {...args}>
      <PageHeader>
        <HeaderLogic {...loginPageHeaderProps} />
      </PageHeader>
      <ResponsiveContent className="denhaag-page-content">
        <Heading2>Inloggen</Heading2>
        <Paragraph>
          Bent u gemachtigd? <Link href="#">Log in plaats hiervan in als gemachtigde.</Link>
        </Paragraph>
        <AuthenticationCardGroup cards={['DigiD', 'eHerkenning', 'eIDAS']} responsive />
        <Heading2>Inloggen als gemachtigde</Heading2>
        <Alert text="" title="Om in te loggen als gemachtigde heeft u een geldige machtiging nodig." variant="info" className="denhaag-authentication__alert" />
        <AuthenticationCardGroup cards={['DigiD', 'eHerkenning']} responsive />
      </ResponsiveContent>
      <PageFooter>
        <Footer newsletterData={newsletterData} contactData={contactData} legalData={footerLegalData} copyrightLabel={copyright} socialData={footerSocialData} />
      </PageFooter>
    </Page>
}`,...(n=(i=a.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};const K=["Login"];export{a as Login,K as __namedExportsOrder,J as default};
