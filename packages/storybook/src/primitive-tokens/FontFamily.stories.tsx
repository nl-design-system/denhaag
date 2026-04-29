import { Meta, StoryObj } from '@storybook/react-vite';
import tokens from '../../../../proprietary/tokens/dist/index.json';
import { Title, Typeset } from '@storybook/addon-docs/blocks';
import React from 'react';
import { path2css } from '../denhaag/util';

type Story = StoryObj<typeof meta>;
type Tokens = typeof tokens;
type FontFamilyTokens = Tokens['denhaag']['font-family'];
type FontSizeTokens = Tokens['denhaag']['font-size'];

const fontFamilyTokens: FontFamilyTokens = tokens['denhaag']['font-family'];
const fontSizeTokens: FontSizeTokens = tokens['denhaag']['font-size'];
const fontSizes = Object.values(fontSizeTokens).map((size) => size.value);

const meta: Meta = {
  title: 'Primitive Tokens/Font Family',
  tags: ['autodocs', '!dev'],
  component: Typeset,
  parameters: {
    chromatic: { disableSnapshot: true },
    docs: {
      page: () => (
        <>
          <style>
            {`
              .font-typeset-aligned .docblock-typeset > div {
                display: grid;
                grid-template-columns: 8ch 1fr;
              }
            `}
          </style>
          <Title />
          <h3>{fontFamilyTokens.text.value}</h3>
          <p>{path2css(fontFamilyTokens.text.path)}</p>
          <div className="font-typeset-aligned" style={{ fontFamily: fontFamilyTokens.text.value }}>
            <Typeset fontFamily={fontFamilyTokens.text.value} fontSizes={fontSizes} />
          </div>
          <h3>{fontFamilyTokens.heading.value}</h3>
          <p>{path2css(fontFamilyTokens.heading.path)}</p>
          <div className="font-typeset-aligned" style={{ fontFamily: fontFamilyTokens.heading.value }}>
            <Typeset fontFamily={fontFamilyTokens.heading.value} fontSizes={fontSizes} />
          </div>
        </>
      ),
    },
  },
};

export default meta;

export const Normal: Story = {};
