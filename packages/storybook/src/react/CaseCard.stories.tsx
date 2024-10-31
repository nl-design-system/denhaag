import { Meta, StoryObj } from '@storybook/react';
import { CaseCard } from '@gemeente-denhaag/card';

import readme from '../../../../components/Card/README.md?raw';
import { templateLocale } from '../templates/util';

const exampleArgs = {
  title: 'Shrimp and Chorizo Paella',
  subTitle: 'This impressive paella is a perfect party dish and a fun meal to cook.',
  href: '#',
};

const meta = {
  id: 'react-cards-case-card',
  title: 'React/Cards/Case Card',
  component: CaseCard,
  args: exampleArgs,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof CaseCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithDate: Story = {
  args: { ...Default.args, date: '2020-01-22', locale: templateLocale },
};

export const Inactive: Story = {
  args: { ...Default.args, active: false },
};
