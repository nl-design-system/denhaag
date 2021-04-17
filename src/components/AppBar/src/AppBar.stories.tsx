import React from "react";
import { Meta, Story } from "@storybook/react";
import MenuIcon from "@material-ui/icons/Menu";
import AppBar, { AppBarProps } from ".";
import Toolbar from "../../Toolbar";
import IconButton from "../../IconButton";
import Typography from "../../Typography";
import Button from "../../Button";
import pkg from "../package.json";

export default {
  title: "Components/Surfaces/AppBar",
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`
  },
  component: AppBar
} as Meta;

const Template: Story<AppBarProps> = (args: any) => {
  return (
    <AppBar {...args}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">News</Typography>
      </Toolbar>
      <Button>I am a button!</Button>
    </AppBar>
  );
};

/**
 * Implementation of AppBar
 */
export const Default = Template.bind({});
Default.args = {
  position: "relative"
};

/**
 * Statically positioned AppBar
 */
export const StaticPosition = Template.bind({});
StaticPosition.args = {
  position: "static"
};

/**
 * A statically coloured AppBar
 */
export const SecondaryColoured = Template.bind({});
SecondaryColoured.args = {
  position: "static",
  color: "secondary"
};
