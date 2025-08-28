import{j as l}from"./iframe-4dTl_QDg.js";import{A as m}from"./index-Dw4cEeWC.js";import{M as d}from"./index-DNvBB-3D.js";import{r as u}from"./README-BteT48cG.js";import{P as g}from"./index-xIVIE3QE.js";import"./index-Bmi6vd8I.js";import"./index-D-6k0JG8.js";import"./index-i10-XBB5.js";const{action:p}=__STORYBOOK_MODULE_ACTIONS__,A={title:"Title",text:l.jsx(g,{children:"Here comes text. This text provides additional details and actionable steps the user can take."}),variant:"info"},W={id:"css-data-display-alert",title:"CSS/Data Display/Alert",component:m,args:A,tags:["autodocs"],parameters:{docs:{description:{component:u}}}},r={},a={args:{...r.args,variant:"success"}},e={args:{...r.args,variant:"warning"}},s={args:{...r.args,variant:"error"}},o={args:{...r.args,action:{buttonText:"Action",onClick:p("Action clicked")}}},t={args:{...r.args,close:p("Close clicked")}},n={args:{...r.args,action:{buttonText:"Action",onClick:p("Action clicked")},close:p("Close clicked")}},c={args:{...r.args,supportIcon:l.jsx(d,{})}},i={args:{...r.args,text:void 0}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
    text: undefined
  }
}`,...i.parameters?.docs?.source}}};const v=["Default","Success","Warning","Error","WithAction","WithClose","WithActionAndClose","WithCustomIcon","TitleOnly"];export{r as Default,s as Error,a as Success,i as TitleOnly,e as Warning,o as WithAction,n as WithActionAndClose,t as WithClose,c as WithCustomIcon,v as __namedExportsOrder,W as default};
