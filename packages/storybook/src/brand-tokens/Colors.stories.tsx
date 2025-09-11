import { Meta, StoryObj } from '@storybook/react-vite';
import tokens from '../../../../proprietary/tokens/dist/index.json';
import { ColorPalette, ColorItem, Title } from '@storybook/addon-docs/blocks';
import React from 'react';

type Tokens = typeof tokens;
type ColorToken = Tokens['denhaag']['color']['black'];
type SingleColorToken = { [key in (typeof singleColors)[number]]: ColorToken };
type MultiColorTokens = {
  [key in (typeof multiColors)[number]]: Partial<Record<'1' | '2' | '3' | '4' | '5', ColorToken>>;
};
type ColorTokens = SingleColorToken & MultiColorTokens;
type Story = StoryObj<typeof meta>;

const singleColors = ['white', 'black'] as const;
const multiColors = ['ocher', 'green', 'red', 'orange', 'blue', 'grey', 'warmgrey'] as const;
const colors = [...multiColors, ...singleColors] as const;
const colorTokens: ColorTokens = tokens['denhaag']['color'];

const meta: Meta = {
  title: 'Brand Tokens/Colors',
  tags: ['autodocs', '!dev'],
  parameters: {
    chromatic: { disableSnapshot: true },
    docs: {
      page: () =>
        colors.map((color) => {
          const colorGroup = colorTokens[color];
          const colorItems =
            'value' in colorGroup ? (
              <ColorItem
                key={color}
                title={color}
                subtitle={`var(--denhaag-color-${color})`}
                colors={[colorGroup.value]}
              />
            ) : (
              Object.values(colorGroup).map((item: ColorToken, index: number) => (
                <ColorItem
                  key={item.key}
                  title={`${color} ${index + 1}`}
                  subtitle={`var(--${item.path.join('-')})`}
                  colors={[item.value]}
                />
              ))
            );

          return (
            <>
              <Title>{color.charAt(0).toUpperCase() + color.slice(1)}</Title>
              <ColorPalette key={color}>{colorItems}</ColorPalette>
            </>
          );
        }),
    },
  },
};

export default meta;

export const Default: Story = {};
