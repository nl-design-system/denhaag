# Timeline

The timeline displays a progress through a sequence by breaking it up into multiple logical and numbered steps.

## When to use

Use the timeline when a series of information needs to be ordered by time (ascending or descending). It represents the steps in a process in a chronological order. This process is part of, for example, a request that the user has made.

## Alternatives and related components

Use form navigation to show the user’s progress through a set of steps in a form

## Anatomy

The timeline consists of:

1. Step: this icon shows the state of a step
2. Label: describes the information of the step
3. Trailing icon (optional): this icon shows that it is possible to open the step that shows a description
4. Descriptive text (optional): additional information about the step
5. Container

## (Interactive) states

The timeline contains the states normal, hover, disabled and focus.

## Design properties

### Typography

- Label inactive and completed: TheSans/md/400
- Label active: TheSans/md/700
- Step: TheSans/s/700
- Descriptive text: TheSans/md/400

### Color

All steps that have been completed are indicated by an outlined circle with a checkmark. The current, active step the user is on is indicated by a filled circle. Steps the user has not encountered yet, or inactive steps, are indicated by an outlined circle.

- Label inactive: text color Grey/4
- Label active: text color Blue/3
- Label completed: text color Blue/3
- Step inactive: fill color white, text color Grey/3, border color Grey/3
- Step active: fill color Blue/3,  text color white
- Step completed: border color Green/3
- Trailing icon: svg color Grey/4
- Descriptive text: text color Grey/4

### Interactive states

- Hover inactive: leading icon text color Blue/3, leading icon border color Blue/3, label text color Blue/3, trailing icon Blue/3
- Hover active: trailing icon Blue/3
- Hover completed: label text color Blue/3, trailing icon Blue/3
- Disabled: leading icon Grey/2, label tect Grey/2, trailing icon Grey/2
- Focus: container border color Ocher/5

### Structure

- Step: height and width 20px, padding-right 16px
- Label: padding-top 12px
- Trailing icon: padding-left 4px
- Descriptive text: padding-top and padding-bottom 12px, padding-left 16px
- Container: min-height 48px

## Accessibility

[technical requirements]

## Content guidelines

### Timeline labels

Timeline labels should:

- Contain one to two words.
- Be able to immediately show what the step entails.
- Accompany the timeline to indicate what the user will go through within each step.

### Timeline descriptive text

Timeline descriptive texts should:

- Provide additional information about the step
- Be clear and short
- Be present only if the information is important and the user needs to read it to understand what happened in that step

## Best practices

### Dos

Timelines should:

- Allow the user to return to a previous step
- Create a clear path to completion
- Be clear as possible in order not to confuse users
- Have 3–5 steps
- Use numbers to describe the steps and indicate where in the process the user is

### Don’ts

Timelines should:

- Not be too long.

## References

[https://uxplanet.org/progress-trackers-in-ux-design-4319cef1c600](https://uxplanet.org/progress-trackers-in-ux-design-4319cef1c600)
