import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ActionSingle } from '@gemeente-denhaag/action';

import readme from '../../../../components/Action/README.md';

const labels = {
  today: 'vandaag',
  yesterday: 'gisteren',
  before: 'vóór',
  approachingDeadline: (daysDifference: number) => {
    if (daysDifference === 1) {
      return `nog ${daysDifference} dag`;
    }
    return `nog ${daysDifference} dagen`;
  },
};

const exampleArgs = {
  children: <strong>Taak</strong>,
  link: '#example',
  labels,
};

const meta = {
  id: 'react-actions-action',
  title: 'React/Actions/Action',
  component: ActionSingle,
  args: exampleArgs,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof ActionSingle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Hover: Story = {
  args: { ...Default.args, className: 'denhaag-action--hover' },
};

export const Focus: Story = {
  args: { ...Default.args, className: 'denhaag-action--focus' },
};

export const WithDate: Story = {
  args: { ...Default.args, dateTime: '2023-09-28T19:47:36.593Z' },
};

export const WithDateRelative: Story = {
  args: { ...Default.args, dateTime: '2023-10-02T19:47:36.593Z', now: '2023-09-28T19:47:36.593Z', relativeDate: true },
};

export const WithDateWarning: Story = {
  args: { ...Default.args, dateTime: '2023-09-30T19:47:36.593Z', now: '2023-09-28T19:47:36.593Z', relativeDate: true },
};
