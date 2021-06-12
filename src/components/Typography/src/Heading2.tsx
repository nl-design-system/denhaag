import React from 'react';
import BaseProps from '@gemeente-denhaag/baseprops';
import './typography.module.css';

export type Heading2Props = BaseProps;

export const Heading2: React.FC<Heading2Props> = (props: Heading2Props) => {
  return <h2>{props.children}</h2>;
};
