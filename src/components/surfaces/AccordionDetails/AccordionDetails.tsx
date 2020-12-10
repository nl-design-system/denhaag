import React from 'react'
import MaterialAccordionDetails from '@material-ui/core/AccordionDetails'
import ComponentBaseProps from '../../ComponentBaseProps/ComponentBaseProps'

/**
 * Displays details of an Accordion component.
 * @param props The properties of an AccordionDetails component.
 * @constructor Constructs an instance of AccordionDetails.
 */
export const AccordionDetails: React.FC<ComponentBaseProps> = (
  props: ComponentBaseProps
) => {
  return (
    <MaterialAccordionDetails {...props}>
      {props.children}
    </MaterialAccordionDetails>
  )
}

export default AccordionDetails
