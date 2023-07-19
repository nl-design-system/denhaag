# Fullwidth Slider

## Introduction

An image slider displays a group of images in a limited area of the interface with optional descriptive text.

## When to use

- Use image sliders when there is a group of content (images) on the same level. In this case, the carousel will save the user one click.
- Use the image slider as an additional highlight of important news or news that entertains, never as the only path to important content.

## Anatomy

The carousel consists of:

- Title (optional): the heading that belongs to the group of images
- Pagination indicator: shows the number of images and are not clickable
- Controls: previous and next controls that navigates to the image next to the showing image and a pause/play button that start or pause the autoplay
- Image
- Caption (optional): gives the image additional context. There may also be a quote and an action that leads to the relevant page for more information.

## (Interactive) states

The image slider contains the states normal, hover and focus.

## Design properties

### Typography

Title: TheMix/2xl/700 (standard heading)
Caption text: TheMix/lg/700
Caption name author: TheSans/sm/400

### Colors

Pagination indicator: current color Green/3, inactive color Grey/2
Controls: see the icon-only button
Caption text: text color Grey/5
Caption name author: text color Green/4
Arrow: icon color Blue/3

### Interactive states

#### Controls

Hover: see the icon-only button
Focus: see the icon-only button

#### Caption

Hover: Card shadow v1
Focus: container border color Ocher/5

### Structure

Pagination indicator: normal size 12px, small size 8px, extra small size 4px, padding 8px, margin-left and margin-right 48px
Controls: padding 8px

#### Caption position

1768 & 1280: margin-left 100px, Y offset -72px
1024: margin-left 60px, Y offset -72px
768: margin-left 60px, Y offset -64px
360: margin-left 24px, Y offset -32px

#### Desktop and tablet

Caption container: padding-top and padding-left 32px, padding-right and padding-bottom 16px
Caption text: padding-bottom 16px, padding-right 48px
Caption name author: padding-right 48px
Arrow: size 24px

#### Mobile

Pagination indicator and controls: margin-top 24px
Caption container: padding-top and padding-left 24px, padding-right and padding-bottom 16px
Caption text: padding-bottom 16px, padding-right 8px
Caption name author: padding-right 8px
Arrow: size 24px

### Image aspect ratio

The aspect ratio of the images is 16:9, with the exception of breakpoints 1280 and 1768 due to the long height of the image slider. In this way, the image slider would not be visible in its entirety on a screen, which is bad for usability.

#### Width

At all breakpoints, the carousel image is the same width as the web page, except for breakpoint 1768.
1768: 1280px
all other breakpoints have the same width

#### Height

1768, 1280 & 1024: 576px
768: 432px
360: 202,5px

## Accessibility

Key → goes to the next slide
Key ← goes to the previous slide
Tab moves focus on the controls
Users must be able to pause carousel movement because it can be too fast or distracting, making text hard to read.
Changes to carousel items must be communicated to all users, including screen reader users.

On mobile devices, it should be possible to change slides using swipe.

## Auto-forwarding

Auto-forwarding through the frames in a carousel leads people through the information. Auto-forwarding won’t be used, instead we give the user control over this feature. If the user wants, he can click the play button to start the auto-play.

#### Guidelines for auto-forwarding

Don’t stop at the last frame. Continue cycling through the frames (and displaying which frame is selected).
The image should be on screen for 7 seconds and then transitions to the next image.

#### Auto-forwarding causes many usability problems:

Moving UI elements usually reduce accessibility, particularly for users with motor skill issues who have difficulty clicking something before it's taken away.
Low-literacy users often don't have enough time to read the information before it's removed.
International users also read more slowly if your site is not in their native language, and thus they won't be able to understand a panel if it's displayed only briefly.
Single-item visibility is reduced by having to take turns being on display. The probability that users will spot the item they want is drastically reduced when only one thing is displayed at any given time; in the Siemens example, the discount deal is visible only 20% of the time.
It's just plain annoying for users to lose control of the user interface when things move around of their own accord.
Most important, because it moves, users automatically assume that it might be an advertisement, which makes them more likely to ignore it.

## Content guidelines

- Write short meaningful text that accompanies the image, such as a news story.
- If you write down a quote, put it in quotes.
- It should be clear that the text is about the photo.
- Only post text if it clarifies the image or navigates you to a page that revolves around the image.

## Do's

- Include least 2 images.
- Include 5 or fewer frames within the carousel, as it’s unlikely users will engage with more than that.
- Have short and meaningful titles that describes the group of images.
- Always show controls.
- On the first slide you need to be able to navigate back with the backward button or automatically to the last image.
- On the last slide you need to be able to navigate back with the forward button automatically to the first image.
- Add only one image slider to one page.

## Don'ts

- It should not be used on the homepage’s hero section because it can severely hamper a visitor’s very first experience.
- It should not be used for showing content.
- It should not autoplay. The carousel can only play when the user clicks the play button because for people with vestibular disorders for whom animations can cause nausea, by thetime the pause button is located, the damage will have been done.
- Don’t use small texts on images. It’s difficult to read small text.
- It should not be used to display important information.

## References

https://webflow.com/blog/carousel-slider-design-best-practices
https://web.dev/carousel-best-practices/
https://www.nngroup.com/articles/designing-effective-carousels/
https://www.nngroup.com/articles/auto-forwarding/
https://inclusive-components.design/a-content-slider/
https://developer.semrush.com/intergalactic/components/carousel/
https://www.w3.org/WAI/tutorials/carousels/
