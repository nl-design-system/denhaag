import{j as e}from"./iframe-CjxiqWLD.js";import{useMDXComponents as r}from"./index-D1YrIGTC.js";import"./preload-helper-PPVm8Dsz.js";function s(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"den-haag-design-system",children:"Den Haag Design System"}),`
`,e.jsx(n.p,{children:"This project is very much WORK IN PROGRESS and all components are released as alpha version. Always define the exact version you want to use, and test for breaking changes before upgrading to a newer alpha release."}),`
`,e.jsxs(n.p,{children:["Applying design elements from this project is strictly prohibited for organisations that are not part of the Municipality of The Hague. However, we do welcome contributors and users from other organisations. In order to apply your own theme to our components, we support ",e.jsx(n.a,{href:"?path=/docs/den-haag-design-tokens--page",children:"Design Tokens"}),"."]}),`
`,e.jsx(n.p,{children:`This project is part of a community initiative to use NL Design System components for projects that need to adhere to the Den Haag Design System.
Teams from the Municipality of The Hague, as well as those who are contracted by them to develop websites and apps, are able to collaborate via this project.`}),`
`,e.jsx(n.h2,{id:"component-library",children:"Component Library"}),`
`,e.jsx(n.p,{children:"Find our React component library on GitHub:"}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://github.com/nl-design-system/denhaag",rel:"nofollow",children:"nl-design-system/denhaag"})}),`
`,e.jsx(n.h2,{id:"design-kit-for-figma",children:"Design Kit for Figma"}),`
`,e.jsxs(n.p,{children:["Find our design kit for ",e.jsx(n.a,{href:"https://www.figma.com/file/JpoY3waVoQGlLQzQXTL9nn/",rel:"nofollow",children:"on Figma"}),"."]}),`
`,e.jsx(n.h2,{id:"getting-started",children:"Getting started"}),`
`,e.jsx(n.p,{children:"This getting started section explains how to use the React Components in your project."}),`
`,e.jsx(n.h3,{id:"add-required-dependencies",children:"Add required dependencies"}),`
`,e.jsx(n.p,{children:"Add the NPM package for the components. The component library can be imported as a whole, or per component."}),`
`,e.jsxs(n.p,{children:["In order to add the entire component library, install ",e.jsx(n.a,{href:"https://www.npmjs.com/package/@gemeente-denhaag/components-react",rel:"nofollow",children:"@gemeente-denhaag/components-react"})," using your favorite package manager."]}),`
`,e.jsxs(n.p,{children:["For example, ",e.jsx(n.code,{children:"npm install @gemeente-denhaag/components-react"}),"."]}),`
`,e.jsxs(n.p,{children:["Alternatively, you can install specific components: ",e.jsx(n.code,{children:"npm install @gemeente-denhaag/button"}),"."]}),`
`,e.jsx(n.p,{children:"After installing the dependency, you can start using the Den Haag components as follows:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { Button, StylesProvider } from "@gemeente-denhaag/components-react";
// Import your design tokens here as well! Otherwise your components will be unstyled :(

function App() {
  return (
    <StylesProvider>
      <Button variant={"primary-action"}>Click here!</Button>
    </StylesProvider>
  );
}

export default App;
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Important:"})," Your app, or the section which uses Den Haag components, will need to be wrapped in the ",e.jsx(n.code,{children:"StylesProvider"})," component. This ensures that styles are loaded correctly. Make sure only a single ",e.jsx(n.code,{children:"StylesProvider"})," component exists in the app. Having duplicate StylesProvider components can cause unexpected issues."]}),`
`,e.jsx(n.h4,{id:"applying-your-theme",children:"Applying your theme"}),`
`,e.jsx(n.p,{children:`By default, all components in the library are unstyled.
If you wish to apply your organisation's theme to the components, define the design tokens for the components you need, and import them in your app.`}),`
`,e.jsxs(n.p,{children:["For Den Haag applications, import the ",e.jsx(n.a,{href:"https://www.npmjs.com/package/@gemeente-denhaag/design-tokens",rel:"nofollow",children:"@gemeente-denhaag/design-tokens"})," package, and import the css in your application."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Example in javascript"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import "@gemeente-denhaag/design-tokens";
`})}),`
`,e.jsx(n.p,{children:e.jsxs(n.strong,{children:["Alternatively, you can import them in the HTML ",e.jsx(n.code,{children:"<head>"})]})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<head>
  <link rel="stylesheet" href="https://unpkg.com/@gemeente-denhaag/design-tokens/dist/theme/index.css" />
</head>
`})})]})}function a(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}const l={title:"Den Haag/Introduction",tags:["autodocs","!dev"],parameters:{chromatic:{disableSnapshot:!0},docs:{page:a}}},o={};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};const h=["Default"];export{o as Default,h as __namedExportsOrder,l as default};
