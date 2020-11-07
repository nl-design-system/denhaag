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

export default {
  title: 'Components/Layout/GridList/GridListTile/GridListTileBar',
  component: GridListTileBar
} as Meta

const Template: Story<GridListTileBarProps> = (args: any) => (
  <GridList cellHeight={180} cols={2} component='ul' spacing={4}>
    <GridListTile cols={1} component='li' rows={1}>
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
  actionPosition: 'right',
  title: 'GridListTileBar',
  subtitle: 'I am a GridListTileBar!',
  titlePosition: 'bottom'
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
  actionPosition: 'right',
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
  subtitle: 'I am GridListTileBar!',
  titlePosition: 'bottom'
}
