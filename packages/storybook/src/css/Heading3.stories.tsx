import { Meta, StoryObj } from '@storybook/react';
import { Heading3 } from '@gemeente-denhaag/typography';

import readme from '../../../../components/Typography/README.md?raw';

const exampleArgs = {
  children: 'This is a bit of text inside a Header3 component.',
};

const meta = {
  id: 'css-data-display-typography-header-3',
  title: 'CSS/Data Display/Typography/Heading3',
  component: Heading3,
  args: exampleArgs,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof Heading3>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
