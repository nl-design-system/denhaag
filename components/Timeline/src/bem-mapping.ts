/**
 * This file overrides the default Material UI styling by mapping their style
 * _'keys'_ to ours using the `classes` attribute.
 *
 * Some components also use a `className` attribute. This is defined in the
 * component's typescript file.
 */

export const timelineClasses = {
  root: 'denhaag-timeline',
};

export const stepClasses = {
  root: 'denhaag-timeline__step',
  completed: 'denhaag-timeline__step--completed',
};

export const stepContentClass = 'denhaag-timeline__step-content';

export const stepIconClasses = {
  root: 'denhaag-timeline__step-icon',
  colorAction: 'denhaag-timeline__step-icon--active',
  colorSecondary: 'denhaag-timeline__step-icon--completed',
  colorPrimary: 'denhaag-timeline__step-icon--inactive',
  colorDisabled: 'denhaag-timeline__step-icon--disabled',
};

export const stepCollapseIconClasses = {
  root: 'denhaag-timeline__step-collapse-icon',
};
