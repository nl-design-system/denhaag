import { Meta, StoryObj } from '@storybook/react-vite';
import md from '../../../../LICENSE.md?raw';
import ReactMarkdown from 'react-markdown';
import React from 'react';

const meta = {
  title: 'Den Haag/License',
  tags: ['autodocs', '!dev'],
  parameters: {
    chromatic: { disableSnapshot: true },
    docs: {
      page: () => <ReactMarkdown>{md}</ReactMarkdown>,
    },
  },
} as Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
