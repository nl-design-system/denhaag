import React, { ElementType, ReactElement } from 'react'
import GridListTile from '@material-ui/core/GridListTile'

export interface GridListTileProps {
  children: ReactElement

  classes?: object

  cols: number

  component: ElementType

  rows: number
}

export const GridListTileComponent: React.FC<GridListTileProps> = (
  props: GridListTileProps
) => {
  return (
    <GridListTile
      classes={props.classes}
      cols={props.cols}
      component={props.component}
      rows={props.rows}
    >
      {props.children}
    </GridListTile>
  )
}
