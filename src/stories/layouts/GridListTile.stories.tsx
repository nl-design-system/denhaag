import React from 'react'
import { Meta, Story } from '@storybook/react'
import { GridList } from '../..'
import { GridListTile, GridListTileProps } from '../../components/layout/GridListTile/GridListTile'
import pkg from '../../components/layout/GridListTile/package.json'

export default {
  title: 'Components/Layout/GridList/GridListTile',
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`
  },
  component: GridListTile
} as Meta

const Template: Story<GridListTileProps> = (args: any) => (
  <GridList>
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
