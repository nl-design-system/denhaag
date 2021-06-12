import React from 'react';
import BaseProps from '@gemeente-denhaag/baseprops';
import './typography.module.css';

export type Heading4Props = BaseProps;

export const Heading4: React.FC<Heading4Props> = (props: Heading4Props) => {
  return <h4>{props.children}</h4>;
};
