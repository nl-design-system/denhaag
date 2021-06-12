import React from 'react';
import BaseProps from '@gemeente-denhaag/baseprops';
import './typography.module.css';

export type Heading1Props = BaseProps;

export const Heading1: React.FC<Heading1Props> = (props: Heading1Props) => {
  return <h1>{props.children}</h1>;
};
