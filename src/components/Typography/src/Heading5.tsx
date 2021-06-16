import React from 'react';
import BaseDataDisplayProps from '@gemeente-denhaag/basedatadisplayprops';
import './heading.module.css';

export type Heading5Props = BaseDataDisplayProps;

export const Heading5: React.FC<Heading5Props> = (props: Heading5Props) => {
  return <h5 className="utrecht-heading-5 utrecht-heading-5--distanced">{props.children}</h5>;
};
