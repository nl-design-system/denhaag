import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Menu } from '../..'
import { MenuProps } from '../../components/navigation/Menu/Menu'
import MenuItem from '../../components/navigation/MenuItem/MenuItem'

export default {
  title: 'Components/Navigation/Menu',
  component: Menu
} as Meta

// @ts-ignore
// eslint-disable-next-line no-unused-vars
const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

const Template: Story<MenuProps> = (args: any) => (
  // <div>
  //   <button onClick={(event) => setAnchorEl(event.currentTarget)}>
  //     Click me to open!
  //   </button>
  <Menu {...args}>
    <MenuItem dense={false}>
      <span>Click me!</span>
    </MenuItem>
    <MenuItem dense={false}>
      <span>Or me!</span>
    </MenuItem>
    <MenuItem dense={false}>
      <span>Or me!</span>
    </MenuItem>
  </Menu>
  // </div>
)

/**
 * Implementation of Menu
 */
export const Default = Template.bind({})
Default.args = {
  anchorEl: anchorEl,
  PopoverClasses: {}
}
