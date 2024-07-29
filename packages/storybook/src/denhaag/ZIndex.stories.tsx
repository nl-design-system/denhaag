import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import ReactMarkdown from 'react-markdown';
import readme from './ZIndex.md?raw';

const meta = {
  title: 'Den Haag/Z-Index',
  tags: ['autodocs', '!dev'],
  parameters: {
    docs: {
      page: () => <ReactMarkdown>{readme}</ReactMarkdown>,
    },
  },
} as Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
