import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Button, StatusButton, LoadingState } from '@gemeente-denhaag/button';
import { ArrowLeftIcon, ArrowRightIcon } from '@gemeente-denhaag/icons';

import readme from '../../../../components/Button/README.md?raw';
import { StarterIcon } from '@gemeente-denhaag/icons';

const exampleArgs = {
  children: 'Button',
};

const meta = {
  id: 'react-input-button',
  title: 'React/Input/Button',
  component: Button,
  args: exampleArgs,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Secondary: Story = {
  args: { ...Default.args, variant: 'secondary-action' },
};

export const IconLeft: Story = {
  args: { ...Default.args, icon: <ArrowLeftIcon /> },
};

export const IconRight: Story = {
  args: { ...Default.args, icon: <ArrowRightIcon />, iconAlign: 'end' },
};

export const Large: Story = {
  args: { ...Default.args, size: 'large' },
};

export const Disabled: Story = {
  args: { ...Default.args, disabled: true },
};

export const LoadingAnimation: Story = {
  render: () => {
    const [state, setState] = useState<LoadingState>('default');

    const handleClick = () => {
      setState('loading');

      setTimeout(() => {
        setState('default');
      }, 4000);
    };

    return (
      <StatusButton currentState={state} onClick={handleClick} icon={<StarterIcon />}>
        Button
      </StatusButton>
    );
  },
};

export const LoadingAnimationWithSuccess: Story = {
  render: () => {
    const [state, setState] = useState<LoadingState>('default');

    const handleClick = () => {
      setState('loading');

      setTimeout(() => {
        setState('success');
      }, 4000);
    };

    return (
      <StatusButton currentState={state} onClick={handleClick} icon={<StarterIcon />}>
        Button
      </StatusButton>
    );
  },
};

export const LoadingAnimationWithError: Story = {
  render: () => {
    const [state, setState] = useState<LoadingState>('default');

    const handleClick = () => {
      setState('loading');

      setTimeout(() => {
        setState('error');
      }, 4000);
    };

    return (
      <StatusButton currentState={state} onClick={handleClick} icon={<StarterIcon />}>
        Button
      </StatusButton>
    );
  },
};
