import { Meta, StoryObj } from '@storybook/react';
import { DataBadge } from '@gemeente-denhaag/data-badge';
import readme from '../../../../components/Paragraph/README.md?raw';

type Story = StoryObj<typeof meta>;

const exampleArgs = {
  children: 'Label',
  value: 'value',
};

const meta: Meta<typeof DataBadge> = {
  component: DataBadge,
  tags: ['autodocs'],
  args: exampleArgs,
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
};

export default meta;

export const Default: Story = {};
