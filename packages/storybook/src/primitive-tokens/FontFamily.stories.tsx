import { Meta, StoryObj } from '@storybook/react-vite';
import tokens from '../../../../proprietary/tokens/dist/index.json';
import { Stories, Title } from '@storybook/addon-docs/blocks';
import React from 'react';
import { path2css } from '../denhaag/util';
import { Paragraph } from '@gemeente-denhaag/paragraph';

type Story = StoryObj<typeof meta>;
type Tokens = typeof tokens;
type FontFamilyTokens = Tokens['denhaag']['font-family'];

const fontFamilyTokens: FontFamilyTokens = tokens['denhaag']['font-family'];

const meta: Meta = {
  title: 'Primitive Tokens/Font Family',
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

export const Text: Story = {
  parameters: {
    docs: {
      description: {
        story: `${fontFamilyTokens.text.value}<br />${path2css(fontFamilyTokens.text.path)}`,
      },
    },
  },
  args: {
    style: { fontFamily: fontFamilyTokens.text.value },
  },
};

export const Heading: Story = {
  parameters: {
    docs: {
      description: {
        story: `${fontFamilyTokens.heading.value}<br />${path2css(fontFamilyTokens.heading.path)}`,
      },
    },
  },
  args: {
    style: { fontFamily: fontFamilyTokens.heading.value },
  },
};
