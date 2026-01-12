import{R as d,c}from"./iframe-BB-mnPB5.js";var o=function(){return o=Object.assign||function(t){for(var i,e=1,r=arguments.length;e<r;e++){i=arguments[e];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a])}return t},o.apply(this,arguments)};function l(n,t){var i={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&t.indexOf(e)<0&&(i[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,e=Object.getOwnPropertySymbols(n);r<e.length;r++)t.indexOf(e[r])<0&&Object.prototype.propertyIsEnumerable.call(n,e[r])&&(i[e[r]]=n[e[r]]);return i}var s=".denhaag-divider{background:var(--denhaag-divider-border-color);border:0;flex-shrink:0;height:var(--denhaag-divider-border-width);margin-block-end:var(--denhaag-divider-margin-block-end);margin-block-start:var(--denhaag-divider-margin-block-start);width:100%}.denhaag-divider--vertical{height:inherit;margin-inline-end:var(--denhaag-divider-margin-inline-end);margin-inline-start:var(--denhaag-divider-margin-inline-start);width:var(--denhaag-divider-border-width)}";if(typeof document<"u"){const n=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css",t.nonce=window.NONCE,n.appendChild(t),t.styleSheet?t.styleSheet.cssText=s:t.appendChild(document.createTextNode(s))}var h=function(n){var t=n.orientation,i=n.className,e=l(n,["orientation","className"]);return d.createElement("hr",o({className:c("denhaag-divider",{"denhaag-divider--vertical":t==="vertical"},i),role:"presentation"},e))};h.__docgenInfo={description:`A thin line that groups content in lists and layouts.
@param props The properties of a Divider component.
@constructor Constructs an instance of Divider.`,methods:[],displayName:"Divider"};const p=`<!-- @license CC0-1.0 -->

# Divider

A divider is a thin line that groups content in lists and layouts. They separate content into clear groups.

## When to use

Use a divider when you want to make a distinction between sections of content or where a line is necessary to denote sections of a page to better organize information on a page. Use the vertical divider to form or separate different groups, such as a group of headings in a menu. A vertical divider will automatically swap to a horizontal divider at mobile resolutions.

## Alternatives and related components

## Anatomy

The divider consists of:

1. Line: the separator

## (Interactive) states

None.

## Design properties

### Color

- Line: fill color Grey/2

### Structure

- Line: height 1px

Dividers are placed along the bottom edge of the content tiles, independent of the grid.

## Accessibility

[technical requirements]

## Content guidelines

## Best practices

### Divider with subheader

When using a divider with a subheader, place the divider above the subheader to reinforce the relationship between the subheader and the content.

### Inset dividers

Inset dividers should:

- Be used to separate related content.
- Be used judicious to demarcate major sections of content
- Be used in conjunction with anchoring elements such as avatars

And should:

- Not used for too many elements on one page because a heavy use of dividers can lead to visual noise and dilute their impact
- Not be used if such strong divisions are not required. Consider using white space, subheaders, or inset dividers

### Full-bleed dividers

Full-bleed dividers should:

- Be used to separate distinct content sections (e.g., biographic details from contact information) or distinct content elements (e.g., list items) in both lists and page layouts

And should:

- Not be overused because it creates visual noise and ultimately diminishes the meaning of the dividers

## References
`;export{h as D,p as r};
