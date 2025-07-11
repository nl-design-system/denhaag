import { Meta, StoryObj } from '@storybook/react';
import md from '../../../../LICENSE.md?raw';

const meta = {
  title: 'Den Haag/License',
  tags: ['autodocs', '!dev'],
  parameters: {
    chromatic: { disableSnapshot: true },
    docs: {
      page: md,
    },
  },
} as Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
