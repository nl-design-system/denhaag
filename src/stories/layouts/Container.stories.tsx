import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Container, ContainerProps } from '../..'

export default {
  title: 'Components/Layout/Container',
  component: Container
} as Meta

const Template: Story<ContainerProps> = (args: any) => (
  <Container {...args}>This is a container.</Container>
)

/**
 * Default container
 */
export const Default = Template.bind({})
Default.args = {
  component: 'div',
  disableGutters: false,
  fixed: false,
  maxWidth: 'lg'
}

/**
 * Container without left and right padding.
 */
export const NoPadding = Template.bind({})
NoPadding.args = {
  component: 'div',
  disableGutters: true,
  fixed: false,
  maxWidth: 'lg'
}

/**
 * Container with width fixed to min-width of the breakpoint.
 */
export const FixedWith = Template.bind({})
FixedWith.args = {
  component: 'div',
  disableGutters: false,
  fixed: true,
  maxWidth: 'lg'
}
