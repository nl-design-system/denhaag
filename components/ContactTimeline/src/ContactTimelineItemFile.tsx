import clsx from 'clsx';
import React, { HTMLAttributes } from 'react';

type ContactTimelineItemFileProps = HTMLAttributes<HTMLDivElement>;

export const ContactTimelineItemFile: React.FC<ContactTimelineItemFileProps> = ({ children }) => {
  return <div className={clsx('denhaag-contact-timeline__step-item-file')}>{children}</div>;
};
