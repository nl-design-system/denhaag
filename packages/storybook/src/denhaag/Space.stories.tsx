import { Meta, StoryObj } from '@storybook/react-vite';
import mdx from './Space.mdx';

const meta = {
  title: 'Den Haag/Space',
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
