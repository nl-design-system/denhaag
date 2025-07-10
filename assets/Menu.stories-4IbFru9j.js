import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{b as m,c as l,M as u}from"./index-D4I1vdCP.js";import"./index-raSRI-5R.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx-B-dksMZM.js";import"./index-C4DVoboI.js";import"./index-BtU0A77O.js";import"./index-ubpkgOCO.js";import"./index-DoQjOFyI.js";import"./index-BASzoH7C.js";import"./v4-C6aID195.js";const p=`# Introduction

![npm (scoped)](https://img.shields.io/npm/v/@gemeente-denhaag/menu?logo=npm&style=flat-square)
![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/nl-design-system/denhaag/Build%20and%20deploy%20Storybook%20to%20Azure%20Web%20App/main?logo=github&style=flat-square)

Menu buttons are used as navigational elements. They appear in the navigation and open a menu or page.

## When to use

Use menu buttons in the menu to navigate to a page or open a menu.

## Alternatives and related components

- **Use links** for navigation actions that appear within or immediately after a sentence.
- **Use buttons** for actions that don’t appear within or directly following a sentence.

## Anatomy

The menu button consists of:

1.  Label: communicates what is being linked to

2.  Icon (optional): this icon shows that the menu button is expandable

## (Interactive) states

The menu button contains the states inactive, active, hover and focus.

## Design properties

### Typography

- Label inactive: TheSans/md/40\\*
- Label active: TheSans/md/700

### Colors

- Label: text color Grey/4
- Icon: svg color Grey/4

### Interactive states

- Active: label text color Blue/3
- Hover: label text color Blue/3
- Focus: label border color Ocher/5

### Structure

- Label: padding-block 20px
- Icon: height and width 24px, padding-left 4px
- Menu buttons: group spacing 40px

### Accessibility

_TODO: [ technical requirements ]_

### Content guidelines

- Menu buttons need to be clear and predictable. Users should be able to anticipate where they will go when they select a button.

- Always capitalize menu button labels, meaning that the first word is uppercase and the rest is lowercase (unless a term has its own name).

- Labels should be short and sweet, with a maximum of 2 words.

- Make labels easy to scan.

- Figure out what users are looking for, and use category labels that are familiar and relevant. Menus are not the place to get cute with made-up words and internal jargon. Stick to terminology that clearly describes your content and features.

- Avoid generic labels such as
  "Articles" or "Videos." Such labels aren’t descriptive because they tell visitors the format of the content, but not the topic.

## Best practices

### **Do's**

Menu buttons must:

- Have a maximum of 5 visible buttons. The other menu items must be placed under 'More'. The more options you have in your navigation, the more difficult the information is to remember and process for your visitors.

- Have a clear navigation location.

- Have a logical order.
  You might want to sort the options by priority — start with top priority and end with the least important option.

### **Don'ts**

Menu buttons must:

- Not create information overload.

- Not have too many buttons, because options make the next step unclear.

- Not be visible if they are not valuable for the user

### References

https://www.nngroup.com/articles/menu-design/
https://forgeandsmith.com/blog/website-navigation-ux-best-practices
https://xd.adobe.com/ideas/process/information-architecture/website-navigation-design-best-practices/
`,d={children:e.jsxs(e.Fragment,{children:[e.jsx(l,{href:"#",children:"Label"}),e.jsx(u,{children:"Label 2"})]})},k={id:"react-navigation-menu",title:"React/Navigation/Menu",component:m,args:d,tags:["autodocs"],parameters:{docs:{description:{component:p}}}},n={},t={args:{...n.args,children:e.jsxs(e.Fragment,{children:[e.jsx(l,{href:"#",active:!0,children:"Label"}),e.jsx(u,{active:!0,children:"Label 2"})]})}};var a,o,s;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(s=(o=n.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};var r,i,c;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    children: <>
        <MenuButton href="#" active>
          Label
        </MenuButton>
        <MenuButtonExpandable active>Label 2</MenuButtonExpandable>
      </>
  }
}`,...(c=(i=t.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const B=["Default","Active"];export{t as Active,n as Default,B as __namedExportsOrder,k as default};
