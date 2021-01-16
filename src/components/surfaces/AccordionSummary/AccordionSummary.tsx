import React from 'react'
import MaterialAccordionSummary from '@material-ui/core/AccordionSummary'
import BaseProps from '@gemeente-denhaag/baseprops'

export interface AccordionSummaryProps extends BaseProps {
  /**
   * The icon to display as the expand indicator.
   */
  expandIcon: React.ReactNode

  /**
   * Props applied to the IconButton element wrapping the expand icon.
   */
  IconButtonProps?: object
}

/**
 * AccordionSummary displays a title, a possible description and the expand icon for an Accordion component.
 * @param props The properties of an AccordionSummary component.
 * @constructor Constructs an instance of AccordionSummary.
 */
export const AccordionSummary: React.FC<AccordionSummaryProps> = (
  props: AccordionSummaryProps
) => {
  return (
    <MaterialAccordionSummary {...props}>
      {props.children}
    </MaterialAccordionSummary>
  )
}

export default AccordionSummary
