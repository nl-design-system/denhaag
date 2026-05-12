import { Meta, StoryObj } from '@storybook/react-vite';
import tokens from '../../../../proprietary/tokens/dist/index.json';
import { Title, Stories } from '@storybook/addon-docs/blocks';
import React from 'react';
import { Paragraph } from '@gemeente-denhaag/paragraph';
import { path2css } from '../denhaag/util';

type Story = StoryObj<typeof meta>;
type Tokens = typeof tokens;
type BasisTokens = Tokens['basis']['text']['line-height'];
type FormControlTokens = Tokens['basis']['form-control']['line-height'];

const basisTokens: BasisTokens = tokens['basis']['text']['line-height'];
const formControlTokens: FormControlTokens = tokens['basis']['form-control']['line-height'];

const meta: Meta = {
  title: 'Common Tokens/Line Height',
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

export const XS: Story = {
  parameters: {
    docs: {
      description: {
        story: `${basisTokens.xs.value}<br />${path2css(basisTokens.xs.path)}`,
      },
    },
  },
  args: {
    style: { lineHeight: basisTokens.xs.value },
  },
};

export const SM: Story = {
  parameters: {
    docs: {
      description: {
        story: `${basisTokens.sm.value}<br />${path2css(basisTokens.sm.path)}`,
      },
    },
  },
  args: {
    style: { lineHeight: basisTokens.sm.value },
  },
};

export const MD: Story = {
  parameters: {
    docs: {
      description: {
        story: `${basisTokens.md.value}<br />${path2css(basisTokens.md.path)}`,
      },
    },
  },
  args: {
    style: { lineHeight: basisTokens.md.value },
  },
};

export const LG: Story = {
  parameters: {
    docs: {
      description: {
        story: `${basisTokens.lg.value}<br />${path2css(basisTokens.lg.path)}`,
      },
    },
  },
  args: {
    style: { lineHeight: basisTokens.lg.value },
  },
};

export const XL: Story = {
  parameters: {
    docs: {
      description: {
        story: `${basisTokens.xl.value}<br />${path2css(basisTokens.xl.path)}`,
      },
    },
  },
  args: {
    style: { lineHeight: basisTokens.xl.value },
  },
};

export const Text2XL: Story = {
  name: '2XL',
  parameters: {
    docs: {
      description: {
        story: `${basisTokens['2xl'].value}<br />${path2css(basisTokens['2xl'].path)}`,
      },
    },
  },
  args: {
    style: { lineHeight: basisTokens['2xl'].value },
  },
};

export const Text3XL: Story = {
  name: '3XL',
  parameters: {
    docs: {
      description: {
        story: `${basisTokens['3xl'].value}<br />${path2css(basisTokens['3xl'].path)}`,
      },
    },
  },
  args: {
    style: { lineHeight: basisTokens['3xl'].value },
  },
};

export const Text4XL: Story = {
  name: '4XL',
  parameters: {
    docs: {
      description: {
        story: `${basisTokens['4xl'].value}<br />${path2css(basisTokens['4xl'].path)}`,
      },
    },
  },
  args: {
    style: { lineHeight: basisTokens['4xl'].value },
  },
};

export const FormControl: Story = {
  parameters: {
    docs: {
      description: {
        story: `${formControlTokens.value}<br />${path2css(formControlTokens.path)}`,
      },
    },
  },
  args: {
    style: { lineHeight: formControlTokens.value },
  },
};
