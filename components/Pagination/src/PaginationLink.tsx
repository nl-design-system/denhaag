import React from 'react';
import clsx from 'clsx';

interface Props {
  page: number;
  index: number;
  currentIndex: number;
  onClick: (index: number) => void;
}

export const PaginationLink = ({ page, index, currentIndex, onClick }: Props) => {
  return (
    <button
      key={page}
      className={clsx('denhaag-pagination__link', {
        'denhaag-pagination__link--current': currentIndex === index,
      })}
      onClick={() => onClick(index)}
      aria-label={`Page ${page}`}
      rel={index === currentIndex - 1 ? 'prev' : index === currentIndex + 1 ? 'next' : undefined}
    >
      {page}
    </button>
  );
};
