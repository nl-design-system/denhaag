import React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';
import { RichText } from '@gemeente-denhaag/rich-text';
import readme from '../../../../components/RichText/README.md?raw';
import { getComponentDescription } from '../utils/getPackage';
import pkg from '../../../../components/RichText/package.json';
import { Heading } from '@gemeente-denhaag/heading';
import { Paragraph } from '@gemeente-denhaag/paragraph';
import { UnorderedList, UnorderedListItem } from '@gemeente-denhaag/unorderedlist';

const exampleArgs = {
  children: (
    <>
      <Heading level={1}>Heading 1</Heading>
      <Heading level={2}>Heading 2</Heading>
      <Heading level={3}>Heading 3</Heading>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus laboriosam sapiente dolor rerum illo eius error
        autem inventore esse! Iusto iure aperiam optio dicta rerum quibusdam quaerat animi ipsam fugiat!
      </Paragraph>
      <UnorderedList>
        <UnorderedListItem>List item 1</UnorderedListItem>
        <UnorderedListItem>List item 2</UnorderedListItem>
        <UnorderedListItem>List item 3</UnorderedListItem>
      </UnorderedList>
      <Heading level={3}>Heading 3</Heading>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus laboriosam sapiente dolor rerum illo eius error
        autem inventore esse! Iusto iure aperiam optio dicta rerum quibusdam quaerat animi ipsam fugiat!
      </Paragraph>
    </>
  ),
};

const meta = {
  component: RichText,
  args: exampleArgs,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: getComponentDescription(pkg.name, pkg.version, readme),
      },
    },
  },
} as Meta<typeof RichText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
