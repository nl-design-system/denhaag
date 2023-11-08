import React from 'react';
import '@utrecht/components/document/css/index.scss';

export interface StylesProviderProps {
  children?: React.ReactNode;
}

/**
 * Styles provider to be placed at the root of your application in which all other denhaag-components will exist.
 * @param props Only allow for children
 */
export const StylesProvider: React.FC<StylesProviderProps> = (props: StylesProviderProps) => {
  return <div className={'utrecht-document utrecht-document--surface'}>{props.children}</div>;
};

/**
 * Default export
 */
export default StylesProvider;
