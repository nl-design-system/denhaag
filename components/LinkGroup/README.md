# Link Group

## Introduction

Links are used as navigational elements. They may appear on their own, within a sentence or paragraph, or directly following the content.

## When to use

Links are used as navigational elements and can be used on their own or inline with text. They provide a lightweight option for navigation but like other interactive elements, too many links will clutter a page and make it difficult for users to identify their next steps. This is especially true for inline links, which should be used sparingly.

Use links when you want users to:

- Navigate to a different page within the website
- Navigate to an entirely different site
- Link to emails or phone numbers

## Alternatives and related components

- Use buttons for actions that don’t appear within or directly following a sentence

## Anatomy

The navigation link consists of:

1. Label: communicates what is being linked to
2. Icon (optional): this icon gives the label extra guidance

## (Interactive) states

None.

## Design properties

### Typography

- Label: TheSans/md/400

### Colors

- Label: text color Blue/3
- Icon: svg color Blue/3

On dark background

- Label: text color Ocher/3
- Links: white

Interactive states

- Hover: label text color Blue/4, icon svg color Blue/4
- Hover: underlined
- Focus: label text color Blue/4, icon svg color Blue/4, border color Ocher/5

### Structure

#### Medium

Desktop

- Icon: size 20px
- External link: padding-left 4px
- Icon-left: padding-right 8px
- Icon-right: padding-left 8px
- Group: link margin-bottom 8px

Mobile

- Icon: size 20px
- External link: padding-left 4px
- Icon-left: padding-right 8px
- Icon-right: padding-left 8px
- Group: link margin-bottom 16px

#### small

Desktop

- Icon: size 14px
- Icon-left: padding-right 8px
- Group: link margin-bottom 8px

Mobile

- Icon: size 14px
- Icon-left: padding-right 8px
- Group: link margin-bottom 8px

## Accessibility

[technical requirements]

## Link variants

### Inline link

Inline links are used in sentences or paragraphs of text. The inline link behaves the same as the standalone link but it is styled with an underline. This helps differentiate them from the text they are placed next to and makes it clear users can interact with them.

Inline links should not be used on their own and should not be paired with icons.

### Standalone link

Standalone links are used on their own directly following content. They should not be used within sentences or paragraphs. They only have an underline in the hover state.

The standalone link component is paired with an icon. Icons should always be the same color as the link text.

If there are several standalone links below each other, and thus form a group, the icon must always be in front of the link.

## Content guidelines

Navigation links need to be clear and predictable. Users should be able to anticipate what will happen when they select a link.

Navigation links should never use “click here” or “here” as link text.

### Links in a sentence

Navigation links in full sentences shouldn’t link the entire sentence, only the text that describes where users go when they select the link.

It’s better for internationalization to have only single terms or small parts of phrases linked. Linking a full phrase is problematic because the word order might change, which would break the link into two parts.

### Links outside of a sentence

Navigation links that aren’t in full sentences should use the {verb + noun} pattern and not be punctuated, with the exception of question marks.

## Best practices

Buttons versus navigation links
Navigation links are used primarily for navigation, and usually appear within or directly following a sentence.

Buttons are used primarily for actions, such as “Add”, “Close”, “Cancel”, or “Save”. Plain buttons, which look similar to links, are used for less important or less commonly used actions, such as “view settings”.

### Do's

Navigation links should:

- Be placed at the end of sentences where possible
- Clearly explain where the link will take you to
- Front-load the most relevant keyword
- Be understandable out of context
- Have the icon in front of the link when the standalone links form a group

### Don'ts

Navigation links should:

- Never use a button in place of a link
- Not use vague or generic labels for links
- Not open internal link in a new tab

## References

- https://www.interaction-design.org/literature/article/tips-for-better-hyperlink-ux
- https://blog.prototypr.io/a-guide-to-designing-perfect-links-in-ux-414558f35730
- https://uxplanet.org/dos-and-don-ts-of-web-design-8c9d6a5de7c6
- https://www.nngroup.com/articles/writing-links/
