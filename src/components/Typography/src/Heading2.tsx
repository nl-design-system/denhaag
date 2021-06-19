import React from 'react';
import BaseDataDisplayProps from '@gemeente-denhaag/basedatadisplayprops';
import './heading.css';

export type Heading2Props = BaseDataDisplayProps;

export const Heading2: React.FC<Heading2Props> = (props: Heading2Props) => {
  return <h2 className="utrecht-heading-2 utrecht-heading-2--distanced">{props.children}</h2>;
};
