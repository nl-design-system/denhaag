import{j as e}from"./iframe-4dTl_QDg.js";import{f as a}from"./index-DNvBB-3D.js";import{I as r}from"./index-i10-XBB5.js";import{S as o,b as i,d as h}from"./index-CuFMLBq7.js";import{R as s}from"./index-Cbm4ZFEg.js";const c=`# Sheet

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
`,l={children:"Sheet"},f={id:"react-page-elements-sheet",title:"React/Page Elements/Sheet",component:o,args:l,tags:["autodocs"],parameters:{docs:{description:{component:c}}}},n={render:()=>e.jsx(o,{children:e.jsxs(s,{children:[e.jsx(r,{className:"denhaag-sheet__close-button",children:e.jsx(a,{})}),e.jsx(i,{children:"Content"})]})})},t={render:()=>e.jsx(h,{open:!0,children:e.jsx(s,{children:"Content"})})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <Sheet>
      <ResponsiveContent>
        <IconButton className="denhaag-sheet__close-button">
          <CloseIcon />
        </IconButton>
        <SheetContainer>Content</SheetContainer>
      </ResponsiveContent>
    </Sheet>
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <SheetDialog open>
      <ResponsiveContent>Content</ResponsiveContent>
    </SheetDialog>
}`,...t.parameters?.docs?.source}}};const S=["Default","MobileDialog"];export{n as Default,t as MobileDialog,S as __namedExportsOrder,f as default};
