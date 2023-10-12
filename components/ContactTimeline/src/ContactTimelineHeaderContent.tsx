import clsx from 'clsx';
import React, { HTMLAttributes } from 'react';

interface ContactTimelineHeaderContentProps extends HTMLAttributes<HTMLSpanElement> {}

export const ContactTimelineHeaderContent: React.FC<ContactTimelineHeaderContentProps> = ({ children }) => {
  return <div className={clsx('denhaag-contact-timeline__step-header__content')}>{children}</div>;
};
