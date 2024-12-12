import clsx from 'clsx';
import React, { HTMLAttributes } from 'react';

type ContactTimelineMetaItemProps = HTMLAttributes<HTMLDivElement>;

export const ContactTimelineMetaItem: React.FC<ContactTimelineMetaItemProps> = ({ children }) => {
  return <div className={clsx('denhaag-contact-timeline__meta-item')}>{children}</div>;
};
