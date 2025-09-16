import{j as n}from"./iframe-BJw9co4B.js";import"./index-CiYCk817.js";import"./index-2tpVkgZi.js";var t='.denhaag-anchor-navigation,.denhaag-anchor-navigation+.denhaag-button{display:none}@media (width >= 768px){.denhaag-anchor-navigation,.denhaag-anchor-navigation+.denhaag-button{display:flex}}.denhaag-anchor-navigation__list{list-style:var(--denhaag-anchor-navigation-list-list-style);margin-block-end:0;margin-block-start:0;padding-inline-start:0}.denhaag-anchor-navigation+.denhaag-button{margin-block-start:var(--denhaag-anchor-navigation-button-margin-block-start,1em)}.denhaag-anchor-navigation__link{color:var(--denhaag-anchor-navigation-link-color);display:block;font-family:var(--denhaag-anchor-navigation-link-font-family);font-size:var(--denhaag-anchor-navigation-link-font-size,inherit);font-weight:var(--denhaag-anchor-navigation-link-font-weight);line-height:var(--denhaag-anchor-navigation-link-line-height);outline:none;padding-block-end:var(--denhaag-anchor-navigation-link-padding-block);padding-block-start:var(--denhaag-anchor-navigation-link-padding-block);padding-inline-end:var(--denhaag-anchor-navigation-link-padding-inline-end);padding-inline-start:var(--denhaag-anchor-navigation-link-padding-inline-start);position:relative;text-decoration:var(--denhaag-anchor-navigation-link-text-decoration)}.denhaag-anchor-navigation__link--active,.denhaag-anchor-navigation__link:active{--denhaag-anchor-navigation-link-color:var(--denhaag-anchor-navigation-link-active-color);--denhaag-anchor-navigation-link-background-color:var(--denhaag-anchor-navigation-link-active-color);--denhaag-anchor-navigation-link-font-weight:var(--denhaag-anchor-navigation-link-active-font-weight)}.denhaag-anchor-navigation__link--hover,.denhaag-anchor-navigation__link:hover{--denhaag-anchor-navigation-link-color:var(--denhaag-anchor-navigation-link-hover-color);--denhaag-anchor-navigation-link-background-color:var(--denhaag-anchor-navigation-link-hover-color)}.denhaag-anchor-navigation__link:target{--denhaag-anchor-navigation-link-color:var(--denhaag-anchor-navigation-link-target-color)}.denhaag-anchor-navigation__link:active,.denhaag-anchor-navigation__link:target{font-weight:var(--denhaag-anchor-navigation-link-font-weight)}.denhaag-anchor-navigation__link--focus,.denhaag-anchor-navigation__link:focus-visible{--denhaag-anchor-navigation-link-color:var(--denhaag-anchor-navigation-link-focus-color);--denhaag-anchor-navigation-link-background-color:var(--denhaag-anchor-navigation-link-focus-color);outline:var(--denhaag-anchor-navigation-link-outline)}.denhaag-anchor-navigation__link:focus:not(:focus-visible){outline:none}.denhaag-anchor-navigation__link:before{background-color:var(--denhaag-anchor-navigation-link-background-color);content:"";height:100%;left:0;position:absolute;top:50%;transform:translateY(-50%);width:var(--denhaag-anchor-navigation-link-width)}';if(typeof document<"u"){const r=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css",a.nonce=window.NONCE,r.appendChild(a),a.styleSheet?a.styleSheet.cssText=t:a.appendChild(document.createTextNode(t))}const s=`# Anchor navigation

The anchor navigation shows which subjects there are on the page and how far you are.

## When to use

Anchor navigations need to be used on longer pages with multiple sub-headings. The navigation gives the user a good overview of the content of a page.

## Alternatives and related components

Use form navigation to show the user’s progress through a set of steps in a form

## Anatomy

The anchor navigation consists of:

1. Line: this line shows the state of a chapter
2. Label: describes the information of a chapter
3. Progress line (on mobile): this line shows how far you are on a page
4. Container

## (Interactive) states

The anchor navigation the states inactive, active, hover and focus.

## Design properties

### Typography

- Label inactive: TheSans/md/400
- Label active: TheSans/md/700

### Color

- Label inactive: text color Grey/4
- Label active: text color Blue/3
- Line inactive: fill color Grey/2
- Line active: fill color Blue/3

#### Specific for mobile

- Progress line: fill color Blue/3
- Shadow: fill color 10% of Grey/4, border-top color Grey/3

### Interactive states

- Hover inactive: label color Blue/3
- Focus: border color Ocher/5

### Structure

- Label: padding-top and padding bottom 8px, padding-right 16px
- Line: width 2px, padding-right 16px
- Container: min-height 40px

#### Mobile

- Label: padding-top and padding bottom 16px
- Progress line: width 2px
- Shadow: height 8px, border-top 1px
- Container: height 56px

## Accessibility

[technical requirements]

## Content guidelines

### Labels

Labels should:

- Contain one to three words.
- Have the same name as the sub-heading on the page
- Be clear and predictable. Users need to know what to find under each sub-heading.
- Make sure the sub-headings are recognizable as key elements of the page.
- Make sure the words you use in the anchor links are exactly the same as the words in the sub-headings they refer to.
- Avoid unnecessary words and articles such as “the”, “a” or “an”.

## Best practices

### Dos

Anchor navigations should:

- Allow the user to return to a previous step to review the process
- Create a clear path to completion
- Be clear as possible in order not to confuse users
- Bring the user to the specific topic he is clicking on
- Show the subheadings preceding the current subheading as active
- Continue on the next line for very long labels
- Be sticky
- Hide the menu overlay on mobile if a user clicked on a subject
- Show that the lines fill up as soon as a user scrolls

### Don’ts

Anchor navigations should:

- Not have more than 3 lines on desktop
- Not only the current subheading as active where you are, but also all previous subheadings

## References

[https://www.agconsult.com/en/usability-blog/anchor-links-dos-and-donts/](https://www.agconsult.com/en/usability-blog/anchor-links-dos-and-donts/)
[https://www.nngroup.com/articles/in-page-links/](https://www.nngroup.com/articles/in-page-links/)
`,g={tags:["autodocs"],parameters:{docs:{description:{component:s}},status:{type:"WORK IN PROGRESS"}}},e={render:()=>n.jsxs(n.Fragment,{children:[n.jsx("nav",{className:"denhaag-anchor-navigation","aria-label":"Op deze pagina",children:n.jsxs("ol",{className:"denhaag-anchor-navigation__list",children:[n.jsx("li",{children:n.jsx("a",{href:"#in-het-kort",className:"denhaag-anchor-navigation__link",children:"In het kort"})}),n.jsx("li",{children:n.jsx("a",{href:"#voorwaarden",className:"denhaag-anchor-navigation__link",children:"Voorwaarden"})}),n.jsx("li",{children:n.jsx("a",{href:"#proces",className:"denhaag-anchor-navigation__link",children:"Proces"})}),n.jsx("li",{children:n.jsx("a",{href:"#kosten",className:"denhaag-anchor-navigation__link",children:"Kosten"})}),n.jsx("li",{children:n.jsx("a",{href:"#aanvragen",className:"denhaag-anchor-navigation__link",children:"Aanvragen"})}),n.jsx("li",{children:n.jsx("a",{href:"#veelgestelde-vragen",className:"denhaag-anchor-navigation__link",children:"Veelgestelde vragen"})})]})}),n.jsxs("button",{className:"denhaag-button denhaag-button--start-icon",children:[n.jsx("span",{className:"denhaag-button__icon",children:n.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",className:"denhaag-icon",focusable:"false","aria-hidden":"true",children:n.jsx("path",{d:"M12.293 5.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L16.586 13H5a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"})})}),"Direct aanvragen"]})]})},i={render:()=>n.jsxs(n.Fragment,{children:[n.jsx("nav",{className:"denhaag-anchor-navigation","aria-label":"Op deze pagina",children:n.jsxs("ol",{className:"denhaag-anchor-navigation__list",children:[n.jsx("li",{children:n.jsx("a",{href:"#in-het-kort",className:"denhaag-anchor-navigation__link",children:"In het kort"})}),n.jsx("li",{children:n.jsx("a",{href:"#voorwaarden",className:"denhaag-anchor-navigation__link denhaag-anchor-navigation__link--hover",children:"Voorwaarden"})}),n.jsx("li",{children:n.jsx("a",{href:"#proces",className:"denhaag-anchor-navigation__link",children:"Proces"})}),n.jsx("li",{children:n.jsx("a",{href:"#kosten",className:"denhaag-anchor-navigation__link",children:"Kosten"})}),n.jsx("li",{children:n.jsx("a",{href:"#aanvragen",className:"denhaag-anchor-navigation__link",children:"Aanvragen"})}),n.jsx("li",{children:n.jsx("a",{href:"#veelgestelde-vragen",className:"denhaag-anchor-navigation__link",children:"Veelgestelde vragen"})})]})}),n.jsxs("button",{className:"denhaag-button denhaag-button--start-icon",children:[n.jsx("span",{className:"denhaag-button__icon",children:n.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",className:"denhaag-icon",focusable:"false","aria-hidden":"true",children:n.jsx("path",{d:"M12.293 5.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L16.586 13H5a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"})})}),"Direct aanvragen"]})]})},o={render:()=>n.jsxs(n.Fragment,{children:[n.jsx("nav",{className:"denhaag-anchor-navigation","aria-label":"Op deze pagina",children:n.jsxs("ol",{className:"denhaag-anchor-navigation__list",children:[n.jsx("li",{children:n.jsx("a",{href:"#in-het-kort",className:"denhaag-anchor-navigation__link",children:"In het kort"})}),n.jsx("li",{children:n.jsx("a",{href:"#voorwaarden",className:"denhaag-anchor-navigation__link denhaag-anchor-navigation__link--focus",children:"Voorwaarden"})}),n.jsx("li",{children:n.jsx("a",{href:"#proces",className:"denhaag-anchor-navigation__link",children:"Proces"})}),n.jsx("li",{children:n.jsx("a",{href:"#kosten",className:"denhaag-anchor-navigation__link",children:"Kosten"})}),n.jsx("li",{children:n.jsx("a",{href:"#aanvragen",className:"denhaag-anchor-navigation__link",children:"Aanvragen"})}),n.jsx("li",{children:n.jsx("a",{href:"#veelgestelde-vragen",className:"denhaag-anchor-navigation__link",children:"Veelgestelde vragen"})})]})}),n.jsxs("button",{className:"denhaag-button denhaag-button--start-icon",children:[n.jsx("span",{className:"denhaag-button__icon",children:n.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",className:"denhaag-icon",focusable:"false","aria-hidden":"true",children:n.jsx("path",{d:"M12.293 5.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L16.586 13H5a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"})})}),"Direct aanvragen"]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <nav className="denhaag-anchor-navigation" aria-label="Op deze pagina">
        <ol className="denhaag-anchor-navigation__list">
          <li>
            <a href="#in-het-kort" className="denhaag-anchor-navigation__link">
              In het kort
            </a>
          </li>
          <li>
            <a href="#voorwaarden" className="denhaag-anchor-navigation__link">
              Voorwaarden
            </a>
          </li>
          <li>
            <a href="#proces" className="denhaag-anchor-navigation__link">
              Proces
            </a>
          </li>
          <li>
            <a href="#kosten" className="denhaag-anchor-navigation__link">
              Kosten
            </a>
          </li>
          <li>
            <a href="#aanvragen" className="denhaag-anchor-navigation__link">
              Aanvragen
            </a>
          </li>
          <li>
            <a href="#veelgestelde-vragen" className="denhaag-anchor-navigation__link">
              Veelgestelde vragen
            </a>
          </li>
        </ol>
      </nav>
      <button className="denhaag-button denhaag-button--start-icon">
        <span className="denhaag-button__icon">
          <svg width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="denhaag-icon" focusable="false" aria-hidden="true">
            <path d="M12.293 5.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L16.586 13H5a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path>
          </svg>
        </span>
        Direct aanvragen
      </button>
    </>
}`,...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <nav className="denhaag-anchor-navigation" aria-label="Op deze pagina">
        <ol className="denhaag-anchor-navigation__list">
          <li>
            <a href="#in-het-kort" className="denhaag-anchor-navigation__link">
              In het kort
            </a>
          </li>
          <li>
            <a href="#voorwaarden" className="denhaag-anchor-navigation__link denhaag-anchor-navigation__link--hover">
              Voorwaarden
            </a>
          </li>
          <li>
            <a href="#proces" className="denhaag-anchor-navigation__link">
              Proces
            </a>
          </li>
          <li>
            <a href="#kosten" className="denhaag-anchor-navigation__link">
              Kosten
            </a>
          </li>
          <li>
            <a href="#aanvragen" className="denhaag-anchor-navigation__link">
              Aanvragen
            </a>
          </li>
          <li>
            <a href="#veelgestelde-vragen" className="denhaag-anchor-navigation__link">
              Veelgestelde vragen
            </a>
          </li>
        </ol>
      </nav>
      <button className="denhaag-button denhaag-button--start-icon">
        <span className="denhaag-button__icon">
          <svg width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="denhaag-icon" focusable="false" aria-hidden="true">
            <path d="M12.293 5.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L16.586 13H5a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path>
          </svg>
        </span>
        Direct aanvragen
      </button>
    </>
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <nav className="denhaag-anchor-navigation" aria-label="Op deze pagina">
        <ol className="denhaag-anchor-navigation__list">
          <li>
            <a href="#in-het-kort" className="denhaag-anchor-navigation__link">
              In het kort
            </a>
          </li>
          <li>
            <a href="#voorwaarden" className="denhaag-anchor-navigation__link denhaag-anchor-navigation__link--focus">
              Voorwaarden
            </a>
          </li>
          <li>
            <a href="#proces" className="denhaag-anchor-navigation__link">
              Proces
            </a>
          </li>
          <li>
            <a href="#kosten" className="denhaag-anchor-navigation__link">
              Kosten
            </a>
          </li>
          <li>
            <a href="#aanvragen" className="denhaag-anchor-navigation__link">
              Aanvragen
            </a>
          </li>
          <li>
            <a href="#veelgestelde-vragen" className="denhaag-anchor-navigation__link">
              Veelgestelde vragen
            </a>
          </li>
        </ol>
      </nav>
      <button className="denhaag-button denhaag-button--start-icon">
        <span className="denhaag-button__icon">
          <svg width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="denhaag-icon" focusable="false" aria-hidden="true">
            <path d="M12.293 5.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L16.586 13H5a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path>
          </svg>
        </span>
        Direct aanvragen
      </button>
    </>
}`,...o.parameters?.docs?.source}}};const d=["Default","Hover","Focus"];export{e as Default,o as Focus,i as Hover,d as __namedExportsOrder,g as default};
