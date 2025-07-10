import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as g}from"./index-raSRI-5R.js";import{B as K,S as p}from"./index-BASzoH7C.js";import{A as M,a as N,S}from"./index-C4DVoboI.js";import{r as P}from"./README-CUPsppZA.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx-B-dksMZM.js";const Q={children:"Button"},et={id:"react-input-button",title:"React/Input/Button",component:K,args:Q,tags:["autodocs"],parameters:{docs:{description:{component:P}}}},t={},s={args:{...t.args,variant:"secondary-action"}},o={args:{...t.args,icon:r.jsx(M,{})}},c={args:{...t.args,icon:r.jsx(N,{}),iconAlign:"end"}},i={args:{...t.args,size:"large"}},u={args:{...t.args,disabled:!0}},d={render:()=>{const[a,e]=g.useState("default"),n=()=>{e("loading"),setTimeout(()=>{e("default")},4e3)};return r.jsx(p,{currentState:a,onClick:n,icon:r.jsx(S,{}),children:"Button"})}},l={render:()=>{const[a,e]=g.useState("default"),n=()=>{e("loading"),setTimeout(()=>{e("success")},4e3)};return r.jsx(p,{currentState:a,onClick:n,icon:r.jsx(S,{}),children:"Button"})}},m={render:()=>{const[a,e]=g.useState("default"),n=()=>{e("loading"),setTimeout(()=>{e("error")},4e3)};return r.jsx(p,{currentState:a,onClick:n,icon:r.jsx(S,{}),children:"Button"})}};var f,h,B;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(B=(h=t.parameters)==null?void 0:h.docs)==null?void 0:B.source}}};var k,C,L;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    variant: 'secondary-action'
  }
}`,...(L=(C=s.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var x,A,I;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    icon: <ArrowLeftIcon />
  }
}`,...(I=(A=o.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var j,D,R;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    icon: <ArrowRightIcon />,
    iconAlign: 'end'
  }
}`,...(R=(D=c.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var T,b,E;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    size: 'large'
  }
}`,...(E=(b=i.parameters)==null?void 0:b.docs)==null?void 0:E.source}}};var w,y,W;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    disabled: true
  }
}`,...(W=(y=u.parameters)==null?void 0:y.docs)==null?void 0:W.source}}};var v,z,_;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(_=(z=d.parameters)==null?void 0:z.docs)==null?void 0:_.source}}};var O,q,F;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(F=(q=l.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};var G,H,J;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(J=(H=m.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};const rt=["Default","Secondary","IconLeft","IconRight","Large","Disabled","LoadingAnimation","LoadingAnimationWithSuccess","LoadingAnimationWithError"];export{t as Default,u as Disabled,o as IconLeft,c as IconRight,i as Large,d as LoadingAnimation,m as LoadingAnimationWithError,l as LoadingAnimationWithSuccess,s as Secondary,rt as __namedExportsOrder,et as default};
