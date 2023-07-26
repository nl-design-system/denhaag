# Inline Carousel

## Introduction

An image slider displays multiple images that can be slide through by the user.

## When to use

Use image sliders when there is a group of the same pictures that are not too important to show as separate photos on the page. When there is insufficient content space, it can be used to save space in the form of a revolving door.

## Alternatives and related components

Image

## Anatomy

The image slider consists of:

1. Image
2. Pagination indicator: shows the number of images and are not clickable
3. Controls: previous and next controls that navigates to the image next to the showing image
4. Caption text (optional): gives the image additional context or provides source attribution

## (Interactive) states

The image slider contains the states normal, hover and focus.

## Design properties

### Typography

- Caption text: TheSans/md/400

### Colors

- Pagination indicator: current color Green/3, inactive color Grey/2
- Controls: see the icon-only button
- Caption text: text color Grey/4

### Interactive States

Hover: see the icon-only button
Focus: see the icon-only button

### Structure

Desktop

- Image: padding-bottom 24px
- Controls: button padding-left and padding-right 24px

Mobile

- Image: padding-bottom 16px
- Controls: button padding-left and padding-right 12px

## Accessibility

The image slider doesn't slide to the next item automatically, but only when pressing the prev/next button.
Animation between images is disabled based on the prefers-reduced-motion media query (Article: CSS Tricks — An Introduction to the Reduced Motion Media Query)

## Transition

The images should slide when transitioning from one image to another.

## Content guidelines

- Write a short meaningful caption text that accompanies the image.
- It should be clear that the text is about the photo.
- Only post text if it clarifies the image.

## Best practices

### Do's

Image sliders should:

- Have at least 2 images
- Help people compare things
- Always show controls
- On the first slide be able to navigate back with the backward button to the last image
- On the last slide be able to navigate back with the forward button to the first image

### Don'ts

Image sliders should:

- Not be on the homepage’s hero section because it can severely hamper a visitor’s very first experience
- Not be used for showing content
- Not autoplay

Image sliders work best when they contain interesting and relevant content that is presented with a clear context. If content wouldn't engage a user outside of a carousel—placing it in a carousel won't make it perform any better. If you must use a carousel, prioritize content and ensure that each slide is sufficiently relevant that a user would want to click through to the subsequent slide.

## References

https://webflow.com/blog/carousel-slider-design-best-practices
https://web.dev/carousel-best-practices/
