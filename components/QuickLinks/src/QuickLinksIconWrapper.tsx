import React from 'react';

export type QuickLinksIconWrapperProps = React.HTMLAttributes<HTMLDivElement>;

export const QuickLinksIconWrapper = ({ children, ...props }: QuickLinksIconWrapperProps) => (
  <div className="denhaag-quick-links__icon-wrapper" {...props}>
    {children}
  </div>
);

export default QuickLinksIconWrapper;
