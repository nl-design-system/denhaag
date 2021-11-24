# Text Field

A text field is an input field where users can input content and data.

## When to use

Text fields can be used for long and short form entries. There are instances, sometimes in the same form, where you need users to enter both short and long form content. Allow the size of the text field box to reflect the length of the content you expect the user to enter.

### Text field singleline

When the expected user input is a single line of text, as opposed to a paragraph.

### Text field multiline

When the expected user input is more than one sentence.

## Alternatives and related components

- Use the form layout component to lay out the elements in a responsive form
- Use the inline error component to describe an invalid form input with a separate validation error

## Anatomy

The text field consists of:

1. Label: describes the information of the text field.
2. Placeholder: a hint towards the desired answer that sits within a field.
3. Input text: the choice which has been selected from the choices in a menu.
4. Trailing icon (optional): describes valid input methods, provide affordances to access additional functionality and can express an error.
5. Error icon (optional): this icon shows an error.
6. Container: persists when the select is open or closed.
7. Helper text: displays more information about the select
8. Character counter: is used if there is a character or word limit.

## (Interactive) states

The text field contains the states active, inactive, disabled, error and focus.

## Design properties

### Typography

- Label: TheSans/md/700
- Placeholder: TheSans/md/400
- Input text: TheSans/md/400
- Helper text: TheSans/s/400
- Character counter text: TheSans/s/400

### Color

- Label: text color Blue/5
- Placeholder: text color Grey/3
- Input text: text color Grey/4
- Container: border 1px inside Grey/2, background-color white
- Trailing icon: svg color Grey/4
- Error icon: svg color Red/3
- Helper text: standard text color Grey/4

### Interactive states

- Active: container border color Blue/3, input text color Grey/4
- Inactive: container border color Grey/3, input text color Grey/3
- Disabled: container border color Grey/2, input text color Grey/2
- Error: container border color Red/3, input text color Grey/4, helper text color Red/3
- Focus: container border color Ocher/5

### Structure

#### Text field singleline

- Label: margin-bottom 8px
- Placeholder: padding-left 16px
- Input text: padding-left and padding-right 16px, padding-top and padding-bottom 8px
- Container: height 40px, border 1px
- Trailing icon: height and width 20px, padding-left 16px, padding-right 12px
- Error icon: height and width 20px, padding-left 16px, padding-right 8px
- Helper text: margin-left 16px, margin-top 4px
- Field focus: container border 2px, dash 5,5

#### Text field multiline

- Label: margin-bottom 8px
- Placeholder: padding-left 16px
- Input text: padding-left and padding-right 16px, padding-top and padding-bottom 12px
- Container: height and width varies, border 1px
- Trailing icon: height and width 20px, padding-left 16px, padding-right 12px
- Error icon: height and width 20px, padding-left 16px, padding-right 8px
- Helper text: margin-left 16px, margin-top 4px
- Character counter: margin-right 16px, margin-top 4px
- Field focus: container border 2px, dash 5,5

## Accessibility

[technical requirements]

## Content guidelines

### Field label

A label is a short description of the requested input. Labels are not instructional text but they should be meaningful and clearly indicate what is expected. Labels should be:

- Placed above or beside the form field
- Short and succinct (1–3 words)
- Written in sentence case (the first word capitalized, the rest lowercase)

### Field placeholder text

Placeholder text is shown inside the form field to teach users what to input. Field placeholder text should:

- Be used only for supplementary information because the text has low contrast and is not visible when text is entered
- Be written as examples instead of instructions
- Include “Example:” before an example

### Designating optional fields

Try to only ask for information that’s required. If you need to ask users to provide optional information, mark the field optional by placing the text “(optional)” at the end of the field’s label. Don’t mark required fields with asterisks.

### Helper text

Help text provides extra guidance or instruction to users filling out a form field. It can also be used to clarify how the information will be used. As with all form content, help text should be succinct and easy to read.

### Validation error messages

Error messages should:

- Clearly explain what went wrong and how to fix it
- Be short and concise, no more than a single sentence
- Use passive voice so users don’t feel like they’re being blamed for the error

## Best practices

### Dos

Text fields should:

- Be clearly labeled so it’s obvious to users what they should enter into the field
- Be labeled short so labels are easy to read and scan
- Be labeled as “Optional” instead of marking it with asterisks when you need to request input that’s not required
- Only ask for information that’s really needed
- Validate input as soon as users have finished interacting with a field (but not before)
- Match field length and structure to the intended input
- Use the appropriate input type and tag

### Don’ts

Text fields should:

- Not use a placeholder as a label because it puts a burden on short-term memory
- Not use errors above the text field
- Not set default values unless you believe a large portion of your users (say, 95% of them) will select the same values

## References

[https://www.nngroup.com/articles/form-design-placeholders/](https://www.nngroup.com/articles/form-design-placeholders/)
[https://www.w3schools.com/tags/tag_input.asp](https://www.w3schools.com/tags/tag_input.asp)
[https://medium.com/nextux/form-design-best-practices-9525c321d759](https://medium.com/nextux/form-design-best-practices-9525c321d759)
[https://xd.adobe.com/ideas/principles/web-design/best-practices-form-design/](https://xd.adobe.com/ideas/principles/web-design/best-practices-form-design/)
