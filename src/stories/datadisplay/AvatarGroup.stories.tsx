import React from 'react'
import { Meta, Story } from '@storybook/react'
import Avatar from '../../components/datadisplay/Avatar/Avatar'
import { AvatarGroup, AvatarGroupProps } from '../../components/datadisplay/AvatarGroup/AvatarGroup'
import pkg from '../../components/datadisplay/AvatarGroup/package.json'

export default {
  title: 'Components/Data Display/AvatarGroup',
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`
  },
  component: AvatarGroup
} as Meta

const Template: Story<AvatarGroupProps> = (args: any) => (
  <AvatarGroup {...args}>
    <Avatar src={"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/c1/c103da350e94ed6b0ef07583c4cb619f9deb6295_full.jpg"} alt="Grechanyuk model" />
    <Avatar>DH</Avatar>
    <Avatar src={"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/c1/c103da350e94ed6b0ef07583c4cb619f9deb6295_full.jpg"} alt="Grechanyuk model" />
  </AvatarGroup>
)

/**
 * Implementation of AvatarGroup
 */
export const Default = Template.bind({})

/**
 * Implementation of AvatarGroup using small spacing
 */
export const SmallSpacing = Template.bind({})
SmallSpacing.args = {
  spacing: 'small'
}
