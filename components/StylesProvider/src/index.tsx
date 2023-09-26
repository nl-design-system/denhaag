import React from 'react';
import { StylesProvider as MaterialStylesProvider } from '@material-ui/core';
import '@utrecht/components/document/css/index.scss';

export interface StylesProviderProps {
  children?: React.ReactNode;
}

/**
 * Styles provider to be placed at the root of your application in which all other denhaag-components will exist.
 * @param props Only allow for children
 */
export const StylesProvider: React.FC<StylesProviderProps> = (props: StylesProviderProps) => {
  // React version from Material is not compatible with new React
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let OldMaterialStylesProvider = MaterialStylesProvider as any;
  return (
    <div className={'utrecht-document utrecht-document--surface'}>
      <OldMaterialStylesProvider injectFirst>{props.children}</OldMaterialStylesProvider>
    </div>
  );
};

/**
 * Default export
 */
export default StylesProvider;
