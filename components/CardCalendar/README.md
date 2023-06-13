# Calendar Card

## Introduction

The calendar represents an activity or an event taking place on a specified date (or period) and/or time.

## Clickable area

Because this is a card component, the entire surface of the card is clickable.

## When to use

Use the calendar card to quickly show the user when the activity takes place. You can add more information about the activity on the next page.

## When not to use

Do not use this card to elaborate on the activity or event within the card content itself.
The user should always be able to view more information on the next page.

## Anatomy

The calender card consists of:

1. Date: can show a date, a date range, a day of the week or multiple weekdays
2. Title: The activity's name
3. Description (optional): A short description that explains the nature of the activity
4. Time (optional): Indicates the activity's time
5. Action: The arrow that navigates to the next page
6. Container
7. Underline: an aesthetic border below the calendar

## (Interactive) states

The calendar card can have a default, hover and focus state .

## Design properties

### Typography

- Date: TheMix/lg/700
- Title: TheSans/md/700
- Description: TheSans/md/400
- Time: TheSans/sm/400

### Colors

- Date: background-color Warm/grey
- Title: text color Grey/5
- Description: text color Grey/4
- Time: text color Grey/4
- Action: icon color Blue/3
- Container: line color Grey/2
- Underline: line color Grey/2

### Interactive states

- Hover: date background-color Green/1, date text color Green/4, action icon color Blue/4
- Focus: container border color Ocher/5

### Structure

- Date text: padding-top and padding-bottom 16px, padding-right and padding-left 24px
- Date circles: circle size 8px, left circle padding-left 12px, right circle padding-right 12px, both circles padding-top 12px
- Title: margin-top, margin-left, margin-right 16px
- Description: margin-top, margin-left and margin-right 16px, padding-top 4px
- Time and action: padding-top 24px
- Time: icon size 16px, padding-right 16px
- Action: icon size 20px
- Container: padding-top, padding-left and padding-right 8px, padding-bottom 24px
- Underline: margin-top 4px, margin-left and margin-right 6px

## Accessibility

To be confirmed

## Content Guidelines

### Date

- Use long versions for months (i.e. January, February, etc). Do not abbreviate
- If the activity takes place in the current year, you may omit the year. I.e. 5 May
- If the activity takes place the following year, you must include the date. I.e. 5 May 2024
- If you wish to display a date range with an end date, include the 'until' keyword. I.e. 1 May until 5 May
- If the activity takes place over a year change, include both years in the start and end dates. I.e. 27 December 2023 until 5 January 2024.
- If you wish to display a recurring event with no end date, use clear descriptions such as 'daily' or 'every tuesday'
- If an activity does not neccesarily takes place on a calendar date, do not capitalize the date. I.e. use 'daily' instead of 'Daily'
- Do not use punctiation such as - or ,

### Title

- Keep the title short and sweet
- The title should clearly indicate which activity this card is about
- The title should be clear and concise enough to be used without additional description
- Do not use more than:
  - X characters if you will include a description
  - X characters if you won't include a description

### Time

- Always include a start time
- Use 24-hour notation, and include a period after the hour. For example: 14.15
- If an end time is included, use the 'until' keyword. For example: 12.30 until 15.00
- Do not add a period at the end of times

## Best practice

### Do's

- Use the calendar card in a group, or as a standalone component
- The height of the calendar cards should be uniform, and follow the tallest item in the list
- Each calendar card should have an anchor link that navigates the user to the right page
- If the activity's date (or end date, in case of a date range) is in the past, do not render the activity

### Don'ts

- Do not use the card to give an elaborate description of the activity. Use the page that the card links to, to offer more information
- Do not use the calendar card to just highlight an important date. A user should always be able to navigate to the next page to obtain more information about the activity
