import React from "react";
import { Meta, Story } from "@storybook/react";
import { Badge, BadgeProps } from "../../components/Badge";
import MailIcon from "@material-ui/icons/Mail";
import pkg from "../../components/Badge/package.json";

export default {
  title: "Components/Data Display/Badge",
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`,
    docs: {
      source: {
        type: "dynamic",
      }
    }
  },
  component: Badge,
} as Meta;

const Template: Story<BadgeProps> = (args: BadgeProps) => (
  <Badge {...args}>
    <MailIcon />
  </Badge>
);

/**
 * Implementation of Badge
 */
export const Default = Template.bind({});
Default.args = {
  badgeContent: 4,
};

/**
 * Badge having the primary colour.
 */
export const PrimaryColoured = Template.bind({});
PrimaryColoured.args = {
  color: "primary",
  ...Default.args,
};

/**
 * Badge with circled overlap.
 */
export const CircleOverlap = Template.bind({});
CircleOverlap.args = {
  overlap: "circle",
  ...PrimaryColoured.args,
};

/**
 * Badge using the dot variant.
 */
export const DotVariant = Template.bind({});
DotVariant.args = {
  variant: "dot",
  ...PrimaryColoured.args,
};
