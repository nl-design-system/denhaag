import{j as e}from"./iframe-DX91hpwz.js";import"./index-C3zJwTei.js";import"./index-DoLZFCuV.js";var l=".denhaag-note{align-items:flex-start;color:var(--denhaag-note-color);display:flex;flex-direction:row;font-family:var(--denhaag-note-font-family,inherit);font-size:var(--denhaag-note-font-size,1.125em);font-weight:var(--denhaag-note-font-weight,normal);gap:var(--denhaag-note-icon-spacing);line-height:var(--denhaag-note-line-height,1.3);padding-block-end:var(--denhaag-note-padding-block,calc(var(--denhaag-note-icon-spacing)/2));padding-block-start:var(--denhaag-note-padding-block,calc(var(--denhaag-note-icon-spacing)/2))}.denhaag-note>svg,.denhaag-note__icon{aspect-ratio:1/1;color:var(--denhaag-note-icon-color,#4b4b4b);flex:0 0 auto;height:auto;width:var(--denhaag-note-icon-size,calc(var(--denhaag-note-icon-spacing)*3))}.denhaag-note--info{--denhaag-note-icon-color:var(--denhaag-note-icon-info-color,#fff)}.denhaag-note--warning{--denhaag-note-icon-color:var(--denhaag-note-icon-warning-color,#fff)}.denhaag-note .denhaag-link--with-icon-end{margin-inline-end:var(--denhaag-note-icon-end-margin-inline-end)}";if(typeof document<"u"){const d=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",n.nonce=window.NONCE,d.appendChild(n),n.styleSheet?n.styleSheet.cssText=l:n.appendChild(document.createTextNode(l))}const h=`# Note

![npm (scoped)](https://img.shields.io/npm/v/@gemeente-denhaag/button?logo=npm&style=flat-square)
![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/nl-design-system/denhaag/Build%20and%20deploy%20Storybook%20to%20Azure%20Web%20App/main?logo=github&style=flat-square)

## Introduction

The note shows a message that is important and should stand out for users to notice.

## When to use

Use notes when you need to inform or warn users about something important, such as exceptions or something not to forget to bring to an appointment. Notes can always be found in the body of a page.

## Alternatives and related components

• Use an alert to inform users of important changes, ongoing circumstances, updates or changes to system status and if you need to communicate prominently.

## Anatomy

The note consists of:

1. Icon: shows what kind of note it is.
2. Text: provides information about the note.

## (Interactive) states

None.

## Design properties

### Typography

- Text: TheSans/md/400

### Colors

- Icon: info svg color Blue/3, warning svg color Orange/3
- Text: text color Grey/4

### Structure

- Icon: height and width 24px, padding-right 8px
- Text: padding-top and padding-bottom 4px

## Accessibility

Do not use in CMS template ‘Area live attribute’

## Content guidelines

- Notes should describe briefly and succinctly what matters.
- Limit the text to one or two short sentences.

## Best practices

### Do's

Notes should:

- Explain in as few sentences as possible what it is about.
- Appear in the body of a page.
- Used carefully and sparingly for only important information.
- Use the default icons for info and warning statuses.

### Don'ts

Notes should:

- Not be shown in forms if, for example, there is an error.
- Not show the same information that is already in the body text.
- Not be used more than 2x on a page because otherwise it will get too much emphasis and the rest of the text will get less attention
- Not rely on colour alone to convey meaning or tone.
- Not be used for subsequent action. No button may be placed below it.

## Usage

- Info: Provide additional information to users.
- Warning: Warn users about important information.

### Aria Live

In case the note has been applied as reference in a form and will be updated by javascript, apply \`aria-live="polite"\` and \`aria-atomic=true"\` to the component.
This way screenreaders will re-read the element when the component has been updated.

## References

https://www.figma.com/file/JpoY3waVoQGlLQzQXTL9nn/Design-System---Gemeente-Den-Haag?node-id=8123%3A24065
`,u={title:"CSS/Surfaces/Note",tags:["autodocs"],parameters:{docs:{description:{component:h}},status:{type:"WORK IN PROGRESS"}}},o={render:()=>e.jsxs("div",{className:"denhaag-note",role:"note",children:[e.jsxs("svg",{"aria-label":"Note:",role:"img",className:"denhaag-note__icon",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5Z",fill:"#F1F1F1",stroke:"#4B4B4B","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e.jsx("path",{fill:"#4B4B4B",stroke:"#4B4B4B","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",d:"M12 16.5V12.5"}),e.jsx("path",{fill:"#4B4B4B",stroke:"#4B4B4B","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",d:"M12 8.5H12.01"})]}),e.jsx("div",{children:"Note"})]})},t={render:()=>e.jsxs("div",{className:"denhaag-note denhaag-note--info",role:"note",children:[e.jsxs("svg",{"aria-label":"Info:",role:"img",className:"denhaag-note__icon",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5Z",fill:"#1261A3",stroke:"#1261A3","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e.jsx("path",{fill:"#fff",stroke:"#fff","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",d:"M12 16.5V12.5"}),e.jsx("path",{fill:"#fff",stroke:"#fff","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",d:"M12 8.5H12.01"})]}),e.jsx("div",{children:"Note info"})]})},a={render:()=>e.jsxs("div",{className:"denhaag-note denhaag-note--warning",role:"note",children:[e.jsxs("svg",{"aria-label":"Warning:",role:"img",className:"denhaag-note__icon",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{fill:"#F18700",stroke:"#F18700","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",d:"M10.2898 4.35923L1.81978 18.4992C1.64514 18.8017 1.55274 19.1445 1.55177 19.4937C1.55079 19.843 1.64127 20.1864 1.8142 20.4898C1.98714 20.7931 2.2365 21.046 2.53748 21.2231C2.83847 21.4002 3.18058 21.4954 3.52978 21.4992H20.4698C20.819 21.4954 21.1611 21.4002 21.4621 21.2231C21.7631 21.046 22.0124 20.7931 22.1854 20.4898C22.3583 20.1864 22.4488 19.843 22.4478 19.4937C22.4468 19.1445 22.3544 18.8017 22.1798 18.4992L13.7098 4.35923C13.5315 4.06533 13.2805 3.82235 12.981 3.65371C12.6814 3.48508 12.3435 3.39648 11.9998 3.39648C11.656 3.39648 11.3181 3.48508 11.0186 3.65371C10.7191 3.82235 10.468 4.06533 10.2898 4.35923Z"}),e.jsx("path",{fill:"#fff",stroke:"#fff","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",d:"M12 17.5H12.01"}),e.jsx("path",{fill:"#fff",stroke:"#fff","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",d:"M12 9.5V13.5"})]}),e.jsx("div",{children:"Note warning"})]})},i={render:()=>e.jsxs("div",{className:"denhaag-note",role:"note","aria-atomic":"true","aria-live":"polite",children:[e.jsxs("svg",{"aria-label":"Note:",role:"img",className:"denhaag-note__icon",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5Z",fill:"#F1F1F1",stroke:"#4B4B4B","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e.jsx("path",{fill:"#4B4B4B",stroke:"#4B4B4B","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",d:"M12 16.5V12.5"}),e.jsx("path",{fill:"#4B4B4B",stroke:"#4B4B4B","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",d:"M12 8.5H12.01"})]}),e.jsx("div",{children:"Note"})]})},s={render:()=>e.jsxs("div",{className:"denhaag-note",role:"note",children:[e.jsxs("svg",{"aria-label":"Note:",role:"img",className:"denhaag-note__icon",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5Z",fill:"#F1F1F1",stroke:"#4B4B4B","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e.jsx("path",{fill:"#4B4B4B",stroke:"#4B4B4B","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",d:"M12 16.5V12.5"}),e.jsx("path",{fill:"#4B4B4B",stroke:"#4B4B4B","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",d:"M12 8.5H12.01"})]}),e.jsxs("div",{children:["Etiam sed lectus ultricies tellus iaculis blandit ac eget lacus. Cras et aliquet ipsum, ac dignissim justo. Curabitur sodales metus non efficitur interdum. Morbi condimentum placerat fermentum. Vivamus eget risus in nisl scelerisque lacinia."," ",e.jsx("a",{href:"https://denhaag.nl",className:"denhaag-link",children:e.jsx("span",{children:"Den Haag website"})})]})]})},r={render:()=>e.jsxs("div",{className:"denhaag-note",role:"note","aria-atomic":"true","aria-live":"polite",children:[e.jsxs("svg",{"aria-label":"Note:",role:"img",className:"denhaag-note__icon",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5Z",fill:"#F1F1F1",stroke:"#4B4B4B","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e.jsx("path",{fill:"#4B4B4B",stroke:"#4B4B4B","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",d:"M12 16.5V12.5"}),e.jsx("path",{fill:"#4B4B4B",stroke:"#4B4B4B","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",d:"M12 8.5H12.01"})]}),e.jsxs("div",{children:["Note with an link with icon"," ",e.jsxs("a",{href:"#example-link",tabIndex:0,className:"denhaag-link denhaag-link--with-icon denhaag-link--with-icon-end",children:[e.jsx("span",{className:"denhaag-link__icon",children:e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"denhaag-icon",focusable:"false","aria-hidden":"true","shape-rendering":"auto",children:e.jsx("path",{d:"M12.293 5.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L16.586 13H5a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",fill:"currentColor"})})}),e.jsx("span",{children:"Link with icon after"})]})]})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className="denhaag-note" role="note">
      <svg aria-label="Note:" role="img" className="denhaag-note__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5Z" fill="#F1F1F1" stroke="#4B4B4B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path fill="#4B4B4B" stroke="#4B4B4B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M12 16.5V12.5" />
        <path fill="#4B4B4B" stroke="#4B4B4B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M12 8.5H12.01" />
      </svg>
      <div>Note</div>
    </div>
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div className="denhaag-note denhaag-note--info" role="note">
      <svg aria-label="Info:" role="img" className="denhaag-note__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5Z" fill="#1261A3" stroke="#1261A3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path fill="#fff" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M12 16.5V12.5" />
        <path fill="#fff" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M12 8.5H12.01" />
      </svg>
      <div>Note info</div>
    </div>
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div className="denhaag-note denhaag-note--warning" role="note">
      <svg aria-label="Warning:" role="img" className="denhaag-note__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="#F18700" stroke="#F18700" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M10.2898 4.35923L1.81978 18.4992C1.64514 18.8017 1.55274 19.1445 1.55177 19.4937C1.55079 19.843 1.64127 20.1864 1.8142 20.4898C1.98714 20.7931 2.2365 21.046 2.53748 21.2231C2.83847 21.4002 3.18058 21.4954 3.52978 21.4992H20.4698C20.819 21.4954 21.1611 21.4002 21.4621 21.2231C21.7631 21.046 22.0124 20.7931 22.1854 20.4898C22.3583 20.1864 22.4488 19.843 22.4478 19.4937C22.4468 19.1445 22.3544 18.8017 22.1798 18.4992L13.7098 4.35923C13.5315 4.06533 13.2805 3.82235 12.981 3.65371C12.6814 3.48508 12.3435 3.39648 11.9998 3.39648C11.656 3.39648 11.3181 3.48508 11.0186 3.65371C10.7191 3.82235 10.468 4.06533 10.2898 4.35923Z" />
        <path fill="#fff" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M12 17.5H12.01" />
        <path fill="#fff" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M12 9.5V13.5" />
      </svg>
      <div>Note warning</div>
    </div>
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div className="denhaag-note" role="note" aria-atomic="true" aria-live="polite">
      <svg aria-label="Note:" role="img" className="denhaag-note__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5Z" fill="#F1F1F1" stroke="#4B4B4B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path fill="#4B4B4B" stroke="#4B4B4B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M12 16.5V12.5" />
        <path fill="#4B4B4B" stroke="#4B4B4B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M12 8.5H12.01" />
      </svg>
      <div>Note</div>
    </div>
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div className="denhaag-note" role="note">
      <svg aria-label="Note:" role="img" className="denhaag-note__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5Z" fill="#F1F1F1" stroke="#4B4B4B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path fill="#4B4B4B" stroke="#4B4B4B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M12 16.5V12.5" />
        <path fill="#4B4B4B" stroke="#4B4B4B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M12 8.5H12.01" />
      </svg>
      <div>
        Etiam sed lectus ultricies tellus iaculis blandit ac eget lacus. Cras et aliquet ipsum, ac dignissim justo.
        Curabitur sodales metus non efficitur interdum. Morbi condimentum placerat fermentum. Vivamus eget risus in nisl
        scelerisque lacinia.{' '}
        <a href="https://denhaag.nl" className="denhaag-link">
          <span>Den Haag website</span>
        </a>
      </div>
    </div>
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <div className="denhaag-note" role="note" aria-atomic="true" aria-live="polite">
      <svg aria-label="Note:" role="img" className="denhaag-note__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5Z" fill="#F1F1F1" stroke="#4B4B4B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path fill="#4B4B4B" stroke="#4B4B4B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M12 16.5V12.5" />
        <path fill="#4B4B4B" stroke="#4B4B4B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M12 8.5H12.01" />
      </svg>
      <div>
        Note with an link with icon{' '}
        <a href="#example-link" tabIndex={0} className="denhaag-link denhaag-link--with-icon denhaag-link--with-icon-end">
          <span className="denhaag-link__icon">
            <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="denhaag-icon" focusable="false" aria-hidden="true" shape-rendering="auto">
              <path d="M12.293 5.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L16.586 13H5a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" fill="currentColor"></path>
            </svg>
          </span>
          <span>Link with icon after</span>
        </a>
      </div>
    </div>
}`,...r.parameters?.docs?.source}}};const f=["Default","Info","Warning","AriaLive","Long","IconLink"];export{i as AriaLive,o as Default,r as IconLink,t as Info,s as Long,a as Warning,f as __namedExportsOrder,u as default};
