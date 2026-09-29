import React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';
import { ArrowLeftIcon, ExternalLinkIcon } from '@gemeente-denhaag/icons';
import { LinkButton } from '@gemeente-denhaag/link-button';

import readme from '../../../../components/LinkButton/README.md?raw';

const exampleArgs = {
  href: '#',
};

const meta = {
  component: LinkButton,
  args: exampleArgs,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/eSl0Sclc8t03X76qM1cWyz/%F0%9F%93%95-HDS-Library?node-id=1329-14737',
    },
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof LinkButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: <>Terug</> },
};

export const Inline: Story = {
  args: { inline: true, children: <>Terug</> },
};

export const Icon: Story = {
  args: {
    children: (
      <>
        <ArrowLeftIcon />
        Terug
      </>
    ),
  },
};

export const IconBeforeAndInline: Story = {
  args: {
    inline: true,
    children: (
      <>
        <ArrowLeftIcon />
        Terug
      </>
    ),
  },
};

export const IconAfterAndInline: Story = {
  args: {
    inline: true,
    children: (
      <>
        Ga verder
        <ExternalLinkIcon />
      </>
    ),
  },
};
