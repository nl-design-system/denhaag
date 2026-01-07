<!-- @license CC0-1.0 -->

# Accordion

An accordion is a vertically stacked list of headers that reveal or hide associated sections of content.

## When to use

An accordion is used to:

- Organize related information.
- Shorten pages and reduce scrolling when content is not crucial to read in full.
- When space is at a premium and long content cannot be displayed all at once, like on a mobile interface or in a side panel.

## Alternatives and related components

None.

## Anatomy

The accordion consists of:

1. Title: contains the section title and is control for revealing the panel.
2. Icon: indicates if the panel is open or closed.
3. Panel: the section of content associated with an accordion header.
4. Container

## (Interactive) states

The accordion contains the states inactive, active, hover, disabled and focus.

## Design properties

### Typography

- Title inactive: TheSans/md/400
- Title active: TheSans/md/700
- Panel: TheSans/md/400

### Color

- Title: text color Grey/4
- Icon: svg color Grey/4
- Panel: text color Grey/4
- Container: border color Grey/2

### Interactive states

- Active: title text color Blue/3, icon svg color Blue/3
- Hover: title text color Blue/3, icon svg color Blue/3
- Disabled: title text color Grey/2, icon svg color Grey/2
- Focus: title text color Grey/4, icon svg color Grey/4, container border color Ocher/5

### Structure

- Title inactive: padding-top and padding-bottom 12px, height 48px
- Title active: padding top and padding-bottom 16px
- Title: margin-left 16px
- Icon: height and width 24px, padding-right 16px
- Panel: padding-right 16px
- Container: border 1px

## Accessibility

Availability of accordion content to assistive technology requires the use of aria-controls and toggling aria-expanded as regions are expanded and collapsed.

## Content guidelines

### Title

Accordion titles should:

- Be clear because it hides content
- Be as brief as possible while still being clear and descriptive.

If you struggle to come up with clear titles, it might be because the way you’ve separated the content is not clear.

### Panel

Content inside of a section may be split into paragraphs and include sub-headers if needed.

## Best practices

### Dos

Accordions should:

- Have an overview of multiple, related sections of content.
- Show and hide those sections as needed.
- Open as many panels as needed.

### Don’ts

Accordions should:

- Not be used if you can keep the content on a single page.
- Not be used to split up a series of questions into sections.
- Not hide content which is essential to all users.

## References

[https://design-system.service.gov.uk/components/accordion/](https://design-system.service.gov.uk/components/accordion/)
[https://www.nngroup.com/articles/accordions-complex-content/](https://www.nngroup.com/articles/accordions-complex-content/)
