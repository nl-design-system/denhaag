<!-- @license CC0-1.0 -->

# Card-as-link

[![npm version](https://img.shields.io/npm/v/@gemeente-denhaag/)](https://www.npmjs.com/package/@gemeente-denhaag/)

Card-as-link is used as a navigation link to other (detail) pages.


## When to use

In list views that usually show a list of items to be clicked on, pointing to their respective content. Such as: Cases, Plans, Products, Tasks, Topics, Toptasks, Messages.

But Card-as-link can also be used for a Login Card


## Alternatives and related components

If the cards do not have any link or have more than 1 link, use the 'Card' wrapper.

(At time of writing we have the 'News Card' for this pattern).


## Anatomy

The Card-as-link consists of:

1. Pre-header
2. Header
3. Body
4. Footer


## (Interactive) states

The Card-as-link contains the states default, hover, active and focus/focus-visible.

Note that disabled/archived is not an 'interaction' state but a visual variant, since archived cards still need to be clickable (so users can see data from the past, like completed Plans or archived Cases).

Important: note that this Card-as-link is currently covered with one large clickable area.

The 'real link' is in the footer and then covers the card with CSS (this styling trick is inside _action.scss). Screenreaders will read the text coming from the aria-describedBy label.

## Design properties

### Typography

  --denhaag-card-as-link-heading-font-family: var(--denhaag-card-as-link-case-heading-font-family);

  --denhaag-card-as-link-heading-font-size: var(--denhaag-card-as-link-case-heading-font-size);

  --denhaag-card-as-link-heading-font-weight: var(--denhaag-card-as-link-case-heading-font-weight);

  --denhaag-card-as-link-heading-line-height: var(--denhaag-card-as-link-case-heading-line-height);

  --denhaag-card-as-link-description-font-family: var(--denhaag-card-as-link-case-description-font-family);

  --denhaag-card-as-link-description-font-size: var(--denhaag-card-as-link-case-description-font-size);

  --denhaag-card-as-link-description-font-weight: var(--denhaag-card-as-link-case-description-font-weight);

  --denhaag-card-as-link-description-line-height: var(--denhaag-card-as-link-case-description-line-height);

### Colors

--denhaag-card-as-link-background-color

--denhaag-card-as-link-border-color

--denhaag-card-as-link-decoration-background-color

--denhaag-card-as-link-color

--denhaag-card-as-link-heading-color

--denhaag-card-as-link-case-background-color

--denhaag-card-as-link-case-border-color

--denhaag-card-as-link-case-color

--denhaag-card-as-link-case-decoration-background-color

--denhaag-card-as-link-case-decoration-paper-background-color

--denhaag-card-as-link-case-heading-color

--denhaag-card-as-link-case-context-color

--denhaag-card-as-link-case-link-icon-color

### Interactive states

**Active**

todo.card-as-link.active.background-color	{basis.color.default.bg-active}

todo.card-as-link.active.border-color	{todo.card-as-link.border-color}

todo.card-as-link.case.active.background-color	{basis.color.accent-1.bg-active}

todo.card-as-link.case.active.border-color	{todo.card-as-link.case.border-color}

todo.card-as-link.case.archived.active.background-color	{basis.color.default.bg-active}

todo.card-as-link.case.archived.active.border-color	{todo.card-as-link.case.border-color}

todo.card-as-link.plan.active.background-color	{basis.color.accent-1.bg-active}

todo.card-as-link.plan.active.border-color	{basis.color.accent-1.bg-active}

todo.card-as-link.plan.archived.active.background-color	{basis.color.default.bg-active}

todo.card-as-link.plan.archived.active.border-color	{basis.color.default.bg-active}

**Hover**

todo.card-as-link.hover.background-color	{basis.color.default.bg-hover}

todo.card-as-link.hover.border-color	{todo.card-as-link.border-color}

todo.card-as-link.heading.hover.text-decoration	None

todo.card-as-link.label.hover.text-decoration	None

todo.card-as-link.case.hover.background-color	{basis.color.accent-1.bg-hover}

todo.card-as-link.case.hover.border-color	{todo.card-as-link.case.border-color}

todo.card-as-link.case.archived.hover.background-color	{basis.color.default.bg-hover}

todo.card-as-link.case.archived.hover.border-color	{todo.card-as-link.case.border-color}

todo.card-as-link.plan.hover.background-color	{basis.color.accent-1.bg-hover}

todo.card-as-link.plan.hover.border-color	{basis.color.accent-1.bg-active}

todo.card-as-link.plan.archived.hover.background-color	{basis.color.default.bg-hover}

todo.card-as-link.plan.archived.hover.border-color

**Focus**

todo.card-as-link.focus.background-color	{basis.focus.background-color}
todo.card-as-link.focus.border-color	{basis.color.transparent}
todo.card-as-link.focus.color	{basis.focus.color}


### Structure

Normal

Archived

List-view

## Accessibility

Semantic HTML Headings may only be used if there is actual content in the Card. If no content: use 'label' (=paragraph) so as not to offer and empty hierarchy list to screen-readers.

Also be weary of the order in which the Card is built: HTML order should always be meaningful (order can be reversed in CSS so 'pre-heading' looks visually as if it comes before the Heading, but in HTML the Heading needs to always come first).

### Navigation

Users generally expect cards to navigate as links.

### Keyboard support

Card-as-link uses the browser's default settings for keyboard interactions.

- Give cards keyboard focus with the tab key (or shift + tab when tabbing backwards)
- Activate cards with the enter / return key or the space key

## Content guidelines

Users should be able to anticipate what will happen when they click a card.

## Best practices

### Do's

Card-as-link must:

- ...

### Don'ts

Card-as-link must not:

- ...

## References

https://github.com/orgs/nl-design-system/discussions/422 <br/>
https://nldesignsystem.nl/card-as-link/
