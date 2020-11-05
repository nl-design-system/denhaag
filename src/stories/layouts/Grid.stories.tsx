import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Grid, GridProps } from '../..'

export default {
  title: 'Components/Layout/Grid',
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
