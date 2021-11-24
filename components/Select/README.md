# Select

Select allows a user to select one option from a menu that is displayed after opening it. Consider select when you have 6 or more options, to avoid cluttering the interface.

## When to use

The select component allows users to choose one option from a list. It is used in forms, where a user is submitting data and chooses one option from a list.

## Alternatives and related components

- Use checkboxes to display a list of options where users can make multiple choices
- Use a radio button when users need to select one option from a list with less than 6 options

## Anatomy

The select consists of:

1. Label: describes the information of the options you can choose from.
2. Placeholder (optional): a hint towards the desired answer that sits within a field.
3. Selected option: the choice which has been selected from the choices in a menu.
4. Trailing icon: this icon shows that it is possible to open a menu with options.
5. Error icon (optional): this icon shows an error.
6. Container: persists when the select is open or closed.
7. Helper text (optional): displays more information about the select

## (Interactive) states

The select contains the states active, inactive, disabled, error and focus.

## Design properties

### Typography

- Label: TheSans/md/700
- Placeholder: TheSans/md/400
- Selected option: TheSans/md/400
- Helper text: TheSans/s/400

### Color

- Label: text color Blue/5
- Placeholder: text color Grey/4
- Selected option: text color Grey/4
- Container: border color Grey/2, background-color white
- Trailing icon: svg color Grey/4
- Error icon: svg color Red/3
- Helper text: text color Grey/4

### Interactive states

- Active: container border color Blue/3, selected option text color Grey/4
- Inactive: container border color Grey/3, selected option text color Grey/4
- Disabled: container border color Grey/2, selected option text color Grey/2
- Error: container border color Red/3, selected option text color Grey/4, helper text color Red/3
- Focus: container border color Ocher/5

### Structure

- Label: margin-bottom 8px
- Placeholder: padding-left 16px
- Selected option: padding-left 16px, padding-top and padding-bottom 8px
- Container: height 40px, border 1px
- Trailing icon: height and width 20px, padding-left 16px, padding-right 12px
- Error icon: height and width 20px, padding-left 16px, padding-right 8px
- Helper text: margin-left 16px, margin-top 4px
- Field focus: container border 2px, dash 5,5

### Notes

Door de negatieve gevolgen van het gebruik van placeholder tekst op toegankelijkheid zou placeholder tekst vermeden dienen te worden. Toch hebben we het gestyled voor het geval we het ooit gaan nodig hebben.

## Accessibility

[technical requirements]

## Content guidelines

### Select label

Labels should:

- Be clear and avoid negations
- Give a short description (1–3 words) of the requested input.
- Be written in sentence case (the first word capitalized, the rest lowercase).
- Avoid punctuation and articles (“the”, “an”, “a”).
- Be independent sentences.
- Be descriptive, not instructional. If the selection needs more explanation, use help text below the field.

### Selected options

Options should:

- Start with “Kies [the thing you want them to select]” as a placeholder if there isn’t a default option
- Be listed alphabetically or in another logical order so users can easily find the option they need
- Be written in sentence case (the first word capitalized, the rest lowercase) and avoid using commas or semicolons at the end of each option
- Be clearly labelled based on what the option will do

## Best practices

### Dos

Selects should:

- Be used for selecting between 6 or more pre-defined options
- Have a default option selected whenever possible
- Use “Kies [the thing you want them to select]” as a placeholder option only if there’s no logical default option
- Be large enough for reliable interaction

### Don’ts

Selects should:

- Not be replaced by radio buttons.
- Not be used when there are less than 6 options. Use the radio button instead.

## References

[https://uxdesign.cc/selection-controls-ui-component-series-3badc0bdb546](https://uxdesign.cc/selection-controls-ui-component-series-3badc0bdb546)
