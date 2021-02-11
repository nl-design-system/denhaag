import React from "react";
import { Meta, Story } from "@storybook/react";
import { Divider, DividerProps } from "../../components/datadisplay/Divider/Divider";
import pkg from "../../components/datadisplay/Divider/package.json";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";

export default {
  title: "Components/Data Display/Divider",
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`,
  },
  component: Divider,
} as Meta;

const Template: Story<DividerProps> = (args: any) => (
  <List>
    <ListItem button>
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <ListItemText primary="I am above the divider." />
    </ListItem>
    <Divider {...args} />
    <ListItem button>
      <ListItemIcon>
        <DraftsIcon />
      </ListItemIcon>
      <ListItemText primary="I am under the divider." />
    </ListItem>
  </List>
);

/**
 * Implementation of Divider.
 */
export const Default = Template.bind({});

/**
 * Divider in the inset variant.
 */
export const InsetVariant = Template.bind({});
InsetVariant.args = {
  variant: "inset",
};

/**
 * Divider with a lighter colour.
 */
export const LightColoured = Template.bind({});
LightColoured.args = {
  light: true,
};

/**
 * Divider with an absolute position.
 */
export const AbsolutePosition = Template.bind({});
AbsolutePosition.args = {
  absolute: true,
};
