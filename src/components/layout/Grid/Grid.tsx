import React, { ElementType, ReactElement } from 'react'
import MaterialGrid from '@material-ui/core/Grid'

export interface GridProps {
  /**
   * Defines the align-content style property, irrespective of screen dimensions.
   */
  alignContent?:
    | 'stretch'
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'

  /**
   * Defines the align-items style property, irrespective of screen dimensions.
   */
  alignItems?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline'

  /**
   * The content of the Grid component.
   */
  children: ReactElement

  /**
   * Overrides or extends the styles applied to the component.
   */
  classes?: object

  /**
   * The component used for the root node. Either a string to use a HTML element or a component.
   */
  component?: ElementType

  /**
   * if true, the Grid component will have the flex Container behaviour.
   */
  container?: boolean

  /**
   * Defines the flex-direction style property, irrespective of screen dimensions.
   */
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse'

  /**
   * If true, the Grid component will have the flex item behaviour.
   */
  item?: boolean

  /**
   * Defines the justify-content style property, irrespective of screen dimensions.
   */
  justify?:
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'

  /**
   * Defines the number of grids the component will use for each breakpoint.
   */
  lg?: boolean | 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
  md?: boolean | 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
  sm?: boolean | 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
  xl?: boolean | 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
  xs?: boolean | 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

  /**
   * Defines the space between the type item component. Can only be used on a type Container component.
   */
  spacing?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10

  /**
   * Defines the flex-wrap style property, irrespective of screen dimensions.
   */
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse'

  /**
   * If true, sets min-width to 0 on the item.
   */
  zeroMinWidth?: boolean
}

/**
 * The Grid adapts to screen size and orientation, ensuring consistency across layouts.
 * @param props The properties of the Grid.
 * @constructor Constructs an instance of Grid.
 */
export const Grid: React.FC<GridProps> = (props: GridProps) => {
  return (
    <MaterialGrid
      alignContent={props.alignContent ?? 'stretch'}
      alignItems={props.alignItems ?? 'stretch'}
      classes={props.classes}
      component={props.component ?? 'div'}
      container={props.container ?? false}
      direction={props.direction ?? 'row'}
      item={props.item ?? false}
      justify={props.justify ?? 'flex-start'}
      lg={props.lg ?? false}
      md={props.md ?? false}
      sm={props.sm ?? false}
      xl={props.xl ?? false}
      xs={props.xs ?? false}
      spacing={props.spacing ?? 0}
      wrap={props.wrap ?? 'wrap'}
      zeroMinWidth={props.zeroMinWidth ?? false}
    >
      {props.children}
    </MaterialGrid>
  )
}

/**
 * Default export for Grid
 */
export default Grid
