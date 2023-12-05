import { Meta, StoryObj } from '@storybook/react';
import Textbox from '@gemeente-denhaag/textbox';
import readme from '../../../../components/TextField/README.md';

const meta = {
  title: 'React/Input/TextBox',
  id: 'react-textbox',
  component: Textbox,
  tags: ['autodocs'],
  args: { placeholder: 'Placeholder' },
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof Textbox>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {};

export const Disabled: Story = {
  args: { ...Default.args, disabled: true },
};
export const Invalid: Story = {
  args: { ...Default.args, invalid: true },
};
