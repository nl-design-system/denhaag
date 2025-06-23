import { Meta, StoryObj } from '@storybook/react';
import { Heading2 } from '@gemeente-denhaag/typography';

import readme from '../../../../components/Typography/README.md?raw';

const exampleArgs = {
  children: 'This is a bit of text inside a Header2 component.',
};

const meta = {
  id: 'react-data-display-typography-header-2',
  title: 'React/Data Display/Typography/Heading2',
  component: Heading2,
  args: exampleArgs,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof Heading2>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
