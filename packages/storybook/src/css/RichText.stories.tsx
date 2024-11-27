import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { RichText } from '@gemeente-denhaag/rich-text';
import readme from '../../../../components/RichText/README.md?raw';
import { Heading1, Heading2, Heading3, Paragraph } from '@gemeente-denhaag/typography';

const exampleArgs = {
  children: (
    <>
      <Heading1 className="utrecht-heading-1">Heading 1</Heading1>
      <Heading2 className="utrecht-heading-2">Heading 2</Heading2>
      <Heading3 className="utrecht-heading-3">Heading 3</Heading3>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus laboriosam sapiente dolor rerum illo eius error
        autem inventore esse! Iusto iure aperiam optio dicta rerum quibusdam quaerat animi ipsam fugiat!
      </Paragraph>
    </>
  ),
};

const meta = {
  id: 'css-page-elements-rich-text',
  title: 'CSS/Page Elements/Rich Text',
  component: RichText,
  args: exampleArgs,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof RichText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
