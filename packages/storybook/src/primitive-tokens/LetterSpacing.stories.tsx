import { Meta, StoryObj } from '@storybook/react-vite';
import tokens from '../../../../proprietary/tokens/dist/index.json';
import { Stories, Title } from '@storybook/addon-docs/blocks';
import React from 'react';
import { Paragraph } from '@gemeente-denhaag/paragraph';

type Story = StoryObj<typeof meta>;
type Tokens = typeof tokens;
type LetterSpacingTokens = Tokens['denhaag']['letter-spacing'];

const letterSpacingTokens: LetterSpacingTokens = tokens['denhaag']['letter-spacing'];

const meta: Meta = {
  title: 'Primitive Tokens/Letter Spacing',
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
          <Title>Letter Spacing</Title>
          <Stories title={<></>} />
        </>
      ),
    },
  },
};

export default meta;

export const Normal: Story = {
  args: {
    style: { letterSpacing: letterSpacingTokens.normal.value },
  },
};

export const Wide: Story = {
  args: {
    style: { letterSpacing: letterSpacingTokens.wide.value },
  },
};
