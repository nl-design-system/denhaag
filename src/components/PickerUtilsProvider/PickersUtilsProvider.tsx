import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import React, { ReactElement, ReactNode } from 'react'

export interface PickersUtilsProviderProps {
  utils: any
  children: ReactNode
}

export const PickersUtilsProvider: React.FC<PickersUtilsProviderProps> = (
  props: PickersUtilsProviderProps
) => {
  return (
    <MuiPickersUtilsProvider utils={props.utils} children={props.children} />
  )
}

export default PickersUtilsProvider
