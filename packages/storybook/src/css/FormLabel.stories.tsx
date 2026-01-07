import { Meta, StoryObj } from '@storybook/react-vite';
import { FormLabel } from '@gemeente-denhaag/form-label';
import readme from '../../../../components/FormLabel/README.md?raw';
import { getComponentDescription } from '../utils/getPackage';
import pkg from '../../../../components/FormLabel/package.json';

const meta = {
  component: FormLabel,
  args: { children: 'Username' },
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: getComponentDescription(pkg.name, pkg.version, readme),
      },
    },
  },
} as Meta<typeof FormLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
