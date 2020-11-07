import React from 'react'
import { Meta, Story } from '@storybook/react'
import { IconButton } from '@material-ui/core'
import InfoIcon from '@material-ui/icons/Info'
import {
  ImageListItemBar,
  ImageListItemBarProps
} from '../../components/layout/ImageList/dependencies/ImageListItemBar/ImageListItemBar'
import ImageListItem from '../../components/layout/ImageList/dependencies/ImageListItem/ImageListItem'
import { ImageList } from '../..'

export default {
  title: 'Components/Layout/ImageList/ImageListItem/ImageListItemBar',
  component: ImageListItemBar
} as Meta

const Template: Story<ImageListItemBarProps> = (args: any) => (
  <ImageList cellHeight={180} cols={2} component='ul' spacing={4}>
    <ImageListItem cols={1} component='li' rows={1}>
      <img
        src='https://ciconiaconsort.nl/wp-content/uploads/2016/02/Gemeente-Den-Haag-logo2-640x612.jpg'
        alt='The Hague municipality emblem'
        width={250}
        height={250}
      />
      <ImageListItemBar {...args} />
    </ImageListItem>
  </ImageList>
)

/**
 * Default implementation of ImageListItemBar.
 */
export const Default = Template.bind({})
Default.args = {
  actionIcon: (
    <IconButton aria-label='I am an IconButton!'>
      <InfoIcon />
    </IconButton>
  ),
  actionPosition: 'right',
  title: 'ImageListItemBar',
  subtitle: 'I am a ImageListItemBar!',
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
  title: 'ImageListItemBar',
  subtitle: 'I am ImageListItemBar!',
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
  title: 'ImageListItemBar',
  subtitle: 'I am ImageListItemBar!',
  titlePosition: 'bottom'
}
