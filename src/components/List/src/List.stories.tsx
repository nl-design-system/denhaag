import React from "react";
import { Meta, Story } from "@storybook/react";
import Checkbox from "@gemeente-denhaag/checkbox";
import IconButton from "@gemeente-denhaag/iconbutton";
import Avatar from "@gemeente-denhaag/avatar";
import { ArchiveIcon, MessageIcon } from "@gemeente-denhaag/icons";
import List, {
  ListProps,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  ListSubheader,
} from ".";
import pkg from "../package.json";

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
          <MessageIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
    <ListItem button>
      <ListItemAvatar>
        <Avatar>
          <ArchiveIcon />
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
        <MessageIcon/>
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
  <ListItem button>
    <ListItemAvatar>
      <Avatar>
        <ArchiveIcon/>
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
        <MessageIcon/>
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
  <ListItem button>
    <ListItemAvatar>
      <Avatar>
        <ArchiveIcon/>
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
        <MessageIcon/>
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
  <ListItem button>
    <ListItemAvatar>
      <Avatar>
        <ArchiveIcon/>
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
        <MessageIcon/>
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
  <ListItem button>
    <ListItemAvatar>
      <Avatar>
        <ArchiveIcon/>
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
