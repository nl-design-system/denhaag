import clsx from 'clsx';
import React, { HTMLAttributes } from 'react';

type ContactTimelineHeaderDateProps = HTMLAttributes<HTMLDivElement>;

export const ContactTimelineHeaderDate: React.FC<ContactTimelineHeaderDateProps> = ({ children }) => {
  return <div className={clsx('denhaag-contact-timeline__step-header__date')}>{children}</div>;
};
