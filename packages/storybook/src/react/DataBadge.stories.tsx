import { Meta, StoryObj } from '@storybook/react';
import { DataBadge } from '@gemeente-denhaag/data-badge';
import readme from '../../../../components/DataBadge/README.md?raw';

type Story = StoryObj<typeof meta>;

const meta = {
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
    status: {
      type: 'string',
      options: [undefined, 'neutral', 'success', 'warning', 'error'],
      control: {
        type: 'select',
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
} satisfies Meta<typeof DataBadge>;

export default meta;

export const Default: Story = {
  args: {
    children: 'Label',
  },
};

export const Value: Story = {
  args: {
    ...Default.args,
    value: 'value',
  },
};

export const DateTime: Story = {
  args: {
    ...Default.args,
    dateTime: '2023-10-01',
  },
};

export const Neutral: Story = {
  args: {
    ...Default.args,
    status: 'neutral',
  },
};

export const Success: Story = {
  args: {
    ...Default.args,
    status: 'success',
  },
};

export const Warning: Story = {
  args: {
    ...Default.args,
    status: 'warning',
  },
};

export const Error: Story = {
  args: {
    ...Default.args,
    status: 'error',
  },
};
