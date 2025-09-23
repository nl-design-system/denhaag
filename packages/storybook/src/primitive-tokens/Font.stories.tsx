import { Meta, StoryObj } from '@storybook/react-vite';
import tokens from '../../../../proprietary/tokens/dist/index.json';
import { Subtitle, Title, Typeset } from '@storybook/addon-docs/blocks';
import React from 'react';

type Story = StoryObj<typeof meta>;
type Tokens = typeof tokens;
type FontFamilyTokens = Tokens['denhaag']['font']['family'];
type FontSizeTokens = Tokens['denhaag']['font']['size'];
type FontWeightTokens = Tokens['denhaag']['font']['weight'];

const fontFamilyTokens: FontFamilyTokens = tokens['denhaag']['font']['family'];
const fontSizeTokens: FontSizeTokens = tokens['denhaag']['font']['size'];
const fontWeightTokens: FontWeightTokens = tokens['denhaag']['font']['weight'];

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
          <Title>Font Family</Title>
          {Object.entries(fontFamilyTokens).map(([familyKey, token]) => (
            <React.Fragment key={familyKey}>
              <Subtitle>{familyKey.charAt(0).toUpperCase() + familyKey.slice(1)}</Subtitle>
              <Typeset fontFamily={token.value} fontSizes={Object.values(fontSizeTokens).map((size) => size.value)} />
            </React.Fragment>
          ))}
          <Title>Font Weight</Title>
          {Object.entries(fontWeightTokens).map(([weightKey, token]) => (
            <React.Fragment key={weightKey}>
              <Subtitle>{weightKey.charAt(0).toUpperCase() + weightKey.slice(1)}</Subtitle>
              <div style={{ fontWeight: token.value }}>
                <Typeset
                  fontFamily={fontFamilyTokens.text.value}
                  fontSizes={Object.values(fontSizeTokens).map((size) => size.value)}
                />
              </div>
            </React.Fragment>
          ))}
          <Title>Font Size</Title>
          <div style={{ fontFamily: fontFamilyTokens.text.value }}>
            <Typeset
              fontFamily={fontFamilyTokens.text.value}
              fontSizes={Object.values(fontSizeTokens).map((size) => size.value)}
            />
          </div>
        </>
      ),
    },
  },
};

export default meta;

export const Normal: Story = {};
