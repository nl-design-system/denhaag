import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Avatar, AvatarProps } from '../../components/datadisplay/Avatar/Avatar'
import pkg from '../../components/datadisplay/Avatar/package.json'

export default {
  title: 'Components/Data Display/Avatar',
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`
  },
  component: Avatar
} as Meta

const Template: Story<AvatarProps> = (args: any) => (
  <Avatar {...args} />
)

/**
 * Implementation of Avatar
 */
export const Default = Template.bind({})
Default.args = {
  src: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/c1/c103da350e94ed6b0ef07583c4cb619f9deb6295_full.jpg",
  alt: "Grechanyuk model"
}

/**
 * Implementation of Avatar using a Letter
 */
export const Letter = Template.bind({})
Letter.args = {
  children: "DH"
}

/**
 * Implementation of Avatar using squared edges.
 */
export const Squared = Template.bind({})
Squared.args = {
  ...Default.args,
  variant: 'square',
}
