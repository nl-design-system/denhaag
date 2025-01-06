import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{a as i}from"./index-CY7qSbuB.js";import{B as p}from"./index.esm-CEkH1hZj.js";import{r as F}from"./README-Dc1QVyyv.js";import{t as u}from"./util-BontghLu.js";import"./index-raSRI-5R.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx-B-dksMZM.js";import"./index-DgcIFbrm.js";const E={today:"vandaag",yesterday:"gisteren",before:"vóór",approachingDeadline:m=>m===1?`nog ${m} dag`:`nog ${m} dagen`},l={labels:E,children:e.jsx("strong",{children:"Taak"}),actions:e.jsx(p,{href:"#example",children:"Actie"})},I={id:"react-actions-action-multiple",title:"React/Actions/Action Multiple",component:i,args:l,tags:["autodocs"],parameters:{docs:{description:{component:F}}}},a={},r={args:{...a.args,actions:e.jsx(p,{href:"#example",className:"utrecht-button-link--hover",children:"Actie"})}},t={args:{...a.args,actions:e.jsx(p,{href:"#example",className:"utrecht-button-link--focus",children:"Actie"})}},s={args:{...a.args,dateTime:"2023-09-28T19:47:36.593Z",locale:u}},o={args:{...a.args,dateTime:"2023-10-02T19:47:36.593Z",now:"2023-09-28T19:47:36.593Z",locale:u,relativeDate:!0}},n={args:{...a.args,dateTime:"2023-09-30T19:47:36.593Z",now:"2023-09-28T19:47:36.593Z",locale:u,relativeDate:!0}},c={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(i,{...l}),e.jsx(i,{...l}),e.jsx(i,{...l})]})};var d,g,h;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(h=(g=a.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var x,f,T;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    actions: <ButtonLink href="#example" className="utrecht-button-link--hover">
        Actie
      </ButtonLink>
  }
}`,...(T=(f=r.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};var D,A,v;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    actions: <ButtonLink href="#example" className="utrecht-button-link--focus">
        Actie
      </ButtonLink>
  }
}`,...(v=(A=t.parameters)==null?void 0:A.docs)==null?void 0:v.source}}};var L,j,k;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    dateTime: '2023-09-28T19:47:36.593Z',
    locale: templateLocale
  }
}`,...(k=(j=s.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var Z,W,S;o.parameters={...o.parameters,docs:{...(Z=o.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    dateTime: '2023-10-02T19:47:36.593Z',
    now: '2023-09-28T19:47:36.593Z',
    locale: templateLocale,
    relativeDate: true
  }
}`,...(S=(W=o.parameters)==null?void 0:W.docs)==null?void 0:S.source}}};var b,B,M;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    dateTime: '2023-09-30T19:47:36.593Z',
    now: '2023-09-28T19:47:36.593Z',
    locale: templateLocale,
    relativeDate: true
  }
}`,...(M=(B=n.parameters)==null?void 0:B.docs)==null?void 0:M.source}}};var w,N,R;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <>
      <ActionMulti {...exampleArgs} />
      <ActionMulti {...exampleArgs} />
      <ActionMulti {...exampleArgs} />
    </>
}`,...(R=(N=c.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};const J=["Default","Hover","Focus","WithDate","WithDateRelative","WithDateWarning","List"];export{a as Default,t as Focus,r as Hover,c as List,s as WithDate,o as WithDateRelative,n as WithDateWarning,J as __namedExportsOrder,I as default};
