import React from 'react';
import BaseDataDisplayProps from '@gemeente-denhaag/basedatadisplayprops';
import './paragraph.module.css';

export type ParagraphProps = BaseDataDisplayProps;

export const Paragraph: React.FC<ParagraphProps> = (props: ParagraphProps) => {
  return <p className="utrecht-paragraph utrecht-paragraph--distanced">{props.children}</p>;
};
