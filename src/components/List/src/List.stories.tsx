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
import { ArchiveIcon, ChevronRightIcon, HouseIcon, TrashIcon } from "@gemeente-denhaag/icons";

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
          <HouseIcon />
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


const FigmaTemplate: Story<ListProps> = (args: ListProps) => (
  <List {...args}>
    <ListItem dense>
      <ListItemIcon >
          <HouseIcon />
      </ListItemIcon>
      <ListItemText primary="List item" />
      <ListItemSecondaryAction>
        <IconButton color="inherit" edge="end" aria-label="comments">
          <ChevronRightIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
    <ListItem button>
      <ListItemIcon >
        <HouseIcon color="inherit" />
      </ListItemIcon>
      <ListItemSecondaryAction>
        <IconButton color="inherit" edge="end" aria-label="comments">
          <TrashIcon />
        </IconButton>
      </ListItemSecondaryAction>
      <ListItemText primary="Single-line item" secondary="Secondary text" />
    </ListItem>
  </List>
);


/**
 * Simple list
 */
export const SimpleList = FigmaTemplate.bind({});
SimpleList.args = {
  subheader: <ListSubheader component="div">Nested Subheader</ListSubheader>,
};
SimpleList.parameters = {
  docs: {
    source: {
      // language=HTML
      code: subheaderCode,
    },
  },
};