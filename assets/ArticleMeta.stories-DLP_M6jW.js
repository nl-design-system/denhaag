import{j as e}from"./iframe-4dTl_QDg.js";var i=".denhaag-article-meta{border-block-start:var(--denhaag-article-meta-border-width) var(--denhaag-article-meta-border-style) var(--denhaag-article-meta-border-color);color:var(--denhaag-article-meta-color);display:flex;flex-direction:column;font-family:var(--denhaag-article-meta-font-family);font-size:var(--denhaag-article-meta-font-size);font-weight:var(--denhaag-article-meta-font-weight);gap:var(--denhaag-article-meta-gap);line-height:var(--denhaag-article-meta-line-height);margin-block-start:var(--denhaag-article-meta-margin-block-start);padding-block-end:var(--denhaag-article-meta-padding-block-end);padding-block-start:var(--denhaag-article-meta-padding-block-start)}.denhaag-article-meta--horizontal{flex-direction:row}.denhaag-article-meta__item{margin-block-end:0;margin-block-start:0}.denhaag-article-meta--horizontal>.denhaag-article-meta__item+.denhaag-article-meta__item{border-inline-start:var(--denhaag-article-meta-horizontal-item-border-width) var(--denhaag-article-meta-horizontal-item-border-style,solid) var(--denhaag-article-meta-horizontal-item-border-color,var(--denhaag-article-meta-border-color));padding-inline-start:var(--denhaag-article-meta-gap)}@media (width >= 620px){.denhaag-article-meta--responsive{flex-direction:row}.denhaag-article-meta--responsive>.denhaag-article-meta__item+.denhaag-article-meta__item{border-inline-start:var(--denhaag-article-meta-horizontal-item-border-width) var(--denhaag-article-meta-horizontal-item-border-style,solid) var(--denhaag-article-meta-horizontal-item-border-color,var(--denhaag-article-meta-border-color));padding-inline-start:var(--denhaag-article-meta-gap)}}";if(typeof document<"u"){const d=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css",a.nonce=window.NONCE,d.appendChild(a),a.styleSheet?a.styleSheet.cssText=i:a.appendChild(document.createTextNode(i))}const l=`# Publication Date

The page closing/publication date is a part of a content page.
It shows the publication date (closing) when it comes to a news page.

## When to use

Use the closing on news pages only.

## Anatomy

Publication and edited date: indicates when the news item has been published and has been modified.

## (Interactive) state

Exeptions:
If there are no edits, the editdate will not be shown
If there are edits on the same day as de publication date, show both on the same day

## Design properties

**Typography**

- Publication and editited date: TheSans/md/400

**Colors**

- Publication and edited date: small divider color Grey/2, text color Grey/4, small divider color Grey/4

**Structure**

Publication and edited date: small divider padding-left and padding-right 12px, margin-top 32px, margin-bottom 64px

## Accessibility

[technical requirements]

## Content guidelines

**Dates**
Publication and edited date: Show the number of the day, the month and year. Write dates like this (for Dutch people): 1 november 2021.

## Best practices

### Do's

None.

### Don'ts

None.

## References

-
`,s={title:"CSS/Data Display/Article meta",tags:["autodocs"],parameters:{docs:{description:{component:l}},status:{type:"WORK IN PROGRESS"}}},t={render:()=>e.jsxs("div",{className:"denhaag-article-meta",children:[e.jsx("p",{className:"denhaag-article-meta__item",children:"Auteur: Janneke Smit"}),e.jsx("p",{className:"denhaag-article-meta__item",children:"Gepubliceerd: 9 december 2019"}),e.jsx("p",{className:"denhaag-article-meta__item",children:"Gewijzigd: 28 april 2021"})]})},n={render:()=>e.jsxs("div",{className:"denhaag-article-meta denhaag-article-meta--horizontal",children:[e.jsx("p",{className:"denhaag-article-meta__item",children:"Auteur: Janneke Smit"}),e.jsx("p",{className:"denhaag-article-meta__item",children:"Gepubliceerd: 9 december 2019"}),e.jsx("p",{className:"denhaag-article-meta__item",children:"Gewijzigd: 28 april 2021"})]})},r={render:()=>e.jsxs("div",{className:"denhaag-article-meta denhaag-article-meta--responsive",children:[e.jsx("p",{className:"denhaag-article-meta__item",children:"Gepubliceerd: 9 december 2019"}),e.jsx("p",{className:"denhaag-article-meta__item",children:"Gewijzigd: 28 april 2021"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div className="denhaag-article-meta">
      <p className="denhaag-article-meta__item">Auteur: Janneke Smit</p>
      <p className="denhaag-article-meta__item">Gepubliceerd: 9 december 2019</p>
      <p className="denhaag-article-meta__item">Gewijzigd: 28 april 2021</p>
    </div>
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div className="denhaag-article-meta denhaag-article-meta--horizontal">
      <p className="denhaag-article-meta__item">Auteur: Janneke Smit</p>
      <p className="denhaag-article-meta__item">Gepubliceerd: 9 december 2019</p>
      <p className="denhaag-article-meta__item">Gewijzigd: 28 april 2021</p>
    </div>
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <div className="denhaag-article-meta denhaag-article-meta--responsive">
      <p className="denhaag-article-meta__item">Gepubliceerd: 9 december 2019</p>
      <p className="denhaag-article-meta__item">Gewijzigd: 28 april 2021</p>
    </div>
}`,...r.parameters?.docs?.source}}};const o=["Default","Horizontal","Responsive"];export{t as Default,n as Horizontal,r as Responsive,o as __namedExportsOrder,s as default};
