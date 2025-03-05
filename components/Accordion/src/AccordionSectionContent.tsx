import React, { PropsWithChildren } from 'react';
import { HTMLAttributes } from 'react';
import clsx from 'clsx';

interface AccordionSectionContentProps extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {
  isExpanded?: boolean;
}

const AccordionSectionContent = ({ isExpanded, children, className, ...props }: AccordionSectionContentProps) => {
  const classNames = clsx(
    'denhaag-accordion-section__content',
    { 'denhaag-accordion-section__content--expanded': isExpanded },
    className,
  );
  return (
    <div className={classNames} aria-expanded={isExpanded} {...props}>
      {children}
    </div>
  );
};

export default AccordionSectionContent;
