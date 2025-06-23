import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{b as l}from"./index-UQmtOvi-.js";import{H as c}from"./index-BigGL1Wl.js";import{P as m,a as d,b as g}from"./index-KiyqMnDY.js";import{H as p}from"./index-CVyC25Ql.js";import{F as h}from"./index-BNOLNcE_.js";import{R as b}from"./index-CYZyLAOJ.js";import{T as x,b as T,c as u,e as n}from"./index-CHl5l0wR.js";import{h as j,e as v,t as f,f as D,c as H,b as _,d as w,n as P}from"./util-CWUwN0p1.js";/* empty css                 */import{S as N}from"./Sidenav-BgfY0OqB.js";import{P as L}from"./index-D1eCdPZQ.js";import{D as k}from"./index-yF8TOX9e.js";import"./index-raSRI-5R.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BNdFKZij.js";import"./index-BtU0A77O.js";import"./index-BMfqj8mp.js";const X={title:"Templates/Berichten Overzicht",args:{className:"denhaag-messages-page"},parameters:{layout:"fullscreen",chromatic:{viewports:[1768,1280,768,360]}}},F={...j,breadcrumbs:{navigationPath:[{label:"Home",href:"https://denhaag.nl/"},{label:"MijnDenHaag",href:"https://denhaag.nl/"},{label:"Mijn berichten"}]}},R="2023-10-05T06:41:34.427Z",B=[{new:!0,title:"Herinnering: Informatie geven voor uw aanvraag subsidie geluidsisolatie",dateTime:"2023-10-05T06:41:34.427Z",link:"#example"},{new:!0,title:"Betalen van uw parkeerbon",dateTime:"2023-10-04T19:47:36.593Z",link:"#example"},{title:"Informatie geven voor uw aanvraag Ooievaarspas",dateTime:"2023-09-30T19:47:36.593Z",link:"#example"},{title:"Tip: recht op subsidie",dateTime:"2023-08-28T19:47:36.593Z",link:"#example"},{title:"Informatie geven voor uw aanvraag subsidie geluidsisolatie",dateTime:"2023-06-15T19:47:36.593Z",link:"#example"}],t={render:o=>e.jsxs(m,{...o,children:[e.jsx(d,{children:e.jsx(p,{...F})}),e.jsxs(b,{className:"denhaag-page-content denhaag-responsive-content--sidebar",children:[e.jsx(N,{}),e.jsxs("main",{className:"denhaag-page-content__main",children:[e.jsx(c,{level:2,children:"Mijn berichten"}),e.jsx(x,{className:"denhaag-page-content__table",children:e.jsx(T,{children:e.jsxs(u,{children:[e.jsx(n,{children:"Onderwerp"}),e.jsx(n,{className:"denhaag-page-content__table-header--right",children:"Datum bericht"})]})})}),B.map(a=>e.jsx(l,{link:a.link,dateTime:a.dateTime,now:R,locale:f,labels:v,children:a.new?e.jsxs(e.Fragment,{children:[e.jsx(k,{className:"denhaag-page-content__badge",status:"neutral",children:"Nieuw"}),e.jsx("b",{children:a.title})]}):a.title},a.title)),e.jsx(L,{className:"denhaag-page-content__pagination",index:0,indexLimit:2})]})]}),e.jsx(g,{children:e.jsx(h,{newsletterData:P,contactData:w,legalData:_,copyrightLabel:H,socialData:D})})]})};var r,s,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => <Page {...args}>
      <PageHeader>
        <HeaderLogic {...messagesHeaderProps} />
      </PageHeader>
      <ResponsiveContent className="denhaag-page-content denhaag-responsive-content--sidebar">
        <Sidenav />
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
}`,...(i=(s=t.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const Y=["BerichtenOverzicht"];export{t as BerichtenOverzicht,Y as __namedExportsOrder,X as default};
