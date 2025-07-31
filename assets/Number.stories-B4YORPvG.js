import{j as a}from"./iframe-DX91hpwz.js";import{S as n}from"./StoryUtil-C8HYAl8B.js";const t={id:"open-forms-number",title:"Open Formulieren/Number",component:n,args:{key:"number",type:"number",label:"Nummer"}},e={render:r=>a.jsx(n,{...r})},s={render:r=>a.jsx(n,{...r}),args:{...t.args,extraComponentProperties:{prefix:"%"}}},o={render:r=>a.jsx(n,{...r}),args:{...t.args,extraComponentProperties:{suffix:"m<sup>3</sup>"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: args => <SingleFormioComponent {...args} />
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <SingleFormioComponent {...args} />,
  args: {
    ...meta.args,
    extraComponentProperties: {
      prefix: '%'
    }
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <SingleFormioComponent {...args} />,
  args: {
    ...meta.args,
    extraComponentProperties: {
      suffix: 'm<sup>3</sup>'
    }
  }
}`,...o.parameters?.docs?.source}}};const i=["Default","WithPrefix","WithSuffix"];export{e as Default,s as WithPrefix,o as WithSuffix,i as __namedExportsOrder,t as default};
