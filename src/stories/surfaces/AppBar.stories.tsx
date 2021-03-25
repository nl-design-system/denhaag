import React from "react";
import { Meta, Story } from "@storybook/react";
import MenuIcon from "@material-ui/icons/Menu";
import { AppBar, AppBarProps } from "../../components/AppBar";
import pkg from "../../components/AppBar/package.json";
import Toolbar from "../../components/Toolbar/Toolbar";
import IconButton from "../../components/IconButton";
import Typography from "../../components/Typography";
import Button from "../../components/Button";

export default {
  title: "Components/Surfaces/AppBar",
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`,
    docs: {
      source: {
        type: "code"
      }
    }
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
