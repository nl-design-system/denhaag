import{j as t}from"./iframe-BdcjkhQY.js";import{S as n}from"./StoryUtil-D-Q8urYR.js";import"./index-CvcFpDoe.js";import"./index-BtZ2g4ms.js";import"./index-2RmeZ8m9.js";import"./index-AQOdSPqL.js";import"./index-BQQSnCvL.js";import"./parseISO-BBPDwbcZ.js";import"./client-CrAYCcWh.js";const a={id:"open-forms-number",title:"Open Formulieren/Number",component:n,args:{key:"number",type:"number",label:"Nummer"}},e={render:r=>t.jsx(n,{...r})},o={render:r=>t.jsx(n,{...r}),args:{...a.args,extraComponentProperties:{prefix:"%"}}},s={render:r=>t.jsx(n,{...r}),args:{...a.args,extraComponentProperties:{suffix:"m<sup>3</sup>"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const l=["Default","WithPrefix","WithSuffix"];export{e as Default,o as WithPrefix,s as WithSuffix,l as __namedExportsOrder,a as default};
