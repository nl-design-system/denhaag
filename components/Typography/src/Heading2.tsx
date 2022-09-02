import React from 'react';
import BaseDataDisplayProps from '@gemeente-denhaag/basedatadisplayprops';
import './heading.scss';
import './space.scss';
import clsx from 'clsx';

export type Heading2Props = Omit<BaseDataDisplayProps, 'classes'>;

export const Heading2: React.FC<Heading2Props> = (props: Heading2Props) => {
  const rootClassNames = clsx('utrecht-heading-2', props.className);
  return <h2 className={rootClassNames}>{props.children}</h2>;
};
