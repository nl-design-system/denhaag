import { Meta, StoryObj } from '@storybook/react';
import readme from '../../../../components/StatusBadge/README.md';
import { StatusBadge } from '@gemeente-denhaag/status-badge';

const exampleArgs = {
  children: 'Label',
  status: 'default',
};

const meta = {
  id: 'css-data-display-status-badge',
  title: 'CSS/Data Display/Status Badge',
  component: StatusBadge,
  args: exampleArgs,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof StatusBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Neutral: Story = {
  args: {
    status: 'neutral',
  },
};

export const Success: Story = {
  args: {
    status: 'success',
  },
};

export const Error: Story = {
  args: {
    status: 'error',
  },
};

export const Warning: Story = {
  args: {
    status: 'warning',
  },
};
