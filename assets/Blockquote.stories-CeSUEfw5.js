import{j as e}from"./iframe-DY871a0d.js";var o=".denhaag-blockquote{border-inline-start:var(--denhaag-blockquote-border-width) var(--denhaag-blockquote-border-style) var(--denhaag-blockquote-border-color);margin-inline-end:0;margin-inline-start:0;padding-block-end:var(--denhaag-blockquote-padding-block-end);padding-block-start:var(--denhaag-blockquote-padding-block-start);padding-inline-end:var(--denhaag-blockquote-padding-inline-end);padding-inline-start:var(--denhaag-blockquote-padding-inline-start)}.denhaag-blockquote__content{margin-inline-end:var(--denhaag-blockquote-margin-inline-end);margin-inline-start:var(--denhaag-blockquote-margin-inline-start)}.denhaag-blockquote__content,.denhaag-blockquote__content p{margin-block-end:var(--denhaag-blockquote-margin-block-end);margin-block-start:var(--denhaag-blockquote-margin-block-start)}.denhaag-blockquote__content p{color:var(--denhaag-blockquote-paragraph-color);font-family:var(--denhaag-blockquote-paragraph-font-family);font-size:var(--denhaag-blockquote-paragraph-font-size,1.25rem);font-weight:var(--denhaag-blockquote-paragraph-font-weight);line-height:var(--denhaag-blockquote-paragraph-line-height)}.denhaag-blockquote__attribution{color:var(--denhaag-blockquote-attribution-color,#4b4b4b);font-family:var(--denhaag-blockquote-attribution-font-family);font-size:var(--denhaag-blockquote-attribution-font-size,.75rem);font-weight:var(--denhaag-blockquote-attribution-font-weight);line-height:var(--denhaag-blockquote-attribution-line-height);margin-block-start:var(--denhaag-blockquote-attribution-margin-block-start)}";if(typeof document<"u"){const i=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css",t.nonce=window.NONCE,i.appendChild(t),t.styleSheet?t.styleSheet.cssText=o:t.appendChild(document.createTextNode(o))}const r=`# Blockquote

A blockquote shows a highlight or quote in a page that should stand out.

## When to use

Use a blockquote when there is a quote in the text you want to highlight, to tease the next alinea or highlight an important line.\u2028Mostly used in an journalistic way, to decorate the page.

## Alternatives and related components

- Use a note component when it’s important to highlight a warning or information.

## Anatomy

The blockquote consists of:

1. Marker: to create an indent in te page
2. Text: to display the quote

## Design properties

**Typography**

- Text: TheMix/lg/700

**Colors**

- Text: text color Green/4
- Marker: text color Green/1

**Structure**

- Text: padding 16px

## Accessibility

Do not use this component to indent text. Screen readers use the <blockquote> element to:
Provide semantic understanding of page content by announcing blockquote as quote
Define a sectioning root in HTML5, which means that any <h1> - <h6> element doesn't become part of the document’s outline
To make the blockquote content accessible, use the <cite> attribute with a valid URL

## Content guidelines

None.

## Best practices

### Do's

Blockquotes should:

- Stand out from the text, so make sure that there is more basic text and only one or two quotes on a short page.

### Don'ts

Blockquotes should:

- Not be used in a group.
- Not be used for displaying a decorative treatment only.

## References

- Current blockquote: https://www.denhaag.nl/nl/in-de-stad/nieuws/arjen-kapteijns-nieuwe-wethouder-sociale-zaken-en-werk.htm
- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote
`,l={title:"CSS/Data Display/Blockquote",tags:["autodocs"],parameters:{docs:{description:{component:r}},status:{type:"WORK IN PROGRESS"}}},n={render:()=>e.jsx("figure",{className:"denhaag-blockquote",children:e.jsx("blockquote",{className:"denhaag-blockquote__content",cite:"https://www.denhaag.nl/nl.htm",children:e.jsx("p",{children:"Molestiae earum esse ut hic ea cupiditate tenetur quis. Voluptates atque incidunt aliquam enim. Illum sapiente dolorem recusandae sit distinctio."})})})},a={render:()=>e.jsxs("figure",{className:"denhaag-blockquote",children:[e.jsx("blockquote",{className:"denhaag-blockquote__content",cite:"https://www.denhaag.nl/nl.htm",children:e.jsx("p",{children:"Molestiae earum esse ut hic ea cupiditate tenetur quis. Voluptates atque incidunt aliquam enim. Illum sapiente dolorem recusandae sit distinctio."})}),e.jsx("figcaption",{className:"denhaag-blockquote__attribution",children:"First Name Surname"})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <figure className="denhaag-blockquote">
      <blockquote className="denhaag-blockquote__content" cite="https://www.denhaag.nl/nl.htm">
        <p>
          Molestiae earum esse ut hic ea cupiditate tenetur quis. Voluptates atque incidunt aliquam enim. Illum sapiente
          dolorem recusandae sit distinctio.
        </p>
      </blockquote>
    </figure>
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <figure className="denhaag-blockquote">
      <blockquote className="denhaag-blockquote__content" cite="https://www.denhaag.nl/nl.htm">
        <p>
          Molestiae earum esse ut hic ea cupiditate tenetur quis. Voluptates atque incidunt aliquam enim. Illum sapiente
          dolorem recusandae sit distinctio.
        </p>
      </blockquote>
      <figcaption className="denhaag-blockquote__attribution">First Name Surname</figcaption>
    </figure>
}`,...a.parameters?.docs?.source}}};const c=["Default","WithAttribution"];export{n as Default,a as WithAttribution,c as __namedExportsOrder,l as default};
