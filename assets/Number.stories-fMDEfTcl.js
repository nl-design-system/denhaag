import{j as t}from"./iframe-StdiXSPA.js";import{S as n}from"./StoryUtil-CCftyKjb.js";import"./index-BmtovwrE.js";import"./parseISO-BBPDwbcZ.js";import"./index-CAeXHyWp.js";import"./client-DxRRjWUX.js";import"./index-DM1e1wC1.js";import"./index-DVnXMkbe.js";import"./index-DuWawXk9.js";import"./index-CVNUbTBG.js";import"./index-D5cgg07W.js";const a={id:"open-forms-number",title:"Open Formulieren/Number",component:n,args:{key:"number",type:"number",label:"Nummer"}},e={render:r=>t.jsx(n,{...r})},o={render:r=>t.jsx(n,{...r}),args:{...a.args,extraComponentProperties:{prefix:"%"}}},s={render:r=>t.jsx(n,{...r}),args:{...a.args,extraComponentProperties:{suffix:"m<sup>3</sup>"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const C=["Default","WithPrefix","WithSuffix"];export{e as Default,o as WithPrefix,s as WithSuffix,C as __namedExportsOrder,a as default};
