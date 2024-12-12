import clsx from 'clsx';
import React, { HTMLAttributes } from 'react';

type ContactTimelineMetaProps = HTMLAttributes<HTMLDivElement>;

export const ContactTimelineMeta: React.FC<ContactTimelineMetaProps> = ({ children }) => {
  return <div className={clsx('denhaag-contact-timeline__meta')}>{children}</div>;
};
