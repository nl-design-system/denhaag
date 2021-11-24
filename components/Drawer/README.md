# Drawer

A drawer is a large container that enters from the edge of the screen when triggered by the user. It’s used to provide users with actions and information contextual to the page.

## When to use

The sheet display content that complements the screen’s primary content. They remain visible while users interact with primary content. For that reason it is best used in cases where the user needs to see elements behind it. It is used to display a list of actions that affect the screen’s primary content, such as filters or to display supplemental content and features. On mobile they can display the same types of content as the sheets on larger screens, but must be dismissed in order to interact with the underlying content.

## Alternatives and related components

Use modals to offer an action before users can go to the next step in the flow

## Anatomy

The drawer consists of:

1. Title (optional): gives users a quick overview of the drawer.
2. Close icon: closes the drawer.
3. Overlay: screen overlay that obscures the on-page content.

## (Interactive) states

None.

## Design properties

### Typography

- Title: TheMix/lg/700

### Colors

- Title: text color Blue/3
- Close icon: svg color Grey/4
- Overlay: background-color white

### Structure

- Title: padding-top and padding-left 32px, margin-bottom 16px
- Close icon: height and width 24px, padding-top and padding-right 32px

## Accessibility

[technical requirements]

## Content guidelines

None.

## Best practices

### Dos

The drawer should:

- Be openable through clear actions, like a link or button
- Be close-able through clear actions, like the [X] button, and the esc key
- Include information and actions contextual to the current task
- Not block users from completing their task, like a modal would
- Not open from within another sheet (only one sheet can be open at a time)
- Preserve its state—the settings and actions won’t reset when it’s closed

### Don’ts

The drawer should:

- Not show the elements behind it

## References

[https://material.io/components/navigation-drawer#anatomy](https://material.io/components/navigation-drawer#anatomy)
