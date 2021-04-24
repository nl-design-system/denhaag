import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Badge, BadgeProps } from '../../components/Badge'
import MailIcon from '@material-ui/icons/Mail'
import pkg from '../../components/Badge/package.json'

export default {
  title: 'Components/Data Display/Badge',
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`,
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  component: Badge
} as Meta

const Template: Story<BadgeProps> = (args: BadgeProps) => (
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

Default.parameters = {
  docs: {
    source: {
      // language=HTML
      code: `<Badge badgeContent={4}><MailIcon /></Badge>`
    }
  }
}

/**
 * Badge having the primary colour.
 */
export const PrimaryColoured = Template.bind({})
PrimaryColoured.args = {
  color: 'primary',
  ...Default.args
}

PrimaryColoured.parameters = {
  docs: {
    source: {
      // language=HTML
      code: `<Badge badgeContent={4} color={'primary'}><MailIcon /></Badge>`
    }
  }
}

/**
 * Badge with circled overlap.
 */
export const CircleOverlap = Template.bind({})
CircleOverlap.args = {
  overlap: 'circle',
  ...PrimaryColoured.args
}

CircleOverlap.parameters = {
  docs: {
    source: {
      // language=HTML
      code: `<Badge badgeContent={4} color={'primary'} overlap={'circle'}><MailIcon /></Badge>`
    }
  }
}

/**
 * Badge using the dot variant.
 */
export const DotVariant = Template.bind({})
DotVariant.args = {
  variant: 'dot',
  ...PrimaryColoured.args
}

DotVariant.parameters = {
  docs: {
    source: {
      code: `<Badge badgeContent={4} color={'primary'} variant={'dot'}><MailIcon /></Badge>`
    }
  }
}
