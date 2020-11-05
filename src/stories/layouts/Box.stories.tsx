import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Box } from '../..'
import { BoxProps } from '../../components/layout/Box/Box'

export default {
  title: 'Components/Layout/Box',
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
