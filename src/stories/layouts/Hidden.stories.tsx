import React from 'react'
import { Hidden, HiddenProps } from '../../components/layout/Hidden/Hidden'
import { Meta, Story } from '@storybook/react'

export default {
  title: 'Components/Layout/Hidden',
  component: Hidden
} as Meta

const Template: Story<HiddenProps> = (args: any) => (
  <Hidden {...args}>
    <p>This text is hidden.</p>
  </Hidden>
)

/**
 * Default hidden
 */
export const Default = Template.bind({})
Default.args = {
  implementation: 'js',
  lgDown: false,
  lgUp: false,
  mdDown: false,
  mdUp: false,
  smDown: false,
  smUp: false,
  xlDown: false,
  xlUp: false,
  xsDown: false,
  xsUp: false
}
