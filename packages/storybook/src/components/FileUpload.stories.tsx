import { Meta, StoryObj } from '@storybook/react-vite';
import { FileUpload } from '@gemeente-denhaag/file-upload';

import readme from '../../../../components/FileUpload/README.md?raw';

const exampleArgs = {};

const meta = {
  component: FileUpload,
  args: exampleArgs,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
    chromatic: { viewports: [1280, 360] },
  },
} as Meta<typeof File>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
