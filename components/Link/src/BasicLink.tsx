import React, { AnchorHTMLAttributes } from 'react';

export const BasicLink = ({ children, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <a {...props}>{children}</a>
);

export default BasicLink;
