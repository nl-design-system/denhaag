import { Meta, StoryObj } from '@storybook/react-vite';
import tokens from '../../../../proprietary/tokens/dist/index.json';
import { Title, Typeset } from '@storybook/addon-docs/blocks';
import React from 'react';
import { path2css } from '../denhaag/util';

type Story = StoryObj<typeof meta>;
type Tokens = typeof tokens;
type TextTokens = Tokens['basis']['text'];
type HeadingTokens = Tokens['basis']['heading'];
type FormControlTokens = Tokens['basis']['form-control'];

const basisTokens: TextTokens = tokens['basis']['text'];
const headingTokens: HeadingTokens = tokens['basis']['heading'];
const formControlTokens: FormControlTokens = tokens['basis']['form-control'];
const fontSizes = Object.values(basisTokens['font-size']).map((size) => {
  if (size.value.startsWith('clamp')) return size.value.replace('clamp(', '').replace(')', '').split(',')[0];
  return size.value;
});

const meta: Meta = {
  title: 'Common Tokens/Font Family',
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
          <h3>Text default</h3>
          <p>
            {basisTokens['font-family'].default.value}
            <br />
            {path2css(basisTokens['font-family'].default.path)}
          </p>
          <div className="font-typeset-aligned" style={{ fontFamily: basisTokens['font-family'].default.value }}>
            <Typeset fontFamily={basisTokens['font-family'].default.value} fontSizes={fontSizes} />
          </div>
          <h3>Text monospace</h3>
          <p>
            {basisTokens['font-family'].monospace.value}
            <br />
            {path2css(basisTokens['font-family'].monospace.path)}
          </p>
          <div className="font-typeset-aligned" style={{ fontFamily: basisTokens['font-family'].monospace.value }}>
            <Typeset fontFamily={basisTokens['font-family'].monospace.value} fontSizes={fontSizes} />
          </div>
          <h3>Heading</h3>
          <p>
            {headingTokens['font-family'].value}
            <br />
            {path2css(headingTokens['font-family'].path)}
          </p>
          <div className="font-typeset-aligned" style={{ fontFamily: headingTokens['font-family'].value }}>
            <Typeset fontFamily={headingTokens['font-family'].value} fontSizes={fontSizes} />
          </div>
          <h3>Form control</h3>
          <p>
            {formControlTokens['font-family'].value}
            <br />
            {path2css(formControlTokens['font-family'].path)}
          </p>
          <div className="font-typeset-aligned" style={{ fontFamily: formControlTokens['font-family'].value }}>
            <Typeset fontFamily={formControlTokens['font-family'].value} fontSizes={fontSizes} />
          </div>
        </>
      ),
    },
  },
};

export default meta;

export const Normal: Story = {};
