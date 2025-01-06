import clsx from 'clsx';
import React, { OlHTMLAttributes } from 'react';

export interface ContactTimelineListProps extends OlHTMLAttributes<HTMLOListElement> {}

export const ContactTimelineList: React.FC<ContactTimelineListProps> = ({
  className,
  children,
  ...props
}: ContactTimelineListProps) => (
  <ol {...props} className={clsx('denhaag-contact-timeline', className)}>
    {children}
  </ol>
);
