import{e as c}from"./index-raSRI-5R.js";var o=function(){return o=Object.assign||function(t){for(var r,e=1,i=arguments.length;e<i;e++){r=arguments[e];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a])}return t},o.apply(this,arguments)};function l(n,t){var r={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&t.indexOf(e)<0&&(r[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,e=Object.getOwnPropertySymbols(n);i<e.length;i++)t.indexOf(e[i])<0&&Object.prototype.propertyIsEnumerable.call(n,e[i])&&(r[e[i]]=n[e[i]]);return r}function d(n){var t,r,e="";if(typeof n=="string"||typeof n=="number")e+=n;else if(typeof n=="object")if(Array.isArray(n)){var i=n.length;for(t=0;t<i;t++)n[t]&&(r=d(n[t]))&&(e&&(e+=" "),e+=r)}else for(r in n)n[r]&&(e&&(e+=" "),e+=r);return e}function h(){for(var n,t,r=0,e="",i=arguments.length;r<i;r++)(n=arguments[r])&&(t=d(n))&&(e&&(e+=" "),e+=t);return e}var s=".denhaag-divider{background:var(--denhaag-divider-border-color);border:0;flex-shrink:0;height:var(--denhaag-divider-border-width);margin-block-end:var(--denhaag-divider-margin-block-end);margin-block-start:var(--denhaag-divider-margin-block-start);width:100%}.denhaag-divider--vertical{height:inherit;margin-inline-end:var(--denhaag-divider-margin-inline-end);margin-inline-start:var(--denhaag-divider-margin-inline-start);width:var(--denhaag-divider-border-width)}";if(typeof document<"u"){const n=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css",t.nonce=window.NONCE,n.appendChild(t),t.styleSheet?t.styleSheet.cssText=s:t.appendChild(document.createTextNode(s))}var u=function(n){var t=n.orientation,r=n.className,e=l(n,["orientation","className"]);return c.createElement("hr",o({className:h("denhaag-divider",{"denhaag-divider--vertical":t==="vertical"},r),role:"presentation"},e))};u.__docgenInfo={description:`A thin line that groups content in lists and layouts.
@param props The properties of a Divider component.
@constructor Constructs an instance of Divider.`,methods:[],displayName:"Divider"};const v=`# Divider

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
`;export{u as D,v as r};
