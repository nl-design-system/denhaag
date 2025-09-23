import { Meta, StoryObj } from '@storybook/react-vite';
import tokens from '../../../../proprietary/tokens/dist/index.json';
import { ColorPalette, ColorItem, Title, Subtitle } from '@storybook/addon-docs/blocks';
import React, { Fragment } from 'react';

type Story = StoryObj<typeof meta>;
type Tokens = typeof tokens;
type ColorToken = Tokens['denhaag']['color']['black'];
type SingleColorToken = { [key in (typeof singleColors)[number]]: ColorToken };
type MultiColorTokens = {
  [key in (typeof multiColors)[number]]: Partial<Record<'1' | '2' | '3' | '4' | '5', ColorToken>>;
};
type ColorTokens = SingleColorToken & MultiColorTokens;

const singleColors = ['white', 'black'] as const;
const multiColors = ['ocher', 'green', 'red', 'orange', 'blue', 'grey', 'warmgrey'] as const;
const colors = [...multiColors, ...singleColors] as const;
const colorTokens: ColorTokens = tokens['denhaag']['color'];

const meta: Meta = {
  title: 'Primitive Tokens/Colors',
  tags: ['autodocs', '!dev'],
  parameters: {
    chromatic: { disableSnapshot: true },
    docs: {
      page: () => (
        <>
          <Title />
          {colors.map((color) => {
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
              <Fragment key={color}>
                <Subtitle>{color.charAt(0).toUpperCase() + color.slice(1)}</Subtitle>
                <ColorPalette key={color}>{colorItems}</ColorPalette>
              </Fragment>
            );
          })}
        </>
      ),
    },
  },
};

export default meta;

export const Default: Story = {};
