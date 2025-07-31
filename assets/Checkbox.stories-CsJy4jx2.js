import{j as n}from"./iframe-DX91hpwz.js";import{S as a}from"./StoryUtil-C8HYAl8B.js";const m={id:"open-forms-checkbox",title:"Open Formulieren/Checkbox",component:a,args:{key:"checkbox",type:"checkbox",label:"Ik heb de voorwaarden gelezen en ga hiermee akkoord."}},e={render:o=>n.jsx(a,{...o})},r={render:o=>n.jsx(a,{extraComponentProperties:{validate:{required:!0}},...o})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: args => <SingleFormioComponent {...args} />
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => <SingleFormioComponent extraComponentProperties={{
    validate: {
      required: true
    }
  }} {...args} />
}`,...r.parameters?.docs?.source}}};const i=["Default","Required"];export{e as Default,r as Required,i as __namedExportsOrder,m as default};
