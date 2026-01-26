import{D as c}from"./index-D3mMUNLr.js";import"./iframe-DQBiwy74.js";import"./preload-helper-PPVm8Dsz.js";const g=`<!-- @license CC0-1.0 -->

# Data Badge

[![npm version](https://img.shields.io/npm/v/@gemeente-denhaag/data-badge.svg)](https://www.npmjs.com/package/@gemeente-denhaag/data-badge)

Label met extra informatie, zoals een categorie of een eigenschap.<br /><sub>Ook bekend als: Tag, Label en Badge.</sub>

## References

[https://nldesignsystem.nl/data-badge](https://nldesignsystem.nl/data-badge)
`,d={component:c,tags:["autodocs"],argTypes:{value:{type:"string",control:{type:"text"}},dateTime:{type:"string",control:{type:"text"}},status:{type:"string",options:[void 0,"neutral","success","warning","error"],control:{type:"select"}}},parameters:{docs:{description:{component:g}}}},e={args:{children:"Label"}},a={args:{...e.args,value:"value"}},s={args:{...e.args,dateTime:"2023-10-01"}},r={args:{...e.args,status:"neutral"}},t={args:{...e.args,status:"success"}},n={args:{...e.args,status:"warning"}},o={args:{...e.args,status:"error"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Label'
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    value: 'value'
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    dateTime: '2023-10-01'
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    status: 'neutral'
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const i=["Default","Value","DateTime","Neutral","Success","Warning","Error"];export{s as DateTime,e as Default,o as Error,r as Neutral,t as Success,a as Value,n as Warning,i as __namedExportsOrder,d as default};
