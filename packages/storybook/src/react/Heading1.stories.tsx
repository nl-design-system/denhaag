import { Meta, StoryObj } from '@storybook/react';
import { Heading1 } from '@gemeente-denhaag/typography';

import readme from '../../../../components/Typography/README.md';

const exampleArgs = {
  children: 'This is a bit of text inside a Header1 component.',
};

const meta = {
  id: 'react-data-display-typography-header-1',
  title: 'React/Data Display/Typography/Heading1',
  component: Heading1,
  args: exampleArgs,
  tags: ['autodocs'],
  parameters: {
    chromatic: { viewports: [1768, 1280, 768, 360] },
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
