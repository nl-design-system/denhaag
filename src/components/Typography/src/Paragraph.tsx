import React from 'react';
import BaseProps from '@gemeente-denhaag/baseprops';

export type ParagraphProps = BaseProps;

export const Paragraph: React.FC<ParagraphProps> = (props: ParagraphProps) => {
  return <p>{props.children}</p>;
};
