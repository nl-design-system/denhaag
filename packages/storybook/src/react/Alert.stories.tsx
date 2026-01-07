import React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';
import { action } from 'storybook/actions';
import { Alert, AlertProps } from '@gemeente-denhaag/alert';
import { MegaphoneIcon } from '@gemeente-denhaag/icons';

import readme from '../../../../components/Alert/README.md?raw';
import { Paragraph } from '@gemeente-denhaag/paragraph';
import { getComponentDescription } from '../utils/getPackage';
import pkg from '../../../../components/Alert/package.json';

const exampleArgs: AlertProps = {
  title: 'Title',
  text: (
    <Paragraph>
      Here comes text. This text provides additional details and actionable steps the user can take.
    </Paragraph>
  ),
  variant: 'info',
};

const meta = {
  component: Alert,
  args: exampleArgs,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: getComponentDescription(pkg.name, pkg.version, readme),
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

export const TitleOnly: Story = {
  args: {
    ...Default.args,
    title: 'This is a very long title that should be truncated if it exceeds the maximum width of the alert component',
    text: undefined,
  },
};
