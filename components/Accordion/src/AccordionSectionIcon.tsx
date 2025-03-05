import React from 'react';
import { HTMLAttributes } from 'react';
import clsx from 'clsx';
import { ChevronDownIcon } from '@gemeente-denhaag/icons';

interface AccordionSectionIconProps extends HTMLAttributes<HTMLDivElement> {
  isExpanded?: boolean;
}

const AccordionSectionIcon = ({ isExpanded, className, ...props }: AccordionSectionIconProps) => {
  const classNames = clsx(
    'denhaag-accordion-section__icon',
    { 'denhaag-accordion-section__icon--expanded': isExpanded },
    className,
  );
  return (
    <div className={classNames} {...props}>
      <ChevronDownIcon />
    </div>
  );
};

export default AccordionSectionIcon;
