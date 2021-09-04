import React from 'react';
import BaseDataDisplayProps from '@gemeente-denhaag/basedatadisplayprops';
import './paragraph.css';
import clsx from 'clsx';

export type LeadParagraphProps = BaseDataDisplayProps;

export const LeadParagraph: React.FC<LeadParagraphProps> = (props: LeadParagraphProps) => {
  const rootClassNames = clsx(
    'utrecht-paragraph utrecht-paragraph--lead utrecht-paragraph--distanced',
    props.className,
  );
  return <p className={rootClassNames}>{props.children}</p>;
};
