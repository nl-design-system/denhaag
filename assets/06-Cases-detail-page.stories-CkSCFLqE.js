import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{b as n}from"./index-B029AxMB.js";import{H as a}from"./index-BigGL1Wl.js";import{P as h,a as u,b as v}from"./index-CTXP27GX.js";import{H as b}from"./index-BWLH27pv.js";import{F as D}from"./index-Md7ObvVN.js";import{R as k}from"./index-D5_TYmUK.js";import{e as f}from"./index-DR1wMCDS.js";import{C as j}from"./index-89_M9PnS.js";import{F as g}from"./index-BhPgk29p.js";import{h as H,e as r,t as i,l as p,f as x,c as _,b as T,d as N,n as S}from"./util-LfLgGEA6.js";/* empty css                       */import{S as w}from"./SideNavigation-DAMEcthR.js";import"./index-CKK7noY4.js";import{B as o}from"./index-DoQjOFyI.js";import"./index-raSRI-5R.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx-B-dksMZM.js";import"./index-BvWrhx6F.js";import"./index-C4DVoboI.js";import"./index-CLDixfYs.js";import"./index-D4I1vdCP.js";import"./index-BtU0A77O.js";import"./index-ubpkgOCO.js";import"./index-BASzoH7C.js";import"./v4-C6aID195.js";import"./index-Cba-MPja.js";import"./index-DzIAslfl.js";import"./index-DZv2waCi.js";import"./index-DlFZmAEG.js";import"./index-Mas5QbYc.js";import"./index-Bfvr5lDF.js";import"./index-AwqAYkY-.js";import"./index-CGLOogeq.js";const ge={title:"Templates/Zaak Detail",parameters:{layout:"fullscreen",chromatic:{viewports:[1768,1280,768,360]}}},L={...H,breadcrumbs:{navigationPath:[{label:"Home",href:"https://denhaag.nl/"},{label:"MijnDenHaag",href:"https://denhaag.nl/"},{label:"Mijn lopende zaken"}]}},A={collapsible:!0,expandedSteps:["onderzoek"],steps:[{id:"deelname",marker:1,title:"Deelname aan geluidsonderzoek",status:"checked",steps:[{id:"aanmelding",title:"Aanmelding ontvangen",status:"checked"}]},{id:"onderzoek",marker:2,title:"Onderzoek naar geluidsoverlast",status:"current",steps:[{id:"geluidsoverlast",title:"Afspraak meten geluidsoverlast gemaakt (afspraak op 24 mei)"}]},{id:"uitvoeren",marker:3,title:"Uitvoeren van maatregelen"},{id:"klaar",marker:4,title:"Maatregelen zijn uitgevoerd"}]},P={labels:{today:"vandaag",yesterday:"gisteren"},locale:i,collapsible:!0,items:[{id:"1",title:"Herinnering: Geef informatie",channel:"mail",isoDate:new Date().toISOString(),description:"Hier komt de uitgebreide beschrijving",sender:"Gemeente Den Haag"},{id:"2",title:"Geef informatie",channel:"mail",isoDate:new Date(Date.now()-864e5).toISOString(),description:"Hier komt de uitgebreide beschrijving",sender:"Gemeente Den Haag"},{id:"3",title:"Tip: u heeft recht op extra subsidie, zie hier een extra lange regel",channel:"mail",isoDate:"2023-01-06T09:17:03.137Z",description:"Hier komt de uitgebreide beschrijving, en hier een extra lange uitgebreide beschrijving. Hier komt de uitgebreide beschrijving, en hier een extra lange uitgebreide beschrijving.",sender:"Gemeente Den Haag"},{id:"4",title:"Status is veranderd",channel:"mail",isoDate:"2022-12-01T09:17:03.137Z",description:"Hier komt de uitgebreide beschrijving",sender:"Gemeente Den Haag",file:e.jsx(g,{...p})},{id:"5",title:"Mijn vraag",channel:"vraag",isoDate:"2022-11-29T09:17:03.137Z",description:"Hier komt de uitgebreide beschrijving",sender:"A. Klap"},{id:"6",title:"Gesprek over afspraak met adviseur",channel:"telefoon",isoDate:"2022-11-12T09:17:03.137Z",description:"Hier komt de uitgebreide beschrijving",sender:"Gemeente Den Haag"},{id:"7",title:"Kosten onderzoek en verbeteringen",channel:"brief",isoDate:"2022-11-10T09:17:03.137Z",description:"Hier komt de uitgebreide beschrijving",sender:"Gemeente Den Haag"}]},s="2023-09-30T19:47:36.593Z",l="2023-09-28T19:47:36.593Z",t={render:()=>e.jsxs(h,{children:[e.jsx(u,{children:e.jsx(b,{...L})}),e.jsxs(k,{className:"denhaag-page-content denhaag-responsive-content--sidebar",children:[e.jsx(w,{}),e.jsxs("main",{className:"denhaag-page-content__main",children:[e.jsx(a,{level:2,children:"Aanvraag subsidie geluidsisolatie"}),e.jsx(n,{className:"denhaag-page-content__task",dateTime:s,now:l,locale:i,labels:r,actions:e.jsx(o,{href:"#example",children:"Actie"}),relativeDate:!0,children:"Geef informatie voor uw aanvraag subsidie geluidsisolatie"}),e.jsx(a,{level:3,className:"denhaag-page-content__heading",children:"Status"}),e.jsx(f,{...A}),e.jsx(a,{level:3,className:"denhaag-page-content__heading",children:"Documenten"}),e.jsx(g,{...p}),e.jsx(a,{level:3,className:"denhaag-page-content__heading",children:"Eerdere contactmomenten"}),e.jsx(j,{...P}),e.jsx(n,{className:"denhaag-page-content__task",dateTime:s,now:l,locale:i,labels:r,actions:e.jsx(o,{href:"#example",children:"Actie"}),relativeDate:!0,children:"Geef informatie voor uw aanvraag subsidie geluidsisolatie"})]})]}),e.jsx(v,{children:e.jsx(D,{newsletterData:S,contactData:N,legalData:T,copyrightLabel:_,socialData:x})})]})};var d,c,m;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const pe=["ZaakDetail"];export{t as ZaakDetail,pe as __namedExportsOrder,ge as default};
