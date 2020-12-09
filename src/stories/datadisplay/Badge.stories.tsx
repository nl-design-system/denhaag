import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Badge, BadgeProps } from '../../components/datadisplay/Badge/Badge'
import MailIcon from '@material-ui/icons/Mail'
import pkg from '../../components/datadisplay/Badge/package.json'

export default {
  title: 'Components/Data Display/Badge',
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`
  },
  component: Badge
} as Meta

const Template: Story<BadgeProps> = (args: any) => (
  <Badge {...args}>
    <MailIcon />
  </Badge>
)

/**
 * Implementation of Badge
 */
export const Default = Template.bind({})
Default.args = {
  badgeContent: 4
}

/**
 * Badge having the primary colour.
 */
export const PrimaryColoured = Template.bind({})
PrimaryColoured.args = {
  ...Default.args,
  color: 'primary'
}

/**
 * Badge with circled overlap.
 */
export const CircleOverlap = Template.bind({})
CircleOverlap.args = {
  ...Default.args,
  overlap: 'circle'
}

/**
 * Badge using the dot variant.
 */
export const DotVariant = Template.bind({})
DotVariant.args = {
  ...PrimaryColoured.args,
  variant: 'dot'
}
