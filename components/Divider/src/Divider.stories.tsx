import React from 'react';
import { Meta, Story } from '@storybook/react';
import Divider, { DividerProps } from './index';
import pkg from '../package.json';
import List, { ListItem, ListSubheader } from '../../List';
import { InboxIcon, EmailIcon } from '@gemeente-denhaag/icons';

export default {
  title: 'Components/Data Display/Divider',
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`,
    docs: {
      source: {
        type: 'dynamic',
      },
    },
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
  component: Divider,
} as Meta;

const Template: Story<DividerProps> = (args: DividerProps) => {
  return args.orientation === 'vertical' ? (
    <div style={{ display: 'flex' }}>
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
    </div>
  ) : (
    <List subheader={<ListSubheader>Divider showcase</ListSubheader>}>
      <ListItem primaryText="I am above the divider." leftIcon={<InboxIcon />}></ListItem>
      <Divider {...args} />
      <ListItem primaryText="I am under the divider." leftIcon={<EmailIcon />}></ListItem>
    </List>
  );
};

// language=JS
const defaultCode = `
<List subheader={<ListSubheader>Divider showcase</ListSubheader>}>
  <ListItem primaryText="I am above the divider." leftIcon={<InboxIcon />}></ListItem>
  <Divider/>
  <ListItem primaryText="I am under the divider." leftIcon={<EmailIcon />}></ListItem>
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
