import React from "react";
import { Meta, Story } from "@storybook/react";
import Hidden, { HiddenProps } from "../../components/Hidden";
import pkg from "../../components/Hidden/package.json";

export default {
  title: "Components/Layout/Hidden",
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`,
    docs: {
      source: {
        type: "code"
      }
    }
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
