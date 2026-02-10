import{c as d,R as t,r as g}from"./iframe-hBvvBgCZ.js";import{m as u}from"./index-B-c2WPt3.js";var m=".denhaag-accordion{font-family:var(--denhaag-accordion-font-family);margin-block-end:var(--denhaag-accordion-margin-block-end)}.denhaag-accordion-section{border:var(--denhaag-accordion-section-border,1px solid #f9f9fa);inline-size:100%}.denhaag-accordion .denhaag-accordion-section:not(:last-child){border-bottom:none}.denhaag-accordion-section__content{background-color:var(--denhaag-accordion-section-content-background-color,#fff);display:grid;grid-template-rows:0fr;transition:var(--denhaag-accordion-section-content-transition,grid-template-rows .4s ease-in-out)}@media (prefers-reduced-motion){.denhaag-accordion-section__content{transition:none}}.denhaag-accordion-section__content--expanded{grid-template-rows:1fr}.denhaag-accordion-section__content-body{padding-block:var(--denhaag-accordion-section-content-padding-block-end,24px);padding-inline-end:var(--denhaag-accordion-section-content-padding-inline-end,16px);padding-inline-start:var(--denhaag-accordion-section-content-padding-inline-start,16px)}.denhaag-accordion-section__content-container{overflow:hidden}.denhaag-accordion-section__description{color:var(--denhaag-accordion-section-description-color);font-size:var(--denhaag-accordion-section-description-font-size,inherit)}.denhaag-accordion-section__header{align-items:start;background-color:var(--denhaag-accordion-section-header-background-color,#f9f9fa);border:none;column-gap:var(--denhaag-accordion-section-header-column-gap,8px);cursor:var(--denhaag-accordion-section-header-cursor,pointer);display:flex;font-family:inherit;font-size:var(--denhaag-accordion-section-header-font-size,18px);justify-content:flex-start;line-height:var(--denhaag-accordion-section-header-line-height,24px);padding-block-end:var(--denhaag-accordion-section-header-padding-block-end,12px);padding-block-start:var(--denhaag-accordion-section-header-padding-block-start,12px);padding-inline-end:var(--denhaag-accordion-section-header-padding-inline-end,16);padding-inline-start:var(--denhaag-accordion-section-header-padding-inline-start,16);text-align:inherit;width:100%}.denhaag-accordion-section__icon{background:transparent;border:none;color:var(--denhaag-accordion-section-header-icon-color)}.denhaag-accordion-section__icon .denhaag-icon{transform:var(--denhaag-accordion-section-header-icon-transform,rotate(0deg));transition:var(--denhaag-accordion-section-header-icon-transition,transform .4s ease-in-out)}@media (prefers-reduced-motion){.denhaag-accordion-section__icon .denhaag-icon{transition:none}}.denhaag-accordion-section__icon--expanded .denhaag-icon{transform:var(--denhaag-accordion-section-header-icon-expanded-transform,rotate(180deg))}.denhaag-accordion-section__title{color:var(--denhaag-accordion-section-title-color);font-size:var(--denhaag-accordion-section-title-font-size,inherit);margin-block:0}";if(typeof document<"u"){const n=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css",a.nonce=window.NONCE,n.appendChild(a),a.styleSheet?a.styleSheet.cssText=m:a.appendChild(document.createTextNode(m))}var r=function(){return r=Object.assign||function(a){for(var o,e=1,c=arguments.length;e<c;e++){o=arguments[e];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(a[i]=o[i])}return a},r.apply(this,arguments)};function s(n,a){var o={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&a.indexOf(e)<0&&(o[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,e=Object.getOwnPropertySymbols(n);c<e.length;c++)a.indexOf(e[c])<0&&Object.prototype.propertyIsEnumerable.call(n,e[c])&&(o[e[c]]=n[e[c]]);return o}var f=function(n){var a=n.className,o=n.children,e=s(n,["className","children"]),c=d("denhaag-accordion",a);return t.createElement("div",r({className:c},e),o)},x=function(n){var a=n.isExpanded,o=n.children,e=n.className,c=s(n,["isExpanded","children","className"]),i=d("denhaag-accordion-section__content",{"denhaag-accordion-section__content--expanded":a},e);return t.createElement("div",r({className:i,"aria-expanded":a},c),o)},y=function(n){var a=n.children,o=n.className,e=s(n,["children","className"]),c=d("denhaag-accordion-section__title",o);return t.createElement("h2",r({className:c},e),a)},b=function(n){var a=n.children,o=n.className,e=s(n,["children","className"]),c=d("denhaag-accordion-section__description",o);return t.createElement("div",r({className:c},e),a)},N=function(n){var a=n.isExpanded,o=n.className,e=s(n,["isExpanded","className"]),c=d("denhaag-accordion-section__icon",{"denhaag-accordion-section__icon--expanded":a},o);return t.createElement("div",r({className:c},e),t.createElement(u,null))},E=function(n){var a=n.children,o=n.description,e=n.isExpanded,c=n.onClick,i=n.className,l=s(n,["children","description","isExpanded","onClick","className"]),h=d("denhaag-accordion-section__header",i);return t.createElement("button",r({className:h,onClick:c},l),t.createElement(N,{isExpanded:e}),t.createElement("div",null,t.createElement(y,null,a),o&&t.createElement(b,null,o)))},_=function(n){var a=n.children,o=n.className,e=s(n,["children","className"]),c=d("denhaag-accordion-section__content-container",o);return t.createElement("div",r({className:c},e),a)},w=function(n){var a=n.children,o=n.className,e=s(n,["children","className"]),c=d("denhaag-accordion-section__content-body",o);return t.createElement("div",r({className:c},e),a)},k=function(n){var a=n.title,o=n.description,e=n.children,c=g.useState(!1),i=c[0],l=c[1],h=function(){l(!i)},p=g.useId(),v=d("denhaag-accordion-section",{"denhaag-accordion-section--expanded":i});return t.createElement("div",{className:v},t.createElement(E,{"aria-controls":p,description:o,isExpanded:i,onClick:h},a),t.createElement(x,{id:p,isExpanded:i,"aria-hidden":!i},t.createElement(_,null,t.createElement(w,null,e))))};f.__docgenInfo={description:"",methods:[],displayName:"Accordion"};k.__docgenInfo={description:"",methods:[],displayName:"AccordionSection"};const C=`<!-- @license CC0-1.0 -->

# Accordion

[![npm version](https://img.shields.io/npm/v/@gemeente-denhaag/accordion.svg)](https://www.npmjs.com/package/@gemeente-denhaag/accordion)

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
`;export{f as A,k as a,C as r};
