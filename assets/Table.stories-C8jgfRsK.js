import{j as e}from"./iframe-D_4PSq6r.js";import{T as j,d as s,a as o,b as n,e as a,c as l,f as t}from"./index-DghFYmFQ.js";import{L as x}from"./index-D3Kg0U2X.js";const g=`# Table

Tables organize and display information from a data set into rows and columns.

## When to use

Use a table for displaying data that is intended to be easily scanned and compared.

## Alternatives and related components

Use lists to create an actionable list of related items that link to details pages, such as a list of customers.

## Anatomy

The table consists of:

1. Caption: describes the table.
2. Table header: title for the column header.
3. Table row: the data.

## (Interactive) states

The table contains the states normal, hover and focus.

## Design properties

### Typography

- Caption: TheMix/xl/700
- Table header: TheSans/md/700
- Table row: TheSans/md/400

### Color

- Caption: text color black
- Column header: text color Grey/4
- Table row: text color Grey/4

### Interactive states

- Hover: table row background-color Warm/grey
- Focus: container border color Ocher/5

### Structure

- Table header: padding 16px, margin-top 24px
- Table row: padding 16px

## Accessibility

When tables are used to show data, the header cells that relate to the data cells need to be programmatically linked. This makes table navigation for screen readers less painful.

Simple tables can have up to one level of heading. One row of headers and/or one column of headings. A table with more than one row or more than one column of headings is considered to be a complex table. Each table header cell should have <th scope='col'> or <th scope='row'>.

Note: Simple tables with headers in the first row and/or column don’t actually need the scope attribute for assistive technology to read them correctly.

Complex tables are tables with more than two levels of headers. Each header should be given a unique id and each data cell should have a headers attribute with each related header cell’s id listed.

If a table has text associated with it, ensure the text is programmatically linked to the table. This is usually with a <caption> element. This element should be the first element under the <table> element. While a caption is not required, it can be very helpful to screen reader users navigating the page. A caption element is strongly encouraged on data tables as it gives context to the data.

- Use tables for tabular data. Don’t use it for layout.
- A table requires a caption element. The summary attribute is deprecated in HTML5.
- In order to be well-formed and appear in the accessibility tree for assistive technology, a table requires the table head (<thead>) and table body (<tbody>) elements.

## Content guidelines

- Keep headers informative, descriptive and concise so that they can be read at a glance.
- Ensure headers include units of measurement symbols so they aren’t repeated throughout the columns.
- Ensure headers start in a capital letter and don’t end with commas, semicolons or full stops.
- Ensure content starts in a capital letter and doesn’t include units of measurements.
- Wrap instead of truncate content. This is because if row titles start with the same word, they’ll all appear the same when truncated.
- Use decimals consistently.

## Best practices

### Dos

Tables should:

- Display a collection of structured data.
- Have a logical column header.
- Use a caption to describe a table in the same way you would use a heading. A caption helps users find, navigate and understand tables.
- Show column/table headers on desktop view and row headers on a mobile view.
- Only use row headers on desktop if it is going to be used as a list.

### Don’ts

Tables should:

- Not be used when a more complex display of the data or interactions are required.
- Not position contents on page or lay out a page design. Instead, use Grid.
- Not necessarily need captions when there is already a heading above the table that describes the data.
- Not use zebra stripes.

### Custom header widths

Use custom widths based on the expected length of the data under each corresponding column. By default the table is full width, however the table can be used with the grid to take up a desired amount of horizontal space on the page.

### Text alignment

By default, all the column data should be left-aligned. Use the right alignment for numeric values. This helps the user to identify number size.

- Align textual data to the left
- Align numeric values to the right
- Align numeric data not related to size to the left (ie. date and phone number)
- Align headers according to their column data
- Don’t center align.

## References

[https://designsystem.gov.au/components/table/](https://designsystem.gov.au/components/table/)
[https://design.elisa.fi/9b207b2c3/p/1592f3-table/b/62f98d](https://design.elisa.fi/9b207b2c3/p/1592f3-table/b/62f98d)
[https://inclusive-components.design/data-tables/](https://inclusive-components.design/data-tables/)
[https://luna.sainsburys.co.uk/components/tables](https://luna.sainsburys.co.uk/components/tables)
[https://www.a11yproject.com/posts/accessible-data-tables/](https://www.a11yproject.com/posts/accessible-data-tables/)
`,w={children:e.jsxs(e.Fragment,{children:[e.jsx(s,{children:"He-Man and Skeletor facts"}),e.jsx(o,{children:e.jsxs(n,{children:[e.jsx(a,{}),e.jsx(l,{className:"heman",children:"He-Man"}),e.jsx(l,{className:"skeletor",children:"Skeletor"})]})}),e.jsxs(t,{children:[e.jsxs(n,{children:[e.jsx(l,{scope:"row",children:"Role"}),e.jsx(a,{children:"Hero"}),e.jsx(a,{children:"Villain"})]}),e.jsxs(n,{children:[e.jsx(l,{scope:"row",children:"Weapon"}),e.jsx(a,{children:"Power Sword"}),e.jsx(a,{children:"Havoc Staff"})]}),e.jsxs(n,{children:[e.jsx(l,{scope:"row",children:"Dark secret"}),e.jsx(a,{children:"Expert florist"}),e.jsx(a,{children:"Cries at romcoms"})]})]})]})},C={component:j,args:w,tags:["autodocs"],parameters:{docs:{description:{component:g}}}},r={},d={args:{...r.args,children:e.jsxs(e.Fragment,{children:[e.jsx(s,{children:"He-Man and Skeletor facts"}),e.jsx(o,{children:e.jsxs(n,{tabIndex:-1,children:[e.jsx(a,{}),e.jsx(l,{className:"heman",children:"He-Man"}),e.jsx(l,{className:"skeletor",children:"Skeletor"})]})}),e.jsxs(t,{children:[e.jsxs(n,{children:[e.jsx(l,{scope:"row",children:"Role"}),e.jsx(a,{children:"Hero"}),e.jsx(a,{children:"Villain"})]}),e.jsxs(n,{className:"denhaag-table__row--hover",children:[e.jsx(l,{scope:"row",children:"Weapon"}),e.jsx(a,{children:"Power Sword"}),e.jsx(a,{children:"Havoc Staff"})]}),e.jsxs(n,{children:[e.jsx(l,{scope:"row",children:"Dark secret"}),e.jsx(a,{children:"Expert florist"}),e.jsx(a,{children:"Cries at romcoms"})]})]})]})}},c={args:{...r.args,children:e.jsxs(e.Fragment,{children:[e.jsx(s,{children:"He-Man and Skeletor facts"}),e.jsx(o,{children:e.jsxs(n,{tabIndex:-1,children:[e.jsx(a,{}),e.jsx(l,{className:"heman",children:"He-Man"}),e.jsx(l,{className:"skeletor",children:"Skeletor"})]})}),e.jsxs(t,{children:[e.jsxs(n,{children:[e.jsx(l,{scope:"row",children:"Role"}),e.jsx(a,{children:"Hero"}),e.jsx(a,{children:"Villain"})]}),e.jsxs(n,{className:"denhaag-table__row--focus",children:[e.jsx(l,{scope:"row",children:"Weapon"}),e.jsx(a,{children:"Power Sword"}),e.jsx(a,{children:"Havoc Staff"})]}),e.jsxs(n,{children:[e.jsx(l,{scope:"row",children:"Dark secret"}),e.jsx(a,{children:"Expert florist"}),e.jsx(a,{children:"Cries at romcoms"})]})]})]})}},i={args:{...r.args,children:e.jsxs(e.Fragment,{children:[e.jsx(s,{children:"He-Man and Skeletor facts"}),e.jsx(o,{children:e.jsxs(n,{children:[e.jsx(l,{}),e.jsx(l,{className:"heman denhaag-table__heading--align-center",children:"He-Man"}),e.jsx(l,{className:"skeletor denhaag-table__heading--align-end",children:"Skeletor"})]})}),e.jsxs(t,{children:[e.jsxs(n,{children:[e.jsx(l,{scope:"row",children:"Role"}),e.jsx(a,{className:"denhaag-table__cell--align-center",children:"Hero"}),e.jsx(a,{className:"denhaag-table__cell--align-end",children:"Villain"})]}),e.jsxs(n,{children:[e.jsx(l,{scope:"row",children:"Weapon"}),e.jsx(a,{className:"denhaag-table__cell--align-center",children:"Power Sword"}),e.jsx(a,{className:"denhaag-table__cell--align-end",children:"Havoc Staff"})]}),e.jsxs(n,{children:[e.jsx(l,{scope:"row",children:"Dark secret"}),e.jsx(a,{className:"denhaag-table__cell--align-center",children:"Expert florist"}),e.jsx(a,{className:"denhaag-table__cell--align-end",children:"Cries at romcoms"})]})]})]})}},b={args:{...r.args,children:e.jsxs(e.Fragment,{children:[e.jsx(s,{children:"He-Man and Skeletor facts"}),e.jsx(o,{children:e.jsxs(n,{children:[e.jsx(l,{}),e.jsx(l,{className:"heman",children:"He-Man"}),e.jsx(l,{className:"skeletor",children:"Skeletor"})]})}),e.jsxs(t,{children:[e.jsxs(n,{children:[e.jsx(l,{scope:"row",children:"Role"}),e.jsx(a,{children:"Hero"}),e.jsx(a,{children:"Villain"})]}),e.jsxs(n,{children:[e.jsx(l,{scope:"row",className:"denhaag-table__cell--align-top",children:"Weapon"}),e.jsxs(a,{className:"denhaag-table__cell--align-top",children:["Power",e.jsx("br",{}),"Sword"]}),e.jsxs(a,{className:"denhaag-table__cell--align-top",children:["Havoc",e.jsx("br",{}),"Staff"]})]}),e.jsxs(n,{children:[e.jsx(l,{scope:"row",className:"denhaag-table__cell--align-bottom",children:"Dark secret"}),e.jsxs(a,{className:"denhaag-table__cell--align-bottom",children:["Expert",e.jsx("br",{}),"florist"]}),e.jsxs(a,{className:"denhaag-table__cell--align-bottom",children:["Cries",e.jsx("br",{}),"at",e.jsx("br",{}),"romcoms"]})]})]})]})}},h={args:{...r.args,children:e.jsxs(e.Fragment,{children:[e.jsx(s,{children:"Kosten overzicht"}),e.jsx(o,{children:e.jsxs(n,{tabIndex:-1,children:[e.jsx(l,{children:"Soort kosten"}),e.jsx(l,{children:"Bedrag 2021"})]})}),e.jsxs(t,{children:[e.jsxs(n,{children:[e.jsx(a,{children:"Beheerkosten (administratie) per jaar"}),e.jsx(a,{children:"€ 27,50"})]}),e.jsxs(n,{children:[e.jsx(a,{children:"Afkoopsom beheerkosten"}),e.jsx(a,{children:"€ 232"})]}),e.jsxs(n,{children:[e.jsx(a,{children:"Splitsingskosten per appartementsrecht of per recht van erfpacht"}),e.jsx(a,{children:"€ 153"})]})]})]})}},T={args:{...r.args,children:e.jsxs(e.Fragment,{children:[e.jsx(s,{children:"Voorbeeld met extreem lange titel die je eigenlijk wilt voorkomen."}),e.jsx(o,{children:e.jsxs(n,{tabIndex:-1,children:[e.jsx(l,{children:"Titel met een hele lange omschrijving die overloopt"}),e.jsx(l,{children:"Tijd"}),e.jsx(l,{children:"Leeftijd"})]})}),e.jsxs(t,{children:[e.jsxs(n,{children:[e.jsx(a,{children:"maandag"}),e.jsx(a,{children:"11.00 tot 12,30"}),e.jsx(a,{children:"Alle leeftijden"})]}),e.jsxs(n,{children:[e.jsx(a,{children:"dinsdag"}),e.jsx(a,{children:"8.30 tot 11,30"}),e.jsx(a,{children:"Alle leeftijden"})]}),e.jsxs(n,{children:[e.jsx(a,{children:"donderdag"}),e.jsx(a,{children:"11.00 tot 12,30"}),e.jsx(a,{children:"Alle leeftijden"})]})]})]})}},m={args:{...r.args,children:e.jsxs(e.Fragment,{children:[e.jsx(s,{children:"He-Man and Skeletor facts"}),e.jsx(o,{children:e.jsxs(n,{tabIndex:-1,children:[e.jsx(a,{}),e.jsx(l,{className:"heman",children:"He-Man"}),e.jsx(l,{className:"skeletor",children:"Skeletor"})]})}),e.jsxs(t,{children:[e.jsxs(n,{children:[e.jsx(l,{scope:"row",href:"#example",children:"Role"}),e.jsx(a,{href:"#example",children:"Hero"}),e.jsx(a,{href:"#example",children:"Villain"})]}),e.jsxs(n,{children:[e.jsx(l,{scope:"row",href:"#example",children:"Weapon"}),e.jsx(a,{href:"#example",children:"Power Sword"}),e.jsx(a,{href:"#example",children:"Havoc Staff"})]}),e.jsxs(n,{children:[e.jsx(l,{scope:"row",href:"#example",children:"Dark secret"}),e.jsx(a,{href:"#example",children:"Expert florist"}),e.jsx(a,{href:"#example",children:"Cries at romcoms"})]})]})]})}},p={args:{...r.args,children:e.jsxs(e.Fragment,{children:[e.jsx(s,{children:"He-Man and Skeletor facts"}),e.jsx(o,{children:e.jsxs(n,{tabIndex:-1,children:[e.jsx(a,{}),e.jsx(l,{className:"heman",children:"He-Man"}),e.jsx(l,{className:"skeletor",children:"Skeletor"})]})}),e.jsxs(t,{children:[e.jsxs(n,{children:[e.jsx(l,{scope:"row",children:"Role"}),e.jsx(a,{children:"Hero"}),e.jsx(a,{children:e.jsx(x,{href:"#example",children:"Villain"})})]}),e.jsxs(n,{children:[e.jsx(l,{scope:"row",children:"Weapon"}),e.jsx(a,{children:"Power Sword"}),e.jsx(a,{children:e.jsx(x,{href:"#example",children:"Havoc Staff"})})]}),e.jsxs(n,{children:[e.jsx(l,{scope:"row",children:"Dark secret"}),e.jsx(a,{children:"Expert florist"}),e.jsx(a,{children:e.jsx(x,{href:"#example",children:"Cries at romcoms"})})]})]})]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    children: <>
        <TableCaption>He-Man and Skeletor facts</TableCaption>
        <TableHead>
          <TableRow tabIndex={-1}>
            <TableCell></TableCell>
            <TableHeader className="heman">He-Man</TableHeader>
            <TableHeader className="skeletor">Skeletor</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableHeader scope="row">Role</TableHeader>
            <TableCell>Hero</TableCell>
            <TableCell>Villain</TableCell>
          </TableRow>
          <TableRow className="denhaag-table__row--hover">
            <TableHeader scope="row">Weapon</TableHeader>
            <TableCell>Power Sword</TableCell>
            <TableCell>Havoc Staff</TableCell>
          </TableRow>
          <TableRow>
            <TableHeader scope="row">Dark secret</TableHeader>
            <TableCell>Expert florist</TableCell>
            <TableCell>Cries at romcoms</TableCell>
          </TableRow>
        </TableBody>
      </>
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    children: <>
        <TableCaption>He-Man and Skeletor facts</TableCaption>
        <TableHead>
          <TableRow tabIndex={-1}>
            <TableCell></TableCell>
            <TableHeader className="heman">He-Man</TableHeader>
            <TableHeader className="skeletor">Skeletor</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableHeader scope="row">Role</TableHeader>
            <TableCell>Hero</TableCell>
            <TableCell>Villain</TableCell>
          </TableRow>
          <TableRow className="denhaag-table__row--focus">
            <TableHeader scope="row">Weapon</TableHeader>
            <TableCell>Power Sword</TableCell>
            <TableCell>Havoc Staff</TableCell>
          </TableRow>
          <TableRow>
            <TableHeader scope="row">Dark secret</TableHeader>
            <TableCell>Expert florist</TableCell>
            <TableCell>Cries at romcoms</TableCell>
          </TableRow>
        </TableBody>
      </>
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    children: <>
        <TableCaption>He-Man and Skeletor facts</TableCaption>
        <TableHead>
          <TableRow>
            <TableHeader></TableHeader>
            <TableHeader className="heman denhaag-table__heading--align-center">He-Man</TableHeader>
            <TableHeader className="skeletor denhaag-table__heading--align-end">Skeletor</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableHeader scope="row">Role</TableHeader>
            <TableCell className="denhaag-table__cell--align-center">Hero</TableCell>
            <TableCell className="denhaag-table__cell--align-end">Villain</TableCell>
          </TableRow>
          <TableRow>
            <TableHeader scope="row">Weapon</TableHeader>
            <TableCell className="denhaag-table__cell--align-center">Power Sword</TableCell>
            <TableCell className="denhaag-table__cell--align-end">Havoc Staff</TableCell>
          </TableRow>
          <TableRow>
            <TableHeader scope="row">Dark secret</TableHeader>
            <TableCell className="denhaag-table__cell--align-center">Expert florist</TableCell>
            <TableCell className="denhaag-table__cell--align-end">Cries at romcoms</TableCell>
          </TableRow>
        </TableBody>
      </>
  }
}`,...i.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    children: <>
        <TableCaption>He-Man and Skeletor facts</TableCaption>
        <TableHead>
          <TableRow>
            <TableHeader></TableHeader>
            <TableHeader className="heman">He-Man</TableHeader>
            <TableHeader className="skeletor">Skeletor</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableHeader scope="row">Role</TableHeader>
            <TableCell>Hero</TableCell>
            <TableCell>Villain</TableCell>
          </TableRow>
          <TableRow>
            <TableHeader scope="row" className="denhaag-table__cell--align-top">
              Weapon
            </TableHeader>
            <TableCell className="denhaag-table__cell--align-top">
              Power
              <br />
              Sword
            </TableCell>
            <TableCell className="denhaag-table__cell--align-top">
              Havoc
              <br />
              Staff
            </TableCell>
          </TableRow>
          <TableRow>
            <TableHeader scope="row" className="denhaag-table__cell--align-bottom">
              Dark secret
            </TableHeader>
            <TableCell className="denhaag-table__cell--align-bottom">
              Expert
              <br />
              florist
            </TableCell>
            <TableCell className="denhaag-table__cell--align-bottom">
              Cries
              <br />
              at
              <br />
              romcoms
            </TableCell>
          </TableRow>
        </TableBody>
      </>
  }
}`,...b.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    children: <>
        <TableCaption>Kosten overzicht</TableCaption>
        <TableHead>
          <TableRow tabIndex={-1}>
            <TableHeader>Soort kosten</TableHeader>
            <TableHeader>Bedrag 2021</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Beheerkosten (administratie) per jaar</TableCell>
            <TableCell>&euro; 27,50</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Afkoopsom beheerkosten</TableCell>
            <TableCell>&euro; 232</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Splitsingskosten per appartementsrecht of per recht van erfpacht</TableCell>
            <TableCell>&euro; 153</TableCell>
          </TableRow>
        </TableBody>
      </>
  }
}`,...h.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    children: <>
        <TableCaption>Voorbeeld met extreem lange titel die je eigenlijk wilt voorkomen.</TableCaption>
        <TableHead>
          <TableRow tabIndex={-1}>
            <TableHeader>Titel met een hele lange omschrijving die overloopt</TableHeader>
            <TableHeader>Tijd</TableHeader>
            <TableHeader>Leeftijd</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>maandag</TableCell>
            <TableCell>11.00 tot 12,30</TableCell>
            <TableCell>Alle leeftijden</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>dinsdag</TableCell>
            <TableCell>8.30 tot 11,30</TableCell>
            <TableCell>Alle leeftijden</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>donderdag</TableCell>
            <TableCell>11.00 tot 12,30</TableCell>
            <TableCell>Alle leeftijden</TableCell>
          </TableRow>
        </TableBody>
      </>
  }
}`,...T.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    children: <>
        <TableCaption>He-Man and Skeletor facts</TableCaption>
        <TableHead>
          <TableRow tabIndex={-1}>
            <TableCell></TableCell>
            <TableHeader className="heman">He-Man</TableHeader>
            <TableHeader className="skeletor">Skeletor</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableHeader scope="row" href="#example">
              Role
            </TableHeader>
            <TableCell href="#example">Hero</TableCell>
            <TableCell href="#example">Villain</TableCell>
          </TableRow>
          <TableRow>
            <TableHeader scope="row" href="#example">
              Weapon
            </TableHeader>
            <TableCell href="#example">Power Sword</TableCell>
            <TableCell href="#example">Havoc Staff</TableCell>
          </TableRow>
          <TableRow>
            <TableHeader scope="row" href="#example">
              Dark secret
            </TableHeader>
            <TableCell href="#example">Expert florist</TableCell>
            <TableCell href="#example">Cries at romcoms</TableCell>
          </TableRow>
        </TableBody>
      </>
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    children: <>
        <TableCaption>He-Man and Skeletor facts</TableCaption>
        <TableHead>
          <TableRow tabIndex={-1}>
            <TableCell></TableCell>
            <TableHeader className="heman">He-Man</TableHeader>
            <TableHeader className="skeletor">Skeletor</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableHeader scope="row">Role</TableHeader>
            <TableCell>Hero</TableCell>
            <TableCell>
              <Link href="#example">Villain</Link>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableHeader scope="row">Weapon</TableHeader>
            <TableCell>Power Sword</TableCell>
            <TableCell>
              <Link href="#example">Havoc Staff</Link>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableHeader scope="row">Dark secret</TableHeader>
            <TableCell>Expert florist</TableCell>
            <TableCell>
              <Link href="#example">Cries at romcoms</Link>
            </TableCell>
          </TableRow>
        </TableBody>
      </>
  }
}`,...p.parameters?.docs?.source}}};const k=["Default","Hover","Focus","HorizontalAlign","VerticalAlign","Simple","LongTitle","WithLink","WithActions"];export{r as Default,c as Focus,i as HorizontalAlign,d as Hover,T as LongTitle,h as Simple,b as VerticalAlign,p as WithActions,m as WithLink,k as __namedExportsOrder,C as default};
