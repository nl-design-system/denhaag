import { Meta, StoryObj } from '@storybook/react';
import mdx from './ReleaseStrategy.mdx';

const meta = {
  title: 'Den Haag/Release strategy',
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
