import { Meta, StoryObj } from '@storybook/react';
import mdx from './Colors.mdx';

const meta = {
  title: 'Den Haag/Colors',
  tags: ['autodocs', '!dev'],
  parameters: {
    chromatic: { disableSnapshot: true },
    docs: {
      page: mdx,
    },
  },
} as Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
