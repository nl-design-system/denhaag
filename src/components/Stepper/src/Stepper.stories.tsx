import React from "react";
import { Meta, Story } from "@storybook/react";
import Stepper, { Step, StepLabel, StepContent, StepperProps } from ".";
import pkg from "../package.json";

export default {
  title: 'Components/navigation/Stepper',
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`,
    docs: {
      source: {
        type: 'dynamic',
      },
    },
  },
  component: Stepper,
} as Meta;

const Template: Story<StepperProps> = (args: StepperProps) => (
  <div>
    <Stepper {...args}>
      <Step>
        <StepLabel>
          <p>First Step in a Stepper!</p>
        </StepLabel>
        <StepContent>
          <p>This is the first Step component of many in a Stepper component.</p>
        </StepContent>
      </Step>
      <Step>
        <StepLabel>
          <p>Second Step in a Stepper!</p>
        </StepLabel>
        <StepContent>
          <p>This is the second Step component of many in a Stepper component.</p>
        </StepContent>
      </Step>
      <Step>
        <StepLabel>
          <p>Third Step in a Stepper!</p>
        </StepLabel>
        <StepContent>
          <p>This is the third Step component of many in a Stepper component.</p>
        </StepContent>
      </Step>
    </Stepper>
  </div>
);

/**
 * Implementation of Stepper
 * "activeStep" property set to enforce step visibility.
 */
export const Default = Template.bind({});
Default.args = {
  activeStep: 0,
};

/**
 * Implementation of Stepper with a vertical orientation.
 */
export const VerticalOrientation = Template.bind({});
VerticalOrientation.args = {
  activeStep: 0,
  orientation: 'vertical',
};

/**
 * Alternatively labeled Stepper.
 */
export const AlternativeLabel = Template.bind({});
AlternativeLabel.args = {
  activeStep: 0,
  alternativeLabel: true,
};
