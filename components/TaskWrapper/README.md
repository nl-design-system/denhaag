<!-- @license CC0-1.0 -->

# Task Wrapper

[//]: # (ToDo: get correct links when component is published)
[//]: # ([![npm version]&#40;https://img.shields.io/npm/v/@gemeente-denhaag/...&#41;]&#40;https://www.npmjs.com/package/@gemeente-denhaag/...&#41;)

Task Wrapper is used as a navigation link to multiple other (detail) pages. Or it can be just a wrapper with no links at all.

## Structure

* a Heading with configurable heading-levels, that can also be a link,
* a higher 'category' pre-heading that can be placed visually above the Heading but in HTML should be below it, for correct screen-reading order (visually reverse with CSS), together inside a Heading-Group,
* an optional 'status label' (Data Badge) that can be placed below the Heading,
* the wrapper has a border (make invisible with design-token),
* the wrapper body has no (or optional) padding and has a slot that can contain other components (a task or action for example)
* in a project: if there is no data for the tasks inside the body slot, it should show a text (for example "Geen openstaande taken, spreek met uw begeleider nieuwe taken af.").
* in a project: if there is no data at all, show the empty state to the user in an informative way (for example show the text "Geen openstaande doelen. Spreek met uw coach nieuwe doelen af.").

## References

https://github.com/orgs/nl-design-system/discussions/445

https://github.com/orgs/nl-design-system/discussions/422
