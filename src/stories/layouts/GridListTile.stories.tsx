import React from 'react'
import { Meta, Story } from '@storybook/react'
import { ImageList } from '../..'
import { ImageListItem, ImageListItemProps } from '../../components/layout/ImageList/dependencies/ImageListItem/ImageListItem'

export default {
  title: 'Components/Layout/ImageList/ImageListItem',
  component: ImageListItem
} as Meta

const Template: Story<ImageListItemProps> = (args: any) => (
  <ImageList cellHeight={180} cols={2} component='ul' spacing={4}>
    <ImageListItem {...args}>
      <p>
        This is a GridListTile. It belongs inside a GridList element.
        <br />
        Usually this would contain an image.
      </p>
    </ImageListItem>
  </ImageList>
)

/**
 * A default implementation of the ImageListItem.
 */
export const Default = Template.bind({})
Default.args = {
  cols: 1,
  component: 'li',
  rows: 1
}
