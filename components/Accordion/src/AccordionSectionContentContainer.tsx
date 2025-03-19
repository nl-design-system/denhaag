import React, { PropsWithChildren } from 'react';
import { HTMLAttributes } from 'react';
import clsx from 'clsx';

const AccordionSectionContentContainer = ({
  children,
  className,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) => {
  const classNames = clsx('denhaag-accordion-section__content-container', className);
  return (
    <div className={classNames} {...props}>
      {children}
    </div>
  );
};

export default AccordionSectionContentContainer;
