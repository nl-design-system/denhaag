import { Meta, StoryObj } from '@storybook/react';
import { CaseCard } from '@gemeente-denhaag/card';
import readme from '../../../../components/Card/README.md?raw';
import { templateLocale } from '../templates/util';
import { formatDate, longDateOptions } from '@gemeente-denhaag/utils';
import React from 'react';

type Story = StoryObj<typeof meta>;

const meta: Meta<typeof CaseCard> = {
  component: CaseCard,
  tags: ['autodocs'],
  argTypes: {
    title: {
      type: 'string',
    },
    subTitle: {
      type: 'string',
    },
    context: {
      type: 'string',
    },
    href: {
      type: 'string',
    },
    appearance: {
      type: 'string',
      options: [undefined, 'archived'],
      control: {
        type: 'select',
      },
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

export const Default: Story = {
  args: {
    title: 'Shrimp and Chorizo Paella',
    subTitle: 'This impressive paella is a perfect party dish and a fun meal to cook.',
    context: '',
    href: '#',
  },
};

export const WithDate: Story = {
  args: {
    ...Default.args,
    context: (
      <time dateTime={new Date('2020-01-22').toISOString()}>
        {formatDate({ dateTime: '2020-01-22', locale: templateLocale, format: longDateOptions })[0]}
      </time>
    ),
  },
};

export const WithCaseNumber: Story = {
  args: {
    ...Default.args,
    context: 'VTH-TEST-2024-02437',
  },
};

export const Inactive: Story = {
  args: { ...Default.args, appearance: 'archived' },
};

export const InactiveWithDate: Story = {
  args: {
    ...Default.args,
    appearance: 'archived',
    context: (
      <time dateTime={new Date('2020-01-22').toISOString()}>
        {formatDate({ dateTime: '2020-01-22', locale: templateLocale, format: longDateOptions })[0]}
      </time>
    ),
  },
};

export const InactiveWithCaseNumber: Story = {
  args: {
    ...Default.args,
    appearance: 'archived',
    context: 'VTH-TEST-2024-02437',
  },
};
