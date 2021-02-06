import React from "react";
import { Meta, Story } from "@storybook/react";
import { Drawer, DrawerProps } from "../../components/navigation/Drawer/Drawer";
import Button from "../../components/input/Button/Button";
import pkg from "../../components/navigation/Drawer/package.json";

export default {
  title: "Components/Navigation/Drawer",
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`,
  },
  component: Drawer,
} as Meta;

const Template: Story<DrawerProps> = (args: any) => (
  <Drawer {...args}>
    <Button>I am a Button in a Drawer component!</Button>
    <Button>Set the &quot;open&quot; property to false to close me.</Button>
    <Button>Set the &quot;open&quot; property to true to open me.</Button>
  </Drawer>
);

/**
 * Implementation of Drawer
 * "open" property is set to true to enforce the Drawer appearing.
 */
export const Default = Template.bind({});
Default.args = {
  open: true,
};

/**
 * Implementation of Drawer anchored at the bottom.
 */
export const BottomDrawer = Template.bind({});
BottomDrawer.args = {
  open: true,
  anchor: "bottom",
};

/**
 * Implementation of Drawer anchored at the top.
 */
export const TopDrawer = Template.bind({});
TopDrawer.args = {
  open: true,
  anchor: "top",
};

/**
 * Implementation of Drawer anchored at the right.
 */
export const RightDrawer = Template.bind({});
RightDrawer.args = {
  open: true,
  anchor: "right",
};
