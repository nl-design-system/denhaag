import { Meta, StoryObj } from '@storybook/react';
import { Heading1 } from '@gemeente-denhaag/typography';

import readme from '../../../../components/Typography/README.md?raw';

const exampleArgs = {
  children: 'This is a bit of text inside a Header1 component.',
};

const meta = {
  id: 'css-data-display-typography-header-1',
  title: 'CSS/Data Display/Typography/Heading1',
  component: Heading1,
  args: exampleArgs,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof Heading1>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
