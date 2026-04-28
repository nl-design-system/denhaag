import { Meta, StoryObj } from '@storybook/react-vite';
import tokens from '../../../../proprietary/tokens/dist/index.json';
import { Title, Typeset } from '@storybook/addon-docs/blocks';
import React from 'react';

type Story = StoryObj<typeof meta>;
type Tokens = typeof tokens;
type FontFamilyTokens = Tokens['denhaag']['font-family'];
type FontSizeTokens = Tokens['denhaag']['font-size'];
type FontWeightTokens = Tokens['denhaag']['font-weight'];

const fontFamilyTokens: FontFamilyTokens = tokens['denhaag']['font-family'];
const fontSizeTokens: FontSizeTokens = tokens['denhaag']['font-size'];
const fontWeightTokens: FontWeightTokens = tokens['denhaag']['font-weight'];
const fontSizes = Object.values(fontSizeTokens).map((size) => size.value);

const meta: Meta = {
  title: 'Primitive Tokens/Font',
  tags: ['autodocs', '!dev'],
  component: Typeset,
  parameters: {
    title: 'Font',
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
          <Title>Fonts</Title>
          <p>
            <strong>Typeface:</strong> {fontFamilyTokens.text.value}
            <br />
            <strong>Weight:</strong> {fontWeightTokens.regular.value} ({fontWeightTokens.regular.original.name}),{' '}
            {fontWeightTokens.medium.value} ({fontWeightTokens.medium.original.name}), {fontWeightTokens.semibold.value}{' '}
            ({fontWeightTokens.semibold.original.name}), {fontWeightTokens.bold.value} (
            {fontWeightTokens.bold.original.name})
          </p>
          <div className="font-typeset-aligned" style={{ fontFamily: fontFamilyTokens.text.value }}>
            <Typeset fontFamily={fontFamilyTokens.text.value} fontSizes={fontSizes} />
          </div>
          <p>
            <strong>Typeface:</strong> {fontFamilyTokens.heading.value}
            <br />
            <strong>Weight:</strong> {fontWeightTokens.regular.value} ({fontWeightTokens.regular.original.name}),{' '}
            {fontWeightTokens.medium.value} ({fontWeightTokens.medium.original.name}), {fontWeightTokens.semibold.value}{' '}
            ({fontWeightTokens.semibold.original.name}), {fontWeightTokens.bold.value} (
            {fontWeightTokens.bold.original.name})
          </p>
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
