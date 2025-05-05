import { Meta, StoryObj } from '@storybook/react';
import { CaseCard } from '@gemeente-denhaag/card';
import readme from '../../../../components/Card/README.md?raw';
import { templateLocale } from '../templates/util';

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
    date: {
      type: 'string',
      control: {
        type: 'date',
      },
    },
    dateLabels: {
      control: {
        type: 'object',
      },
    },
    locale: {
      type: 'string',
      options: [undefined, 'nl-NL', 'en-US'],
      control: {
        type: 'select',
      },
    },
    href: {
      type: 'string',
    },
    active: {
      type: 'boolean',
      options: [true, false],
      control: {
        type: 'radio',
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
    href: '#',
  },
};

export const WithDate: Story = {
  args: { ...Default.args, date: '2020-01-22', locale: templateLocale },
};

export const Inactive: Story = {
  args: { ...Default.args, active: false },
};
