import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Box } from '../..'
import { BoxProps } from '../../components/layout/Box/Box'
import pkg from '../../components/layout/Box/package.json'

export default {
  title: 'Components/Layout/Box',
  parameters: {
    componentSubtitle: `${pkg.version} - ${pkg.name}`
  },
  component: Box
} as Meta

const Template: Story<BoxProps> = (args: any) => (
  <Box {...args}>
    <p>Box</p>
  </Box>
)

/**
 * Implementation of Box
 */
export const Default = Template.bind({})
Default.args = {
  clone: false,
  component: 'div'
}
