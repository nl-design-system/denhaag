import React from 'react';

interface Props {
  children: React.ReactNode;
}

export const PaginationList = ({ children }: Props) => {
  return (
    <span className="denhaag-pagination__list" role="group">
      {children}
    </span>
  );
};
