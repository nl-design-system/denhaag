import { Meta, StoryObj } from '@storybook/react';
import Toggeltip from '@gemeente-denhaag/toggletip';
import readme from '../../../../components/Toggletip/README.md?raw';

const exampleArgs = {
  children: 'Hover me',
  text: 'This is a Toggletip fawe awef awef waef',
};

const meta = {
  title: 'React/Data Display/Toggeltip',
  id: 'react-data-display-toggletip',
  component: Toggeltip,
  tags: ['autodocs'],
  args: exampleArgs,
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof Toggeltip>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {};
