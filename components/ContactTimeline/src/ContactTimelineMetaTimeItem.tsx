import clsx from 'clsx';
import React, { TimeHTMLAttributes } from 'react';

interface ContactTimelineMetaTimeItemProps extends TimeHTMLAttributes<HTMLTimeElement> {}

export const ContactTimelineMetaTimeItem: React.FC<ContactTimelineMetaTimeItemProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <time
      className={clsx(
        'denhaag-contact-timeline__meta-item',
        'denhaag-contact-timeline__meta-item--time-item',
        className,
      )}
      {...props}
    >
      {children}
    </time>
  );
};
