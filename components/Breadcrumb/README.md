# Navigation Link

[Figma Design](https://www.figma.com/file/JpoY3waVoQGlLQzQXTL9nn/Design-System-Gemeente-Den-Haag?node-id=1569%3A5671)

# Breadcrumbs

The breadcrumb is a secondary navigation pattern that helps a user understand the hierarchy among levels, navigate back through them and reveals the user’s location.

## When to use

Breadcrumbs are effective in experiences that have a large amount of content organized in a hierarchy of more than two levels. They take up little space but still provide context for the user’s place in the navigation hierarchy.

## Alternatives and related components

None.

## Anatomy

The breadcrumb consists of:

1. Page link: directs users to the parent-level page
2. Seperator: clearly distinguishes between each page
3. House icon (optional): this icon shows the homepage
4. Collapsed icon: hides the intermediate pages
5. Container: the background with the breadcrumbs on it
6. Arrow icon and page link (only on mobile)

## (Interactive) states

The breadcrumb contains the states inactive, active, hover and focus.

## Design properties

### Typography

- Page link: TheSans/md/400

### Color

#### Desktop

- Inactive page link: text color Blue/3
- Active page link: text color Grey/4
- Seperator: svg color Grey/4
- House icon: svg color Blue/3
- Collapsed icon: background-color Grey/1, svg fill color Grey/3
- Container: background-color Warm grey

#### Mobile

- Arrow and page link: icon color Blue/3, text color Blue/3

### Interactive states

#### Desktop

- Hover: page link text color Blue/4, house icon svg color Blue/4, collapsed icon background-color Grey/2
- Focus: page link text color Blue/4, house icon svg color Blue/4, border color Ocher/5

#### Mobile

- Focus: page link text color Blue/4, border color Ocher/5

### Structure

#### Desktop

- Seperator: margin-left and margin-right 8px, size 16px
- Icon: size 20px
- Collapsed icon: height 16px, width 24px
- - Background: padding-top and padding-bottom 12px

#### Mobile

Arrow icon: size 20px, margin-right 8px

- Container: padding-top and padding-bottom 16px

## Accessibility

[technical requirements]

## Content guidelines

### Page links should:

- Be short and clearly reflect the location or entity it links to
- Start with the highest level parent page and move deeper into the information architecture as the breadcrumb trail progresses
- Be consistent with the page titles

## Best practices

Read documentation about microdata for the Breadcrumb on https://schema.org/BreadcrumbList

### Dos

Breadcrumbs should:

- Include the current page as the last item in the breadcrumb trail
- Include only site pages, not logical categories in your information architecture
- Include the full navigational path
- Use an collapsed icon per page to truncate the breadcrumbs when space becomes limited (see ‘Logic’)
- Show on the pages that are truncated with the collapsed icon, on hover a tooltip that displays the full page name.
- Not exceed half of the page
- Preferably not have more than 6 pages. If there are more than 6 pages, look how you can improve the menu structure.
- Only include the last level on a viewport smaller than 1024px.

### Don’ts

Breadcrumbs should:

- Not wrap onto a second line
- Not be used for pages that have single level navigation because they create unnecessary clutter

### Logic

- Always show the first and current page
- Only use the collapsed icon if there are more than 4 pages.
- If the collapsed icon is used, always show on the right side the underlying page and next to this the current page.

#### Logic - Examples

- If there are for example 5 pages, then show the homepage (1), hide the 2nd and 3rd page and show the 4th and current page (5).
- If there are for example 6 pages, then show the homepage (1), hide the 2nd, 3rd and 4th page and show the 5th and current page (6).

## References

- https://www.nngroup.com/articles/breadcrumbs/
- https://blog.hubspot.com/marketing/navigation-breadcrumbs
- https://blog.prototypr.io/design-guide-breadcrumbs-a980eb28bfaa?gi=a989e02ab9ff
