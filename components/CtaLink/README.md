<!-- @license CC0-1.0 -->

# Call To Action Link

[![npm version](https://img.shields.io/npm/v/@gemeente-denhaag/cta-link.svg)](https://www.npmjs.com/package/@gemeente-denhaag/cta-link)

A CTA icon is a standalone link that links to another page within the website or an external website related to the current page or to a video.

## When to use

CTA links are used as navigational elements and are used on their own. They provide a middleweight option for navigation and stand out more than the normal links so use it sparingly. Like other interactive elements, too many CTA icons will clutter a page and make it difficult for users to identify their next steps.

Use CTA links when you want users to:

- Navigate to a page or entirely different site that can also be viewed (see also - variant);
- Navigate to a website where a video is shown (such as YouTube or Vimeo);

## Alternatives and related components

- Use links for navigation actions that appear within or immediately after a sentence.
- Use calendar events when you link to an event.
- Use a download when there is a file to download.
- Use a CTA image when there is a link in conjunction with an image.

## Anatomy

The CTA links consists of:

- Support icon: informs users at a glance about the type of the CTA;
- Text: additional information about the link;
- Link: shows the name of the page where it is being linked to;
- Container

## (Interactive) states

The CTA links contains the states normal, hover and focus.

## Design properties

### Typography

- Text: TheSans/lg/400
- Link: TheSans/lg/700

### Colors

- Supportive icon: background-color Blue/3, icon svg color white
- Text: text color Grey/4
- Link: text color Blue/3
- Container: border-top and border-bottom line color Grey/2

### Interactive states

#### Hover:

link text color Blue/4, supportive icon background-color Blue/4

#### Focus:

link text color Blue/4, supportive icon background-color Blue/4, container border color Ocher/5

### Structure

- Supportive icon: background circle size 64px, icon size 24px, padding-left 16px, padding-right 24px
- Text and link: padding-right 16px
- Container: padding-top and padding-bottom 24px, border line 1px

## Accessibility

[technical requirements]

## Content guidelines

### Text

_See also variant_

The text should:

- Be supportive to the link.
- Briefly provide context to the surrounding text as needed.
- Be able for users to anticipate what will happen when they click on the CTA icon.
- Always start with ‘Zie ook:’.

### Video variant

The text should:

- Be supportive to the link.
- Start with a link when referring to a video.
- Be able for users to anticipate what will happen when they click on the CTA link.
- Be scannable avoiding unnecessary words.
- Briefly provide context to the surrounding text as needed.
- Always start with ‘Bekijk’.

### Link

_See also variant_

The link should:

- Must show a short and clear page name being linked to.

#### Video variant

The link should:

- Provide enough context use the {verb}+{noun} format unless the action is clear with a single verb.

## Best practices

### Do's

CTA links should:

- Link to a page related to the current page;
- Link to a video;
- Be placed under or between a text (usually in a list);
- Be placed below each other if there are several CTA links;

### Don'ts

CTA links should:

- Not be used as a standalone link like ‘Learn more’ or ‘Forgot password?’;
- Not contain more than 3 CTA link in a row;

### Logic

- Always show the first and current page
- Only use the collapsed icon if there are more than 4 pages.
- If the collapsed icon is used, always show on the right side the underlying page and next to this the current page.
  - If there are for example 5 pages, then show the homepage (1), hide the 2nd and 3rd page and show the 4th and current page (5).
  - If there are for example 6 pages, then show the homepage

## References

- [Figma Design](https://www.figma.com/file/JpoY3waVoQGlLQzQXTL9nn/Design-System---Gemeente-Den-Haag?node-id=8105%3A21885)
