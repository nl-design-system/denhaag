import React from 'react'
import { Meta, Story } from '@storybook/react'
import { GridList } from '../..'
import { GridListTile, GridListTileProps } from '../../components/layout/GridListTile/GridListTile'

export default {
  title: 'Components/Layout/GridList/GridListTile',
  component: GridListTile
} as Meta

const Template: Story<GridListTileProps> = (args: any) => (
  <GridList cellHeight={180} cols={2} component='ul' spacing={4}>
    <GridListTile {...args}>
      <p>
        This is a GridListTile. It belongs inside a GridList element.
        <br />
        Usually this would contain an image.
      </p>
    </GridListTile>
  </GridList>
)

/**
 * A default implementation of the GridListTile.
 */
export const Default = Template.bind({})
Default.args = {
  cols: 1,
  component: 'li',
  rows: 1
}
