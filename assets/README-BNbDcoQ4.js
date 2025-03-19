const e=`# Data list

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
`;export{e as r};
