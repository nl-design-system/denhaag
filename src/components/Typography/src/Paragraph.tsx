import React from 'react';
import BaseProps from '@gemeente-denhaag/baseprops';
import './typography.module.css';

export type ParagraphProps = BaseProps;

export const Paragraph: React.FC<ParagraphProps> = (props: ParagraphProps) => {
  return <p>{props.children}</p>;
};
