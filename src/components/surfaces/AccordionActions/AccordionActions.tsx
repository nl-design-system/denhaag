import React from 'react'
import MaterialAccordionActions from '@material-ui/core/AccordionActions'
import BaseComponentProps from '../../BaseComponentProps/BaseComponentProps'

export interface AccordionActionsProps extends BaseComponentProps {
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
