import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{B as m}from"./index-DMcw6jc8.js";import{e as d}from"./index-raSRI-5R.js";import"./_commonjsHelpers-BosuxZz1.js";var c=".denhaag-dot-indicator{display:inline-flex;flex-shrink:0;position:relative;vertical-align:middle}.denhaag-dot-indicator__dot{background-color:var(--denhaag-dot-indicator-background-color);border:var(--denhaag-dot-indicator-border);border-radius:50%;height:var(--denhaag-dot-indicator-size);position:absolute;transform:scale(1) translate(50%,-50%);width:var(--denhaag-dot-indicator-size)}.denhaag-dot-indicator--overlap-rectangle .denhaag-dot-indicator__dot{right:0;top:0;transform:scale(1) translate(50%,-50%)}.denhaag-dot-indicator--overlap-circle .denhaag-dot-indicator__dot{right:14%;top:14%;transform:scale(1) translate(50%,-50%)}";if(typeof document<"u"){const t=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style");e.type="text/css",e.nonce=window.NONCE,t.appendChild(e),e.styleSheet?e.styleSheet.cssText=c:e.appendChild(document.createTextNode(c))}function g(t){var e,a,n="";if(typeof t=="string"||typeof t=="number")n+=t;else if(typeof t=="object")if(Array.isArray(t)){var r=t.length;for(e=0;e<r;e++)t[e]&&(a=g(t[e]))&&(n&&(n+=" "),n+=a)}else for(a in t)t[a]&&(n&&(n+=" "),n+=a);return n}function p(){for(var t,e,a=0,n="",r=arguments.length;a<r;a++)(t=arguments[a])&&(e=g(t))&&(n&&(n+=" "),n+=e);return n}var i=function(t){var e=p("denhaag-dot-indicator",{"denhaag-dot-indicator--overlap-rectangle":t.overlap==="rectangle","denhaag-dot-indicator--overlap-circle":t.overlap==="circle"},t.className);return d.createElement("span",{className:e,id:t.id},t.children,d.createElement("span",{className:"denhaag-dot-indicator__dot"}))};i.__docgenInfo={description:`A dot indicator is a visual update message that announces something new for the user to see.
Dot indicators are typically used with counter badges
@param props The properties of a Dot Indicator component.`,methods:[],displayName:"DotIndicator"};const f=`# Dot indicator

![npm (scoped)](https://img.shields.io/npm/v/@gemeente-denhaag/dotindicator?logo=npm&style=flat-square)
![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/nl-design-system/denhaag/Build%20and%20deploy%20Storybook%20to%20Azure%20Web%20App/main?logo=github&style=flat-square)

Dot indicators are used to show that there is a notification. Dot indicators are commonly used in combination with badges.

## When to use

TODO: Not yet written.

## Alternatives and related components

Use \`Tag\` when you need to inform users about the status of an object, about an action or when you have data that helps categorize and organize things.

## Anatomy

The dot indicator consists of

1. Dot: shows that there is a notification
2. Container: the element the dot is placed on

## (Interactive) states

None.

## Design properties

### Colors

- Dot: color Red/3, border color white

### Structure

- Dot: overlaps container 25%, border 2px, height and width 12px

## Accessibility

TODO: Not yet written.

## Content guidelines

None.

## Best practices

### Do's

Dot indicators should:

- Notify the user that something is new or updated without showing a count, such as an "unread message", or activity notification
- Notify or draw attention to changed values or states
- Be used when there is an underlying message in the menu
- Be used sparingly

### Don'ts

Dot indicators should:

- Not be used if you need to display a count. Use \`Badge counter\` instead.

## References

https://cultureamp.design/components/badge
`,y={overlap:"rectangle"},N={id:"react-data-display-dot-indicator",title:"React/Data Display/Dot indicator",component:i,args:y,tags:["autodocs"],parameters:{docs:{description:{component:f}}}},o={render:t=>s.jsx(i,{...t,children:s.jsx(m,{children:"Read messages"})})};var l,h,u;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => <DotIndicator {...args}>
      <Button>Read messages</Button>
    </DotIndicator>
}`,...(u=(h=o.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};const x=["Default"];export{o as Default,x as __namedExportsOrder,N as default};
