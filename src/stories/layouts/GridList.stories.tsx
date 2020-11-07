import React from 'react'
import { Meta, Story } from '@storybook/react'
import { ImageList } from '../..'
import { ImageListItem } from '../../components/layout/ImageList/dependencies/ImageListItem/ImageListItem'
import { ImageListProps } from '../../components/layout/ImageList/ImageList'

export default {
  title: 'Components/Layout/ImageList',
  component: ImageList
} as Meta

const Template: Story<ImageListProps> = (args: any) => (
  <ImageList {...args}>
    <ImageListItem cols={1} component='li' rows={1}>
      <p>This is a tile inside a GridList.</p>
    </ImageListItem>
    <ImageListItem cols={1} component='li' rows={1}>
      <img
        src='https://ciconiaconsort.nl/wp-content/uploads/2016/02/Gemeente-Den-Haag-logo2-640x612.jpg'
        alt='The Hague municipality emblem'
        width={180}
        height={180}
      />
    </ImageListItem>
  </ImageList>
)

/**
 * Implementation of a ImageList.
 */
export const Default = Template.bind({})
Default.args = {
  cellHeight: 180,
  cols: 2,
  component: 'ul',
  spacing: 4
}
