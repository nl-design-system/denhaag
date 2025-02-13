import React, { useEffect, useState } from 'react';
import { PaginationPrevious } from './PaginationPrevious';
import { PaginationNext } from './PaginationNext';
import { PaginationList } from './PaginationList';
import { PaginationButton } from './PaginationButton';
import { PaginationNav } from './PaginationNav';

interface Props {
  index?: number;
  indexLimit: number;
  onChange?: (index: number) => void;
  className?: string;
}

export const Pagination = ({ index = 0, indexLimit, onChange, className }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(index);
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
    <PaginationNav className={className}>
      <PaginationPrevious index={currentIndex} onClick={changePage} />
      <PaginationList>
        {pages.map((page, index) => {
          if (index !== 0 && index !== indexLimit) {
            if (index < currentIndex - 2) return null;
            if (index > currentIndex + 2) return null;
          }

          return (
            <PaginationButton key={page} page={page} index={index} currentIndex={currentIndex} onClick={changePage} />
          );
        })}
      </PaginationList>
      <PaginationNext index={currentIndex} indexLimit={indexLimit} onClick={changePage} />
    </PaginationNav>
  );
};
