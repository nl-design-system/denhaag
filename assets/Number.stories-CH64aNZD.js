import{j as t}from"./iframe-Dv5namm0.js";import{S as n}from"./StoryUtil-BbKlxrJR.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DtdJImRr.js";import"./index-DSdvl8WE.js";import"./index-DnP3EjuV.js";import"./index-DiRdGcjG.js";import"./index-BPU1m3cq.js";import"./parseISO-BBPDwbcZ.js";import"./client-3eGs-4cy.js";const a={id:"open-forms-number",title:"Open Formulieren/Number",component:n,args:{key:"number",type:"number",label:"Nummer"}},e={render:r=>t.jsx(n,{...r})},o={render:r=>t.jsx(n,{...r}),args:{...a.args,extraComponentProperties:{prefix:"%"}}},s={render:r=>t.jsx(n,{...r}),args:{...a.args,extraComponentProperties:{suffix:"m<sup>3</sup>"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: args => <SingleFormioComponent {...args} />
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <SingleFormioComponent {...args} />,
  args: {
    ...meta.args,
    extraComponentProperties: {
      prefix: '%'
    }
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <SingleFormioComponent {...args} />,
  args: {
    ...meta.args,
    extraComponentProperties: {
      suffix: 'm<sup>3</sup>'
    }
  }
}`,...s.parameters?.docs?.source}}};const S=["Default","WithPrefix","WithSuffix"];export{e as Default,o as WithPrefix,s as WithSuffix,S as __namedExportsOrder,a as default};
