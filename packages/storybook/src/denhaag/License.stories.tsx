import { Meta, StoryObj } from '@storybook/react-vite';
import mdx from '../../../../LICENSE.md?raw';

const meta = {
  title: 'Den Haag/License',
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
