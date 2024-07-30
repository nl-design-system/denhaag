import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import '@gemeente-denhaag/page';

const meta = {
  title: 'CSS/Page Elements/Page',
} as Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="denhaag-page">
      <div className="denhaag-page-header">Header area</div>
      <div className="denhaag-page-content">
        <main className="denhaag-page-content__main">Content area</main>
      </div>
    </div>
  ),
};
