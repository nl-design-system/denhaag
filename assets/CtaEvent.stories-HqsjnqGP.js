import{j as e}from"./iframe-StdiXSPA.js";var s=`.denhaag-cta-event{--denhaag-cta-event-icon-width-fallback:calc(var(--denhaag-cta-event-gap)*4);word-wrap:break-word;align-items:center;border-left:1px solid var(--denhaag-cta-event-border-color,currentColor);border-right:1px solid var(--denhaag-cta-event-border-color,currentColor);box-shadow:0 1px 0 var(--denhaag-cta-event-border-color,currentColor),inset 0 1px 0 var(--denhaag-cta-event-border-color,currentColor);color:var(--denhaag-cta-event-color);display:flex;flex-direction:row;font-family:var(--denhaag-cta-event-font-family,inherit);font-size:var(--denhaag-cta-event-font-size,1rem);font-weight:var(--denhaag-cta-event-font-weight,inherit);gap:var(--denhaag-cta-event-gap);line-height:var(--denhaag-cta-event-date-line-height,inherit);overflow-wrap:break-word;padding-block-end:var(--denhaag-cta-event-padding-block,var(--denhaag-cta-event-gap));padding-block-start:var(--denhaag-cta-event-padding-block,var(--denhaag-cta-event-gap));padding-inline-end:var(--denhaag-cta-event-padding-inline,calc(var(--denhaag-cta-event-gap)/1.5));padding-inline-start:var(--denhaag-cta-event-padding-inline,calc(var(--denhaag-cta-event-gap)/1.5));text-decoration:none}.denhaag-cta-event--hover,.denhaag-cta-event:hover{--denhaag-cta-event-dot-background-color:var(
    --denhaag-cta-event-hover-dot-background-color,var(--denhaag-cta-event-color)
  )}.denhaag-cta-event--focus,.denhaag-cta-event:focus-visible{--denhaag-cta-event-dot-background-color:var(
    --denhaag-cta-event-focus-dot-background-color,var(--denhaag-cta-event-hover-dot-background-color)
  );outline:var(--denhaag-cta-event-focus-outline)}.denhaag-cta-event__date{align-items:center;aspect-ratio:1/1;background-color:var(--denhaag-cta-event-dot-background-color,var(--denhaag-cta-event-color));border-radius:var(--denhaag-cta-event-width,50%);color:var(--denhaag-cta-event-date-color);display:inline-flex;flex:0 0 auto;flex-direction:column;font-family:var(--denhaag-cta-event-date-font-family,var(--denhaag-cta-event-font-family,inherit));font-size:var(--denhaag-cta-event-date-font-size,inherit);font-weight:var(--denhaag-cta-event-date-font-weight,var(--denhaag-cta-event-font-weight,inherit));height:auto;justify-content:center;line-height:var(--denhaag-cta-event-date-line-height,inherit);width:var(--denhaag-cta-event-width,var(--denhaag-cta-event-icon-width-fallback))}.denhaag-cta-event__day{font-size:var(--denhaag-cta-event-day-font-size,var(--denhaag-cta-event-date-font-size,inherit))}.denhaag-cta-event__excerpt{display:flex;flex-direction:column;gap:var(--denhaag-cta-event-excerpt-gap,calc(var(--denhaag-cta-event-gap)/6));max-width:calc(100% - var(--denhaag-cta-event-width, var(--denhaag-cta-event-icon-width-fallback)) - var(--denhaag-cta-event-gap))}.denhaag-cta-event__title{hyphenate-limit-last:always;color:var(--denhaag-cta-event-title-color);font-size:var(--denhaag-cta-event-title-font-size,var(--denhaag-cta-event-font-size,1rem));font-weight:var(--denhaag-cta-event-title-font-weight,inherit);hyphens:auto;margin-block-end:0;margin-block-start:0}`;if(typeof document<"u"){const i=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css",a.nonce=window.NONCE,i.appendChild(a),a.styleSheet?a.styleSheet.cssText=s:a.appendChild(document.createTextNode(s))}const h=`# Call To Action Event

A calendar event is a standalone link that shows what kind of event is on which date. It links to a content evenement page.

## When to use

Use the event when you need to reference an event that contains a date.

## Alternatives and related components

- Use links for navigation actions that appear within or immediately after a sentence.
- Use CTA links when you link to a page or website that also can be viewed or to a video
- Use a download when there is a file being downloaded.
- Use a image content link when there is a link in conjunction with an image.

## Anatomy

The calendar event consists of:

- Date icon: shows the day and abbreviated month of the event;
- Header link: shows the name of the event;
- Date: shows the full date;
- Container;

## (Interactive) states

The calendar event contains the states normal, hover and focus.

## Design properties

### Typography

#### Date icon

- day TheSans/md/400,
- month TheSans/sm/400

#### Header link

TheSans/lg/400

#### Date

TheSans/lg/700

### Colors

- Date icon: background-color Blue/3, text color white;
- Header link: text color Blue/3;
- Date: text color Grey/4;
- Container: border-top and border-bottom line color Grey/2;

### Interactive states

#### Hover

header link text color Blue/4, date icon background-color Blue/4;

#### Focus

header link text color Blue/4, date icon background-color Blue/4, container border color Ocher/5;

### Structure

- Date icon: background circle size 64px, padding-left 16px, padding-right 24px, day and month padding-top and padding-bottom 12px;
- Header link: padding-bottom 4px;
- Header link and date: padding right 16px;
- Container: padding-top and padding-bottom 24px, border line 1px;

## Accessibility

[technical requirements]

## Content guidelines

### Date icon

The date icon should:

- Contain the digit of the event day. If the digit is <10, then use ‘0’ before for the number (e.g. ‘01’, ‘05’);
- Contain only the first three letters of the month.

### Heading link

The heading link should:

- Show in one sentence what the event is all about;
- Start the sentence with the event type (e.g. ‘Spreekuur’ or ‘Bijeenkomst’);
- Use the hyphen to break the text.

### Date

The date should:

- Show the full date, so the day (e.g. ‘Maandag’), digit of the day (e.g. ‘1’), month (e.g. ‘Januari’) and year (e.g. ‘2022’);
- Not use the hyphen when breaking the text. Let the text continue on the next line.

## Best practices

### Do's

Calendar events should:

- Always link to a content event page;
- Be grouped under each other when there is more than 1 event;
- Be placed above, under or between a text (usually in a list);
- Be full width (100%)

### Don'ts

Calendar events should:

- Not be used to link to another page other than a content evenement page.

## References

- [Figma Design](https://www.figma.com/file/JpoY3waVoQGlLQzQXTL9nn/Design-System---Gemeente-Den-Haag?node-id=8105%3A21885)
`,l={tags:["autodocs"],parameters:{docs:{description:{component:h}},status:{type:"WORK IN PROGRESS"}}},n={render:()=>e.jsxs("a",{className:"denhaag-cta-event",href:"#event-url",children:[e.jsxs("div",{className:"denhaag-cta-event__date","aria-hidden":"true",children:[e.jsx("span",{className:"denhaag-cta-event__day",children:"16"}),e.jsx("span",{className:"denhaag-cta-event__month",children:"sep"})]}),e.jsxs("div",{className:"denhaag-cta-event__excerpt",children:[e.jsx("h3",{className:"denhaag-cta-event__title",children:"Fiets naar je werk dag"}),e.jsx("time",{dateTime:"2021-09-16",children:"Donderdag 16 september 2021"})]})]})},t={render:()=>e.jsxs("a",{className:"denhaag-cta-event denhaag-cta-event--hover",href:"#event-url",children:[e.jsxs("div",{className:"denhaag-cta-event__date","aria-hidden":"true",children:[e.jsx("span",{className:"denhaag-cta-event__day",children:"31"}),e.jsx("span",{className:"denhaag-cta-event__month",children:"dec"})]}),e.jsxs("div",{className:"denhaag-cta-event__excerpt",children:[e.jsx("h3",{className:"denhaag-cta-event__title",children:"Oudjaarsdag"}),e.jsx("time",{dateTime:"2021-12-31",children:"Vrijdag 31 december 2021"})]})]})},d={render:()=>e.jsxs("a",{className:"denhaag-cta-event denhaag-cta-event--focus",href:"#event-url",children:[e.jsxs("div",{className:"denhaag-cta-event__date","aria-hidden":"true",children:[e.jsx("span",{className:"denhaag-cta-event__day",children:"31"}),e.jsx("span",{className:"denhaag-cta-event__month",children:"dec"})]}),e.jsxs("div",{className:"denhaag-cta-event__excerpt",children:[e.jsx("h3",{className:"denhaag-cta-event__title",children:"Oudjaarsdag"}),e.jsx("time",{dateTime:"2021-12-31",children:"Vrijdag 31 december 2021"})]})]})},c={render:()=>e.jsxs("a",{className:"denhaag-cta-event",href:"#event-url","aria-current":"date",children:[e.jsxs("div",{className:"denhaag-cta-event__date","aria-hidden":"true",children:[e.jsx("span",{className:"denhaag-cta-event__day",children:"16"}),e.jsx("span",{className:"denhaag-cta-event__month",children:"dec"})]}),e.jsxs("div",{className:"denhaag-cta-event__excerpt",children:[e.jsx("h3",{className:"denhaag-cta-event__title",children:"Werkdag"}),e.jsx("time",{dateTime:"2021-12-16",children:"Donderdag 16 december 2021"})]})]})},r={render:()=>e.jsxs(e.Fragment,{children:[e.jsxs("a",{className:"denhaag-cta-event",href:"#event-url",children:[e.jsxs("div",{className:"denhaag-cta-event__date","aria-hidden":"true",children:[e.jsx("span",{className:"denhaag-cta-event__day",children:"26"}),e.jsx("span",{className:"denhaag-cta-event__month",children:"dec"})]}),e.jsxs("div",{className:"denhaag-cta-event__excerpt",children:[e.jsx("h3",{className:"denhaag-cta-event__title",children:"Kerstdiner"}),e.jsx("time",{dateTime:"2021-12-26",children:"Zondag 26 december 2021"})]})]}),e.jsxs("a",{className:"denhaag-cta-event",href:"#event-url",children:[e.jsxs("div",{className:"denhaag-cta-event__date","aria-hidden":"true",children:[e.jsx("span",{className:"denhaag-cta-event__day",children:"31"}),e.jsx("span",{className:"denhaag-cta-event__month",children:"dec"})]}),e.jsxs("div",{className:"denhaag-cta-event__excerpt",children:[e.jsx("h3",{className:"denhaag-cta-event__title",children:"Oudjaarsdag"}),e.jsx("time",{dateTime:"2021-12-31",children:"Vrijdag 31 december 2021"})]})]}),e.jsxs("a",{className:"denhaag-cta-event",href:"#event-url",children:[e.jsxs("div",{className:"denhaag-cta-event__date","aria-hidden":"true",children:[e.jsx("span",{className:"denhaag-cta-event__day",children:"01"}),e.jsx("span",{className:"denhaag-cta-event__month",children:"jan"})]}),e.jsxs("div",{className:"denhaag-cta-event__excerpt",children:[e.jsx("h3",{className:"denhaag-cta-event__title",children:"Nieuwjaarsdag"}),e.jsx("time",{dateTime:"2021-01-01",children:"Zaterdag 1 januari 2022"})]})]})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <a className="denhaag-cta-event" href="#event-url">
      <div className="denhaag-cta-event__date" aria-hidden="true">
        <span className="denhaag-cta-event__day">16</span>
        <span className="denhaag-cta-event__month">sep</span>
      </div>
      <div className="denhaag-cta-event__excerpt">
        <h3 className="denhaag-cta-event__title">Fiets naar je werk dag</h3>
        <time dateTime="2021-09-16">Donderdag 16 september 2021</time>
      </div>
    </a>
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <a className="denhaag-cta-event denhaag-cta-event--hover" href="#event-url">
      <div className="denhaag-cta-event__date" aria-hidden="true">
        <span className="denhaag-cta-event__day">31</span>
        <span className="denhaag-cta-event__month">dec</span>
      </div>
      <div className="denhaag-cta-event__excerpt">
        <h3 className="denhaag-cta-event__title">Oudjaarsdag</h3>
        <time dateTime="2021-12-31">Vrijdag 31 december 2021</time>
      </div>
    </a>
}`,...t.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <a className="denhaag-cta-event denhaag-cta-event--focus" href="#event-url">
      <div className="denhaag-cta-event__date" aria-hidden="true">
        <span className="denhaag-cta-event__day">31</span>
        <span className="denhaag-cta-event__month">dec</span>
      </div>
      <div className="denhaag-cta-event__excerpt">
        <h3 className="denhaag-cta-event__title">Oudjaarsdag</h3>
        <time dateTime="2021-12-31">Vrijdag 31 december 2021</time>
      </div>
    </a>
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <a className="denhaag-cta-event" href="#event-url" aria-current="date">
      <div className="denhaag-cta-event__date" aria-hidden="true">
        <span className="denhaag-cta-event__day">16</span>
        <span className="denhaag-cta-event__month">dec</span>
      </div>
      <div className="denhaag-cta-event__excerpt">
        <h3 className="denhaag-cta-event__title">Werkdag</h3>
        <time dateTime="2021-12-16">Donderdag 16 december 2021</time>
      </div>
    </a>
}`,...c.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <a className="denhaag-cta-event" href="#event-url">
        <div className="denhaag-cta-event__date" aria-hidden="true">
          <span className="denhaag-cta-event__day">26</span>
          <span className="denhaag-cta-event__month">dec</span>
        </div>
        <div className="denhaag-cta-event__excerpt">
          <h3 className="denhaag-cta-event__title">Kerstdiner</h3>
          <time dateTime="2021-12-26">Zondag 26 december 2021</time>
        </div>
      </a>
      <a className="denhaag-cta-event" href="#event-url">
        <div className="denhaag-cta-event__date" aria-hidden="true">
          <span className="denhaag-cta-event__day">31</span>
          <span className="denhaag-cta-event__month">dec</span>
        </div>
        <div className="denhaag-cta-event__excerpt">
          <h3 className="denhaag-cta-event__title">Oudjaarsdag</h3>
          <time dateTime="2021-12-31">Vrijdag 31 december 2021</time>
        </div>
      </a>
      <a className="denhaag-cta-event" href="#event-url">
        <div className="denhaag-cta-event__date" aria-hidden="true">
          <span className="denhaag-cta-event__day">01</span>
          <span className="denhaag-cta-event__month">jan</span>
        </div>
        <div className="denhaag-cta-event__excerpt">
          <h3 className="denhaag-cta-event__title">Nieuwjaarsdag</h3>
          <time dateTime="2021-01-01">Zaterdag 1 januari 2022</time>
        </div>
      </a>
    </>
}`,...r.parameters?.docs?.source}}};const v=["Default","Hovered","Focused","Today","Grouped"];export{n as Default,d as Focused,r as Grouped,t as Hovered,c as Today,v as __namedExportsOrder,l as default};
