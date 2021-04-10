import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Divider, DividerProps } from '../../components/Divider'
import pkg from '../../components/Divider/package.json'
import { List, ListItem, ListItemIcon, ListItemText } from '../../components/List'
import InboxIcon from '@material-ui/icons/Inbox'
import DraftsIcon from '@material-ui/icons/Drafts'

export default {
  title: 'Components/Data Display/Divider',
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`,
    docs: {
      source: {
        type: 'dynamic'
      }
    }
  },
  component: Divider
} as Meta

const Template: Story<DividerProps> = (args: DividerProps) => (
  <List>
    <ListItem button>
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <ListItemText primary='I am above the divider.' />
    </ListItem>
    <Divider {...args} />
    <ListItem button>
      <ListItemIcon>
        <DraftsIcon />
      </ListItemIcon>
      <ListItemText primary='I am under the divider.' />
    </ListItem>
  </List>
)

/**
 * Implementation of Divider.
 */
export const Default = Template.bind({})
Default.parameters = {
  docs: {
    source: {
      // language=HTML
      code: `
        <List>
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary='I am above the divider.' />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary='I am under the divider.' />
          </ListItem>
        </List>
      `
    }
  }
}

/**
 * Divider in the inset variant.
 */
export const InsetVariant = Template.bind({})
InsetVariant.args = {
  variant: 'inset'
}
InsetVariant.parameters = {
  docs: {
    source: {
      // language=HTML
      code: `
        <List>
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary='I am above the divider.' />
          </ListItem>
          <Divider variant='inset' />
          <ListItem button>
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary='I am under the divider.' />
          </ListItem>
        </List>
      `
    }
  }
}

/**
 * Divider with a lighter colour.
 */
export const LightColoured = Template.bind({})
LightColoured.args = {
  light: true
}
LightColoured.parameters = {
  docs: {
    source: {
      // language=HTML
      code: `
        <List>
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary='I am above the divider.' />
          </ListItem>
          <Divider light />
          <ListItem button>
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary='I am under the divider.' />
          </ListItem>
        </List>
      `
    }
  }
}

/**
 * Divider with an absolute position.
 */
export const AbsolutePosition = Template.bind({})
AbsolutePosition.args = {
  absolute: true
}
AbsolutePosition.parameters = {
  docs: {
    source: {
      // language=HTML
      code: `
        <List>
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary='I am above the divider.' />
          </ListItem>
          <Divider absolute />
          <ListItem button>
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary='I am under the divider.' />
          </ListItem>
        </List>
      `
    }
  }
}
