import React from 'react';
import './heading.scss';
import clsx from 'clsx';

export interface Heading4Props {
  className?: string;
  children?: React.ReactNode;
}

export const Heading4: React.FC<Heading4Props> = (props: Heading4Props) => {
  const rootClassNames = clsx('utrecht-heading-4', props.className);
  return <h4 className={rootClassNames}>{props.children}</h4>;
};
