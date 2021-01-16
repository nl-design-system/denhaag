import React from 'react'
import MaterialHidden from '@material-ui/core/Hidden'
import BaseProps from '@gemeente-denhaag/baseprops'

export interface HiddenProps extends BaseProps {
  /**
   * Specify which implementation to use. 'js' is default.
   */
  implementation?: 'js' | 'css'

  /**
   * Sets the initial width of the component.
   * Can be used when choosing the 'js' implementation with server side rendering.
   */
  initialWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'

  /**
   * Hide the given breakpoint(s).
   */
  only:
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | Array<'xs' | 'sm' | 'md' | 'lg' | 'xl'>

  /**
   * If true, screens of that size and smaller will be hidden.
   */
  lgDown?: boolean

  /**
   * If true, screens of that size and larger will be hidden.
   */
  lgUp?: boolean

  /**
   * If true, screens of that size and smaller will be hidden.
   */
  mdDown?: boolean

  /**
   * If true, screens of that size and larger will be hidden.
   */
  mdUp?: boolean

  /**
   * If true, screens of that size and smaller will be hidden.
   */
  smDown?: boolean

  /**
   * If true, screens of that size and larger will be hidden.
   */
  smUp?: boolean

  /**
   * If true, screens of that size and smaller will be hidden.
   */
  xlDown?: boolean

  /**
   * If true, screens of that size and larger will be hidden.
   */
  xlUp?: boolean

  /**
   * If true, screens of that size and smaller will be hidden.
   */
  xsDown?: boolean

  /**
   * If true, screens of that size and larger will be hidden.
   */
  xsUp?: boolean
}

/**
 * Hidden quickly and responsively toggles visibility of components.
 * @param props The properties of Hidden.
 * @constructor Constructs an instance of Hidden.
 */
export const Hidden: React.FC<HiddenProps> = (props: HiddenProps) => {
  return <MaterialHidden {...props}>{props.children}</MaterialHidden>
}

/**
 * Default export for Hidden
 */
export default Hidden
