import{j as e}from"./iframe-DX91hpwz.js";import{b as i}from"./index-BIz6rHKP.js";import{H as o}from"./index-BGLBZ77o.js";import{P as s,a as l,b as m}from"./index-gHUrjEmf.js";import{H as c}from"./index-BTlyJQ20.js";import{F as d}from"./index-C2CkRPqd.js";import{R as p}from"./index-yyCucyOS.js";import{T as g,b as h,c as b,e as n}from"./index-LH5h6SYw.js";import{h as x,e as T,t as u,f as j,c as v,b as f,d as D,n as H}from"./util-CNcKgyZJ.js";/* empty css                 */import{S as _}from"./SideNavigation-CAhbZM3D.js";import{P as w}from"./index-CQcuXR4y.js";import{D as N}from"./index-C6_kJaOy.js";import"./index-C3zJwTei.js";import"./index-aEBAu-RN.js";import"./index-DoLZFCuV.js";import"./index-CnXP4bdG.js";import"./index-BBpyBs1N.js";import"./index-4jJtULoV.js";import"./index-BEOXR8ly.js";import"./index-DpLH9mzN.js";import"./index-NmUhPAeE.js";import"./index-BzA6FFxk.js";import"./index-BzvFAvnS.js";import"./index-BpG4Kueh.js";import"./index-Cei72C-A.js";import"./v4-BKrj-4V8.js";import"./index-BQqeNvo_.js";import"./index-D0Fe_nKA.js";import"./index-5jCTyBx3.js";import"./index-BRzIXrv8.js";import"./index-xV861mwJ.js";import"./index-Mas5QbYc.js";import"./index-BAmTgM1o.js";import"./index-5rw40Gqx.js";const de={title:"Templates/Berichten Overzicht",args:{className:"denhaag-messages-page"},parameters:{layout:"fullscreen",chromatic:{viewports:[1768,1280,768,360]}}},P={...x,breadcrumbs:{navigationPath:[{label:"Home",href:"https://denhaag.nl/"},{label:"MijnDenHaag",href:"https://denhaag.nl/"},{label:"Mijn berichten"}]}},L="2023-10-05T06:41:34.427Z",k=[{new:!0,title:"Herinnering: Informatie geven voor uw aanvraag subsidie geluidsisolatie",dateTime:"2023-10-05T06:41:34.427Z",link:"#example"},{new:!0,title:"Betalen van uw parkeerbon",dateTime:"2023-10-04T19:47:36.593Z",link:"#example"},{title:"Informatie geven voor uw aanvraag Ooievaarspas",dateTime:"2023-09-30T19:47:36.593Z",link:"#example"},{title:"Tip: recht op subsidie",dateTime:"2023-08-28T19:47:36.593Z",link:"#example"},{title:"Informatie geven voor uw aanvraag subsidie geluidsisolatie",dateTime:"2023-06-15T19:47:36.593Z",link:"#example"}],t={render:r=>e.jsxs(s,{...r,children:[e.jsx(l,{children:e.jsx(c,{...P})}),e.jsxs(p,{className:"denhaag-page-content denhaag-responsive-content--sidebar",children:[e.jsx(_,{}),e.jsxs("main",{className:"denhaag-page-content__main",children:[e.jsx(o,{level:2,children:"Mijn berichten"}),e.jsx(g,{className:"denhaag-page-content__table",children:e.jsx(h,{children:e.jsxs(b,{children:[e.jsx(n,{children:"Onderwerp"}),e.jsx(n,{className:"denhaag-page-content__table-header--right",children:"Datum bericht"})]})})}),k.map(a=>e.jsx(i,{link:a.link,dateTime:a.dateTime,now:L,locale:u,labels:T,children:a.new?e.jsxs(e.Fragment,{children:[e.jsx(N,{className:"denhaag-page-content__badge",status:"neutral",children:"Nieuw"}),e.jsx("b",{children:a.title})]}):a.title},a.title)),e.jsx(w,{className:"denhaag-page-content__pagination",index:0,indexLimit:2})]})]}),e.jsx(m,{children:e.jsx(d,{newsletterData:H,contactData:D,legalData:f,copyrightLabel:v,socialData:j})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
