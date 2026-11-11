import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Header } from '@gemeente-denhaag/header';
import tokensDefinition from '../../../../proprietary/tokens/src/components/openforms/page-header.tokens.json';
import './styles';
import './header.scss';

const meta = {
  title: 'Open Formulieren/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    tokensDefinition,
    docs: {
      description: {
        component:
          'De bestaande Den Haag-header met de Open Formulieren-SDK-styling en het lokale Den Haag-thema voor Open Formulieren. Dit voorbeeld toont de formulierheader met het gemeentelogo; menu’s kunnen via de Header-props worden toegevoegd.',
      },
    },
  },
  render: (args) => (
    <div className="openforms-page-header">
      <Header {...args} />
    </div>
  ),
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Mobile: Story = {
  globals: {
    viewport: { value: 'mobile2', isRotated: false },
  },
};
