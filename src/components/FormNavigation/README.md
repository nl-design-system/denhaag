# Form navigation

The form navigation is a visual representation of a user’s progress through a set of steps, guiding toward the completion of a specified process in a form.

## When to use

Use the form navigation to keep the user on track when completing a specific task in a form. By dividing the end goal into smaller, sub-tasks, it increases the percentage of completeness as each task is completed.

## Alternatives and related components

Use anchor navigation to show which subjects there are on a page

## Anatomy

The form navigation consists of:

1. Step: this icon shows the number of the step or an error
2. Label: describes the information of the step
3. Descriptive text (optional, on desktop): additional information about the step
4. Progress line (on mobile): this line shows how far you are on a page
5. Close icon (on mobile): closes the form
6. Container

## (Interactive) states

The form navigation the states inactive, active, hover, error, and focus.

## Design properties

### Typography

- Label inactive and completed: TheSans/md/400
- Label active: TheSans/md/700
- Step number: TheSans/s/700
- Descriptive text: TheSans/s/400

### Color

All steps that have been completed are indicated by an outlined circle with a checkmark. The current, active step the user is on is indicated by a filled circle. Steps the user has not encountered yet, or inactive steps, are indicated by an outlined circle.

- Label inactive: text color Grey/4
- Label active: text color Blue/3
- Label completed: text color Grey/4
- Step inactive: fill color white, text color Grey/3, border color Grey/3
- Step active: fill color Blue/3, text color white
- Step completed: border color Green/3
- Step error: fill color Red/3
- Descriptive text: text color Grey/4
- Close icon: svg color Grey/4

#### Specific for mobile

- Progress line: fill color Blue/3
- Shadow: fill color 10% of Grey/4, border-top color Grey/3

### Interactive states

- Hover inactive: step text color Blue/3, step border color Blue/3, label text color Blue/3
- Hover error: label text color Blue/3
- Hover completed: label text color Blue/3
- Error: label text color Red/3
- Focus: container border color Ocher/5

### Structure

- Step: border weight 1,5px, height and width 20px, padding-right 16px
- Container: min-height 40px

#### Mobile

- Step: height and width 20px, padding-right 8px
- Label: padding-top and padding bottom 16px
- Progress line: width 2px
- Shadow: height 8px, border-top 1px
- Close icon: height and width 20px, padding-right 16px
- Container: height 56px

## Accessibility

[technical requirements]

## Content guidelines

### Labels

Labels should:

- Contain one to three words.
- Be clear and predictable. Users need to know what to find under each form step.
- Make sure the steps are recognizable as key elements of the page.
- Avoid unnecessary words and articles such as “the”, “a” or “an”.

## Best practices

### Dos

Form navigations should:

- Allow the user to return to a previous step to review their data submission.
- Bring the user to the specific step he is clicking on
- Create a clear path to completion
- Keep the user informed of where they currently are within the process or task at hand will give them a sense of control
- Be clear as possible in order not to confuse users
- Display the steps in order from top to bottom
- Show all steps on mobile if the user clicks on a step in the header
- Show the subheadings preceding the current subheading as active
- Continue on the next line for very long labels
- Be sticky
- Hide the menu overlay on mobile if a user clicked on a step

### Don’ts

Form navigations should:

- Not have more than 3 lines on desktop
- Not only the current subheading as active where you are, but also all previous subheadings

## References

[https://carbondesignsystem.com/components/progress-indicator/usage](https://carbondesignsystem.com/components/progress-indicator/usage)
