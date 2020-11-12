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
  },
} as Meta

const Template: Story<ContainerProps> = (args: any) => (
  <Container {...args}>This is a container.</Container>
)

/**
 * Default Container
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
export const FixedWidth = Template.bind({})
FixedWidth.args = {
  component: 'div',
  disableGutters: false,
  fixed: true,
  maxWidth: 'lg'
}
