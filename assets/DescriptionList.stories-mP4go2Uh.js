import{j as r}from"./iframe-hBvvBgCZ.js";import{D as o}from"./index-DQaFLQqq.js";import{r as i}from"./README-CXI6PLq5.js";import{L as n}from"./index-BkLM4ffN.js";import{E as c}from"./index-B-c2WPt3.js";import"./preload-helper-PPVm8Dsz.js";const s={items:[{title:"Beast of Bodmin",detail:"A large feline inhabiting Bodmin Moor."},{title:"Morgawr",detail:"A sea serpent."},{title:"Owlman",detail:"A giant owl-like creature."}]},f={component:o,args:s,tags:["autodocs"],parameters:{docs:{description:{component:i}}}},t={},e={args:{...t.args,caption:"Caption"}},a={args:{...t.args,items:[{title:"Owlman",detail:"A giant owl-like creature.",action:r.jsx(n,{icon:r.jsx(c,{}),iconAlign:"start",href:"#test",children:"Aanpassen"})},...s.items]}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    caption: 'Caption'
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    items: [{
      title: 'Owlman',
      detail: 'A giant owl-like creature.',
      action: <Link icon={<EditIcon />} iconAlign="start" href="#test">
            Aanpassen
          </Link>
    }, ...exampleArgs.items]
  }
}`,...a.parameters?.docs?.source}}};const A=["Default","WithCaption","WithAction"];export{t as Default,a as WithAction,e as WithCaption,A as __namedExportsOrder,f as default};
