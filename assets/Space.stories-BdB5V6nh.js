import{j as e,x as m}from"./iframe-BB-mnPB5.js";import{useMDXComponents as o}from"./index-CpB8dqx8.js";import{t as l}from"./index-DizGl0QV.js";import{p as x}from"./util-Dh9uvyYz.js";import"./preload-helper-PPVm8Dsz.js";const a=({size:i})=>e.jsx("div",{style:{backgroundColor:"black",height:"1em",width:i}}),j=({size:i})=>e.jsx("div",{style:{backgroundColor:"black",width:"1em",height:i}}),u=({size:i})=>e.jsx("div",{style:{backgroundColor:"black",inlineSize:"1em",blockSize:i}}),g=({size:i})=>e.jsx("div",{style:{backgroundColor:"black",blockSize:"1em",inlineSize:i}}),t=({tokens:i,orientation:n})=>e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Variable"}),e.jsx("th",{children:"Value"}),e.jsx("th",{children:"Preview"})]})}),e.jsx("tbody",{children:i.map(({comment:d,name:h,path:p,value:s})=>e.jsxs("tr",{children:[e.jsx("td",{children:d}),e.jsx("td",{children:e.jsx("code",{children:x(p)})}),e.jsx("td",{children:s}),e.jsx("td",{children:n==="horizontal"?e.jsx(a,{size:s}):n==="vertical"?e.jsx(j,{size:s}):n==="block"?e.jsx(u,{size:s}):n==="inline"?e.jsx(g,{size:s}):e.jsx(a,{size:s})})]},h))})]});t.__docgenInfo={description:"",methods:[],displayName:"SpaceTokensTable",props:{orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical' | 'block' | 'inline'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"},{name:"literal",value:"'block'"},{name:"literal",value:"'inline'"}]},description:""},tokens:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  comment: string;
  name: string;
  path: string[];
  value: string;
}`,signature:{properties:[{key:"comment",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"path",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:`{
  comment: string;
  name: string;
  path: string[];
  value: string;
}[]`},description:""}}};function c(i){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{title:"Den Haag/Space"}),`
`,e.jsx(n.h1,{id:"space",children:"Space"}),`
`,e.jsx(n.p,{children:"Use the design tokens for space only for space within (inline/block) or between components (column/row), not to define the size of elements."}),`
`,e.jsx(n.h2,{id:"inline-spacing",children:"Inline spacing"}),`
`,e.jsx(n.p,{children:"Inside components, use inline spacing before and after text. In CSS you can use the following properties:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"margin-inline-start"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"margin-inline-end"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"padding-inline-start"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"padding-inline-end"})}),`
`]}),`
`,e.jsx(t,{orientation:"inline",tokens:Object.values(l.denhaag.space.inline)}),`
`,e.jsx(n.h2,{id:"block-spacing",children:"Block spacing"}),`
`,e.jsx(n.p,{children:"Inside components, use block spacing above and below text. In CSS you can use the following properties:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"margin-block-start"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"margin-block-end"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"padding-block-start"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"padding-block-end"})}),`
`]}),`
`,e.jsx(t,{orientation:"block",tokens:Object.values(l.denhaag.space.block)})]})}function b(i={}){const{wrapper:n}={...o(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(c,{...i})}):c(i)}const w={title:"Den Haag/Space",tags:["autodocs","!dev"],parameters:{chromatic:{disableSnapshot:!0},docs:{page:b}}},r={};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};const z=["Default"];export{r as Default,z as __namedExportsOrder,w as default};
