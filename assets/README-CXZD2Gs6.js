const e=`<!-- @license CC0-1.0 -->

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
3. Icon (optional): this icon shows the homepage
4. Collapsed icon: hides the intermediate pages

## (Interactive) states

The breadcrumb contains the states inactive, active, hover and focus.

## Design properties

### Typography

- Page link: TheSans/md/400

### Color

- Inactive page link: text color Blue/3
- Active page link: text color Grey/4
- Separator: svg color Grey/4
- Icon: svg color Blue/3
- Collapsed icon: background-color Grey/1, svg fill color Grey/3

### Interactive states

- Hover: page link text color Blue/4, icon svg color Blue/4, collapsed icon background-color Grey/2
- Focus: page link text color Blue/4, icon svg color Blue/4, border color Ocher/5

### Structure

- Seperator: margin-left and margin-right 8px, height and width 16px
- Icon: height and width 20px
- Collapsed icon: height 16px, width 24px

## Accessibility

[technical requirements]

## Content guidelines

### Page links

Page links should:

- Be short and clearly reflect the location or entity it links to;
- Start with the highest level parent page and move deeper into the information architecture as the breadcrumb trail progresses;
- Be consistent with the page titles;

## Best practices

Read documentation about microdata for the Breadcrumb on https://schema.org/BreadcrumbList

### Dos

Breadcrumbs should:

- Include the current page as the last item in the breadcrumb trail
- Include only site pages, not logical categories in your information architecture
- Include the full navigational path
- Use a collapsed icon to truncate the breadcrumbs when space becomes limited
- Not exceed half of the page
- Preferably not have more than 6 pages. If there are more than 6 pages, look how you can improve the menu structure.

### Don’ts

Breadcrumbs should:

- Not wrap onto a second line
- Not be used for pages that have single level navigation because they create unnecessary clutter

### Logic

- Always show the first and current page
- Only use the collapsed icon if there are more than 4 pages.
- If the collapsed icon is used, always show on the right side the underlying page and next to this the current page.
  - If there are for example 5 pages, then show the homepage (1), hide the 2nd and 3rd page and show the 4th and current page (5).
  - If there are for example 6 pages, then show the homepage

## References

[https://www.nngroup.com/articles/breadcrumbs/](https://www.nngroup.com/articles/breadcrumbs/)
[https://blog.hubspot.com/marketing/navigation-breadcrumbs](https://blog.hubspot.com/marketing/navigation-breadcrumbs)
[https://blog.prototypr.io/design-guide-breadcrumbs-a980eb28bfaa?gi=a989e02ab9ff](https://blog.prototypr.io/design-guide-breadcrumbs-a980eb28bfaa?gi=a989e02ab9ff)
`;export{e as r};
