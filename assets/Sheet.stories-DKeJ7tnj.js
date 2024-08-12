import{j as o}from"./jsx-runtime-BlAj40OV.js";import{e as _}from"./index-DZxrVG7T.js";import{I as C}from"./index-BVoxstgy.js";import{R as d}from"./index-Cs7sjTYM.js";import{R as k}from"./index-D7lB6d1r.js";import"./_commonjsHelpers-BosuxZz1.js";var m=".denhaag-sheet{background-color:var(--denhaag-sheet-background-color);left:var(--denhaag-sheet-left);margin-block-start:var(--denhaag-sheet-margin-block-start);min-height:var(--denhaag-sheet-min-height);overflow-x:var(--denhaag-sheet-overflow-x);position:var(--denhaag-sheet-position);top:var(--denhaag-sheet-top);width:var(--denhaag-sheet-width);z-index:var(--denhaag-sheet-z-index)}.denhaag-sheet.denhaag-sheet--dialog{border:var(--denhaag-sheet-dialog-border);margin-block-start:var(--denhaag-sheet-dialog-margin-block-start);max-height:var(--denhaag-sheet-dialog-max-height);max-width:var(--denhaag-sheet-dialog-max-width);overflow-y:var(--denhaag-sheet-dialog-overflow-y);padding-block-end:var(--denhaag-sheet-dialog-padding-block-end);padding-block-start:var(--denhaag-sheet-dialog-padding-block-start);padding-inline-end:var(--denhaag-sheet-dialog-padding-inline-end);padding-inline-start:var(--denhaag-sheet-dialog-padding-inline-start);top:var(--denhaag-sheet-dialog-top)}.denhaag-sheet.denhaag-sheet--dialog::backdrop{top:var(--denhaag-sheet-dialog-backdrop-top)}@media (width >= 1024px){.denhaag-sheet{min-height:var(--denhaag-sheet-desktop-min-height);padding-block-start:var(--denhaag-sheet-desktop-padding-block-start);top:var(--denhaag-sheet-desktop-top)}}.denhaag-sheet__close-button{float:var(--denhaag-sheet-close-button-float)}.denhaag-sheet__container{margin-block-end:var(--denhaag-sheet-container-margin-block-end)}.denhaag-sheet__container-menu{display:var(--denhaag-sheet-container-menu-display)}.denhaag-sheet-overlay{background-color:var(--denhaag-sheet-overlay-background-color);height:var(--denhaag-sheet-overlay-height);left:var(--denhaag-sheet-overlay-left);position:var(--denhaag-sheet-overlay-position);top:calc(var(--denhaag-sheet-overlay-top) + var(--denhaag-sheet-margin-block-start));width:var(--denhaag-sheet-overlay-width);z-index:var(--denhaag-sheet-overlay-z-index)}@media (width >= 768px){.denhaag-sheet-overlay{top:calc(var(--denhaag-sheet-overlay-tablet-top) + var(--denhaag-sheet-margin-block-start))}}@media (width >= 1024px){.denhaag-sheet-overlay{top:calc(var(--denhaag-sheet-overlay-desktop-top) + var(--denhaag-sheet-margin-block-start))}}.denhaag-sheet .denhaag-sheet-title{--utrecht-paragraph-font-size:var(--denhaag-sheet-title-font-size);--utrecht-paragraph-font-weight:var(--denhaag-sheet-title-font-weight);--utrecht-paragraph-margin-block-end:var(--denhaag-sheet-title-margin-block-end)}";if(typeof document<"u"){const e=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css",a.nonce=window.NONCE,e.appendChild(a),a.styleSheet?a.styleSheet.cssText=m:a.appendChild(document.createTextNode(m))}var r=function(){return r=Object.assign||function(a){for(var n,t=1,s=arguments.length;t<s;t++){n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(a[l]=n[l])}return a},r.apply(this,arguments)};function x(e){var a,n,t="";if(typeof e=="string"||typeof e=="number")t+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(a=0;a<s;a++)e[a]&&(n=x(e[a]))&&(t&&(t+=" "),t+=n)}else for(n in e)e[n]&&(t&&(t+=" "),t+=n);return t}function c(){for(var e,a,n=0,t="",s=arguments.length;n<s;n++)(e=arguments[n])&&(a=x(e))&&(t&&(t+=" "),t+=a);return t}var g=function(e){var a=c("denhaag-sheet",e.className);return d.createElement("div",r({},e,{className:a}),e.children)},p=d.forwardRef(function(e,a){var n=c("denhaag-sheet denhaag-sheet--dialog",e.className);return d.createElement("dialog",r({},e,{className:n,ref:a}),e.children)});p.displayName="SheetDialog";var S=function(e){var a=c("denhaag-sheet__container",e.className);return d.createElement("div",r({},e,{className:a}),e.children)};g.__docgenInfo={description:"",methods:[],displayName:"Sheet"};S.__docgenInfo={description:"",methods:[],displayName:"SheetContainer"};p.__docgenInfo={description:"",methods:[],displayName:"SheetDialog"};const N=`# Sheet

## When to use

Use sheets when expanding menu links or when opening a function that will be hidden and shown on the same page. So you can use it to show the topics, for the language switcher or for the search.

## When not to use

Do not use sheets for other dropdowns than the ones in the menu.

## Anatomy

The Sheet consists of:

## (Interactive) states

The Sheet contains the states

## Design properties

### Typography

### Colors

### Structure

## Best practices

### Do's

The sheet uses the entire width of the screen.
Place the sheet under the menu. The menu must always remain visible.
Always offers a closing option of the sheet. This can be done with the cross or by clicking on everything outside the sheet.
Avoid scrolling in a sheet. Make sure the information is concise and if the content is long, the height of the sheet should be increased.
Horizontal scrolling in sheets is not possible.
Sheets can display a wide variety of content and layouts, ranging from a list of actions to additional content in a table.

### Don'ts

Tekst

## Content guidelines

## Accessibility

## References
`,D={children:"Sheet"},A={id:"react-page-elements-sheet",title:"React/Page Elements/Sheet",component:g,args:D,tags:["autodocs"],parameters:{docs:{description:{component:N}}}},h={render:()=>o.jsx(g,{children:o.jsxs(k,{children:[o.jsx(C,{className:"denhaag-sheet__close-button",children:o.jsx(_,{})}),o.jsx(S,{children:"Content"})]})})},i={render:()=>o.jsx(p,{open:!0,children:o.jsx(k,{children:"Content"})})};var v,u,f;h.parameters={...h.parameters,docs:{...(v=h.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <Sheet>
      <ResponsiveContent>
        <IconButton className="denhaag-sheet__close-button">
          <CloseIcon />
        </IconButton>
        <SheetContainer>Content</SheetContainer>
      </ResponsiveContent>
    </Sheet>
}`,...(f=(u=h.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var y,b,w;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <SheetDialog open>
      <ResponsiveContent>Content</ResponsiveContent>
    </SheetDialog>
}`,...(w=(b=i.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};const B=["Default","MobileDialog"];export{h as Default,i as MobileDialog,B as __namedExportsOrder,A as default};
