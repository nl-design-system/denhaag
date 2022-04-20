import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ProcessSteps, ProcessStepsProps } from '../index';
import pkg from '../../package.json';

export default {
  title: 'React/Navigation/Timeline Substatus',
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
  component: ProcessSteps,
} as Meta;

const Template: Story<ProcessStepsProps> = () => {
  return (
    <React.Fragment>
      <ProcessSteps></ProcessSteps>
    </React.Fragment>
  );
};

/**
 * Implementation of Timeline
 * "activeStep" property set to enforce step visibility.
 */
export const Default: Story<ProcessStepsProps> = Template.bind({});
