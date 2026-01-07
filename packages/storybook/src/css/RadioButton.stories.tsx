import { Meta, StoryObj } from '@storybook/react-vite';
import readme from '../../../../components/RadioButton/README.md?raw';
import { RadioButton } from '@gemeente-denhaag/radio-button';
import { getComponentDescription } from '../utils/getPackage';
import pkg from '../../../../components/RadioButton/package.json';

const meta = {
  component: RadioButton,
  tags: ['autodocs'],
  args: {},
  parameters: {
    docs: {
      description: {
        component: getComponentDescription(pkg.name, pkg.version, readme),
      },
    },
  },
} as Meta<typeof RadioButton>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {};

export const Disabled: Story = {
  args: { ...Default.args, disabled: true },
};
export const Invalid: Story = {
  args: { ...Default.args, invalid: true },
};
