import React from "react";
import { Meta, Story } from "@storybook/react";
import { Typography, TypographyProps } from "../../components/Typography";
import pkg from "../../components/Typography/package.json";

export default {
  title: "Components/Data Display/Typography",
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`,
  },
  component: Typography,
} as Meta;

const Template: Story<TypographyProps> = (args: any) => (
  <Typography {...args}>
    This is a bit of text inside a Typography component. Play around with the variants property to see me in different
    variants!
  </Typography>
);

/**
 * Implementation of Typography
 */
export const Default = Template.bind({});

/**
 * Heading variant
 */
export const Heading = Template.bind({});
Heading.args = {
  variant: "h1",
};

/**
 * Unwrapped text
 */
export const noWrap = Template.bind({});
noWrap.args = {
  noWrap: true,
};

/**
 * Centered text
 */
export const Centered = Template.bind({});
Centered.args = {
  align: "center",
};

/**
 * Paragraphed text
 */
export const Paragraphed = Template.bind({});
Paragraphed.args = {
  paragraph: true,
};
