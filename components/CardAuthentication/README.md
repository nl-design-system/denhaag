<!-- @license CC0-1.0 -->

# Authentication block

[![npm version](https://img.shields.io/npm/v/@gemeente-denhaag/card-authentication.svg)](https://www.npmjs.com/package/@gemeente-denhaag/card-authentication)

This authentication block adequately sends the user an authentication flow necessary to perform a task or action on the website or when logging in. He stands out and offers help if needed. By making the choice between authentication service already on the detail page where the task is listed, you can reduce the number of clicks and place the choice more in the context of the task.

## When to use

Use the authentication block when users need to authenticate to perform a certain task or to log in. Think of logging in with DigiD to eventually fill in a form.

Also use it in combination with other login methods, when you don't necessarily have to log in. It sometimes happens that as a guest you have certain permissions to, for example, fill in a form. In this case you show the block with the option to continue.

## Alternatives and related components

Alternative components:

- When there is no authentication required: Generic action button
- When there is a reference to another page, without authentication: CTA Link
- When there is a link to another page that should be highlighted: Image content link

Related components:

- Buttons

## Anatomy

The authentication block consists of:

1. Title: To introduce the action
2. Paragraph (optional): To give more context to the action
3. Logo: Shows the different resources and creates trust with the user
4. Button: To link to the right page

- In only several cases there will be 2 buttons, but in preference there will be only 1 call to action.

5. Caption with link: offers help by linking to an external website
6. Container

## (Interactive) states

The authentication block itself does not have interactive states.
The buttons in this components have. Described in: Buttons

## Design properties

Typography

- Title: TheMix/xl/700
- Paragraph: TheSans/md/400
- Caption: TheSans/md/400

Colors

- Title: text color Grey/5
- Paragraph: text color Grey/4
- Caption with link: text color Grey/4
- Container: border line color Grey/2

Interactive states

- None.

Structure

Task variant

Desktop

- Paragraph: padding-bottom 16px
- Icon: size 56px, padding-left 16px
- Caption with link: padding-top 32px
- Container: padding 32px

Mobile

- Paragraph: padding-bottom 16px
- Icon: size 56px, padding-bottom 24px
- Caption with link: padding-top 24px
- Container: padding 24px

Login variant

Desktop

- Paragraph: padding-bottom 24px
- Icon: size 80px, padding-bottom 24px
- Caption with link: padding-top 32px
- Container: padding 32px

Mobile

- Paragraph: padding-bottom 16px
- Icon: size 56px, padding-left 16px
- Caption with link: padding-top 24px
- Container: padding 24px
