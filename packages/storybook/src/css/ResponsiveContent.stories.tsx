import React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';
import '@gemeente-denhaag/responsive-content';

const meta = {
  tags: ['autodocs'],
} as Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <div className="denhaag-responsive-content">Content Area</div>,
};
