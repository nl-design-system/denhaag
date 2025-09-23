import{j as e}from"./iframe-DL4oFGf8.js";import{b as i}from"./index-W8q-U7-W.js";import{H as o}from"./index-CqWJBPg1.js";import{P as s,a as l,b as m}from"./index-K1NZ_KJP.js";import{H as c}from"./index-NZQl0JyL.js";import{F as d}from"./index-DvMN0en_.js";import{R as p}from"./index-C9z6PmfZ.js";import{T as g,a as h,b,c as n}from"./index-BHOdcX3K.js";import{h as x,e as T,t as u,a as j,d as v,f,c as D,n as H}from"./util-D0SY-Hsn.js";/* empty css                 */import{S as _}from"./SideNavigation-jZmDDb76.js";import{P as w}from"./index-W2R2Sc9c.js";import{D as N}from"./index-PH_6QYIG.js";import"./index-CyGnm2m6.js";import"./index-D4N0sZOw.js";import"./parseISO-BBPDwbcZ.js";import"./index-B_LiRgxS.js";import"./index-CG2Ttx9L.js";import"./index-B2mPrMgk.js";import"./index-Dt_cuhCN.js";import"./index-gyeNwNzz.js";import"./index-Bs2gcdbW.js";import"./index-CIeD5tX-.js";import"./index-rCszFGw5.js";import"./index-DeIT22Cq.js";import"./index-BTD-kZIR.js";import"./index-D1LIEsdZ.js";import"./index-n2c5tm6S.js";import"./v4-BKrj-4V8.js";import"./index-CXavIcC-.js";import"./index-D5gFes-K.js";import"./index-D2g2cimR.js";import"./index-CmemwkYA.js";import"./index-DMnq0JX7.js";import"./index-Mas5QbYc.js";import"./index-ClSjhY67.js";import"./index-CbUIf2Gl.js";const ge={title:"Templates/Berichten Overzicht",args:{className:"denhaag-messages-page"},parameters:{layout:"fullscreen",chromatic:{viewports:[1768,1280,768,360]}}},P={...x,breadcrumbs:{navigationPath:[{label:"Home",href:"https://denhaag.nl/"},{label:"MijnDenHaag",href:"https://denhaag.nl/"},{label:"Mijn berichten"}]}},L="2023-10-05T06:41:34.427Z",k=[{new:!0,title:"Herinnering: Informatie geven voor uw aanvraag subsidie geluidsisolatie",dateTime:"2023-10-05T06:41:34.427Z",link:"#example"},{new:!0,title:"Betalen van uw parkeerbon",dateTime:"2023-10-04T19:47:36.593Z",link:"#example"},{title:"Informatie geven voor uw aanvraag Ooievaarspas",dateTime:"2023-09-30T19:47:36.593Z",link:"#example"},{title:"Tip: recht op subsidie",dateTime:"2023-08-28T19:47:36.593Z",link:"#example"},{title:"Informatie geven voor uw aanvraag subsidie geluidsisolatie",dateTime:"2023-06-15T19:47:36.593Z",link:"#example"}],t={render:r=>e.jsxs(s,{...r,children:[e.jsx(l,{children:e.jsx(c,{...P})}),e.jsxs(p,{className:"denhaag-page-content denhaag-responsive-content--sidebar",children:[e.jsx(_,{}),e.jsxs("main",{className:"denhaag-page-content__main",children:[e.jsx(o,{level:2,children:"Mijn berichten"}),e.jsx(g,{className:"denhaag-page-content__table",children:e.jsx(h,{children:e.jsxs(b,{children:[e.jsx(n,{children:"Onderwerp"}),e.jsx(n,{className:"denhaag-page-content__table-header--right",children:"Datum bericht"})]})})}),k.map(a=>e.jsx(i,{link:a.link,dateTime:a.dateTime,now:L,locale:u,labels:T,children:a.new?e.jsxs(e.Fragment,{children:[e.jsx(N,{className:"denhaag-page-content__badge",status:"neutral",children:"Nieuw"}),e.jsx("b",{children:a.title})]}):a.title},a.title)),e.jsx(w,{className:"denhaag-page-content__pagination",index:0,indexLimit:2})]})]}),e.jsx(m,{children:e.jsx(d,{newsletterData:H,contactData:D,legalData:f,copyrightLabel:v,socialData:j})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <Page {...args}>
      <PageHeader>
        <HeaderLogic {...messagesHeaderProps} />
      </PageHeader>
      <ResponsiveContent className="denhaag-page-content denhaag-responsive-content--sidebar">
        <SideNavigation />
        <main className="denhaag-page-content__main">
          <Heading level={2}>Mijn berichten</Heading>
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
                  <DataBadge className="denhaag-page-content__badge" status="neutral">
                    Nieuw
                  </DataBadge>
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
}`,...t.parameters?.docs?.source}}};const he=["BerichtenOverzicht"];export{t as BerichtenOverzicht,he as __namedExportsOrder,ge as default};
