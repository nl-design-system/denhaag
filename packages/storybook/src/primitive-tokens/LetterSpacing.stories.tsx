import { Meta, StoryObj } from '@storybook/react-vite';
import tokens from '../../../../proprietary/tokens/dist/index.json';
import { Subtitle, Title, Typeset } from '@storybook/addon-docs/blocks';
import React from 'react';

type Story = StoryObj<typeof meta>;
type Tokens = typeof tokens;
type LetterSpacingTokens = Tokens['denhaag']['letter-spacing'];

const letterSpacingTokens: LetterSpacingTokens = tokens['denhaag']['letter-spacing'];
const letterSpacingTokensSorted = Object.entries(letterSpacingTokens).sort((a, b) => {
  const aValue = parseFloat(a[1].value);
  const bValue = parseFloat(b[1].value);
  return aValue - bValue;
});

console.log(letterSpacingTokensSorted);

const meta: Meta = {
  title: 'Primitive Tokens/Letter Spacing',
  tags: ['autodocs', '!dev'],
  parameters: {
    chromatic: { disableSnapshot: true },
    docs: {
      page: () => (
        <>
          <Title>Letter Spacing</Title>
          {letterSpacingTokensSorted.map(([key, token]) => (
            <React.Fragment key={key}>
              <Subtitle>{key}</Subtitle>
              <div style={{ letterSpacing: token.value }}>
                <Typeset
                  fontFamily="'TheSans', sans-serif"
                  fontSizes={['12px', '14px', '18px', '20px', '24px', '32px', '48px']}
                />
              </div>
            </React.Fragment>
          ))}
        </>
      ),
    },
  },
};

export default meta;

export const Default: Story = {};
