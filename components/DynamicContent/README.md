<!-- @license CC0-1.0 -->

# Dynamic content

[![npm version](https://img.shields.io/npm/v/@gemeente-denhaag/dynamic-content.svg)](https://www.npmjs.com/package/@gemeente-denhaag/dynamic-content)

An image list card highlights people or other subjects including a photo in a list.

## When to use

Use the image list card when emphasis is placed on the photo and is placed in a list with several of this card. For example, to highlight people with their profession.

## Alternatives and related components

Use navigation link groups to only show a list of links instead of a link with a photo.

## Types

For now, there are two types of image list cards:

1. Person
2. Political parties

Of course, several variants are possible. The important thing to know is that the card always contains a photo that gets a lot of attention, a title and a short description.

## Anatomy

A image list card consist of:

- Image (16:9): photo of the subject or person;
- Title: name of the subject or person;
- Description: additional information;
- Arrow icon: navigates to a page;

## (Interactive) state

The image list card contains the states normal, hover and focus.

## Design properties

### Typography

- Title: TheMix/xl/700
- Description: TheSans/md/400

### Colors

- Title: text color Grey/5
- Description: text color Grey/4
- Arrow icon: svg color Blue/5

### Interactive states

- Hover: on desktop the arrow icon is visible
- Focus: arrow icon border color Ocher/5

### Structure

- Title: margin-top 16px
- Arrow icon: margin-left 24px

## Accessibility

## Content guidelines

### Person

- Only show the first and last name of the person in the title.
- The description must contain the person’s profession.

### Political party

- Only show the name of the political party in the title.
- The description must contain the information you can find on the page when you click the card.

## Best practices

- On screen sizes where the hover is not possible, the arrow icon should already be shown.
- Keep the information in the card as short as possible.
- The card must be immediately scannable.
- The image should show what the card is about.
- The cards should be used as an alternative to the navigation link group when you also want to show photos.
