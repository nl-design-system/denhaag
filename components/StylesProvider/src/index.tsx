import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';
import './index.scss';
import '@utrecht/document-css';

export interface StylesProviderProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

/**
 * Styles provider to be placed at the root of your application in which all other denhaag-components will exist.
 * @param props Only allow for children
 */
export const StylesProvider = ({ className, ...props }: StylesProviderProps) => {
  return (
    <div
      className={clsx('denhaag-styles-provider', 'utrecht-document', 'utrecht-document--surface', className)}
      {...props}
    />
  );
};
