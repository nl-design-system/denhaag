import{j as e}from"./jsx-runtime-BjgbQsUx.js";import{useMDXComponents as c}from"./index-pf3ISG4y.js";import"./index-D2MAbzvX.js";import"./index-B3p8u_35.js";import"./_commonjsHelpers-BosuxZz1.js";function o(r){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",...c(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"release-strategy",children:"Release strategy"}),`
`,e.jsx(n.h2,{id:"semantic-versioning-and-pre-releases",children:"Semantic versioning and pre-releases"}),`
`,e.jsxs(n.p,{children:[`| Description                                             | npm version     | release type  |
| ------------------------------------------------------- | --------------- | ------------- |
| Production: Bugfix or improvement with breaking changes | `,e.jsx(n.code,{children:">=2.0.0"}),`       | major version |
| Production: Improvement with no breaking changes        | `,e.jsx(n.code,{children:"^1.1.0"}),`        | minor version |
| Production: Bugfix with no breaking changes             | `,e.jsx(n.code,{children:"~1.0.1"}),`        | patch version |
| Production: First stable release                        | `,e.jsx(n.code,{children:"1.0.0"}),`         | release       |
| Beta                                                    | `,e.jsx(n.code,{children:"1.0.0-beta.0"}),`  | pre-release   |
| Alpha                                                   | `,e.jsx(n.code,{children:"1.0.0-alpha.0"}),` | pre-release   |
| Work in Progress                                        | `,e.jsx(n.code,{children:"1.0.0-alpha.0"})," | pre-release   |"]}),`
`,e.jsx(n.h3,{id:"production",children:"Production"}),`
`,e.jsx(n.p,{children:"Used in production in a variety of situations, well tested, stable APIs, mostly patches and minor releases. Changes are communicated via the version number and via the changelog."}),`
`,e.jsx(n.h3,{id:"beta",children:"Beta"}),`
`,e.jsx(n.p,{children:"Used in production in a specific situation, evolving APIs based on feedback, breaking changes are still likely. Design tokens are unlikely to change."}),`
`,e.jsx(n.h3,{id:"alpha",children:"Alpha"}),`
`,e.jsx(n.p,{children:"Used in prototypes and in projects that are still in development, breaking changes occur frequently and are not communicated. Design tokens exist but are subject to change."}),`
`,e.jsx(n.h3,{id:"work-in-progress",children:"Work in Progress"}),`
`,e.jsx(n.p,{children:"Don't use in production. Breaking changes occur frequently. The component cannot be used as CSS only component. Design tokens not implemented or experimental."})]})}function d(r={}){const{wrapper:n}={...c(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(o,{...r})}):o(r)}const g={title:"Den Haag/Release strategy",tags:["autodocs","!dev"],parameters:{chromatic:{disableSnapshot:!0},docs:{page:d}}},s={};var t,i,a;s.parameters={...s.parameters,docs:{...(t=s.parameters)==null?void 0:t.docs,source:{originalSource:"{}",...(a=(i=s.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const x=["Default"];export{s as Default,x as __namedExportsOrder,g as default};
