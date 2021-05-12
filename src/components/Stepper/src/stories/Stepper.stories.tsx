import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { Button } from '@gemeente-denhaag/button';
import Stepper, { Step, StepperProps } from '..';
import pkg from '../../package.json';

export default {
  title: 'Components/navigation/Stepper/Stepper',
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`,
    docs: {
      source: {
        type: 'code',
      },
    },
  },
  component: Stepper,
} as Meta;

const Template: Story<StepperProps> = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    {
      label: 'First Step in a Stepper!',
      description: 'This is the first Step component of many in a Stepper component.',
    },
    {
      label: 'Second Step in a Stepper!',
    },
    {
      label: 'Third Step in a Stepper!',
      description: 'This is the third Step component of many in a Stepper component.',
    },
  ];

  const prev = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const next = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  return (
    <React.Fragment>
      <Stepper activeStep={activeStep}>
        {steps.map(({ label, description }) => (
          <Step key={label} label={label} description={description} />
        ))}
      </Stepper>
      <Button onClick={prev} disabled={activeStep === 0}>
        Prev
      </Button>
      <Button onClick={next} disabled={activeStep === steps.length} color="primary">
        Next
      </Button>
    </React.Fragment>
  );
};

/**
 * Implementation of Stepper
 * "activeStep" property set to enforce step visibility.
 */
export const Default = Template.bind({});

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
