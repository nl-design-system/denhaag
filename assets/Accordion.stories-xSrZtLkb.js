import{j as a}from"./jsx-runtime-D_zvdyIk.js";var l='.denhaag-accordion{font-family:var(--denhaag-accordion-font-family)}.denhaag-accordion__container{border:var(--denhaag-accordion-container-border);position:var(--denhaag-accordion-container-position)}.denhaag-accordion__container:last-child{border-bottom-left-radius:var(--denhaag-accordion-container-border-radius);border-bottom-right-radius:var(--denhaag-accordion-container-border-radius);border-top:var(--denhaag-accordion-container-border-top)}.denhaag-accordion__container:first-child{--denhaag-accordion-container-border-top:var(--denhaag-accordion-container-border);border-top-left-radius:var(--denhaag-accordion-container-border-radius);border-top-right-radius:var(--denhaag-accordion-container-border-radius)}.denhaag-accordion__container+.denhaag-accordion__container{border-top:var(--denhaag-accordion-container-border-top)}.denhaag-accordion__panel{align-items:var(--denhaag-accordion-panel-align-items);background-color:var(--denhaag-accordion-panel-background-color);border-radius:var(--denhaag-accordion-panel-border-radius);display:var(--denhaag-accordion-panel-display);font-family:inherit;font-size:var(--denhaag-accordion-panel-font-size);font-weight:var(--denhaag-accordion-panel-font-weight,400);margin-block-end:var(--denhaag-accordion-panel-margin-block);margin-block-start:var(--denhaag-accordion-panel-margin-block);min-height:var(--denhaag-accordion-panel-min-height);outline:var(--denhaag-accordion-panel-outline);padding-block-end:var(--denhaag-accordion-panel-padding-block);padding-block-start:var(--denhaag-accordion-panel-padding-block);padding-inline-end:var(--denhaag-accordion-panel-padding-inline);position:inherit;text-decoration:var(--denhaag-accordion-panel-text-decoration);width:inherit}.denhaag-accordion__panel>.denhaag-icon{color:inherit;pointer-events:none;position:var(--denhaag-accordion-icon-position);right:var(--denhaag-accordion-icon-right);top:var(--denhaag-accordion-icon-top);transform:var(--denhaag-accordion-icon-transform)}.denhaag-accordion__title{background:inherit;border:inherit;flex-grow:var(--denhaag-accordion-title-flex-grow);font-family:inherit;font-size:inherit;font-weight:inherit;hyphens:auto;margin-block-end:0;margin-block-start:0;padding-block-end:var(--denhaag-accordion-title-padding-block);padding-block-start:var(--denhaag-accordion-title-padding-block);padding-inline-end:calc(var(--denhaag-accordion-title-padding-inline)*2 + var(--denhaag-accordion-icon-width, 0));padding-inline-start:var(--denhaag-accordion-title-padding-inline);text-align:inherit}.denhaag-accordion__panel--hover .denhaag-accordion__title,.denhaag-accordion__panel--hover .denhaag-icon,.denhaag-accordion__title--focus,.denhaag-accordion__title--focus+.denhaag-icon,.denhaag-accordion__title:focus-visible{color:var(--denhaag-accordion-panel-color);outline:var(--denhaag-accordion-panel-outline)}.denhaag-accordion__container--open .denhaag-accordion__title,.denhaag-accordion__container--open .denhaag-icon{color:inherit}.denhaag-accordion__title--disabled,.denhaag-accordion__title--disabled+.denhaag-icon,.denhaag-accordion__title[disabled],.denhaag-accordion__title[disabled]+.denhaag-icon{z-index:1}.denhaag-accordion__title:focus-visible,.denhaag-accordion__title:focus-visible+.denhaag-icon{color:var(--denhaag-accordion-panel-color);outline:var(--denhaag-accordion-panel-outline)}.denhaag-accordion__container--open .denhaag-accordion__panel--hover .denhaag-accordion__title,.denhaag-accordion__container--open .denhaag-accordion__panel--hover .denhaag-icon,.denhaag-accordion__container--open .denhaag-accordion__panel:hover .denhaag-accordion__title,.denhaag-accordion__container--open .denhaag-accordion__panel:hover .denhaag-icon{color:var(--denhaag-accordion-container-open-color)}.denhaag-accordion__panel:hover .denhaag-accordion__title:not([disabled]),.denhaag-accordion__panel:hover .denhaag-accordion__title:not([disabled])+.denhaag-icon{color:var(--denhaag-accordion-panel-color);outline:var(--denhaag-accordion-panel-outline)}.denhaag-accordion__title--disabled:before,.denhaag-accordion__title[disabled]:before{background-color:var(--denhaag-accordion-title-disabled-background-color);content:"";height:100%;left:0;position:absolute;top:0;width:100%;z-index:-1}.denhaag-accordion__title--focus:after,.denhaag-accordion__title:focus-visible:after{border-radius:var(--denhaag-accordion-title-focus-border-radius);content:"";height:100%;left:0;outline:var(--denhaag-accordion-title-focus-outline);position:absolute;top:0;width:100%}.denhaag-accordion__container--open{--denhaag-accordion-details-display:var(--denhaag-accordion-details-open-display);--denhaag-accordion-title-color:var(--denhaag-accordion-container-open-title-color);--denhaag-accordion-icon-color:var(--denhaag-accordion-container-open-icon-color);--denhaag-accordion-icon-transform:var(--denhaag-accordion-container-open-icon-transform)}.denhaag-accordion__container--open .denhaag-accordion__panel{--denhaag-accordion-panel-font-weight:var(--denhaag-accordion-container-open-panel-font-weight);color:var(--denhaag-accordion-container-open-panel-color)}.denhaag-accordion__details{display:var(--denhaag-accordion-details-display);margin-inline-end:var(--denhaag-accordion-details-margin-inline-end);padding-block-end:var(--denhaag-accordion-details-padding-block-end);padding-block-start:var(--denhaag-accordion-details-padding-block-start);padding-inline-end:var(--denhaag-accordion-details-padding-inline);padding-inline-start:var(--denhaag-accordion-details-padding-inline)}';if(typeof document<"u"){const M=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style");e.type="text/css",e.nonce=window.NONCE,M.appendChild(e),e.styleSheet?e.styleSheet.cssText=l:e.appendChild(document.createTextNode(l))}const k=`# Accordion

An accordion is a vertically stacked list of headers that reveal or hide associated sections of content.

## When to use

An accordion is used to:

- Organize related information.
- Shorten pages and reduce scrolling when content is not crucial to read in full.
- When space is at a premium and long content cannot be displayed all at once, like on a mobile interface or in a side panel.

## Alternatives and related components

None.

## Anatomy

The accordion consists of:

1. Title: contains the section title and is control for revealing the panel.
2. Icon: indicates if the panel is open or closed.
3. Panel: the section of content associated with an accordion header.
4. Container

## (Interactive) states

The accordion contains the states inactive, active, hover, disabled and focus.

## Design properties

### Typography

- Title inactive: TheSans/md/400
- Title active: TheSans/md/700
- Panel: TheSans/md/400

### Color

- Title: text color Grey/4
- Icon: svg color Grey/4
- Panel: text color Grey/4
- Container: border color Grey/2

### Interactive states

- Active: title text color Blue/3, icon svg color Blue/3
- Hover: title text color Blue/3, icon svg color Blue/3
- Disabled: title text color Grey/2, icon svg color Grey/2
- Focus: title text color Grey/4, icon svg color Grey/4, container border color Ocher/5

### Structure

- Title inactive: padding-top and padding-bottom 12px, height 48px
- Title active: padding top and padding-bottom 16px
- Title: margin-left 16px
- Icon: height and width 24px, padding-right 16px
- Panel: padding-right 16px
- Container: border 1px

## Accessibility

Availability of accordion content to assistive technology requires the use of aria-controls and toggling aria-expanded as regions are expanded and collapsed.

## Content guidelines

### Title

Accordion titles should:

- Be clear because it hides content
- Be as brief as possible while still being clear and descriptive.

If you struggle to come up with clear titles, it might be because the way you’ve separated the content is not clear.

### Panel

Content inside of a section may be split into paragraphs and include sub-headers if needed.

## Best practices

### Dos

Accordions should:

- Have an overview of multiple, related sections of content.
- Show and hide those sections as needed.
- Open as many panels as needed.

### Don’ts

Accordions should:

- Not be used if you can keep the content on a single page.
- Not be used to split up a series of questions into sections.
- Not hide content which is essential to all users.

## References

[https://design-system.service.gov.uk/components/accordion/](https://design-system.service.gov.uk/components/accordion/)
[https://www.nngroup.com/articles/accordions-complex-content/](https://www.nngroup.com/articles/accordions-complex-content/)
`,O={title:"CSS/Surfaces/Accordion",tags:["autodocs"],parameters:{docs:{description:{component:k}},status:{type:"WORK IN PROGRESS"}}},n={render:()=>a.jsxs("div",{className:"denhaag-accordion",children:[a.jsxs("div",{className:"denhaag-accordion__container",children:[a.jsxs("h3",{className:"denhaag-accordion__panel",children:[a.jsx("button",{"aria-expanded":"false","aria-controls":"default-accordion-details-one",className:"denhaag-accordion__title",id:"default-accordion1id",children:"Accordion"}),a.jsx("svg",{className:"denhaag-icon",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:"false","aria-hidden":"true","shape-rendering":"auto",children:a.jsx("path",{d:"M5.293 8.293a1 1 0 011.414 0L12 13.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z",fill:"currentColor"})})]}),a.jsx("div",{id:"default-accordion-details-one",role:"region","aria-labelledby":"default-accordion1id",className:"denhaag-accordion__details",children:a.jsx("p",{className:"utrecht-paragraph",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),a.jsxs("div",{className:"denhaag-accordion__container",children:[a.jsxs("h3",{className:"denhaag-accordion__panel",children:[a.jsx("button",{"aria-expanded":"false","aria-controls":"default-accordion-details-two",className:"denhaag-accordion__title",id:"default-accordion2id",children:"Accordion"}),a.jsx("svg",{className:"denhaag-icon",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:"false","aria-hidden":"true","shape-rendering":"auto",children:a.jsx("path",{d:"M5.293 8.293a1 1 0 011.414 0L12 13.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z",fill:"currentColor"})})]}),a.jsx("div",{id:"default-accordion-details-two",role:"region","aria-labelledby":"default-accordion2id",className:"denhaag-accordion__details",children:a.jsx("p",{className:"utrecht-paragraph",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),a.jsxs("div",{className:"denhaag-accordion__container",children:[a.jsxs("h3",{className:"denhaag-accordion__panel",children:[a.jsx("button",{"aria-expanded":"false","aria-controls":"default-accordion-details-three",className:"denhaag-accordion__title",id:"default-accordion3id",children:"Integer blandit libero quis risus maximus auctor. Proin ullamcorper, metus."}),a.jsx("svg",{className:"denhaag-icon",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:"false","aria-hidden":"true","shape-rendering":"auto",children:a.jsx("path",{d:"M5.293 8.293a1 1 0 011.414 0L12 13.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z",fill:"currentColor"})})]}),a.jsx("div",{id:"default-accordion-details-three",role:"region","aria-labelledby":"default-accordion3id",className:"denhaag-accordion__details",children:a.jsx("p",{className:"utrecht-paragraph",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]})]})},o={render:()=>a.jsxs("div",{className:"denhaag-accordion",children:[a.jsxs("div",{className:"denhaag-accordion__container",children:[a.jsxs("h3",{className:"denhaag-accordion__panel",children:[a.jsx("button",{"aria-expanded":"false","aria-controls":"disabled-accordion-details-one",className:"denhaag-accordion__title",id:"disabled-accordion1id",children:"Accordion"}),a.jsx("svg",{className:"denhaag-icon",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:"false","aria-hidden":"true","shape-rendering":"auto",children:a.jsx("path",{d:"M5.293 8.293a1 1 0 011.414 0L12 13.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z",fill:"currentColor"})})]}),a.jsx("div",{id:"disabled-accordion-details-one",role:"region","aria-labelledby":"disabled-accordion1id",className:"denhaag-accordion__details",children:a.jsx("p",{className:"utrecht-paragraph",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),a.jsxs("div",{className:"denhaag-accordion__container",children:[a.jsxs("h3",{className:"denhaag-accordion__panel",children:[a.jsx("button",{"aria-expanded":"false","aria-controls":"disabled-accordion-details-two",className:"denhaag-accordion__title denhaag-accordion__title--disabled",id:"disabled-accordion2id",disabled:!0,children:"Accordion"}),a.jsx("svg",{className:"denhaag-icon",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:"false","aria-hidden":"true","shape-rendering":"auto",children:a.jsx("path",{d:"M5.293 8.293a1 1 0 011.414 0L12 13.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z",fill:"currentColor"})})]}),a.jsx("div",{id:"disabled-accordion-details-two",role:"region","aria-labelledby":"disabled-accordion2id",className:"denhaag-accordion__details",children:a.jsx("p",{className:"utrecht-paragraph",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),a.jsxs("div",{className:"denhaag-accordion__container",children:[a.jsxs("h3",{className:"denhaag-accordion__panel",children:[a.jsx("button",{"aria-expanded":"false","aria-controls":"disabled-accordion-details-three",className:"denhaag-accordion__title",id:"disabled-accordion3id",children:"Accordion"}),a.jsx("svg",{className:"denhaag-icon",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:"false","aria-hidden":"true","shape-rendering":"auto",children:a.jsx("path",{d:"M5.293 8.293a1 1 0 011.414 0L12 13.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z",fill:"currentColor"})})]}),a.jsx("div",{id:"disabled-accordion-details-three",role:"region","aria-labelledby":"disabled-accordion3id",className:"denhaag-accordion__details",children:a.jsx("p",{className:"utrecht-paragraph",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]})]})},i={render:()=>a.jsxs("div",{className:"denhaag-accordion",children:[a.jsxs("div",{className:"denhaag-accordion__container",children:[a.jsxs("h3",{className:"denhaag-accordion__panel",children:[a.jsx("button",{"aria-expanded":"false","aria-controls":"focus-accordion-details-one",className:"denhaag-accordion__title",id:"focus-accordion1id",children:"Accordion"}),a.jsx("svg",{className:"denhaag-icon",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:"false","aria-hidden":"true","shape-rendering":"auto",children:a.jsx("path",{d:"M5.293 8.293a1 1 0 011.414 0L12 13.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z",fill:"currentColor"})})]}),a.jsx("div",{id:"focus-accordion-details-one",role:"region","aria-labelledby":"focus-accordion1id",className:"denhaag-accordion__details",children:a.jsx("p",{className:"utrecht-paragraph",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),a.jsxs("div",{className:"denhaag-accordion__container",children:[a.jsxs("h3",{className:"denhaag-accordion__panel",children:[a.jsx("button",{"aria-expanded":"false","aria-controls":"focus-accordion-details-two",className:"denhaag-accordion__title denhaag-accordion__title--focus",id:"focus-accordion2id",children:"Accordion"}),a.jsx("svg",{className:"denhaag-icon",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:"false","aria-hidden":"true","shape-rendering":"auto",children:a.jsx("path",{d:"M5.293 8.293a1 1 0 011.414 0L12 13.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z",fill:"currentColor"})})]}),a.jsx("div",{id:"focus-accordion-details-two",role:"region","aria-labelledby":"focus-accordion2id",className:"denhaag-accordion__details",children:a.jsx("p",{className:"utrecht-paragraph",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),a.jsxs("div",{className:"denhaag-accordion__container",children:[a.jsxs("h3",{className:"denhaag-accordion__panel",children:[a.jsx("button",{"aria-expanded":"false","aria-controls":"focus-accordion-details-three",className:"denhaag-accordion__title",id:"focus-accordion3id",children:"Accordion"}),a.jsx("svg",{className:"denhaag-icon",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:"false","aria-hidden":"true","shape-rendering":"auto",children:a.jsx("path",{d:"M5.293 8.293a1 1 0 011.414 0L12 13.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z",fill:"currentColor"})})]}),a.jsx("div",{id:"focus-accordion-details-three",role:"region","aria-labelledby":"focus-accordion3id",className:"denhaag-accordion__details",children:a.jsx("p",{className:"utrecht-paragraph",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]})]})},d={render:()=>a.jsxs("div",{className:"denhaag-accordion",children:[a.jsxs("div",{className:"denhaag-accordion__container",children:[a.jsxs("h3",{className:"denhaag-accordion__panel",children:[a.jsx("button",{"aria-expanded":"false","aria-controls":"hover-accordion-details-one",className:"denhaag-accordion__title",id:"hover-accordion1id",children:"Accordion"}),a.jsx("svg",{className:"denhaag-icon",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:"false","aria-hidden":"true","shape-rendering":"auto",children:a.jsx("path",{d:"M5.293 8.293a1 1 0 011.414 0L12 13.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z",fill:"currentColor"})})]}),a.jsx("div",{id:"hover-accordion-details-one",role:"region","aria-labelledby":"hover-accordion1id",className:"denhaag-accordion__details",children:a.jsx("p",{className:"utrecht-paragraph",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),a.jsxs("div",{className:"denhaag-accordion__container",children:[a.jsxs("h3",{className:"denhaag-accordion__panel denhaag-accordion__panel--hover",children:[a.jsx("button",{"aria-expanded":"false","aria-controls":"hover-accordion-details-two",className:"denhaag-accordion__title",id:"hover-accordion2id",children:"Accordion"}),a.jsx("svg",{className:"denhaag-icon",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:"false","aria-hidden":"true","shape-rendering":"auto",children:a.jsx("path",{d:"M5.293 8.293a1 1 0 011.414 0L12 13.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z",fill:"currentColor"})})]}),a.jsx("div",{id:"hover-accordion-details-two",role:"region","aria-labelledby":"hover-accordion2id",className:"denhaag-accordion__details",children:a.jsx("p",{className:"utrecht-paragraph",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),a.jsxs("div",{className:"denhaag-accordion__container",children:[a.jsxs("h3",{className:"denhaag-accordion__panel",children:[a.jsx("button",{"aria-expanded":"false","aria-controls":"hover-accordion-details-three",className:"denhaag-accordion__title",id:"hover-accordion3id",children:"Accordion"}),a.jsx("svg",{className:"denhaag-icon",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:"false","aria-hidden":"true","shape-rendering":"auto",children:a.jsx("path",{d:"M5.293 8.293a1 1 0 011.414 0L12 13.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z",fill:"currentColor"})})]}),a.jsx("div",{id:"hover-accordion-details-three",role:"region","aria-labelledby":"hover-accordion3id",className:"denhaag-accordion__details",children:a.jsx("p",{className:"utrecht-paragraph",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]})]})},c={render:()=>a.jsxs("div",{className:"denhaag-accordion",children:[a.jsxs("div",{className:"denhaag-accordion__container",children:[a.jsxs("h3",{className:"denhaag-accordion__panel",children:[a.jsx("button",{"aria-expanded":"false","aria-controls":"open-accordion-details-one",className:"denhaag-accordion__title",id:"open-accordion1id",children:"Accordion"}),a.jsx("svg",{className:"denhaag-icon",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:"false","aria-hidden":"true","shape-rendering":"auto",children:a.jsx("path",{d:"M5.293 8.293a1 1 0 011.414 0L12 13.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z",fill:"currentColor"})})]}),a.jsx("div",{id:"open-accordion-details-one",role:"region","aria-labelledby":"open-accordion1id",className:"denhaag-accordion__details",children:a.jsx("p",{className:"utrecht-paragraph",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),a.jsxs("div",{className:"denhaag-accordion__container denhaag-accordion__container--open",children:[a.jsxs("h3",{className:"denhaag-accordion__panel",children:[a.jsx("button",{"aria-expanded":"true","aria-controls":"open-accordion-details-two",className:"denhaag-accordion__title",id:"open-accordion2id",children:"Accordion"}),a.jsx("svg",{className:"denhaag-icon",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:"false","aria-hidden":"true","shape-rendering":"auto",children:a.jsx("path",{d:"M5.293 8.293a1 1 0 011.414 0L12 13.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z",fill:"currentColor"})})]}),a.jsx("div",{id:"open-accordion-details-two",role:"region","aria-labelledby":"open-accordion2id",className:"denhaag-accordion__details",children:a.jsx("p",{className:"utrecht-paragraph",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),a.jsxs("div",{className:"denhaag-accordion__container",children:[a.jsxs("h3",{className:"denhaag-accordion__panel",children:[a.jsx("button",{"aria-expanded":"false","aria-controls":"open-accordion-details-three",className:"denhaag-accordion__title",id:"open-accordion3id",children:"Accordion"}),a.jsx("svg",{className:"denhaag-icon",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:"false","aria-hidden":"true","shape-rendering":"auto",children:a.jsx("path",{d:"M5.293 8.293a1 1 0 011.414 0L12 13.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z",fill:"currentColor"})})]}),a.jsx("div",{id:"open-accordion-details-three",role:"region","aria-labelledby":"open-accordion3id",className:"denhaag-accordion__details",children:a.jsx("p",{className:"utrecht-paragraph",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]})]})},r={render:()=>a.jsxs("div",{className:"denhaag-accordion",children:[a.jsxs("div",{className:"denhaag-accordion__container",children:[a.jsxs("h3",{className:"denhaag-accordion__panel",children:[a.jsx("button",{"aria-expanded":"false","aria-controls":"open-accordion-details-one",className:"denhaag-accordion__title",id:"open-accordion1id",children:"Accordion"}),a.jsx("svg",{className:"denhaag-icon",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:"false","aria-hidden":"true","shape-rendering":"auto",children:a.jsx("path",{d:"M5.293 8.293a1 1 0 011.414 0L12 13.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z",fill:"currentColor"})})]}),a.jsx("div",{id:"open-accordion-details-one",role:"region","aria-labelledby":"open-accordion1id",className:"denhaag-accordion__details",children:a.jsx("p",{className:"utrecht-paragraph",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),a.jsxs("div",{className:"denhaag-accordion__container denhaag-accordion__container--open",children:[a.jsxs("h3",{className:"denhaag-accordion__panel denhaag-accordion__panel--hover",children:[a.jsx("button",{"aria-expanded":"true","aria-controls":"open-accordion-details-two",className:"denhaag-accordion__title",id:"open-accordion2id",children:"Accordion"}),a.jsx("svg",{className:"denhaag-icon",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:"false","aria-hidden":"true","shape-rendering":"auto",children:a.jsx("path",{d:"M5.293 8.293a1 1 0 011.414 0L12 13.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z",fill:"currentColor"})})]}),a.jsx("div",{id:"open-accordion-details-two",role:"region","aria-labelledby":"open-accordion2id",className:"denhaag-accordion__details",children:a.jsx("p",{className:"utrecht-paragraph",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),a.jsxs("div",{className:"denhaag-accordion__container",children:[a.jsxs("h3",{className:"denhaag-accordion__panel",children:[a.jsx("button",{"aria-expanded":"false","aria-controls":"open-accordion-details-three",className:"denhaag-accordion__title",id:"open-accordion3id",children:"Accordion"}),a.jsx("svg",{className:"denhaag-icon",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:"false","aria-hidden":"true","shape-rendering":"auto",children:a.jsx("path",{d:"M5.293 8.293a1 1 0 011.414 0L12 13.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z",fill:"currentColor"})})]}),a.jsx("div",{id:"open-accordion-details-three",role:"region","aria-labelledby":"open-accordion3id",className:"denhaag-accordion__details",children:a.jsx("p",{className:"utrecht-paragraph",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]})]})},s={render:()=>a.jsxs("div",{className:"denhaag-accordion",children:[a.jsxs("div",{className:"denhaag-accordion__container",children:[a.jsxs("h3",{className:"denhaag-accordion__panel",children:[a.jsx("button",{"aria-expanded":"false","aria-controls":"open-accordion-details-one",className:"denhaag-accordion__title",id:"open-accordion1id",children:"Accordion"}),a.jsx("svg",{className:"denhaag-icon",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:"false","aria-hidden":"true","shape-rendering":"auto",children:a.jsx("path",{d:"M5.293 8.293a1 1 0 011.414 0L12 13.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z",fill:"currentColor"})})]}),a.jsx("div",{id:"open-accordion-details-one",role:"region","aria-labelledby":"open-accordion1id",className:"denhaag-accordion__details",children:a.jsx("p",{className:"utrecht-paragraph",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),a.jsxs("div",{className:"denhaag-accordion__container denhaag-accordion__container--open",children:[a.jsxs("h3",{className:"denhaag-accordion__panel",children:[a.jsx("button",{"aria-expanded":"true","aria-controls":"open-accordion-details-two",className:"denhaag-accordion__title denhaag-accordion__title--focus",id:"open-accordion2id",children:"Accordion"}),a.jsx("svg",{className:"denhaag-icon",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:"false","aria-hidden":"true","shape-rendering":"auto",children:a.jsx("path",{d:"M5.293 8.293a1 1 0 011.414 0L12 13.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z",fill:"currentColor"})})]}),a.jsx("div",{id:"open-accordion-details-two",role:"region","aria-labelledby":"open-accordion2id",className:"denhaag-accordion__details",children:a.jsx("p",{className:"utrecht-paragraph",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),a.jsxs("div",{className:"denhaag-accordion__container",children:[a.jsxs("h3",{className:"denhaag-accordion__panel",children:[a.jsx("button",{"aria-expanded":"false","aria-controls":"open-accordion-details-three",className:"denhaag-accordion__title",id:"open-accordion3id",children:"Accordion"}),a.jsx("svg",{className:"denhaag-icon",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:"false","aria-hidden":"true","shape-rendering":"auto",children:a.jsx("path",{d:"M5.293 8.293a1 1 0 011.414 0L12 13.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z",fill:"currentColor"})})]}),a.jsx("div",{id:"open-accordion-details-three",role:"region","aria-labelledby":"open-accordion3id",className:"denhaag-accordion__details",children:a.jsx("p",{className:"utrecht-paragraph",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]})]})};var t,h,g;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => <div className="denhaag-accordion">
      <div className="denhaag-accordion__container">
        <h3 className="denhaag-accordion__panel">
          <button aria-expanded="false" aria-controls="default-accordion-details-one" className="denhaag-accordion__title" id="default-accordion1id">
            Accordion
          </button>
          <svg className="denhaag-icon" width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true" shape-rendering="auto">
            <path d="M5.293 8.293a1 1 0 011.414 0L12 13.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z" fill="currentColor"></path>
          </svg>
        </h3>
        <div id="default-accordion-details-one" role="region" aria-labelledby="default-accordion1id" className="denhaag-accordion__details">
          <p className="utrecht-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </p>
        </div>
      </div>
      <div className="denhaag-accordion__container">
        <h3 className="denhaag-accordion__panel">
          <button aria-expanded="false" aria-controls="default-accordion-details-two" className="denhaag-accordion__title" id="default-accordion2id">
            Accordion
          </button>
          <svg className="denhaag-icon" width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true" shape-rendering="auto">
            <path d="M5.293 8.293a1 1 0 011.414 0L12 13.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z" fill="currentColor"></path>
          </svg>
        </h3>
        <div id="default-accordion-details-two" role="region" aria-labelledby="default-accordion2id" className="denhaag-accordion__details">
          <p className="utrecht-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </p>
        </div>
      </div>
      <div className="denhaag-accordion__container">
        <h3 className="denhaag-accordion__panel">
          <button aria-expanded="false" aria-controls="default-accordion-details-three" className="denhaag-accordion__title" id="default-accordion3id">
            Integer blandit libero quis risus maximus auctor. Proin ullamcorper, metus.
          </button>
          <svg className="denhaag-icon" width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true" shape-rendering="auto">
            <path d="M5.293 8.293a1 1 0 011.414 0L12 13.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z" fill="currentColor"></path>
          </svg>
        </h3>
        <div id="default-accordion-details-three" role="region" aria-labelledby="default-accordion3id" className="denhaag-accordion__details">
          <p className="utrecht-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </p>
        </div>
      </div>
    </div>
}`,...(g=(h=n.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var p,m,u;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div className="denhaag-accordion">
      <div className="denhaag-accordion__container">
        <h3 className="denhaag-accordion__panel">
          <button aria-expanded="false" aria-controls="disabled-accordion-details-one" className="denhaag-accordion__title" id="disabled-accordion1id">
            Accordion
          </button>
          <svg className="denhaag-icon" width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true" shape-rendering="auto">
            <path d="M5.293 8.293a1 1 0 011.414 0L12 13.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z" fill="currentColor"></path>
          </svg>
        </h3>
        <div id="disabled-accordion-details-one" role="region" aria-labelledby="disabled-accordion1id" className="denhaag-accordion__details">
          <p className="utrecht-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </p>
        </div>
      </div>
      <div className="denhaag-accordion__container">
        <h3 className="denhaag-accordion__panel">
          <button aria-expanded="false" aria-controls="disabled-accordion-details-two" className="denhaag-accordion__title denhaag-accordion__title--disabled" id="disabled-accordion2id" disabled>
            Accordion
          </button>
          <svg className="denhaag-icon" width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true" shape-rendering="auto">
            <path d="M5.293 8.293a1 1 0 011.414 0L12 13.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z" fill="currentColor"></path>
          </svg>
        </h3>
        <div id="disabled-accordion-details-two" role="region" aria-labelledby="disabled-accordion2id" className="denhaag-accordion__details">
          <p className="utrecht-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </p>
        </div>
      </div>
      <div className="denhaag-accordion__container">
        <h3 className="denhaag-accordion__panel">
          <button aria-expanded="false" aria-controls="disabled-accordion-details-three" className="denhaag-accordion__title" id="disabled-accordion3id">
            Accordion
          </button>
          <svg className="denhaag-icon" width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true" shape-rendering="auto">
            <path d="M5.293 8.293a1 1 0 011.414 0L12 13.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z" fill="currentColor"></path>
          </svg>
        </h3>
        <div id="disabled-accordion-details-three" role="region" aria-labelledby="disabled-accordion3id" className="denhaag-accordion__details">
          <p className="utrecht-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </p>
        </div>
      </div>
    </div>
}`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var _,v,b;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <div className="denhaag-accordion">
      <div className="denhaag-accordion__container">
        <h3 className="denhaag-accordion__panel">
          <button aria-expanded="false" aria-controls="focus-accordion-details-one" className="denhaag-accordion__title" id="focus-accordion1id">
            Accordion
          </button>
          <svg className="denhaag-icon" width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true" shape-rendering="auto">
            <path d="M5.293 8.293a1 1 0 011.414 0L12 13.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z" fill="currentColor"></path>
          </svg>
        </h3>
        <div id="focus-accordion-details-one" role="region" aria-labelledby="focus-accordion1id" className="denhaag-accordion__details">
          <p className="utrecht-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </p>
        </div>
      </div>
      <div className="denhaag-accordion__container">
        <h3 className="denhaag-accordion__panel">
          <button aria-expanded="false" aria-controls="focus-accordion-details-two" className="denhaag-accordion__title denhaag-accordion__title--focus" id="focus-accordion2id">
            Accordion
          </button>
          <svg className="denhaag-icon" width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true" shape-rendering="auto">
            <path d="M5.293 8.293a1 1 0 011.414 0L12 13.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z" fill="currentColor"></path>
          </svg>
        </h3>
        <div id="focus-accordion-details-two" role="region" aria-labelledby="focus-accordion2id" className="denhaag-accordion__details">
          <p className="utrecht-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </p>
        </div>
      </div>
      <div className="denhaag-accordion__container">
        <h3 className="denhaag-accordion__panel">
          <button aria-expanded="false" aria-controls="focus-accordion-details-three" className="denhaag-accordion__title" id="focus-accordion3id">
            Accordion
          </button>
          <svg className="denhaag-icon" width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true" shape-rendering="auto">
            <path d="M5.293 8.293a1 1 0 011.414 0L12 13.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z" fill="currentColor"></path>
          </svg>
        </h3>
        <div id="focus-accordion-details-three" role="region" aria-labelledby="focus-accordion3id" className="denhaag-accordion__details">
          <p className="utrecht-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </p>
        </div>
      </div>
    </div>
}`,...(b=(v=i.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var x,f,w;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div className="denhaag-accordion">
      <div className="denhaag-accordion__container">
        <h3 className="denhaag-accordion__panel">
          <button aria-expanded="false" aria-controls="hover-accordion-details-one" className="denhaag-accordion__title" id="hover-accordion1id">
            Accordion
          </button>
          <svg className="denhaag-icon" width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true" shape-rendering="auto">
            <path d="M5.293 8.293a1 1 0 011.414 0L12 13.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z" fill="currentColor"></path>
          </svg>
        </h3>
        <div id="hover-accordion-details-one" role="region" aria-labelledby="hover-accordion1id" className="denhaag-accordion__details">
          <p className="utrecht-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </p>
        </div>
      </div>
      <div className="denhaag-accordion__container">
        <h3 className="denhaag-accordion__panel denhaag-accordion__panel--hover">
          <button aria-expanded="false" aria-controls="hover-accordion-details-two" className="denhaag-accordion__title" id="hover-accordion2id">
            Accordion
          </button>
          <svg className="denhaag-icon" width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true" shape-rendering="auto">
            <path d="M5.293 8.293a1 1 0 011.414 0L12 13.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z" fill="currentColor"></path>
          </svg>
        </h3>
        <div id="hover-accordion-details-two" role="region" aria-labelledby="hover-accordion2id" className="denhaag-accordion__details">
          <p className="utrecht-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </p>
        </div>
      </div>
      <div className="denhaag-accordion__container">
        <h3 className="denhaag-accordion__panel">
          <button aria-expanded="false" aria-controls="hover-accordion-details-three" className="denhaag-accordion__title" id="hover-accordion3id">
            Accordion
          </button>
          <svg className="denhaag-icon" width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true" shape-rendering="auto">
            <path d="M5.293 8.293a1 1 0 011.414 0L12 13.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z" fill="currentColor"></path>
          </svg>
        </h3>
        <div id="hover-accordion-details-three" role="region" aria-labelledby="hover-accordion3id" className="denhaag-accordion__details">
          <p className="utrecht-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </p>
        </div>
      </div>
    </div>
}`,...(w=(f=d.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var N,j,y;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div className="denhaag-accordion">
      <div className="denhaag-accordion__container">
        <h3 className="denhaag-accordion__panel">
          <button aria-expanded="false" aria-controls="open-accordion-details-one" className="denhaag-accordion__title" id="open-accordion1id">
            Accordion
          </button>
          <svg className="denhaag-icon" width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true" shape-rendering="auto">
            <path d="M5.293 8.293a1 1 0 011.414 0L12 13.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z" fill="currentColor"></path>
          </svg>
        </h3>
        <div id="open-accordion-details-one" role="region" aria-labelledby="open-accordion1id" className="denhaag-accordion__details">
          <p className="utrecht-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </p>
        </div>
      </div>
      <div className="denhaag-accordion__container denhaag-accordion__container--open">
        <h3 className="denhaag-accordion__panel">
          <button aria-expanded="true" aria-controls="open-accordion-details-two" className="denhaag-accordion__title" id="open-accordion2id">
            Accordion
          </button>
          <svg className="denhaag-icon" width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true" shape-rendering="auto">
            <path d="M5.293 8.293a1 1 0 011.414 0L12 13.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z" fill="currentColor"></path>
          </svg>
        </h3>
        <div id="open-accordion-details-two" role="region" aria-labelledby="open-accordion2id" className="denhaag-accordion__details">
          <p className="utrecht-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </p>
        </div>
      </div>
      <div className="denhaag-accordion__container">
        <h3 className="denhaag-accordion__panel">
          <button aria-expanded="false" aria-controls="open-accordion-details-three" className="denhaag-accordion__title" id="open-accordion3id">
            Accordion
          </button>
          <svg className="denhaag-icon" width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true" shape-rendering="auto">
            <path d="M5.293 8.293a1 1 0 011.414 0L12 13.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z" fill="currentColor"></path>
          </svg>
        </h3>
        <div id="open-accordion-details-three" role="region" aria-labelledby="open-accordion3id" className="denhaag-accordion__details">
          <p className="utrecht-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </p>
        </div>
      </div>
    </div>
}`,...(y=(j=c.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};var L,S,A;r.parameters={...r.parameters,docs:{...(L=r.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div className="denhaag-accordion">
      <div className="denhaag-accordion__container">
        <h3 className="denhaag-accordion__panel">
          <button aria-expanded="false" aria-controls="open-accordion-details-one" className="denhaag-accordion__title" id="open-accordion1id">
            Accordion
          </button>
          <svg className="denhaag-icon" width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true" shape-rendering="auto">
            <path d="M5.293 8.293a1 1 0 011.414 0L12 13.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z" fill="currentColor"></path>
          </svg>
        </h3>
        <div id="open-accordion-details-one" role="region" aria-labelledby="open-accordion1id" className="denhaag-accordion__details">
          <p className="utrecht-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </p>
        </div>
      </div>
      <div className="denhaag-accordion__container denhaag-accordion__container--open">
        <h3 className="denhaag-accordion__panel denhaag-accordion__panel--hover">
          <button aria-expanded="true" aria-controls="open-accordion-details-two" className="denhaag-accordion__title" id="open-accordion2id">
            Accordion
          </button>
          <svg className="denhaag-icon" width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true" shape-rendering="auto">
            <path d="M5.293 8.293a1 1 0 011.414 0L12 13.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z" fill="currentColor"></path>
          </svg>
        </h3>
        <div id="open-accordion-details-two" role="region" aria-labelledby="open-accordion2id" className="denhaag-accordion__details">
          <p className="utrecht-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </p>
        </div>
      </div>
      <div className="denhaag-accordion__container">
        <h3 className="denhaag-accordion__panel">
          <button aria-expanded="false" aria-controls="open-accordion-details-three" className="denhaag-accordion__title" id="open-accordion3id">
            Accordion
          </button>
          <svg className="denhaag-icon" width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true" shape-rendering="auto">
            <path d="M5.293 8.293a1 1 0 011.414 0L12 13.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z" fill="currentColor"></path>
          </svg>
        </h3>
        <div id="open-accordion-details-three" role="region" aria-labelledby="open-accordion3id" className="denhaag-accordion__details">
          <p className="utrecht-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </p>
        </div>
      </div>
    </div>
}`,...(A=(S=r.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};var C,B,z;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div className="denhaag-accordion">
      <div className="denhaag-accordion__container">
        <h3 className="denhaag-accordion__panel">
          <button aria-expanded="false" aria-controls="open-accordion-details-one" className="denhaag-accordion__title" id="open-accordion1id">
            Accordion
          </button>
          <svg className="denhaag-icon" width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true" shape-rendering="auto">
            <path d="M5.293 8.293a1 1 0 011.414 0L12 13.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z" fill="currentColor"></path>
          </svg>
        </h3>
        <div id="open-accordion-details-one" role="region" aria-labelledby="open-accordion1id" className="denhaag-accordion__details">
          <p className="utrecht-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </p>
        </div>
      </div>
      <div className="denhaag-accordion__container denhaag-accordion__container--open">
        <h3 className="denhaag-accordion__panel">
          <button aria-expanded="true" aria-controls="open-accordion-details-two" className="denhaag-accordion__title denhaag-accordion__title--focus" id="open-accordion2id">
            Accordion
          </button>
          <svg className="denhaag-icon" width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true" shape-rendering="auto">
            <path d="M5.293 8.293a1 1 0 011.414 0L12 13.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z" fill="currentColor"></path>
          </svg>
        </h3>
        <div id="open-accordion-details-two" role="region" aria-labelledby="open-accordion2id" className="denhaag-accordion__details">
          <p className="utrecht-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </p>
        </div>
      </div>
      <div className="denhaag-accordion__container">
        <h3 className="denhaag-accordion__panel">
          <button aria-expanded="false" aria-controls="open-accordion-details-three" className="denhaag-accordion__title" id="open-accordion3id">
            Accordion
          </button>
          <svg className="denhaag-icon" width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true" shape-rendering="auto">
            <path d="M5.293 8.293a1 1 0 011.414 0L12 13.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z" fill="currentColor"></path>
          </svg>
        </h3>
        <div id="open-accordion-details-three" role="region" aria-labelledby="open-accordion3id" className="denhaag-accordion__details">
          <p className="utrecht-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </p>
        </div>
      </div>
    </div>
}`,...(z=(B=s.parameters)==null?void 0:B.docs)==null?void 0:z.source}}};const G=["Default","Disabled","Focus","Hover","Open","OpenHover","OpenFocus"];export{n as Default,o as Disabled,i as Focus,d as Hover,c as Open,s as OpenFocus,r as OpenHover,G as __namedExportsOrder,O as default};
