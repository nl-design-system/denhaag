import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { Button } from '@gemeente-denhaag/button';
import Timeline, { Step, TimelineProps } from '..';
import pkg from '../../package.json';

export default {
  title: 'Components/navigation/Timeline',
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`,
    docs: {
      source: {
        type: 'code',
      },
    },
  },
  component: Timeline,
} as Meta;

const Template: Story<TimelineProps> = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    {
      label: 'First Step in a Timeline!',
      description: 'This is the first Step component of many in a Timeline component.',
    },
    {
      label: 'Second Step in a Timeline!',
    },
    {
      label: 'Third Step in a Timeline!',
      disabled: true,
    },
    {
      label: 'Fourth Step in a Timeline!',
      description: 'This is the fourth Step component of many in a Timeline component.',
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
      <Timeline activeStep={activeStep}>
        {steps.map(({ label, ...props }) => (
          <Step key={label} label={label} {...props} />
        ))}
      </Timeline>
      <Button onClick={prev} disabled={activeStep === 0} variant="secondary-action">
        Prev
      </Button>
      <Button onClick={next} disabled={activeStep === steps.length} variant="primary-action">
        Next
      </Button>
    </React.Fragment>
  );
};

/**
 * Implementation of Timeline
 * "activeStep" property set to enforce step visibility.
 */
export const Default = Template.bind({});
Default.parameters = {
  controls: { exclude: ['activeStep', 'children', 'classes'] },
};
