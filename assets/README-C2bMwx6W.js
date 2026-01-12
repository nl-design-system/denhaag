const n=`<!-- @license CC0-1.0 -->

# Button

![npm (scoped)](https://img.shields.io/npm/v/@gemeente-denhaag/button?logo=npm&style=flat-square)
![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/nl-design-system/denhaag/Build%20and%20deploy%20Storybook%20to%20Azure%20Web%20App/main?logo=github&style=flat-square)

Buttons are used for actions such as "Add", "Close", "Cancel" or "Save".
Button labels indicate what action will take place when the user interacts with it.

## When to use

Use buttons to communicate actions users can take and to allow users to interact with the page.
Each page should have one primary button, and any remaining calls to action should be represented as lower emphasis buttons.

## Alternatives and related components

Use \`Link\` for navigation actions that appear within or immediately after a sentence.

[Navigate to Link](../?path=/docs/components-navigation-link--default)

## Anatomy

The button consists of:

1. Label: communicates the action that will be performed when the user interacts with it.
2. Icon (optional): provides support for the label.
3. Container

## (Interactive) states

The button contains the states normal, hover, disabled and focus.

## Design properties

### Typography

_Large_

- Label: TheSans/lg/400

_Medium_

- Label: TheSans/md/400

### Colors

_Primary button_

- Label: text color white
- Icon: svg color white
- Container: background-color Green/3

_Secondary button_

- Label: text color Green/3
- Icon: svg color Green/3
- Container: background-color white, border Green/3

### Interactive states

_Primary button_

- Hover: container background-color Green/4
- Disabled: container background-color Grey/2
- Focus: container border color Ocher/5

_Secondary button_

- Hover: label text color Green/4, icon svg color Green/4, container border color Green/4
- Disabled: label text color Grey/2, icon svg color Grey/2, container border color Grey/2
- Focus: container border color Ocher/5

### Structure

_Large_

- Label: padding-left and padding-right 20px
- Icon: height and width 24px
- Icon-left: padding-left 16px, padding-right 8px
- Icon-right: padding-left 8px, padding-right 16px
- Container: height 48px

_Medium_

- Label: padding-left and padding-right 16px
- Icon: height and width 20px
- Icon-left: padding-left 12px, padding-right 8px
- Icon-right: padding-left 8px, padding-right 12px
- Container: height 40px

_Primary button_

- Container focus: container border 2px, dash 5,5

_Secondary button_

- Container: border 1px
- Container focus: container border 2px, dash 5,5

## Accessibility

Alert provide context and assist workflows for users with disabilities.

- Alert use a combination of icons and colors to show their meaning and importance.
- [technical accessibility requirements]

### Navigation

Users generally expect buttons to send data or take action, and to be able to navigate links. If navigation is required for the button component, use the url prop. The control displays an anchor in the form of a button, instead of a button in HTML, to convey this difference.

See links for more information on creating accessible links.

### Keyboard support

Buttons use the browser's default settings for keyboard interactions.

- Give buttons keyboard focus with the tab key (or shift + tab when tabbing backwards)
- Activate buttons with the enter / return key or the space key

## Content guidelines

Buttons should be clear and predictable. Users should be able to anticipate what will happen when they select a button. Never mislead anyone by mislabeling a button.

Buttons should always lead with a strong verb that encourages action. To provide users with enough context, you can use the content formula {verb} + {noun} on buttons, except in the case of general actions such as "Done", "Close", "Cancel" or "OK".

## Best practices

### Do's

Buttons must:

- Be clearly and accurately labeled.
- Contain a strong and action-oriented verb.
- Using the right button colors in the right context. For example, only use a red error button for an action that is difficult or impossible to undo.
- Give priority to the most important actions. Too many calls to action can cause confusion and make users unsure of what to do next.
- Be positioned in consistent locations in the interface.

### Don'ts

Buttons must:

- Do not guess the user what a button does, especially if it is irreversible.
- Not be used for navigation. You can use links for this.
- Not wrapped on more than 1 line. Make sure the text stays on one line.

### Buttons versus links

Buttons are mainly used for actions such as "Add", "Close", "Cancel" or "Save". Regular buttons similar to links are used for less important or less frequently used actions, such as "View details".

Links are mainly used for navigation and usually appear in or immediately after a sentence.

The HTML displayed for the Button and Link components has meaning. Using these components intentionally and consistently results in:

- a more inclusive experience for assistive technology users
- a more coherent visual experience for sighted users
- products that are easier to maintain to scale

## References

https://uxmovement.com/buttons/5-rules-for-choosing-the-right-words-on-button-labels/ <br/>
https://uxplanet.org/7-basic-rules-for-button-design-63dcdf5676b4 <br/>
https://www.invisionapp.com/inside-design/comprehensive-guide-designing-ux-buttons/
`;export{n as r};
