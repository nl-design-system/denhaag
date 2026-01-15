const e=`<!-- @license CC0-1.0 -->

# Pagination

[![npm version](https://img.shields.io/npm/v/@gemeente-denhaag/pagination.svg)](https://www.npmjs.com/package/@gemeente-denhaag/pagination)

Pagination is used for splitting up content or data into several pages, with a control for navigating to the next or previous page.

## When to use

Generally, pagination is used if there are more than 25 items displayed in one view.

## Alternatives and related components

None.

## Anatomy

The pagination consists of:

1. Page: shows the number of pages
2. Arrow: allows you to go to the previous or next page

## (Interactive) states

The pagination contains the states inactive, active, hover and focus.

## Design properties

### Typography

- Page: TheSans/md/400

### Color

- Inactive page: text color Grey/4
- Active page: text color white, background-color Green/3
- Arrow: svg color Grey/4

### Interactive states

- Hover inactive: page text color Green/3
- Hover active: page text color white, background-color Green/3
- Disabled inactive: page text color Grey/2
- Disabled active: page text color white, background-color Grey/2
- Focus: border color Ocher/5

### Structure

- Page: height and width 32px
- Arrow: height and width 20px
- Arrow-left: padding-right 10px
- Arrow-right: padding-left 10px

## Accessibility

[technical requirements]

## Content guidelines

None.

## Pagination alignment

The pagination can be left, right and center aligned based on the parent. The alignment depends on the layout of the rest of elements.

## Best practices

### Dos

Paginations should:

- Only be used for lists with more than 25 items
- Clearly identify which page the user is on by displaying the current page number
- Be placed at the bottom of a long list that has been split up into pages
- Navigate to the previous and next set of items in the paged list
- Hint when users are at the first or the last page by disabling the corresponding button
- Always show the first and last page
- Replace infinite scrolling on very long pages

### Don’ts

Paginations should:

- Not show more than 5 pages next to each other. Instead, use the dots and show on the right the last page

### Logic

Only use dots if there are more than 5 pages.

- If there are many pages and the user is on one of the first three pages, show these pages followed by the dots and then show the last page.
- If there are many pages and the user is on one of the last three pages, show the first page followed by the dots and then show the last 4 pages.
- If there are many pages, always show the active page in the middle and show the first and last page next to the dots.

## References

[Figma Design](https://www.figma.com/file/JpoY3waVoQGlLQzQXTL9nn/Design-System-Gemeente-Den-Haag?node-id=1673%3A231)
[https://www.smashingmagazine.com/2007/11/pagination-gallery-examples-and-good-practices/](https://www.smashingmagazine.com/2007/11/pagination-gallery-examples-and-good-practices/)
`;export{e as r};
