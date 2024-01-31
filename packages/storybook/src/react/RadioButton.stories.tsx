import { Meta, StoryObj } from '@storybook/react';
import readme from '../../../../components/RadioButton/README.md';
import { RadioButton } from '@gemeente-denhaag/radio-button';

const meta = {
  title: 'React/Input/Radio Button',
  id: 'react-radio-button',
  component: RadioButton,
  tags: ['autodocs'],
  args: {},
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
