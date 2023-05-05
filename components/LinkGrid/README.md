# Link Group

## Introduction

A collection of links with one shared topic, with an optional background image.

## When to use

Use the link grid with a background image to visualise the shared topic of the links, and to make the page a bit more playful.
The background image (if used), must clearly align with the topic of the links in the grid.

## When not to use

Do not use this component immediately below a hero component. This would cause too much visual distractions for the user to clearly understand the page's main purpose.

If you must use this component immediately following a hero, ensure that you disable the background image to avoid visual distractions.

## Anatomy

The link grid consists of:

1. Title (optional): The main shared topic of the grid, each link item should be associated with this main topic
2. Link grid: The component used for navigation, with individual link grid items
3. Panel: The background color behind the link grid
4. Image: The background image, used to visualise the grid's shared topic

## (Interactive) states

None.

## Design properties

### Typography

- Title: TheMix/xl/700 (standard heading)

### Colors

- Panel: background color Ocher/3

### Structure

- Link grid: margin-top: 16px
- Panel:
  - 1768: padding-top & padding-bottom: 72px
  - 1280: padding-top & padding-bottom: 64px
  - 1024: padding-top & padding-bottom: 56px
  - 768: padding-top & padding-bottom: 48px
  - 360: padding-top & padding-bottom: 48px

### Size

Text

## Animation

TBC

## Best practices

### Do's

-

### Don'ts

- Do not use the link grid component immediately after a hero

### Grid

- With a > 1024 viewport, a maximum of 3 link items (columns) are allowed in 1 grid row
  - Only 2 rows are allowed, for a maximum of 6 link items (3 columns x 2 rows)
- With a > 768 viewport, a maximum of 2 link items (columns) are allowed in 1 grid row
  - Only 3 rows are allowed, for a maximum of 6 link items (2 columns x 3 rows)
- With a > 360 viewport, a maximum of 1 link item (columns) are allowed in 1 grid row
  - Only 6 rows are allowed, for a maximum of 6 link items (1 columns x 6 rows)

## Content guidelines

### Title

- The title must be short & powerful
- The title must capture the essence of all items (topics) in the link grid
- If you are struggling to think of a suitable title, it might be best not to put a title at all

### Background image

- The image is there to help convey the right message
- The image must be aligned with the Title and link grid items, there must be a clear relation between the background image and the content (i.e. the title and link grid items)

## Accessibility

To be confirmed

## Related components

None

## References

None
