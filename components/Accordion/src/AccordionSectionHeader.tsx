import React, { PropsWithChildren, ReactNode } from 'react';
import { HTMLAttributes } from 'react';
import clsx from 'clsx';
import AccordionSectionTitle from './AccordionSectionTitle';
import AccordionSectionDescription from './AccordionSectionDescription';
import AccordionSectionIcon from './AccordionSectionIcon';

interface AccordionSectionHeaderProps extends PropsWithChildren<HTMLAttributes<HTMLButtonElement>> {
  description?: ReactNode;
  isExpanded?: boolean;
}

const AccordionSectionHeader = ({
  children,
  description,
  isExpanded,
  onClick,
  className,
  ...props
}: AccordionSectionHeaderProps) => {
  const classNames = clsx('denhaag-accordion-section__header', className);
  return (
    <button className={classNames} onClick={onClick} {...props}>
      <AccordionSectionIcon isExpanded={isExpanded} />
      <div>
        <AccordionSectionTitle>{children}</AccordionSectionTitle>
        {description && <AccordionSectionDescription>{description}</AccordionSectionDescription>}
      </div>
    </button>
  );
};

export default AccordionSectionHeader;
