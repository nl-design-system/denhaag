import React from "react";
import { Meta, Story } from "@storybook/react";
import pkg from "@gemeente-denhaag/List/package.json";
import List, { ListProps } from "@gemeente-denhaag/List";
import ListItem from "@gemeente-denhaag/ListItem";
import ListItemAvatar from "@gemeente-denhaag/ListItemAvatar";
import ListItemIcon from "@gemeente-denhaag/ListItemIcon";
import ListItemSecondaryAction from "@gemeente-denhaag/ListItemSecondaryAction";
import ListItemText from "@gemeente-denhaag/ListItemText";
import ListSubheader from "@gemeente-denhaag/ListSubheader";
import Checkbox from "@gemeente-denhaag/Checkbox";
import { IconButton, Avatar } from "@material-ui/core";
import CommentIcon from "@material-ui/icons/Comment";
import FolderIcon from "@material-ui/icons/Folder";

export default {
  title: "Components/Data Display/List",
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`,
  },
  component: List,
} as Meta;

const Template: Story<ListProps> = (args: any) => (
  <List {...args}>
    <ListItem dense>
      <ListItemIcon>
        <Checkbox />
      </ListItemIcon>
      <ListItemText primary="Line item" />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="comments">
          <CommentIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
    <ListItem button>
      <ListItemAvatar>
        <Avatar>
          <FolderIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary="Single-line item" secondary="Secondary text" />
    </ListItem>
  </List>
);

/**
 * Implementation of List.
 */
export const Default = Template.bind({});

/**
 * Dense variant of List component
 */
export const Dense = Template.bind({});
Dense.args = {
  dense: true,
};

/**
 * Variant of List component with padding disabled
 */
export const PaddingDisabled = Template.bind({});
PaddingDisabled.args = {
  disablePadding: true,
};

/**
 * Variant of List component with Subheader
 */
export const Subheader = Template.bind({});
Subheader.args = {
  subheader: <ListSubheader component="div">Nested Subheader</ListSubheader>,
};
