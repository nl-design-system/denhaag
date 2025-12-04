import{j as e}from"./iframe-StdiXSPA.js";import{P as i}from"./index-BL7durYX.js";import{P as n,a as s,b as g}from"./index-zlTeTdIa.js";import{H as m}from"./index-CZqrnWrg.js";import{F as l}from"./index-I2pPsr0h.js";import{R as p}from"./index-DLuwotAl.js";import{L as c}from"./index-DrDufh21.js";import{A as d}from"./index-B7SdQ4tz.js";import{H as t}from"./index-D3p89qeh.js";import{h,a as f,d as D,f as u,c as H,n as P}from"./util-B1QLZ3q_.js";/* empty css                       */import{A as r}from"./CardGroupUtils-VGPb-K--.js";import"./index-DrpSiE__.js";import"./index-HzMIDPsE.js";import"./index-Cyu5JZBj.js";import"./index-C6D5w5K3.js";import"./index-CGpxbkJN.js";import"./index-DM1e1wC1.js";import"./index-BmtovwrE.js";import"./index-DVnXMkbe.js";import"./index-DuWawXk9.js";import"./index-CVNUbTBG.js";import"./index-D5cgg07W.js";import"./index-D72sy44B.js";import"./v4-BKrj-4V8.js";import"./index-Cfv5qBo6.js";import"./index-DEN42cIO.js";import"./index-B8K9o6Ci.js";import"./index-BduC-0CL.js";import"./index-Mas5QbYc.js";import"./index-BLhMAQrq.js";import"./index-geNQsD2I.js";import"./index-CGmUUiZl.js";import"./index-CMBaHEP0.js";import"./index-BiJOcIA0.js";const te={title:"Templates/Login",parameters:{layout:"fullscreen",chromatic:{viewports:[1768,1280,768,360]}}},x={...h,breadcrumbs:{navigationPath:[{label:"Home",href:"https://denhaag.nl/"},{label:"Inloggen bij MijnDenHaag"}]},userprofileMenu:void 0},a={render:o=>e.jsxs(n,{...o,children:[e.jsx(s,{children:e.jsx(m,{...x})}),e.jsxs(p,{className:"denhaag-page-content",children:[e.jsx(t,{level:2,children:"Inloggen"}),e.jsxs(i,{children:["Bent u gemachtigd? ",e.jsx(c,{href:"#",children:"Log in plaats hiervan in als gemachtigde."})]}),e.jsx(r,{cards:["DigiD","eHerkenning","eIDAS"],responsive:!0}),e.jsx(t,{level:2,children:"Inloggen als gemachtigde"}),e.jsx(d,{text:"",title:"Om in te loggen als gemachtigde heeft u een geldige machtiging nodig.",variant:"info",className:"denhaag-authentication__alert"}),e.jsx(r,{cards:["DigiD","eHerkenning"],responsive:!0})]}),e.jsx(g,{children:e.jsx(l,{newsletterData:P,contactData:H,legalData:u,copyrightLabel:D,socialData:f})})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => <Page {...args}>
      <PageHeader>
        <HeaderLogic {...loginPageHeaderProps} />
      </PageHeader>
      <ResponsiveContent className="denhaag-page-content">
        <Heading level={2}>Inloggen</Heading>
        <Paragraph>
          Bent u gemachtigd? <Link href="#">Log in plaats hiervan in als gemachtigde.</Link>
        </Paragraph>
        <AuthenticationCardGroup cards={['DigiD', 'eHerkenning', 'eIDAS']} responsive />
        <Heading level={2}>Inloggen als gemachtigde</Heading>
        <Alert text="" title="Om in te loggen als gemachtigde heeft u een geldige machtiging nodig." variant="info" className="denhaag-authentication__alert" />
        <AuthenticationCardGroup cards={['DigiD', 'eHerkenning']} responsive />
      </ResponsiveContent>
      <PageFooter>
        <Footer newsletterData={newsletterData} contactData={contactData} legalData={footerLegalData} copyrightLabel={copyright} socialData={footerSocialData} />
      </PageFooter>
    </Page>
}`,...a.parameters?.docs?.source}}};const re=["Login"];export{a as Login,re as __namedExportsOrder,te as default};
