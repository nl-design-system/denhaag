import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{f as d}from"./index-C4DVoboI.js";import{I as p}from"./index-DzIAslfl.js";import{S as c,b as m,d as u}from"./index-ubpkgOCO.js";import{R as l}from"./index-D5_TYmUK.js";import"./index-raSRI-5R.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx-B-dksMZM.js";const g=`# Sheet

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
`,f={children:"Sheet"},j={id:"react-page-elements-sheet",title:"React/Page Elements/Sheet",component:c,args:f,tags:["autodocs"],parameters:{docs:{description:{component:g}}}},n={render:()=>e.jsx(c,{children:e.jsxs(l,{children:[e.jsx(p,{className:"denhaag-sheet__close-button",children:e.jsx(d,{})}),e.jsx(m,{children:"Content"})]})})},t={render:()=>e.jsx(u,{open:!0,children:e.jsx(l,{children:"Content"})})};var o,s,r;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <Sheet>
      <ResponsiveContent>
        <IconButton className="denhaag-sheet__close-button">
          <CloseIcon />
        </IconButton>
        <SheetContainer>Content</SheetContainer>
      </ResponsiveContent>
    </Sheet>
}`,...(r=(s=n.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};var a,i,h;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => <SheetDialog open>
      <ResponsiveContent>Content</ResponsiveContent>
    </SheetDialog>
}`,...(h=(i=t.parameters)==null?void 0:i.docs)==null?void 0:h.source}}};const R=["Default","MobileDialog"];export{n as Default,t as MobileDialog,R as __namedExportsOrder,j as default};
