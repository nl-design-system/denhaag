import { Meta, StoryObj } from '@storybook/react-vite';
// TODO: vervangen door `import { Card } from '@gemeente-denhaag/card';` zodra
// het package-naamconflict met de oude CaseCard is opgelost.
import { Card } from '../../../../components/Card/src/Card';
import readme from '../../../../components/Card/README.md?raw';
import React from 'react';

type Story = StoryObj<typeof meta>;

const meta: Meta<typeof Card> = {
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    preHeading: {
      type: 'string',
    },
    title: {
      type: 'string',
    },
    headingLevel: {
      type: 'number',
      options: [2, 3, 4, 5, 6],
      control: {
        type: 'select',
      },
    },
    href: {
      type: 'string',
    },
    description: {
      type: 'string',
    },
  },
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
};

export default meta;

const decorators: typeof meta.decorators = [
  (Story) => (
    <div style={{ maxWidth: '360px' }}>
      <Story />
    </div>
  ),
];

export const Default: Story = {
  args: {
    preHeading: 'Doel',
    title: 'Titel van doel 1',
    headingLevel: 2,
    href: '#',
  },
  decorators,
};
