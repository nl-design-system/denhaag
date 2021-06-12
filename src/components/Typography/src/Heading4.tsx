import React from 'react';
import BaseDataDisplayProps from '@gemeente-denhaag/basedatadisplayprops';
import './typography.module.css';

export type Heading4Props = BaseDataDisplayProps;

export const Heading4: React.FC<Heading4Props> = (props: Heading4Props) => {
  return <h4 className="denhaag-heading-4">{props.children}</h4>;
};
