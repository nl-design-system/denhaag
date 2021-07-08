import React from 'react';
import BaseDataDisplayProps from '@gemeente-denhaag/basedatadisplayprops';
import './heading.css';

export type Heading4Props = BaseDataDisplayProps;

export const Heading4: React.FC<Heading4Props> = (props: Heading4Props) => {
  return <h4 className="utrecht-heading-4 utrecht-heading-4--distanced">{props.children}</h4>;
};
