import{j as e}from"./iframe-INLwGkTz.js";import{b as i}from"./index-BauqGFX1.js";import{H as o}from"./index-CXWLKbVm.js";import{P as s,a as l,b as m}from"./index-3bRV0ZCL.js";import{H as c}from"./index-DU3BFoUl.js";import{F as d}from"./index-6-p9FgEb.js";import{R as p}from"./index-D7HGwEmC.js";import{T as g,b as h,c as b,e as n}from"./index-Ce7dDmh3.js";import{h as x,e as T,t as u,f as j,c as v,b as f,d as D,n as H}from"./util-SOdgIRqz.js";/* empty css                 */import{S as _}from"./SideNavigation-DDHea_fJ.js";import{P as w}from"./index-CsSrr73q.js";import{D as N}from"./index-C9djwVYJ.js";import"./index-DIk4TN7f.js";import"./index-D4N0sZOw.js";import"./parseISO-BBPDwbcZ.js";import"./index-BYZjSTbt.js";import"./index-c_O7DRtw.js";import"./index-C0nUUsxT.js";import"./index-C9g3YCU1.js";import"./index-BttBZIR4.js";import"./index-Bg_L1suY.js";import"./index-D0ukYYic.js";import"./index-8mDqA0SA.js";import"./index-CmgF6CBt.js";import"./index-Cs2afCeU.js";import"./index-BboUi63T.js";import"./v4-BKrj-4V8.js";import"./index-WkIG3dRE.js";import"./index-qBuSMRtV.js";import"./index-CcqDPEVA.js";import"./index-CszfZR5h.js";import"./index--WK7gSro.js";import"./index-Mas5QbYc.js";import"./index-D1SUr3Xk.js";import"./index-Ch6n7C1w.js";const pe={title:"Templates/Berichten Overzicht",args:{className:"denhaag-messages-page"},parameters:{layout:"fullscreen",chromatic:{viewports:[1768,1280,768,360]}}},P={...x,breadcrumbs:{navigationPath:[{label:"Home",href:"https://denhaag.nl/"},{label:"MijnDenHaag",href:"https://denhaag.nl/"},{label:"Mijn berichten"}]}},L="2023-10-05T06:41:34.427Z",k=[{new:!0,title:"Herinnering: Informatie geven voor uw aanvraag subsidie geluidsisolatie",dateTime:"2023-10-05T06:41:34.427Z",link:"#example"},{new:!0,title:"Betalen van uw parkeerbon",dateTime:"2023-10-04T19:47:36.593Z",link:"#example"},{title:"Informatie geven voor uw aanvraag Ooievaarspas",dateTime:"2023-09-30T19:47:36.593Z",link:"#example"},{title:"Tip: recht op subsidie",dateTime:"2023-08-28T19:47:36.593Z",link:"#example"},{title:"Informatie geven voor uw aanvraag subsidie geluidsisolatie",dateTime:"2023-06-15T19:47:36.593Z",link:"#example"}],t={render:r=>e.jsxs(s,{...r,children:[e.jsx(l,{children:e.jsx(c,{...P})}),e.jsxs(p,{className:"denhaag-page-content denhaag-responsive-content--sidebar",children:[e.jsx(_,{}),e.jsxs("main",{className:"denhaag-page-content__main",children:[e.jsx(o,{level:2,children:"Mijn berichten"}),e.jsx(g,{className:"denhaag-page-content__table",children:e.jsx(h,{children:e.jsxs(b,{children:[e.jsx(n,{children:"Onderwerp"}),e.jsx(n,{className:"denhaag-page-content__table-header--right",children:"Datum bericht"})]})})}),k.map(a=>e.jsx(i,{link:a.link,dateTime:a.dateTime,now:L,locale:u,labels:T,children:a.new?e.jsxs(e.Fragment,{children:[e.jsx(N,{className:"denhaag-page-content__badge",status:"neutral",children:"Nieuw"}),e.jsx("b",{children:a.title})]}):a.title},a.title)),e.jsx(w,{className:"denhaag-page-content__pagination",index:0,indexLimit:2})]})]}),e.jsx(m,{children:e.jsx(d,{newsletterData:H,contactData:D,legalData:f,copyrightLabel:v,socialData:j})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const ge=["BerichtenOverzicht"];export{t as BerichtenOverzicht,ge as __namedExportsOrder,pe as default};
