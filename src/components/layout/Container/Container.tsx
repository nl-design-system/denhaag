import React, { ElementType, ReactElement } from 'react'
import MaterialContainer from '@material-ui/core/Container'

export interface ContainerProps {
  /**
   * Overrides or extends the styles applied to the component.
   */
  classes: object

  /**
   * The component to use as the root component. Either a string to use a DOM element or a component
   */
  component: ElementType

  /**
   * The content of the component
   */
  children: ReactElement

  /**
   * Indicate whether the left and right padding of the component should be removed.
   */
  disableGutters: boolean

  /**
   * Sets the max-width to match the min-width.
   */
  fixed: boolean

  /**
   * Determine the maximum width of the container. When false, no max-width is set.
   */
  maxWidth: 'lg' | 'md' | 'sm' | 'xl' | 'xs' | false
}

/**
 * The container allows developers to center content horizontally.
 * @param props the properties of the Container.
 * @constructor Constructs an instance of Container.
 */
export const Container: React.FC<ContainerProps> = (props: ContainerProps) => {
  return (
    <MaterialContainer
      classes={props.classes}
      component={props.component}
      fixed={props.fixed}
      maxWidth={props.maxWidth}
      disableGutters={props.disableGutters}
    >
      {props.children}
    </MaterialContainer>
  )
}

/**
 * Default export for Container
 */
export default Container
