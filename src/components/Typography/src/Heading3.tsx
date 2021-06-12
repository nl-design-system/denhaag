import React from 'react';
import BaseProps from '@gemeente-denhaag/baseprops';

export type Heading3Props = BaseProps;

export const Heading3: React.FC<Heading3Props> = (props: Heading3Props) => {
  return <h3>{props.children}</h3>;
};
