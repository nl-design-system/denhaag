import { Meta, StoryObj } from '@storybook/react-vite';
import tokens from '../../../../proprietary/tokens/dist/index.json';
import { Stories, Title } from '@storybook/addon-docs/blocks';
import React from 'react';
import { path2css } from '../denhaag/util';
import { Paragraph } from '@gemeente-denhaag/paragraph';

type Story = StoryObj<typeof meta>;
type Tokens = typeof tokens;
type TextTokens = Tokens['basis']['text'];
type HeadingTokens = Tokens['basis']['heading'];
type FormControlTokens = Tokens['basis']['form-control'];

const basisTokens: TextTokens = tokens['basis']['text'];
const headingTokens: HeadingTokens = tokens['basis']['heading'];
const formControlTokens: FormControlTokens = tokens['basis']['form-control'];

const meta: Meta = {
  title: 'Common Tokens/Font Family',
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

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: `${basisTokens['font-family'].default.value}<br />${path2css(basisTokens['font-family'].default.path)}`,
      },
    },
  },
  args: {
    style: { fontFamily: basisTokens['font-family'].default.value },
  },
};

export const Monospace: Story = {
  parameters: {
    docs: {
      description: {
        story: `${basisTokens['font-family'].monospace.value}<br />${path2css(basisTokens['font-family'].monospace.path)}`,
      },
    },
  },
  args: {
    style: { fontFamily: basisTokens['font-family'].monospace.value },
  },
};

export const Heading: Story = {
  parameters: {
    docs: {
      description: {
        story: `${headingTokens['font-family'].value}<br />${path2css(headingTokens['font-family'].path)}`,
      },
    },
  },
  args: {
    style: { fontFamily: headingTokens['font-family'].value },
  },
};

export const FormControl: Story = {
  parameters: {
    docs: {
      description: {
        story: `${formControlTokens['font-family'].value}<br />${path2css(formControlTokens['font-family'].path)}`,
      },
    },
  },
  args: {
    style: { fontFamily: formControlTokens['font-family'].value },
  },
};
