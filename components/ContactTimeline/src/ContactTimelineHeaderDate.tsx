import clsx from 'clsx';
import React, { HTMLAttributes } from 'react';

interface ContactTimelineHeaderDateProps extends HTMLAttributes<HTMLDivElement> {}

export const ContactTimelineHeaderDate: React.FC<ContactTimelineHeaderDateProps> = ({ children }) => {
  return <div className={clsx('denhaag-contact-timeline__step-header__date')}>{children}</div>;
};
