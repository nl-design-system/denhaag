import{D as c}from"./index-wDVNM25j.js";import"./iframe-CjxiqWLD.js";import"./preload-helper-PPVm8Dsz.js";const u=`# Data Badge

Label met extra informatie, zoals een categorie of een eigenschap.<br /><sub>Ook bekend als: Tag, Label en Badge.</sub>

## References

[https://nldesignsystem.nl/data-badge](https://nldesignsystem.nl/data-badge)
`,d={component:c,tags:["autodocs"],argTypes:{value:{type:"string",control:{type:"text"}},dateTime:{type:"string",control:{type:"text"}},status:{type:"string",options:[void 0,"neutral","success","warning","error"],control:{type:"select"}}},parameters:{docs:{description:{component:u}}}},e={args:{children:"Label"}},a={args:{...e.args,value:"value"}},r={args:{...e.args,dateTime:"2023-10-01"}},s={args:{...e.args,status:"neutral"}},t={args:{...e.args,status:"success"}},n={args:{...e.args,status:"warning"}},o={args:{...e.args,status:"error"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Label'
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    value: 'value'
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    dateTime: '2023-10-01'
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    status: 'neutral'
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    status: 'success'
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    status: 'warning'
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    status: 'error'
  }
}`,...o.parameters?.docs?.source}}};const l=["Default","Value","DateTime","Neutral","Success","Warning","Error"];export{r as DateTime,e as Default,o as Error,s as Neutral,t as Success,a as Value,n as Warning,l as __namedExportsOrder,d as default};
