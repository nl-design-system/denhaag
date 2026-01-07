import { Meta, StoryObj } from '@storybook/react-vite';
import { LinkList, LinkListProps } from '@gemeente-denhaag/link-list';

import readme from '../../../../components/LinkList/README.md?raw';
import { getComponentDescription } from '../utils/getPackage';
import pkg from '../../../../components/LinkList/package.json';

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
    docs: {
      description: {
        component: getComponentDescription(pkg.name, pkg.version, readme),
      },
    },
  },
} as Meta<typeof LinkList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
