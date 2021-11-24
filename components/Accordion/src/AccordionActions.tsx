import React from 'react';
import { AccordionActions as MaterialAccordionActions } from '@material-ui/core';
import BaseProps from '@gemeente-denhaag/baseprops';

export interface AccordionActionsProps extends BaseProps {
  /**
   * If true, the actions do not have additional margin.
   */
  disableSpacing?: boolean;
}

export const AccordionActions: React.FC<AccordionActionsProps> = (props: AccordionActionsProps) => {
  return <MaterialAccordionActions {...props}>{props.children}</MaterialAccordionActions>;
};

export default AccordionActions;
