<!-- @license CC0-1.0 -->

# Modal

Modals are overlays that prevent users from interacting with the rest of the application until a specific action is taken.

## When to use

Use a modal to request information that is preventing the system from continuing a user-initiated process. It can also be used to notify the user of urgent information concerning their current work. Modal dialogs are commonly used to report system errors or convey a consequence of a user’s action. Finally, it can be used to confirm user decisions. Clearly describe the action being confirmed and explain any potential consequences that it may cause. Both the title and the button should reflect the action that will occur.

## Alternatives and related components

- Use an accordion to present large amounts of additional information or actions that don’t require confirmation
- Use a banner to communicate a change or condition that needs the users attention within the context of a page

## Anatomy

The modal consists of:

1. Title: gives users a quick overview of the modal.
2. Close icon: closes the modal.
3. Text: contains the information needed to complete the modal’s task. It can include message text and components.
4. Buttons (optional): button that allows users to perform an action or close the modal.
5. Overlay: screen overlay that obscures the on-page content.

## (Interactive) states

None.

## Design properties

### Typography

- Title: TheMix/xl/700
- Text: TheSans/md/400

### Colors

- Title: text color Blue/3
- Close icon: svg color Grey/4
- Text: text color Grey/4
- Overlay: background-color white

### Button

The buttons text only, medium primary and secundary are used.

### Structure

- Title: padding-top and padding-left 32px, margin-bottom 16px
- Close icon: height and width 24px, padding-right 32px
- Text: padding-left and padding-right 32px, margin-bottom 48px
- Buttons: padding-right and padding-bottom 32px, padding space between buttons 16px

## Accessibility

[technical accessibility requirements]

### Error alerts in forms

#### Error alerts

If users submit long or complex forms with errors, use an error alert to summarize what went wrong. Place the alert at the top of the form and move the focus to the banner when the form is submitted. This will allow all users to scroll through the form in a logical order to resolve the issues.

#### Inline errors

Always include inline error messages for specific form fields so that users know what to do in context while correcting their errors.

## Content guidelines

### Title

Modal titles should:

- Use a clear {verb}+{noun} question or statement.

### Body content

Body content should be:

- Actionable: start sentences with imperative verbs when telling an user what actions are available to them (especially something new). Don’t use permissive language like "you can".

- Structured for users success: always put the most critical information first.
- Clear: use the verb “need” to help users understand when they’re required to do something.

### Primary and secondary actions

Actions should be:

- Clear and predictable: users should be able to anticipate what will happen when they click a button. Never deceive a user by mislabeling an action.
- Action-led: actions should always lead with a strong verb that encourages action. To provide enough context to users use the {verb}+{noun} format on actions except in the case of common actions like Save, Close, Cancel, or OK.
- Scannable: avoid unnecessary words and articles such as the, an, or a.

## Best practices

### Dos

Use modals when users must complete an action before they can continue with the main workflow. Avoid using modals to display complex forms or large amounts of information.

Modals should:

- Require that users take an action.
- Close when users press the X button, the Cancel button, or the ESC key, not when users click or tap the area outside the modal.
- Be used very sparingly.
- Be used for important warnings, as a way to prevent or correct critical errors.
- Be used to request the user to enter information critical to continuing the current process.
- Notify the user after the action that has been taken.

### Don’ts

Modals should:

- Not be used for nonessential information that is not related to the current user flow.
- Not have more than two buttons (primary and secondary) at the bottom. This prevents unclear action hierarchy and crowding on mobile screens. Since modals are for focused tasks, they should have focused actions.
- Not be closable when the users click or tap the area outside the modal.
- Not include multiple steps.
- Not cram in too much.
- Not include important information.
- Not open suddenly. A modal should always open upon the user doing (or did) something.

## Javascript

Import the `@gemeente-denhaag/modal/src/modal.js` javascript file to you site to allow the modals to work.

See the example below:

```javascript
import ModalScripts from "@gemeente-denhaag/modal/src/modal";
window.addEventListener("DOMContentLoaded", () => new ModalScripts());
```

## References

[Figma Design](https://www.figma.com/file/JpoY3waVoQGlLQzQXTL9nn/Design-System---Gemeente-Den-Haag?node-id=0%3A1)
[http://www.uxforthemasses.com/overlays/](http://www.uxforthemasses.com/overlays/)
[https://www.nngroup.com/articles/modal-nonmodal-dialog/](https://www.nngroup.com/articles/modal-nonmodal-dialog/)
