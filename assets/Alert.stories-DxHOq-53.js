import{j as l}from"./iframe-DQBiwy74.js";import{A as p}from"./index-o01UUotz.js";import{M as d}from"./index-Cz9ayipZ.js";import{r as u}from"./README-CUNRM6jN.js";import{P as g}from"./index-C5RjU-d1.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C6tKyB9g.js";import"./index-DplrWVuG.js";import"./index-Cv2hiLOF.js";const{action:m}=__STORYBOOK_MODULE_ACTIONS__,h={title:"Title",text:l.jsx(g,{children:"Here comes text. This text provides additional details and actionable steps the user can take."}),variant:"info"},W={component:p,args:h,tags:["autodocs"],parameters:{docs:{description:{component:u}}}},e={},r={args:{...e.args,variant:"success"}},a={args:{...e.args,variant:"warning"}},s={args:{...e.args,variant:"error"}},t={args:{...e.args,action:{buttonText:"Action",onClick:m("Action clicked")}}},o={args:{...e.args,close:m("Close clicked")}},n={args:{...e.args,action:{buttonText:"Action",onClick:m("Action clicked")},close:m("Close clicked")}},c={args:{...e.args,supportIcon:l.jsx(d,{})}},i={args:{...e.args,title:"This is a very long title that should be truncated if it exceeds the maximum width of the alert component",text:void 0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    variant: 'success'
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    variant: 'warning'
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    variant: 'error'
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    action: {
      buttonText: 'Action',
      onClick: action('Action clicked')
    }
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const O=["Default","Success","Warning","Error","WithAction","WithClose","WithActionAndClose","WithCustomIcon","TitleOnly"];export{e as Default,s as Error,r as Success,i as TitleOnly,a as Warning,t as WithAction,n as WithActionAndClose,o as WithClose,c as WithCustomIcon,O as __namedExportsOrder,W as default};
