import React from 'react';
import BaseDataDisplayProps from '@gemeente-denhaag/basedatadisplayprops';
import './heading.scss';
import './space.scss';
import clsx from 'clsx';

export type Heading3Props = Omit<BaseDataDisplayProps, 'classes'>;

export const Heading3: React.FC<Heading3Props> = (props: Heading3Props) => {
  const rootClassNames = clsx('utrecht-heading-3', props.className);
  return <h3 className={rootClassNames}>{props.children}</h3>;
};
