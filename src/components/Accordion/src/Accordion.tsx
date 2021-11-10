import React from 'react';
import { Accordion as MaterialAccordion } from '@material-ui/core';
import BaseProps from '@gemeente-denhaag/baseprops';

export interface AccordionProps extends BaseProps {
  /**
   * Content of the component.
   */
  children: React.ReactElement[];

  /**
   * If true, expands the Accordion by default.
   */
  defaultExpanded?: boolean;

  /**
   * If true, the Accordion will be displayed in a disabled state.
   */
  disabled?: boolean;

  /**
   * If true, expands the Accordion, otherwise collapse it.
   * Setting this prop enables control over the accordion.
   */
  expanded?: boolean;

  /**
   * Callback fired when the expand/collapse state is changed.
   * @param event The event source of the callback.
   * @param expanded The expanded state of the Accordion.
   */
  onChange?: (event: React.ChangeEvent<unknown>, expanded: boolean) => void;

  /**
   * Props applied to the Transition element.
   */
  TransitionProps?: Record<string, unknown>;
}

/**
 * Accordion components contain creation flows and allow lightweight editing of an element.
 * @param props The properties of an Accordion component.
 * @constructor Constructs an instance of Accordion.
 */
export const Accordion: React.FC<AccordionProps> = (props: AccordionProps) => {
  return <MaterialAccordion {...props}>{props.children}</MaterialAccordion>;
};

export default Accordion;
