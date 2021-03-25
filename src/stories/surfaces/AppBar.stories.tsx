import React from "react";
import { Meta, Story } from "@storybook/react";
import { AppBar, AppBarProps } from "@gemeente-denhaag/AppBar";
import pkg from "@gemeente-denhaag/AppBar/package.json";
import Toolbar from "@gemeente-denhaag/Toolbar";
import { IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@gemeente-denhaag/Typography";
import Button from "@gemeente-denhaag/button";

export default {
  title: "Components/Surfaces/AppBar",
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`,
  },
  component: AppBar,
} as Meta;

const Template: Story<AppBarProps> = (args: any) => {
  return (
    <AppBar {...args}>
      <Toolbar>
        <IconButton edge="start"  color="inherit" aria-label="menu">
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
  position: "relative",
}

/**
 * Statically positioned AppBar
 */
export const StaticPosition = Template.bind({});
StaticPosition.args = {
  position: "static",
};

/**
 * A statically coloured AppBar
 */
export const SecondaryColoured = Template.bind({});
SecondaryColoured.args = {
  position: "static",
  color: "secondary",
};
