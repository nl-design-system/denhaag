import React from "react";
import { Meta, Story } from "@storybook/react";
import { Menu, MenuProps } from "@gemeente-denhaag/Menu";
import MenuItem from "@gemeente-denhaag/MenuItem";
import pkg from "@gemeente-denhaag/Menu/package.json";

export default {
  title: "Components/Navigation/Menu",
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`,
  },
  component: Menu,
} as Meta;

let opened = true;

const Template: Story<MenuProps> = (args: any) => (
  <Menu {...args}>
    <MenuItem dense={false} onClick={() => (opened = false)}>
      <p>The &quot;open&quot; property is set to true to force the menu to be visible for demo purposes.</p>
    </MenuItem>
    <MenuItem dense={false} onClick={() => (opened = false)}>
      <span>Click me!</span>
    </MenuItem>
    <MenuItem dense={false} onClick={() => (opened = false)}>
      <span>Or me!</span>
    </MenuItem>
    <MenuItem dense={false} onClick={() => (opened = false)}>
      <span>Or me!</span>
    </MenuItem>
  </Menu>
);

/**
 * Default implementation of the Menu component.
 * "open" property is set to true to force the menu's visibility for demo purposes.
 */
export const Default = Template.bind({});
Default.args = {
  open: opened,
};

/**
 * Menu implemented with 'Menu' variant.
 */
export const MenuVariant = Template.bind({});
MenuVariant.args = {
  open: opened,
  variant: "menu",
};
