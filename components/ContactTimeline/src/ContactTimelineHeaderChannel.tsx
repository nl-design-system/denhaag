import clsx from 'clsx';
import React, { HTMLAttributes } from 'react';

type ContactTimelineHeaderChannelProps = HTMLAttributes<HTMLDivElement>;

export const ContactTimelineHeaderChannel: React.FC<ContactTimelineHeaderChannelProps> = ({ children }) => {
  return <div className={clsx('denhaag-contact-timeline__step-header__channel')}>{children}</div>;
};
