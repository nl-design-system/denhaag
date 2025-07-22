import{c as r,e as o,j as i}from"./iframe-B23N8OI0.js";import{B as d}from"./index-CC0vyBzt.js";import"./index-CY9hynp2.js";var s=".denhaag-dot-indicator{display:inline-flex;flex-shrink:0;position:relative;vertical-align:middle}.denhaag-dot-indicator__dot{background-color:var(--denhaag-dot-indicator-background-color);border:var(--denhaag-dot-indicator-border);border-radius:50%;height:var(--denhaag-dot-indicator-size);position:absolute;transform:scale(1) translate(50%,-50%);width:var(--denhaag-dot-indicator-size)}.denhaag-dot-indicator--overlap-rectangle .denhaag-dot-indicator__dot{right:0;top:0;transform:scale(1) translate(50%,-50%)}.denhaag-dot-indicator--overlap-circle .denhaag-dot-indicator__dot{right:14%;top:14%;transform:scale(1) translate(50%,-50%)}";if(typeof document<"u"){const e=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css",t.nonce=window.NONCE,e.appendChild(t),t.styleSheet?t.styleSheet.cssText=s:t.appendChild(document.createTextNode(s))}var a=function(e){var t=r("denhaag-dot-indicator",{"denhaag-dot-indicator--overlap-rectangle":e.overlap==="rectangle","denhaag-dot-indicator--overlap-circle":e.overlap==="circle"},e.className);return o.createElement("span",{className:t,id:e.id},e.children,o.createElement("span",{className:"denhaag-dot-indicator__dot"}))};a.__docgenInfo={description:`A dot indicator is a visual update message that announces something new for the user to see.
Dot indicators are typically used with counter badges
@param props The properties of a Dot Indicator component.`,methods:[],displayName:"DotIndicator"};const c=`# Dot indicator

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
`,l={overlap:"rectangle"},m={id:"react-data-display-dot-indicator",title:"React/Data Display/Dot indicator",component:a,args:l,tags:["autodocs"],parameters:{docs:{description:{component:c}}}},n={render:e=>i.jsx(a,{...e,children:i.jsx(d,{children:"Read messages"})})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <DotIndicator {...args}>
      <Button>Read messages</Button>
    </DotIndicator>
}`,...n.parameters?.docs?.source}}};const p=["Default"];export{n as Default,p as __namedExportsOrder,m as default};
