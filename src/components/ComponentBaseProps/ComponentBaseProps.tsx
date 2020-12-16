import React from 'react'

/**
 * An interface which supplies the most standard properties of each component.
 */
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

/**
 * An interface which supplies only the 'children' property.
 */
export interface ComponentBaseChildrenProps {
  /**
   * The contents of the component.
   */
  children?: React.ReactNode
}

/**
 * An interface which supplies only the 'classes' property.
 */
export interface ComponentBaseClassesProps {
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: object
}
