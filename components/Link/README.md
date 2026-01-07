<!-- @license CC0-1.0 -->

# Navigation Link

![npm (scoped)](https://img.shields.io/npm/v/@gemeente-denhaag/link?logo=npm&style=flat-square)
![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/nl-design-system/denhaag/Build%20and%20deploy%20Storybook%20to%20Azure%20Web%20App/main?logo=github&style=flat-square)

[Figma Design](https://www.figma.com/file/JpoY3waVoQGlLQzQXTL9nn/Design-System-Gemeente-Den-Haag?node-id=1485%3A1156)

Links are used as navigational elements. They may appear on their own, within a sentence or paragraph, or directly following the content.

## When to use

Links are used as navigational elements and can be used on their own or inline with text. They provide a lightweight option for navigation but like other interactive elements, too many links will clutter a page and make it difficult for users to identify their next steps. This is especially true for inline links, which should be used sparingly.

Use links when you want users to:

- Navigate to a different page within the website
- Navigate to an entirely different site
- Link to emails or phone numbers

## Alternatives and related components

Use `Button` for actions that don’t appear within or directly following a sentence.

[Navigate to Button](../?path=/docs/components-input-button--default)

## Anatomy

The navigation link consists of:

1. Label: communicates what is being linked to
2. Icon (optional): this icon gives the label extra guidance

## (Interactive) states

The navigation link contains the states normal, hover, disabled and focus.

## Design properties

## Typography

- Label: TheSans/md/400

### Color

- Label: text color Blue/3
- Icon: svg color Blue/3

### Interactive states

- Hover: label text color Blue/4, icon svg color Blue/4
- Disabled: label text color Grey/2, icon svg color Grey/2
- Focus: label text color Blue/4, icon svg color Blue/4, border color Ocher/5

### Structure

- Label: padding-top and padding-bottom 8px
- Icon: height and width 20px
- Icon-left: padding-right 8px
- Icon-right: padding-left 8px

## Best practices

### Buttons versus navigation links

Navigation links are used primarily for navigation, and usually appear within or directly following a sentence.

Buttons are used primarily for actions, such as “Add”, “Close”, “Cancel”, or “Save”. Plain buttons, which look similar to links, are used for less important or less commonly used actions, such as “view settings”.

### Do's

Navigation links should:

- Be placed at the end of sentences where possible
- Clearly explain where the link will take you to
- Front-load the most relevant keyword
- Be understandable out of context

### Don'ts

Navigation links should:

- Never use a button in place of a link
- Not use vague or generic labels for links
- Not open internal link in a new tab

## References

https://www.interaction-design.org/literature/article/tips-for-better-hyperlink-ux <br/>
https://blog.prototypr.io/a-guide-to-designing-perfect-links-in-ux-414558f35730 <br/>
https://uxplanet.org/dos-and-don-ts-of-web-design-8c9d6a5de7c6 <br/>
https://www.nngroup.com/articles/writing-links/
