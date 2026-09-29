import { Meta, StoryObj } from '@storybook/react-vite';
import { FormLabel } from '@gemeente-denhaag/form-label';
import readme from '../../../../components/FormLabel/README.md?raw';

const meta = {
  component: FormLabel,
  args: { children: 'Username' },
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/eSl0Sclc8t03X76qM1cWyz/%F0%9F%93%95-HDS-Library?node-id=2002-522',
    },
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof FormLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
