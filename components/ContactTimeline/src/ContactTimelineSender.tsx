import clsx from 'clsx';
import React, { HTMLAttributes } from 'react';

interface ContactTimelineSenderProps extends HTMLAttributes<HTMLSpanElement> {}

export const ContactTimelineSender: React.FC<ContactTimelineSenderProps> = ({ children }) => {
  return <div className={clsx('denhaag-contact-timeline__sender')}>{children}</div>;
};
