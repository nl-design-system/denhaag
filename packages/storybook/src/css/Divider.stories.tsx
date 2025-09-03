import React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';
import { Divider } from '@gemeente-denhaag/divider';
import readme from '../../../../components/Divider/README.md?raw';

const exampleArgs = {};

const meta = {
  id: 'css-data-display-divider',
  title: 'CSS/Divider',
  component: Divider,
  args: exampleArgs,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div>
      <p>I am above the divider.</p>
      <Divider {...args} />
      <p>I am below the divider.</p>
    </div>
  ),
};

export const Vertical: Story = {
  args: { ...Default.args, orientation: 'vertical' },
  render: (args) => (
    <div style={{ display: 'flex' }}>
      <p>I am on the left side of the divider.</p>
      <Divider {...args} />
      <p>I am on the right side of the divider.</p>
    </div>
  ),
};

export const Images: Story = {
  args: { ...Default.args, orientation: 'vertical' },
  render: (args) => (
    <div style={{ display: 'flex' }}>
      <img
        alt="The Lagoon Nebula."
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Lagoon_Nebula.jpg/1024px-Lagoon_Nebula.jpg"
        width="500"
        height="250"
      />
      <Divider {...args} />
      <img
        alt="Four cassette tapes"
        src="https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/Demos.jpg/1200px-Demos.jpg"
        width="500"
        height="250"
      />
    </div>
  ),
};
