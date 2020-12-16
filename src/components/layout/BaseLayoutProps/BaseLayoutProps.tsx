import React from 'react'
import BaseComponentProps, {
  BaseComponentChildrenProps,
  BaseComponentClassesProps
} from '../../BaseComponentProps/BaseComponentProps'

export default interface BaseLayoutProps extends BaseComponentProps {
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

export interface BaseLayoutChildrenProps extends BaseComponentChildrenProps {
  /**
   * The component to use as the root component. Either a string to use a DOM element or a component
   */
  component?: React.ElementType
}

export interface BaseLayoutClassesProps extends BaseComponentClassesProps {
  /**
   * The component to use as the root component. Either a string to use a DOM element or a component
   */
  component?: React.ElementType
}
