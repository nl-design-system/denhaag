import { MuiPickersUtilsProvider as MaterialPickersUtilsProvider } from '@material-ui/pickers';
import React from 'react';

export interface PickersUtilsProviderProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  utils: any;
  children: React.ReactNode;
}

/**
 * Utils provider for pickers
 * @param props
 */
export const PickersUtilsProvider: React.FC<PickersUtilsProviderProps> = (props: PickersUtilsProviderProps) => {
  return <MaterialPickersUtilsProvider {...props}>{props.children}</MaterialPickersUtilsProvider>;
};

export default PickersUtilsProvider;
