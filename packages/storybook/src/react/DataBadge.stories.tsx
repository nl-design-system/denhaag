import { Meta, StoryObj } from '@storybook/react';
import { DataBadge } from '@gemeente-denhaag/data-badge';
import readme from '../../../../components/DataBadge/README.md?raw';

type Story = StoryObj<typeof meta>;

const meta: Meta<typeof DataBadge> = {
  component: DataBadge,
  tags: ['autodocs'],
  argTypes: {
    value: {
      type: 'string',
      control: {
        type: 'text',
      },
    },
    dateTime: {
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
    children: 'Label',
    value: undefined,
    dateTime: undefined,
  },
};
