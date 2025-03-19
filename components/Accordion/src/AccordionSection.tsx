import React, { PropsWithChildren, ReactNode, useId, useState } from 'react';
import AccordionSectionContent from './AccordionSectionContent';
import AccordionSectionHeader from './AccordionSectionHeader';
import clsx from 'clsx';
import AccordionSectionContentContainer from './AccordionSectionContentContainer';
import AccordionSectionContentBody from './AccordionSectionContentBody';

export interface AccordionSectionProps {
  title: ReactNode;
  description?: ReactNode;
}

export const AccordionSection = ({ title, description, children }: PropsWithChildren<AccordionSectionProps>) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const togglePanel = () => {
    setIsExpanded(!isExpanded);
  };

  const id = useId();

  const classNames = clsx('denhaag-accordion-section', { 'denhaag-accordion-section--expanded': isExpanded });

  return (
    <div className={classNames}>
      <AccordionSectionHeader
        aria-controls={id}
        description={description}
        isExpanded={isExpanded}
        onClick={togglePanel}
      >
        {title}
      </AccordionSectionHeader>
      <AccordionSectionContent id={id} isExpanded={isExpanded} aria-hidden={!isExpanded}>
        <AccordionSectionContentContainer>
          <AccordionSectionContentBody>{children}</AccordionSectionContentBody>
        </AccordionSectionContentContainer>
      </AccordionSectionContent>
    </div>
  );
};

export default AccordionSection;
