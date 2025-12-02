import{j as e}from"./iframe-BxWp1SVR.js";import"./index-CeetSsp-.js";var s=`.denhaag-cta-download{--denhaag-cta-download-icon-width-fallback:calc(var(--denhaag-cta-download-gap)*4);word-wrap:break-word;align-items:center;border-left:1px solid var(--denhaag-cta-download-border-color,currentColor);border-right:1px solid var(--denhaag-cta-download-border-color,currentColor);box-shadow:0 1px 0 var(--denhaag-cta-download-border-color,currentColor),inset 0 1px 0 var(--denhaag-cta-download-border-color,currentColor);color:var(--denhaag-cta-download-color);display:flex;flex-direction:row;font-family:var(--denhaag-cta-download-font-family,inherit);font-size:var(--denhaag-cta-download-font-size,1rem);font-weight:var(--denhaag-cta-download-font-weight,inherit);gap:var(--denhaag-cta-download-gap);line-height:var(--denhaag-cta-download-line-height,inherit);overflow-wrap:break-word;padding-block-end:var(--denhaag-cta-download-padding-block,var(--denhaag-cta-download-gap));padding-block-start:var(--denhaag-cta-download-padding-block,var(--denhaag-cta-download-gap));padding-inline-end:var(--denhaag-cta-download-padding-inline,calc(var(--denhaag-cta-download-gap)/1.5));padding-inline-start:var(--denhaag-cta-download-padding-inline,calc(var(--denhaag-cta-download-gap)/1.5));text-decoration:none}.denhaag-cta-download--hover,.denhaag-cta-download:hover{--denhaag-cta-download-dot-background-color:var(
    --denhaag-cta-download-hover-dot-background-color,var(--denhaag-cta-download-color)
  )}.denhaag-cta-download:hover .denhaag-cta-link__dot{background-color:var(--denhaag-cta-download-hover-dot-background-color,var(--denhaag-cta-download-color))}.denhaag-cta-download--focus,.denhaag-cta-download:focus-visible{--denhaag-cta-download-dot-background-color:var(
    --denhaag-cta-download-focus-dot-background-color,var(--denhaag-cta-download-hover-dot-background-color)
  );outline:var(--denhaag-cta-download-focus-outline)}.denhaag-cta-download__dot{align-items:center;aspect-ratio:1/1;background-color:var(--denhaag-cta-download-dot-background-color,var(--denhaag-cta-download-color));border-radius:var(--denhaag-cta-download-width,50%);color:var(--denhaag-cta-download-dot-color);display:inline-flex;flex:0 0 auto;flex-direction:column;height:auto;justify-content:center;width:var(--denhaag-cta-download-width,var(--denhaag-cta-download-icon-width-fallback))}.denhaag-cta-download__excerpt{display:flex;flex-direction:column;gap:var(--denhaag-cta-download-excerpt-gap,calc(var(--denhaag-cta-download-gap)/6));max-width:calc(100% - var(--denhaag-cta-download-width, var(--denhaag-cta-download-icon-width-fallback)) - var(--denhaag-cta-download-gap))}.denhaag-cta-download__title{color:var(--denhaag-cta-download-title-color-color,inherit);font-size:var(--denhaag-cta-download-title-font-size,var(--denhaag-cta-download-font-size,1rem));font-weight:var(--denhaag-cta-download-title-font-weight,inherit);margin-block-end:0;margin-block-start:0}`;if(typeof document<"u"){const r=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css",a.nonce=window.NONCE,r.appendChild(a),a.styleSheet?a.styleSheet.cssText=s:a.appendChild(document.createTextNode(s))}const l=`# Call To Action Download

A download displays a link to download an attachment and metadata about the file. The metadata shows users how big the file is so they can decide if they want to download it.

## When to use

Use a download when there are attachments that can be downloaded such as a document.

## Alternatives and related components

None.

## Anatomy

The download consists of:

- Support icon: shows a download icon;
- Header link: shows the name of the file;
- Metadata: shows the extension and the size of the file;
- Container;

## (Interactive) states

The download contains the states normal, hover and focus.

## Design properties

### Typography

- Header link: TheSans/lg/700;
- Metadata: TheSans/lg/400;

### Colors

- Supportive icon: background-color Blue/3, icon svg color white;
- Header link: text color Blue/3;
- Metadata: text color Grey/4;
- Container: border-top and border-bottom line color Grey/2;

### Interactive states

#### Hover

- header link text color Blue/4;
- supportive icon background-color Blue/4;

#### Focus

- header link text color Blue/4;
- supportive icon background-color Blue/4;
- container border color Ocher/5

### Structure

- Supportive icon: background circle size 64px, icon size 24px, padding-left 16px, padding-right 24px;
- Header link: padding-bottom 4px;
- Header link and metadata: padding-right 16px;
- Container: padding-top and padding-bottom 24px, border-width 1px;

## Accessibility

[technical requirements]

## Content guidelines

### Heading link

The heading link should:

- Describe in a few words what the file is about;
- Not use the hyphen when breaking the text. Let the text continue on the next line.;

### Metadata

- The metadata should:
- Show the abbreviation of the file type (e.g. PDF, JPG, DOC)

## Best practices

### Do's

Downloads should:

- Be used for all downloads;
- Describe what the file is;
- Include file type and size. Showing the file size is particularly nice for users that are on reduced data allowences (i.e. mobile), and also offers an indication on how long a file might take to download;
- Show the size in kB’s when it’s <1000 kB and in MB’s when it’s >999 kB;
- Show 1 decimal after the decimal point of the size;
- Download the file on the used device;
- Be grouped under each other when there is more than 1 download;
- Be placed under or between a text (usually in a list);
- Be full width (100%);

### Don'ts

Download should:

- Not be described as a file;
- Not open the file in another tab;

## References

- [Figma Design](https://www.figma.com/file/JpoY3waVoQGlLQzQXTL9nn/Design-System---Gemeente-Den-Haag?node-id=8141%3A24964)
- https://ons-design-system.netlify.app/components/downloads/
- https://britishgas.design/docs/components/ns-download
`,n=(r,a)=>`https://images.unsplash.com/photo-1569235186275-626cb53b83ce?fit=crop&w=${a}&h=${r}`,w={parameters:{tags:["autodocs"],docs:{description:{component:l}},status:{type:"WORK IN PROGRESS"}}},o={render:()=>e.jsxs("a",{className:"denhaag-cta-download",href:n(800,800),download:"pretty-file-name-without-spaces",type:"application/pdf","aria-label":"Download: [READABLE_FILENAME] (PDF, 763,8 kB)",children:[e.jsx("div",{className:"denhaag-cta-link__dot",children:e.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:[e.jsx("path",{d:"M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15",stroke:"white","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e.jsx("path",{d:"M7 10L12 15L17 10",stroke:"white","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e.jsx("path",{d:"M12 15V3",stroke:"white","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})]})}),e.jsxs("div",{className:"denhaag-cta-download__excerpt",children:[e.jsx("h3",{className:"denhaag-cta-download__title",children:"Staat van wijzigingen herstelbesluit 1B Omgevingsplan Binkhorst"}),"(PDF, 763,8 kB)"]})]})},t={render:()=>e.jsxs("a",{className:"denhaag-cta-download denhaag-cta-download--hover",href:n(800,800),download:"pretty-file-name-without-spaces",type:"application/pdf","aria-label":"Download: [READABLE_FILENAME] (PDF, 763,8 kB)",children:[e.jsx("div",{className:"denhaag-cta-link__dot",children:e.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:[e.jsx("path",{d:"M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15",stroke:"white","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e.jsx("path",{d:"M7 10L12 15L17 10",stroke:"white","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e.jsx("path",{d:"M12 15V3",stroke:"white","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})]})}),e.jsxs("div",{className:"denhaag-cta-download__excerpt",children:[e.jsx("h3",{className:"denhaag-cta-download__title",children:"Staat van wijzigingen herstelbesluit 1B Omgevingsplan Binkhorst"}),"(PDF, 763,8 kB)"]})]})},d={render:()=>e.jsxs("a",{className:"denhaag-cta-download denhaag-cta-download--focus",href:n(800,800),download:"pretty-file-name-without-spaces",type:"application/pdf","aria-label":"Download: [READABLE_FILENAME] (PDF, 763,8 kB)",children:[e.jsx("div",{className:"denhaag-cta-link__dot",children:e.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:[e.jsx("path",{d:"M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15",stroke:"white","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e.jsx("path",{d:"M7 10L12 15L17 10",stroke:"white","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e.jsx("path",{d:"M12 15V3",stroke:"white","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})]})}),e.jsxs("div",{className:"denhaag-cta-download__excerpt",children:[e.jsx("h3",{className:"denhaag-cta-download__title",children:"Staat van wijzigingen herstelbesluit 1B Omgevingsplan Binkhorst"}),"(PDF, 763,8 kB)"]})]})},i={render:()=>e.jsxs(e.Fragment,{children:[e.jsxs("a",{className:"denhaag-cta-download",href:n(800,800),download:"pretty-file-name-without-spaces",type:"application/pdf","aria-label":"Download: Verslag dienstreis naar Delhi (PDF, 126,5 kB)",children:[e.jsx("div",{className:"denhaag-cta-link__dot",children:e.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:[e.jsx("path",{d:"M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15",stroke:"white","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e.jsx("path",{d:"M7 10L12 15L17 10",stroke:"white","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e.jsx("path",{d:"M12 15V3",stroke:"white","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})]})}),e.jsxs("div",{className:"denhaag-cta-download__excerpt",children:[e.jsx("h3",{className:"denhaag-cta-download__title",children:"Verslag dienstreis naar Delhi"}),"(PDF, 126,5 kB)"]})]}),e.jsxs("a",{className:"denhaag-cta-download",href:n(800,800),download:"pretty-file-name-without-spaces",type:"application/msword","aria-label":"Download: [READABLE_FILENAME] (DOC, 763,8 kB)",children:[e.jsx("div",{className:"denhaag-cta-link__dot",children:e.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:[e.jsx("path",{d:"M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15",stroke:"white","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e.jsx("path",{d:"M7 10L12 15L17 10",stroke:"white","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e.jsx("path",{d:"M12 15V3",stroke:"white","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})]})}),e.jsxs("div",{className:"denhaag-cta-download__excerpt",children:[e.jsx("h3",{className:"denhaag-cta-download__title",children:"Bijlage: aanvulling Omgeving Effect Rapport (OER)"}),"(DOC, 763,8 kB)"]})]}),e.jsxs("a",{className:"denhaag-cta-download",href:n(800,800),download:"pretty-file-name-without-spaces",type:"image/jpeg","aria-label":"Download: [READABLE_FILENAME] (JPG, 600 kB)",children:[e.jsx("div",{className:"denhaag-cta-link__dot",children:e.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:[e.jsx("path",{d:"M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15",stroke:"white","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e.jsx("path",{d:"M7 10L12 15L17 10",stroke:"white","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e.jsx("path",{d:"M12 15V3",stroke:"white","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})]})}),e.jsxs("div",{className:"denhaag-cta-download__excerpt",children:[e.jsx("h3",{className:"denhaag-cta-download__title",children:"Bijlage: Factsheets Omgevingslawaai"}),"(JPG, 600 kB)"]})]})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <a className="denhaag-cta-download" href={fileImage(800, 800)} download="pretty-file-name-without-spaces" type="application/pdf" aria-label="Download: [READABLE_FILENAME] (PDF, 763,8 kB)">
      <div className="denhaag-cta-link__dot">
        <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M7 10L12 15L17 10" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M12 15V3" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
      <div className="denhaag-cta-download__excerpt">
        <h3 className="denhaag-cta-download__title">Staat van wijzigingen herstelbesluit 1B Omgevingsplan Binkhorst</h3>
        (PDF, 763,8 kB)
      </div>
    </a>
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <a className="denhaag-cta-download denhaag-cta-download--hover" href={fileImage(800, 800)} download="pretty-file-name-without-spaces" type="application/pdf" aria-label="Download: [READABLE_FILENAME] (PDF, 763,8 kB)">
      <div className="denhaag-cta-link__dot">
        <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M7 10L12 15L17 10" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M12 15V3" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
      <div className="denhaag-cta-download__excerpt">
        <h3 className="denhaag-cta-download__title">Staat van wijzigingen herstelbesluit 1B Omgevingsplan Binkhorst</h3>
        (PDF, 763,8 kB)
      </div>
    </a>
}`,...t.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <a className="denhaag-cta-download denhaag-cta-download--focus" href={fileImage(800, 800)} download="pretty-file-name-without-spaces" type="application/pdf" aria-label="Download: [READABLE_FILENAME] (PDF, 763,8 kB)">
      <div className="denhaag-cta-link__dot">
        <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M7 10L12 15L17 10" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M12 15V3" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
      <div className="denhaag-cta-download__excerpt">
        <h3 className="denhaag-cta-download__title">Staat van wijzigingen herstelbesluit 1B Omgevingsplan Binkhorst</h3>
        (PDF, 763,8 kB)
      </div>
    </a>
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <a className="denhaag-cta-download" href={fileImage(800, 800)} download="pretty-file-name-without-spaces" type="application/pdf" aria-label="Download: Verslag dienstreis naar Delhi (PDF, 126,5 kB)">
        <div className="denhaag-cta-link__dot">
          <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M7 10L12 15L17 10" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M12 15V3" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
        <div className="denhaag-cta-download__excerpt">
          <h3 className="denhaag-cta-download__title">Verslag dienstreis naar Delhi</h3>
          (PDF, 126,5 kB)
        </div>
      </a>
      <a className="denhaag-cta-download" href={fileImage(800, 800)} download="pretty-file-name-without-spaces" type="application/msword" aria-label="Download: [READABLE_FILENAME] (DOC, 763,8 kB)">
        <div className="denhaag-cta-link__dot">
          <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M7 10L12 15L17 10" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M12 15V3" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
        <div className="denhaag-cta-download__excerpt">
          <h3 className="denhaag-cta-download__title">Bijlage: aanvulling Omgeving Effect Rapport (OER)</h3>
          (DOC, 763,8 kB)
        </div>
      </a>
      <a className="denhaag-cta-download" href={fileImage(800, 800)} download="pretty-file-name-without-spaces" type="image/jpeg" aria-label="Download: [READABLE_FILENAME] (JPG, 600 kB)">
        <div className="denhaag-cta-link__dot">
          <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M7 10L12 15L17 10" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M12 15V3" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
        <div className="denhaag-cta-download__excerpt">
          <h3 className="denhaag-cta-download__title">Bijlage: Factsheets Omgevingslawaai</h3>
          (JPG, 600 kB)
        </div>
      </a>
    </>
}`,...i.parameters?.docs?.source}}};const g=["Default","Hovered","Focused","Grouped"];export{o as Default,d as Focused,i as Grouped,t as Hovered,g as __namedExportsOrder,w as default};
