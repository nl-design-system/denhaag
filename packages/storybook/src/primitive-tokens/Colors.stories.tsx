import { Meta, StoryObj } from '@storybook/react-vite';
import tokens from '../../../../proprietary/tokens/dist/index.json';
import { ColorPalette, ColorItem, Title } from '@storybook/addon-docs/blocks';
import React, { Fragment } from 'react';

type Story = StoryObj<typeof meta>;
const colorTokens = tokens.denhaag.color;
const colors = ['ocher', 'green', 'red', 'orange', 'blue', 'grey', 'neutrals'] as const;

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
            const colorItems = Object.entries(colorGroup).map(([shade, item]) => (
              <ColorItem
                key={item.key}
                title={`${color} ${shade}`}
                subtitle={`var(--${item.path.join('-')})`}
                colors={[item.value]}
              />
            ));

            return (
              <Fragment key={color}>
                <h3>{color.charAt(0).toUpperCase() + color.slice(1)}</h3>
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
