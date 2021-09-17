import React from 'react';
import { Meta, Story } from '@storybook/react';
import Card, { CardProps } from '..';
import pkg from '../../package.json';

export default {
  title: 'Components/Cards/Card',
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`,
  },
  component: Card,
} as Meta;

const Template: Story<CardProps> = (args: CardProps) => <Card {...args} />;

/**
 * Implementation of Card
 */
export const Default: Story<CardProps> = Template.bind({});
Default.args = {
  title: 'Shrimp and Chorizo Paella',
  subTitle: 'This impressive paella is a perfect party dish and a fun meal to cook.',
  date: new Date('2020-01-21'),
  href: 'https://github.com',
};

/**
 * Case variant of Card component
 */
export const Case: Story<CardProps> = Template.bind({});
Case.args = {
  title: Default.args.title,
  subTitle: Default.args.subTitle,
  date: Default.args.date,
  variant: 'case',
};
