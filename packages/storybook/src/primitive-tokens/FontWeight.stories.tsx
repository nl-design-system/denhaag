import { Meta, StoryObj } from '@storybook/react-vite';
import tokens from '../../../../proprietary/tokens/dist/index.json';
import { Title, Stories } from '@storybook/addon-docs/blocks';
import React from 'react';
import { Paragraph } from '@gemeente-denhaag/paragraph';
import { path2css } from '../denhaag/util';

type Story = StoryObj<typeof meta>;
type Tokens = typeof tokens;
type FontWeightTokens = Tokens['denhaag']['font-weight'];

const fontWeightTokens: FontWeightTokens = tokens['denhaag']['font-weight'];

const meta: Meta = {
  title: 'Primitive Tokens/Font Weight',
  tags: ['autodocs', '!dev'],
  component: Paragraph,
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  parameters: {
    chromatic: { disableSnapshot: true },
    docs: {
      canvas: { sourceState: 'none' },
      page: () => (
        <>
          <Title />
          <Stories title={<></>} />
        </>
      ),
    },
  },
};

export default meta;

export const Regular: Story = {
  parameters: {
    docs: {
      description: {
        story: path2css(fontWeightTokens.regular.path),
      },
    },
  },
  args: {
    style: { fontWeight: fontWeightTokens.regular.value },
  },
};

export const Medium: Story = {
  parameters: {
    docs: {
      description: {
        story: path2css(fontWeightTokens.medium.path),
      },
    },
  },
  args: {
    style: { fontWeight: fontWeightTokens.medium.value },
  },
};

export const Semibold: Story = {
  parameters: {
    docs: {
      description: {
        story: path2css(fontWeightTokens.semibold.path),
      },
    },
  },
  args: {
    style: { fontWeight: fontWeightTokens.semibold.value },
  },
};

export const Bold: Story = {
  parameters: {
    docs: {
      description: {
        story: path2css(fontWeightTokens.bold.path),
      },
    },
  },
  args: {
    style: { fontWeight: fontWeightTokens.bold.value },
  },
};
