import{j as e}from"./iframe-DY871a0d.js";import{b as n}from"./index-3Qt3YjGV.js";import{H as a}from"./index-D9U9sER1.js";import{P as c,a as g,b as p}from"./index-xyTcShN1.js";import{H as h}from"./index-N8q265V7.js";import{F as u}from"./index-D0edgmfp.js";import{R as v}from"./index-BH6iLC8i.js";import{e as b}from"./index-Cgr4zrG_.js";import{C as D}from"./index-C7Ttzwdz.js";import{F as d}from"./index-Drt9dkjA.js";import{h as k,e as r,t as i,l as m,f,c as j,b as H,d as x,n as _}from"./util-DWCJuipi.js";/* empty css                       */import{S as T}from"./SideNavigation-BfQqPe82.js";import"./index-t2eGXyVF.js";import{B as o}from"./index-Betx4yvd.js";import"./index-DAVlL1I4.js";import"./index-D4N0sZOw.js";import"./parseISO-BBPDwbcZ.js";import"./index-DYrjPfZr.js";import"./index-CPe7hbsu.js";import"./index-69dOPSlT.js";import"./index-C83MhjUH.js";import"./index-Ch7TK32x.js";import"./index-oX55UuvN.js";import"./v4-BKrj-4V8.js";import"./index-CpKSIFi_.js";import"./index-D4dGw257.js";import"./index-CdcUYyN5.js";import"./index-C0LYj_v2.js";import"./index-Mas5QbYc.js";import"./index-BAljGjp9.js";import"./index-CufHSrYv.js";import"./index-BoIRmeEN.js";import"./index-CLV12OgP.js";import"./index-CTY_Y-XM.js";import"./index-CUqEUie5.js";import"./index-CCkANMYa.js";const ge={title:"Templates/Zaak Detail",parameters:{layout:"fullscreen",chromatic:{viewports:[1768,1280,768,360]}}},N={...k,breadcrumbs:{navigationPath:[{label:"Home",href:"https://denhaag.nl/"},{label:"MijnDenHaag",href:"https://denhaag.nl/"},{label:"Mijn lopende zaken"}]}},S={collapsible:!0,expandedSteps:["onderzoek"],steps:[{id:"deelname",marker:1,title:"Deelname aan geluidsonderzoek",status:"checked",steps:[{id:"aanmelding",title:"Aanmelding ontvangen",status:"checked"}]},{id:"onderzoek",marker:2,title:"Onderzoek naar geluidsoverlast",status:"current",steps:[{id:"geluidsoverlast",title:"Afspraak meten geluidsoverlast gemaakt (afspraak op 24 mei)"}]},{id:"uitvoeren",marker:3,title:"Uitvoeren van maatregelen"},{id:"klaar",marker:4,title:"Maatregelen zijn uitgevoerd"}]},w={labels:{today:"vandaag",yesterday:"gisteren"},locale:i,collapsible:!0,items:[{id:"1",title:"Herinnering: Geef informatie",channel:"mail",isoDate:new Date().toISOString(),description:"Hier komt de uitgebreide beschrijving",sender:"Gemeente Den Haag"},{id:"2",title:"Geef informatie",channel:"mail",isoDate:new Date(Date.now()-864e5).toISOString(),description:"Hier komt de uitgebreide beschrijving",sender:"Gemeente Den Haag"},{id:"3",title:"Tip: u heeft recht op extra subsidie, zie hier een extra lange regel",channel:"mail",isoDate:"2023-01-06T09:17:03.137Z",description:"Hier komt de uitgebreide beschrijving, en hier een extra lange uitgebreide beschrijving. Hier komt de uitgebreide beschrijving, en hier een extra lange uitgebreide beschrijving.",sender:"Gemeente Den Haag"},{id:"4",title:"Status is veranderd",channel:"mail",isoDate:"2022-12-01T09:17:03.137Z",description:"Hier komt de uitgebreide beschrijving",sender:"Gemeente Den Haag",file:e.jsx(d,{...m})},{id:"5",title:"Mijn vraag",channel:"vraag",isoDate:"2022-11-29T09:17:03.137Z",description:"Hier komt de uitgebreide beschrijving",sender:"A. Klap"},{id:"6",title:"Gesprek over afspraak met adviseur",channel:"telefoon",isoDate:"2022-11-12T09:17:03.137Z",description:"Hier komt de uitgebreide beschrijving",sender:"Gemeente Den Haag"},{id:"7",title:"Kosten onderzoek en verbeteringen",channel:"brief",isoDate:"2022-11-10T09:17:03.137Z",description:"Hier komt de uitgebreide beschrijving",sender:"Gemeente Den Haag"}]},s="2023-09-30T19:47:36.593Z",l="2023-09-28T19:47:36.593Z",t={render:()=>e.jsxs(c,{children:[e.jsx(g,{children:e.jsx(h,{...N})}),e.jsxs(v,{className:"denhaag-page-content denhaag-responsive-content--sidebar",children:[e.jsx(T,{}),e.jsxs("main",{className:"denhaag-page-content__main",children:[e.jsx(a,{level:2,children:"Aanvraag subsidie geluidsisolatie"}),e.jsx(n,{className:"denhaag-page-content__task",dateTime:s,now:l,locale:i,labels:r,actions:e.jsx(o,{href:"#example",children:"Actie"}),relativeDate:!0,children:"Geef informatie voor uw aanvraag subsidie geluidsisolatie"}),e.jsx(a,{level:3,className:"denhaag-page-content__heading",children:"Status"}),e.jsx(b,{...S}),e.jsx(a,{level:3,className:"denhaag-page-content__heading",children:"Documenten"}),e.jsx(d,{...m}),e.jsx(a,{level:3,className:"denhaag-page-content__heading",children:"Eerdere contactmomenten"}),e.jsx(D,{...w}),e.jsx(n,{className:"denhaag-page-content__task",dateTime:s,now:l,locale:i,labels:r,actions:e.jsx(o,{href:"#example",children:"Actie"}),relativeDate:!0,children:"Geef informatie voor uw aanvraag subsidie geluidsisolatie"})]})]}),e.jsx(p,{children:e.jsx(u,{newsletterData:_,contactData:x,legalData:H,copyrightLabel:j,socialData:f})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
