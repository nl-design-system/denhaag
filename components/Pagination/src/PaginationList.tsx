import React from 'react';

interface Props {
  children: React.ReactNode;
}

export const PaginationList = ({ children }: Props) => {
  return (
    <span className="denhaag-pagination__links" role="group">
      {children}
    </span>
  );
};
