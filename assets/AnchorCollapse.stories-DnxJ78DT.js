import{j as e}from"./iframe-B9evIzMJ.js";var o=`.denhaag-anchor-collapse{--denhaag-anchor-collapse-content-display:none;--denhaag-anchor-collapse-icon-display:block;--denhaag-anchor-collapse-summary-pointer-events:auto;border-bottom:var(--denhaag-anchor-collapse-border-width) var(--denhaag-anchor-collapse-border-style) var(--denhaag-anchor-collapse-border-color)}.denhaag-anchor-collapse:first-child{border-top:var(--denhaag-anchor-collapse-border-width) var(--denhaag-anchor-collapse-border-style) var(--denhaag-anchor-collapse-border-color)}.denhaag-anchor-collapse--active{--denhaag-anchor-collapse-content-display:block;--denhaag-anchor-collapse-rotate:0deg;--denhaag-anchor-collapse-summary-color:var(--denhaag-anchor-collapse-summary-active-color)}.denhaag-anchor-collapse__toggle{background-color:transparent;border:0;color:var(--denhaag-anchor-collapse-summary-color);cursor:pointer;font-family:var(--denhaag-anchor-collapse-summary-font-family,inherit);font-size:var(--denhaag-anchor-collapse-summary-font-size,inherit);font-weight:var(--denhaag-anchor-collapse-summary-font-weight,normal);margin-block-start:var(--denhaag-anchor-collapse-summary-margin-block-start,0);padding-block-end:var(--denhaag-anchor-collapse-summary-padding-block);padding-block-start:var(--denhaag-anchor-collapse-summary-padding-block);padding-inline-end:calc(var(--denhaag-anchor-collapse-summary-padding-inline)*2);padding-inline-start:var(--denhaag-anchor-collapse-summary-padding-inline);pointer-events:var(--denhaag-anchor-collapse-summary-pointer-events);text-align:var(--denhaag-anchor-collapse-summary-text-align);width:100%}.denhaag-anchor-collapse__summary{margin-block-end:0;margin-block-start:0;position:relative}.denhaag-anchor-collapse__summary--hover,.denhaag-anchor-collapse__toggle:hover{--denhaag-anchor-collapse-summary-color:var(--denhaag-anchor-collapse-summary-hover-color)}.denhaag-anchor-collapse__summary--focus,.denhaag-anchor-collapse__toggle:focus-visible{--denhaag-anchor-collapse-summary-color:var(--denhaag-anchor-collapse-summary-focus-color);outline:var(--denhaag-anchor-collapse-summary-focus-outline,var(--denhaag-focus-border))}.denhaag-anchor-collapse__summary>svg{display:var(--denhaag-anchor-collapse-icon-display);position:absolute;right:var(--denhaag-anchor-collapse-summary-padding-inline);top:50%;transform:translate(-50%,-50%) rotate(var(--denhaag-anchor-collapse-rotate))}.denhaag-anchor-collapse__content{border-top:var(--denhaag-anchor-collapse-border-width) var(--denhaag-anchor-collapse-border-style) var(--denhaag-anchor-collapse-border-color);display:var(--denhaag-anchor-collapse-content-display);padding-block-end:var(--denhaag-anchor-collapse-content-padding-block-end,var(--denhaag-anchor-collapse-summary-padding-block));padding-block-start:var(--denhaag-anchor-collapse-content-padding-block-start,var(--denhaag-anchor-collapse-summary-padding-block));padding-inline-end:var(--denhaag-anchor-collapse-content-padding-inline-end,var(--denhaag-anchor-collapse-summary-padding-inline));padding-inline-start:var(--denhaag-anchor-collapse-content-padding-inline-start,var(--denhaag-anchor-collapse-summary-padding-inline))}@media (width >= 768px){.denhaag-anchor-collapse{--denhaag-anchor-collapse-border-color:transparent;--denhaag-anchor-collapse-content-display:block;--denhaag-anchor-collapse-icon-display:none;--denhaag-anchor-collapse-summary-pointer-events:none;--denhaag-anchor-collapse-summary-padding-block:0;--denhaag-anchor-collapse-summary-padding-inline:0;--denhaag-anchor-collapse-content-padding-block-end:0;--denhaag-anchor-collapse-content-padding-block-start:0;--denhaag-anchor-collapse-content-padding-inline-end:0;--denhaag-anchor-collapse-content-padding-inline-start:0;--denhaag-anchor-collapse-summary-color:var(--nl-heading-level-2-color,var(--nl-heading-color));--denhaag-anchor-collapse-summary-font-family:var(
      --nl-heading-level-2-font-family,var(--nl-heading-font-family,var(--utrecht-document-font-family))
    );--denhaag-anchor-collapse-summary-font-size:var(--nl-heading-level-2-font-size);--denhaag-anchor-collapse-summary-font-weight:var(
      --nl-heading-level-2-font-weight,var(--nl-heading-font-weight,bold)
    );--denhaag-anchor-collapse-summary-margin-block-start:1.775rem}.denhaag-anchor-collapse__content{margin-block-start:var(--denhaag-anchor-collapse-content-margin-block-start,.5rem)}}`;if(typeof document<"u"){const l=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css",a.nonce=window.NONCE,l.appendChild(a),a.styleSheet?a.styleSheet.cssText=o:a.appendChild(document.createTextNode(o))}const c=`# Anchor collapse

The anchor collapse for mobile devices, used in combination with the anchor navigation.

## When to use

Used in combination with the anchor-navigation, on mobile a collapse is shown. On desktop just the regular content.

## Anatomy

The anchor collapse consists of:

1. Section: Wrapper to scroll-to;
2. Label/Summary: Same as the Heading 2;
3. Content/Details: Content of the block;

## (Interactive) states

The anchor collapse has the following states active, hover and focus.

## Design Properties

### Typography

- Label inactive: TheSans/lg/700
- Label active: TheSans/lg/700

### Color

- Label inactive: text color Grey/5
- Label active: text color Green/3
- Label focus: text color Green/3
- Label hover: text color Green/3

## Accessibility

[technical requirements]
`;class d{constructor(a="denhaag-anchor-collapse"){this.panels=document.getElementsByClassName(a),this.panels&&(this.classNames={active:`${a}--active`,toggle:`${a}__toggle`},this.openOrCloseCollapses(),this.clickEvents(),this.windowEvents())}windowEvents(){const a=this,n=window.innerWidth;a.windowEventsLoop(),window.addEventListener("resize",async()=>{n!==window.innerWidth&&(a.openOrCloseCollapses(),a.windowEventsLoop())}),window.addEventListener("orientationchange",async()=>{a.openOrCloseCollapses(),a.windowEventsLoop()})}openOrCloseCollapses(){this.openCollapses=window.matchMedia("(min-width: 768px)").matches}clickEvents(){[...this.panels].forEach(a=>{[...a.getElementsByClassName(this.classNames.toggle)].forEach(n=>n.onclick=()=>{n.setAttribute("aria-expanded",n.getAttribute("aria-expanded")==="false"?"true":"false"),a.classList.toggle(this.classNames.active)})})}windowEventsLoop(){[...this.panels].forEach(a=>{let n=null;this.openCollapses&&!a.classList.contains(this.classNames.active)?(a.classList.add(this.classNames.active),n="true"):a.classList.contains(this.classNames.active)&&(a.classList.remove(this.classNames.active),n="false"),n&&[...a.getElementsByClassName(this.classNames.toggle)].forEach(t=>t.setAttribute("aria-expanded",n))})}}window.addEventListener("DOMContentLoaded",async()=>{setTimeout(()=>{new d("denhaag-anchor-collapse")},500)});const m={title:"CSS/Navigation/Anchor Collapse",tags:["autodocs"],parameters:{docs:{description:{component:c}},status:{type:"WORK IN PROGRESS"}}},s={render:()=>e.jsxs(e.Fragment,{children:[e.jsxs("section",{className:"denhaag-anchor-collapse",id:"in-het-kort",children:[e.jsxs("h2",{className:"denhaag-anchor-collapse__summary",children:[e.jsx("button",{"aria-controls":"denhaag-anchor-collapse-content-in-het-kort","aria-expanded":"false",className:"denhaag-anchor-collapse__toggle",id:"denhaag-anchor-collapse-label-in-het-kort",children:"In het kort"}),e.jsx("svg",{"aria-hidden":"true",width:"12",height:"8",viewBox:"0 0 12 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M5.4107 1.07806C5.73614 0.752625 6.26378 0.752625 6.58922 1.07806L11.5892 6.07806C11.9147 6.4035 11.9147 6.93114 11.5892 7.25657C11.2638 7.58201 10.7361 7.58201 10.4107 7.25657L5.99996 2.84583L1.58922 7.25657C1.26378 7.58201 0.736141 7.58201 0.410704 7.25657C0.0852667 6.93114 0.0852667 6.4035 0.410704 6.07806L5.4107 1.07806Z",fill:"currentColor"})})]}),e.jsx("div",{"aria-labelledby":"denhaag-anchor-collapse-label-in-het-kort",className:"denhaag-anchor-collapse__content",id:"denhaag-anchor-collapse-content-in-het-kort",role:"region",children:e.jsx("p",{className:"utrecht-paragraph",children:"Mauris non sagittis ipsum. Donec elementum libero at gravida ullamcorper. Suspendisse consequat gravida est, sed condimentum eros convallis vitae. Cras interdum ornare nisl id hendrerit. Curabitur ullamcorper vel nisi nec malesuada. Integer hendrerit urna ac tincidunt pellentesque. Curabitur laoreet, ipsum ac semper ornare, libero lacus pretium turpis, nec fermentum odio nulla sit amet nisi. In sed facilisis neque, vel maximus risus. Aliquam porttitor magna nec justo facilisis imperdiet. Fusce malesuada purus nec sem auctor pretium. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras malesuada condimentum convallis. Cras dignissim sit amet arcu non ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse auctor ex metus, quis gravida odio elementum sed."})})]}),e.jsxs("section",{className:"denhaag-anchor-collapse",id:"voorwaarden",children:[e.jsxs("h2",{className:"denhaag-anchor-collapse__summary",children:[e.jsx("button",{"aria-controls":"denhaag-anchor-collapse-content-voorwaarden","aria-expanded":"false",className:"denhaag-anchor-collapse__toggle",id:"denhaag-anchor-collapse-label-voorwaarden",children:"Voorwaarden"}),e.jsx("svg",{"aria-hidden":"true",width:"12",height:"8",viewBox:"0 0 12 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M5.4107 1.07806C5.73614 0.752625 6.26378 0.752625 6.58922 1.07806L11.5892 6.07806C11.9147 6.4035 11.9147 6.93114 11.5892 7.25657C11.2638 7.58201 10.7361 7.58201 10.4107 7.25657L5.99996 2.84583L1.58922 7.25657C1.26378 7.58201 0.736141 7.58201 0.410704 7.25657C0.0852667 6.93114 0.0852667 6.4035 0.410704 6.07806L5.4107 1.07806Z",fill:"currentColor"})})]}),e.jsx("div",{"aria-labelledby":"denhaag-anchor-collapse-label-voorwaarden",className:"denhaag-anchor-collapse__content",id:"denhaag-anchor-collapse-content-voorwaarden",role:"region",children:e.jsx("p",{className:"utrecht-paragraph",children:"Mauris non sagittis ipsum. Donec elementum libero at gravida ullamcorper. Suspendisse consequat gravida est, sed condimentum eros convallis vitae. Cras interdum ornare nisl id hendrerit. Curabitur ullamcorper vel nisi nec malesuada. Integer hendrerit urna ac tincidunt pellentesque. Curabitur laoreet, ipsum ac semper ornare, libero lacus pretium turpis, nec fermentum odio nulla sit amet nisi. In sed facilisis neque, vel maximus risus. Aliquam porttitor magna nec justo facilisis imperdiet. Fusce malesuada purus nec sem auctor pretium. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras malesuada condimentum convallis. Cras dignissim sit amet arcu non ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse auctor ex metus, quis gravida odio elementum sed."})})]}),e.jsxs("section",{className:"denhaag-anchor-collapse",id:"process",children:[e.jsxs("h2",{className:"denhaag-anchor-collapse__summary",children:[e.jsx("button",{"aria-controls":"denhaag-anchor-collapse-content-process","aria-expanded":"false",className:"denhaag-anchor-collapse__toggle",id:"denhaag-anchor-collapse-label-process",children:"Process"}),e.jsx("svg",{"aria-hidden":"true",width:"12",height:"8",viewBox:"0 0 12 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M5.4107 1.07806C5.73614 0.752625 6.26378 0.752625 6.58922 1.07806L11.5892 6.07806C11.9147 6.4035 11.9147 6.93114 11.5892 7.25657C11.2638 7.58201 10.7361 7.58201 10.4107 7.25657L5.99996 2.84583L1.58922 7.25657C1.26378 7.58201 0.736141 7.58201 0.410704 7.25657C0.0852667 6.93114 0.0852667 6.4035 0.410704 6.07806L5.4107 1.07806Z",fill:"currentColor"})})]}),e.jsx("div",{"aria-labelledby":"denhaag-anchor-collapse-label-process",className:"denhaag-anchor-collapse__content",role:"region",id:"denhaag-anchor-collapse-content-process",children:e.jsx("p",{className:"utrecht-paragraph",children:"Mauris non sagittis ipsum. Donec elementum libero at gravida ullamcorper. Suspendisse consequat gravida est, sed condimentum eros convallis vitae. Cras interdum ornare nisl id hendrerit. Curabitur ullamcorper vel nisi nec malesuada. Integer hendrerit urna ac tincidunt pellentesque. Curabitur laoreet, ipsum ac semper ornare, libero lacus pretium turpis, nec fermentum odio nulla sit amet nisi. In sed facilisis neque, vel maximus risus. Aliquam porttitor magna nec justo facilisis imperdiet. Fusce malesuada purus nec sem auctor pretium. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras malesuada condimentum convallis. Cras dignissim sit amet arcu non ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse auctor ex metus, quis gravida odio elementum sed."})})]}),e.jsxs("section",{className:"denhaag-anchor-collapse",id:"kosten",children:[e.jsxs("h2",{className:"denhaag-anchor-collapse__summary",children:[e.jsx("button",{"aria-controls":"denhaag-anchor-collapse-content-kosten","aria-expanded":"false",className:"denhaag-anchor-collapse__toggle",id:"denhaag-anchor-collapse-label-kosten",children:"Kosten"}),e.jsx("svg",{"aria-hidden":"true",width:"12",height:"8",viewBox:"0 0 12 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M5.4107 1.07806C5.73614 0.752625 6.26378 0.752625 6.58922 1.07806L11.5892 6.07806C11.9147 6.4035 11.9147 6.93114 11.5892 7.25657C11.2638 7.58201 10.7361 7.58201 10.4107 7.25657L5.99996 2.84583L1.58922 7.25657C1.26378 7.58201 0.736141 7.58201 0.410704 7.25657C0.0852667 6.93114 0.0852667 6.4035 0.410704 6.07806L5.4107 1.07806Z",fill:"currentColor"})})]}),e.jsx("div",{"aria-labelledby":"denhaag-anchor-collapse-label-kosten",className:"denhaag-anchor-collapse__content",role:"region",id:"denhaag-anchor-collapse-content-kosten",children:e.jsx("p",{className:"utrecht-paragraph",children:"Mauris non sagittis ipsum. Donec elementum libero at gravida ullamcorper. Suspendisse consequat gravida est, sed condimentum eros convallis vitae. Cras interdum ornare nisl id hendrerit. Curabitur ullamcorper vel nisi nec malesuada. Integer hendrerit urna ac tincidunt pellentesque. Curabitur laoreet, ipsum ac semper ornare, libero lacus pretium turpis, nec fermentum odio nulla sit amet nisi. In sed facilisis neque, vel maximus risus. Aliquam porttitor magna nec justo facilisis imperdiet. Fusce malesuada purus nec sem auctor pretium. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras malesuada condimentum convallis. Cras dignissim sit amet arcu non ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse auctor ex metus, quis gravida odio elementum sed."})})]}),e.jsxs("section",{className:"denhaag-anchor-collapse",id:"aanvragen",children:[e.jsxs("h2",{className:"denhaag-anchor-collapse__summary",children:[e.jsx("button",{"aria-expanded":"false","aria-controls":"denhaag-anchor-collapse-content-aanvragen",className:"denhaag-anchor-collapse__toggle",id:"denhaag-anchor-collapse-label-aanvragen",children:"Aanvragen"}),e.jsx("svg",{"aria-hidden":"true",width:"12",height:"8",viewBox:"0 0 12 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M5.4107 1.07806C5.73614 0.752625 6.26378 0.752625 6.58922 1.07806L11.5892 6.07806C11.9147 6.4035 11.9147 6.93114 11.5892 7.25657C11.2638 7.58201 10.7361 7.58201 10.4107 7.25657L5.99996 2.84583L1.58922 7.25657C1.26378 7.58201 0.736141 7.58201 0.410704 7.25657C0.0852667 6.93114 0.0852667 6.4035 0.410704 6.07806L5.4107 1.07806Z",fill:"currentColor"})})]}),e.jsx("div",{"aria-labelledby":"denhaag-anchor-collapse-label-aanvragen",className:"denhaag-anchor-collapse__content",role:"region",children:e.jsx("p",{className:"utrecht-paragraph",children:"Mauris non sagittis ipsum. Donec elementum libero at gravida ullamcorper. Suspendisse consequat gravida est, sed condimentum eros convallis vitae. Cras interdum ornare nisl id hendrerit. Curabitur ullamcorper vel nisi nec malesuada. Integer hendrerit urna ac tincidunt pellentesque. Curabitur laoreet, ipsum ac semper ornare, libero lacus pretium turpis, nec fermentum odio nulla sit amet nisi. In sed facilisis neque, vel maximus risus. Aliquam porttitor magna nec justo facilisis imperdiet. Fusce malesuada purus nec sem auctor pretium. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras malesuada condimentum convallis. Cras dignissim sit amet arcu non ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse auctor ex metus, quis gravida odio elementum sed."})})]}),e.jsxs("section",{className:"denhaag-anchor-collapse",id:"veelgestelde-vragen",children:[e.jsxs("h2",{className:"denhaag-anchor-collapse__summary",children:[e.jsx("button",{"aria-controls":"denhaag-anchor-collapse-content-veelgestelde-vragen","aria-expanded":"false",className:"denhaag-anchor-collapse__toggle",id:"denhaag-anchor-collapse-label-veelgestelde-vragen",children:"Veelgestelde vragen"}),e.jsx("svg",{"aria-hidden":"true",width:"12",height:"8",viewBox:"0 0 12 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M5.4107 1.07806C5.73614 0.752625 6.26378 0.752625 6.58922 1.07806L11.5892 6.07806C11.9147 6.4035 11.9147 6.93114 11.5892 7.25657C11.2638 7.58201 10.7361 7.58201 10.4107 7.25657L5.99996 2.84583L1.58922 7.25657C1.26378 7.58201 0.736141 7.58201 0.410704 7.25657C0.0852667 6.93114 0.0852667 6.4035 0.410704 6.07806L5.4107 1.07806Z",fill:"currentColor"})})]}),e.jsx("div",{"aria-labelledby":"denhaag-anchor-collapse-label-veelgestelde-vragen",className:"denhaag-anchor-collapse__content",role:"region",id:"denhaag-anchor-collapse-content-veelgestelde-vragen",children:e.jsx("p",{className:"utrecht-paragraph",children:"Mauris non sagittis ipsum. Donec elementum libero at gravida ullamcorper. Suspendisse consequat gravida est, sed condimentum eros convallis vitae. Cras interdum ornare nisl id hendrerit. Curabitur ullamcorper vel nisi nec malesuada. Integer hendrerit urna ac tincidunt pellentesque. Curabitur laoreet, ipsum ac semper ornare, libero lacus pretium turpis, nec fermentum odio nulla sit amet nisi. In sed facilisis neque, vel maximus risus. Aliquam porttitor magna nec justo facilisis imperdiet. Fusce malesuada purus nec sem auctor pretium. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras malesuada condimentum convallis. Cras dignissim sit amet arcu non ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse auctor ex metus, quis gravida odio elementum sed."})})]})]})},r={render:()=>e.jsxs("section",{className:"denhaag-anchor-collapse",id:"focus",children:[e.jsxs("h2",{className:"denhaag-anchor-collapse__summary denhaag-anchor-collapse__summary--focus",children:[e.jsx("button",{"aria-controls":"denhaag-anchor-collapse-content-focus","aria-expanded":"false",className:"denhaag-anchor-collapse__toggle",id:"denhaag-anchor-collapse-label-focus",children:"In het kort"}),e.jsx("svg",{"aria-hidden":"true",width:"12",height:"8",viewBox:"0 0 12 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M5.4107 1.07806C5.73614 0.752625 6.26378 0.752625 6.58922 1.07806L11.5892 6.07806C11.9147 6.4035 11.9147 6.93114 11.5892 7.25657C11.2638 7.58201 10.7361 7.58201 10.4107 7.25657L5.99996 2.84583L1.58922 7.25657C1.26378 7.58201 0.736141 7.58201 0.410704 7.25657C0.0852667 6.93114 0.0852667 6.4035 0.410704 6.07806L5.4107 1.07806Z",fill:"currentColor"})})]}),e.jsx("div",{"aria-labelledby":"denhaag-anchor-collapse-label-focus",className:"denhaag-anchor-collapse__content",id:"denhaag-anchor-collapse-content-focus",role:"region",children:e.jsx("p",{className:"utrecht-paragraph",children:"Mauris non sagittis ipsum. Donec elementum libero at gravida ullamcorper. Suspendisse consequat gravida est, sed condimentum eros convallis vitae. Cras interdum ornare nisl id hendrerit. Curabitur ullamcorper vel nisi nec malesuada. Integer hendrerit urna ac tincidunt pellentesque. Curabitur laoreet, ipsum ac semper ornare, libero lacus pretium turpis, nec fermentum odio nulla sit amet nisi. In sed facilisis neque, vel maximus risus. Aliquam porttitor magna nec justo facilisis imperdiet. Fusce malesuada purus nec sem auctor pretium. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras malesuada condimentum convallis. Cras dignissim sit amet arcu non ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse auctor ex metus, quis gravida odio elementum sed."})})]})},i={render:()=>e.jsxs("section",{className:"denhaag-anchor-collapse",id:"hover",children:[e.jsxs("h2",{className:"denhaag-anchor-collapse__summary denhaag-anchor-collapse__summary--hover",children:[e.jsx("button",{"aria-controls":"denhaag-anchor-collapse-content-hover","aria-expanded":"false",className:"denhaag-anchor-collapse__toggle",id:"denhaag-anchor-collapse-label-hover",children:"In het kort"}),e.jsx("svg",{"aria-hidden":"true",width:"12",height:"8",viewBox:"0 0 12 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M5.4107 1.07806C5.73614 0.752625 6.26378 0.752625 6.58922 1.07806L11.5892 6.07806C11.9147 6.4035 11.9147 6.93114 11.5892 7.25657C11.2638 7.58201 10.7361 7.58201 10.4107 7.25657L5.99996 2.84583L1.58922 7.25657C1.26378 7.58201 0.736141 7.58201 0.410704 7.25657C0.0852667 6.93114 0.0852667 6.4035 0.410704 6.07806L5.4107 1.07806Z",fill:"currentColor"})})]}),e.jsx("div",{"aria-labelledby":"denhaag-anchor-collapse-label-hover",className:"denhaag-anchor-collapse__content",id:"denhaag-anchor-collapse-content-hover",role:"region",children:e.jsx("p",{className:"utrecht-paragraph",children:"Mauris non sagittis ipsum. Donec elementum libero at gravida ullamcorper. Suspendisse consequat gravida est, sed condimentum eros convallis vitae. Cras interdum ornare nisl id hendrerit. Curabitur ullamcorper vel nisi nec malesuada. Integer hendrerit urna ac tincidunt pellentesque. Curabitur laoreet, ipsum ac semper ornare, libero lacus pretium turpis, nec fermentum odio nulla sit amet nisi. In sed facilisis neque, vel maximus risus. Aliquam porttitor magna nec justo facilisis imperdiet. Fusce malesuada purus nec sem auctor pretium. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras malesuada condimentum convallis. Cras dignissim sit amet arcu non ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse auctor ex metus, quis gravida odio elementum sed."})})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <section className="denhaag-anchor-collapse" id="in-het-kort">
        <h2 className="denhaag-anchor-collapse__summary">
          <button aria-controls="denhaag-anchor-collapse-content-in-het-kort" aria-expanded="false" className="denhaag-anchor-collapse__toggle" id="denhaag-anchor-collapse-label-in-het-kort">
            In het kort
          </button>
          <svg aria-hidden="true" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.4107 1.07806C5.73614 0.752625 6.26378 0.752625 6.58922 1.07806L11.5892 6.07806C11.9147 6.4035 11.9147 6.93114 11.5892 7.25657C11.2638 7.58201 10.7361 7.58201 10.4107 7.25657L5.99996 2.84583L1.58922 7.25657C1.26378 7.58201 0.736141 7.58201 0.410704 7.25657C0.0852667 6.93114 0.0852667 6.4035 0.410704 6.07806L5.4107 1.07806Z" fill="currentColor" />
          </svg>
        </h2>
        <div aria-labelledby="denhaag-anchor-collapse-label-in-het-kort" className="denhaag-anchor-collapse__content" id="denhaag-anchor-collapse-content-in-het-kort" role="region">
          <p className="utrecht-paragraph">
            Mauris non sagittis ipsum. Donec elementum libero at gravida ullamcorper. Suspendisse consequat gravida est,
            sed condimentum eros convallis vitae. Cras interdum ornare nisl id hendrerit. Curabitur ullamcorper vel nisi
            nec malesuada. Integer hendrerit urna ac tincidunt pellentesque. Curabitur laoreet, ipsum ac semper ornare,
            libero lacus pretium turpis, nec fermentum odio nulla sit amet nisi. In sed facilisis neque, vel maximus
            risus. Aliquam porttitor magna nec justo facilisis imperdiet. Fusce malesuada purus nec sem auctor pretium.
            Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras malesuada condimentum convallis. Cras
            dignissim sit amet arcu non ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            auctor ex metus, quis gravida odio elementum sed.
          </p>
        </div>
      </section>
      <section className="denhaag-anchor-collapse" id="voorwaarden">
        <h2 className="denhaag-anchor-collapse__summary">
          <button aria-controls="denhaag-anchor-collapse-content-voorwaarden" aria-expanded="false" className="denhaag-anchor-collapse__toggle" id="denhaag-anchor-collapse-label-voorwaarden">
            Voorwaarden
          </button>
          <svg aria-hidden="true" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.4107 1.07806C5.73614 0.752625 6.26378 0.752625 6.58922 1.07806L11.5892 6.07806C11.9147 6.4035 11.9147 6.93114 11.5892 7.25657C11.2638 7.58201 10.7361 7.58201 10.4107 7.25657L5.99996 2.84583L1.58922 7.25657C1.26378 7.58201 0.736141 7.58201 0.410704 7.25657C0.0852667 6.93114 0.0852667 6.4035 0.410704 6.07806L5.4107 1.07806Z" fill="currentColor" />
          </svg>
        </h2>
        <div aria-labelledby="denhaag-anchor-collapse-label-voorwaarden" className="denhaag-anchor-collapse__content" id="denhaag-anchor-collapse-content-voorwaarden" role="region">
          <p className="utrecht-paragraph">
            Mauris non sagittis ipsum. Donec elementum libero at gravida ullamcorper. Suspendisse consequat gravida est,
            sed condimentum eros convallis vitae. Cras interdum ornare nisl id hendrerit. Curabitur ullamcorper vel nisi
            nec malesuada. Integer hendrerit urna ac tincidunt pellentesque. Curabitur laoreet, ipsum ac semper ornare,
            libero lacus pretium turpis, nec fermentum odio nulla sit amet nisi. In sed facilisis neque, vel maximus
            risus. Aliquam porttitor magna nec justo facilisis imperdiet. Fusce malesuada purus nec sem auctor pretium.
            Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras malesuada condimentum convallis. Cras
            dignissim sit amet arcu non ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            auctor ex metus, quis gravida odio elementum sed.
          </p>
        </div>
      </section>
      <section className="denhaag-anchor-collapse" id="process">
        <h2 className="denhaag-anchor-collapse__summary">
          <button aria-controls="denhaag-anchor-collapse-content-process" aria-expanded="false" className="denhaag-anchor-collapse__toggle" id="denhaag-anchor-collapse-label-process">
            Process
          </button>
          <svg aria-hidden="true" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.4107 1.07806C5.73614 0.752625 6.26378 0.752625 6.58922 1.07806L11.5892 6.07806C11.9147 6.4035 11.9147 6.93114 11.5892 7.25657C11.2638 7.58201 10.7361 7.58201 10.4107 7.25657L5.99996 2.84583L1.58922 7.25657C1.26378 7.58201 0.736141 7.58201 0.410704 7.25657C0.0852667 6.93114 0.0852667 6.4035 0.410704 6.07806L5.4107 1.07806Z" fill="currentColor" />
          </svg>
        </h2>
        <div aria-labelledby="denhaag-anchor-collapse-label-process" className="denhaag-anchor-collapse__content" role="region" id="denhaag-anchor-collapse-content-process">
          <p className="utrecht-paragraph">
            Mauris non sagittis ipsum. Donec elementum libero at gravida ullamcorper. Suspendisse consequat gravida est,
            sed condimentum eros convallis vitae. Cras interdum ornare nisl id hendrerit. Curabitur ullamcorper vel nisi
            nec malesuada. Integer hendrerit urna ac tincidunt pellentesque. Curabitur laoreet, ipsum ac semper ornare,
            libero lacus pretium turpis, nec fermentum odio nulla sit amet nisi. In sed facilisis neque, vel maximus
            risus. Aliquam porttitor magna nec justo facilisis imperdiet. Fusce malesuada purus nec sem auctor pretium.
            Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras malesuada condimentum convallis. Cras
            dignissim sit amet arcu non ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            auctor ex metus, quis gravida odio elementum sed.
          </p>
        </div>
      </section>
      <section className="denhaag-anchor-collapse" id="kosten">
        <h2 className="denhaag-anchor-collapse__summary">
          <button aria-controls="denhaag-anchor-collapse-content-kosten" aria-expanded="false" className="denhaag-anchor-collapse__toggle" id="denhaag-anchor-collapse-label-kosten">
            Kosten
          </button>
          <svg aria-hidden="true" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.4107 1.07806C5.73614 0.752625 6.26378 0.752625 6.58922 1.07806L11.5892 6.07806C11.9147 6.4035 11.9147 6.93114 11.5892 7.25657C11.2638 7.58201 10.7361 7.58201 10.4107 7.25657L5.99996 2.84583L1.58922 7.25657C1.26378 7.58201 0.736141 7.58201 0.410704 7.25657C0.0852667 6.93114 0.0852667 6.4035 0.410704 6.07806L5.4107 1.07806Z" fill="currentColor" />
          </svg>
        </h2>
        <div aria-labelledby="denhaag-anchor-collapse-label-kosten" className="denhaag-anchor-collapse__content" role="region" id="denhaag-anchor-collapse-content-kosten">
          <p className="utrecht-paragraph">
            Mauris non sagittis ipsum. Donec elementum libero at gravida ullamcorper. Suspendisse consequat gravida est,
            sed condimentum eros convallis vitae. Cras interdum ornare nisl id hendrerit. Curabitur ullamcorper vel nisi
            nec malesuada. Integer hendrerit urna ac tincidunt pellentesque. Curabitur laoreet, ipsum ac semper ornare,
            libero lacus pretium turpis, nec fermentum odio nulla sit amet nisi. In sed facilisis neque, vel maximus
            risus. Aliquam porttitor magna nec justo facilisis imperdiet. Fusce malesuada purus nec sem auctor pretium.
            Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras malesuada condimentum convallis. Cras
            dignissim sit amet arcu non ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            auctor ex metus, quis gravida odio elementum sed.
          </p>
        </div>
      </section>
      <section className="denhaag-anchor-collapse" id="aanvragen">
        <h2 className="denhaag-anchor-collapse__summary">
          <button aria-expanded="false" aria-controls="denhaag-anchor-collapse-content-aanvragen" className="denhaag-anchor-collapse__toggle" id="denhaag-anchor-collapse-label-aanvragen">
            Aanvragen
          </button>
          <svg aria-hidden="true" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.4107 1.07806C5.73614 0.752625 6.26378 0.752625 6.58922 1.07806L11.5892 6.07806C11.9147 6.4035 11.9147 6.93114 11.5892 7.25657C11.2638 7.58201 10.7361 7.58201 10.4107 7.25657L5.99996 2.84583L1.58922 7.25657C1.26378 7.58201 0.736141 7.58201 0.410704 7.25657C0.0852667 6.93114 0.0852667 6.4035 0.410704 6.07806L5.4107 1.07806Z" fill="currentColor" />
          </svg>
        </h2>
        <div aria-labelledby="denhaag-anchor-collapse-label-aanvragen" className="denhaag-anchor-collapse__content" role="region">
          <p className="utrecht-paragraph">
            Mauris non sagittis ipsum. Donec elementum libero at gravida ullamcorper. Suspendisse consequat gravida est,
            sed condimentum eros convallis vitae. Cras interdum ornare nisl id hendrerit. Curabitur ullamcorper vel nisi
            nec malesuada. Integer hendrerit urna ac tincidunt pellentesque. Curabitur laoreet, ipsum ac semper ornare,
            libero lacus pretium turpis, nec fermentum odio nulla sit amet nisi. In sed facilisis neque, vel maximus
            risus. Aliquam porttitor magna nec justo facilisis imperdiet. Fusce malesuada purus nec sem auctor pretium.
            Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras malesuada condimentum convallis. Cras
            dignissim sit amet arcu non ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            auctor ex metus, quis gravida odio elementum sed.
          </p>
        </div>
      </section>
      <section className="denhaag-anchor-collapse" id="veelgestelde-vragen">
        <h2 className="denhaag-anchor-collapse__summary">
          <button aria-controls="denhaag-anchor-collapse-content-veelgestelde-vragen" aria-expanded="false" className="denhaag-anchor-collapse__toggle" id="denhaag-anchor-collapse-label-veelgestelde-vragen">
            Veelgestelde vragen
          </button>
          <svg aria-hidden="true" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.4107 1.07806C5.73614 0.752625 6.26378 0.752625 6.58922 1.07806L11.5892 6.07806C11.9147 6.4035 11.9147 6.93114 11.5892 7.25657C11.2638 7.58201 10.7361 7.58201 10.4107 7.25657L5.99996 2.84583L1.58922 7.25657C1.26378 7.58201 0.736141 7.58201 0.410704 7.25657C0.0852667 6.93114 0.0852667 6.4035 0.410704 6.07806L5.4107 1.07806Z" fill="currentColor" />
          </svg>
        </h2>
        <div aria-labelledby="denhaag-anchor-collapse-label-veelgestelde-vragen" className="denhaag-anchor-collapse__content" role="region" id="denhaag-anchor-collapse-content-veelgestelde-vragen">
          <p className="utrecht-paragraph">
            Mauris non sagittis ipsum. Donec elementum libero at gravida ullamcorper. Suspendisse consequat gravida est,
            sed condimentum eros convallis vitae. Cras interdum ornare nisl id hendrerit. Curabitur ullamcorper vel nisi
            nec malesuada. Integer hendrerit urna ac tincidunt pellentesque. Curabitur laoreet, ipsum ac semper ornare,
            libero lacus pretium turpis, nec fermentum odio nulla sit amet nisi. In sed facilisis neque, vel maximus
            risus. Aliquam porttitor magna nec justo facilisis imperdiet. Fusce malesuada purus nec sem auctor pretium.
            Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras malesuada condimentum convallis. Cras
            dignissim sit amet arcu non ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            auctor ex metus, quis gravida odio elementum sed.
          </p>
        </div>
      </section>
    </>
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <section className="denhaag-anchor-collapse" id="focus">
      <h2 className="denhaag-anchor-collapse__summary denhaag-anchor-collapse__summary--focus">
        <button aria-controls="denhaag-anchor-collapse-content-focus" aria-expanded="false" className="denhaag-anchor-collapse__toggle" id="denhaag-anchor-collapse-label-focus">
          In het kort
        </button>
        <svg aria-hidden="true" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.4107 1.07806C5.73614 0.752625 6.26378 0.752625 6.58922 1.07806L11.5892 6.07806C11.9147 6.4035 11.9147 6.93114 11.5892 7.25657C11.2638 7.58201 10.7361 7.58201 10.4107 7.25657L5.99996 2.84583L1.58922 7.25657C1.26378 7.58201 0.736141 7.58201 0.410704 7.25657C0.0852667 6.93114 0.0852667 6.4035 0.410704 6.07806L5.4107 1.07806Z" fill="currentColor" />
        </svg>
      </h2>
      <div aria-labelledby="denhaag-anchor-collapse-label-focus" className="denhaag-anchor-collapse__content" id="denhaag-anchor-collapse-content-focus" role="region">
        <p className="utrecht-paragraph">
          Mauris non sagittis ipsum. Donec elementum libero at gravida ullamcorper. Suspendisse consequat gravida est,
          sed condimentum eros convallis vitae. Cras interdum ornare nisl id hendrerit. Curabitur ullamcorper vel nisi
          nec malesuada. Integer hendrerit urna ac tincidunt pellentesque. Curabitur laoreet, ipsum ac semper ornare,
          libero lacus pretium turpis, nec fermentum odio nulla sit amet nisi. In sed facilisis neque, vel maximus
          risus. Aliquam porttitor magna nec justo facilisis imperdiet. Fusce malesuada purus nec sem auctor pretium.
          Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras malesuada condimentum convallis. Cras
          dignissim sit amet arcu non ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          auctor ex metus, quis gravida odio elementum sed.
        </p>
      </div>
    </section>
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <section className="denhaag-anchor-collapse" id="hover">
      <h2 className="denhaag-anchor-collapse__summary denhaag-anchor-collapse__summary--hover">
        <button aria-controls="denhaag-anchor-collapse-content-hover" aria-expanded="false" className="denhaag-anchor-collapse__toggle" id="denhaag-anchor-collapse-label-hover">
          In het kort
        </button>
        <svg aria-hidden="true" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.4107 1.07806C5.73614 0.752625 6.26378 0.752625 6.58922 1.07806L11.5892 6.07806C11.9147 6.4035 11.9147 6.93114 11.5892 7.25657C11.2638 7.58201 10.7361 7.58201 10.4107 7.25657L5.99996 2.84583L1.58922 7.25657C1.26378 7.58201 0.736141 7.58201 0.410704 7.25657C0.0852667 6.93114 0.0852667 6.4035 0.410704 6.07806L5.4107 1.07806Z" fill="currentColor" />
        </svg>
      </h2>
      <div aria-labelledby="denhaag-anchor-collapse-label-hover" className="denhaag-anchor-collapse__content" id="denhaag-anchor-collapse-content-hover" role="region">
        <p className="utrecht-paragraph">
          Mauris non sagittis ipsum. Donec elementum libero at gravida ullamcorper. Suspendisse consequat gravida est,
          sed condimentum eros convallis vitae. Cras interdum ornare nisl id hendrerit. Curabitur ullamcorper vel nisi
          nec malesuada. Integer hendrerit urna ac tincidunt pellentesque. Curabitur laoreet, ipsum ac semper ornare,
          libero lacus pretium turpis, nec fermentum odio nulla sit amet nisi. In sed facilisis neque, vel maximus
          risus. Aliquam porttitor magna nec justo facilisis imperdiet. Fusce malesuada purus nec sem auctor pretium.
          Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras malesuada condimentum convallis. Cras
          dignissim sit amet arcu non ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          auctor ex metus, quis gravida odio elementum sed.
        </p>
      </div>
    </section>
}`,...i.parameters?.docs?.source}}};const h=["Default","Focus","Hover"];export{s as Default,r as Focus,i as Hover,h as __namedExportsOrder,m as default};
