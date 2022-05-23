import React from 'react';
import { StylesProvider as MaterialStylesProvider } from '@material-ui/core';
import '@utrecht/component-library-css/dist/index.css';

export interface StylesProviderProps {
  children?: React.ReactNode;
}

/**
 * Styles provider to be placed at the root of your application in which all other denhaag-components will exist.
 * @param props Only allow for children
 */
export const StylesProvider: React.FC<StylesProviderProps> = (props: StylesProviderProps) => {
  return (
    <div className={'utrecht-document utrecht-document--surface'}>
      <MaterialStylesProvider injectFirst>{props.children}</MaterialStylesProvider>
    </div>
  );
};

/**
 * Default export
 */
export default StylesProvider;
