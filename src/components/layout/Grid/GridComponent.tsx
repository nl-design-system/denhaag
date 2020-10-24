import React, { ElementType, ReactElement } from 'react'
import MaterialGrid from '@material-ui/core/Grid'

export interface GridProps {
  alignContent:
    | 'stretch'
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'

  alignItems: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline'

  children: ReactElement

  classes: object

  component: ElementType

  container: boolean

  direction: 'row' | 'row-reverse' | 'column' | 'column-reverse'

  item: boolean

  justify:
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'

  lg: boolean | 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
  md: boolean | 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
  sm: boolean | 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
  xl: boolean | 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
  xs: boolean | 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

  spacing: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10

  wrap: 'nowrap' | 'wrap' | 'wrap-reverse'

  zeroMinWidth: boolean
}

export const GridComponent: React.FC<GridProps> = (props: GridProps) => {
  return (
    <MaterialGrid
      alignContent={props.alignContent}
      alignItems={props.alignItems}
      classes={props.classes}
      component={props.component}
      container={props.container}
      direction={props.direction}
      item={props.item}
      justify={props.justify}
      lg={props.lg}
      md={props.md}
      sm={props.sm}
      xl={props.xl}
      xs={props.xs}
      spacing={props.spacing}
      wrap={props.wrap}
      zeroMinWidth={props.zeroMinWidth}
    >
      {props.children}
    </MaterialGrid>
  )
}
