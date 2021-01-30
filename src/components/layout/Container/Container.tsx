import React from 'react'
import MaterialContainer from '@material-ui/core/Container'
import BaseLayoutProps from '../BaseLayoutProps/BaseLayoutProps'

export interface ContainerProps extends BaseLayoutProps {
  /**
   * Contents of the Container component
   */
  children: NonNullable<React.ReactNode>

  /**
   * Indicate whether the left and right padding of the component should be removed.
   */
  disableGutters?: boolean

  /**
   * Sets the max-width to match the min-width.
   */
  fixed?: boolean

  /**
   * Determine the maximum width of the Container. When false, no max-width is set.
   */
  maxWidth?: 'lg' | 'md' | 'sm' | 'xl' | 'xs' | false
}

/**
 * The Container allows developers to center content horizontally.
 * @param props the properties of the Container.
 * @constructor Constructs an instance of Container.
 */
export const Container: React.FC<ContainerProps> = (props: ContainerProps) => {
  return <MaterialContainer {...props}>{props.children}</MaterialContainer>
}

/**
 * Default export for Container
 */
export default Container
