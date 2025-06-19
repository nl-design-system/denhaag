import { Meta, StoryObj } from '@storybook/react';
import { NumberBadge } from '@gemeente-denhaag/number-badge';
import readme from '../../../../components/NumberBadge/README.md?raw';

type Story = StoryObj<typeof meta>;

const meta: Meta<typeof NumberBadge> = {
  component: NumberBadge,
  tags: ['autodocs'],
  argTypes: {
    children: {
      type: 'string',
      control: {
        type: 'text',
      },
    },
    value: {
      type: 'string',
      control: {
        type: 'text',
      },
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

export const Default: Story = {
  args: {
    children: '13',
    value: '13',
  },
};
