import React from 'react';
import './heading.scss';
import './space.scss';
import clsx from 'clsx';

export interface Heading5Props {
  className?: string;
  children?: React.ReactNode;
}

export const Heading5: React.FC<Heading5Props> = (props: Heading5Props) => {
  const rootClassNames = clsx('utrecht-heading-5', props.className);
  return <h5 className={rootClassNames}>{props.children}</h5>;
};
