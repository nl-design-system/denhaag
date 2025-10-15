import{j as e}from"./iframe-DkEPan55.js";import{a as i}from"./index-nLfDibq1.js";import{r as d}from"./README-Dc1QVyyv.js";import{t as p}from"./util-BFN5DM7N.js";import"./index-CfkOgNlH.js";import{B as u}from"./index-DXm311Ao.js";import"./index-1YeLOkj1.js";import"./index-D4N0sZOw.js";import"./parseISO-BBPDwbcZ.js";import"./index-OX4l9uOD.js";import"./index-CKyqRdbY.js";import"./index-DLU5N1Ul.js";import"./index-BecZjmQe.js";import"./index-CVfcjSwL.js";import"./index-DS3WZguw.js";const g={today:"vandaag",yesterday:"gisteren",before:"vóór",approachingDeadline:l=>l===1?`nog ${l} dag`:`nog ${l} dagen`},m={labels:g,children:e.jsx("strong",{children:"Taak"}),actions:e.jsx(u,{href:"#example",children:"Actie"})},w={component:i,args:m,tags:["autodocs"],parameters:{docs:{description:{component:d}}}},r={},a={args:{...r.args,actions:e.jsx(u,{href:"#example",className:"utrecht-button-link--hover",children:"Actie"})}},t={args:{...r.args,actions:e.jsx(u,{href:"#example",className:"utrecht-button-link--focus",children:"Actie"})}},s={args:{...r.args,dateTime:"2023-09-28T19:47:36.593Z",locale:p}},o={args:{...r.args,dateTime:"2023-10-02T19:47:36.593Z",now:"2023-09-28T19:47:36.593Z",locale:p,relativeDate:!0}},n={args:{...r.args,dateTime:"2023-09-30T19:47:36.593Z",now:"2023-09-28T19:47:36.593Z",locale:p,relativeDate:!0}},c={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(i,{...m}),e.jsx(i,{...m}),e.jsx(i,{...m})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    actions: <ButtonLink href="#example" className="utrecht-button-link--hover">
        Actie
      </ButtonLink>
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    actions: <ButtonLink href="#example" className="utrecht-button-link--focus">
        Actie
      </ButtonLink>
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    dateTime: '2023-09-28T19:47:36.593Z',
    locale: templateLocale
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    dateTime: '2023-10-02T19:47:36.593Z',
    now: '2023-09-28T19:47:36.593Z',
    locale: templateLocale,
    relativeDate: true
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    dateTime: '2023-09-30T19:47:36.593Z',
    now: '2023-09-28T19:47:36.593Z',
    locale: templateLocale,
    relativeDate: true
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <ActionMulti {...exampleArgs} />
      <ActionMulti {...exampleArgs} />
      <ActionMulti {...exampleArgs} />
    </>
}`,...c.parameters?.docs?.source}}};const M=["Default","Hover","Focus","WithDate","WithDateRelative","WithDateWarning","List"];export{r as Default,t as Focus,a as Hover,c as List,s as WithDate,o as WithDateRelative,n as WithDateWarning,M as __namedExportsOrder,w as default};
