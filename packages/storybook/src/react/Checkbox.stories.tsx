import { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '@gemeente-denhaag/checkbox';
import readme from '../../../../components/Checkbox/README.md?raw';

const meta = {
  id: 'react-input-checkbox',
  title: 'React/Input/Checkbox',
  component: Checkbox,
  args: {},
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: readme,
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
