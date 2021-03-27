import React from "react";
import { Meta, Story } from "@storybook/react";
import Drawer, { DrawerProps } from "../../components/Drawer";
import Button from "../../components/Button";
import pkg from "../../components/Drawer/package.json";

export default {
  title: "Components/Navigation/Drawer",
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`,
  },
  component: Drawer,
} as Meta;

const Template: Story<DrawerProps> = (args: any) => {
  const [state, setState] = React.useState({
    open: args.open,
  });

  const toggleDrawer = (open: boolean) => {
    setState({ open: open });
  };

  return (
    <div>
      <Button onClick={() => toggleDrawer(true)}>{args.anchor}</Button>
      <Drawer anchor={args.anchor} open={Boolean(state.open)} onClose={() => toggleDrawer(false)}>
        <Button>I am a Button in a Drawer component!</Button>
        <Button>Set the &quot;open&quot; property to false to close me.</Button>
        <Button>Set the &quot;open&quot; property to true to open me.</Button>
      </Drawer>
    </div>
  );
};

/**
 * Implementation of Drawer
 * "open" property is set to true to enforce the Drawer appearing.
 */
export const Default = Template.bind({});
Default.args = {
  open: true,
  anchor: "left",
};

/**
 * Implementation of Drawer anchored at the bottom.
 */
export const BottomDrawer = Template.bind({});
BottomDrawer.args = {
  open: false,
  anchor: "bottom",
};

/**
 * Implementation of Drawer anchored at the top.
 */
export const TopDrawer = Template.bind({});
TopDrawer.args = {
  open: false,
  anchor: "top",
};

/**
 * Implementation of Drawer anchored at the right.
 */
export const RightDrawer = Template.bind({});
RightDrawer.args = {
  open: false,
  anchor: "right",
};
