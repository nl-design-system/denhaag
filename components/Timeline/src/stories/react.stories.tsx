import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { Button } from '@gemeente-denhaag/button';
import Timeline, { TimelineProps, TimelineStep } from '../index';
import pkg from '../../package.json';

export default {
  title: 'React/Navigation/Timeline',
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`,
    docs: {
      source: {
        type: 'code',
      },
    },
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
  component: Timeline,
} as Meta;

const Template: Story<TimelineProps> = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = React.useState<{ [k: number]: boolean }>({});
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
    setActiveStep((prevActiveStep) => {
      let nextActiveStep = prevActiveStep - 1;
      if (steps[nextActiveStep].disabled) {
        nextActiveStep -= 1;
      }

      const newCompleted = completed;
      newCompleted[nextActiveStep] = false;
      setCompleted(newCompleted);

      return nextActiveStep;
    });
  };

  const next = () => {
    setActiveStep((prevActiveStep) => {
      let nextActiveStep = prevActiveStep + 1;

      if (nextActiveStep < steps.length && steps[nextActiveStep].disabled) {
        nextActiveStep += 1;
      }

      const newCompleted = completed;
      newCompleted[prevActiveStep] = true;
      setCompleted(newCompleted);

      return nextActiveStep;
    });
  };

  return (
    <React.Fragment>
      <Timeline activeStep={activeStep}>
        {steps.map(({ label, ...props }, index) => (
          <TimelineStep key={label} label={label} {...props} completed={completed[index]} />
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
export const Default: Story<TimelineProps> = Template.bind({});
Default.parameters = {
  controls: { exclude: ['activeStep', 'children', 'classes'] },
};
