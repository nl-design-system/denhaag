import{j as e}from"./iframe-CsVA0H5Z.js";import{o as c,H as i}from"./index-Yw2fE_Y1.js";import{L as n,a as t,b as m}from"./index-BiOuT_eC.js";import{r as l}from"./README-CU7ejf-W.js";import"./index-x1HxsBcn.js";const{action:o}=__STORYBOOK_MODULE_ACTIONS__,d={children:e.jsxs(e.Fragment,{children:[e.jsx(t,{primaryText:"ListItem"}),e.jsx(t,{primaryText:"ListItem"}),e.jsx(t,{primaryText:"ListItem"})]})},y={id:"react-data-display-list",title:"React/Data Display/List",component:n,args:d,tags:["autodocs"],parameters:{docs:{description:{component:l}}}},r={},a={args:{subheader:e.jsx(m,{children:"Subheader"})}},s={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(t,{primaryText:"ListItem"}),e.jsx(t,{primaryText:"Single-line item",actionType:"action",leftIcon:e.jsx(i,{color:"inherit"}),rightIcon:e.jsx(c,{}),onClick:o("Secondary action click")}),e.jsx(t,{primaryText:"Single-line item",secondaryText:"Secondary text",leftIcon:e.jsx(i,{color:"inherit"}),actionType:"nav",onClick:o("ListItem Nav click")})]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    subheader: <ListSubheader>Subheader</ListSubheader>
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <ListItem primaryText="ListItem" />
        <ListItem primaryText="Single-line item" actionType="action" leftIcon={<HouseIcon color="inherit"></HouseIcon>} rightIcon={<TrashIcon />} onClick={action('Secondary action click')} />
        <ListItem primaryText="Single-line item" secondaryText="Secondary text" leftIcon={<HouseIcon color="inherit" />} actionType="nav" onClick={action('ListItem Nav click')} />
      </>
  }
}`,...s.parameters?.docs?.source}}};const L=["Default","Subheader","Listitem"];export{r as Default,s as Listitem,a as Subheader,L as __namedExportsOrder,y as default};
