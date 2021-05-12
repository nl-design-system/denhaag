import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Step, StepProps } from '..';
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
  <Step
    label="First Step in a Stepper!"
    description="This is the first Step component of many in a Stepper component."
    {...props}
  ></Step>
);

/**
 * Implementation of Step
 */
export const Default = Template.bind({});
Default.args = {
  active: true,
  completed: true,
};
