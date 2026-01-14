<!-- @license CC0-1.0 -->

# Anchor navigation
[![npm version](https://img.shields.io/npm/v/@gemeente-denhaag/anchor-navigation.svg)](https://www.npmjs.com/package/@gemeente-denhaag/anchor-navigation)
The anchor navigation shows which subjects there are on the page and how far you are.

## When to use

Anchor navigations need to be used on longer pages with multiple sub-headings. The navigation gives the user a good overview of the content of a page.

## Alternatives and related components

Use form navigation to show the user’s progress through a set of steps in a form

## Anatomy

The anchor navigation consists of:

1. Line: this line shows the state of a chapter
2. Label: describes the information of a chapter
3. Progress line (on mobile): this line shows how far you are on a page
4. Container

## (Interactive) states

The anchor navigation the states inactive, active, hover and focus.

## Design properties

### Typography

- Label inactive: TheSans/md/400
- Label active: TheSans/md/700

### Color

- Label inactive: text color Grey/4
- Label active: text color Blue/3
- Line inactive: fill color Grey/2
- Line active: fill color Blue/3

#### Specific for mobile

- Progress line: fill color Blue/3
- Shadow: fill color 10% of Grey/4, border-top color Grey/3

### Interactive states

- Hover inactive: label color Blue/3
- Focus: border color Ocher/5

### Structure

- Label: padding-top and padding bottom 8px, padding-right 16px
- Line: width 2px, padding-right 16px
- Container: min-height 40px

#### Mobile

- Label: padding-top and padding bottom 16px
- Progress line: width 2px
- Shadow: height 8px, border-top 1px
- Container: height 56px

## Accessibility

[technical requirements]

## Content guidelines

### Labels

Labels should:

- Contain one to three words.
- Have the same name as the sub-heading on the page
- Be clear and predictable. Users need to know what to find under each sub-heading.
- Make sure the sub-headings are recognizable as key elements of the page.
- Make sure the words you use in the anchor links are exactly the same as the words in the sub-headings they refer to.
- Avoid unnecessary words and articles such as “the”, “a” or “an”.

## Best practices

### Dos

Anchor navigations should:

- Allow the user to return to a previous step to review the process
- Create a clear path to completion
- Be clear as possible in order not to confuse users
- Bring the user to the specific topic he is clicking on
- Show the subheadings preceding the current subheading as active
- Continue on the next line for very long labels
- Be sticky
- Hide the menu overlay on mobile if a user clicked on a subject
- Show that the lines fill up as soon as a user scrolls

### Don’ts

Anchor navigations should:

- Not have more than 3 lines on desktop
- Not only the current subheading as active where you are, but also all previous subheadings

## References

[https://www.agconsult.com/en/usability-blog/anchor-links-dos-and-donts/](https://www.agconsult.com/en/usability-blog/anchor-links-dos-and-donts/)
[https://www.nngroup.com/articles/in-page-links/](https://www.nngroup.com/articles/in-page-links/)
