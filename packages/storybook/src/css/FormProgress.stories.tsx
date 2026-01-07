import { Meta, StoryObj } from '@storybook/react-vite';
import { FormProgress } from '@gemeente-denhaag/form-progress';

import readme from '../../../../components/FormProgress/README.md?raw';
import { getComponentDescription } from '../utils/getPackage';
import pkg from '../../../../components/FormProgress/package.json';

const exampleArgs = {
  value: 1,
  max: 4,
  label: 'Stap 1 van 4',
};

const meta = {
  component: FormProgress,
  args: exampleArgs,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: getComponentDescription(pkg.name, pkg.version, readme),
      },
    },
  },
} as Meta<typeof FormProgress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const SecondStep: Story = {
  args: { ...Default.args, value: 2, label: 'Stap 2 van 4' },
};
