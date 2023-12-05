import { Meta, StoryObj } from '@storybook/react';
import readme from '../../../../components/TextField/README.md';
import RadioButton from '@gemeente-denhaag/radio';

const meta = {
  title: 'React/Input/Utrecht Radio',
  id: 'react-radio',
  component: RadioButton,
  tags: ['autodocs'],
  args: { },
  parameters: {
    docs: {
      description: {
        component: readme,
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
