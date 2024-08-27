import React from 'react';
import './heading.scss';
import clsx from 'clsx';

export interface Heading1Props {
  className?: string;
  children?: React.ReactNode;
}

export const Heading1: React.FC<Heading1Props> = (props: Heading1Props) => {
  const rootClassNames = clsx('utrecht-heading-1', props.className);
  return <h1 className={rootClassNames}>{props.children}</h1>;
};
