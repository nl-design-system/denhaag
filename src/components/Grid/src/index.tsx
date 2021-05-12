import React from 'react';
import MaterialGrid from '@material-ui/core/Grid';
import BaseLayoutProps from '@gemeente-denhaag/baselayoutprops';

export interface GridProps extends BaseLayoutProps {
  /**
   * Defines the align-content style property, irrespective of screen dimensions.
   */
  alignContent?: 'stretch' | 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around';

  /**
   * Defines the align-items style property, irrespective of screen dimensions.
   */
  alignItems?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';

  /**
   * if true, the Grid component will have the flex Container behaviour.
   */
  container?: boolean;

  /**
   * Defines the flex-direction style property, irrespective of screen dimensions.
   */
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';

  /**
   * If true, the Grid component will have the flex item behaviour.
   */
  item?: boolean;

  /**
   * Defines the justify-content style property, irrespective of screen dimensions.
   */
  justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';

  /**
   * Defines the number of grids the component will use for each breakpoint.
   */
  lg?: boolean | 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  md?: boolean | 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  sm?: boolean | 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  xl?: boolean | 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  xs?: boolean | 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

  /**
   * Defines the space between the type item component. Can only be used on a type Container component.
   */
  spacing?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

  /**
   * Defines the flex-wrap style property, irrespective of screen dimensions.
   */
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';

  /**
   * If true, sets min-width to 0 on the item.
   */
  zeroMinWidth?: boolean;
}

/**
 * The Grid adapts to screen size and orientation, ensuring consistency across layouts.
 * @param props The properties of the Grid.
 * @constructor Constructs an instance of Grid.
 */
export const Grid: React.FC<GridProps> = (props: GridProps) => {
  return <MaterialGrid {...props}>{props.children}</MaterialGrid>;
};

/**
 * Default export for Grid
 */
export default Grid;
