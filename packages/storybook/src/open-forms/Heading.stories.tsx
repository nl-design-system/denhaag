import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import headingTokens from '../../../../proprietary/tokens/src/components/utrecht/heading.tokens.json';
import heading1Tokens from '../../../../proprietary/tokens/src/components/utrecht/heading-1.tokens.json';
import heading2Tokens from '../../../../proprietary/tokens/src/components/utrecht/heading-2.tokens.json';
import heading3Tokens from '../../../../proprietary/tokens/src/components/utrecht/heading-3.tokens.json';
import heading4Tokens from '../../../../proprietary/tokens/src/components/utrecht/heading-4.tokens.json';
import heading5Tokens from '../../../../proprietary/tokens/src/components/utrecht/heading-5.tokens.json';
import './styles';

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

const OpenFormsHeading = ({ level, children }: { level: HeadingLevel; children: React.ReactNode }) =>
  React.createElement(`h${level}`, { className: `utrecht-heading-${level}` }, children);

const meta = {
  title: 'Open Formulieren/Heading',
  component: OpenFormsHeading,
  tags: ['autodocs'],
  args: {
    level: 1,
    children: 'Dit is een koptekst in Open Formulieren',
  },
  argTypes: {
    level: {
      options: [1, 2, 3, 4, 5, 6],
      control: { type: 'select' },
    },
    children: {
      control: { type: 'text' },
    },
  },
  parameters: {
    tokensDefinition: {
      utrecht: {
        ...headingTokens.utrecht,
        ...heading1Tokens.utrecht,
        ...heading2Tokens.utrecht,
        ...heading3Tokens.utrecht,
        ...heading4Tokens.utrecht,
        ...heading5Tokens.utrecht,
      },
    },
    docs: {
      description: {
        component:
          'Kopteksten met de Utrecht-headingklassen die Open Formulieren gebruikt, de SDK-styling en het lokale Den Haag-thema. Het niveau bepaalt zowel het HTML-element als de bijbehorende styling.',
      },
    },
  },
} satisfies Meta<typeof OpenFormsHeading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Level1: Story = {};
export const Level2: Story = { args: { level: 2 } };
export const Level3: Story = { args: { level: 3 } };
export const Level4: Story = { args: { level: 4 } };
export const Level5: Story = { args: { level: 5 } };
export const Level6: Story = { args: { level: 6 } };

export const Mobile: Story = {
  globals: {
    viewport: { value: 'mobile2', isRotated: false },
  },
};
