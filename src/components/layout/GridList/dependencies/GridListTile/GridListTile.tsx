import React, { ElementType, ReactElement } from 'react'
import MaterialGridListTile from '@material-ui/core/GridListTile'

export interface GridListTileProps {
  /**
   * Can take any element as child, but preferably an image.
   */
  children: ReactElement[] | ReactElement

  /**
   * Overrides or extends the styles applied to the component.
   */
  classes?: object

  /**
   * Width of tile in number of grid cells.
   */
  cols: number

  /**
   * The component used for the root node. Either a string to use a HTML element or a component.
   */
  component: ElementType

  /**
   * Height of the tile in number of grid cells.
   */
  rows: number
}

/**
 * Used in the Grid to align items and enforce layouts.
 * @param props The properties of GridListTile.
 * @constructor Constructs an instance of GridListTile.
 */
export const GridListTile: React.FC<GridListTileProps> = (
  props: GridListTileProps
) => {
  return (
    <MaterialGridListTile
      classes={props.classes}
      cols={props.cols}
      component={props.component}
      rows={props.rows}
    >
      {props.children}
    </MaterialGridListTile>
  )
}

/**
 * Default export for GridListTile
 */
export default GridListTile
