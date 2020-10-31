import React from 'react'
import {
  GridList,
  GridListProps
} from '../../components/layout/GridList/GridList'
import { Meta, Story } from '@storybook/react'
import { GridListTile } from '../../components/layout/GridList/dependencies/GridListTile/GridListTile'

export default {
  title: 'Components/Layout/GridList',
  component: GridList
} as Meta

const Template: Story<GridListProps> = (args: any) => (
  <GridList {...args}>
    <GridListTile cols={1} component='li' rows={1}>
      <p>This is a tile inside a GridList.</p>
    </GridListTile>
    <GridListTile cols={1} component='li' rows={1}>
      <img
        src='https://ciconiaconsort.nl/wp-content/uploads/2016/02/Gemeente-Den-Haag-logo2-640x612.jpg'
        alt='The Hague municipality emblem'
        width={180}
        height={180}
      />
    </GridListTile>
  </GridList>
)

/**
 * Implementation of a GridList.
 */
export const Default = Template.bind({})
Default.args = {
  cellHeight: 180,
  cols: 2,
  component: 'ul',
  spacing: 4
}
