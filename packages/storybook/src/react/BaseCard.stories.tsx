import { Meta, StoryObj } from '@storybook/react-vite';
// TODO: change to @gemeente-denhaag/base-card package when published
import { BaseCard } from '../../../../components/BaseCard/src/BaseCard';
import readme from '../../../../components/BaseCard/README.md?raw';
import { templateLocale } from '../templates/util';
import { formatDate, longDateOptions } from '@gemeente-denhaag/utils';
import React from 'react';

type Story = StoryObj<typeof meta>;

const meta: Meta<typeof BaseCard> = {
  title: 'React/BaseCard',
  component: BaseCard,
  tags: ['autodocs'],
  argTypes: {
    eyebrow: {
      type: 'string',
    },
    title: {
      type: 'string',
    },
    subTitle: {
      type: 'string',
    },
    headingLevel: {
      control: 'select',
      options: [undefined, 2, 3, 4, 5, 6],
    },
    context: {
      type: 'string',
    },
    href: {
      type: 'string',
    },
    appearance: {
      type: 'string',
      options: [undefined, 'archived', 'list'],
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

const decorators: typeof meta.decorators = [
  (Story) => (
    <div style={{ maxWidth: '360px' }}>
      <Story />
    </div>
  ),
];

export const Default: Story = {
  args: {
    title: 'Shrimp and Chorizo Paella',
    subTitle: 'This impressive paella is a perfect party dish and a fun meal to cook.',
    context: '',
    href: '#',
  },
  decorators,
};

export const WithEyebrow: Story = {
  args: {
    ...Default.args,
    eyebrow: 'Lopende aanvraag',
  },
  decorators,
};

export const WithHeadingLevel: Story = {
  args: {
    ...Default.args,
    eyebrow: 'Lopende aanvraag',
    headingLevel: 2,
  },
  decorators,
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
  decorators,
};

export const WithBaseNumber: Story = {
  args: {
    ...Default.args,
    context: 'VTH-TEST-2024-02437',
  },
  decorators,
};

export const Inactive: Story = {
  args: { ...Default.args, appearance: 'archived' },
  decorators,
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
  decorators,
};

export const InactiveWithBaseNumber: Story = {
  args: {
    ...Default.args,
    appearance: 'archived',
    context: 'VTH-TEST-2024-02437',
  },
  decorators,
};

export const List: Story = {
  args: {
    ...Default.args,
    appearance: 'list',
  },
};

export const ListWithDate: Story = {
  args: {
    ...Default.args,
    appearance: 'list',
    context: (
      <time dateTime={new Date('2020-01-22').toISOString()}>
        {formatDate({ dateTime: '2020-01-22', locale: templateLocale, format: longDateOptions })[0]}
      </time>
    ),
  },
};

export const ListWithBaseNumber: Story = {
  args: {
    ...Default.args,
    appearance: 'list',
    context: 'VTH-TEST-2024-02437',
  },
};

export const Hover: Story = {
  args: {
    ...Default.args,
  },
  decorators,
  parameters: {
    pseudo: { hover: true },
  },
};

export const Active: Story = {
  args: {
    ...Default.args,
  },
  decorators,
  parameters: {
    pseudo: { active: true },
  },
};
