import { Meta, StoryObj } from '@storybook/react-vite';
import readme from '../../../../components/RadioButton/README.md?raw';
import { RadioButton } from '@gemeente-denhaag/radio-button';

const meta = {
  component: RadioButton,
  tags: ['autodocs'],
  args: {},
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/eSl0Sclc8t03X76qM1cWyz/%F0%9F%93%95-HDS-Library?node-id=2018-34091',
    },
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
