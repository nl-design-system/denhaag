import React from "react";
import { Meta, Story } from "@storybook/react";
import Box, { BoxProps } from "../../components/layout/Box/Box";
import pkg from "../../components/layout/Box/package.json";

export default {
  title: "Components/Layout/Box",
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`,
  },
  component: Box,
} as Meta;

const Template: Story<BoxProps> = (args: any) => (
  <Box {...args}>
    <p>This is a Box component.</p>
  </Box>
);

/**
 * Implementation of Box
 */
export const Default = Template.bind({});
