# Datepicker

Date pickers let users choose a date from a visual calendar.

## When to use

Use date and time pickers when you are asking the user for a date.

### Simple date input

Use the simple data input if the date can be remembered by the user easily, such as a date of birth, and they don’t need a calendar to anticipate the dates. It consists only of input fields.

### Calendar picker

Use the calendar picker when the user needs to know a date’s relationship to other days or when a date could be variable. It allows the user to view and pick dates from a calendar widget or manually type the date in the text field.

## Alternatives and related components

None.

## Anatomy

The date picker consists of:

1. Label: describes what the user can do with the control
2. Date field: a text input field where the user can manually type in the date
3. Icon: this calendar icon indicates that the calendar menu is available
4. Calendar: menu where a date can be selected
5. Month and year controls: allows the user to navigate through past and future time frames
6. Previous and next month controls: allows the user to move forward or backward one month at a time
7. Weekday: days in the week
8. Day: days in the month

### Notes

The documentation of the date field can be found at the component text field.

## (Interactive) states

The date picker contains the states inactive, active, hover, disabled and focus.

## Design properties

### Typography

- Month and year controls: TheSans/md/700
- Weekdays: TheSans/md/400z
- Day: TheSans/md/400

### Color

- Calendar: background-color white, border Grey/2
- Month and year controls: text color Grey/4, background-color white
- Previous and next month controls: svg color Grey/4
- Weekday: text color Grey/3
- Day inactive: text color Grey/4
- Day active: text color white, background-color Green/3
- Today: text color Grey/4, background-color Grey/1

### Interactive states

#### Day

- Hover inactive: text color Green/3
- Hover active: text color white, background-color Green/4
- Disabled inactive: text color Grey/2
- Disabled active: text color white, background-color Grey/2
- Focus: border color Ocher/5

#### Today

- Hover inactive: text color Green/4, background-color Grey/1
- Hover active: text color white, background-color Green/4
- Disabled active: text color white, background-color Grey/2
- Focus: border color Ocher/5

#### Structure

- Calendar: height 312px, width 308px, padding-top 0px, padding-left 12px, padding-right 12px, padding-bottom 24px
- Month and year controls: height 48px, padding-left and padding-right 12px, chevron icon size 20px
- Previous and next month controls: padding-left and padding-right 20px
- Weekday: height and width 32px
- Day: height and width 32px, padding 8px

## Accessibility

Some users might find interacting with date pickers to be challenging. When you use the date picker component, always give users the option to enter the date using a text field component as well.

### Keyboard support

Press the `tab` key to move forward and `shift` + `tab` to move backward through the chevron icons, and the calendar

When focus is in the calendar, move keyboard focus between the dates using the arrow keys

To select a date that has focus, press the enter key

## Content guidelines

### Date format

- The date format can be displayed differently depending on your location. For example, some countries use month/day/year while other use day/month/year.
- When using a simple date input include the date format in parentheses inline with the label or as helper text below the label.
- When using calendar picker the date format will be automated if the user selects from the calendar menu.
- Only including the date format as placeholder text inside the field is problematic because it will disappear from view once the user begins typing. Also show the date format in the help text.

## Best practices

### Dos

Date pickers must:

- Use smart defaults and highlight common selections
- Used when the user needs to know a date’s relationship to other days or when a date could be variable
- Close after a single date is selected
- Follow date format guidelines
- Always remain a fixed width and is not adjustable. It should always be aligned to the left edge of its assigned text field.
- Allow users to navigate through months and years, however they work best when used for recent or near future dates.
- Indicate the current date
- Add inline errors while in-focus and out-of-focus

### Don’ts

Date  pickers must:

- Not be used to enter a date that is many years in the future or the past
- Not use auto-corrections

## Behaviors

### Opening the calendar

The calendar can be opened in two ways:

- Clicking the calendar icon on the far right of the field opens the calendar menu.
- When the text field receives focus the calendar menu also appears and remains open until a date is selected or the focus is removed from the picker.

### Selecting a date

A date can be selected by:

- Manually entering a date in the text input field.
- Clicking on a date in the calendar menu.
- Navigating to a date by using the Arrow keys and then pressing Enter.

### Next and previous month

A user can navigate between the months in a year by:

- Clicking on chevron icons at the top left and right of the calendar.
- Using the Arrow keys to move through the next or previous month.

### Selecting a year

By default the current date and year appears in the calendar. To navigate to another year the user can do one of the following:

- Manually typing the year in the date text field.

### Closing the calendar

The calendar can be closed in one of the following ways:

- Selecting a single date. This will automatically close it.
- Clicking anywhere outside of the calendar menu.
- Removing focus from the picker.
- Pressing Esc.

### Min and max dates

In order to constrain the possible selectable dates in a calendar, a min and max date may be set. Once set, only the dates that fall within the min/max range will be selectable with the dates outside of the range being disabled.

Use min and max dates to help prevent user error. If a user cannot select dates in the past when scheduling, then set a min date to today.

## References

[https://carbondesignsystem.com/components/date-picker/usage](https://carbondesignsystem.com/components/date-picker/usage)
[https://uxplanet.org/date-picker-design-best-practices-41bd522f10a5](https://uxplanet.org/date-picker-design-best-practices-41bd522f10a5)
[https://www.nicoleedens.com/research/datepickerbestpractices2020](https://www.nicoleedens.com/research/datepickerbestpractices2020)
