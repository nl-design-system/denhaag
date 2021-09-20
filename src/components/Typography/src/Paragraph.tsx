import React from 'react';
import BaseDataDisplayProps from '@gemeente-denhaag/basedatadisplayprops';
import './paragraph.css';
import { UtrechtParagraph } from '@utrecht/web-component-library-react';

export type ParagraphProps = Omit<BaseDataDisplayProps, 'classes'>;

export const Paragraph: React.FC<ParagraphProps> = (props: ParagraphProps) => {
  //return <p className={rootClassNames}> {props.children}</p>;
  return <UtrechtParagraph>{props.children}</UtrechtParagraph>;
};
