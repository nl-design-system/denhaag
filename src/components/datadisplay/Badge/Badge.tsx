import React from 'react'
import MaterialBadge from '@material-ui/core/Badge'

export interface BadgeProps {
  /**
   * The anchor of the badge.
   */
  anchorOrigin?: { horizontal: 'left' | 'right'; vertical: 'bottom' | 'top' }

  /**
   * The content rendered within the badge.
   */
  badgeContent?: React.ReactNode

  /**
   * The content of the component.
   */
  children?: React.ReactNode

  /**
   * Override or extend the styles of the component.
   */
  classes: object

  /**
   * The color of the component.
   * It supports those theme colors that make sense for this component.
   */
  color?: 'default' | 'error' | 'primary' | 'secondary'

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component?: React.ElementType

  /**
   * If true, the badge will be invisible.
   */
  invisible?: boolean

  /**
   * Max count to show.
   */
  max?: number

  /**
   * Wrapped shape the badge should overlap.
   */
  overlap?: 'circle' | 'rectangle'

  /**
   * Controls whether the badge is hidden when badgeContent is zero.
   */
  showZero?: boolean

  /**
   * The variant to use.
   */
  variant?: 'dot' | 'standard'
}

/**
 * A badge shows small content at the top right corner of it's children.
 * @param props The properties of a Badge component.
 * @constructor Constructs an instance of Badge.
 */
export const Badge: React.FC<BadgeProps> = (props: BadgeProps) => {
  return <MaterialBadge {...props}>{props.children}</MaterialBadge>
}

export default Badge
