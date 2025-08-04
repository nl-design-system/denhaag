import{j as p}from"./iframe-9DaEeA2g.js";import{A as m}from"./index-ponJbAtj.js";import{M as l}from"./index-CG5I4Nev.js";import{r as d}from"./README-BteT48cG.js";import{P as u}from"./index-DLHtb3IO.js";import"./index-DhpL-3rx.js";import"./index-nsw7cqJi.js";import"./index-J_77Z2fB.js";const{action:i}=__STORYBOOK_MODULE_ACTIONS__,g={title:"Title",text:p.jsx(u,{children:"Here comes text. This text provides additional details and actionable steps the user can take."}),variant:"info"},W={id:"react-data-display-alert",title:"React/Data Display/Alert",component:m,args:g,tags:["autodocs"],parameters:{docs:{description:{component:d}}}},r={},a={args:{...r.args,variant:"success"}},e={args:{...r.args,variant:"warning"}},s={args:{...r.args,variant:"error"}},o={args:{...r.args,action:{buttonText:"Action",onClick:i("Action clicked")}}},t={args:{...r.args,close:i("Close clicked")}},c={args:{...r.args,action:{buttonText:"Action",onClick:i("Action clicked")},close:i("Close clicked")}},n={args:{...r.args,supportIcon:p.jsx(l,{})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    variant: 'success'
  }
}`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    variant: 'warning'
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    variant: 'error'
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const v=["Default","Success","Warning","Error","WithAction","WithClose","WithActionAndClose","WithCustomIcon"];export{r as Default,s as Error,a as Success,e as Warning,o as WithAction,c as WithActionAndClose,t as WithClose,n as WithCustomIcon,v as __namedExportsOrder,W as default};
