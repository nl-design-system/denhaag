const n=`# Badge (counter)

![npm (scoped)](https://img.shields.io/npm/v/@gemeente-denhaag/badge-counter?logo=npm&style=flat-square)
![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/nl-design-system/denhaag/Build%20and%20deploy%20Storybook%20to%20Azure%20Web%20App/main?logo=github&style=flat-square)

Counter badges are used to indicate that there is a notification and display the number of notifications. It is an
update message that announces something new for the user to see. Badges are typically used to indicate a new message.

## When to use

TODO: Not yet written.

## Alternatives and related components

Use \`Tag\` when you need to inform users about the status of an object, about an action or when you have data that helps
categorize and organize things.

## Anatomy

The badge consists of:

1. Dot indicator: shows that there is a notification
2. Count: displays the number of notifications
3. Container: the rectangle with the number in it

## (Interactive) states

None.

## Design properties

### Colors

- Dot: color Red/3, border color white
- Count: text color Grey/4
- Container: fill color Grey/1

### Structure

- Dot: overlaps container 25%, border 2px, height and width 8px
- Count: padding-inline 6px, padding-block 4px
- Container: height 24px

## Accessibility

TODO: Not yet written.

## Content guidelines

None.

## Best practices

### Do's

Badges should:

- Be hidden when count is 0
- Have a maximal count of 999. Once you reach higher than 999, the label becomes "999+".
- Be used for counts of important information, close to the relevant item.
- Notify or draw attention to changed values or states
- Be used when there is an underlying message in the menu
- Be used sparingly

### Don'ts

Dot indicators should:

- Not be used if you need a text label. Use \`Tag\` instead.

## References

https://cultureamp.design/components/badge
`;export{n as r};
