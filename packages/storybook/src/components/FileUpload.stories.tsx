import { Meta, StoryObj } from '@storybook/react-vite';
import { FileUpload } from '@gemeente-denhaag/file-upload';

import readme from '../../../../components/FileUpload/README.md?raw';

const exampleArgs = {};

const meta = {
  component: FileUpload,
  args: exampleArgs,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/eSl0Sclc8t03X76qM1cWyz/%F0%9F%93%95-HDS-Library?node-id=1782-4656',
    },
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
