import{j as e}from"./iframe-BdcjkhQY.js";import{b as n}from"./index-CyrjrVge.js";import{H as a}from"./index-DcCw5p0e.js";import{P as c,a as g,b as p}from"./index-DpPSXVx4.js";import{H as h}from"./index-KvZ8TSai.js";import{F as u}from"./index-COHWAC6t.js";import{R as v}from"./index-DzRBQoQ8.js";import{e as b}from"./index-BmVGb-4n.js";import{C as D}from"./index-D-Z0Tyn3.js";import{F as d}from"./index-t_Q5l0qq.js";import{h as k,e as r,t as i,l as m,f,c as j,b as H,d as x,n as _}from"./util-DXT8c2hJ.js";/* empty css                       */import{S as T}from"./SideNavigation-ut_YWQh4.js";import"./index-az9ElX0g.js";import{B as o}from"./index-CvcFpDoe.js";import"./index-wDFUFjmV.js";import"./index-D4N0sZOw.js";import"./parseISO-BBPDwbcZ.js";import"./index-Dmyzr038.js";import"./index-BJwxnfe6.js";import"./index-Cu1gzp9v.js";import"./index-D0tiCXpp.js";import"./index-BxEZp9eH.js";import"./index-DhD_gRzY.js";import"./v4-BKrj-4V8.js";import"./index-Be4ExCyi.js";import"./index-DIyTGSs7.js";import"./index-DtaKZOWC.js";import"./index-E3BDb1Bd.js";import"./index-Mas5QbYc.js";import"./index-Dx2y-ucz.js";import"./index-DYBtswjn.js";import"./index-B3zdnFyt.js";import"./index-BtZ2g4ms.js";import"./index-2RmeZ8m9.js";import"./index-AQOdSPqL.js";import"./index-BQQSnCvL.js";const ge={title:"Templates/Zaak Detail",parameters:{layout:"fullscreen",chromatic:{viewports:[1768,1280,768,360]}}},N={...k,breadcrumbs:{navigationPath:[{label:"Home",href:"https://denhaag.nl/"},{label:"MijnDenHaag",href:"https://denhaag.nl/"},{label:"Mijn lopende zaken"}]}},S={collapsible:!0,expandedSteps:["onderzoek"],steps:[{id:"deelname",marker:1,title:"Deelname aan geluidsonderzoek",status:"checked",steps:[{id:"aanmelding",title:"Aanmelding ontvangen",status:"checked"}]},{id:"onderzoek",marker:2,title:"Onderzoek naar geluidsoverlast",status:"current",steps:[{id:"geluidsoverlast",title:"Afspraak meten geluidsoverlast gemaakt (afspraak op 24 mei)"}]},{id:"uitvoeren",marker:3,title:"Uitvoeren van maatregelen"},{id:"klaar",marker:4,title:"Maatregelen zijn uitgevoerd"}]},w={labels:{today:"vandaag",yesterday:"gisteren"},locale:i,collapsible:!0,items:[{id:"1",title:"Herinnering: Geef informatie",channel:"mail",isoDate:new Date().toISOString(),description:"Hier komt de uitgebreide beschrijving",sender:"Gemeente Den Haag"},{id:"2",title:"Geef informatie",channel:"mail",isoDate:new Date(Date.now()-864e5).toISOString(),description:"Hier komt de uitgebreide beschrijving",sender:"Gemeente Den Haag"},{id:"3",title:"Tip: u heeft recht op extra subsidie, zie hier een extra lange regel",channel:"mail",isoDate:"2023-01-06T09:17:03.137Z",description:"Hier komt de uitgebreide beschrijving, en hier een extra lange uitgebreide beschrijving. Hier komt de uitgebreide beschrijving, en hier een extra lange uitgebreide beschrijving.",sender:"Gemeente Den Haag"},{id:"4",title:"Status is veranderd",channel:"mail",isoDate:"2022-12-01T09:17:03.137Z",description:"Hier komt de uitgebreide beschrijving",sender:"Gemeente Den Haag",file:e.jsx(d,{...m})},{id:"5",title:"Mijn vraag",channel:"vraag",isoDate:"2022-11-29T09:17:03.137Z",description:"Hier komt de uitgebreide beschrijving",sender:"A. Klap"},{id:"6",title:"Gesprek over afspraak met adviseur",channel:"telefoon",isoDate:"2022-11-12T09:17:03.137Z",description:"Hier komt de uitgebreide beschrijving",sender:"Gemeente Den Haag"},{id:"7",title:"Kosten onderzoek en verbeteringen",channel:"brief",isoDate:"2022-11-10T09:17:03.137Z",description:"Hier komt de uitgebreide beschrijving",sender:"Gemeente Den Haag"}]},s="2023-09-30T19:47:36.593Z",l="2023-09-28T19:47:36.593Z",t={render:()=>e.jsxs(c,{children:[e.jsx(g,{children:e.jsx(h,{...N})}),e.jsxs(v,{className:"denhaag-page-content denhaag-responsive-content--sidebar",children:[e.jsx(T,{}),e.jsxs("main",{className:"denhaag-page-content__main",children:[e.jsx(a,{level:2,children:"Aanvraag subsidie geluidsisolatie"}),e.jsx(n,{className:"denhaag-page-content__task",dateTime:s,now:l,locale:i,labels:r,actions:e.jsx(o,{href:"#example",children:"Actie"}),relativeDate:!0,children:"Geef informatie voor uw aanvraag subsidie geluidsisolatie"}),e.jsx(a,{level:3,className:"denhaag-page-content__heading",children:"Status"}),e.jsx(b,{...S}),e.jsx(a,{level:3,className:"denhaag-page-content__heading",children:"Documenten"}),e.jsx(d,{...m}),e.jsx(a,{level:3,className:"denhaag-page-content__heading",children:"Eerdere contactmomenten"}),e.jsx(D,{...w}),e.jsx(n,{className:"denhaag-page-content__task",dateTime:s,now:l,locale:i,labels:r,actions:e.jsx(o,{href:"#example",children:"Actie"}),relativeDate:!0,children:"Geef informatie voor uw aanvraag subsidie geluidsisolatie"})]})]}),e.jsx(p,{children:e.jsx(u,{newsletterData:_,contactData:x,legalData:H,copyrightLabel:j,socialData:f})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <Page>
      <PageHeader>
        <HeaderLogic {...zakenHeaderProps} />
      </PageHeader>
      <ResponsiveContent className="denhaag-page-content denhaag-responsive-content--sidebar">
        <SideNavigation />
        <main className="denhaag-page-content__main">
          <Heading level={2}>Aanvraag subsidie geluidsisolatie</Heading>
          <Action className="denhaag-page-content__task" dateTime={taskDateTime} now={taskNow} locale={templateLocale} labels={dateFormatLabels} actions={<ButtonLink href="#example">Actie</ButtonLink>} relativeDate>
            Geef informatie voor uw aanvraag subsidie geluidsisolatie
          </Action>
          <Heading level={3} className="denhaag-page-content__heading">
            Status
          </Heading>
          <Status {...progressStepsData}></Status>
          <Heading level={3} className="denhaag-page-content__heading">
            Documenten
          </Heading>
          <File {...linkData} />
          <Heading level={3} className="denhaag-page-content__heading">
            Eerdere contactmomenten
          </Heading>
          <ContactTimeline {...contactTimelineData} />
          <Action className="denhaag-page-content__task" dateTime={taskDateTime} now={taskNow} locale={templateLocale} labels={dateFormatLabels} actions={<ButtonLink href="#example">Actie</ButtonLink>} relativeDate>
            Geef informatie voor uw aanvraag subsidie geluidsisolatie
          </Action>
        </main>
      </ResponsiveContent>
      <PageFooter>
        <Footer newsletterData={newsletterData} contactData={contactData} legalData={footerLegalData} copyrightLabel={copyright} socialData={footerSocialData} />
      </PageFooter>
    </Page>
}`,...t.parameters?.docs?.source}}};const pe=["ZaakDetail"];export{t as ZaakDetail,pe as __namedExportsOrder,ge as default};
