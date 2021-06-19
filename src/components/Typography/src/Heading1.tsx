import React from 'react';
import BaseDataDisplayProps from '@gemeente-denhaag/basedatadisplayprops';
import './heading.css';

export type Heading1Props = BaseDataDisplayProps;

export const Heading1: React.FC<Heading1Props> = (props: Heading1Props) => {
  return <h1 className="utrecht-heading-1 utrecht-heading-1--distanced">{props.children}</h1>;
};
