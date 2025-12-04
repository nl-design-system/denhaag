import{j as a}from"./iframe-StdiXSPA.js";import{S as t}from"./StoryUtil-CCftyKjb.js";import"./index-BmtovwrE.js";import"./parseISO-BBPDwbcZ.js";import"./index-CAeXHyWp.js";import"./client-DxRRjWUX.js";import"./index-DM1e1wC1.js";import"./index-DVnXMkbe.js";import"./index-DuWawXk9.js";import"./index-CVNUbTBG.js";import"./index-D5cgg07W.js";const x={id:"open-forms-currency",title:"Open Formulieren/Currency",component:t,args:{type:"currency",extraComponentProperties:{currency:"EUR",decimalLimit:2,allowNegative:!1,defaultValue:5}}},e={render:o=>a.jsx(t,{...o})},r={render:o=>a.jsx(t,{...o}),args:{extraComponentProperties:{currency:"EUR",decimalLimit:2,allowNegative:!0,defaultValue:-100}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: args => <SingleFormioComponent {...args} />
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => <SingleFormioComponent {...args} />,
  args: {
    extraComponentProperties: {
      currency: 'EUR',
      decimalLimit: 2,
      allowNegative: true,
      defaultValue: -100
    }
  }
}`,...r.parameters?.docs?.source}}};const y=["Default","AllowNegative"];export{r as AllowNegative,e as Default,y as __namedExportsOrder,x as default};
