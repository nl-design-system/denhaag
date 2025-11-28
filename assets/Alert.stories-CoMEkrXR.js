import{j as m}from"./iframe-BQ5wZTvG.js";import{A as l}from"./index-BNRBB8Km.js";import{M as u}from"./index-Dvl5YdpL.js";import{r as d}from"./README-BteT48cG.js";import{P as g}from"./index-Cksy5ng9.js";import"./index-B3ZpG5au.js";import"./index-C9sD1vaS.js";import"./index-CdNVwBJf.js";const{action:p}=__STORYBOOK_MODULE_ACTIONS__,f={title:"Title",text:m.jsx(g,{children:"Here comes text. This text provides additional details and actionable steps the user can take."}),variant:"info"},W={component:l,args:f,tags:["autodocs"],parameters:{docs:{description:{component:d}}}},r={},e={args:{...r.args,variant:"success"}},a={args:{...r.args,variant:"warning"}},s={args:{...r.args,variant:"error"}},o={args:{...r.args,action:{buttonText:"Action",onClick:p("Action clicked")}}},t={args:{...r.args,close:p("Close clicked")}},n={args:{...r.args,action:{buttonText:"Action",onClick:p("Action clicked")},close:p("Close clicked")}},c={args:{...r.args,supportIcon:m.jsx(u,{})}},i={args:{...r.args,text:void 0}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    variant: 'success'
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    variant: 'warning'
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const v=["Default","Success","Warning","Error","WithAction","WithClose","WithActionAndClose","WithCustomIcon","TitleOnly"];export{r as Default,s as Error,e as Success,i as TitleOnly,a as Warning,o as WithAction,n as WithActionAndClose,t as WithClose,c as WithCustomIcon,v as __namedExportsOrder,W as default};
