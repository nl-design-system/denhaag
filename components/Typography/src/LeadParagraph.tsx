import React from 'react';
import './paragraph.scss';
import './space.scss';
import clsx from 'clsx';

export interface LeadParagraphProps {
  className?: string;
  children?: React.ReactNode;
}

export const LeadParagraph: React.FC<LeadParagraphProps> = (props: LeadParagraphProps) => {
  const rootClassNames = clsx('utrecht-paragraph', 'utrecht-paragraph--lead', props.className);
  return <p className={rootClassNames}>{props.children}</p>;
};
