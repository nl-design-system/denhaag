import { Meta, StoryObj } from '@storybook/react-vite';
import { FileUpload } from '@gemeente-denhaag/file-upload';

import readme from '../../../../components/FileUpload/README.md?raw';
import { getComponentDescription } from '../utils/getPackage';
import pkg from '../../../../components/FileUpload/package.json';

const exampleArgs = {};

const meta = {
  component: FileUpload,
  args: exampleArgs,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: getComponentDescription(pkg.name, pkg.version, readme),
      },
    },
    chromatic: { viewports: [1280, 360] },
  },
} as Meta<typeof File>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
