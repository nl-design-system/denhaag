import{j as e}from"./jsx-runtime-BjgbQsUx.js";import{b as l}from"./index-CcG9n5RZ.js";import{a as c}from"./index-D17Cz4L9.js";import{P as m,a as d,b as g}from"./index-BpXTuz7p.js";import{H as p}from"./index-CtXxZ3yI.js";import{F as h}from"./index-CxtFN-nk.js";import{R as b}from"./index-KHuOMlCF.js";import{T as x,b as T,c as u,e as n}from"./index-DOHbeu3a.js";import{t as j,d as f,n as v,c as H,f as _,a as w,b as D,h as P}from"./util-C6ji47Tq.js";/* empty css                      */import{S as N}from"./Sidenav-CbCqRfTe.js";import{P as L}from"./index-CrNnpzIC.js";import{S as k}from"./index-B40SEE4c.js";import"./index-D2MAbzvX.js";import"./index-B3p8u_35.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-D6XTehw4.js";import"./index-DFufuyhw.js";import"./index.esm-CQJ6TMKZ.js";import"./clsx-B-dksMZM.js";const $={title:"Templates/Berichten Overzicht",args:{className:"denhaag-messages-page"},parameters:{layout:"fullscreen",chromatic:{viewports:[1768,1280,768,360]}}},S={...P,breadcrumbs:{navigationPath:[{label:"Home",href:"https://denhaag.nl/"},{label:"MijnDenHaag",href:"https://denhaag.nl/"},{label:"Mijn berichten"}]}},F="2023-10-05T06:41:34.427Z",R=[{new:!0,title:"Herinnering: Informatie geven voor uw aanvraag subsidie geluidsisolatie",dateTime:"2023-10-05T06:41:34.427Z",link:"#example"},{new:!0,title:"Betalen van uw parkeerbon",dateTime:"2023-10-04T19:47:36.593Z",link:"#example"},{title:"Informatie geven voor uw aanvraag Ooievaarspas",dateTime:"2023-09-30T19:47:36.593Z",link:"#example"},{title:"Tip: recht op subsidie",dateTime:"2023-08-28T19:47:36.593Z",link:"#example"},{title:"Informatie geven voor uw aanvraag subsidie geluidsisolatie",dateTime:"2023-06-15T19:47:36.593Z",link:"#example"}],t={render:o=>e.jsxs(m,{...o,children:[e.jsx(d,{children:e.jsx(p,{...S})}),e.jsxs(b,{className:"denhaag-page-content denhaag-responsive-content--sidebar",children:[e.jsx(N,{}),e.jsxs("main",{className:"denhaag-page-content__main",children:[e.jsx(c,{children:"Mijn berichten"}),e.jsx(x,{className:"denhaag-page-content__table",children:e.jsx(T,{children:e.jsxs(u,{children:[e.jsx(n,{children:"Onderwerp"}),e.jsx(n,{className:"denhaag-page-content__table-header--right",children:"Datum bericht"})]})})}),R.map(a=>e.jsx(l,{link:a.link,dateTime:a.dateTime,now:F,locale:j,labels:f,children:a.new?e.jsxs(e.Fragment,{children:[e.jsx(k,{className:"denhaag-page-content__badge",children:"Nieuw"}),e.jsx("b",{children:a.title})]}):a.title},a.title)),e.jsx(L,{className:"denhaag-page-content__pagination",index:0,indexLimit:2})]})]}),e.jsx(g,{children:e.jsx(h,{newsletterData:v,contactData:H,legalData:_,copyrightLabel:w,socialData:D})})]})};var r,s,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => <Page {...args}>
      <PageHeader>
        <HeaderLogic {...messagesHeaderProps} />
      </PageHeader>
      <ResponsiveContent className="denhaag-page-content denhaag-responsive-content--sidebar">
        <Sidenav />
        <main className="denhaag-page-content__main">
          <Heading2>Mijn berichten</Heading2>
          <Table className="denhaag-page-content__table">
            <TableHead>
              <TableRow>
                <TableHeader>Onderwerp</TableHeader>
                <TableHeader className="denhaag-page-content__table-header--right">Datum bericht</TableHeader>
              </TableRow>
            </TableHead>
          </Table>
          {messages.map(m => <Action key={m.title} link={m.link} dateTime={m.dateTime} now={currentDate} locale={templateLocale} labels={dateFormatLabels}>
              {m.new ? <>
                  <StatusBadge className="denhaag-page-content__badge">Nieuw</StatusBadge>
                  <b>{m.title}</b>
                </> : m.title}
            </Action>)}
          <Pagination className="denhaag-page-content__pagination" index={0} indexLimit={2} />
        </main>
      </ResponsiveContent>
      <PageFooter>
        <Footer newsletterData={newsletterData} contactData={contactData} legalData={footerLegalData} copyrightLabel={copyright} socialData={footerSocialData} />
      </PageFooter>
    </Page>
}`,...(i=(s=t.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const ee=["BerichtenOverzicht"];export{t as BerichtenOverzicht,ee as __namedExportsOrder,$ as default};
