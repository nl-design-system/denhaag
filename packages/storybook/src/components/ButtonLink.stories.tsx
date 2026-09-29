import { Meta, StoryObj } from '@storybook/react-vite';
import readme from '../../../../components/ButtonLink/README.md?raw';
import { ButtonLink } from '@gemeente-denhaag/button-link';

const exampleArgs = {
  href: '#',
  children: 'Button',
};

const meta = {
  component: ButtonLink,
  tags: ['autodocs'],
  args: exampleArgs,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/eSl0Sclc8t03X76qM1cWyz/%F0%9F%93%95-HDS-Library?node-id=1329-14737',
    },
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
