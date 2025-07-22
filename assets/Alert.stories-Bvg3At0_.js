import{j as p}from"./iframe-B23N8OI0.js";import{A as m}from"./index-DoKgWodC.js";import{M as l}from"./index-CY9hynp2.js";import{r as d}from"./README-BteT48cG.js";import{P as u}from"./index-z9ZMaRu2.js";import"./index-CC0vyBzt.js";import"./index-DlnCYNzO.js";import"./index-BUcYIAef.js";const{action:i}=__STORYBOOK_MODULE_ACTIONS__,g={title:"Title",text:p.jsx(u,{children:"Here comes text. This text provides additional details and actionable steps the user can take."}),variant:"info"},W={id:"css-data-display-alert",title:"CSS/Data Display/Alert",component:m,args:g,tags:["autodocs"],parameters:{docs:{description:{component:d}}}},r={},a={args:{...r.args,variant:"success"}},s={args:{...r.args,variant:"warning"}},e={args:{...r.args,variant:"error"}},o={args:{...r.args,action:{buttonText:"Action",onClick:i("Action clicked")}}},t={args:{...r.args,close:i("Close clicked")}},c={args:{...r.args,action:{buttonText:"Action",onClick:i("Action clicked")},close:i("Close clicked")}},n={args:{...r.args,supportIcon:p.jsx(l,{})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    variant: 'success'
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    variant: 'warning'
  }
}`,...s.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    variant: 'error'
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    action: {
      buttonText: 'Action',
      onClick: action('Action clicked')
    }
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    close: action('Close clicked')
  }
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    action: {
      buttonText: 'Action',
      onClick: action('Action clicked')
    },
    close: action('Close clicked')
  }
}`,...c.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    supportIcon: <MegaphoneIcon />
  }
}`,...n.parameters?.docs?.source}}};const v=["Default","Success","Warning","Error","WithAction","WithClose","WithActionAndClose","WithCustomIcon"];export{r as Default,e as Error,a as Success,s as Warning,o as WithAction,c as WithActionAndClose,t as WithClose,n as WithCustomIcon,v as __namedExportsOrder,W as default};
