import React from 'react';
import BaseDataDisplayProps from '@gemeente-denhaag/basedatadisplayprops';
import './typography.module.css';

export type Heading2Props = BaseDataDisplayProps;

export const Heading2: React.FC<Heading2Props> = (props: Heading2Props) => {
  return <h2 className="denhaag-heading-2">{props.children}</h2>;
};
