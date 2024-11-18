import{R as s}from"./index-Cs7sjTYM.js";var p=`.denhaag-description-list{color:var(--denhaag-description-list-color);font-family:var(--denhaag-description-list-font-family);font-size:var(--denhaag-description-list-font-size);font-weight:var(--denhaag-description-list-font-weight);line-height:var(--denhaag-description-list-line-height);margin-block-end:var(--denhaag-description-list-margin-block-end);margin-block-start:var(--denhaag-description-list-margin-block-start)}@media (width >= 768px){.denhaag-description-list{--denhaag-description-list-detail-padding-block-end:var(--denhaag-description-list-lg-detail-padding-block-end);--denhaag-description-list-detail-padding-block-start:var(
      --denhaag-description-list-lg-detail-padding-block-start
    );--denhaag-description-list-title-padding-block-end:var(--denhaag-description-list-lg-title-padding-block-end);--denhaag-description-list-title-padding-block-start:var(--denhaag-description-list-lg-title-padding-block-start);--denhaag-description-list-padding-inline-end:var(--denhaag-description-list-lg-padding-inline-end);--denhaag-description-list-padding-inline-start:var(--denhaag-description-list-lg-padding-inline-start)}}.denhaag-description-list__caption{color:var(--denhaag-description-list-caption-color);font-family:var(--denhaag-description-list-caption-font-family,var(--denhaag-description-list-font-family));font-size:var(--denhaag-description-list-caption-font-size,calc(var(--denhaag-description-list-font-size, 1em)*1.33));font-weight:var(--denhaag-description-list-caption-font-weight,--denhaag-typography-weight-bold);line-height:var(--denhaag-description-list-caption-line-height,var(--denhaag-description-list-line-height));margin-block-end:var(--denhaag-description-list-caption-margin-block-end,1em);margin-block-start:0}.denhaag-description-list__title{color:var(--denhaag-description-list-title-color);font-weight:var(--denhaag-description-list-title-font-weight,bold);padding-block-end:var(--denhaag-description-list-title-padding-block-end,var(--denhaag-description-list-padding));padding-block-start:var(--denhaag-description-list-title-padding-block-start,var(--denhaag-description-list-padding));padding-inline-start:var(--denhaag-description-list-padding-inline-start,var(--denhaag-description-list-padding))}.denhaag-description-list__detail,.denhaag-description-list__title{padding-inline-end:var(--denhaag-description-list-padding-inline-end,var(--denhaag-description-list-padding))}.denhaag-description-list__detail{margin-inline-start:0;padding-block-end:var(--denhaag-description-list-detail-padding-block-end,var(--denhaag-description-list-padding));padding-block-start:var(--denhaag-description-list-detail-padding-block-start,var(--denhaag-description-list-padding));padding-inline-start:var(--denhaag-description-list-padding-inline-end,var(--denhaag-description-list-padding))}.denhaag-description-list-item{border-bottom:1px solid var(--denhaag-description-list-border-color,#d3d3d3);display:grid;grid-template-columns:repeat(1,1fr)}@media (width >= 768px){.denhaag-description-list-item{display:grid;grid-template-columns:var(--denhaag-description-list-item-first-column-width,240px) 1fr auto}}`;if(typeof document<"u"){const e=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",n.nonce=window.NONCE,e.appendChild(n),n.styleSheet?n.styleSheet.cssText=p:n.appendChild(document.createTextNode(p))}var d=function(){return d=Object.assign||function(n){for(var i,t=1,a=arguments.length;t<a;t++){i=arguments[t];for(var l in i)Object.prototype.hasOwnProperty.call(i,l)&&(n[l]=i[l])}return n},d.apply(this,arguments)};function r(e,n){var i={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(i[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(i[t[a]]=e[t[a]]);return i}function g(e){var n,i,t="";if(typeof e=="string"||typeof e=="number")t+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(n=0;n<a;n++)e[n]&&(i=g(e[n]))&&(t&&(t+=" "),t+=i)}else for(i in e)e[i]&&(t&&(t+=" "),t+=i);return t}function o(){for(var e,n,i=0,t="",a=arguments.length;i<a;i++)(e=arguments[i])&&(n=g(e))&&(t&&(t+=" "),t+=n);return t}var h=function(e){var n=e.children,i=e.className,t=r(e,["children","className"]);return s.createElement("h3",d({id:"h3"},t,{className:o("denhaag-description-list__caption",i)}),n)},m=function(e){var n=e.children,i=e.className,t=r(e,["children","className"]);return s.createElement("dt",d({},t,{className:o("denhaag-description-list__title",i)}),n)},c=function(e){var n=e.children,i=e.className,t=r(e,["children","className"]);return s.createElement("dd",d({},t,{className:o("denhaag-description-list__detail",i)}),n)},f=function(e){var n=e.children,i=r(e,["children"]);return s.createElement("dl",d({},i,{className:o("denhaag-description-list",i.className)}),n)},u=function(e){var n=e.className,i=e.children,t=r(e,["className","children"]),a=o("denhaag-description-list-item",n);return s.createElement("div",d({className:a},t),i)},v=function(e){var n=e.caption,i=e.items;return s.createElement(s.Fragment,null,n&&s.createElement(h,null,n),s.createElement(f,null,i.map(function(t,a){return s.createElement(u,{key:a},s.createElement(m,null,t.title),s.createElement(c,null,t.detail),t.action&&s.createElement(c,null,t.action))})))};v.__docgenInfo={description:"",methods:[],displayName:"DescriptionList"};f.__docgenInfo={description:"",methods:[],displayName:"DescriptionListBase"};h.__docgenInfo={description:"",methods:[],displayName:"DescriptionListCaption"};c.__docgenInfo={description:"",methods:[],displayName:"DescriptionListDetail"};u.__docgenInfo={description:"",methods:[],displayName:"DescriptionListItem"};m.__docgenInfo={description:"",methods:[],displayName:"DescriptionListTitle"};const b=`# Data list

Data lists organize and display information into rows.

## When to use

Use a data list for displaying data that is intended to be easily scanned and compared.

## Alternatives and related components

- Use lists to create an actionable list of related items that link to detail pages, such as a list of customers.
- Use tables to display information from a data set into rows and columns.

## Anatomy

The data list consists of:

- Caption (optional): describes the table.
- List header: title for the row header.
- List row: the data.

## (Interactive) states

None.

## Design properties

### Typography

- Caption: TheMix/xl/700
- List header: TheSans/md/700
- List row: TheSans/md/400

### Color

- Caption: text color black
- List header: text color Grey/4, border color Grey/2
- List row: text color Grey/4, border color Grey/2

### Structure

#### Desktop

- List header: padding 16px, margin-top 24px
- List row: padding 16px

#### Mobile

- List header: padding-top 12px, padding-bottom 4px, padding-left and padding-right 8px, margin-top 24px, border bottom 1px
- List row: padding-top 4px, padding-bottom 12px, padding-left and padding-right 8px, border bottom 1px

## Accessibility

- Use data lists for layout.
- A caption element is strongly encouraged. The summary attribute is deprecated in HTML5.

## Content guidelines

- Keep headers informative, descriptive and concise so that they can be read at a glance.
- Ensure headers start in a capital letter and don’t end with commas, semicolons or full stops.
- Ensure content starts in a capital letter and doesn’t include units of measurements.
- Wrap instead of truncate content. This is because if row titles start with the same word, they’ll all appear the same when truncated.
- Use decimals consistently.

### Custom header widths

Use custom widths based on the expected length of the data under each corresponding column. By default the data list is full width, however the data list can be used with the grid to take up a desired amount of horizontal space on the page.

## Best practices

### Do’s

Data lists should:

- Display a collection of structured data.
- Have a logical row header.
- Use a caption to describe a list in the same way you would use a heading. A caption helps users find, navigate and understand lists.
- Align all headers and data to the left.

### Don’ts

Data lists should:

- Not be used when a more complex display of the data or interactions are required.
- Not necessarily need captions when there is already a heading above the table that describes the data.
- Not center the headers and data.

## References

- [Figma design](https://www.figma.com/file/JpoY3waVoQGlLQzQXTL9nn/Design-System---Gemeente-Den-Haag?node-id=8487%3A27946)
`;export{v as D,b as r};
