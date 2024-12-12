import clsx from 'clsx';
import React, { HTMLAttributes } from 'react';

type ContactTimelineMetaSeparatorProps = HTMLAttributes<HTMLDivElement>;

export const ContactTimelineMetaSeparator: React.FC<ContactTimelineMetaSeparatorProps> = ({ children }) => {
  return <div className={clsx('denhaag-contact-timeline__meta-separator')}>{children}</div>;
};
