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
  id: 'react-navigation-link-list',
  title: 'React/Navigation/Link List',
  component: LinkList,
  args: exampleArgs,
  tags: ['autodocs'],
  parameters: {
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
