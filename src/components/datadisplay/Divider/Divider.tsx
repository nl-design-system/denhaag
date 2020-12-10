import React from 'react'
import MaterialDivider from '@material-ui/core/Divider'

export interface DividerProps {
  /**
   * Absolutely position the element.
   */
  absolute?: boolean

  /**
   * Override or extend the styles of the component.
   */
  classes: object

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component?: React.ElementType

  /**
   * If true, a vertical divider will have the correct height when used in flex container.
   */
  flexItem?: boolean

  /**
   * If true, the divider will have a lighter color.
   */
  light?: boolean

  /**
   * The divider orientation.
   */
  orientation?: 'horizontal' | 'vertical'

  /**
   * The variant to use.
   */
  variant?: 'fullWidth' | 'inset' | 'middle'
}

/**
 * A thin line that groups content in lists and layouts.
 * @param props The properties of a Divider component.
 * @constructor Constructs an instance of Divider.
 */
export const Divider: React.FC<DividerProps> = (props: DividerProps) => {
  return <MaterialDivider {...props} />
}

export default Divider
