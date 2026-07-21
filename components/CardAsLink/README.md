<!-- @license CC0-1.0 -->

# Card-as-link

[![npm version](https://img.shields.io/npm/v/@gemeente-denhaag/)](https://www.npmjs.com/package/@gemeente-denhaag/)

Card-as-link is used as a navigation link to other (detail) pages.


## When to use

In list views that usually show a list of items to be clicked on, pointing to their respective content. Such as: Cases, Plans, Products, Tasks, Topics, Toptasks, Messages.

But Card-as-link can also be used for a Login Card, and other card-like structures not inside a list .


## Alternatives and related components

If the cards do not have any link or have more than 1 link, use the 'Card' wrapper.

(At time of writing we have the 'News Card' for the latter pattern).


## Anatomy

The Card-as-link consists of:

1. Pre-header (optional) - content-agnostic slot rendered before the Header. Used for a paper-fold/clipboard-style Decoration (`case`, `plan`), an `<img>` (`default`), or a status component such as `Alert`/`DataBadge` (`case-extended`, where it is placed after the Heading in the DOM for accessible reading order - see Accessibility below).
2. Header (optional) - contains the optional pre-heading and the Heading/Label.
3. Body (optional) - contains either a description paragraph (`subTitle`) or a `DescriptionList` (`case-extended`, via the `descriptionList` prop).
4. Footer (optional, shown when there is `metadata` and/or any `href`) - has two fixed zones: `__footer-meta` (left) and `__footer-link-icon` (right), so alignment stays correct regardless of which zone is empty.

## Variants

- `default` - no decoration, plain white/document background. Can optionally show an image in the Pre-header slot (`preHeaderImage`).
- `case` - has the visual style of a folder: a colored background with a paper-fold decoration in the Pre-header.
- `case-extended` - visually close to `default` (white background, no decoration), but always shows extened information, with Pre-header slot (typically a status component) and renders a `DescriptionList` in the Body. Its footer link is plain text (`linkText` prop), with no arrow icon.
- `plan` - has the visual style of a clipboard, with colored background and a border around the entire card, and a "clipboard clip" decoration.
- `product` - looks like Default, no Decoration, just a thick top border and optional border-radius.

## (Interactive) states

The Card-as-link contains the states default, hover, active and focus/focus-visible.

Note that disabled/archived is not an 'interaction' state but a visual variant, since archived cards still need to be clickable (so users can see data from the past, like completed Plans or archived Cases). `archived` is nested per color-theme variant (e.g. `case.archived.*`, `plan.archived.*`), not a standalone variant of its own.

Important: note that this Card-as-link is currently covered with one large clickable area.

The 'real link' is in the footer and then covers the card with CSS (this styling trick is inside _action.scss). Screenreaders will read the text coming from the `aria-label`.

## Design properties

On small screens each card has a media query that transforms it into the List style.

### Typography

  --denhaag-card-as-link-heading-font-family: var(--denhaag-card-as-link-case-heading-font-family);

  --denhaag-card-as-link-heading-font-size: var(--denhaag-card-as-link-case-heading-font-size);

  --denhaag-card-as-link-heading-font-weight: var(--denhaag-card-as-link-case-heading-font-weight);

  --denhaag-card-as-link-heading-line-height: var(--denhaag-card-as-link-case-heading-line-height);

  --denhaag-card-as-link-description-font-family: var(--denhaag-card-as-link-case-description-font-family);

  --denhaag-card-as-link-description-font-size: var(--denhaag-card-as-link-case-description-font-size);

  --denhaag-card-as-link-description-font-weight: var(--denhaag-card-as-link-case-description-font-weight);

  --denhaag-card-as-link-description-line-height: var(--denhaag-card-as-link-case-description-line-height);

Note: Heading and Label each carry their own typography (color, font-family, weight, hover text-decoration). Description has no color/font-family of its own, since it inherits the card's base `color` and default font, since it is plain body text rather than a role-bound element like Heading/Label.

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

--denhaag-card-as-link-plan-background-color

--denhaag-card-as-link-plan-border-color

--denhaag-card-as-link-plan-border-width

--denhaag-card-as-link-plan-color

--denhaag-card-as-link-plan-decoration-clip-color

--denhaag-card-as-link-plan-heading-color

--denhaag-card-as-link-plan-link-icon-color

--denhaag-card-as-link-product-border-block-start-color

--denhaag-card-as-link-product-border-block-start-width

--denhaag-card-as-link-product-border-radius

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

Note: `product` has no dedicated active/hover tokens yet. It relies on the generic, bare active/hover/focus tokens above.

**Hover**

todo.card-as-link.hover.background-color	{basis.color.default.bg-hover}

todo.card-as-link.hover.border-color	{todo.card-as-link.border-color}

todo.card-as-link.heading.hover.text-decoration	underline

todo.card-as-link.label.hover.text-decoration	underline

todo.card-as-link.case.hover.background-color	{basis.color.accent-1.bg-hover}

todo.card-as-link.case.hover.border-color	{todo.card-as-link.case.border-color}

todo.card-as-link.case.archived.hover.background-color	{basis.color.default.bg-hover}

todo.card-as-link.case.archived.hover.border-color	{todo.card-as-link.case.border-color}

todo.card-as-link.plan.hover.background-color	{basis.color.accent-1.bg-hover}

todo.card-as-link.plan.hover.border-color	{basis.color.accent-1.bg-active}

todo.card-as-link.plan.archived.hover.background-color	{basis.color.default.bg-hover}

todo.card-as-link.plan.archived.hover.border-color	{basis.color.default.bg-active}

**Focus**

todo.card-as-link.focus.background-color	{basis.focus.background-color}
todo.card-as-link.focus.border-color	{basis.color.transparent}
todo.card-as-link.focus.color	{basis.focus.color}

Focus uses one shared, ocher-toned set of colors across all variants (Case, Plan, Product, Default) - there is no per-variant focus color yet for each type of card.

Not yet defined: Plan's decoration clip color currently does not change on focus (there is no `plan.focus.decoration.clip.color` token yet).

### Structure

_Card_
- Wrapper
  - _Pre-header_ (optional)
    - decoration (Case: paper-fold, Plan: clipboard-clip)
    - image (Default)
    - status content, e.g. data-badge/alert (Case-extended)
  - _Header_
    - hgroup (only when preHeading + real Heading are both present)
      - pre-heading
      - heading
    - heading (when no preHeading)
    - label (when no headingLevel)
  - _Body_ (optional)
    - description
    - description-list (Case-extended)
  - _Footer_ (optional)
    - footer-meta
    - footer-link-icon

## Accessibility

Semantic HTML Headings may only be used if there is actual content in the Card. If there is no content: use 'label' (=paragraph) so as not to offer an empty hierarchy list to screen-readers. Use the `labelVisualLevel` prop instead of the `headingLevel` prop in order to force this. This will result in a Paragraph that is visually styled like a Heading.

Also be weary of the order in which the Card is built: HTML order should always be meaningful (order can be reversed in CSS so 'pre-heading' looks visually as if it comes before the Heading, but in HTML the Heading needs to always come first).

For `case-extended`, the same principle applies to the Pre-header slot: its content (typically a status) is meaningful, not decorative, so it is placed *after* the Heading in the DOM. A screen reader should hear the card's subject first, then its status. CSS `order` is used only to restore the original visual position (status appears above the Heading), never to change what a screen reader announces.

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
