import { Meta, StoryObj } from '@storybook/react-vite';
import { Textarea } from '@gemeente-denhaag/textarea';
import readme from '../../../../components/Textarea/README.md?raw';
import { getComponentDescription } from '../utils/getPackage';
import pkg from '../../../../components/Textarea/package.json';

const meta = {
  component: Textarea,
  tags: ['autodocs'],
  args: { placeholder: 'Placeholder' },
  parameters: {
    docs: {
      description: {
        component: getComponentDescription(pkg.name, pkg.version, readme),
      },
    },
  },
} as Meta<typeof Textarea>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {};

export const Disabled: Story = {
  args: { ...Default.args, disabled: true },
};
export const Invalid: Story = {
  args: { ...Default.args, invalid: true },
};
