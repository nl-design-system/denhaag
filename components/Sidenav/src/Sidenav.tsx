import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';

export type SubnavigationProps = HTMLAttributes<HTMLDivElement>;

export const Sidenav: React.FC<SubnavigationProps> = (props: SubnavigationProps) => {
  const className = clsx('denhaag-sidenav', props.className);

  return (
    <nav {...props} className={className}>
      {props.children}
    </nav>
  );
};

export default Sidenav;
