import React from "react";
import { Meta, Story } from "@storybook/react";
import { SwipeableDrawer, SwipeableDrawerProps } from "../../components/SwipeableDrawer";
import Button from "../../components/Button/Button";
import pkg from "../../components/SwipeableDrawer/package.json";

export default {
  title: "Components/Navigation/SwipeableDrawer",
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`,
  },
  component: SwipeableDrawer,
} as Meta;

const Template: Story<SwipeableDrawerProps> = (args: any) => (
  <SwipeableDrawer {...args}>
    <p>This Drawer is swipeable, drag it to hide it.</p>
    <Button>Push me or swipe me on a phone!</Button>
  </SwipeableDrawer>
);

/**
 * Implementation of SwipeableDrawer
 */
export const Default = Template.bind({});
Default.args = {
  open: true,
};
