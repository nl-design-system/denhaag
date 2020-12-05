import { MuiPickersUtilsProvider as MaterialPickersUtilsProvider } from '@material-ui/pickers'
import React, { ReactNode } from 'react'

export interface PickersUtilsProviderProps {
  utils: any
  children: ReactNode
}

/**
 * Utils provider for pickers
 * @param props
 */
export const PickersUtilsProvider: React.FC<PickersUtilsProviderProps> = (
  props: PickersUtilsProviderProps
) => {
  return (
    <MaterialPickersUtilsProvider utils={props.utils}>
      {props.children}
    </MaterialPickersUtilsProvider>
  )
}

export default PickersUtilsProvider
