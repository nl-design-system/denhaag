import React from 'react';
import BaseDataDisplayProps from '@gemeente-denhaag/basedatadisplayprops';
import './heading.scss';
import clsx from 'clsx';

export type HeadingProps = Omit<BaseDataDisplayProps, 'classes'> & { level: number };

export const Heading: React.FC<HeadingProps> = (props: HeadingProps) => {
  let rootClassNames;
  if (props.level === 1) {
    rootClassNames = clsx('utrecht-heading-1', props.className);
    return <h1 className={rootClassNames}>{props.children}</h1>;
  } else if (props.level === 2) {
    rootClassNames = clsx('utrecht-heading-2', props.className);
    return <h2 className={rootClassNames}>{props.children}</h2>;
  } else if (props.level === 3) {
    rootClassNames = clsx('utrecht-heading-3', props.className);
    return <h3 className={rootClassNames}>{props.children}</h3>;
  } else if (props.level === 4) {
    rootClassNames = clsx('utrecht-heading-4', props.className);
    return <h4 className={rootClassNames}>{props.children}</h4>;
  } else if (props.level === 5) {
    rootClassNames = clsx('utrecht-heading-5', props.className);
    return <h5 className={rootClassNames}>{props.children}</h5>;
  } else if (props.level === 6) {
    rootClassNames = clsx('utrecht-heading-6', props.className);
    return <h6 className={rootClassNames}>{props.children}</h6>;
  } else {
    return (
      <div className="utrecht-heading" role="heading" aria-level={props.level}>
        {props.children}
      </div>
    );
  }
};
