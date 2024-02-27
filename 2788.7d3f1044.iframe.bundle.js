"use strict";(self.webpackChunk_gemeente_denhaag_storybook=self.webpackChunk_gemeente_denhaag_storybook||[]).push([[2788],{"../../components/Table/dist/mjs/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{CG:()=>TableRow,Co:()=>TableCaption,IE:()=>TableHeader,iy:()=>TableHead,oJ:()=>Table,qq:()=>TableBody,y6:()=>TableCell});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),css_248z=".denhaag-table__container{overflow-x:var(--denhaag-table-container-overflow-x,auto);width:stretch}@supports (width:-webkit-fill-available){.denhaag-table__container{width:-webkit-fill-available}}@supports (width:-moz-available){.denhaag-table__container{width:-moz-available}}.denhaag-table__container-shadow-group{bottom:var(--denhaag-table-container-shadow-group-bottom,0);display:var(--denhaag-table-container-shadow-group-display,contents);position:var(--denhaag-table-container-shadow-group-position,absolute);width:var(--denhaag-table-container-shadow-group-width,inherit)}.denhaag-table__container-shadow{background:var(--denhaag-table-container-shadow-background,transparent);bottom:var(--denhaag-table-container-shadow-bottom,0);height:var(--denhaag-table-container-shadow-height,inherit);position:var(--denhaag-table-container-shadow-position,absolute);width:var(--denhaag-table-container-shadow-width,4rem)}.denhaag-table__container-shadow--left{left:var(--denhaag-table-container-shadow-left-left,0);transform:var(--denhaag-table-container-shadow-left-transform)}.denhaag-table__container-shadow--right{right:var(--denhaag-table-container-shadow-right-right,0)}.denhaag-table{border-spacing:var(--denhaag-table-border-spacing,0);max-width:var(--denhaag-table-max-width,100%);width:var(--denhaag-table-width,100%)}.denhaag-table__scroll-buttons{flex-direction:var(--denhaag-table-scroll-buttons-flex-direction,initial);justify-content:var(--denhaag-table-scroll-buttons-justify-content,flex-end)}.denhaag-table__container-shadow--disabled,.denhaag-table__scroll-buttons--disabled,.denhaag-table__scroll-buttons--disabled+.denhaag-table__container .denhaag-table__container-shadow{display:none}.denhaag-table__caption{color:var(--utrecht-table-caption-color,inherit);font-family:var(--utrecht-table-caption-font-family,inherit);font-size:var(--utrecht-table-caption-font-size,1.25em);font-weight:var(--utrecht-table-caption-font-weight,inherit);line-height:var(--utrecht-table-caption-line-height,1);margin-block-end:var(--utrecht-table-caption-margin-block-end,0);text-align:var(--utrecht-table-caption-text-align,start)}.denhaag-table-wrapper{position:var(--denhaag-table-wrapper-position,relative)}.denhaag-table-wrapper .denhaag-table__caption{--utrecht-table-caption-margin-block-end:initial}.denhaag-table__cell,.denhaag-table__heading{background-color:var(--denhaag-table-row-background-color,inherit);border-block-end:var(--utrecht-table-border-width) solid var(--utrecht-table-border-color);padding-block-end:var(--utrecht-table-cell-padding-block-end,0);padding-block-start:var(--utrecht-table-cell-padding-block-start,0);padding-inline-end:var(--utrecht-table-cell-padding-inline-end,0);padding-inline-start:var(--utrecht-table-cell-padding-inline-start,0);text-align:start}.denhaag-table__cell{color:var(--denhaag-table-cell-color);font-weight:var(--denhaag-table-cell-font-weight,normal);line-height:var(--utrecht-table-cell-line-height,inherit);min-width:var(--denhaag-table-cell-min-width,7.5rem)}.denhaag-table__heading{color:var(--denhaag-table-heading-color);font-weight:var(--utrecht-table-heading-font-weight,bold);min-width:var(--denhaag-table-heading-min-width,7.5rem)}.denhaag-table__cell--link,.denhaag-table__heading--link{padding-block-end:0;padding-block-start:0;padding-inline-end:0;padding-inline-start:0}.denhaag-table__cell--link a,.denhaag-table__heading--link a{color:inherit;display:block;padding-block-end:var(--utrecht-table-cell-padding-block-end,0);padding-block-start:var(--utrecht-table-cell-padding-block-start,0);padding-inline-end:var(--utrecht-table-cell-padding-inline-end,0);padding-inline-start:var(--utrecht-table-cell-padding-inline-start,0);text-decoration:inherit}.denhaag-table__body>.denhaag-table__row--hover .denhaag-table__cell,.denhaag-table__body>.denhaag-table__row--hover .denhaag-table__heading,.denhaag-table__body>.denhaag-table__row:hover .denhaag-table__cell,.denhaag-table__body>.denhaag-table__row:hover .denhaag-table__heading{--denhaag-table-row-background-color:var(--denhaag-table-row-hover-background-color,transparent)}.denhaag-table__row--focus,.denhaag-table__row:focus{outline:var(--denhaag-table-cell-outline-color) var(--denhaag-table-cell-outline-style) var(--denhaag-table-cell-outline-width)}";const head=document.head||document.getElementsByTagName("head")[0],style=document.createElement("style");style.type="text/css",style.nonce=window.NONCE,head.appendChild(style),style.styleSheet?style.styleSheet.cssText=css_248z:style.appendChild(document.createTextNode(css_248z));var __assign=function(){return __assign=Object.assign||function __assign(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)};function __rest(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t}function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}"function"==typeof SuppressedError&&SuppressedError;var Table=function(_a){var className=_a.className,props=__rest(_a,["className"]),rootClassNames=clsx("denhaag-table",className);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("table",{className:rootClassNames},props.children)},TableCell=function(_a){var className=_a.className,href=_a.href,props=__rest(_a,["className","href"]),rootClassNames=clsx("denhaag-table__cell",className,{"denhaag-table__cell--link":href});return href?react__WEBPACK_IMPORTED_MODULE_0__.createElement("td",__assign({className:rootClassNames},props),react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{href},props.children)):react__WEBPACK_IMPORTED_MODULE_0__.createElement("td",__assign({className:rootClassNames},props),props.children)},TableRow=function(_a){var className=_a.className,props=__rest(_a,["className"]),rootClassNames=clsx("denhaag-table__row",className);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr",__assign({className:rootClassNames},props),props.children)},TableBody=function(_a){var className=_a.className,props=__rest(_a,["className"]),rootClassNames=clsx("denhaag-table__body",className);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody",__assign({className:rootClassNames},props),props.children)},TableCaption=function(_a){var className=_a.className,props=__rest(_a,["className"]),rootClassNames=clsx("denhaag-table__caption",className);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("caption",__assign({className:rootClassNames},props),props.children)},TableHead=function(_a){var className=_a.className,props=__rest(_a,["className"]),rootClassNames=clsx("denhaag-table__head",className);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead",__assign({className:rootClassNames},props),props.children)},TableHeader=function(_a){var className=_a.className,_b=_a.scope,scope=void 0===_b?"col":_b,href=_a.href,props=__rest(_a,["className","scope","href"]),rootClassNames=clsx("denhaag-table__heading",className,{"denhaag-table__heading--link":href});return"col"===scope&&(props["aria-sort"]="none"),href?react__WEBPACK_IMPORTED_MODULE_0__.createElement("th",__assign({className:rootClassNames},props,{scope}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{href},props.children)):react__WEBPACK_IMPORTED_MODULE_0__.createElement("th",__assign({className:rootClassNames},props,{scope}),props.children)};Table.__docgenInfo={description:"Table component based on the <table> element.\nRepresents tabular data -- information presented in a two-dimensional table comprised of rows and columns of cells containing data.",methods:[],displayName:"Table"},TableBody.__docgenInfo={description:"TableBody component based on the <tbody> element.\nEncapsulates a set of <TableRow> (<tr> elements), indicating that they comprise the body of the <Table> (<table>).",methods:[],displayName:"TableBody"},TableCaption.__docgenInfo={description:"TableCaption component based on the <caption> element.\nSpecifies the caption (or title) of a table.",methods:[],displayName:"TableCaption"},TableCell.__docgenInfo={description:"TableCell component based on the <td> element.\nDefines a cell of a table that contains data. It participates in the table model.",methods:[],displayName:"TableCell"},TableHead.__docgenInfo={description:"TableHead component based on the <thead> element.\nDefines a set of rows defining the head of the columns of the table.",methods:[],displayName:"TableHead"},TableHeader.__docgenInfo={description:"TableHeader component based on the <th> element.\nDefines a cell as header of a group of table cells. The exact nature of this group is defined by the scope and headers attributes.",methods:[],displayName:"TableHeader"},TableRow.__docgenInfo={description:"TableRow component based on the <tr> element.\nDefines a row of cells in a table. The row's cells can then be established using a mix of <TableCell> (<td>) and <TableHeader> (<th>) elements.",methods:[],displayName:"TableRow"}},"../../components/Table/README.md":module=>{module.exports="# Table\n\nTables organize and display information from a data set into rows and columns.\n\n## When to use\n\nUse a table for displaying data that is intended to be easily scanned and compared.\n\n## Alternatives and related components\n\nUse lists to create an actionable list of related items that link to details pages, such as a list of customers.\n\n## Anatomy\n\nThe table consists of:\n\n1. Caption: describes the table.\n2. Table header: title for the column header.\n3. Table row: the data.\n\n## (Interactive) states\n\nThe table contains the states normal, hover and focus.\n\n## Design properties\n\n### Typography\n\n- Caption: TheMix/xl/700\n- Table header: TheSans/md/700\n- Table row: TheSans/md/400\n\n### Color\n\n- Caption: text color black\n- Column header: text color Grey/4\n- Table row: text color Grey/4\n\n### Interactive states\n\n- Hover: table row background-color Warm/grey\n- Focus: container border color Ocher/5\n\n### Structure\n\n- Table header: padding 16px, margin-top 24px\n- Table row: padding 16px\n\n## Accessibility\n\nWhen tables are used to show data, the header cells that relate to the data cells need to be programmatically linked. This makes table navigation for screen readers less painful.\n\nSimple tables can have up to one level of heading. One row of headers and/or one column of headings. A table with more than one row or more than one column of headings is considered to be a complex table. Each table header cell should have <th scope='col'> or <th scope='row'>.\n\nNote: Simple tables with headers in the first row and/or column don’t actually need the scope attribute for assistive technology to read them correctly.\n\nComplex tables are tables with more than two levels of headers. Each header should be given a unique id and each data cell should have a headers attribute with each related header cell’s id listed.\n\nIf a table has text associated with it, ensure the text is programmatically linked to the table. This is usually with a <caption> element. This element should be the first element under the <table> element. While a caption is not required, it can be very helpful to screen reader users navigating the page. A caption element is strongly encouraged on data tables as it gives context to the data.\n\n- Use tables for tabular data. Don’t use it for layout.\n- A table requires a caption element. The summary attribute is deprecated in HTML5.\n- In order to be well-formed and appear in the accessibility tree for assistive technology, a table requires the table head (<thead>) and table body (<tbody>) elements.\n\n## Content guidelines\n\n- Keep headers informative, descriptive and concise so that they can be read at a glance.\n- Ensure headers include units of measurement symbols so they aren’t repeated throughout the columns.\n- Ensure headers start in a capital letter and don’t end with commas, semicolons or full stops.\n- Ensure content starts in a capital letter and doesn’t include units of measurements.\n- Wrap instead of truncate content. This is because if row titles start with the same word, they’ll all appear the same when truncated.\n- Use decimals consistently.\n\n## Best practices\n\n### Dos\n\nTables should:\n\n- Display a collection of structured data.\n- Have a logical column header.\n- Use a caption to describe a table in the same way you would use a heading. A caption helps users find, navigate and understand tables.\n- Show column/table headers on desktop view and row headers on a mobile view.\n- Only use row headers on desktop if it is going to be used as a list.\n\n### Don’ts\n\nTables should:\n\n- Not be used when a more complex display of the data or interactions are required.\n- Not position contents on page or lay out a page design. Instead, use Grid.\n- Not necessarily need captions when there is already a heading above the table that describes the data.\n- Not use zebra stripes.\n\n### Custom header widths\n\nUse custom widths based on the expected length of the data under each corresponding column. By default the table is full width, however the table can be used with the grid to take up a desired amount of horizontal space on the page.\n\n### Text alignment\n\nBy default, all the column data should be left-aligned. Use the right alignment for numeric values. This helps the user to identify number size.\n\n- Align textual data to the left\n- Align numeric values to the right\n- Align numeric data not related to size to the left (ie. date and phone number)\n- Align headers according to their column data\n- Don’t center align.\n\n## References\n\n[https://designsystem.gov.au/components/table/](https://designsystem.gov.au/components/table/)\n[https://design.elisa.fi/9b207b2c3/p/1592f3-table/b/62f98d](https://design.elisa.fi/9b207b2c3/p/1592f3-table/b/62f98d)\n[https://inclusive-components.design/data-tables/](https://inclusive-components.design/data-tables/)\n[https://luna.sainsburys.co.uk/components/tables](https://luna.sainsburys.co.uk/components/tables)\n[https://www.a11yproject.com/posts/accessible-data-tables/](https://www.a11yproject.com/posts/accessible-data-tables/)\n"}}]);