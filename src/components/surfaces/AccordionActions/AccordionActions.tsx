import React, { ReactElement } from 'react'
import MaterialAccordionActions from '@material-ui/core/AccordionActions'

export interface AccordionActionsProps {
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: object

  /**
   * The content of the component
   */
  children: ReactElement

  /**
   * If true, the actions do not have additional margin.
   */
  disableSpacing?: boolean
}

export const AccordionActions: React.FC<AccordionActionsProps> = (
  props: AccordionActionsProps
) => {
  return (
    <MaterialAccordionActions {...props}>
      {props.children}
    </MaterialAccordionActions>
  )
}

export default AccordionActions
