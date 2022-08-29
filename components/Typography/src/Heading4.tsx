import React from 'react';
import BaseDataDisplayProps from '@gemeente-denhaag/basedatadisplayprops';
import './heading.scss';
import clsx from 'clsx';

export type Heading4Props = Omit<BaseDataDisplayProps, 'classes'>;

export const Heading4: React.FC<Heading4Props> = (props: Heading4Props) => {
  const rootClassNames = clsx('utrecht-heading-4', props.className);
  return <h4 className={rootClassNames}>{props.children}</h4>;
};
