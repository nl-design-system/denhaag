import React from "react";
import { Meta, Story } from "@storybook/react";
import pkg from "../../components/Paper/package.json";
import Paper, { PaperProps } from "../../components/Paper/Paper";
import Typography from "../../components/Typography/Typography";

export default {
  title: "Components/Surfaces/Paper",
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`,
  },
  component: Paper,
} as Meta;

const Template: Story<PaperProps> = (args: any) => (
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
  variant: "outlined",
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
