import { Meta, StoryObj } from '@storybook/react-vite';
import { Checkbox } from '@gemeente-denhaag/checkbox';
import readme from '../../../../components/Checkbox/README.md?raw';
import { getComponentDescription } from '../utils/getPackage';
import pkg from '../../../../components/Checkbox/package.json';

const meta = {
  component: Checkbox,
  args: {},
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: getComponentDescription(pkg.name, pkg.version, readme),
      },
    },
  },
} as Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Checked: Story = {
  args: {
    checked: true,
  },
};

export const Invalid: Story = {
  args: {
    invalid: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Hover: Story = {
  parameters: {
    pseudo: { hover: true },
  },
};

export const Focus: Story = {
  parameters: {
    pseudo: { focus: true },
  },
};

export const FocusVisible: Story = {
  parameters: {
    pseudo: { focusVisible: true, focus: true },
  },
};
