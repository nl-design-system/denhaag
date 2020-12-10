import React from 'react'
import MaterialListItemText from '@material-ui/core/ListItemText'

export interface ListItemTextProps {
  /**
   * Alias for the `primary` prop.
   */
  children?: React.ReactNode | React.ReactNode[]
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes?: object
  /**
   * If `true`, the children won't be wrapped by a Typography component.
   * This can be useful to render an alternative Typography variant by wrapping
   * the `children` (or `primary`) text, and optional `secondary` text
   * with the Typography component.
   */
  disableTypography?: boolean
  /**
   * If `true`, the children will be indented.
   * This should be used if there is no left avatar or left icon.
   */
  inset?: boolean
  /**
   * The main content element.
   */
  primary?: React.ReactNode
  /**
   * These props will be forwarded to the primary typography component
   * (as long as disableTypography is not `true`).
   */
  primaryTypographyProps?: object
  /**
   * The secondary content element.
   */
  secondary?: React.ReactNode
  /**
   * These props will be forwarded to the secondary typography component
   * (as long as disableTypography is not `true`).
   */
  secondaryTypographyProps?: object
}

/**
 * Primary UI component for user interaction
 */
export const ListItemText: React.FC<ListItemTextProps> = (
  props: ListItemTextProps
) => {
  return (
    <MaterialListItemText {...props}>{props.children}</MaterialListItemText>
  )
}

export default ListItemText
