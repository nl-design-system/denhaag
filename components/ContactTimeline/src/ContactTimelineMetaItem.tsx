import clsx from 'clsx';
import React, { HTMLAttributes } from 'react';

interface ContactTimelineMetaItemProps extends HTMLAttributes<HTMLDivElement> {}

export const ContactTimelineMetaItem: React.FC<ContactTimelineMetaItemProps> = ({ children }) => {
  return <div className={clsx('denhaag-contact-timeline__meta-item')}>{children}</div>;
};
