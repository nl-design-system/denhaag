import React from 'react';
import BaseDataDisplayProps from '@gemeente-denhaag/basedatadisplayprops';
import './heading.css';
import clsx from 'clsx';

export type Heading1Props = BaseDataDisplayProps;

export const Heading1: React.FC<Heading1Props> = (props: Heading1Props) => {
  const rootClassNames = clsx('utrecht-heading-1 utrecht-heading-1--distanced', props.className);
  return <h1 className={rootClassNames}>{props.children}</h1>;
};
