import{j as e}from"./iframe-Ow6YiWX-.js";import{a as i}from"./index-DAmp_K5A.js";import{H as o}from"./index-DtcidVju.js";import{P as s,a as l,b as m}from"./index-CBXs7OsR.js";import{H as c}from"./index-DQoqTDI1.js";import{F as d}from"./index-DhkWx6_t.js";import{R as p}from"./index-DijDmc4x.js";import{T as g,a as h,b,c as n}from"./index-DFsEvIEJ.js";import{h as x,e as T,t as u,a as j,d as v,f,c as D,n as H}from"./util-Dbdu-mdo.js";/* empty css                 */import{S as _}from"./SideNavigation-CtUkWuxi.js";import{P as w}from"./index-CNxz4Dtr.js";import{D as N}from"./index-CtOX3GrL.js";import"./index-KstrBhAJ.js";import"./index-D4N0sZOw.js";import"./parseISO-BBPDwbcZ.js";import"./index-pSapZ4bB.js";import"./index-BWmy-RNV.js";import"./index-CWQ8xtG0.js";import"./index-CAb6k8sl.js";import"./index-82rFxotG.js";import"./index-CK9ZA8iy.js";import"./index-B_d_btzC.js";import"./index-BtoMBcal.js";import"./index-BZl2bA6F.js";import"./index-fH4K_4Zd.js";import"./index-iXnGgZ6u.js";import"./index-Bz81amKK.js";import"./v4-BKrj-4V8.js";import"./index-4244R8tp.js";import"./index-EReRdmx6.js";import"./index-PRVnIy2L.js";import"./index-DaVaAU11.js";import"./index-DKKg-2rT.js";import"./index-Mas5QbYc.js";import"./index-B4EYsZMa.js";import"./index-tn1Ky2X4.js";const ge={title:"Templates/Berichten Overzicht",args:{className:"denhaag-messages-page"},parameters:{layout:"fullscreen",chromatic:{viewports:[1768,1280,768,360]}}},P={...x,breadcrumbs:{navigationPath:[{label:"Home",href:"https://denhaag.nl/"},{label:"MijnDenHaag",href:"https://denhaag.nl/"},{label:"Mijn berichten"}]}},L="2023-10-05T06:41:34.427Z",k=[{new:!0,title:"Herinnering: Informatie geven voor uw aanvraag subsidie geluidsisolatie",dateTime:"2023-10-05T06:41:34.427Z",link:"#example"},{new:!0,title:"Betalen van uw parkeerbon",dateTime:"2023-10-04T19:47:36.593Z",link:"#example"},{title:"Informatie geven voor uw aanvraag Ooievaarspas",dateTime:"2023-09-30T19:47:36.593Z",link:"#example"},{title:"Tip: recht op subsidie",dateTime:"2023-08-28T19:47:36.593Z",link:"#example"},{title:"Informatie geven voor uw aanvraag subsidie geluidsisolatie",dateTime:"2023-06-15T19:47:36.593Z",link:"#example"}],t={render:r=>e.jsxs(s,{...r,children:[e.jsx(l,{children:e.jsx(c,{...P})}),e.jsxs(p,{className:"denhaag-page-content denhaag-responsive-content--sidebar",children:[e.jsx(_,{}),e.jsxs("main",{className:"denhaag-page-content__main",children:[e.jsx(o,{level:2,children:"Mijn berichten"}),e.jsx(g,{className:"denhaag-page-content__table",children:e.jsx(h,{children:e.jsxs(b,{children:[e.jsx(n,{children:"Onderwerp"}),e.jsx(n,{className:"denhaag-page-content__table-header--right",children:"Datum bericht"})]})})}),k.map(a=>e.jsx(i,{link:a.link,dateTime:a.dateTime,now:L,locale:u,labels:T,children:a.new?e.jsxs(e.Fragment,{children:[e.jsx(N,{className:"denhaag-page-content__badge",status:"neutral",children:"Nieuw"}),e.jsx("b",{children:a.title})]}):a.title},a.title)),e.jsx(w,{className:"denhaag-page-content__pagination",index:0,indexLimit:2})]})]}),e.jsx(m,{children:e.jsx(d,{newsletterData:H,contactData:D,legalData:f,copyrightLabel:v,socialData:j})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
