import { Meta, StoryObj } from '@storybook/react';
import mdx from './Introduction.mdx';

const meta = {
  title: 'Den Haag/Introduction',
  tags: ['autodocs', '!dev'],
  parameters: {
    docs: {
      page: mdx,
    },
  },
} as Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
