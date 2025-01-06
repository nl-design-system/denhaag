import clsx from 'clsx';
import React, { HTMLAttributes } from 'react';

interface ContactTimelineItemSenderProps extends HTMLAttributes<HTMLDivElement> {}

export const ContactTimelineItemSender: React.FC<ContactTimelineItemSenderProps> = ({ children }) => {
  return <div className={clsx('denhaag-contact-timeline__step-item-sender')}>{children}</div>;
};
