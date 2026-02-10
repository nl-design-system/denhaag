import{j as a}from"./iframe-hBvvBgCZ.js";/* empty css                   */import"./preload-helper-PPVm8Dsz.js";var r='.denhaag-card-news{--denhaag-card-news-icon-display:none;--denhaag-card-news-paragraph-display:none;border:var(--denhaag-card-news-border);display:flex;flex-direction:column;gap:var(--denhaag-card-news-gap);height:var(--denhaag-card-news-height);margin-block-end:var(--denhaag-card-news-margin);margin-block-start:var(--denhaag-card-news-margin);margin-inline-end:var(--denhaag-card-news-margin);margin-inline-start:var(--denhaag-card-news-margin);padding-block-end:var(--denhaag-card-news-padding);padding-block-start:var(--denhaag-card-news-padding);padding-inline-end:var(--denhaag-card-news-padding);padding-inline-start:var(--denhaag-card-news-padding);position:relative;text-decoration:var(--denhaag-card-news-text-decoration);width:var(--denhaag-card-news-width)}@media (width >= 25.9375rem){.denhaag-card-news{--denhaag-card-news-paragraph-display:block}}.denhaag-card-news--hover,.denhaag-card-news:hover{box-shadow:var(--denhaag-card-news-box-shadow)}.denhaag-card-news--focus,.denhaag-card-news:focus-visible,.denhaag-card-news:focus-within:not(:focus-visible){--denhaag-card-news-box-shadow:none;--denhaag-card-news-icon-display:inline-block}@media (width >= 25.9375rem){.denhaag-card-news__icon .denhaag-icon{display:var(--denhaag-card-news-icon-display,none)}}.denhaag-card-news__image{aspect-ratio:var(--denhaag-card-news-image-aspect-ratio);height:var(--denhaag-card-news-image-height);object-fit:var(--denhaag-card-news-image-object-fit);width:var(--denhaag-card-news-image-width)}@media (width >= 25.9375rem){.denhaag-card-news__content{padding-block-end:var(--denhaag-card-news-figcaption-padding);padding-block-start:var(--denhaag-card-news-figcaption-padding);padding-inline-end:var(--denhaag-card-news-figcaption-padding);padding-inline-start:var(--denhaag-card-news-figcaption-padding)}}.denhaag-card-news__content .denhaag-card-news__heading,.denhaag-card-news__content .denhaag-card-news__paragraph{margin-block-end:var(--denhaag-card-news-text-margin-block-end)}.denhaag-card-news .utrecht-paragraph{display:var(--denhaag-card-news-paragraph-display,none)}.denhaag-card-news__icon{color:var(--denhaag-card-news-icon-color);height:var(--denhaag-card-news-icon-height);text-align:var(--denhaag-card-news-icon-text-align)}.denhaag-card-news__link{color:inherit;text-decoration:inherit}.denhaag-card-news__link:focus-visible{outline:none}.denhaag-card-news__link:after{bottom:0;content:"";left:0;position:absolute;right:0;top:0}.denhaag-card-news--focus .denhaag-card-news__link:after,.denhaag-card-news:focus-within .denhaag-card-news__link:focus-visible:after{outline:var(--denhaag-card-news-outline)}';if(typeof document<"u"){const i=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style");e.type="text/css",e.nonce=window.NONCE,i.appendChild(e),e.styleSheet?e.styleSheet.cssText=r:e.appendChild(document.createTextNode(r))}const t=`<!-- @license CC0-1.0 -->

# News card

[![npm version](https://img.shields.io/npm/v/@gemeente-denhaag/card-news.svg)](https://www.npmjs.com/package/@gemeente-denhaag/card-news)

## Introduction

A newcard is used to display a newsitem on another page.

## When to use

A newscard is used in a group on an overview.

## Alternatives and related components

- Images

## Anatomy

A newscard consist of:

1. Card
2. Image
3. Title
4. Intro
5. Icon

## (Interactive) states

The newscard contains the states normal, hover and focus.

## Design properties

## Desktop

### Typography big card

- Title: Mix/2xl/700
- Intro: Sans/md/400

### Typography small card

- Title: Mix/lg/700
- Intro: Sans/md/400

## Mobile

### Typography big card

- Title: Mix/2xl/700
- Intro: Sans/md/400

## Colors

- Title: Green/3
- Controls: see the icon-only button
- Border: 1px grey/2

## Interactive states

- Hoverstate: box shadow 0px 4px 16px 0px black 16%
- Focus state: container border color Ocher/5

## Structure

### Desktop big card

- Card: margin 16px
- Image: padding-right: 64px
- Texts: align-center
- Padding: 8px
- Icon: Padding-left 8px
- Image aspect ratio 4:3

### Desktop small card

- Card: margin 16px
- Text: margin 12px
- Padding-bottom 8px
- Image aspect ratio 16:9

### Mobile big card

- Image: padding-bottom 8px
- Texts: padding 16px
- Image aspect ratio 4:3

### Mobile small card

- Card: margin 16px
- Text: margin 12px
- Padding-bottom 8px
- Image aspect ratio 4:3

### Mobile

- Image: padding-bottom 16px
- Controls: button padding-left and padding-right 12px
- Indicator: width 32px, height 3px, padding-right 4px, padding-bottom 16px

## Accessibility

-

## Content Guidelines

Be concise in the title and intro lenght. The intro should be no longer than 1 sentence.

## Best practices

### Do's

News card should:

- ave an appealing image that refers or conlude the message of the news item
- ave a clear and consice title
- ave short and readable intro

### Don'ts

News cards should not

- Have more than 2 sentences intro.
- Be inserted seperatly on a page, but always be showed in a group. At the end of a page to support referral reading, or the main page has the main purpose to show news items.

## References

-
`,g={tags:["autodocs"],parameters:{docs:{description:{component:t}},status:{type:"WORK IN PROGRESS"}}},n={render:()=>a.jsxs("div",{className:"denhaag-card-news",children:[a.jsx("img",{className:"denhaag-card-news__image",src:"https://images.unsplash.com/photo-1612799675078-ac368b17e488?w=307&h=173",alt:""}),a.jsxs("div",{className:"denhaag-card-news__content",children:[a.jsx("h4",{className:"utrecht-heading-4 denhaag-card-news__heading",children:a.jsx("a",{className:"denhaag-card-news__link",href:"#example-url",children:"Fietsflat Rijnstraat: opknappen fietsenstalling"})}),a.jsx("p",{className:"utrecht-paragraph denhaag-card-news__paragraph",children:"Het weekend van 15 en 16 januari in beide richtingen dicht."}),a.jsx("div",{className:"denhaag-card-news__icon",children:a.jsx("svg",{"aria-hidden":"true",className:"denhaag-icon",focusable:"false",height:"1em",viewBox:"0 0 24 24",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M12.293 5.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L16.586 13H5a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",fill:"currentColor"})})})]})]})},s={render:()=>a.jsxs("div",{className:"denhaag-card-news denhaag-card-news--hover",children:[a.jsx("img",{className:"denhaag-card-news__image",src:"https://images.unsplash.com/photo-1612799675078-ac368b17e488?w=307&h=173",alt:""}),a.jsxs("div",{className:"denhaag-card-news__content",children:[a.jsx("h4",{className:"utrecht-heading-4 denhaag-card-news__heading",children:a.jsx("a",{className:"denhaag-card-news__link",href:"#example-url",children:"Fietsflat Rijnstraat: opknappen fietsenstalling"})}),a.jsx("p",{className:"utrecht-paragraph denhaag-card-news__paragraph",children:"Het weekend van 15 en 16 januari in beide richtingen dicht."}),a.jsx("div",{className:"denhaag-card-news__icon",children:a.jsx("svg",{"aria-hidden":"true",className:"denhaag-icon",focusable:"false",height:"1em",viewBox:"0 0 24 24",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M12.293 5.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L16.586 13H5a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",fill:"currentColor"})})})]})]})},d={render:()=>a.jsxs("div",{className:"denhaag-card-news denhaag-card-news--focus",children:[a.jsx("img",{className:"denhaag-card-news__image",src:"https://images.unsplash.com/photo-1612799675078-ac368b17e488?w=307&h=173",alt:""}),a.jsxs("div",{className:"denhaag-card-news__content",children:[a.jsx("h4",{className:"utrecht-heading-4 denhaag-card-news__heading",children:a.jsx("a",{className:"denhaag-card-news__link",href:"#example-url",children:"Fietsflat Rijnstraat: opknappen fietsenstalling"})}),a.jsx("p",{className:"utrecht-paragraph denhaag-card-news__paragraph",children:"Het weekend van 15 en 16 januari in beide richtingen dicht."}),a.jsx("div",{className:"denhaag-card-news__icon",children:a.jsx("svg",{"aria-hidden":"true",className:"denhaag-icon",focusable:"false",height:"1em",viewBox:"0 0 24 24",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M12.293 5.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L16.586 13H5a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",fill:"currentColor"})})})]})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div className="denhaag-card-news">
      <img className="denhaag-card-news__image" src="https://images.unsplash.com/photo-1612799675078-ac368b17e488?w=307&h=173" alt="" />
      <div className="denhaag-card-news__content">
        <h4 className="utrecht-heading-4 denhaag-card-news__heading">
          <a className="denhaag-card-news__link" href="#example-url">
            Fietsflat Rijnstraat: opknappen fietsenstalling
          </a>
        </h4>
        <p className="utrecht-paragraph denhaag-card-news__paragraph">
          Het weekend van 15 en 16 januari in beide richtingen dicht.
        </p>
        <div className="denhaag-card-news__icon">
          <svg aria-hidden="true" className="denhaag-icon" focusable="false" height="1em" viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.293 5.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L16.586 13H5a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" fill="currentColor" />
          </svg>
        </div>
      </div>
    </div>
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div className="denhaag-card-news denhaag-card-news--hover">
      <img className="denhaag-card-news__image" src="https://images.unsplash.com/photo-1612799675078-ac368b17e488?w=307&h=173" alt="" />
      <div className="denhaag-card-news__content">
        <h4 className="utrecht-heading-4 denhaag-card-news__heading">
          <a className="denhaag-card-news__link" href="#example-url">
            Fietsflat Rijnstraat: opknappen fietsenstalling
          </a>
        </h4>
        <p className="utrecht-paragraph denhaag-card-news__paragraph">
          Het weekend van 15 en 16 januari in beide richtingen dicht.
        </p>
        <div className="denhaag-card-news__icon">
          <svg aria-hidden="true" className="denhaag-icon" focusable="false" height="1em" viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.293 5.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L16.586 13H5a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" fill="currentColor" />
          </svg>
        </div>
      </div>
    </div>
}`,...s.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="denhaag-card-news denhaag-card-news--focus">
      <img className="denhaag-card-news__image" src="https://images.unsplash.com/photo-1612799675078-ac368b17e488?w=307&h=173" alt="" />
      <div className="denhaag-card-news__content">
        <h4 className="utrecht-heading-4 denhaag-card-news__heading">
          <a className="denhaag-card-news__link" href="#example-url">
            Fietsflat Rijnstraat: opknappen fietsenstalling
          </a>
        </h4>
        <p className="utrecht-paragraph denhaag-card-news__paragraph">
          Het weekend van 15 en 16 januari in beide richtingen dicht.
        </p>
        <div className="denhaag-card-news__icon">
          <svg aria-hidden="true" className="denhaag-icon" focusable="false" height="1em" viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.293 5.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L16.586 13H5a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" fill="currentColor" />
          </svg>
        </div>
      </div>
    </div>
}`,...d.parameters?.docs?.source}}};const l=["Default","Hover","Focus"];export{n as Default,d as Focus,s as Hover,l as __namedExportsOrder,g as default};
