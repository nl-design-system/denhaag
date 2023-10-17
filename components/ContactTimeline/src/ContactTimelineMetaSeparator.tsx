import clsx from 'clsx';
import React, { HTMLAttributes } from 'react';

interface ContactTimelineMetaSeparatorProps extends HTMLAttributes<HTMLSpanElement> {}

export const ContactTimelineMetaSeparator: React.FC<ContactTimelineMetaSeparatorProps> = ({ children }) => {
  return <div className={clsx('denhaag-contact-timeline__meta-separator')}>{children}</div>;
};
