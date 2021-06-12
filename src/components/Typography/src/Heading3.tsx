import React from 'react';
import BaseDataDisplayProps from '@gemeente-denhaag/basedatadisplayprops';
import './typography.module.css';

export type Heading3Props = BaseDataDisplayProps;

export const Heading3: React.FC<Heading3Props> = (props: Heading3Props) => {
  return <h3 className="denhaag-heading-3">{props.children}</h3>;
};
