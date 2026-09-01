import { Meta, StoryObj } from '@storybook/react-vite';
import { TaskWrapper } from '../../../../components/TaskWrapper/src';
import readme from '../../../../components/TaskWrapper/README.md?raw';
import { ActionSingle } from '@gemeente-denhaag/action';
import { DataBadge } from '@gemeente-denhaag/data-badge';
import { templateLocale } from '../templates/util';
import React from 'react';

type Story = StoryObj<typeof meta>;

const meta: Meta<typeof TaskWrapper> = {
  component: TaskWrapper,
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

const labels = {
  today: 'vandaag',
  yesterday: 'gisteren',
  before: 'vóór',
  approachingDeadline: (daysDifference: number) => {
    if (daysDifference === 1) {
      return `nog ${daysDifference} dag`;
    }
    return `nog ${daysDifference} dagen`;
  },
};

export const Default: Story = {
  args: {
    preHeading: 'Doel',
    title: 'Gezonde levensstijl ontwikkelen',
    headingLevel: 2,
    href: '#',
  },
  decorators,
};

export const WithStatusAndAction: Story = {
  args: {
    ...Default.args,
    status: <DataBadge status="neutral">Nieuw</DataBadge>,

    children: (
      <ActionSingle link="#" dateTime="2026-03-15T00:00:00.000Z" locale={templateLocale} labels={labels}>
        <strong>Aanmelden training ‘Goed eten voor weinig geld’</strong>
      </ActionSingle>
    ),

    headingLevel: 4,
  },
  decorators,
};
