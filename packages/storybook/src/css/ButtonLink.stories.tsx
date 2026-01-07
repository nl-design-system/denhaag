import { Meta, StoryObj } from '@storybook/react-vite';
import readme from '../../../../components/ButtonLink/README.md?raw';
import { getComponentDescription } from '../utils/getPackage';
import pkg from '../../../../components/ButtonLink/package.json';
import { ButtonLink } from '@gemeente-denhaag/button-link';

const exampleArgs = {
  href: '#',
  children: 'Button',
};

const meta = {
  component: ButtonLink,
  tags: ['autodocs'],
  args: exampleArgs,
  parameters: {
    docs: {
      description: {
        component: getComponentDescription(pkg.name, pkg.version, readme),
      },
    },
  },
} as Meta<typeof ButtonLink>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {};

export const Secondary: Story = {
  args: { ...Default.args, appearance: 'secondary-action-button' },
};
