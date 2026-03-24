# Action Tiles

Action tiles are navigational elements that present key actions or topics in a responsive grid layout. Each tile contains an icon, a label, and a chevron indicator.

## When to use

Action tiles are used to:

- Highlight important topics or actions on a page, such as government services.
- Provide quick navigation to key sections.
- Present a visual overview of available actions with recognizable icons.

## Alternatives and related components

- Use [Link Grid](../LinkGrid) for simpler text-only link lists.
- Use [Highlighted Links](../HighlightedLinks) for prominent link groups without icons.

## Anatomy

The action tiles component consists of:

1. **Container**: wraps the grid of tiles.
2. **List**: a responsive grid layout that adapts column count based on container width.
3. **Tile**: an individual navigational item containing:
   - **Icon**: a circular badge with a themed icon.
   - **Label**: the text describing the action or topic (max 2 lines).
   - **Chevron**: a right-pointing arrow indicating navigation.

## (Interactive) states

The action tile link contains the states inactive, hover, focus and active.

## Design properties

### Color

- Link: text color Grey/4, background color White, border color Grey/2
- Icon badge: background color Green/1
- Icon: svg fill Green

### Interactive states

- Hover: box-shadow, underline, translateY lift
- Focus: outline border (focus-border token)
- Active: background color Grey/1, border color Grey/1

### Structure

- Grid gap: space-sm
- Tile padding: space-lg
- Icon badge: space-4xl (width and height), border-radius 100%
- Grid columns: var(--denhaag-space-4xl) auto var(--denhaag-space-lg)

## Responsive behavior

The grid adapts based on container width:

- **Default**: 1 column
- **29rem+**: 2 columns
- **54rem+**: 3 columns (2 columns if only 2 items)
- **1082px+**: 4 columns (3 columns if 1-3 items)

## Accessibility

- Each tile is a semantic list item (`<li>`) inside a `<ul>`.
- Icons are decorative and hidden from assistive technology with `aria-hidden="true"`.
- Labels support a maximum of 2 visible lines with text clamping.
- Hover animations respect `prefers-reduced-motion`.

## Content guidelines

### Labels

Action tile labels should:

- Be short and descriptive (max 2 lines).
- Clearly communicate the action or topic the tile links to.
- Use sentence case.

### Icons

- Each tile should have a unique, recognizable icon that relates to the label.
- Icons should use a consistent style and color scheme.

## Best practices

### Dos

Action tiles should:

- Contain between 2 and 8 items.
- Link to distinct topics or actions.
- Use icons that are visually distinct from each other.

### Don'ts

Action tiles should:

- Not be used for a single link — use a regular link or button instead.
- Not contain overly long labels that exceed 2 lines.
- Not mix internal and external links without clear indication.
