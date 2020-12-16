import React from 'react'

/**
 * An interface which supplies the most standard properties of each component.
 */
export default interface ComponentBaseProps extends React.HTMLAttributes<any> {
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
export interface ComponentBaseChildrenProps extends React.HTMLAttributes<any> {
  /**
   * The contents of the component.
   */
  children?: React.ReactNode
}

/**
 * An interface which supplies only the 'classes' property.
 */
export interface ComponentBaseClassesProps extends React.HTMLAttributes<any> {
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: object
}
