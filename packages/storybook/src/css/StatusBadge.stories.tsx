import { Meta, StoryObj } from '@storybook/react';
import readme from '../../../../components/StatusBadge/README.md';
import { StatusBadge } from '@utrecht/component-library-react';

const exampleArgs = {
  children: 'Label',
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

export const Informative: Story = {
  args: {
    status: 'informative',
  },
};

export const Positive: Story = {
  args: {
    status: 'positive',
  },
};

export const Negative: Story = {
  args: {
    status: 'negative',
  },
};

export const Warning: Story = {
  args: {
    status: 'warning',
  },
};
