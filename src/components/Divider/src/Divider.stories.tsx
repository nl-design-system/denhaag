import React from 'react';
import { Meta, Story } from '@storybook/react';
import Divider, { DividerProps } from '.';
import pkg from '../package.json';
import List, { ListItem, ListItemIcon, ListItemText } from '../../List';
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
  },
  component: Divider,
} as Meta;

const Template: Story<DividerProps> = (args: DividerProps) => (
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
        <EmailIcon />
      </ListItemIcon>
      <ListItemText primary="I am under the divider." />
    </ListItem>
  </List>
);

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
const insetCode = `
<List>
  <ListItem button>
    <ListItemIcon>
      <InboxIcon/>
    </ListItemIcon>
    <ListItemText primary="I am above the divider."/>
  </ListItem>
  <Divider variant="inset"/>
  <ListItem button>
    <ListItemIcon>
      <EmailIcon/>
    </ListItemIcon>
    <ListItemText primary="I am under the divider."/>
  </ListItem>
</List>
`;

// language=JS
const lightCode = `
<List>
  <ListItem button>
    <ListItemIcon>
      <InboxIcon/>
    </ListItemIcon>
    <ListItemText primary="I am above the divider."/>
  </ListItem>
  <Divider light/>
  <ListItem button>
    <ListItemIcon>
      <EmailIcon/>
    </ListItemIcon>
    <ListItemText primary="I am under the divider."/>
  </ListItem>
</List>
`;

// language=JS
const absoluteCode = `
<List>
  <ListItem button>
    <ListItemIcon>
      <InboxIcon/>
    </ListItemIcon>
    <ListItemText primary="I am above the divider."/>
  </ListItem>
  <Divider absolute/>
  <ListItem button>
    <ListItemIcon>
      <EmailIcon/>
    </ListItemIcon>
    <ListItemText primary="I am under the divider."/>
  </ListItem>
</List>
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

/**
 * Divider in the inset variant.
 */
export const InsetVariant = Template.bind({});
InsetVariant.args = {
  variant: 'inset',
};
InsetVariant.parameters = {
  docs: {
    source: {
      code: insetCode,
    },
  },
};

/**
 * Divider with a lighter colour.
 */
export const LightColoured = Template.bind({});
LightColoured.args = {
  light: true,
};
LightColoured.parameters = {
  docs: {
    source: {
      code: lightCode,
    },
  },
};

/**
 * Divider with an absolute position.
 */
export const AbsolutePosition = Template.bind({});
AbsolutePosition.args = {
  absolute: true,
};
AbsolutePosition.parameters = {
  docs: {
    source: {
      code: absoluteCode,
    },
  },
};
