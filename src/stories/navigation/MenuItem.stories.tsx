import React from "react";
import { Meta, Story } from "@storybook/react";
import { MenuItem, MenuItemProps } from "../../components/MenuItem/MenuItem";
import Menu from "../../components/Menu/Menu";
import pkg from "../../components/MenuItem/package.json";

export default {
  title: "Components/Navigation/Menu/MenuItem",
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`,
  },
  component: MenuItem,
} as Meta;

const Template: Story<MenuItemProps> = (args: any) => (
  <Menu open anchorEl={null}>
    <MenuItem {...args}>
      <p>This is a MenuItem.</p>
    </MenuItem>
  </Menu>
);

/**
 * Implementation of MenuItem
 */
export const Default = Template.bind({});

/**
 * Implementation with compact virtual padding.
 */
export const DenseMenu = Template.bind({});
DenseMenu.args = {
  dense: true,
};

/**
 * Implementation without gutters
 */
export const DisabledGutter = Template.bind({});
DisabledGutter.args = {
  disableGutters: true,
};
