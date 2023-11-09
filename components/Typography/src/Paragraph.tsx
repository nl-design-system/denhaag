import React from 'react';
import './paragraph.scss';
import './space.scss';
import clsx from 'clsx';

export interface ParagraphProps {
  className?: string;
  children?: React.ReactNode;
}

export const Paragraph: React.FC<ParagraphProps> = (props: ParagraphProps) => {
  const rootClassNames = clsx('utrecht-paragraph', props.className);
  return <p className={rootClassNames}> {props.children}</p>;
};
