import React, { PropsWithChildren } from 'react';
import { HTMLAttributes } from 'react';
import clsx from 'clsx';

const AccordionSectionDescription = ({
  children,
  className,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) => {
  const classNames = clsx('denhaag-accordion-section__description', className);
  return (
    <div className={classNames} {...props}>
      {children}
    </div>
  );
};

export default AccordionSectionDescription;
