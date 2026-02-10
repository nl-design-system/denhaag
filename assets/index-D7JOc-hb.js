import"./index-E30JJ_H4.js";const i=`<!-- @license CC0-1.0 -->

# Ordered List element

[![npm version](https://img.shields.io/npm/v/@gemeente-denhaag/orderedlist.svg)](https://www.npmjs.com/package/@gemeente-denhaag/orderedlist)

Lists are vertical groupings of related content. List items begin with either a number or a bullet.

## When to use

Use lists when you need to group content together.
Use bulleted lists when you don’t need to convey a specific order for list items.
Use numbered lists when you need to convey a priority, hierarchy, or sequence between list items.

## Alternatives and related components

- Use cards if more than three lines of text need to be shown in list tiles
- Use tables for more complex sets of data

## Anatomy

The list consists of:

- Marker: a dot or a number in front of the list item
- Label: the name of the list item

## Design properties

**Typography**

- Label: TheSans/md/400

**Colors**

- Marker: Grey/4
- Label: text color Grey/4

**Structure**

- Marker: dot size 5px, padding-right 8px
- Label: padding-left 8px
- Nested list item: padding-left 16px
- Nested label: padding-left 8px

## Accessibility

[technical accessibility requirements]

## List variants

**Unordered lists**
To present content of equal status or value.

**Ordered lists**
Imply sequence and order, and are commonly used when giving a set of instructions.

## Content guidelines

**List items**
Every item in a list should:

- Start with a capital letter
- Not use commas or semicolons at the end of each line
- Be written in sentence case

**Length**
Generally, lists should be used to present simple pieces of information. For more complex sets of data, consider using a data table.

**Order**
Arrange list items in a logical way. For example, if the list is about resource use, the default order might be highest resource use to lowest. Grouping items in categories into smaller, more specific lists might be more meaningful in some contexts.

**Text**
Use list items that are grammatically parallel. For example, do not mix passive voice with active voice or declarative sentences (statements) with imperative sentences (direct command).

## Best practices

### Do's

Lists should:

- Break up chunks of related content to make the information easier for merchants to scan
- Be phrased consistently (try to start each item with a noun or a verb and be consistent with each item)

### Don'ts

Lists should:

- Not be used for lists where the entire item represents an action

## References

- https://www.carbondesignsystem.com/components/list/usage
- https://polaris.shopify.com/components/lists-and-tables/list#navigation
`;var t=".utrecht-ordered-list,.utrecht-ordered-list--html-content ol{box-sizing:border-box;font-family:var(--utrecht-document-font-family,inherit);font-size:var(--utrecht-ordered-list-font-size,var(--utrecht-unordered-list-font-size,var(--utrecht-document-font-size,inherit)));line-height:var(--utrecht-ordered-list-line-height,var(--utrecht-unordered-list-line-height,var(--utrecht-document-line-height,inherit)));list-style-type:decimal;margin-block-end:calc(var(--utrecht-space-around, 0)*var(--utrecht-ordered-list-margin-block-end, var(--utrecht-unordered-list-margin-block-end, 0)));margin-block-start:calc(var(--utrecht-space-around, 0)*var(--utrecht-ordered-list-margin-block-start, var(--utrecht-unordered-list-margin-block-start, 0)));padding-inline-start:var(--utrecht-ordered-list-padding-inline-start,var(--utrecht-unordered-list-padding-inline-start,2ch));text-align:start}.utrecht-ordered-list--center{inline-size:max-content;margin-inline-end:auto;margin-inline-start:auto;max-inline-size:100%}.utrecht-ordered-list--distanced{--utrecht-space-around:1}.utrecht-ordered-list--arabic{list-style:arabic-indic}.utrecht-ordered-list--html-content ol>li,.utrecht-ordered-list--html-content>li,.utrecht-ordered-list__item{margin-block-end:var(--utrecht-ordered-list-item-margin-block-end,var(--utrecht-unordered-list-item-margin-block-end));margin-block-start:var(--utrecht-ordered-list-item-margin-block-start,var(--utrecht-unordered-list-item-margin-block-start));padding-inline-start:var(--utrecht-ordered-list-item-padding-inline-start,var(--utrecht-unordered-list-item-padding-inline-start,1ch))}";if(typeof document<"u"){const n=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style");e.type="text/css",e.nonce=window.NONCE,n.appendChild(e),e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}export{i as r};
