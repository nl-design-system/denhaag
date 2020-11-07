import React, { ElementType, ReactElement } from 'react'
// TODO:: Change import from GridList to ImageList
import MaterialImageList from '@material-ui/core/GridList'

export interface ImageListProps {
  /**
   * Number of pixels for one cell height. Set auto for children to define the height.
   */
  cellHeight: number | 'auto'

  /**
   * List Items which will be in ImageList.
   */
  children: ReactElement

  /**
   * Overrides or extends the styles applied to the component.
   */
  classes?: object

  /**
   * Number of columns.
   */
  cols: number | 2

  /**
   * The component used for the root node. Either a string to use a HTMl element or a component.
   */
  component: ElementType

  /**
   * Number of pixels for the spacing between tiles.
   */
  spacing: number
}

/**
 * Image List displays a collection of images in an organised Grid.
 * @param props The properties of the ImageList.
 * @constructor Constructs an instance of ImageList.
 */
export const ImageList: React.FC<ImageListProps> = (props: ImageListProps) => {
  return (
    <MaterialImageList
      cellHeight={props.cellHeight}
      classes={props.classes}
      cols={props.cols}
      component={props.component}
      spacing={props.spacing}
    >
      {props.children}
    </MaterialImageList>
  )
}

/**
 * Default export for ImageList
 */
export default ImageList
