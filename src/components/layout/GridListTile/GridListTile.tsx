import React from 'react'
import MaterialGridListTile from '@material-ui/core/GridListTile'
import BaseLayoutProps from '@gemeente-denhaag/baselayoutprops/BaseLayoutProps'

export interface GridListTileProps extends BaseLayoutProps {
  /**
   * Width of tile in number of Grid cells.
   */
  cols?: number

  /**
   * Height of the tile in number of Grid cells.
   */
  rows?: number
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
    <MaterialGridListTile {...props}>{props.children}</MaterialGridListTile>
  )
}

/**
 * Default export for GridListTile
 */
export default GridListTile
