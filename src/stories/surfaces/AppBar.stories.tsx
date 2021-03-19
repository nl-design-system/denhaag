import React from "react";
import { Meta, Story } from "@storybook/react";
import { AppBar, AppBarProps } from "../../components/AppBar";
import pkg from "../../components/AppBar/package.json";
import Toolbar from "../../components/Toolbar/Toolbar";
import { createStyles, IconButton, makeStyles, Theme } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "../../components/Typography/Typography";
import Button from "../../components/Button/Button";

export default {
  title: "Components/Surfaces/AppBar",
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`,
  },
  component: AppBar,
} as Meta;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

const Template: Story<AppBarProps> = (args: any) => {
  const classes = useStyles();

  return (
    <AppBar {...args}>
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
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
  color: "secondary",
};
