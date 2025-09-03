import { Meta, StoryObj } from '@storybook/react-vite';
import { Pagination } from '@gemeente-denhaag/pagination';

import readme from '../../../../components/Pagination/README.md?raw';

const exampleArgs = {
  indexLimit: 0,
};

const meta = {
  id: 'css-navigation-pagination',
  title: 'CSS/Pagination',
  component: Pagination,
  args: exampleArgs,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    index: 2,
    indexLimit: 4,
  },
};

export const Disabled: Story = {
  args: {
    index: 0,
    indexLimit: 2,
  },
};

export const FourItems: Story = {
  args: {
    index: 21,
    indexLimit: 23,
  },
};

export const FiveItems: Story = {
  args: {
    index: 51,
    indexLimit: 99,
  },
};

export const AlignedStart: Story = {
  args: {
    index: 2,
    indexLimit: 4,
    className: 'denhaag-pagination--start',
  },
};

export const AlignedCenter: Story = {
  args: {
    index: 2,
    indexLimit: 4,
    className: 'denhaag-pagination--center',
  },
};

export const AlignedEnd: Story = {
  args: {
    index: 2,
    indexLimit: 4,
    className: 'denhaag-pagination--end',
  },
};
