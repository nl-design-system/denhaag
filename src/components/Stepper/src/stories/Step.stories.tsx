import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Step, StepProps, StepLabel, StepContent } from '..';
import pkg from '../../package.json';

export default {
  title: 'Components/navigation/Stepper/Step',
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`,
    docs: {
      source: {
        type: 'dynamic',
      },
    },
  },
  component: Step,
} as Meta;

const Template: Story<StepProps> = (props: StepProps) => (
  <Step {...props}>
    <StepLabel>
      <p>First Step in a Stepper!</p>
    </StepLabel>
    <StepContent>
      <p>This is the first Step component of many in a Stepper component.</p>
    </StepContent>
  </Step>
);

/**
 * Implementation of Step
 */
export const Default = Template.bind({});
Default.args = {
  active: true,
  completed: true,
};

// /**
//  * Implementation of Stepper with a vertical orientation.
//  */
// export const VerticalOrientation = Template.bind({});
// VerticalOrientation.args = {
//   activeStep: 0,
//   orientation: 'vertical',
// };

// /**
//  * Alternatively labeled Stepper.
//  */
// export const AlternativeLabel = Template.bind({});
// AlternativeLabel.args = {
//   activeStep: 0,
//   alternativeLabel: true,
// };
