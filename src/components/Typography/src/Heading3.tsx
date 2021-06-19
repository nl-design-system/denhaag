import React from 'react';
import BaseDataDisplayProps from '@gemeente-denhaag/basedatadisplayprops';
import './heading.css';

export type Heading3Props = BaseDataDisplayProps;

export const Heading3: React.FC<Heading3Props> = (props: Heading3Props) => {
  return <h3 className="utrecht-heading-3 utrecht-heading-3--distanced">{props.children}</h3>;
};
