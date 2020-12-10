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
