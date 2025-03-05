import React from 'react';
import { HTMLAttributes } from 'react';
import clsx from 'clsx';
import { ChevronDownIcon, ChevronUpIcon } from '@gemeente-denhaag/icons';

interface AccordionSectionIconProps extends HTMLAttributes<HTMLDivElement> {
  isExpanded?: boolean;
}

const AccordionSectionIcon = ({ isExpanded, className, ...props }: AccordionSectionIconProps) => {
  const classNames = clsx('denhaag-accordion-section__icon', className);
  return (
    <div className={classNames} {...props}>
      {isExpanded ? <ChevronUpIcon /> : <ChevronDownIcon />}
    </div>
  );
};

export default AccordionSectionIcon;
