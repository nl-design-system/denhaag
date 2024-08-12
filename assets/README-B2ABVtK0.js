const e=`# Table

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
`;export{e as r};
