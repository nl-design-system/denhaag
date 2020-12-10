import React from 'react'
import { Meta, Story } from '@storybook/react'
import pkg from '../../components/datadisplay/List/package.json'
import List, { ListProps } from '../../components/datadisplay/List/List'
import ListItem from '../../components/datadisplay/ListItem/ListItem'
import ListItemAvatar from '../../components/datadisplay/ListItemAvatar/ListItemAvatar'
import ListItemIcon from '../../components/datadisplay/ListItemIcon/ListItemIcon'
import ListItemSecondaryAction from '../../components/datadisplay/ListItemSecondaryAction/ListItemSecondaryAction'
import ListItemText from '../../components/datadisplay/ListItemText/ListItemText'
import ListSubheader from '../../components/datadisplay/ListSubheader/ListSubheader'
import Checkbox from '../../components/input/Checkbox/Checkbox'
import { IconButton, Avatar } from '@material-ui/core'
import CommentIcon from '@material-ui/icons/Comment'
import FolderIcon from '@material-ui/icons/Folder'

export default {
  title: 'Components/Data Display/List',
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`
  },
  component: List
} as Meta

const Template: Story<ListProps> = (args: any) => (
  <List
    {...args}
    subheader={<ListSubheader component='div'>Nested Subheader</ListSubheader>}
  >
    <ListItem dense button>
      <ListItemIcon>
        <Checkbox />
      </ListItemIcon>
      <ListItemText primary='Line item' />
      <ListItemSecondaryAction>
        <IconButton edge='end' aria-label='comments'>
          <CommentIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <FolderIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary='Single-line item' secondary='Secondary text' />
    </ListItem>
  </List>
)

/**
 * Implementation of List.
 */
export const Default = Template.bind({})
Default.args = {}
