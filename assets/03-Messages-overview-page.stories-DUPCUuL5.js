import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{b as l}from"./index-CQKb_nq9.js";import{H as m}from"./index-BigGL1Wl.js";import{P as c,a as d,b as g}from"./index-CTXP27GX.js";import{H as p}from"./index-BWLH27pv.js";import{F as h}from"./index-Md7ObvVN.js";import{R as b}from"./index-D5_TYmUK.js";import{T as x,b as T,c as u,e as n}from"./index-CnbrEbgl.js";import{h as j,e as v,t as f,f as D,c as H,b as _,d as w,n as N}from"./util-LfLgGEA6.js";/* empty css                 */import{S as P}from"./SideNavigation-DAMEcthR.js";import{P as L}from"./index-qYk-hmz-.js";import{D as k}from"./index-DmWgpVoE.js";import"./index-raSRI-5R.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx-B-dksMZM.js";import"./index-BvWrhx6F.js";import"./index-C4DVoboI.js";import"./index-CLDixfYs.js";import"./index-D4I1vdCP.js";import"./index-BtU0A77O.js";import"./index-ubpkgOCO.js";import"./index-DoQjOFyI.js";import"./index-BASzoH7C.js";import"./v4-C6aID195.js";import"./index-Cba-MPja.js";import"./index-DzIAslfl.js";import"./index-DZv2waCi.js";import"./index-DlFZmAEG.js";import"./index-Mas5QbYc.js";import"./index-Bfvr5lDF.js";import"./index-CGLOogeq.js";const de={title:"Templates/Berichten Overzicht",args:{className:"denhaag-messages-page"},parameters:{layout:"fullscreen",chromatic:{viewports:[1768,1280,768,360]}}},F={...j,breadcrumbs:{navigationPath:[{label:"Home",href:"https://denhaag.nl/"},{label:"MijnDenHaag",href:"https://denhaag.nl/"},{label:"Mijn berichten"}]}},R="2023-10-05T06:41:34.427Z",B=[{new:!0,title:"Herinnering: Informatie geven voor uw aanvraag subsidie geluidsisolatie",dateTime:"2023-10-05T06:41:34.427Z",link:"#example"},{new:!0,title:"Betalen van uw parkeerbon",dateTime:"2023-10-04T19:47:36.593Z",link:"#example"},{title:"Informatie geven voor uw aanvraag Ooievaarspas",dateTime:"2023-09-30T19:47:36.593Z",link:"#example"},{title:"Tip: recht op subsidie",dateTime:"2023-08-28T19:47:36.593Z",link:"#example"},{title:"Informatie geven voor uw aanvraag subsidie geluidsisolatie",dateTime:"2023-06-15T19:47:36.593Z",link:"#example"}],t={render:o=>e.jsxs(c,{...o,children:[e.jsx(d,{children:e.jsx(p,{...F})}),e.jsxs(b,{className:"denhaag-page-content denhaag-responsive-content--sidebar",children:[e.jsx(P,{}),e.jsxs("main",{className:"denhaag-page-content__main",children:[e.jsx(m,{level:2,children:"Mijn berichten"}),e.jsx(x,{className:"denhaag-page-content__table",children:e.jsx(T,{children:e.jsxs(u,{children:[e.jsx(n,{children:"Onderwerp"}),e.jsx(n,{className:"denhaag-page-content__table-header--right",children:"Datum bericht"})]})})}),B.map(a=>e.jsx(l,{link:a.link,dateTime:a.dateTime,now:R,locale:f,labels:v,children:a.new?e.jsxs(e.Fragment,{children:[e.jsx(k,{className:"denhaag-page-content__badge",status:"neutral",children:"Nieuw"}),e.jsx("b",{children:a.title})]}):a.title},a.title)),e.jsx(L,{className:"denhaag-page-content__pagination",index:0,indexLimit:2})]})]}),e.jsx(g,{children:e.jsx(h,{newsletterData:N,contactData:w,legalData:_,copyrightLabel:H,socialData:D})})]})};var r,i,s;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(s=(i=t.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const ge=["BerichtenOverzicht"];export{t as BerichtenOverzicht,ge as __namedExportsOrder,de as default};
