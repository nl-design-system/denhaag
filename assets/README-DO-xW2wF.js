import{R as d,r as u}from"./index-Cs7sjTYM.js";var c=`.denhaag-description-list{color:var(--denhaag-description-list-color);display:grid;font-family:var(--denhaag-description-list-font-family);font-size:var(--denhaag-description-list-font-size);font-weight:var(--denhaag-description-list-font-weight);grid-template-columns:repeat(1,1fr);line-height:var(--denhaag-description-list-line-height);margin-block-end:var(--denhaag-description-list-margin-block-end);margin-block-start:var(--denhaag-description-list-margin-block-start)}@media (width >= 768px){.denhaag-description-list{--denhaag-description-list-detail-padding-block-end:var(--denhaag-description-list-lg-detail-padding-block-end);--denhaag-description-list-detail-padding-block-start:var(
      --denhaag-description-list-lg-detail-padding-block-start
    );--denhaag-description-list-title-padding-block-end:var(--denhaag-description-list-lg-title-padding-block-end);--denhaag-description-list-title-padding-block-start:var(--denhaag-description-list-lg-title-padding-block-start);--denhaag-description-list-padding-inline-end:var(--denhaag-description-list-lg-padding-inline-end);--denhaag-description-list-padding-inline-start:var(--denhaag-description-list-lg-padding-inline-start);grid-template-columns:1fr 2fr}}.denhaag-description-list__caption{color:var(--denhaag-description-list-caption-color);font-family:var(--denhaag-description-list-caption-font-family,var(--denhaag-description-list-font-family));font-size:var(--denhaag-description-list-caption-font-size,calc(var(--denhaag-description-list-font-size, 1em)*1.33));font-weight:var(--denhaag-description-list-caption-font-weight,--denhaag-typography-weight-bold);line-height:var(--denhaag-description-list-caption-line-height,var(--denhaag-description-list-line-height));margin-block-end:var(--denhaag-description-list-caption-margin-block-end,1em);margin-block-start:0}.denhaag-description-list__title{color:var(--denhaag-description-list-title-color);font-weight:var(--denhaag-description-list-title-font-weight,bold);padding-block-end:var(--denhaag-description-list-title-padding-block-end,var(--denhaag-description-list-padding));padding-block-start:var(--denhaag-description-list-title-padding-block-start,var(--denhaag-description-list-padding));padding-inline-end:var(--denhaag-description-list-padding-inline-end,var(--denhaag-description-list-padding));padding-inline-start:var(--denhaag-description-list-padding-inline-start,var(--denhaag-description-list-padding))}@media (width >= 768px){.denhaag-description-list__title{border-bottom:1px solid var(--denhaag-description-list-border-color,#d3d3d3)}}.denhaag-description-list__detail{border-bottom:1px solid var(--denhaag-description-list-border-color,#d3d3d3);margin-inline-start:0;padding-block-end:var(--denhaag-description-list-detail-padding-block-end,var(--denhaag-description-list-padding));padding-block-start:var(--denhaag-description-list-detail-padding-block-start,var(--denhaag-description-list-padding));padding-inline-end:var(--denhaag-description-list-padding-inline-end,var(--denhaag-description-list-padding));padding-inline-start:var(--denhaag-description-list-padding-inline-end,var(--denhaag-description-list-padding))}`;if(typeof document<"u"){const e=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",n.nonce=window.NONCE,e.appendChild(n),n.styleSheet?n.styleSheet.cssText=c:n.appendChild(document.createTextNode(c))}var r=function(){return r=Object.assign||function(n){for(var a,t=1,i=arguments.length;t<i;t++){a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(n[l]=a[l])}return n},r.apply(this,arguments)};function s(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)n.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(a[t[i]]=e[t[i]]);return a}function p(e){var n,a,t="";if(typeof e=="string"||typeof e=="number")t+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(n=0;n<i;n++)e[n]&&(a=p(e[n]))&&(t&&(t+=" "),t+=a)}else for(a in e)e[a]&&(t&&(t+=" "),t+=a);return t}function o(){for(var e,n,a=0,t="",i=arguments.length;a<i;a++)(e=arguments[a])&&(n=p(e))&&(t&&(t+=" "),t+=n);return t}var g=function(e){var n=e.children,a=e.className,t=s(e,["children","className"]);return d.createElement("h3",r({id:"h3"},t,{className:o("denhaag-description-list__caption",a)}),n)},h=function(e){var n=e.children,a=e.className,t=s(e,["children","className"]);return d.createElement("dt",r({},t,{className:o("denhaag-description-list__title",a)}),n)},m=function(e){var n=e.children,a=e.className,t=s(e,["children","className"]);return d.createElement("dd",r({},t,{className:o("denhaag-description-list__detail",a)}),n)},f=function(e){var n=e.children,a=s(e,["children"]);return d.createElement("dl",r({},a,{className:o("denhaag-description-list",a.className)}),n)},v=function(e){var n=e.caption,a=e.items;return d.createElement(d.Fragment,null,n&&d.createElement(g,null,n),d.createElement(f,null,a.map(function(t,i){return d.createElement(u.Fragment,{key:i},d.createElement(h,null,t.title),d.createElement(m,null,t.detail))})))};v.__docgenInfo={description:"",methods:[],displayName:"DescriptionList"};f.__docgenInfo={description:"",methods:[],displayName:"DescriptionListBase"};g.__docgenInfo={description:"",methods:[],displayName:"DescriptionListCaption"};m.__docgenInfo={description:"",methods:[],displayName:"DescriptionListDetail"};h.__docgenInfo={description:"",methods:[],displayName:"DescriptionListTitle"};const y=`# Data list

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
`;export{v as D,y as r};
