import{j as e}from"./iframe-DX91hpwz.js";import{a as i}from"./index-BIz6rHKP.js";import{r as d}from"./README-Dc1QVyyv.js";import{t as p}from"./util-CNcKgyZJ.js";import"./index-xV861mwJ.js";import{B as u}from"./index-DpLH9mzN.js";import"./index-C3zJwTei.js";import"./index-aEBAu-RN.js";import"./index-DoLZFCuV.js";import"./index-NmUhPAeE.js";import"./index-BzA6FFxk.js";import"./index-BzvFAvnS.js";import"./index-BpG4Kueh.js";const g={today:"vandaag",yesterday:"gisteren",before:"vóór",approachingDeadline:l=>l===1?`nog ${l} dag`:`nog ${l} dagen`},m={labels:g,children:e.jsx("strong",{children:"Taak"}),actions:e.jsx(u,{href:"#example",children:"Actie"})},b={id:"react-actions-action-multiple",title:"React/Actions/Action Multiple",component:i,args:m,tags:["autodocs"],parameters:{docs:{description:{component:d}}}},a={},r={args:{...a.args,actions:e.jsx(u,{href:"#example",className:"utrecht-button-link--hover",children:"Actie"})}},t={args:{...a.args,actions:e.jsx(u,{href:"#example",className:"utrecht-button-link--focus",children:"Actie"})}},s={args:{...a.args,dateTime:"2023-09-28T19:47:36.593Z",locale:p}},o={args:{...a.args,dateTime:"2023-10-02T19:47:36.593Z",now:"2023-09-28T19:47:36.593Z",locale:p,relativeDate:!0}},n={args:{...a.args,dateTime:"2023-09-30T19:47:36.593Z",now:"2023-09-28T19:47:36.593Z",locale:p,relativeDate:!0}},c={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(i,{...m}),e.jsx(i,{...m}),e.jsx(i,{...m})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const B=["Default","Hover","Focus","WithDate","WithDateRelative","WithDateWarning","List"];export{a as Default,t as Focus,r as Hover,c as List,s as WithDate,o as WithDateRelative,n as WithDateWarning,B as __namedExportsOrder,b as default};
