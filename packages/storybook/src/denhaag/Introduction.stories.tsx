import { Meta, StoryObj } from '@storybook/react-vite';
import md from './Introduction.mdx';

const meta = {
  title: 'Den Haag/Introduction',
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
