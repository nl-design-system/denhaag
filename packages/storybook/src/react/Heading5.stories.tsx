import { Meta, StoryObj } from '@storybook/react';
import { Heading5 } from '@gemeente-denhaag/typography';

import readme from '../../../../components/Typography/README.md';

const exampleArgs = {
  children: 'This is a bit of text inside a Header5 component.',
};

const meta = {
  id: 'react-data-display-typography-header-5',
  title: 'React/Data Display/Typography/Heading5',
  component: Heading5,
  args: exampleArgs,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof Heading5>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
