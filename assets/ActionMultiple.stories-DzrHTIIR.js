import{j as e}from"./iframe-BXjMMOGN.js";import{A as m}from"./index-DjrYlWGV.js";import{r as g}from"./README-CXdUp0K7.js";import{t as u}from"./util-Bx5-P4ye.js";import"./index-C_8RJ9iZ.js";import{D as h}from"./index-EvpzQzyg.js";import{B as d}from"./index-CUS0dGuM.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BkiBEr9m.js";import"./index-D4N0sZOw.js";import"./parseISO-BBPDwbcZ.js";import"./index-qyOv6NKy.js";import"./index-COK_46iA.js";import"./index-BxQZ4t-L.js";import"./index-DAUd55il.js";import"./index-Cssu6nGO.js";const x={today:"vandaag",yesterday:"gisteren",before:"vóór",approachingDeadline:p=>p===1?`nog ${p} dag`:`nog ${p} dagen`},l={labels:x,children:e.jsx("strong",{children:"Taak"}),actions:e.jsx(d,{href:"#example",children:"Actie"})},F={component:m,args:l,tags:["autodocs"],parameters:{docs:{description:{component:g}}}},a={},r={args:{...a.args,actions:e.jsx(d,{href:"#example",className:"utrecht-button-link--hover",children:"Actie"})}},t={args:{...a.args,actions:e.jsx(d,{href:"#example",className:"utrecht-button-link--focus",children:"Actie"})}},s={args:{...a.args,details:e.jsx(h,{status:"neutral",children:"Test"})}},o={args:{...a.args,dateTime:"2023-09-28T19:47:36.593Z",locale:u}},n={args:{...a.args,dateTime:"2023-10-02T19:47:36.593Z",now:"2023-09-28T19:47:36.593Z",locale:u,relativeDate:!0}},c={args:{...a.args,dateTime:"2023-09-30T19:47:36.593Z",now:"2023-09-28T19:47:36.593Z",locale:u,relativeDate:!0}},i={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(m,{...l}),e.jsx(m,{...l}),e.jsx(m,{...l})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    actions: <ButtonLink href="#example" className="utrecht-button-link--hover">
        Actie
      </ButtonLink>
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    actions: <ButtonLink href="#example" className="utrecht-button-link--focus">
        Actie
      </ButtonLink>
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    details: <DataBadge status="neutral">Test</DataBadge>
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    dateTime: '2023-09-28T19:47:36.593Z',
    locale: templateLocale
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    dateTime: '2023-10-02T19:47:36.593Z',
    now: '2023-09-28T19:47:36.593Z',
    locale: templateLocale,
    relativeDate: true
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    dateTime: '2023-09-30T19:47:36.593Z',
    now: '2023-09-28T19:47:36.593Z',
    locale: templateLocale,
    relativeDate: true
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <ActionMulti {...exampleArgs} />
      <ActionMulti {...exampleArgs} />
      <ActionMulti {...exampleArgs} />
    </>
}`,...i.parameters?.docs?.source}}};const R=["Default","Hover","Focus","WithBadge","WithDate","WithDateRelative","WithDateWarning","List"];export{a as Default,t as Focus,r as Hover,i as List,s as WithBadge,o as WithDate,n as WithDateRelative,c as WithDateWarning,R as __namedExportsOrder,F as default};
