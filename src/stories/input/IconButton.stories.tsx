import React from "react";
import { Meta, Story } from "@storybook/react";
import { IconButton, IconButtonProps } from "../../components/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import pkg from "../../components/IconButton/package.json";

export default {
  title: "Components/Input/IconButton",
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`
  },
  component: IconButton
} as Meta;

const Template: Story<IconButtonProps> = (args: any) => (
  <IconButton {...args}>
    <DeleteIcon />
  </IconButton>
);

/**
 * Implementation of IconButton
 */
export const Default = Template.bind({});

/**
 * Implementation of IconButton with primary coloured components.
 */
export const PrimaryColoured = Template.bind({});
PrimaryColoured.args = {
  color: "primary"
};

export const SmallSized = Template.bind({});
SmallSized.args = {
  size: "small"
};
