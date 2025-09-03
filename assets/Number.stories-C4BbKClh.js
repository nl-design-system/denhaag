import{j as t}from"./iframe-B9evIzMJ.js";import{S as n}from"./StoryUtil-BQ2MW7SA.js";import"./index-DVGKGs5P.js";import"./index-BUgUJ10a.js";import"./index-B42ZlsGA.js";import"./index-DGvpBywi.js";import"./index-CU97bVRA.js";import"./parseISO-BBPDwbcZ.js";import"./client-O0UyEPVa.js";const a={id:"open-forms-number",title:"Open Formulieren/Number",component:n,args:{key:"number",type:"number",label:"Nummer"}},e={render:r=>t.jsx(n,{...r})},o={render:r=>t.jsx(n,{...r}),args:{...a.args,extraComponentProperties:{prefix:"%"}}},s={render:r=>t.jsx(n,{...r}),args:{...a.args,extraComponentProperties:{suffix:"m<sup>3</sup>"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
