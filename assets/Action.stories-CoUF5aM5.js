import{j as a}from"./iframe-CjxiqWLD.js";import{b as l}from"./index-5B5gLx5S.js";import{t as d}from"./list-BDsZGC77.js";import{r as u}from"./README-Dc1QVyyv.js";import{t as p}from"./util-pnoCyeK8.js";import{D as h}from"./index-wDVNM25j.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Rgw8xvhv.js";import"./index-D4N0sZOw.js";import"./parseISO-BBPDwbcZ.js";import"./index-CiwjDjqe.js";const x={action:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"font-family":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"*",inherits:!0}},type:"fontFamilies"},"font-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"fontSizes"},"font-weight":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"fontWeights"},"line-height":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"lineHeights"}}},f={denhaag:x},y={today:"vandaag",yesterday:"gisteren",before:"vóór",approachingDeadline:g=>g===1?`nog ${g} dag`:`nog ${g} dagen`},m={children:a.jsx("strong",{children:"Taak"}),link:"#example",labels:y},w={component:l,args:m,tags:["autodocs"],parameters:{docs:{description:{component:u}},tokensPrefix:"denhaag-action",tokensDefinition:f,tokens:d}},e={},s={args:{...e.args,className:"denhaag-action--hover"}},r={args:{...e.args,className:"denhaag-action--focus"}},t={args:{...e.args,details:a.jsx(h,{status:"neutral",children:"Test"})}},n={args:{...e.args,dateTime:"2023-09-28T19:47:36.593Z",locale:p}},o={args:{...e.args,dateTime:"2023-10-02T19:47:36.593Z",now:"2023-09-28T19:47:36.593Z",locale:p,relativeDate:!0}},i={args:{...e.args,dateTime:"2023-09-30T19:47:36.593Z",now:"2023-09-28T19:47:36.593Z",locale:p,relativeDate:!0}},c={render:()=>a.jsxs(a.Fragment,{children:[a.jsx(l,{...m}),a.jsx(l,{...m}),a.jsx(l,{...m})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    className: 'denhaag-action--hover'
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    className: 'denhaag-action--focus'
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    details: <DataBadge status="neutral">Test</DataBadge>
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    dateTime: '2023-09-28T19:47:36.593Z',
    locale: templateLocale
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    dateTime: '2023-10-02T19:47:36.593Z',
    now: '2023-09-28T19:47:36.593Z',
    locale: templateLocale,
    relativeDate: true
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    dateTime: '2023-09-30T19:47:36.593Z',
    now: '2023-09-28T19:47:36.593Z',
    locale: templateLocale,
    relativeDate: true
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <ActionSingle {...exampleArgs} />
      <ActionSingle {...exampleArgs} />
      <ActionSingle {...exampleArgs} />
    </>
}`,...c.parameters?.docs?.source}}};const B=["Default","Hover","Focus","WithBadge","WithDate","WithDateRelative","WithDateWarning","List"];export{e as Default,r as Focus,s as Hover,c as List,t as WithBadge,n as WithDate,o as WithDateRelative,i as WithDateWarning,B as __namedExportsOrder,w as default};
