<!-- @license CC0-1.0 -->

# File

[![npm version](https://img.shields.io/npm/v/@gemeente-denhaag/file.svg)](https://www.npmjs.com/package/@gemeente-denhaag/file)

A file displays a link to download an attachment and shows metadata about the file.

## When to use

A file is used to present and download a file that is uploaded by the user or an employee.

## Alternatives and related components

None.

## Anatomy

The file consists of:

1. File name: the name of the file
2. Preview: shows an icon of the type of the file (e.g. document, image)
3. Navigational link: shows the download option
4. Container

## (Interactive) states

The file contains the states normal, hover and focus.

## Design properties

### Typography

- File name: TheSans/md/400

### Color

- File name: text color Grey/4
- Preview: icon svg color Grey/4, border color Grey/2
- Container: border color Grey/2

### Interactive states

- Hover: title text color Blue/3, icon svg color Blue/3, container background-color warm/grey
- Focus: title text color Grey/4, icon svg color Grey/4, container border color Ocher/5

### Structure

- File name: padding-left and padding-right 16px
- Preview: icon size 24px, icon padding 16px
- Navigational link: padding-left and padding-right 16px
- Container: min-height 56px, padding-top and padding-bottom 16px, margin-bottom 16px, border 1px

#### Mobile

- File name: padding-bottom 8px, padding-left and padding-right 16px
- Navigational link: padding-left 16px
- Preview: icon size 24px, icon padding-left and padding-right 16px
- Container: padding-top and padding-bottom 12px

## Accessibility

In order to comply with accessibility standards you should not force a file to open in a new tab. It must be left up to the user to decide whether to download a file, or open in a new tab.

The one exception to this rule is in forms as there are often challenges around caching user data. When ns-download is used within ns-form; if the browser can display the file type it will open in a new tab.

## Content guidelines

None.

## Best practices

### Dos

Files download should:

- Be used for all downloads.
- Include file size and type. Showing the file size is particularly nice for users that are on reduced data allowences (i.e. mobile), and also offers an indication on how long a file might take to download.

### Don’ts

Files download should:

- Not be described as a file.

## References

[https://ons-design-system.netlify.app/components/downloads/](https://ons-design-system.netlify.app/components/downloads/)
