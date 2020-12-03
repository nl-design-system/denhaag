import React, { ElementType, ReactElement } from 'react'
import MaterialGridList from '@material-ui/core/GridList'

export interface GridListProps {
  /**
   * Number of pixels for one cell height. Set auto for children to define the height.
   */
  cellHeight?: number | 'auto'

  /**
   * List Tiles which will be in GridList.
   */
  children: ReactElement[]

  /**
   * Overrides or extends the styles applied to the component.
   */
  classes?: object

  /**
   * Number of columns.
   */
  cols?: number

  /**
   * The component used for the root node. Either a string to use a HTMl element or a component.
   */
  component?: ElementType

  /**
   * Number of pixels for the spacing between tiles.
   */
  spacing?: number
}

/**
 * Grid List displays a collection of images in an organised Grid.
 * @param props The properties of the GridList.
 * @constructor Constructs an instance of GridList.
 */
export const GridList: React.FC<GridListProps> = (props: GridListProps) => {
  return <MaterialGridList {...props}>{props.children}</MaterialGridList>
}

/**
 * Default export for GridList
 */
export default GridList
