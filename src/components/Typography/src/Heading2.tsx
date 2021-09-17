import React from 'react';
import BaseDataDisplayProps from '@gemeente-denhaag/basedatadisplayprops';
import './heading.css';
import clsx from 'clsx';

export type Heading2Props = Omit<BaseDataDisplayProps, 'classes'>;

export const Heading2: React.FC<Heading2Props> = (props: Heading2Props) => {
  const rootClassNames = clsx('utrecht-heading-2', 'utrecht-heading-2--distanced', props.className);
  return <h2 className={rootClassNames}>{props.children}</h2>;
};
