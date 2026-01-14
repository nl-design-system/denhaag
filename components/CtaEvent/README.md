<!-- @license CC0-1.0 -->

# Call To Action Event

[![npm version](https://img.shields.io/npm/v/@gemeente-denhaag/cta-event.svg)](https://www.npmjs.com/package/@gemeente-denhaag/cta-event)

A calendar event is a standalone link that shows what kind of event is on which date. It links to a content evenement page.

## When to use

Use the event when you need to reference an event that contains a date.

## Alternatives and related components

- Use links for navigation actions that appear within or immediately after a sentence.
- Use CTA links when you link to a page or website that also can be viewed or to a video
- Use a download when there is a file being downloaded.
- Use a image content link when there is a link in conjunction with an image.

## Anatomy

The calendar event consists of:

- Date icon: shows the day and abbreviated month of the event;
- Header link: shows the name of the event;
- Date: shows the full date;
- Container;

## (Interactive) states

The calendar event contains the states normal, hover and focus.

## Design properties

### Typography

#### Date icon

- day TheSans/md/400,
- month TheSans/sm/400

#### Header link

TheSans/lg/400

#### Date

TheSans/lg/700

### Colors

- Date icon: background-color Blue/3, text color white;
- Header link: text color Blue/3;
- Date: text color Grey/4;
- Container: border-top and border-bottom line color Grey/2;

### Interactive states

#### Hover

header link text color Blue/4, date icon background-color Blue/4;

#### Focus

header link text color Blue/4, date icon background-color Blue/4, container border color Ocher/5;

### Structure

- Date icon: background circle size 64px, padding-left 16px, padding-right 24px, day and month padding-top and padding-bottom 12px;
- Header link: padding-bottom 4px;
- Header link and date: padding right 16px;
- Container: padding-top and padding-bottom 24px, border line 1px;

## Accessibility

[technical requirements]

## Content guidelines

### Date icon

The date icon should:

- Contain the digit of the event day. If the digit is <10, then use ‘0’ before for the number (e.g. ‘01’, ‘05’);
- Contain only the first three letters of the month.

### Heading link

The heading link should:

- Show in one sentence what the event is all about;
- Start the sentence with the event type (e.g. ‘Spreekuur’ or ‘Bijeenkomst’);
- Use the hyphen to break the text.

### Date

The date should:

- Show the full date, so the day (e.g. ‘Maandag’), digit of the day (e.g. ‘1’), month (e.g. ‘Januari’) and year (e.g. ‘2022’);
- Not use the hyphen when breaking the text. Let the text continue on the next line.

## Best practices

### Do's

Calendar events should:

- Always link to a content event page;
- Be grouped under each other when there is more than 1 event;
- Be placed above, under or between a text (usually in a list);
- Be full width (100%)

### Don'ts

Calendar events should:

- Not be used to link to another page other than a content evenement page.

## References

- [Figma Design](https://www.figma.com/file/JpoY3waVoQGlLQzQXTL9nn/Design-System---Gemeente-Den-Haag?node-id=8105%3A21885)
