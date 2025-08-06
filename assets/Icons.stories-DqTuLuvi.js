import{j as e}from"./iframe-BQETwlMg.js";import{u as l,A as p,t as d}from"./index-5vx2ARGr.js";const m=`# Icons component

[📕 View this component in Storybook](http://dhreactstorybook.azurewebsites.net/?path=/story/components-data-display-icons)

[✏️ View the icons in Figma](https://www.figma.com/file/JpoY3waVoQGlLQzQXTL9nn/Design-System-Gemeente-Den-Haag?node-id=119%3A676)

## How to use this component

Numerous icons are exported in this component.
See the Storybook for all available the icons.
An icon can be imported like so:

\`\`\`jsx
import { ArrowLeftIcon } from "@gemeente-denhaag/icons";
<ArrowLeftIcon />;
\`\`\`

Adding your own icons is very easy.
This component exposes \`SvgIcon\` which is a wrapper element for \`svg\` or children of \`svg\` elements.

A \`path\` element can be wrapped like so:

\`\`\`jsx
import SvgIcon from "@gemeente-denhaag/icons";

const HomeIcon = (props) => (
  <SvgIcon {...props}>
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
  </SvgIcon>
);
\`\`\`

The \`SvgIcon\` can also take a \`svg\` element as property:

\`\`\`jsx
import StarIconSvg from "./star.svg";

const StarIcon = (props) => <SvgIcon component={StarIconSvg} viewBox="0 0 600 476.6" {...props} />;
\`\`\`

Do note that you will need a sufficient bundler that can handle the direct \`svg\` import.
For example, [\`svgr\`](https://github.com/gregberge/svgr) is a loader for webpack that can import \`svg\` elements and make them usable in react.

### Further reading material

- https://github.com/gregberge/svgr
- https://github.com/svg/svgo

## How to add icons to this component

1. You need a complete \`svg\` file.
   This file can be exported from Figma for example.
   Make sure that the viewport is \`"0 0 24 24"\`.
2. Place this file in one of the directories in \`src/svg\`.
   If the file is exported from the Denhaag Figma, it should already be in the correct directory.
   Then just merge both directories.
3. Update \`index.tsx\` by adding:

   \`\`\`tsx
   import YourIconSvg from "./svg/DIR/YOURICON.svg";
   export const YourIcon: F = (props: SvgIconProps) => buildIcon(YourIconSvg, props);
   \`\`\`

4. View the Storybook to see if it renders correctly.
   If the colors are incorrect, try changing the \`fill\` and \`stroke\` of the \`svg\` elements and its children.
   Usually these properties should have the \`"none"\` or \`"currentColor"\` value.
   Check the other icons for more details.

   You don't need to update the Storybook story.
   The icon should be added automagically.

5. Done! ✨
`,h=Object.entries(d).filter(([t])=>t!=="default"),s={},f={id:"react-data-display-icons",title:"React/Data Display/Icons",component:l,args:s,tags:["autodocs"],parameters:{docs:{description:{component:m}}}},n={args:{...s,component:p}},o={render:t=>{const a=h.map(([r,c])=>{const i=c;return e.jsxs("div",{style:{flexBasis:"16.666667%"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsx(i,{...t})}),e.jsx("p",{style:{textAlign:"center",color:"#4B4B4B",fontFamily:"monospace"},children:r})]},r)});return e.jsx("div",{style:{display:"flex",flexWrap:"wrap"},children:a})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    ...exampleArgs,
    component: ArrowLeftIcon
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => {
    const children = allIcons.map<React.ReactElement>(([key, value]) => {
      const IconElement = value;
      return <div key={key} style={{
        flexBasis: '16.666667%'
      }}>
          <div style={{
          display: 'flex',
          justifyContent: 'center'
        }}>
            <IconElement {...args} />
          </div>
          <p style={{
          textAlign: 'center',
          color: '#4B4B4B',
          fontFamily: 'monospace'
        }}>{key}</p>
        </div>;
    });
    return <div style={{
      display: 'flex',
      flexWrap: 'wrap'
    }}>{children}</div>;
  }
}`,...o.parameters?.docs?.source}}};const v=["Default","All"];export{o as All,n as Default,v as __namedExportsOrder,f as default};
