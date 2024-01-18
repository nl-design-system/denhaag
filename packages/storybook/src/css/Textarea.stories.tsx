import { Meta, StoryObj } from '@storybook/react';
import Textarea from '@gemeente-denhaag/textarea';
import readme from '../../../../components/Textarea/README.md';

const meta = {
  title: 'CSS/Input/Textarea',
  id: 'css-textarea',
  component: Textarea,
  tags: ['autodocs'],
  args: { placeholder: 'Placeholder' },
  parameters: {
    docs: {
      description: {
        component: readme,
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
