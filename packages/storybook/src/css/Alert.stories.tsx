import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Alert, AlertProps } from '@gemeente-denhaag/alert';
import { MegaphoneIcon } from '@gemeente-denhaag/icons';

import readme from '../../../../components/Alert/README.md?raw';

const exampleArgs: AlertProps = {
  title: 'Title',
  text: 'Here comes text. This text provides additional details and actionable steps the user can take.',
  variant: 'info',
};

const meta = {
  id: 'css-data-display-alert',
  title: 'CSS/Data Display/Alert',
  component: Alert,
  args: exampleArgs,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Success: Story = {
  args: { ...Default.args, variant: 'success' },
};

export const Warning: Story = {
  args: { ...Default.args, variant: 'warning' },
};

export const Error: Story = {
  args: { ...Default.args, variant: 'error' },
};

export const WithAction: Story = {
  args: {
    ...Default.args,
    action: {
      buttonText: 'Action',
      onClick: action('Action clicked'),
    },
  },
};

export const WithClose: Story = {
  args: {
    ...Default.args,
    close: action('Close clicked'),
  },
};

export const WithActionAndClose: Story = {
  args: {
    ...Default.args,
    action: { buttonText: 'Action', onClick: action('Action clicked') },
    close: action('Close clicked'),
  },
};

export const WithCustomIcon: Story = {
  args: {
    ...Default.args,
    supportIcon: <MegaphoneIcon />,
  },
};
