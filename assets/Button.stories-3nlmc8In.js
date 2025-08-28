import{j as a,r as g}from"./iframe-4dTl_QDg.js";import{B as f,S}from"./index-Bmi6vd8I.js";import{A as h,a as B,g as p}from"./index-DNvBB-3D.js";import{r as k}from"./README-CUPsppZA.js";const C={children:"Button"},j={id:"react-input-button",title:"React/Input/Button",component:f,args:C,tags:["autodocs"],parameters:{docs:{description:{component:k}}}},t={},s={args:{...t.args,variant:"secondary-action"}},o={args:{...t.args,icon:a.jsx(h,{})}},c={args:{...t.args,icon:a.jsx(B,{}),iconAlign:"end"}},i={args:{...t.args,size:"large"}},u={args:{...t.args,disabled:!0}},d={render:()=>{const[r,e]=g.useState("default"),n=()=>{e("loading"),setTimeout(()=>{e("default")},4e3)};return a.jsx(S,{currentState:r,onClick:n,icon:a.jsx(p,{}),children:"Button"})}},l={render:()=>{const[r,e]=g.useState("default"),n=()=>{e("loading"),setTimeout(()=>{e("success")},4e3)};return a.jsx(S,{currentState:r,onClick:n,icon:a.jsx(p,{}),children:"Button"})}},m={render:()=>{const[r,e]=g.useState("default"),n=()=>{e("loading"),setTimeout(()=>{e("error")},4e3)};return a.jsx(S,{currentState:r,onClick:n,icon:a.jsx(p,{}),children:"Button"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    variant: 'secondary-action'
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    icon: <ArrowLeftIcon />
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    icon: <ArrowRightIcon />,
    iconAlign: 'end'
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    size: 'large'
  }
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    disabled: true
  }
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [state, setState] = useState<LoadingState>('default');
    const handleClick = () => {
      setState('loading');
      setTimeout(() => {
        setState('default');
      }, 4000);
    };
    return <StatusButton currentState={state} onClick={handleClick} icon={<StarterIcon />}>
        Button
      </StatusButton>;
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [state, setState] = useState<LoadingState>('default');
    const handleClick = () => {
      setState('loading');
      setTimeout(() => {
        setState('success');
      }, 4000);
    };
    return <StatusButton currentState={state} onClick={handleClick} icon={<StarterIcon />}>
        Button
      </StatusButton>;
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [state, setState] = useState<LoadingState>('default');
    const handleClick = () => {
      setState('loading');
      setTimeout(() => {
        setState('error');
      }, 4000);
    };
    return <StatusButton currentState={state} onClick={handleClick} icon={<StarterIcon />}>
        Button
      </StatusButton>;
  }
}`,...m.parameters?.docs?.source}}};const D=["Default","Secondary","IconLeft","IconRight","Large","Disabled","LoadingAnimation","LoadingAnimationWithSuccess","LoadingAnimationWithError"];export{t as Default,u as Disabled,o as IconLeft,c as IconRight,i as Large,d as LoadingAnimation,m as LoadingAnimationWithError,l as LoadingAnimationWithSuccess,s as Secondary,D as __namedExportsOrder,j as default};
