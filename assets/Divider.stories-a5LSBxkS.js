import{j as e}from"./iframe-ld9Rpd2T.js";import{r as o,D as t}from"./README-sn7aP2yX.js";const d={},c={component:t,args:d,tags:["autodocs"],parameters:{docs:{description:{component:o}}}},r={render:a=>e.jsxs("div",{children:[e.jsx("p",{children:"I am above the divider."}),e.jsx(t,{...a}),e.jsx("p",{children:"I am below the divider."})]})},i={args:{...r.args,orientation:"vertical"},render:a=>e.jsxs("div",{style:{display:"flex"},children:[e.jsx("p",{children:"I am on the left side of the divider."}),e.jsx(t,{...a}),e.jsx("p",{children:"I am on the right side of the divider."})]})},s={args:{...r.args,orientation:"vertical"},render:a=>e.jsxs("div",{style:{display:"flex"},children:[e.jsx("img",{alt:"The Lagoon Nebula.",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Lagoon_Nebula.jpg/1024px-Lagoon_Nebula.jpg",width:"500",height:"250"}),e.jsx(t,{...a}),e.jsx("img",{alt:"Four cassette tapes",src:"https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/Demos.jpg/1200px-Demos.jpg",width:"500",height:"250"})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => <div>
      <p>I am above the divider.</p>
      <Divider {...args} />
      <p>I am below the divider.</p>
    </div>
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const m=["Default","Vertical","Images"];export{r as Default,s as Images,i as Vertical,m as __namedExportsOrder,c as default};
