import clsx from 'clsx';
import React, { HTMLAttributes } from 'react';

type ContactTimelineItemSenderProps = HTMLAttributes<HTMLDivElement>;

export const ContactTimelineItemSender: React.FC<ContactTimelineItemSenderProps> = ({ children }) => {
  return <div className={clsx('denhaag-contact-timeline__step-item-sender')}>{children}</div>;
};
