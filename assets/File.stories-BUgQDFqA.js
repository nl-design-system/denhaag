import{j as s}from"./iframe-BQETwlMg.js";import{F as n}from"./index-Dfi94LHA.js";import{r as m}from"./README-Bv6Db_in.js";import"./index-5vx2ARGr.js";const c={name:"example3",href:"test.png",size:"2000",lastUpdated:"Thu Aug 31 2023 11:22:11 GMT+0200"},g={id:"css-surfaces-files",title:"CSS/Surfaces/Files",component:n,args:c,tags:["autodocs"],parameters:{docs:{description:{component:m}}}},e={},r={args:{...e.args,className:"denhaag-file--hover"}},a={args:{...e.args,className:"denhaag-file--focus"}},o={args:{...e.args,onClick:l=>{l.preventDefault(),console.log("File clicked")}}},t={render:()=>s.jsxs(s.Fragment,{children:[s.jsx(n,{...c}),s.jsx(n,{...c}),s.jsx(n,{...c})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    className: 'denhaag-file--hover'
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    className: 'denhaag-file--focus'
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    onClick: event => {
      event.preventDefault();
      console.log('File clicked');
    }
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <File {...exampleArgs} />
      <File {...exampleArgs} />
      <File {...exampleArgs} />
    </>
}`,...t.parameters?.docs?.source}}};const f=["Default","Hover","Focus","Button","List"];export{o as Button,e as Default,a as Focus,r as Hover,t as List,f as __namedExportsOrder,g as default};
