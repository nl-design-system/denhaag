import React from 'react';
import { Meta, Story } from '@storybook/react';
import Divider, { DividerProps } from '.';
import pkg from '../package.json';
import List, { ListItem, ListItemIcon, ListItemText } from '../../List';
import { InboxIcon, EmailIcon } from '@gemeente-denhaag/icons';
import Grid from '@gemeente-denhaag/grid';

export default {
  title: 'Components/Data Display/Divider',
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`,
    docs: {
      source: {
        type: 'dynamic',
      },
    },
  },
  component: Divider,
} as Meta;

const Template: Story<DividerProps> = (args: DividerProps) => {
  return args.orientation === 'vertical' ? (
    <Grid container>
      <img
        alt="The Lagoon Nebula."
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Lagoon_Nebula.jpg/1024px-Lagoon_Nebula.jpg"
        width={500}
        height={250}
      />
      <Divider {...args} />
      <img
        alt="Four cassette tapes for demonstrating the GridListTile component."
        src="https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/Demos.jpg/1200px-Demos.jpg"
        width={500}
        height={250}
      />
    </Grid>
  ) : (
    <List>
      <ListItem>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="I am above the divider." />
      </ListItem>
      <Divider {...args} />
      <ListItem>
        <ListItemIcon>
          <EmailIcon />
        </ListItemIcon>
        <ListItemText primary="I am under the divider." />
      </ListItem>
    </List>
  );
};

// language=JS
const defaultCode = `
  <List>
    <ListItem button>
      <ListItemIcon>
        <InboxIcon/>
      </ListItemIcon>
      <ListItemText primary="I am above the divider."/>
    </ListItem>
    <Divider/>
    <ListItem button>
      <ListItemIcon>
        <EmailIcon/>
      </ListItemIcon>
      <ListItemText primary="I am under the divider."/>
    </ListItem>
  </List>
`;

// language=JS
const verticalCode = `
  <Grid container>
    <p>I am to the left of the divider.</p>
    <Divider vertical />
    <p>I am to the right of the divider.</p>
  </Grid>
`;

/**
 * Implementation of Divider.
 */
export const Default = Template.bind({});
Default.parameters = {
  docs: {
    source: {
      code: defaultCode,
    },
  },
};

export const Vertical = Template.bind({});
Vertical.args = {
  orientation: 'vertical',
};
Vertical.parameters = {
  docs: {
    source: {
      code: verticalCode,
    },
  },
};
