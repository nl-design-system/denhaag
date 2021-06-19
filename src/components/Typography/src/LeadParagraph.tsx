import React from 'react';
import BaseDataDisplayProps from '@gemeente-denhaag/basedatadisplayprops';
import './paragraph.css';

export type LeadParagraphProps = BaseDataDisplayProps;

export const LeadParagraph: React.FC<LeadParagraphProps> = (props: LeadParagraphProps) => {
  return <p className="utrecht-paragraph utrecht-paragraph--lead utrecht-paragraph--distanced">{props.children}</p>;
};
