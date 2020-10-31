import React, { ReactElement } from 'react'
import MaterialHidden from '@material-ui/core/Hidden'

export interface HiddenProps {
  /**
   * The content of the component.
   */
  children: ReactElement

  /**
   * Specify which implementation to use. 'js' is default.
   */
  implementation: 'js' | 'css'

  /**
   * Sets the initial width of the component.
   * Can be used when choosing the 'js' implementation with server side rendering.
   */
  initialWidth: 'xs' | 'sm' | 'md' | 'lg' | 'xl'

  /**
   * Hide te given breakpoint(s).
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
  lgDown: boolean
  lgUp: boolean
  mdDown: boolean
  mdUp: boolean
  smDown: boolean
  smUp: boolean
  xlDown: boolean
  xlUp: boolean
  xsDown: boolean
  xsUp: boolean
}

/**
 * Hidden quickly and responsively toggles visibility of components.
 * @param props The properties of Hidden.
 * @constructor Constructs an instance of Hidden.
 */
export const Hidden: React.FC<HiddenProps> = (props: HiddenProps) => {
  return (
    <MaterialHidden
      implementation={props.implementation}
      initialWidth={props.initialWidth}
      only={props.only}
      lgDown={props.lgDown}
      lgUp={props.lgUp}
      mdDown={props.mdDown}
      mdUp={props.mdUp}
      smDown={props.smDown}
      xlDown={props.xlDown}
      xsUp={props.xsUp}
    >
      {props.children}
    </MaterialHidden>
  )
}
