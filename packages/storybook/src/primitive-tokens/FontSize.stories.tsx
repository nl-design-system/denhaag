import { Meta, StoryObj } from '@storybook/react-vite';
import tokens from '../../../../proprietary/tokens/dist/index.json';
import { Title, Stories } from '@storybook/addon-docs/blocks';
import React from 'react';
import { Paragraph } from '@gemeente-denhaag/paragraph';
import { path2css } from '../denhaag/util';

type Story = StoryObj<typeof meta>;
type Tokens = typeof tokens;
type FontSizeTokens = Tokens['denhaag']['font-size'];

const fontSizeTokens: FontSizeTokens = tokens['denhaag']['font-size'];

const createFontSizeStory = (token: FontSizeTokens[keyof FontSizeTokens], name: string): Story => ({
  name,
  parameters: {
    docs: {
      description: {
        story: `rem ${token.value}<br />${path2css(token.path)}`,
      },
    },
  },
  args: {
    style: { fontSize: token.value },
  },
});

const meta: Meta = {
  title: 'Primitive Tokens/Font Size',
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

export const Size12: Story = createFontSizeStory(fontSizeTokens['12'], '12');
export const Size14: Story = createFontSizeStory(fontSizeTokens['14'], '14');
export const Size18: Story = createFontSizeStory(fontSizeTokens['18'], '18');
export const Size20: Story = createFontSizeStory(fontSizeTokens['20'], '20');
export const Size23: Story = createFontSizeStory(fontSizeTokens['23'], '23');
export const Size24: Story = createFontSizeStory(fontSizeTokens['24'], '24');
export const Size28: Story = createFontSizeStory(fontSizeTokens['28'], '28');
export const Size32: Story = createFontSizeStory(fontSizeTokens['32'], '32');
export const Size36: Story = createFontSizeStory(fontSizeTokens['36'], '36');
export const Size48: Story = createFontSizeStory(fontSizeTokens['48'], '48');
