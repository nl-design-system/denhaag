import clsx from 'clsx';
import React, { TimeHTMLAttributes } from 'react';

interface ContactTimelineMetaTimeItemProps extends TimeHTMLAttributes<HTMLTimeElement> {}

export const ContactTimelineMetaTimeItem: React.FC<ContactTimelineMetaTimeItemProps> = ({ children, ...props }) => {
  return (
    <time className={clsx('denhaag-contact-timeline__meta-item')} {...props}>
      {children}
    </time>
  );
};
