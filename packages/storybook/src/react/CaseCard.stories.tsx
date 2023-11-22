import { Meta, StoryObj } from '@storybook/react';
import { CaseCard } from '@gemeente-denhaag/card';

import readme from '../../../../components/Card/README.md';

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
    chromatic: { viewports: [1768, 1280, 768, 360] },
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
  args: { ...Default.args, date: new Date('2020-01-21') },
};

export const Inactive: Story = {
  args: { ...Default.args, active: false },
};
