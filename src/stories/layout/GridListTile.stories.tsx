import React from 'react'
import { Meta, Story } from '@storybook/react'
import { GridList } from '../..'
import {
  GridListTile,
  GridListTileProps
} from '../../components/layout/GridListTile/GridListTile'
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
      <img
        src='https://support.image-line.com/innovaeditor/assets/KnowledgeBase/flStudio11Demo[1].png'
        alt='A picture of a square block with the word demo written in neon blue on the top.'
      />
    </GridListTile>
    <GridListTile {...args}>
      <img
        src='https://mentorphiledotcom.files.wordpress.com/2018/09/livedemo-1.png'
        alt='Picture for demonstrating the GridListTile component.'
      />
    </GridListTile>
    <GridListTile {...args}>
      <img
        src='https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/Demos.jpg/1200px-Demos.jpg'
        alt='A picture of four cassette tapes for demonstrating the GridListTile component.'
      />
    </GridListTile>
  </GridList>
)

/**
 * A default implementation of the GridListTile.
 */
export const Default = Template.bind({})
