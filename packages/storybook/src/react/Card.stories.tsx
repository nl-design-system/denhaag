import React from 'react';
import { Meta, Story } from '@storybook/react';
import Card, { CardProps } from '../index';
import pkg from '../../package.json';
import SubjectCard, { SubjectCardProps } from '../Card/SubjectCard';
import CaseCard, { CaseCardProps } from '../Card/CaseCard';

export default {
  title: 'React/Cards/Card',
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`,
    status: {
      type: 'ALPHA',
    },
  },
  component: Card,
} as Meta;

const Template: Story<SubjectCardProps> = (args: CardProps) => <SubjectCard {...args} />;

const CaseTemplate: Story<CaseCardProps> = (args: CaseCardProps) => <CaseCard {...args} />;

/**
 * Implementation of Card
 */
export const Default: Story<SubjectCardProps> = Template.bind({});
Default.args = {
  title: 'Shrimp and Chorizo Paella',
  subTitle: 'This impressive paella is a perfect party dish and a fun meal to cook.',
  date: new Date('2020-01-21'),
  href: '#',
};

/**
 * Default variant of Card component without date
 */
export const CardWithoutDate: Story<SubjectCardProps> = Template.bind({});
CardWithoutDate.args = {
  title: Default.args.title,
  subTitle: Default.args.subTitle,
  href: '#',
};

/**
 * Case active variant of Card component
 */
export const CaseActive: Story<CaseCardProps> = CaseTemplate.bind({});
CaseActive.args = {
  title: Default.args.title,
  subTitle: Default.args.subTitle,
  date: Default.args.date,
  href: '#',
};

/**
 * Case variant of Card component
 */
export const CaseInactive: Story<CaseCardProps> = CaseTemplate.bind({});
CaseInactive.args = {
  title: Default.args.title,
  subTitle: Default.args.subTitle,
  date: Default.args.date,
  active: false,
  href: '#',
};
