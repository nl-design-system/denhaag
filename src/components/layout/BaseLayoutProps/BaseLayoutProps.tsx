import React from 'react'
import ComponentBaseProps, {
  ComponentBaseChildrenProps,
  ComponentBaseClassesProps
} from '../../ComponentBaseProps/ComponentBaseProps'

export default interface BaseLayoutProps extends ComponentBaseProps {
  /**
   * The component to use as the root component. Either a string to use a DOM element or a component
   */
  component?: React.ElementType
}

export interface BaseLayoutComponentProps {
  /**
   * The component to use as the root component. Either a string to use a DOM element or a component
   */
  component?: React.ElementType
}

export interface BaseLayoutChildrenProps extends ComponentBaseChildrenProps {
  /**
   * The component to use as the root component. Either a string to use a DOM element or a component
   */
  component?: React.ElementType
}

export interface BaseLayoutClassesProps extends ComponentBaseClassesProps {
  /**
   * The component to use as the root component. Either a string to use a DOM element or a component
   */
  component?: React.ElementType
}
