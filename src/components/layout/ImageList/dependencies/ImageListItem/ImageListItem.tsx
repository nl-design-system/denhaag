import React, { ElementType, ReactElement } from 'react'
// TODO:: Change import from GridListTile to ImageListItem
import MaterialImageListItem from '@material-ui/core/GridListTile'

export interface ImageListItemProps {
  /**
   * Can take any element as child, but preferably an image.
   */
  children: ReactElement[] | ReactElement

  /**
   * Overrides or extends the styles applied to the component.
   */
  classes?: object

  /**
   * Width of tile in number of Grid cells.
   */
  cols: number

  /**
   * The component used for the root node. Either a string to use a HTML element or a component.
   */
  component: ElementType

  /**
   * Height of the tile in number of Grid cells.
   */
  rows: number
}

/**
 * Used in the Grid to align items and enforce layouts.
 * @param props The properties of ImageListItem.
 * @constructor Constructs an instance of ImageListItem.
 */
export const ImageListItem: React.FC<ImageListItemProps> = (
  props: ImageListItemProps
) => {
  return (
    <MaterialImageListItem
      classes={props.classes}
      cols={props.cols}
      component={props.component}
      rows={props.rows}
    >
      {props.children}
    </MaterialImageListItem>
  )
}

/**
 * Default export for ImageListItem
 */
export default ImageListItem
