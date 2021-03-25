import React from "react";
import { Meta, Story } from "@storybook/react";
import Box, { BoxProps } from "@gemeente-denhaag/Box";
import pkg from "@gemeente-denhaag/Box/package.json";

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
