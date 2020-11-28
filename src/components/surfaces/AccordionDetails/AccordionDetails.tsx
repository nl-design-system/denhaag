import React, { ReactElement } from 'react'
import MaterialAccordionDetails from '@material-ui/core/AccordionDetails'

export interface AccordionDetailsProps {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: object

  /**
   * The content of the component
   */
  children: ReactElement
}

/**
 * Displays details of an Accordion component.
 * @param props The properties of an AccordionDetails component.
 * @constructor Constructs an instance of AccordionDetails.
 */
export const AccordionDetails: React.FC<AccordionDetailsProps> = (
  props: AccordionDetailsProps
) => {
  return (
    <MaterialAccordionDetails {...props}>
      {props.children}
    </MaterialAccordionDetails>
  )
}

export default AccordionDetails
