# Checkbox

![npm (scoped)](https://img.shields.io/npm/v/@gemeente-denhaag/checkbox?logo=npm&style=flat-square)
![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/nl-design-system/denhaag/Build%20and%20deploy%20Storybook%20to%20Azure%20Web%20App/main?logo=github&style=flat-square)

Checkboxes are usually used to provide a way for users to make a range of selections (zero, one or more). They can also be used to tell users that they agree to specific terms.

## When to use

Checkboxes are used for multiple choices, not for mutually exclusive choices. Each checkbox works independently from other checkboxes in the list, therefore checking an additional box does not affect any other selections.

### Forms

Can be used in forms on a full page or in modals.

### Terms and conditions

Turning the checkbox input on or off can indicate whether you agree to the terms.

## Alternatives and related components

Use radio buttons to display a list of options where users can only make one choice

[Navigate to Radio](../?path=/docs/components-input-radio--default)

## Anatomy

The checkbox consists of:

1. Label (optional): indicates what should be selected below.
2. Checkbox input: a checkbox input that indicates the correct status. By default it is not active.
3. Checkbox label: describes the information you can select or deselect.
4. Helper text (optional): displays more information about the checkboxes

## (Interactive) states

The checkbox contains the states normal, hover, disabled, error and focus.

## Design properties

### Typography

- Label: TheSans/md/700
- Checkbox label: TheSans/md/400
- Helper text: TheSans/s/400

### Colors

- Label: text color Blue/5
- Checkbox input inactive: border color Grey/4, background-color white
- Checkbox input active: border color Blue/3, background-color Blue/3, checkmark icon white
- Checkbox label: text color Grey/4
- Helper text: text color Grey/4

### Interactive states

- Disabled: container border color Grey/2, checkbox label text color Grey/2
- Error: container border color Red/3, checkbox label text color Grey/4
- Focus: container border color Ocher/5

### Structure

- Checkbox: height and width 20px, border 1px
- Checkbox focus: border 2px, dash 5,5
- Label: margin-bottom 8px
- Checkbox label: padding-left 8px
- Helper text: margin-left 16px, margin-top 4px

## Accessibility

Screen readers automatically report the status of the check box.

- [technical accessibility requirements]

### Labeling

[technical requirements, such as: label and labelHidden]

### External links

[technical requirements]

### Keyboard support

- Move focus to each checkbox using the tab key (or shift + tab when tabbing backwards)
- Activate or deactivate checkboxes with the space key

## Content guidelines

### Checkbox labels

Checkbox labels must:

- Start with a capital letter
- Not end in punctuation if it’s a single sentence, word, or a fragment
- In case the checkbox asks to agree to the terms and conditions, use the first person

## Best practices

### Do's

Checkboxes must:

- Work independently of each other: selecting a checkbox may not change the selection status of another checkbox in the list.
- Be positively boxed: for example “Enable notifications” instead of “Disable notifications”.
- Always have a label handy when you use it to turn a setting on or off.
- Use label tags as click targets.
- Be arranged in a logical order, whether alphabetical, numeric, time-based or some other clear system.
- Link to more information or have a subtitle for more explanation. Don't rely on tooltips to explain a checkbox.
- If they are too long, run over the second line. This is preferable than truncation.
- If they are too long, they will be aligned left
- If they are too long, let the text flow under the checkbox so that the control and label are aligned at the top.

### Don'ts

Checkboxes must:

- Not cut with an omit task if the label is too long and run over 2 lines.

### Buttons versus links

Buttons are mainly used for actions such as "Add", "Close", "Cancel" or "Save". Regular buttons similar to links are used for less important or less frequently used actions, such as "View details".

Links are mainly used for navigation and usually appear in or immediately after a sentence.

The HTML displayed for the Button and Link components has meaning. Using these components intentionally and consistently results in:

- a more inclusive experience for assistive technology users
- a more coherent visual experience for sighted users
- products that are easier to maintain to scale

## References

https://www.nngroup.com/articles/checkboxes-vs-radio-buttons/ </br>
https://uxplanet.org/checkbox-and-toggle-in-forms-f0de6086ac41 </br>
