import{j as m}from"./iframe-DY871a0d.js";import{A as p}from"./index-ChDCZn6M.js";import{M as d}from"./index-DAVlL1I4.js";import{r as u}from"./README-BteT48cG.js";import{P as g}from"./index-C0LYj_v2.js";import"./index-oX55UuvN.js";import"./index-D9U9sER1.js";import"./index-D4dGw257.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,h={title:"Title",text:m.jsx(g,{children:"Here comes text. This text provides additional details and actionable steps the user can take."}),variant:"info"},v={id:"react-data-display-alert",title:"React/Data Display/Alert",component:p,args:h,tags:["autodocs"],parameters:{docs:{description:{component:u}}}},e={},r={args:{...e.args,variant:"success"}},a={args:{...e.args,variant:"warning"}},t={args:{...e.args,variant:"error"}},s={args:{...e.args,action:{buttonText:"Action",onClick:l("Action clicked")}}},o={args:{...e.args,close:l("Close clicked")}},n={args:{...e.args,action:{buttonText:"Action",onClick:l("Action clicked")},close:l("Close clicked")}},c={args:{...e.args,supportIcon:m.jsx(d,{})}},i={args:{...e.args,title:"This is a very long title that should be truncated if it exceeds the maximum width of the alert component",text:void 0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    variant: 'success'
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    variant: 'warning'
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    variant: 'error'
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    action: {
      buttonText: 'Action',
      onClick: action('Action clicked')
    }
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    close: action('Close clicked')
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    action: {
      buttonText: 'Action',
      onClick: action('Action clicked')
    },
    close: action('Close clicked')
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    supportIcon: <MegaphoneIcon />
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    title: 'This is a very long title that should be truncated if it exceeds the maximum width of the alert component',
    text: undefined
  }
}`,...i.parameters?.docs?.source}}};const W=["Default","Success","Warning","Error","WithAction","WithClose","WithActionAndClose","WithCustomIcon","TitleOnly"];export{e as Default,t as Error,r as Success,i as TitleOnly,a as Warning,s as WithAction,n as WithActionAndClose,o as WithClose,c as WithCustomIcon,W as __namedExportsOrder,v as default};
