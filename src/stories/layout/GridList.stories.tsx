import React from 'react'
import { Meta, Story } from '@storybook/react'
import { GridList } from '../..'
import { GridListTile } from '../../components/layout/GridListTile/GridListTile'
import { GridListProps } from '../../components/layout/GridList/GridList'
import pkg from '../../components/layout/GridList/package.json'

export default {
  title: 'Components/Layout/GridList',
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`
  },
  component: GridList
} as Meta

const Template: Story<GridListProps> = (args: any) => (
  <GridList {...args}>
    <GridListTile>
      <p>This is a GridListTile inside a GridList.</p>
    </GridListTile>
    <GridListTile>
      <img
        src='https://ciconiaconsort.nl/wp-content/uploads/2016/02/Gemeente-Den-Haag-logo2-640x612.jpg'
        alt='The Hague municipality emblem'
        width={150}
        height={150}
      />
    </GridListTile>
  </GridList>
)

/**
 * Implementation of a GridList.
 */
export const Default = Template.bind({})
