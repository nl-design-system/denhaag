import React from 'react';
import BaseDataDisplayProps from '@gemeente-denhaag/basedatadisplayprops';
import './typography.module.css';

export type Heading5Props = BaseDataDisplayProps;

export const Heading5: React.FC<Heading5Props> = (props: Heading5Props) => {
  return <h5 className="denhaag-heading-5">{props.children}</h5>;
};
