import React from 'react';
import BaseDataDisplayProps from '@gemeente-denhaag/basedatadisplayprops';
import './heading.scss';
import './space.scss';
import clsx from 'clsx';

export type Heading1Props = Omit<BaseDataDisplayProps, 'classes'>;

export const Heading1: React.FC<Heading1Props> = (props: Heading1Props) => {
  const rootClassNames = clsx('utrecht-heading-1', props.className);
  return <h1 className={rootClassNames}>{props.children}</h1>;
};
