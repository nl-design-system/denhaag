import React from 'react';

export type QuickLinksLabelProps = React.HTMLAttributes<HTMLSpanElement>;

export const QuickLinksLabel = ({ children, ...props }: QuickLinksLabelProps) => (
  <span className="denhaag-quick-links__label" {...props}>
    {children}
  </span>
);

export default QuickLinksLabel;
