# Radio

![npm (scoped)](https://img.shields.io/npm/v/@gemeente-denhaag/radio?logo=npm&style=flat-square)
![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/Gemeente-Denhaag/denhaag-component-library/Build%20and%20deploy%20Storybook%20to%20Azure%20Web%20App/master?logo=github&style=flat-square)

Radio buttons are a list of options where users should make a single selection.

## When to use

Use radio buttons when you have a group of mutually exclusive choices and only one selection from the group is allowed. It is not used for multiple choices. Only one radio button can be selected at a time. When a user chooses a new item, the previous choice is automatically deselected.

### Form
Can be used in forms on a full page or in modals.

### Settings
Used to change from one setting to another in a menu, page, or component.

### Selection in lists
Used to choose a singular item within lists.

## Alternatives and related components

- [Use checkboxes](../?path=/docs/components-input-checkbox--default) to display a list of options where users can make multiple choices
- [Use a select](../?path=/docs/components-input-select--default) when there is a long lists of options to avoid overwhelming users

## Anatomy

The radio button consists of:

1. Label (optional): indicates what should be selected below.
2. Radio button input: a radio button input that indicates the correct status. By default it is not active.
3. Radio button label: describes the information you can select or deselect.
4. Helper text (optional): displays more information about the radio buttons

## (Interactive) states

The radio button contains the states normal, hover, disabled, error and focus.

## Design properties

### Typography
- Label: TheSans/md/700
- Radio button label: TheSans/md/400
- Helper text: TheSans/s/400

### Color
- Label: text color  Blue/5
- Radio button input inactive: border 1,5px inside Grey/4, background-color white
- Radio button input active: border 1,5px inside Blue/3, background-color white, dot color Blue/3
- Radio button label: text color Grey/4
- Helper text: text color Grey/4

### Interactive states
- Hover inactive: container border color Blue/3, radio button label text color Blue/3
- Hover active: container border color Blue/3, radio button label text color Blue/3, dot color Blue/3
- Disabled: container border color Grey/2, radio button label text color Grey/2
- Error: container border color Red/3, radio button label text color Grey/4
- Focus: container border color Ocher/5

### Structure
- Radio button: height and width 20px, border 1px
- Radio button focus: border 2px, dash 5,5
- Dot: height and width 12px
- Label: margin-bottom 8px
- Checkbox label: padding-left 8px
- Helper text: margin-left 16px, margin-top	4px

## Accessibility

Screen readers convey the state of the radio button automatically.
- [technical accessibility requirements]

### Labeling
[technical requirements, such as: label and labelHidden]

### Keyboard support
- Move focus to each radio button using the tab key (or shift + tab when tabbing backwards)
- Activate or deactivate radio buttons with the space key

### Keyboard support
Checkboxes use the browser's default settings for keyboard interactions.

- Give checkbox keyboard focus with the tab key (or shift + tab when tabbing backwards)
- Activate checkboxes with the arrows up/down

## Content guidelines

### Radio button label
Radio button labels must:

- Start with a capital letter
- Not end in punctuation if it’s a single sentence, word, or a fragment

## Best practices

### Do's
Radio buttons must:

- Always be used with an associated label component.
- Have options that should be comprehensive and clearly distinct.
- Use label tags as click targets.
- Be used when there are less than 5 options.
- Be part of a list of radio buttons that:
   - Include at least two or more choices.
   - Include mutually exclusive options—this means that each option must be independent from every other option in the list. For example: Red, green, and yellow are mutually exclusive. Red, green, yellow, red/green are not mutually exclusive.
   - List options in a rational order that makes logical sense, such from simplest operation to most complex, or least risk to most.
   - Have a default option selected whenever possible.
- Preferably not contain more than three words.
- If they are too long, run over the second line. This is preferable than truncation.
- If they are too long, they will be aligned left.
- If they are too long, let the text flow under the checkbox so that the control and label are aligned at the top.

### Don'ts
Radio buttons must:

- Not be used to perform commands.
- Not be replaced by dropdowns. Drop-down menus will require extra action.
- Not be used when there are more than 5 options. Use the select instead.


## References

https://www.nngroup.com/articles/checkboxes-vs-radio-buttons/ <br/>
https://uxplanet.org/radio-buttons-ux-design-588e5c0a50dc <br/>
https://uxdworld.com/2018/05/06/7-rules-of-using-radio-buttons-vs-drop-down-menus/
