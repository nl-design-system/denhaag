import React from 'react';
import BaseDataDisplayProps from '@gemeente-denhaag/basedatadisplayprops';
import './heading.css';
import clsx from 'clsx';

export type Heading5Props = Omit<BaseDataDisplayProps, 'classes'>;

export const Heading5: React.FC<Heading5Props> = (props: Heading5Props) => {
  const rootClassNames = clsx('utrecht-heading-5', 'utrecht-heading-5--distanced', props.className);
  return <h5 className={rootClassNames}>{props.children}</h5>;
};
