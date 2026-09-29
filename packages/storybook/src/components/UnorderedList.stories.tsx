import React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';
import readme from '../../../../components/UnorderedList/README.md?raw';
import { UnorderedList, UnorderedListItem } from '@gemeente-denhaag/unorderedlist';

const meta = {
  component: UnorderedList,
  args: {},
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/eSl0Sclc8t03X76qM1cWyz/%F0%9F%93%95-HDS-Library?node-id=288-2005',
    },
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof UnorderedList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: [
      <UnorderedListItem key={1}>List item 1</UnorderedListItem>,
      <UnorderedListItem key={2}>List item 2</UnorderedListItem>,
      <UnorderedListItem key={3}>List item 3</UnorderedListItem>,
    ],
  },
};

export const Nested: Story = {
  args: {
    children: [
      <UnorderedListItem key={1}>List item 1</UnorderedListItem>,
      <UnorderedListItem key={2}>List item 2</UnorderedListItem>,
      <UnorderedList nested key={3}>
        <UnorderedListItem>List item 1</UnorderedListItem>
        <UnorderedListItem>List item 2</UnorderedListItem>
        <UnorderedListItem>List item 3</UnorderedListItem>
      </UnorderedList>,
      <UnorderedListItem key={4}>List item 3</UnorderedListItem>,
    ],
  },
};
