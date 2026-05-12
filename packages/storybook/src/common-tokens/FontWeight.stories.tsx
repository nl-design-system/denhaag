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
  title: 'Common Tokens/Font Weight',
  tags: ['autodocs', '!dev'],
  component: Paragraph,
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  parameters: {
    chromatic: { disableSnapshot: true },
    docs: {
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

export const Regular: Story = {
  parameters: {
    docs: {
      description: {
        story: `${basisTokens['font-weight'].default.value}<br />${path2css(basisTokens['font-weight'].default.path)}`,
      },
    },
  },
  args: {
    style: { fontWeight: basisTokens['font-weight'].default.value },
  },
};

export const Bold: Story = {
  parameters: {
    docs: {
      description: {
        story: `${basisTokens['font-weight'].bold.value}<br />${path2css(basisTokens['font-weight'].bold.path)}`,
      },
    },
  },
  args: {
    style: { fontWeight: basisTokens['font-weight'].bold.value },
  },
};

export const Heading: Story = {
  parameters: {
    docs: {
      description: {
        story: `${headingTokens['font-weight'].value}<br />${path2css(headingTokens['font-weight'].path)}`,
      },
    },
  },
  args: {
    style: { fontWeight: headingTokens['font-weight'].value },
  },
};

export const FormControl: Story = {
  parameters: {
    docs: {
      description: {
        story: `${formControlTokens['font-weight'].value}<br />${path2css(formControlTokens['font-weight'].path)}`,
      },
    },
  },
  args: {
    style: { fontWeight: formControlTokens['font-weight'].value },
  },
};
