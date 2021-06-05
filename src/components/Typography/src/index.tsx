import React from 'react';
import BaseDataDisplayProps from '@gemeente-denhaag/basedatadisplayprops';

export interface TypographyProps extends BaseDataDisplayProps {
  /**
   * Applies the theme typography styles.
   */
  variant?: 'header1' | 'header2' | 'header3' | 'header4' | 'header5' | 'header6' | 'paragraph';
}

/**
 * Allows developers to present and design content clearly and efficiently.
 * @param props The properties of a Typography component.
 * @constructor Constructs an instance of Typography.
 */
export const Typography: React.FC<TypographyProps> = (props: TypographyProps) => {
  return <h1>{props.children}</h1>;
};

export default Typography;
