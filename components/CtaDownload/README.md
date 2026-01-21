<!-- @license CC0-1.0 -->

# Call To Action Download

[![npm version](https://img.shields.io/npm/v/@gemeente-denhaag/cta-download.svg)](https://www.npmjs.com/package/@gemeente-denhaag/cta-download)

A download displays a link to download an attachment and metadata about the file. The metadata shows users how big the file is so they can decide if they want to download it.

## When to use

Use a download when there are attachments that can be downloaded such as a document.

## Alternatives and related components

None.

## Anatomy

The download consists of:

- Support icon: shows a download icon;
- Header link: shows the name of the file;
- Metadata: shows the extension and the size of the file;
- Container;

## (Interactive) states

The download contains the states normal, hover and focus.

## Design properties

### Typography

- Header link: TheSans/lg/700;
- Metadata: TheSans/lg/400;

### Colors

- Supportive icon: background-color Blue/3, icon svg color white;
- Header link: text color Blue/3;
- Metadata: text color Grey/4;
- Container: border-top and border-bottom line color Grey/2;

### Interactive states

#### Hover

- header link text color Blue/4;
- supportive icon background-color Blue/4;

#### Focus

- header link text color Blue/4;
- supportive icon background-color Blue/4;
- container border color Ocher/5

### Structure

- Supportive icon: background circle size 64px, icon size 24px, padding-left 16px, padding-right 24px;
- Header link: padding-bottom 4px;
- Header link and metadata: padding-right 16px;
- Container: padding-top and padding-bottom 24px, border-width 1px;

## Accessibility

[technical requirements]

## Content guidelines

### Heading link

The heading link should:

- Describe in a few words what the file is about;
- Not use the hyphen when breaking the text. Let the text continue on the next line.;

### Metadata

- The metadata should:
- Show the abbreviation of the file type (e.g. PDF, JPG, DOC)

## Best practices

### Do's

Downloads should:

- Be used for all downloads;
- Describe what the file is;
- Include file type and size. Showing the file size is particularly nice for users that are on reduced data allowences (i.e. mobile), and also offers an indication on how long a file might take to download;
- Show the size in kB’s when it’s <1000 kB and in MB’s when it’s >999 kB;
- Show 1 decimal after the decimal point of the size;
- Download the file on the used device;
- Be grouped under each other when there is more than 1 download;
- Be placed under or between a text (usually in a list);
- Be full width (100%);

### Don'ts

Download should:

- Not be described as a file;
- Not open the file in another tab;

## References

- [Figma Design](https://www.figma.com/file/JpoY3waVoQGlLQzQXTL9nn/Design-System---Gemeente-Den-Haag?node-id=8141%3A24964)
- https://ons-design-system.netlify.app/components/downloads/
- https://britishgas.design/docs/components/ns-download
