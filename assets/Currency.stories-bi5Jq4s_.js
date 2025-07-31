import{j as t}from"./iframe-DCMBzG9p.js";import{S as a}from"./StoryUtil-DWr43nZb.js";const i={id:"open-forms-currency",title:"Open Formulieren/Currency",component:a,args:{type:"currency",extraComponentProperties:{currency:"EUR",decimalLimit:2,allowNegative:!1,defaultValue:5}}},e={render:o=>t.jsx(a,{...o})},r={render:o=>t.jsx(a,{...o}),args:{extraComponentProperties:{currency:"EUR",decimalLimit:2,allowNegative:!0,defaultValue:-100}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const m=["Default","AllowNegative"];export{r as AllowNegative,e as Default,m as __namedExportsOrder,i as default};
