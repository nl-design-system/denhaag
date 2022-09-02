import React from 'react';
import BaseDataDisplayProps from '@gemeente-denhaag/basedatadisplayprops';
import './paragraph.scss';
import './space.scss';
import clsx from 'clsx';

export type LeadParagraphProps = Omit<BaseDataDisplayProps, 'classes'>;

export const LeadParagraph: React.FC<LeadParagraphProps> = (props: LeadParagraphProps) => {
  const rootClassNames = clsx('utrecht-paragraph', 'utrecht-paragraph--lead', props.className);
  return <p className={rootClassNames}>{props.children}</p>;
};
