import React, { ElementType, ReactElement } from 'react'
import MaterialGrid from '@material-ui/core/Grid'

export interface GridProps {
  /**
   * Defines the align-content style property, irrespective of screen dimensions.
   */
  alignContent:
    | 'stretch'
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'

  /**
   * Defines the align-items style property, irrespective of screen dimensions.
   */
  alignItems: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline'

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
  component: ElementType

  /**
   * if true, the Grid component will have the flex container behaviour.
   */
  container: boolean

  /**
   * Defines the flex-direction style property, irrespective of screen dimensions.
   */
  direction: 'row' | 'row-reverse' | 'column' | 'column-reverse'

  /**
   * If true, the Grid component will have the flex item behaviour.
   */
  item: boolean

  /**
   * Defines the justify-content style property, irrespective of screen dimensions.
   */
  justify:
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'

  /**
   * Defines the number of grids the component will use for each breakpoint.
   */
  lg: boolean | 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
  md: boolean | 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
  sm: boolean | 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
  xl: boolean | 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
  xs: boolean | 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

  /**
   * Defines the space between the type item component. Can only be used on a type container component.
   */
  spacing: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10

  /**
   * Defines the flex-wrap style property, irrespective of screen dimensions.
   */
  wrap: 'nowrap' | 'wrap' | 'wrap-reverse'

  /**
   * If true, sets min-width to 0 on the item.
   */
  zeroMinWidth: boolean
}

/**
 * The Grid adapts to screen size and orientation, ensuring consistency across layouts.
 * @param props The properties of the Grid.
 * @constructor Constructs an instance of Grid.
 */
export const Grid: React.FC<GridProps> = (props: GridProps) => {
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

export default Grid
