import{j as a}from"./jsx-runtime-BlAj40OV.js";import"./index-Cl9an-Ur.js";import"./index-CPC8a7jb.js";import"./index-D3GlytHe.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";const p=`# Link Group

## Introduction

Links are used as navigational elements. They may appear on their own, within a sentence or paragraph, or directly following the content.

## When to use

Links are used as navigational elements and can be used on their own or inline with text. They provide a lightweight option for navigation but like other interactive elements, too many links will clutter a page and make it difficult for users to identify their next steps. This is especially true for inline links, which should be used sparingly.

Use links when you want users to:

- Navigate to a different page within the website
- Navigate to an entirely different site
- Link to emails or phone numbers

## Alternatives and related components

- Use buttons for actions that don’t appear within or directly following a sentence

## Anatomy

The navigation link consists of:

1. Label: communicates what is being linked to
2. Icon (optional): this icon gives the label extra guidance

## (Interactive) states

None.

## Design properties

### Typography

- Label: TheSans/md/400

### Colors

- Label: text color Blue/3
- Icon: svg color Blue/3

On dark background

- Label: text color Ocher/3
- Links: white

Interactive states

- Hover: label text color Blue/4, icon svg color Blue/4
- Hover: underlined
- Focus: label text color Blue/4, icon svg color Blue/4, border color Ocher/5

### Structure

#### Medium

Desktop

- Icon: size 20px
- External link: padding-left 4px
- Icon-left: padding-right 8px
- Icon-right: padding-left 8px
- Group: link margin-bottom 8px

Mobile

- Icon: size 20px
- External link: padding-left 4px
- Icon-left: padding-right 8px
- Icon-right: padding-left 8px
- Group: link margin-bottom 16px

#### small

Desktop

- Icon: size 14px
- Icon-left: padding-right 8px
- Group: link margin-bottom 8px

Mobile

- Icon: size 14px
- Icon-left: padding-right 8px
- Group: link margin-bottom 8px

## Accessibility

[technical requirements]

## Link variants

### Inline link

Inline links are used in sentences or paragraphs of text. The inline link behaves the same as the standalone link but it is styled with an underline. This helps differentiate them from the text they are placed next to and makes it clear users can interact with them.

Inline links should not be used on their own and should not be paired with icons.

### Standalone link

Standalone links are used on their own directly following content. They should not be used within sentences or paragraphs. They only have an underline in the hover state.

The standalone link component is paired with an icon. Icons should always be the same color as the link text.

If there are several standalone links below each other, and thus form a group, the icon must always be in front of the link.

## Content guidelines

Navigation links need to be clear and predictable. Users should be able to anticipate what will happen when they select a link.

Navigation links should never use “click here” or “here” as link text.

### Links in a sentence

Navigation links in full sentences shouldn’t link the entire sentence, only the text that describes where users go when they select the link.

It’s better for internationalization to have only single terms or small parts of phrases linked. Linking a full phrase is problematic because the word order might change, which would break the link into two parts.

### Links outside of a sentence

Navigation links that aren’t in full sentences should use the {verb + noun} pattern and not be punctuated, with the exception of question marks.

## Best practices

Buttons versus navigation links
Navigation links are used primarily for navigation, and usually appear within or directly following a sentence.

Buttons are used primarily for actions, such as “Add”, “Close”, “Cancel”, or “Save”. Plain buttons, which look similar to links, are used for less important or less commonly used actions, such as “view settings”.

### Do's

Navigation links should:

- Be placed at the end of sentences where possible
- Clearly explain where the link will take you to
- Front-load the most relevant keyword
- Be understandable out of context
- Have the icon in front of the link when the standalone links form a group

### Don'ts

Navigation links should:

- Never use a button in place of a link
- Not use vague or generic labels for links
- Not open internal link in a new tab

## References

- https://www.interaction-design.org/literature/article/tips-for-better-hyperlink-ux
- https://blog.prototypr.io/a-guide-to-designing-perfect-links-in-ux-414558f35730
- https://uxplanet.org/dos-and-don-ts-of-web-design-8c9d6a5de7c6
- https://www.nngroup.com/articles/writing-links/
`,x={title:"CSS/Navigation/Link Group",tags:["autodocs"],parameters:{docs:{description:{component:p}},status:{type:"WORK IN PROGRESS"}}},n={render:()=>a.jsxs("div",{className:"denhaag-link-group",children:[a.jsx("h4",{className:"utrecht-heading-4 denhaag-link-group__caption",children:"Caption"}),a.jsxs("ul",{className:"utrecht-link-list utrecht-link-list--html-ul denhaag-link-group__list",children:[a.jsx("li",{className:"denhaag-link-group__list-item",children:a.jsxs("a",{href:"https://nl-design-system.github.io/denhaag/",className:"denhaag-link denhaag-link--with-icon denhaag-link--with-icon-start",children:[a.jsx("span",{className:"denhaag-link__icon",children:a.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"denhaag-icon",focusable:"false","aria-hidden":"true","shape-rendering":"auto",children:a.jsx("path",{d:"M12.293 5.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L16.586 13H5a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",fill:"currentColor"})})}),a.jsx("span",{className:"denhaag-link__label",children:"Paspoort en identiteitskaart"})]})}),a.jsx("li",{className:"denhaag-link-group__list-item",children:a.jsxs("a",{href:"https://nl-design-system.github.io/denhaag/",className:"denhaag-link denhaag-link--with-icon denhaag-link--with-icon-start",children:[a.jsx("span",{className:"denhaag-link__icon",children:a.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"denhaag-icon",focusable:"false","aria-hidden":"true","shape-rendering":"auto",children:a.jsx("path",{d:"M12.293 5.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L16.586 13H5a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",fill:"currentColor"})})}),a.jsx("span",{className:"denhaag-link__label",children:"Rijbewijs"})]})}),a.jsx("li",{className:"denhaag-link-group__list-item",children:a.jsxs("a",{href:"https://nl-design-system.github.io/denhaag/",className:"denhaag-link denhaag-link--with-icon denhaag-link--with-icon-start",children:[a.jsx("span",{className:"denhaag-link__icon",children:a.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"denhaag-icon",focusable:"false","aria-hidden":"true","shape-rendering":"auto",children:a.jsx("path",{d:"M12.293 5.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L16.586 13H5a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",fill:"currentColor"})})}),a.jsx("span",{className:"denhaag-link__label",children:"Inburgeren en naturaliseren"})]})}),a.jsx("li",{className:"denhaag-link-group__list-item",children:a.jsxs("a",{href:"https://nl-design-system.github.io/denhaag/",className:"denhaag-link denhaag-link--with-icon denhaag-link--with-icon-start",children:[a.jsx("span",{className:"denhaag-link__icon",children:a.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"denhaag-icon",focusable:"false","aria-hidden":"true","shape-rendering":"auto",children:a.jsx("path",{d:"M12.293 5.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L16.586 13H5a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",fill:"currentColor"})})}),a.jsx("span",{className:"denhaag-link__label",children:"Akten"})]})}),a.jsx("li",{className:"denhaag-link-group__list-item",children:a.jsxs("a",{href:"https://nl-design-system.github.io/denhaag/",className:"denhaag-link denhaag-link--with-icon denhaag-link--with-icon-start",children:[a.jsx("span",{className:"denhaag-link__icon",children:a.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"denhaag-icon",focusable:"false","aria-hidden":"true","shape-rendering":"auto",children:a.jsx("path",{d:"M12.293 5.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L16.586 13H5a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",fill:"currentColor"})})}),a.jsx("span",{className:"denhaag-link__label",children:"Verklaringen"})]})})]})]})},e={render:()=>a.jsxs("div",{className:"denhaag-link-group",children:[a.jsx("img",{className:"denhaag-link-group__image",src:"https://images.unsplash.com/photo-1569235186275-626cb53b83ce?w=140&h=140",alt:"placeholder"}),a.jsx("h4",{className:"utrecht-heading-4 denhaag-link-group__caption",children:"Caption"}),a.jsxs("ul",{className:"utrecht-link-list utrecht-link-list--html-ul denhaag-link-group__list",children:[a.jsx("li",{className:"denhaag-link-group__list-item",children:a.jsxs("a",{href:"https://nl-design-system.github.io/denhaag/",className:"denhaag-link denhaag-link--with-icon denhaag-link--with-icon-start",children:[a.jsx("span",{className:"denhaag-link__icon",children:a.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"denhaag-icon",focusable:"false","aria-hidden":"true","shape-rendering":"auto",children:a.jsx("path",{d:"M12.293 5.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L16.586 13H5a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",fill:"currentColor"})})}),a.jsx("span",{className:"denhaag-link__label",children:"Paspoort en identiteitskaart. Repudiandae rem voluptate ex. Autem est aut ratione beatae odit non dignissimos. Repudiandae rem voluptate ex. Autem est aut ratione beatae odit non dignissimos."})]})}),a.jsx("li",{className:"denhaag-link-group__list-item",children:a.jsxs("a",{href:"https://nl-design-system.github.io/denhaag/",className:"denhaag-link denhaag-link--with-icon denhaag-link--with-icon-start",children:[a.jsx("span",{className:"denhaag-link__icon",children:a.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"denhaag-icon",focusable:"false","aria-hidden":"true","shape-rendering":"auto",children:a.jsx("path",{d:"M12.293 5.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L16.586 13H5a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",fill:"currentColor"})})}),a.jsx("span",{className:"denhaag-link__label",children:"Rijbewijs"})]})}),a.jsx("li",{className:"denhaag-link-group__list-item",children:a.jsxs("a",{href:"https://nl-design-system.github.io/denhaag/",className:"denhaag-link denhaag-link--with-icon denhaag-link--with-icon-start",children:[a.jsx("span",{className:"denhaag-link__icon",children:a.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"denhaag-icon",focusable:"false","aria-hidden":"true","shape-rendering":"auto",children:a.jsx("path",{d:"M12.293 5.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L16.586 13H5a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",fill:"currentColor"})})}),a.jsx("span",{className:"denhaag-link__label",children:"Inburgeren en naturaliseren"})]})}),a.jsx("li",{className:"denhaag-link-group__list-item",children:a.jsxs("a",{href:"https://nl-design-system.github.io/denhaag/",className:"denhaag-link denhaag-link--with-icon denhaag-link--with-icon-start",children:[a.jsx("span",{className:"denhaag-link__icon",children:a.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"denhaag-icon",focusable:"false","aria-hidden":"true","shape-rendering":"auto",children:a.jsx("path",{d:"M12.293 5.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L16.586 13H5a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",fill:"currentColor"})})}),a.jsx("span",{className:"denhaag-link__label",children:"Akten"})]})}),a.jsx("li",{className:"denhaag-link-group__list-item",children:a.jsxs("a",{href:"https://nl-design-system.github.io/denhaag/",className:"denhaag-link denhaag-link--with-icon denhaag-link--with-icon-start",children:[a.jsx("span",{className:"denhaag-link__icon",children:a.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"denhaag-icon",focusable:"false","aria-hidden":"true","shape-rendering":"auto",children:a.jsx("path",{d:"M12.293 5.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L16.586 13H5a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",fill:"currentColor"})})}),a.jsx("span",{className:"denhaag-link__label",children:"Verklaringen"})]})})]})]})},i={render:()=>a.jsxs("div",{className:"denhaag-link-group denhaag-link-group--dark",style:{backgroundColor:"#2D2D2D",padding:"1rem"},children:[a.jsx("h4",{className:"utrecht-heading-4 denhaag-link-group__caption",children:"Caption"}),a.jsxs("ul",{className:"utrecht-link-list utrecht-link-list--html-ul denhaag-link-group__list",children:[a.jsx("li",{className:"denhaag-link-group__list-item",children:a.jsxs("a",{href:"https://nl-design-system.github.io/denhaag/",className:"denhaag-link denhaag-link--with-icon denhaag-link--with-icon-start",children:[a.jsx("span",{className:"denhaag-link__icon",children:a.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"denhaag-icon",focusable:"false","aria-hidden":"true","shape-rendering":"auto",children:a.jsx("path",{d:"M12.293 5.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L16.586 13H5a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",fill:"currentColor"})})}),a.jsx("span",{className:"denhaag-link__label",children:"Paspoort en identiteitskaart"})]})}),a.jsx("li",{className:"denhaag-link-group__list-item",children:a.jsxs("a",{href:"https://nl-design-system.github.io/denhaag/",className:"denhaag-link denhaag-link--with-icon denhaag-link--with-icon-start",children:[a.jsx("span",{className:"denhaag-link__icon",children:a.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"denhaag-icon",focusable:"false","aria-hidden":"true","shape-rendering":"auto",children:a.jsx("path",{d:"M12.293 5.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L16.586 13H5a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",fill:"currentColor"})})}),a.jsx("span",{className:"denhaag-link__label",children:"Rijbewijs"})]})}),a.jsx("li",{className:"denhaag-link-group__list-item",children:a.jsxs("a",{href:"https://nl-design-system.github.io/denhaag/",className:"denhaag-link denhaag-link--with-icon denhaag-link--with-icon-start",children:[a.jsx("span",{className:"denhaag-link__icon",children:a.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"denhaag-icon",focusable:"false","aria-hidden":"true","shape-rendering":"auto",children:a.jsx("path",{d:"M12.293 5.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L16.586 13H5a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",fill:"currentColor"})})}),a.jsx("span",{className:"denhaag-link__label",children:"Inburgeren en naturaliseren"})]})}),a.jsx("li",{className:"denhaag-link-group__list-item",children:a.jsxs("a",{href:"https://nl-design-system.github.io/denhaag/",className:"denhaag-link denhaag-link--with-icon denhaag-link--with-icon-start",children:[a.jsx("span",{className:"denhaag-link__icon",children:a.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"denhaag-icon",focusable:"false","aria-hidden":"true","shape-rendering":"auto",children:a.jsx("path",{d:"M12.293 5.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L16.586 13H5a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",fill:"currentColor"})})}),a.jsx("span",{className:"denhaag-link__label",children:"Akten"})]})}),a.jsx("li",{className:"denhaag-link-group__list-item",children:a.jsxs("a",{href:"https://nl-design-system.github.io/denhaag/",className:"denhaag-link denhaag-link--with-icon denhaag-link--with-icon-start",children:[a.jsx("span",{className:"denhaag-link__icon",children:a.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"denhaag-icon",focusable:"false","aria-hidden":"true","shape-rendering":"auto",children:a.jsx("path",{d:"M12.293 5.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L16.586 13H5a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",fill:"currentColor"})})}),a.jsx("span",{className:"denhaag-link__label",children:"Verklaringen"})]})})]})]})};var s,l,t;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => <div className="denhaag-link-group">
      <h4 className="utrecht-heading-4 denhaag-link-group__caption">Caption</h4>
      <ul className="utrecht-link-list utrecht-link-list--html-ul denhaag-link-group__list">
        <li className="denhaag-link-group__list-item">
          <a href="https://nl-design-system.github.io/denhaag/" className="denhaag-link denhaag-link--with-icon denhaag-link--with-icon-start">
            <span className="denhaag-link__icon">
              <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="denhaag-icon" focusable="false" aria-hidden="true" shape-rendering="auto">
                <path d="M12.293 5.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L16.586 13H5a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" fill="currentColor"></path>
              </svg>
            </span>
            <span className="denhaag-link__label">Paspoort en identiteitskaart</span>
          </a>
        </li>
        <li className="denhaag-link-group__list-item">
          <a href="https://nl-design-system.github.io/denhaag/" className="denhaag-link denhaag-link--with-icon denhaag-link--with-icon-start">
            <span className="denhaag-link__icon">
              <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="denhaag-icon" focusable="false" aria-hidden="true" shape-rendering="auto">
                <path d="M12.293 5.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L16.586 13H5a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" fill="currentColor"></path>
              </svg>
            </span>
            <span className="denhaag-link__label">Rijbewijs</span>
          </a>
        </li>
        <li className="denhaag-link-group__list-item">
          <a href="https://nl-design-system.github.io/denhaag/" className="denhaag-link denhaag-link--with-icon denhaag-link--with-icon-start">
            <span className="denhaag-link__icon">
              <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="denhaag-icon" focusable="false" aria-hidden="true" shape-rendering="auto">
                <path d="M12.293 5.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L16.586 13H5a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" fill="currentColor"></path>
              </svg>
            </span>
            <span className="denhaag-link__label">Inburgeren en naturaliseren</span>
          </a>
        </li>
        <li className="denhaag-link-group__list-item">
          <a href="https://nl-design-system.github.io/denhaag/" className="denhaag-link denhaag-link--with-icon denhaag-link--with-icon-start">
            <span className="denhaag-link__icon">
              <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="denhaag-icon" focusable="false" aria-hidden="true" shape-rendering="auto">
                <path d="M12.293 5.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L16.586 13H5a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" fill="currentColor"></path>
              </svg>
            </span>
            <span className="denhaag-link__label">Akten</span>
          </a>
        </li>
        <li className="denhaag-link-group__list-item">
          <a href="https://nl-design-system.github.io/denhaag/" className="denhaag-link denhaag-link--with-icon denhaag-link--with-icon-start">
            <span className="denhaag-link__icon">
              <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="denhaag-icon" focusable="false" aria-hidden="true" shape-rendering="auto">
                <path d="M12.293 5.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L16.586 13H5a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" fill="currentColor"></path>
              </svg>
            </span>
            <span className="denhaag-link__label">Verklaringen</span>
          </a>
        </li>
      </ul>
    </div>
}`,...(t=(l=n.parameters)==null?void 0:l.docs)==null?void 0:t.source}}};var h,r,o;e.parameters={...e.parameters,docs:{...(h=e.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div className="denhaag-link-group">
      <img className="denhaag-link-group__image" src="https://images.unsplash.com/photo-1569235186275-626cb53b83ce?w=140&h=140" alt="placeholder" />
      <h4 className="utrecht-heading-4 denhaag-link-group__caption">Caption</h4>
      <ul className="utrecht-link-list utrecht-link-list--html-ul denhaag-link-group__list">
        <li className="denhaag-link-group__list-item">
          <a href="https://nl-design-system.github.io/denhaag/" className="denhaag-link denhaag-link--with-icon denhaag-link--with-icon-start">
            <span className="denhaag-link__icon">
              <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="denhaag-icon" focusable="false" aria-hidden="true" shape-rendering="auto">
                <path d="M12.293 5.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L16.586 13H5a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" fill="currentColor"></path>
              </svg>
            </span>
            <span className="denhaag-link__label">
              Paspoort en identiteitskaart. Repudiandae rem voluptate ex. Autem est aut ratione beatae odit non
              dignissimos. Repudiandae rem voluptate ex. Autem est aut ratione beatae odit non dignissimos.
            </span>
          </a>
        </li>
        <li className="denhaag-link-group__list-item">
          <a href="https://nl-design-system.github.io/denhaag/" className="denhaag-link denhaag-link--with-icon denhaag-link--with-icon-start">
            <span className="denhaag-link__icon">
              <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="denhaag-icon" focusable="false" aria-hidden="true" shape-rendering="auto">
                <path d="M12.293 5.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L16.586 13H5a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" fill="currentColor"></path>
              </svg>
            </span>
            <span className="denhaag-link__label">Rijbewijs</span>
          </a>
        </li>
        <li className="denhaag-link-group__list-item">
          <a href="https://nl-design-system.github.io/denhaag/" className="denhaag-link denhaag-link--with-icon denhaag-link--with-icon-start">
            <span className="denhaag-link__icon">
              <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="denhaag-icon" focusable="false" aria-hidden="true" shape-rendering="auto">
                <path d="M12.293 5.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L16.586 13H5a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" fill="currentColor"></path>
              </svg>
            </span>
            <span className="denhaag-link__label">Inburgeren en naturaliseren</span>
          </a>
        </li>
        <li className="denhaag-link-group__list-item">
          <a href="https://nl-design-system.github.io/denhaag/" className="denhaag-link denhaag-link--with-icon denhaag-link--with-icon-start">
            <span className="denhaag-link__icon">
              <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="denhaag-icon" focusable="false" aria-hidden="true" shape-rendering="auto">
                <path d="M12.293 5.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L16.586 13H5a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" fill="currentColor"></path>
              </svg>
            </span>
            <span className="denhaag-link__label">Akten</span>
          </a>
        </li>
        <li className="denhaag-link-group__list-item">
          <a href="https://nl-design-system.github.io/denhaag/" className="denhaag-link denhaag-link--with-icon denhaag-link--with-icon-start">
            <span className="denhaag-link__icon">
              <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="denhaag-icon" focusable="false" aria-hidden="true" shape-rendering="auto">
                <path d="M12.293 5.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L16.586 13H5a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" fill="currentColor"></path>
              </svg>
            </span>
            <span className="denhaag-link__label">Verklaringen</span>
          </a>
        </li>
      </ul>
    </div>
}`,...(o=(r=e.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};var d,g,c;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div className="denhaag-link-group denhaag-link-group--dark" style={{
    backgroundColor: '#2D2D2D',
    padding: '1rem'
  }}>
      <h4 className="utrecht-heading-4 denhaag-link-group__caption">Caption</h4>
      <ul className="utrecht-link-list utrecht-link-list--html-ul denhaag-link-group__list">
        <li className="denhaag-link-group__list-item">
          <a href="https://nl-design-system.github.io/denhaag/" className="denhaag-link denhaag-link--with-icon denhaag-link--with-icon-start">
            <span className="denhaag-link__icon">
              <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="denhaag-icon" focusable="false" aria-hidden="true" shape-rendering="auto">
                <path d="M12.293 5.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L16.586 13H5a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" fill="currentColor"></path>
              </svg>
            </span>
            <span className="denhaag-link__label">Paspoort en identiteitskaart</span>
          </a>
        </li>
        <li className="denhaag-link-group__list-item">
          <a href="https://nl-design-system.github.io/denhaag/" className="denhaag-link denhaag-link--with-icon denhaag-link--with-icon-start">
            <span className="denhaag-link__icon">
              <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="denhaag-icon" focusable="false" aria-hidden="true" shape-rendering="auto">
                <path d="M12.293 5.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L16.586 13H5a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" fill="currentColor"></path>
              </svg>
            </span>
            <span className="denhaag-link__label">Rijbewijs</span>
          </a>
        </li>
        <li className="denhaag-link-group__list-item">
          <a href="https://nl-design-system.github.io/denhaag/" className="denhaag-link denhaag-link--with-icon denhaag-link--with-icon-start">
            <span className="denhaag-link__icon">
              <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="denhaag-icon" focusable="false" aria-hidden="true" shape-rendering="auto">
                <path d="M12.293 5.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L16.586 13H5a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" fill="currentColor"></path>
              </svg>
            </span>
            <span className="denhaag-link__label">Inburgeren en naturaliseren</span>
          </a>
        </li>
        <li className="denhaag-link-group__list-item">
          <a href="https://nl-design-system.github.io/denhaag/" className="denhaag-link denhaag-link--with-icon denhaag-link--with-icon-start">
            <span className="denhaag-link__icon">
              <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="denhaag-icon" focusable="false" aria-hidden="true" shape-rendering="auto">
                <path d="M12.293 5.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L16.586 13H5a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" fill="currentColor"></path>
              </svg>
            </span>
            <span className="denhaag-link__label">Akten</span>
          </a>
        </li>
        <li className="denhaag-link-group__list-item">
          <a href="https://nl-design-system.github.io/denhaag/" className="denhaag-link denhaag-link--with-icon denhaag-link--with-icon-start">
            <span className="denhaag-link__icon">
              <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="denhaag-icon" focusable="false" aria-hidden="true" shape-rendering="auto">
                <path d="M12.293 5.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L16.586 13H5a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" fill="currentColor"></path>
              </svg>
            </span>
            <span className="denhaag-link__label">Verklaringen</span>
          </a>
        </li>
      </ul>
    </div>
}`,...(c=(g=i.parameters)==null?void 0:g.docs)==null?void 0:c.source}}};const N=["Default","WithImage","DarkBackground"];export{i as DarkBackground,n as Default,e as WithImage,N as __namedExportsOrder,x as default};
