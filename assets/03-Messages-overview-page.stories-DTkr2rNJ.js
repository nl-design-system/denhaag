import{j as e}from"./iframe-DCMBzG9p.js";import{b as i}from"./index-C-shoVmV.js";import{H as o}from"./index-S4Lu7-dc.js";import{P as s,a as l,b as m}from"./index-dV9RVP5L.js";import{H as c}from"./index-CGdwsEOH.js";import{F as d}from"./index-DYsbPO6U.js";import{R as p}from"./index-EgXMK6db.js";import{T as g,b as h,c as b,e as n}from"./index-CLGYy5ss.js";import{h as x,e as T,t as u,f as j,c as v,b as f,d as D,n as H}from"./util-NjxEPxes.js";/* empty css                 */import{S as _}from"./SideNavigation-BC2uh5x4.js";import{P as w}from"./index-CNwZM8qr.js";import{D as N}from"./index-Ck0vBSs7.js";import"./index-C5ZlZBCB.js";import"./index-aEBAu-RN.js";import"./index-CV-PVoA_.js";import"./index-4InRrHlw.js";import"./index-BC62FvYR.js";import"./index-C7QsD1j2.js";import"./index-ByKyFpIp.js";import"./index-D3kv-rvF.js";import"./index-BZux3-Xt.js";import"./index-C1IET-0v.js";import"./index-8VztJc-b.js";import"./index-DfrRTshN.js";import"./index-Bisr4RHa.js";import"./v4-BKrj-4V8.js";import"./index-vJIFbOad.js";import"./index-Bgker8KL.js";import"./index-CAiyWZI8.js";import"./index-BaCumxLY.js";import"./index-uEY0ktiS.js";import"./index-Mas5QbYc.js";import"./index-Dp0XXsf2.js";import"./index-BXs4NkK4.js";const de={title:"Templates/Berichten Overzicht",args:{className:"denhaag-messages-page"},parameters:{layout:"fullscreen",chromatic:{viewports:[1768,1280,768,360]}}},P={...x,breadcrumbs:{navigationPath:[{label:"Home",href:"https://denhaag.nl/"},{label:"MijnDenHaag",href:"https://denhaag.nl/"},{label:"Mijn berichten"}]}},L="2023-10-05T06:41:34.427Z",k=[{new:!0,title:"Herinnering: Informatie geven voor uw aanvraag subsidie geluidsisolatie",dateTime:"2023-10-05T06:41:34.427Z",link:"#example"},{new:!0,title:"Betalen van uw parkeerbon",dateTime:"2023-10-04T19:47:36.593Z",link:"#example"},{title:"Informatie geven voor uw aanvraag Ooievaarspas",dateTime:"2023-09-30T19:47:36.593Z",link:"#example"},{title:"Tip: recht op subsidie",dateTime:"2023-08-28T19:47:36.593Z",link:"#example"},{title:"Informatie geven voor uw aanvraag subsidie geluidsisolatie",dateTime:"2023-06-15T19:47:36.593Z",link:"#example"}],t={render:r=>e.jsxs(s,{...r,children:[e.jsx(l,{children:e.jsx(c,{...P})}),e.jsxs(p,{className:"denhaag-page-content denhaag-responsive-content--sidebar",children:[e.jsx(_,{}),e.jsxs("main",{className:"denhaag-page-content__main",children:[e.jsx(o,{level:2,children:"Mijn berichten"}),e.jsx(g,{className:"denhaag-page-content__table",children:e.jsx(h,{children:e.jsxs(b,{children:[e.jsx(n,{children:"Onderwerp"}),e.jsx(n,{className:"denhaag-page-content__table-header--right",children:"Datum bericht"})]})})}),k.map(a=>e.jsx(i,{link:a.link,dateTime:a.dateTime,now:L,locale:u,labels:T,children:a.new?e.jsxs(e.Fragment,{children:[e.jsx(N,{className:"denhaag-page-content__badge",status:"neutral",children:"Nieuw"}),e.jsx("b",{children:a.title})]}):a.title},a.title)),e.jsx(w,{className:"denhaag-page-content__pagination",index:0,indexLimit:2})]})]}),e.jsx(m,{children:e.jsx(d,{newsletterData:H,contactData:D,legalData:f,copyrightLabel:v,socialData:j})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const pe=["BerichtenOverzicht"];export{t as BerichtenOverzicht,pe as __namedExportsOrder,de as default};
