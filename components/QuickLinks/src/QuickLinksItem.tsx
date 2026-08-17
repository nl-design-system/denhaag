import React from 'react';

export type QuickLinksItemProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const QuickLinksItem = ({ children, ...props }: QuickLinksItemProps) => (
  <a className="denhaag-quick-links__item" {...props}>
    {children}
  </a>
);

export default QuickLinksItem;
