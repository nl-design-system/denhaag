import { Meta, StoryObj } from '@storybook/react-vite';
import { LinkList, LinkListProps } from '@gemeente-denhaag/link-list';

import readme from '../../../../components/LinkList/README.md?raw';

const exampleArgs = {
  items: [
    {
      label: 'Link internal 1',
      href: '#example',
    },
    {
      label: 'Link external',
      href: '#example',
      external: true,
    },
    {
      label: 'Link internal 2',
      href: '#example',
    },
  ],
} as LinkListProps;

const meta = {
  component: LinkList,
  args: exampleArgs,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/eSl0Sclc8t03X76qM1cWyz/%F0%9F%93%95-HDS-Library?node-id=255-1176',
    },
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof LinkList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
