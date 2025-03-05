import React, { PropsWithChildren } from 'react';
import { HTMLAttributes } from 'react';
import clsx from 'clsx';

const AccordionSectionTitle = ({
  children,
  className,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLHeadingElement>>) => {
  const classNames = clsx('denhaag-accordion-section__title', className);
  return (
    <h2 className={classNames} {...props}>
      {children}
    </h2>
  );
};

export default AccordionSectionTitle;
