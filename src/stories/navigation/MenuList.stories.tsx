import React from "react";
import { Meta, Story } from "@storybook/react";
import MenuList, { MenuListProps } from "../../components/MenuList";
import MenuItem from "../../components/MenuItem";
import pkg from "../../components/MenuList/package.json";

export default {
  title: "Components/Navigation/Menu/MenuList",
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`,
  },
  component: MenuList,
} as Meta;

const Template: Story<MenuListProps> = (args: any) => (
  <MenuList {...args}>
    <MenuItem>
      <p>This is a MenuItem in a MenuList.</p>
    </MenuItem>
  </MenuList>
);

/**
 * Implementation of MenuList
 */
export const Default = Template.bind({});

/**
 * Implementation of MenuList with menu variant.
 */
export const MenuVariant = Template.bind({});
MenuVariant.args = {
  variant: "menu",
};
