import React from "react";
import { Meta, Story } from "@storybook/react";
import pkg from "../../components/List/package.json";
import List, { ListProps } from "../../components/List";
import ListItem from "../../components/ListItem";
import ListItemAvatar from "../../components/ListItemAvatar";
import ListItemIcon from "../../components/ListItemIcon";
import ListItemSecondaryAction from "../../components/ListItemSecondaryAction";
import ListItemText from "../../components/ListItemText";
import ListSubheader from "../../components/ListSubheader";
import Checkbox from "../../components/Checkbox";
import IconButton from "../../components/IconButton";
import Avatar from "../../components/Avatar";
import CommentIcon from "@material-ui/icons/Comment";
import FolderIcon from "@material-ui/icons/Folder";

export default {
  title: "Components/Data Display/List",
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`,
    docs: {
      source: {
        type: "code"
      }
    }
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
