import React from 'react'
import MaterialAccordion from '@material-ui/core/Accordion'
import BaseProps from '@gemeente-denhaag/baseprops/BaseProps'

export interface AccordionProps extends BaseProps {
  /**
   * Content of the component.
   */
  children: React.ReactElement

  /**
   * If true, expands the Accordion by default.
   */
  defaultExpanded?: boolean

  /**
   * If true, the Accordion will be displayed in a disabled state.
   */
  disabled?: boolean

  /**
   * If true, expands the Accordion, otherwise collapse it.
   * Setting this prop enables control over the accordion.
   */
  expanded?: boolean

  /**
   * Callback fired when the expand/collapse state is changed.
   * @param event The event source of the callback.
   * @param expanded The expanded state of the Accordion.
   */
  onChange?: (event: React.ChangeEvent<{}>, expanded: boolean) => void

  /**
   * If true, rounded corners are disabled.
   */
  square?: boolean

  /**
   * Props applied to the Transition element.
   */
  TransitionProps?: object
}

/**
 * Accordion components contain creation flows and allow lightweight editing of an element.
 * @param props The properties of an Accordion component.
 * @constructor Constructs an instance of Accordion.
 */
export const Accordion: React.FC<AccordionProps> = (props: AccordionProps) => {
  return <MaterialAccordion {...props}>{props.children}</MaterialAccordion>
}

export default Accordion
