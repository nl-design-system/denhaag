import React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';
import readme from '../../../../components/OrderedList/README.md?raw';
import { OrderedList, OrderedListItem } from '@gemeente-denhaag/orderedlist';

const meta = {
  component: OrderedList,
  args: {},
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof OrderedList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: [
      <OrderedListItem key={1}>List item 1</OrderedListItem>,
      <OrderedListItem key={2}>List item 2</OrderedListItem>,
      <OrderedListItem key={3}>List item 3</OrderedListItem>,
    ],
  },
};

export const Nested: Story = {
  args: {
    children: [
      <OrderedListItem key={1}>List item 1</OrderedListItem>,
      <OrderedListItem key={2}>List item 2</OrderedListItem>,
      <OrderedList key={3}>
        <OrderedListItem>List item 1</OrderedListItem>
        <OrderedListItem>List item 2</OrderedListItem>
        <OrderedListItem>List item 3</OrderedListItem>
      </OrderedList>,
      <OrderedListItem key={4}>List item 3</OrderedListItem>,
    ],
  },
};
