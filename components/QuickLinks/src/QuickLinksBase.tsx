import React from 'react';

export type QuickLinksBaseProps = React.HTMLAttributes<HTMLDivElement>;

export const QuickLinksBase = ({ children, ...props }: QuickLinksBaseProps) => (
  <div className="denhaag-quick-links" {...props}>
    {children}
  </div>
);

export default QuickLinksBase;
