import clsx from 'clsx';
import React, { HTMLAttributes } from 'react';

interface ContactTimelineMetaMarkerProps extends HTMLAttributes<HTMLSpanElement> {}

export const ContactTimelineMetaMarker: React.FC<ContactTimelineMetaMarkerProps> = ({ children }) => {
  return <div className={clsx('denhaag-contact-timeline__meta-marker')}>{children}</div>;
};
