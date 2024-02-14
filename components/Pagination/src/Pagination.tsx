import React, { useEffect } from 'react';
import clsx from 'clsx';
import { PaginationPrevious } from './PaginationPrevious';
import { PaginationNext } from './PaginationNext';
import { PaginationList } from './PaginationList';
import { PaginationLink } from './PaginationLink';

interface Props {
  index?: number;
  indexLimit: number;
  onChange?: (index: number) => number;
  className?: string;
}

export const Pagination = ({ index = 0, indexLimit, onChange, className }: Props) => {
  const [currentIndex, setCurrentIndex] = React.useState(index);
  const pages = Array.from({ length: indexLimit + 1 }, (_, i) => i + 1);

  useEffect(() => {
    setCurrentIndex(index);
  }, [index]);

  const changePage = (index: number) => {
    if (index < 0 || index > indexLimit) return;
    setCurrentIndex(index);
    onChange?.(index);
  };

  return (
    <nav className={clsx('denhaag-pagination', className)}>
      <PaginationPrevious index={currentIndex} onClick={changePage} />
      <PaginationList>
        {pages.map((page, index) => {
          if (index !== 0 && index !== indexLimit) {
            if (index < currentIndex - 2) return null;
            if (index > currentIndex + 2) return null;
          }

          return (
            <PaginationLink key={page} page={page} index={index} currentIndex={currentIndex} onClick={changePage} />
          );
        })}
      </PaginationList>
      <PaginationNext index={currentIndex} indexLimit={indexLimit} onClick={changePage} />
    </nav>
  );
};
