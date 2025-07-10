import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as u,D as t}from"./README-CNaQsLdB.js";import"./index-raSRI-5R.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx-B-dksMZM.js";const v={},w={id:"react-data-display-divider",title:"React/Data Display/Divider",component:t,args:v,tags:["autodocs"],parameters:{docs:{description:{component:u}}}},a={render:r=>e.jsxs("div",{children:[e.jsx("p",{children:"I am above the divider."}),e.jsx(t,{...r}),e.jsx("p",{children:"I am below the divider."})]})},i={args:{...a.args,orientation:"vertical"},render:r=>e.jsxs("div",{style:{display:"flex"},children:[e.jsx("p",{children:"I am on the left side of the divider."}),e.jsx(t,{...r}),e.jsx("p",{children:"I am on the right side of the divider."})]})},s={args:{...a.args,orientation:"vertical"},render:r=>e.jsxs("div",{style:{display:"flex"},children:[e.jsx("img",{alt:"The Lagoon Nebula.",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Lagoon_Nebula.jpg/1024px-Lagoon_Nebula.jpg",width:"500",height:"250"}),e.jsx(t,{...r}),e.jsx("img",{alt:"Four cassette tapes",src:"https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/Demos.jpg/1200px-Demos.jpg",width:"500",height:"250"})]})};var o,d,n;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => <div>
      <p>I am above the divider.</p>
      <Divider {...args} />
      <p>I am below the divider.</p>
    </div>
}`,...(n=(d=a.parameters)==null?void 0:d.docs)==null?void 0:n.source}}};var p,m,c;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    orientation: 'vertical'
  },
  render: args => <div style={{
    display: 'flex'
  }}>
      <p>I am on the left side of the divider.</p>
      <Divider {...args} />
      <p>I am on the right side of the divider.</p>
    </div>
}`,...(c=(m=i.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var l,g,h;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    orientation: 'vertical'
  },
  render: args => <div style={{
    display: 'flex'
  }}>
      <img alt="The Lagoon Nebula." src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Lagoon_Nebula.jpg/1024px-Lagoon_Nebula.jpg" width="500" height="250" />
      <Divider {...args} />
      <img alt="Four cassette tapes" src="https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/Demos.jpg/1200px-Demos.jpg" width="500" height="250" />
    </div>
}`,...(h=(g=s.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const y=["Default","Vertical","Images"];export{a as Default,s as Images,i as Vertical,y as __namedExportsOrder,w as default};
