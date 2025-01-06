import{j as e}from"./jsx-runtime-D_zvdyIk.js";var s=`.denhaag-cta-link{align-items:center;border-left:1px solid var(--denhaag-cta-link-border-color,currentColor);border-right:1px solid var(--denhaag-cta-link-border-color,currentColor);box-shadow:0 1px 0 var(--denhaag-cta-link-border-color,currentColor),inset 0 1px 0 var(--denhaag-cta-link-border-color,currentColor);color:var(--denhaag-cta-link-color);display:flex;flex-direction:row;font-family:var(--denhaag-cta-link-font-family,inherit);font-weight:var(--denhaag-cta-link-font-weight,inherit);gap:var(--denhaag-cta-link-gap);hyphens:auto;padding-block-end:var(--denhaag-cta-link-padding-block,var(--denhaag-cta-link-gap));padding-block-start:var(--denhaag-cta-link-padding-block,var(--denhaag-cta-link-gap));padding-inline-end:var(--denhaag-cta-link-padding-inline,calc(var(--denhaag-cta-link-gap)/1.5));padding-inline-start:var(--denhaag-cta-link-padding-inline,calc(var(--denhaag-cta-link-gap)/1.5));text-decoration:none}.denhaag-cta-link--hover,.denhaag-cta-link:hover{--denhaag-cta-link-highlight-color:var(--denhaag-cta-link-hover-highlight-color,var(--denhaag-cta-link-color))}.denhaag-cta-link--focus,.denhaag-cta-link:focus-visible{--denhaag-cta-link-highlight-color:var(
    --denhaag-cta-link-focus-highlight-color,var(--denhaag-cta-link-hover-highlight-color)
  );outline:var(--denhaag-cta-link-focus-outline)}.denhaag-cta-link__dot{align-items:center;aspect-ratio:1/1;background-color:var(--denhaag-cta-link-highlight-color,var(--denhaag-cta-link-color));border-radius:var(--denhaag-cta-link-width,50%);color:var(--denhaag-cta-link-dot-color);display:inline-flex;flex:0 0 auto;height:auto;justify-content:center;width:var(--denhaag-cta-link-width,calc(var(--denhaag-cta-link-gap)*4))}.denhaag-cta-link__dot .denhaag-icon,.denhaag-cta-link__dot>svg{font-size:var(--denhaag-cta-icon-size,var(--denhaag-cta-link-gap))}.denhaag-cta-link__excerpt{font-size:var(--denhaag-typography-scale-lg-font-size)}.denhaag-cta-link>span,.denhaag-cta-link__highlight{font-weight:var(--denhaag-cta-link-highlight-font-weight,inherit)}`;if(typeof document<"u"){const y=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",n.nonce=window.NONCE,y.appendChild(n),n.styleSheet?n.styleSheet.cssText=s:n.appendChild(document.createTextNode(s))}const B=`# Call To Action Link

A CTA icon is a standalone link that links to another page within the website or an external website related to the current page or to a video.

## When to use

CTA links are used as navigational elements and are used on their own. They provide a middleweight option for navigation and stand out more than the normal links so use it sparingly. Like other interactive elements, too many CTA icons will clutter a page and make it difficult for users to identify their next steps.

Use CTA links when you want users to:

- Navigate to a page or entirely different site that can also be viewed (see also - variant);
- Navigate to a website where a video is shown (such as YouTube or Vimeo);

## Alternatives and related components

- Use links for navigation actions that appear within or immediately after a sentence.
- Use calendar events when you link to an event.
- Use a download when there is a file to download.
- Use a CTA image when there is a link in conjunction with an image.

## Anatomy

The CTA links consists of:

- Support icon: informs users at a glance about the type of the CTA;
- Text: additional information about the link;
- Link: shows the name of the page where it is being linked to;
- Container

## (Interactive) states

The CTA links contains the states normal, hover and focus.

## Design properties

### Typography

- Text: TheSans/lg/400
- Link: TheSans/lg/700

### Colors

- Supportive icon: background-color Blue/3, icon svg color white
- Text: text color Grey/4
- Link: text color Blue/3
- Container: border-top and border-bottom line color Grey/2

### Interactive states

#### Hover:

link text color Blue/4, supportive icon background-color Blue/4

#### Focus:

link text color Blue/4, supportive icon background-color Blue/4, container border color Ocher/5

### Structure

- Supportive icon: background circle size 64px, icon size 24px, padding-left 16px, padding-right 24px
- Text and link: padding-right 16px
- Container: padding-top and padding-bottom 24px, border line 1px

## Accessibility

[technical requirements]

## Content guidelines

### Text

_See also variant_

The text should:

- Be supportive to the link.
- Briefly provide context to the surrounding text as needed.
- Be able for users to anticipate what will happen when they click on the CTA icon.
- Always start with ‘Zie ook:’.

### Video variant

The text should:

- Be supportive to the link.
- Start with a link when referring to a video.
- Be able for users to anticipate what will happen when they click on the CTA link.
- Be scannable avoiding unnecessary words.
- Briefly provide context to the surrounding text as needed.
- Always start with ‘Bekijk’.

### Link

_See also variant_

The link should:

- Must show a short and clear page name being linked to.

#### Video variant

The link should:

- Provide enough context use the {verb}+{noun} format unless the action is clear with a single verb.

## Best practices

### Do's

CTA links should:

- Link to a page related to the current page;
- Link to a video;
- Be placed under or between a text (usually in a list);
- Be placed below each other if there are several CTA links;

### Don'ts

CTA links should:

- Not be used as a standalone link like ‘Learn more’ or ‘Forgot password?’;
- Not contain more than 3 CTA link in a row;

### Logic

- Always show the first and current page
- Only use the collapsed icon if there are more than 4 pages.
- If the collapsed icon is used, always show on the right side the underlying page and next to this the current page.
  - If there are for example 5 pages, then show the homepage (1), hide the 2nd and 3rd page and show the 4th and current page (5).
  - If there are for example 6 pages, then show the homepage

## References

- [Figma Design](https://www.figma.com/file/JpoY3waVoQGlLQzQXTL9nn/Design-System---Gemeente-Den-Haag?node-id=8105%3A21885)
`,Z={title:"CSS/Actions/CTA Link",tags:["autodocs"],parameters:{docs:{description:{component:B}},status:{type:"WORK IN PROGRESS"}}},a={render:()=>e.jsxs("a",{className:"denhaag-cta-link",href:"#example-url",rel:"nofollow noopener",children:[e.jsx("div",{className:"denhaag-cta-link__dot",children:e.jsx("svg",{className:"denhaag-icon",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:e.jsx("path",{d:"M9.29289 18.7071C8.90237 18.3166 8.90237 17.6834 9.29289 17.2929L14.5858 12L9.29289 6.70711C8.90237 6.31658 8.90237 5.68342 9.29289 5.29289C9.68342 4.90237 10.3166 4.90237 10.7071 5.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L10.7071 18.7071C10.3166 19.0976 9.68342 19.0976 9.29289 18.7071Z",fill:"currentColor"})})}),e.jsxs("p",{className:"denhaag-cta-link__excerpt",children:["Zie ook: ",e.jsx("span",{className:"denhaag-cta-link__highlight",children:"Met een link"})]})]})},i={render:()=>e.jsxs("a",{className:"denhaag-cta-link denhaag-cta-link--hover",href:"#example-url",rel:"nofollow noopener",children:[e.jsx("div",{className:"denhaag-cta-link__dot",children:e.jsx("svg",{className:"denhaag-icon",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:e.jsx("path",{d:"M9.29289 18.7071C8.90237 18.3166 8.90237 17.6834 9.29289 17.2929L14.5858 12L9.29289 6.70711C8.90237 6.31658 8.90237 5.68342 9.29289 5.29289C9.68342 4.90237 10.3166 4.90237 10.7071 5.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L10.7071 18.7071C10.3166 19.0976 9.68342 19.0976 9.29289 18.7071Z",fill:"currentColor"})})}),e.jsxs("p",{className:"denhaag-cta-link__excerpt",children:["Zie ook: ",e.jsx("span",{className:"denhaag-cta-link__highlight",children:"Met een link"})]})]})},t={render:()=>e.jsxs("a",{className:"denhaag-cta-link denhaag-cta-link--focus",href:"#example-url",rel:"nofollow noopener",children:[e.jsx("div",{className:"denhaag-cta-link__dot",children:e.jsx("svg",{className:"denhaag-icon",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:e.jsx("path",{d:"M9.29289 18.7071C8.90237 18.3166 8.90237 17.6834 9.29289 17.2929L14.5858 12L9.29289 6.70711C8.90237 6.31658 8.90237 5.68342 9.29289 5.29289C9.68342 4.90237 10.3166 4.90237 10.7071 5.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L10.7071 18.7071C10.3166 19.0976 9.68342 19.0976 9.29289 18.7071Z",fill:"currentColor"})})}),e.jsxs("p",{className:"denhaag-cta-link__excerpt",children:["Zie ook: ",e.jsx("span",{className:"denhaag-cta-link__highlight",children:"Met een link"})]})]})},l={render:()=>e.jsxs(e.Fragment,{children:[e.jsxs("a",{className:"denhaag-cta-link",href:"#example-url",rel:"nofollow noopener",children:[e.jsx("div",{className:"denhaag-cta-link__dot",children:e.jsx("svg",{className:"denhaag-icon",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:e.jsx("path",{d:"M9.29289 18.7071C8.90237 18.3166 8.90237 17.6834 9.29289 17.2929L14.5858 12L9.29289 6.70711C8.90237 6.31658 8.90237 5.68342 9.29289 5.29289C9.68342 4.90237 10.3166 4.90237 10.7071 5.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L10.7071 18.7071C10.3166 19.0976 9.68342 19.0976 9.29289 18.7071Z",fill:"currentColor"})})}),e.jsxs("p",{className:"denhaag-cta-link__excerpt",children:["Zie ook: ",e.jsx("span",{className:"denhaag-cta-link__highlight",children:"Met een link"})]})]}),e.jsxs("a",{className:"denhaag-cta-link",href:"#example-url",rel:"nofollow noopener",children:[e.jsx("div",{className:"denhaag-cta-link__dot",children:e.jsx("svg",{className:"denhaag-icon",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:e.jsx("path",{d:"M9.29289 18.7071C8.90237 18.3166 8.90237 17.6834 9.29289 17.2929L14.5858 12L9.29289 6.70711C8.90237 6.31658 8.90237 5.68342 9.29289 5.29289C9.68342 4.90237 10.3166 4.90237 10.7071 5.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L10.7071 18.7071C10.3166 19.0976 9.68342 19.0976 9.29289 18.7071Z",fill:"currentColor"})})}),e.jsxs("p",{className:"denhaag-cta-link__excerpt",children:["Zie ook: ",e.jsx("span",{className:"denhaag-cta-link__highlight",children:"Met een link"})]})]}),e.jsxs("a",{className:"denhaag-cta-link",href:"#example-url",rel:"nofollow noopener",children:[e.jsx("div",{className:"denhaag-cta-link__dot",children:e.jsx("svg",{className:"denhaag-icon",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:e.jsx("path",{d:"M9.29289 18.7071C8.90237 18.3166 8.90237 17.6834 9.29289 17.2929L14.5858 12L9.29289 6.70711C8.90237 6.31658 8.90237 5.68342 9.29289 5.29289C9.68342 4.90237 10.3166 4.90237 10.7071 5.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L10.7071 18.7071C10.3166 19.0976 9.68342 19.0976 9.29289 18.7071Z",fill:"currentColor"})})}),e.jsxs("p",{className:"denhaag-cta-link__excerpt",children:["Zie ook: ",e.jsx("span",{className:"denhaag-cta-link__highlight",children:"Met een link"})]})]})]})},o={render:()=>e.jsxs("a",{className:"denhaag-cta-link",href:"#example-url",rel:"nofollow noopener",children:[e.jsx("div",{className:"denhaag-cta-link__dot",children:e.jsx("svg",{className:"denhaag-icon",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:e.jsx("path",{d:"M9.29289 18.7071C8.90237 18.3166 8.90237 17.6834 9.29289 17.2929L14.5858 12L9.29289 6.70711C8.90237 6.31658 8.90237 5.68342 9.29289 5.29289C9.68342 4.90237 10.3166 4.90237 10.7071 5.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L10.7071 18.7071C10.3166 19.0976 9.68342 19.0976 9.29289 18.7071Z",fill:"currentColor"})})}),e.jsxs("p",{className:"denhaag-cta-link__excerpt",children:["Zie ook:"," ",e.jsx("span",{className:"denhaag-cta-link__highlight",children:"Donec bibendum, mauris et laoreet euismod, nunc felis fermentum nisi, ut ultrices nisi nisi et"})]})]})},r={render:()=>e.jsxs("a",{className:"denhaag-cta-link",href:"#example-url",rel:"nofollow noopener",children:[e.jsx("div",{className:"denhaag-cta-link__dot",children:e.jsx("svg",{className:"denhaag-icon",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:e.jsx("path",{d:"M6 6.74129C6 5.19771 7.67443 4.23597 9.00774 5.01374L18.0231 10.2727C19.3461 11.0445 19.3461 12.9561 18.0231 13.7278L9.00774 18.9868C7.67443 19.7645 6 18.8028 6 17.2592V6.74129ZM17.0154 12.0003L8 6.74129V17.2592L17.0154 12.0003Z",fill:"currentColor"})})}),e.jsxs("p",{className:"denhaag-cta-link__excerpt",children:[e.jsx("span",{className:"denhaag-cta-link__highlight",children:"Bekijk"})," een lange tekst over de video"]})]})};var h,c,d;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <a className="denhaag-cta-link" href="#example-url" rel="nofollow noopener">
      <div className="denhaag-cta-link__dot">
        <svg className="denhaag-icon" width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M9.29289 18.7071C8.90237 18.3166 8.90237 17.6834 9.29289 17.2929L14.5858 12L9.29289 6.70711C8.90237 6.31658 8.90237 5.68342 9.29289 5.29289C9.68342 4.90237 10.3166 4.90237 10.7071 5.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L10.7071 18.7071C10.3166 19.0976 9.68342 19.0976 9.29289 18.7071Z" fill="currentColor" />
        </svg>
      </div>
      <p className="denhaag-cta-link__excerpt">
        Zie ook: <span className="denhaag-cta-link__highlight">Met een link</span>
      </p>
    </a>
}`,...(d=(c=a.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var g,p,m;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <a className="denhaag-cta-link denhaag-cta-link--hover" href="#example-url" rel="nofollow noopener">
      <div className="denhaag-cta-link__dot">
        <svg className="denhaag-icon" width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M9.29289 18.7071C8.90237 18.3166 8.90237 17.6834 9.29289 17.2929L14.5858 12L9.29289 6.70711C8.90237 6.31658 8.90237 5.68342 9.29289 5.29289C9.68342 4.90237 10.3166 4.90237 10.7071 5.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L10.7071 18.7071C10.3166 19.0976 9.68342 19.0976 9.29289 18.7071Z" fill="currentColor" />
        </svg>
      </div>
      <p className="denhaag-cta-link__excerpt">
        Zie ook: <span className="denhaag-cta-link__highlight">Met een link</span>
      </p>
    </a>
}`,...(m=(p=i.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var k,u,w;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <a className="denhaag-cta-link denhaag-cta-link--focus" href="#example-url" rel="nofollow noopener">
      <div className="denhaag-cta-link__dot">
        <svg className="denhaag-icon" width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M9.29289 18.7071C8.90237 18.3166 8.90237 17.6834 9.29289 17.2929L14.5858 12L9.29289 6.70711C8.90237 6.31658 8.90237 5.68342 9.29289 5.29289C9.68342 4.90237 10.3166 4.90237 10.7071 5.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L10.7071 18.7071C10.3166 19.0976 9.68342 19.0976 9.29289 18.7071Z" fill="currentColor" />
        </svg>
      </div>
      <p className="denhaag-cta-link__excerpt">
        Zie ook: <span className="denhaag-cta-link__highlight">Met een link</span>
      </p>
    </a>
}`,...(w=(u=t.parameters)==null?void 0:u.docs)==null?void 0:w.source}}};var v,x,f;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <>
      <a className="denhaag-cta-link" href="#example-url" rel="nofollow noopener">
        <div className="denhaag-cta-link__dot">
          <svg className="denhaag-icon" width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M9.29289 18.7071C8.90237 18.3166 8.90237 17.6834 9.29289 17.2929L14.5858 12L9.29289 6.70711C8.90237 6.31658 8.90237 5.68342 9.29289 5.29289C9.68342 4.90237 10.3166 4.90237 10.7071 5.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L10.7071 18.7071C10.3166 19.0976 9.68342 19.0976 9.29289 18.7071Z" fill="currentColor" />
          </svg>
        </div>
        <p className="denhaag-cta-link__excerpt">
          Zie ook: <span className="denhaag-cta-link__highlight">Met een link</span>
        </p>
      </a>
      <a className="denhaag-cta-link" href="#example-url" rel="nofollow noopener">
        <div className="denhaag-cta-link__dot">
          <svg className="denhaag-icon" width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M9.29289 18.7071C8.90237 18.3166 8.90237 17.6834 9.29289 17.2929L14.5858 12L9.29289 6.70711C8.90237 6.31658 8.90237 5.68342 9.29289 5.29289C9.68342 4.90237 10.3166 4.90237 10.7071 5.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L10.7071 18.7071C10.3166 19.0976 9.68342 19.0976 9.29289 18.7071Z" fill="currentColor" />
          </svg>
        </div>
        <p className="denhaag-cta-link__excerpt">
          Zie ook: <span className="denhaag-cta-link__highlight">Met een link</span>
        </p>
      </a>
      <a className="denhaag-cta-link" href="#example-url" rel="nofollow noopener">
        <div className="denhaag-cta-link__dot">
          <svg className="denhaag-icon" width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M9.29289 18.7071C8.90237 18.3166 8.90237 17.6834 9.29289 17.2929L14.5858 12L9.29289 6.70711C8.90237 6.31658 8.90237 5.68342 9.29289 5.29289C9.68342 4.90237 10.3166 4.90237 10.7071 5.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L10.7071 18.7071C10.3166 19.0976 9.68342 19.0976 9.29289 18.7071Z" fill="currentColor" />
          </svg>
        </div>
        <p className="denhaag-cta-link__excerpt">
          Zie ook: <span className="denhaag-cta-link__highlight">Met een link</span>
        </p>
      </a>
    </>
}`,...(f=(x=l.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var C,_,N;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <a className="denhaag-cta-link" href="#example-url" rel="nofollow noopener">
      <div className="denhaag-cta-link__dot">
        <svg className="denhaag-icon" width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M9.29289 18.7071C8.90237 18.3166 8.90237 17.6834 9.29289 17.2929L14.5858 12L9.29289 6.70711C8.90237 6.31658 8.90237 5.68342 9.29289 5.29289C9.68342 4.90237 10.3166 4.90237 10.7071 5.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L10.7071 18.7071C10.3166 19.0976 9.68342 19.0976 9.29289 18.7071Z" fill="currentColor" />
        </svg>
      </div>
      <p className="denhaag-cta-link__excerpt">
        Zie ook:{' '}
        <span className="denhaag-cta-link__highlight">
          Donec bibendum, mauris et laoreet euismod, nunc felis fermentum nisi, ut ultrices nisi nisi et
        </span>
      </p>
    </a>
}`,...(N=(_=o.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};var L,j,b;r.parameters={...r.parameters,docs:{...(L=r.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <a className="denhaag-cta-link" href="#example-url" rel="nofollow noopener">
      <div className="denhaag-cta-link__dot">
        <svg className="denhaag-icon" width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M6 6.74129C6 5.19771 7.67443 4.23597 9.00774 5.01374L18.0231 10.2727C19.3461 11.0445 19.3461 12.9561 18.0231 13.7278L9.00774 18.9868C7.67443 19.7645 6 18.8028 6 17.2592V6.74129ZM17.0154 12.0003L8 6.74129V17.2592L17.0154 12.0003Z" fill="currentColor" />
        </svg>
      </div>
      <p className="denhaag-cta-link__excerpt">
        <span className="denhaag-cta-link__highlight">Bekijk</span> een lange tekst over de video
      </p>
    </a>
}`,...(b=(j=r.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};const M=["Default","Hovered","Focused","Grouped","Long","Video"];export{a as Default,t as Focused,l as Grouped,i as Hovered,o as Long,r as Video,M as __namedExportsOrder,Z as default};
