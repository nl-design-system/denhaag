import React from 'react';
import BaseDataDisplayProps from '@gemeente-denhaag/basedatadisplayprops';
import './typography.module.css';

export type ParagraphProps = BaseDataDisplayProps;

export const Paragraph: React.FC<ParagraphProps> = (props: ParagraphProps) => {
  return <p className="denhaag-paragraph">{props.children}</p>;
};
