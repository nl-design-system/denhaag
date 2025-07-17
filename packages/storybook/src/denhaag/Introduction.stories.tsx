import { Meta, StoryObj } from '@storybook/react-vite';
import mdx from './Introduction.mdx';

const meta = {
  title: 'Den Haag/Introduction',
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
