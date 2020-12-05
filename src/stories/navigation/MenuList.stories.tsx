import React from 'react'
import { Meta, Story } from '@storybook/react'
import { MenuItem, MenuList } from '../..'
import { MenuListProps } from '../../components/navigation/MenuList/MenuList'
import pkg from '../../components/navigation/MenuList/package.json'

export default {
  title: 'Components/Navigation/Menu/MenuList',
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`
  },
  component: MenuList
} as Meta

const Template: Story<MenuListProps> = (args: any) => (
  <MenuList {...args}>
    <MenuItem>
      <p>This is a MenuItem in a MenuList.</p>
    </MenuItem>
  </MenuList>
)

/**
 * Implementation of MenuList
 */
export const Default = Template.bind({})

/**
 * Implementation of MenuList with menu variant.
 */
export const MenuVariant = Template.bind({})
MenuVariant.args = {
  variant: 'menu'
}
