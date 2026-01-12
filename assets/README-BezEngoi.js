const e=`<!-- @license CC0-1.0 -->

# Alerts

![npm (scoped)](https://img.shields.io/npm/v/@gemeente-denhaag/alert?logo=npm&style=flat-square)
![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/nl-design-system/denhaag/Build%20and%20deploy%20Storybook%20to%20Azure%20Web%20App/main?logo=github&style=flat-square)

Alerts are messages that provide information to the user. Alerts are placed at the top of the page or section to which they apply and below the page or section heading.

## When to use

Use notifications to inform users of important changes, ongoing circumstances, updates or changes to system status. Use this component if you need to communicate prominently. Communicating with users and providing immediate feedback are important for building trust. While notifications are an effective method of communicating with users, they are disruptive and should be used sparingly.

## Alternatives and related components

- Use highlights to notify users about important and temporary updates
- Use a card to group similar concepts in the interface

[Navigate to Card](../?path=/docs/components-cards-card--case)

## Anatomy

The alert consists of:

1. Support icon: informs users at a glance about the type of alert.
2. Title: gives users a quick overview of the alert.
3. Close icon (optional): closes the alert.
4. Text: provides additional details and actionable steps the user can take.
5. Button (optional): button that allows users to perform an action that pertains to the notification or navigate to a page with more details.
6. Container

## Design properties

**Typography**

- Title: TheSans/lg/400
- Text: TheSans/md/400

**Colors**
There are 4 variants.

- Error: support icon Red/3, title Red/5, close icon Red/5, text Red/5, button Red/3, container Red/1
- Info: support icon Blue/3, title Blue/5, close icon Blue/5, text Blue/5, button Blue/3, container Blue/5
- Success: support icon Green/3, title Green/5, close icon Green/5, text Green/5, button Green/3, container Green/1
- Warning: support icon Orange/3, title Orange/5, close icon Orange/5, text Orange/5, button Orange/3, container Orange/1

**Button**
The following buttons are used: medium, primary, text-only.

**Structure**

- Support icon: height and width 24px, padding-top and padding-right 24px, margin-left 24px
- Title: margin-top 24px
- Close icon: height and width 24px, padding-left 24px, margin-right 24px
- Text: margin-bottom 16px
- Button: margin-bottom 24px

## Accessibility

- Alerts use a combination of icons and colors to show their meaning and importance.
- [technical accessibility requirements]

**Error alerts in forms**

_Error alerts_
If users submit long or complex forms with errors, use an error alert to summarize what went wrong. Place the alert at the top of the form and move the focus to the banner when the form is submitted. This will allow all users to scroll through the form in a logical order to resolve the issues.

_Inline errors_
Always include inline error messages for specific form fields so that users know what to do in context while correcting their errors.

## Content guidelines

**Title**
Titles should follow the content guidelines for headings and subheadings.

**Text**
The text should:

• Be concise: limit the content to 1 to 2 sentences where possible
• Clarify the benefit of the main task
• Be written in uppercase and lowercase letters and contain proper punctuation
• Do not repeat the headline
• Explain how to solve the problem, especially for warning and error banners

**Buttons**
The buttons should:

• Be clear and predictable: users should be able to expect what will happen when they click a button.
• Be action-driven: buttons should always lead with a strong verb that encourages action. To provide users with enough context, you can use the {verb} + {noun} format on buttons, except in the case of general actions such as Save, Close, Cancel or OK.
• Be scannable: avoid unnecessary words such as "the", "a" or "an".

## Best practices

### Do's

Alerts should:

- Put in the right context:
  - Alerts relevant to an entire page should be placed at the top of that page, below the page header. They should occupy the full width of the content area.
  - Alerts pertaining to a section of a page (such as a map, popover, or modal) should be placed in that section, under a section heading. These banners have less spacing and a simple design to fit a content context.
  - Alerts pertaining to an element that is more specific than a section should be placed directly above or below that element.
- Focus on one theme, piece of information, or required action.
- Admissible unless they contain critical information or are an important step that users need to take.
- Be concise and scannable: Users shouldn't spend much time figuring out what to know and do.
- Limited to a few major calls to action with no more than one primary action.
- Used carefully and sparingly for only the most important information.
- Use the default icons for success, info, warning and error statuses.

### Don'ts

Alerts should:

- Not to be used as the primary access point for information or actions that users need on a regular basis.
- Not be sticky.
- Not have more than a maximum number of 2 banner on a page.
- Not cover other contents.
- Not contain links that can also be displayed as a button.

## Pattern

**Notification status**
Notification status helps convey the information being communicated. These statuses correspond with a color and icon to provide a consistent, universal experience for users.

**Usage**

- Error: Inform users of an error or critical failure and optionally block the user from proceeding until the issue has been resolved
- Info: Provide additional information to users that may not be tied to their current action or task
- Success: Confirm a task was completed as expected
- Warning: Inform users that they are taking actions that are not desirable or might have unexpected results
`;export{e as r};
