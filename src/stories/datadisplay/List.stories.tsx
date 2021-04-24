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
        type: "dynamic",
      },
    },
  },
  component: List,
} as Meta;

const Template: Story<ListProps> = (args: ListProps) => (
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

// language=JS
const defaultCode = `
<List>
  <ListItem dense>
    <ListItemIcon>
      <Checkbox/>
    </ListItemIcon>
    <ListItemText primary='Line item'/>
    <ListItemSecondaryAction>
      <IconButton edge='end' aria-label='comments'>
        <CommentIcon/>
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
  <ListItem button>
    <ListItemAvatar>
      <Avatar>
        <FolderIcon/>
      </Avatar>
    </ListItemAvatar>
    <ListItemText primary='Single-line item' secondary='Secondary text'/>
  </ListItem>
</List>
`;

// language=JS
const denseCode = `
<List dense>
  <ListItem dense>
    <ListItemIcon>
      <Checkbox/>
    </ListItemIcon>
    <ListItemText primary="Line item"/>
    <ListItemSecondaryAction>
      <IconButton edge="end" aria-label="comments">
        <CommentIcon/>
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
  <ListItem button>
    <ListItemAvatar>
      <Avatar>
        <FolderIcon/>
      </Avatar>
    </ListItemAvatar>
    <ListItemText primary="Single-line item" secondary="Secondary text"/>
  </ListItem>
</List>
`;

// language=JS
const paddingCode = `
<List disablePadding>
  <ListItem dense>
    <ListItemIcon>
      <Checkbox/>
    </ListItemIcon>
    <ListItemText primary="Line item"/>
    <ListItemSecondaryAction>
      <IconButton edge="end" aria-label="comments">
        <CommentIcon/>
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
  <ListItem button>
    <ListItemAvatar>
      <Avatar>
        <FolderIcon/>
      </Avatar>
    </ListItemAvatar>
    <ListItemText primary="Single-line item" secondary="Secondary text"/>
  </ListItem>
</List>
`;

// language=JS
const subheaderCode = `
<List subheader="<ListSubheader component='div'>Nested Subheader</ListSubheader>">
  <ListItem dense>
    <ListItemIcon>
      <Checkbox/>
    </ListItemIcon>
    <ListItemText primary="Line item"/>
    <ListItemSecondaryAction>
      <IconButton edge="end" aria-label="comments">
        <CommentIcon/>
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
  <ListItem button>
    <ListItemAvatar>
      <Avatar>
        <FolderIcon/>
      </Avatar>
    </ListItemAvatar>
    <ListItemText primary="Single-line item" secondary="Secondary text"/>
  </ListItem>
</List>
`;

/**
 * Implementation of List.
 */
export const Default = Template.bind({});
Default.parameters = {
  docs: {
    source: {
      code: defaultCode,
    },
  },
};

/**
 * Dense variant of List component
 */
export const Dense = Template.bind({});
Dense.args = {
  dense: true,
};
Dense.parameters = {
  docs: {
    source: {
      code: denseCode,
    },
  },
};

/**
 * Variant of List component with padding disabled
 */
export const PaddingDisabled = Template.bind({});
PaddingDisabled.args = {
  disablePadding: true,
};
PaddingDisabled.parameters = {
  docs: {
    source: {
      code: paddingCode,
    },
  },
};

/**
 * Variant of List component with Subheader
 */
export const Subheader = Template.bind({});
Subheader.args = {
  subheader: <ListSubheader component="div">Nested Subheader</ListSubheader>,
};
Subheader.parameters = {
  docs: {
    source: {
      // language=HTML
      code: subheaderCode,
    },
  },
};
