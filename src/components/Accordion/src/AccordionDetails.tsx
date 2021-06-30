import React from 'react';
import { AccordionDetails as MaterialAccordionDetails } from '@material-ui/core';
import BaseProps from '@gemeente-denhaag/baseprops';

export type AccordionDetailsProps = BaseProps;

/**
 * Displays details of an Accordion component.
 * @param props The properties of an AccordionDetails component.
 * @constructor Constructs an instance of AccordionDetails.
 */
export const AccordionDetails: React.FC<AccordionDetailsProps> = (props: AccordionDetailsProps) => {
  return <MaterialAccordionDetails {...props}>{props.children}</MaterialAccordionDetails>;
};

export default AccordionDetails;
