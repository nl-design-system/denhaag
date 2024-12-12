import clsx from 'clsx';
import React, { HTMLAttributes } from 'react';

type ContactTimelineHeaderContentProps = HTMLAttributes<HTMLDivElement>;

export const ContactTimelineHeaderContent: React.FC<ContactTimelineHeaderContentProps> = ({ children }) => {
  return <div className={clsx('denhaag-contact-timeline__step-header__content')}>{children}</div>;
};
