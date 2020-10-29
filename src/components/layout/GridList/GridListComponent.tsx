import React, { ElementType, ReactElement } from 'react'
import MaterialGridList from '@material-ui/core/GridList'

export interface GridListProps {
  cellHeight: number | 'auto'

  children: ReactElement

  classes: object

  cols: number | 2

  component: ElementType

  spacing: number
}

export const GridListComponent: React.FC<GridListProps> = (
  props: GridListProps
) => {
  return (
    <MaterialGridList
      cellHeight={props.cellHeight}
      classes={props.classes}
      cols={props.cols}
      component={props.component}
      spacing={props.spacing}
    >
      {props.children}
    </MaterialGridList>
  )
}
