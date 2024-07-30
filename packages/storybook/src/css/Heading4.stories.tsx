import { Meta, StoryObj } from '@storybook/react';
import { Heading4 } from '@gemeente-denhaag/typography';

import readme from '../../../../components/Typography/README.md?raw';

const exampleArgs = {
  children: 'This is a bit of text inside a Header4 component.',
};

const meta = {
  id: 'css-data-display-typography-header-4',
  title: 'CSS/Data Display/Typography/Heading4',
  component: Heading4,
  args: exampleArgs,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof Heading4>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
