import { Meta, StoryObj } from '@storybook/react-vite';
import { TaskWrapper } from '../../../../components/TaskWrapper/src/TaskWrapper';
import readme from '../../../../components/TaskWrapper/README.md?raw';
import React from 'react';

type Story = StoryObj<typeof meta>;

const meta: Meta<typeof TaskWrapper> = {
  component: TaskWrapper,
  tags: ['autodocs'],
  argTypes: {
    preHeading: {
      type: 'string',
    },
    title: {
      type: 'string',
    },
    headingLevel: {
      type: 'number',
      options: [2, 3, 4, 5, 6],
      control: {
        type: 'select',
      },
    },
    href: {
      type: 'string',
    },
    description: {
      type: 'string',
    },
  },
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
};

export default meta;

const decorators: typeof meta.decorators = [
  (Story) => (
    <div style={{ maxWidth: '360px' }}>
      <Story />
    </div>
  ),
];

export const Default: Story = {
  args: {
    preHeading: 'Doel',
    title: 'Titel van doel 1',
    headingLevel: 2,
    href: '#',
  },
  decorators,
};
