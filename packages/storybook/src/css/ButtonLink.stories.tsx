import { Meta, StoryObj } from '@storybook/react';
import readme from '../../../../components/ButtonLink/README.md';
import { ButtonLink } from '@gemeente-denhaag/button-link';

const exampleArgs = {
  href: '#',
  children: 'Button',
};

const meta = {
  title: 'css/Input/Button Link',
  id: 'css-input-button-link',
  component: ButtonLink,
  tags: ['autodocs'],
  args: exampleArgs,
  parameters: {
    docs: {
      description: {
        component: readme,
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
