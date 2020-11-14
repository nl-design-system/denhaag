import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Container } from '../..'
import { ContainerProps } from '../../components/layout/Container/Container'
import pkg from '../../components/layout/Container/package.json'

export default {
  title: 'Components/Layout/Container',
  component: Container,
  parameters: {
    componentSubtitle: `${pkg.version} - ${pkg.name}`
  }
} as Meta

const Template: Story<ContainerProps> = (args: any) => (
  <Container {...args}>This is a container.</Container>
)

/**
 * Default Container
 */
export const Default = Template.bind({})
Default.args = {}

/**
 * Container without left and right padding.
 */
export const NoPadding = Template.bind({})
NoPadding.args = {
  disableGutters: true
}

/**
 * Container with width fixed to min-width of the breakpoint.
 */
export const FixedWidth = Template.bind({})
FixedWidth.args = {
  fixed: true
}
