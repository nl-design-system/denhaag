import{j as e}from"./iframe-StdiXSPA.js";import{a as i}from"./index-CKFjiONr.js";import{H as o}from"./index-D3p89qeh.js";import{P as s,a as l,b as m}from"./index-zlTeTdIa.js";import{H as c}from"./index-CZqrnWrg.js";import{F as d}from"./index-I2pPsr0h.js";import{R as p}from"./index-DLuwotAl.js";import{T as g,a as h,b,c as n}from"./index-DL4lkUDk.js";import{h as x,e as T,t as u,a as j,d as v,f,c as D,n as H}from"./util-B1QLZ3q_.js";/* empty css                 */import{S as _}from"./SideNavigation-Do0I0qd1.js";import{P as w}from"./index-CburQrJc.js";import{D as N}from"./index-Ein8UDlE.js";import"./index-HzMIDPsE.js";import"./index-D4N0sZOw.js";import"./parseISO-BBPDwbcZ.js";import"./index-DrDufh21.js";import"./index-DrpSiE__.js";import"./index-Cyu5JZBj.js";import"./index-C6D5w5K3.js";import"./index-CGpxbkJN.js";import"./index-DM1e1wC1.js";import"./index-BmtovwrE.js";import"./index-DVnXMkbe.js";import"./index-DuWawXk9.js";import"./index-CVNUbTBG.js";import"./index-D5cgg07W.js";import"./index-D72sy44B.js";import"./v4-BKrj-4V8.js";import"./index-Cfv5qBo6.js";import"./index-DEN42cIO.js";import"./index-BL7durYX.js";import"./index-B8K9o6Ci.js";import"./index-BduC-0CL.js";import"./index-Mas5QbYc.js";import"./index-BLhMAQrq.js";import"./index-DmC2Abl0.js";const ge={title:"Templates/Berichten Overzicht",args:{className:"denhaag-messages-page"},parameters:{layout:"fullscreen",chromatic:{viewports:[1768,1280,768,360]}}},P={...x,breadcrumbs:{navigationPath:[{label:"Home",href:"https://denhaag.nl/"},{label:"MijnDenHaag",href:"https://denhaag.nl/"},{label:"Mijn berichten"}]}},L="2023-10-05T06:41:34.427Z",k=[{new:!0,title:"Herinnering: Informatie geven voor uw aanvraag subsidie geluidsisolatie",dateTime:"2023-10-05T06:41:34.427Z",link:"#example"},{new:!0,title:"Betalen van uw parkeerbon",dateTime:"2023-10-04T19:47:36.593Z",link:"#example"},{title:"Informatie geven voor uw aanvraag Ooievaarspas",dateTime:"2023-09-30T19:47:36.593Z",link:"#example"},{title:"Tip: recht op subsidie",dateTime:"2023-08-28T19:47:36.593Z",link:"#example"},{title:"Informatie geven voor uw aanvraag subsidie geluidsisolatie",dateTime:"2023-06-15T19:47:36.593Z",link:"#example"}],t={render:r=>e.jsxs(s,{...r,children:[e.jsx(l,{children:e.jsx(c,{...P})}),e.jsxs(p,{className:"denhaag-page-content denhaag-responsive-content--sidebar",children:[e.jsx(_,{}),e.jsxs("main",{className:"denhaag-page-content__main",children:[e.jsx(o,{level:2,children:"Mijn berichten"}),e.jsx(g,{className:"denhaag-page-content__table",children:e.jsx(h,{children:e.jsxs(b,{children:[e.jsx(n,{children:"Onderwerp"}),e.jsx(n,{className:"denhaag-page-content__table-header--right",children:"Datum bericht"})]})})}),k.map(a=>e.jsx(i,{link:a.link,dateTime:a.dateTime,now:L,locale:u,labels:T,children:a.new?e.jsxs(e.Fragment,{children:[e.jsx(N,{className:"denhaag-page-content__badge",status:"neutral",children:"Nieuw"}),e.jsx("b",{children:a.title})]}):a.title},a.title)),e.jsx(w,{className:"denhaag-page-content__pagination",index:0,indexLimit:2})]})]}),e.jsx(m,{children:e.jsx(d,{newsletterData:H,contactData:D,legalData:f,copyrightLabel:v,socialData:j})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
