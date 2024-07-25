import { Meta, StoryObj } from '@storybook/react';
import { SubjectCard } from '@gemeente-denhaag/card';

import readme from '../../../../components/Card/README.md?raw';

const exampleArgs = {
  title: 'Shrimp and Chorizo Paella',
  subTitle: 'This impressive paella is a perfect party dish and a fun meal to cook.',
  href: '#',
};

const meta = {
  id: 'react-cards-subject-card',
  title: 'React/Cards/Subject Card',
  component: SubjectCard,
  args: exampleArgs,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof SubjectCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithDate: Story = {
  args: { ...Default.args, date: '2020-01-21' },
};
