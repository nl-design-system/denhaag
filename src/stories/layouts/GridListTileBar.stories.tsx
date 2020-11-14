import React from 'react'
import { Meta, Story } from '@storybook/react'
import { IconButton } from '@material-ui/core'
import InfoIcon from '@material-ui/icons/Info'
import {
  GridListTileBar,
  GridListTileBarProps
} from '../../components/layout/GridListTileBar/GridListTileBar'
import GridListTile from '../../components/layout/GridListTile/GridListTile'
import { GridList } from '../..'
import pkg from '../../components/layout/GridListTileBar/package.json'

export default {
  title: 'Components/Layout/GridList/GridListTile/GridListTileBar',
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`
  },
  component: GridListTileBar
} as Meta

const Template: Story<GridListTileBarProps> = (args: any) => (
  <GridList>
    <GridListTile>
      <img
        src='https://ciconiaconsort.nl/wp-content/uploads/2016/02/Gemeente-Den-Haag-logo2-640x612.jpg'
        alt='The Hague municipality emblem'
        width={250}
        height={250}
      />
      <GridListTileBar {...args} />
    </GridListTile>
  </GridList>
)

/**
 * Default implementation of GridListTileBar.
 */
export const Default = Template.bind({})
Default.args = {
  actionIcon: (
    <IconButton aria-label='I am an IconButton!'>
      <InfoIcon />
    </IconButton>
  ),
  title: 'GridListTileBar',
  subtitle: 'I am a GridListTileBar!'
}

/**
 * Implementation with tilebar at top position.
 */
export const TopPosition = Template.bind({})
TopPosition.args = {
  actionIcon: (
    <IconButton aria-label='I am an IconButton!'>
      <InfoIcon />
    </IconButton>
  ),
  title: 'GridListTileBar',
  subtitle: 'I am GridListTileBar!',
  titlePosition: 'top'
}

/**
 * Implementation with IconButton on the left.
 */
export const ButtonLeft = Template.bind({})
ButtonLeft.args = {
  actionIcon: (
    <IconButton aria-label='I am an IconButton!'>
      <InfoIcon />
    </IconButton>
  ),
  actionPosition: 'left',
  title: 'GridListTileBar',
  subtitle: 'I am GridListTileBar!'
}
