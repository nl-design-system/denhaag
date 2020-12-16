import React from 'react'

export default interface ComponentBaseProps {
  /**
   * The contents of the component.
   */
  children?: React.ReactNode

  /**
   * Override or extend the styles applied to the component.
   */
  classes?: object
}

export interface ComponentBaseChildrenProps {
  /**
   * The contents of the component.
   */
  children?: React.ReactNode
}

export interface ComponentBaseClassesProps {
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: object
}
