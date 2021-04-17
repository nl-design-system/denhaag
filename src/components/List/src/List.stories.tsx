import React from "react";
import { Meta, Story } from "@storybook/react";
import pkg from "../package.json";
import List, {
  ListProps,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  ListSubheader,
} from ".";
import Checkbox from "../../Checkbox";
import IconButton from "../../IconButton";
import Avatar from "../../Avatar";
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
