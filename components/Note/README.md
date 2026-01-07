<!-- @license CC0-1.0 -->

# Note

![npm (scoped)](https://img.shields.io/npm/v/@gemeente-denhaag/button?logo=npm&style=flat-square)
![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/nl-design-system/denhaag/Build%20and%20deploy%20Storybook%20to%20Azure%20Web%20App/main?logo=github&style=flat-square)

## Introduction

The note shows a message that is important and should stand out for users to notice.

## When to use

Use notes when you need to inform or warn users about something important, such as exceptions or something not to forget to bring to an appointment. Notes can always be found in the body of a page.

## Alternatives and related components

• Use an alert to inform users of important changes, ongoing circumstances, updates or changes to system status and if you need to communicate prominently.

## Anatomy

The note consists of:

1. Icon: shows what kind of note it is.
2. Text: provides information about the note.

## (Interactive) states

None.

## Design properties

### Typography

- Text: TheSans/md/400

### Colors

- Icon: info svg color Blue/3, warning svg color Orange/3
- Text: text color Grey/4

### Structure

- Icon: height and width 24px, padding-right 8px
- Text: padding-top and padding-bottom 4px

## Accessibility

Do not use in CMS template ‘Area live attribute’

## Content guidelines

- Notes should describe briefly and succinctly what matters.
- Limit the text to one or two short sentences.

## Best practices

### Do's

Notes should:

- Explain in as few sentences as possible what it is about.
- Appear in the body of a page.
- Used carefully and sparingly for only important information.
- Use the default icons for info and warning statuses.

### Don'ts

Notes should:

- Not be shown in forms if, for example, there is an error.
- Not show the same information that is already in the body text.
- Not be used more than 2x on a page because otherwise it will get too much emphasis and the rest of the text will get less attention
- Not rely on colour alone to convey meaning or tone.
- Not be used for subsequent action. No button may be placed below it.

## Usage

- Info: Provide additional information to users.
- Warning: Warn users about important information.

### Aria Live

In case the note has been applied as reference in a form and will be updated by javascript, apply `aria-live="polite"` and `aria-atomic=true"` to the component.
This way screenreaders will re-read the element when the component has been updated.

## References

https://www.figma.com/file/JpoY3waVoQGlLQzQXTL9nn/Design-System---Gemeente-Den-Haag?node-id=8123%3A24065
