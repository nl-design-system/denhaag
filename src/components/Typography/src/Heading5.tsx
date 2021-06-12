import React from 'react';
import BaseProps from '@gemeente-denhaag/baseprops';

export type Heading5Props = BaseProps;

export const Heading5: React.FC<Heading5Props> = (props: Heading5Props) => {
  return <h5>{props.children}</h5>;
};
