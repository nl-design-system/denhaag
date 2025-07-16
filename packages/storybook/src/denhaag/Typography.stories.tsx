import React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';
import ReactMarkdown from 'react-markdown';
import readme from './Typography.md?raw';

const meta = {
  title: 'Den Haag/Typography',
  tags: ['autodocs', '!dev'],
  parameters: {
    chromatic: { disableSnapshot: true },
    docs: {
      page: () => <ReactMarkdown>{readme}</ReactMarkdown>,
    },
  },
} as Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
