import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Grid } from '../..'
import { GridProps } from '../../components/layout/Grid/Grid'
import pkg from '../../components/layout/Grid/package.json'

export default {
  title: 'Components/Layout/Grid',
  parameters: {
    componentSubtitle: `${pkg.version} - ${pkg.name}`
  },
  component: Grid
} as Meta

const Template: Story<GridProps> = (args: any) => (
  <Grid {...args}>
    <p>This is a grid.</p>
    <p>It can align text.</p>
    <p>Also works responsively.</p>
  </Grid>
)

/**
 * A default implementation of Grid.
 */
export const Default = Template.bind({})
Default.args = {
  alignContent: 'stretch',
  alignItems: 'stretch',
  component: 'div',
  container: false,
  direction: 'row',
  item: false,
  justify: 'flex-start',
  lg: false,
  md: false,
  sm: false,
  xl: false,
  xs: false,
  spacing: 0,
  wrap: 'wrap',
  zeroMinWidth: false
}

/**
 * Grid with Container behaviour.
 */
export const ContainerGrid = Template.bind({})
ContainerGrid.args = {
  alignContent: 'stretch',
  alignItems: 'stretch',
  component: 'div',
  container: true,
  direction: 'row',
  item: false,
  justify: 'flex-start',
  lg: false,
  md: false,
  sm: false,
  xl: false,
  xs: false,
  spacing: 0,
  wrap: 'wrap',
  zeroMinWidth: false
}

/**
 * Grid with min-width of items set to 0.
 */
export const ZeroMinWidthGrid = Template.bind({})
ZeroMinWidthGrid.args = {
  alignContent: 'stretch',
  alignItems: 'stretch',
  component: 'div',
  container: false,
  direction: 'row',
  item: false,
  justify: 'flex-start',
  lg: false,
  md: false,
  sm: false,
  xl: false,
  xs: false,
  spacing: 0,
  wrap: 'wrap',
  zeroMinWidth: true
}
