import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import LinkList, { LinkListItem } from '@gemeente-denhaag/link-list';

import readme from '../../../../components/LinkList/README.md?raw';

const exampleArgs = {
  children: (
    <>
      <LinkListItem>
        <a href="#example">Link 1</a>
      </LinkListItem>
      <LinkListItem>
        <a href="#example">Link 2</a>
      </LinkListItem>
      <LinkListItem>
        <a href="#example">Link 3</a>
      </LinkListItem>
    </>
  ),
};

const meta = {
  id: 'css-navigation-link-list',
  title: 'CSS/Navigation/Link List',
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
