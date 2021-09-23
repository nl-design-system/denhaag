# Toggle switch

Toggles are digital on/off switches. They prompt users to choose between two mutually exclusive options and always have a default value.

## When to use

Toggle is a control that is used to quickly switch between two possible states. Toggles are only used for these binary actions that occur immediately after the user “flips the switch”. They are commonly used for “on/off” switches.

## Alternatives and related components

Use radio buttons if immediate results are not achievable or seem ill-suited

## Anatomy

The toggle consists of:

1. Toggle input: an input that indicates the correct status. By default it is not active.
2. Toggle label: describes the information you can switch on or off.

## (Interactive) states

The toggle contains the states normal, hover, disabled and focus.

## Design properties

### Typography

- Toggle label: TheSans/md/400

### Color

- Toggle input active: background-color Green/3, dot white
- Toggle input inactive: background-color Grey/3, dot white
- Toggle label: text color Grey/4

### Interactive states

- Hover active: toggle label color Green/3, toggle input background-color Green/3, dot color white
- Hover inactive: toggle label colorGreen/3, toggle input background-color Grey/3, dot color white
- Disabled: toggle label color Grey/2, toggle input background-color Grey/2
- Focus: toggle input border color Ocher/5

### Structure

- Toggle input: height 24px, width 48px
- Toggle label: margin-left 8px
- Dot: height and width 18px

## Accessibility

[technical requirements]

## Content guidelines

Toggle labels should:

- Always say either “Enable” or “Disable” depending on whether the setting can be turned on or off.

- Be short and direct.
- Have the key word(s) first, forming unique labels.
- Describe what the control will do when the switch is on.

## Best practices

### Dos

Toggles should:

- Take immediate effect
- Only be used when the user needs to decide between two opposing states

### Don’ts

Toggles should:

- Not require the user to click Save or Submit to apply the new state
- Not be neutral or ambiguous
- Never use a switch in place of a button

## References

[https://www.nngroup.com/articles/toggle-switch-guidelines/](https://www.nngroup.com/articles/toggle-switch-guidelines/)
