const n=`# List

Lists present multiple line items vertically as a single continuous element. The types of lists are one-line and two-line.

## When to use

Lists are a continuous group of text or images. They are composed of items containing primary and supplemental actions, which are represented by icons and text. It can be used to show a list of messages or subjects.

## Alternatives and related components

Use cards if more than three lines of text need to be shown in list tiles.

## Anatomy

The list consists of:

1. Subheader: delineate sections of a list
2. List item: the name of the list item
3. Secondary text (optional): extra information about the list item
4. Leading icon (optional): gives meaning to the list item
5. Trailing icon (optional): represents a navigational element or an action an user can take
6. Container: list item row
7. List: contains all list items and the subheading

## (Interactive) states

The checkbox contains the states active, inactive, hover and focus.

## Design properties

### Typography

- Subheader: TheSans/md/700
- List item: TheSans/md/400
- Secondary text: TheSans/s/400

### Color

- Subheader: text color Grey/4
- List item: text color Grey/4
- Secondary text: text color Grey/4
- Leading icon: svg color Grey/4
- Trailing icon: svg color Grey/4
- Container: background-color white

### Interactive states

- Active: list-item color Grey/4, container border 2px, container border color Blue/3
- Hover: list item text color Blue/3, trailing icon svg color Blue/3
- Focus: list item text color Blue/3, trailing icon svg color Blue/3, container border color Ocher/5

### Structure

- Subheader: padding-top and padding-bottom 12px, padding-left and padding-right 16px
- List item: padding-top and padding-bottom 12px, padding-left and padding-right 16px
- Secondary text: padding-bottom 8px, padding-left and padding-right 16px
- Leading icon: height and width 24px, padding-top and padding-bottom 12px, padding-left 16px, padding-right 12px
- Trailing icon: height and width 24px, padding-top and padding-bottom 12px, padding-right 16px
- Container focus: container border 2px, dash 5,5
- Container one line: height 48px
- Container two lines: min-height 72px
- List: padding-top and padding-bottom 8px

## Accessibility

[technical accessibility requirements]

## Content guidelines

### List items

Every item in a list should:

- Start with a capital letter
- Not use commas or semicolons at the end of each line
- Be written in sentence case

## Best practices

### Dos

Lists should:

- Have the most distinguishing content placed towards the left of the container
- Be sorted or filtered by date, file size, alphabetical order, or other parameters
- Avoid displaying a repeated supplemental action in containers, such as a share action in every container
- Break up chunks of related content to make the information easier for users to scan
- Be phrased consistently (try to start each item with a noun or a verb and be consistent with each item)
- Not be used for lists where the entire item represents an action
- Only use an icon if it adds clarity to the content or helps users visualize the meaning
- Erase the entire row if the 'delete' action is used
- Represent data structures in a scannable way and make them navigable
- Stay consistent with the action

### Don’ts

Lists should:

- Not be used for displaying complex datasets. Consider using a table instead
- Not use the supporting visual to show the state or meta information

## References
`;export{n as r};
