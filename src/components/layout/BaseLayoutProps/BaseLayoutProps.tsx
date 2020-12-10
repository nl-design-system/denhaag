import React from 'react'
import ComponentBaseProps from '../../ComponentBaseProps/ComponentBaseProps'

export default interface BaseLayoutProps extends ComponentBaseProps {
  /**
   * The component to use as the root component. Either a string to use a DOM element or a component
   */
  component?: React.ElementType
}
