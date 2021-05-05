import React from "react";
import { Meta, Story } from "@storybook/react";
import { HamburgerIcon } from "@gemeente-denhaag/icons";
import AppBar, { AppBarProps } from ".";
import Toolbar from "../../Toolbar";
import IconButton from "../../IconButton";
import Typography from "../../Typography";
import Button from "../../Button";
import pkg from "../package.json";

export default {
  title: 'Components/Surfaces/AppBar',
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`,
    docs: {
      source: {
        type: 'dynamic',
      },
    },
  },
  component: AppBar,
} as Meta;

const Template: Story<AppBarProps> = (args: AppBarProps) => {
  return (
    <AppBar {...args}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <HamburgerIcon />
        </IconButton>
        <Typography variant="h6">News</Typography>
      </Toolbar>
      <Button>I am a button!</Button>
    </AppBar>
  );
};

// language=JS
const defaultCode = `
<AppBar position='relative'>
  <Toolbar>
    <IconButton edge="start" color="inherit" aria-label="menu">
      <HamburgerIcon/>
    </IconButton>
    <Typography variant="h6">News</Typography>
  </Toolbar>
  <Button>I am a button!</Button>
</AppBar>
`;

/**
 * Implementation of AppBar
 */
export const Default = Template.bind({});
Default.args = {
  position: 'relative',
};

Default.parameters = {
  docs: {
    source: {
      code: defaultCode,
    },
  },
};

// language=JS
const staticCode = `
<AppBar position='static'>
  <Toolbar>
    <IconButton edge="start" color="inherit" aria-label="menu">
      <HamburgerIcon/>
    </IconButton>
    <Typography variant="h6">News</Typography>
  </Toolbar>
  <Button>I am a button!</Button>
</AppBar>
`;

/**
 * Statically positioned AppBar
 */
export const StaticPosition = Template.bind({});
StaticPosition.args = {
  position: 'static',
};

StaticPosition.parameters = {
  docs: {
    source: {
      code: staticCode,
    },
  },
};

// language=JS
const secondaryCode = `
<AppBar position='static' color={'secondary'}>
  <Toolbar>
    <IconButton edge="start" color="inherit" aria-label="menu">
      <HamburgerIcon/>
    </IconButton>
    <Typography variant="h6">News</Typography>
  </Toolbar>
  <Button>I am a button!</Button>
</AppBar>
`;

/**
 * A statically coloured AppBar
 */
export const SecondaryColoured = Template.bind({});
SecondaryColoured.args = {
  position: 'static',
  color: 'secondary',
};
SecondaryColoured.parameters = {
  docs: {
    source: {
      code: secondaryCode,
    },
  },
};
