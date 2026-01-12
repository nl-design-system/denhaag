import{j as t}from"./iframe-BB-mnPB5.js";import{S as n}from"./StoryUtil-COFPmBbm.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CKfJB4fn.js";import"./index-cEA3Pw3-.js";import"./index-CReC2tj4.js";import"./index-DzJqOXNp.js";import"./index-Ct8l3yA4.js";import"./parseISO-BBPDwbcZ.js";import"./client-C0PUb08O.js";const a={id:"open-forms-number",title:"Open Formulieren/Number",component:n,args:{key:"number",type:"number",label:"Nummer"}},e={render:r=>t.jsx(n,{...r})},o={render:r=>t.jsx(n,{...r}),args:{...a.args,extraComponentProperties:{prefix:"%"}}},s={render:r=>t.jsx(n,{...r}),args:{...a.args,extraComponentProperties:{suffix:"m<sup>3</sup>"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
