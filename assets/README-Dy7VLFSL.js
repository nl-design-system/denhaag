const e=`# Sidenav

The subnavigation is used as navigational element. This appears as an overlay on mobile and in the sidebar on a desktop.

## When to use

Sidenav refers to the navigation UI that helps users access lower-level categories in the site’s information architecture. Those categories, or pages, are separate from the main menu. The user can navigate to those pages by clicking on the name of the category.

The goals are:

### Minimum interaction cost

Users should be able to access an element of interest in the navigation with as little effort as possible.

### Typical-path support

If, within a single session, users are likely to jump from a page in one section to another one in a completely different area of the site, subnavigation should make it easy.

### Discoverability

Users should be able to find the subnavigation UI quickly, with no chance of confusing it with the main navigation.

## Alternatives and related components

- Use links for navigation actions that appear within or immediately after a sentence.
- Use buttons for actions that don’t appear within or directly following a sentence.

## Anatomy

The subnavigation consists of:

1. Label: communicates what is being linked to
2. Icon (optional): this icon gives the label extra guidance
3. Arrow: icon that shows there are underlying menu items
4. Container

## (Interactive) states

The subnavigation contains the states inactive, active, hover and focus.

## Design properties

### Typography

#### Large

- Label inactive: TheSans/lg/400
- Label active: TheSans/lg/700

#### Small

- Label inactive: TheSans/md/400
- Label active: TheSans/md/700

### Colors

- Label inactive: text color Grey/4
- Label active: text color Blue/3
- Icon inactive: svg color Grey/4
- Icon active: svg color Blue/3
- Arrow inactive: svg color Grey/4
- Arrow active: svg color Blue/3

### Interactive states

- Hover inactive: label text color Blue/3
- Focus: container border color Ocher/5

### Structure

#### Icon, Icon + arrow, Icon + notification

##### Large

- Label: padding-right 16px
- Icon: height and width 20px, padding-right 16px
- Arrow: height and width 24px
- Container: height 48px

##### Small

- Label: padding-right 16px
- Icon: height and width 20px, padding-right 16px
- Arrow: height and width 20px
- Container: height 48px

#### Icon + arrow expanded

##### Large

- Label: padding-right 8px
- Icon: height and width 20px, padding-right 16px
- Arrow: height and width 24px
- Container: height 48px

##### Small

- Label: padding-right 8px
- Icon: height and width 20px, padding-right 16px
- Arrow: height and width 20px
- Container: height 48px

## Accessibility

[technical requirements]

## Content guidelines

- The label need to be clear and predictable. Users should be able to anticipate where they will go when they select the label.
- Always capitalize subnavigation labels, meaning that the first word is uppercase and the rest is lowercase (unless a term has its own name).
- Labels should be short and sweet, with a maximum of 2 words.
- Make labels easy to scan.
- Figure out what users are looking for, and use category labels that are familiar and relevant. Menus are not the place to get cute with made-up words and internal jargon. Stick to terminology that clearly describes your content and features.
- Avoid generic labels such as “Articles” or “Videos.” Such labels aren’t descriptive because they tell visitors the format of the content, but not the topic.

## Best practices

### Dos

The subnavigation must:

- Show the pagenames the user can go to.
- Have a logical order. You might want to sort the options by priority—start with top priority and end with the least important option.
- Show the main navigational elements in size ‘large’ and the sub-elements in ‘small’ on mobile.
- Have the badge behind the label if there is a notification within that element.
- Use the expanded arrow when there are menu items underneath, with only one level of nested items allowed.

### Don’ts

The subnavigation must:

- Not create information overload.
- Not have too many navigations, because options make the next step unclear.
- Not show all navigational elements in one size if there is a difference between the main and sub-elements.

## References

[https://www.nngroup.com/articles/menu-design/](https://www.nngroup.com/articles/menu-design/)
[https://forgeandsmith.com/blog/website-navigation-ux-best-practices/](https://forgeandsmith.com/blog/website-navigation-ux-best-practices/)
[https://xd.adobe.com/ideas/process/information-architecture/website-navigation-design-best-practices/](https://xd.adobe.com/ideas/process/information-architecture/website-navigation-design-best-practices/)
`;export{e as r};
