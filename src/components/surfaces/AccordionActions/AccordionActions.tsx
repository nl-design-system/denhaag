import React from 'react'
import MaterialAccordionActions from '@material-ui/core/AccordionActions'
import ComponentBaseProps from '../../ComponentBaseProps/ComponentBaseProps'

export interface AccordionActionsProps extends ComponentBaseProps {

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
