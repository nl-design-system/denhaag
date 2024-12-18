import clsx from 'clsx';
import React, { OlHTMLAttributes } from 'react';

export type ContactTimelineListProps = OlHTMLAttributes<HTMLOListElement>;

export const ContactTimelineList: React.FC<ContactTimelineListProps> = ({
  className,
  children,
  ...props
}: ContactTimelineListProps) => (
  <ol {...props} className={clsx('denhaag-contact-timeline', className)}>
    {children}
  </ol>
);
