import React from "react";
import { Meta, Story } from "@storybook/react";
import Hidden, { HiddenProps } from "@gemeente-denhaag/Hidden";
import pkg from "@gemeente-denhaag/Hidden/package.json";

export default {
  title: "Components/Layout/Hidden",
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`,
  },
  component: Hidden,
} as Meta;

const Template: Story<HiddenProps> = (args: any) => (
  <Hidden {...args}>
    <p>This text is hidden.</p>
  </Hidden>
);

/**
 * Default Hidden
 */
export const Default = Template.bind({});
