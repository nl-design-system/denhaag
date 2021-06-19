import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Typography } from '@material-ui/core';
import { Paper, PaperProps } from '@gemeente-denhaag/card';
import pkg from '../../package.json';

export default {
  title: 'Components/Cards/Paper',
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`,
    docs: {
      source: {
        type: 'dynamic',
      },
    },
  },
  component: Paper,
} as Meta;

const Template: Story<PaperProps> = (args: PaperProps) => (
  <Paper {...args}>
    <Typography>Paper content</Typography>
  </Paper>
);

/**
 * Implementation of Paper.
 */
export const Default = Template.bind({});

/**
 * A Paper component which is outlined instead of elevated.
 */
export const Outlined = Template.bind({});
Outlined.args = {
  variant: 'outlined',
};

/**
 * A Paper component with square edges.
 */
export const Squared = Template.bind({});
Squared.args = {
  square: true,
};

/**
 * A Paper component with maximal elevation.
 */
export const MaxElevated = Template.bind({});
MaxElevated.args = {
  elevation: 24,
};
