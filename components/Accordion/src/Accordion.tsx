import React, { HTMLAttributes, PropsWithChildren } from 'react';
import clsx from 'clsx';

export const Accordion = ({ className, children, ...props }: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) => {
  const classNames = clsx('denhaag-accordion', className);

  return (
    <div className={classNames} {...props}>
      {children}
    </div>
  );
};

export default Accordion;
