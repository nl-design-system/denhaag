import { Meta, StoryObj } from '@storybook/react-vite';
import { NumberBadge } from '@gemeente-denhaag/number-badge';
import readme from '../../../../components/NumberBadge/README.md?raw';
import { getComponentDescription } from '../utils/getPackage';
import pkg from '../../../../components/NumberBadge/package.json';

type Story = StoryObj<typeof meta>;

const meta: Meta<typeof NumberBadge> = {
  component: NumberBadge,
  tags: ['autodocs'],
  argTypes: {
    children: {
      type: 'string',
      control: {
        type: 'text',
      },
    },
    value: {
      type: 'string',
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: getComponentDescription(pkg.name, pkg.version, readme),
      },
    },
  },
};

export default meta;

export const Default: Story = {
  args: {
    children: '13',
    value: '13',
  },
};
