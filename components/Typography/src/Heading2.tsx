import React from 'react';
import './heading.scss';
import clsx from 'clsx';

export interface Heading2Props {
  className?: string;
  children?: React.ReactNode;
}

export const Heading2 = (props: Heading2Props) => {
  const rootClassNames = clsx('utrecht-heading-2', props.className);
  return <h2 className={rootClassNames}>{props.children}</h2>;
};
