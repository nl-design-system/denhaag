<!-- @license CC0-1.0 -->

# Image

[![npm version](https://img.shields.io/npm/v/@gemeente-denhaag/image.svg)](https://www.npmjs.com/package/@gemeente-denhaag/image)

Four image variants: image only, image with caption, image, image with download, image with caption and download.

## When to use

Use images where content may benefit from a supporting example to clarify information.

## Alternatives and related components

None.

## Anatomy

The image consists of:

- Picture
- Caption text (optional): gives the image additional context or provides source attribution
- Download link (optional): shows the download option
- Divider: line under the caption text and navigational link

## (Interactive) states

None.

## Design properties

### Typography

- Caption text: TheSans/sm/400
- Download link [see: navigational-links]

### Colors

- Caption text: text color Grey/4

### Structure

#### Desktop

- Picture: padding-bottom 16px
- Download link: padding-left 24px
- Divider [see: divider]
- Image: margin-bottom 32px

#### Mobile

- Image: padding-bottom 16px
- Download icon: size 24px, padding-left 16px
- Divider [see: divider]
- Image: margin-bottom 24px

## Aspect ratio

The aspect ratio that is being used for images, is 16:9.

## Use of images

### Header image

The header image appears above the content. It will always take space on 1 column.

### Standard images

Standard images appear after the text or below it. There can be multiple images below each other. It will always take space on 1 column.

### Left or right aligned image

Standard, news and event templates allow images that are aligned left or right in the page. They will always take space on 1 of the two columns.

### Image gallery

The gallery is a bundle of images, where there are at least 2 images next to or below each other. The images are always left aligned in a gallery. They will always take space on 1, 2 or 3 columns.

## Accessibility

Images must always be supported with text alternatives which are descriptive of the information they present. Alternative text is read out by screen readers for users with visual impairments and where an image does not load. Text should never be included as part of the image as this will not be read out by screen readers or translated by automated translators.

W3C gives guidance on how to make images accessible.

## Content guidelines

None.

## Best practices

### Do's

Images should:

- Illustrate concrete things (for example, animals, I.D. cards, plate stickers), not abstract concepts (for example, light, holistic, synergy)
- Be optimized for the web to reduce the file size as much as possible while maintaining a reasonable quality

### Don'ts

Images should:

- Not be unrelated to the page’s subject matter
- Not be too small to show important details, especially if viewed on mobile devices
- Not have text on it

## References

- https://designsystem.ontario.ca/docs/basics/images.html
