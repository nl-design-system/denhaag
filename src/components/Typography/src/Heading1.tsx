import React from 'react';
import BaseDataDisplayProps from '@gemeente-denhaag/basedatadisplayprops';
import './typography.module.css';

export type Heading1Props = BaseDataDisplayProps;

export const Heading1: React.FC<Heading1Props> = (props: Heading1Props) => {
  return <h1 className="denhaag-heading-1">{props.children}</h1>;
};
