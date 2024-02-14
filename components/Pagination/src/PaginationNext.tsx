import React from 'react';
import clsx from 'clsx';

interface Props {
  index: number;
  indexLimit: number;
  onClick: (index: number) => void;
}

export const PaginationNext = ({ index, indexLimit, onClick }: Props) => {
  return (
    <button
      className={clsx('denhaag-pagination__link denhaag-pagination__link--arrow', {
        'denhaag-pagination__link--disabled': index === indexLimit,
      })}
      onClick={() => onClick(index + 1)}
      aria-label="Next page"
      rel="next"
    >
      <svg
        aria-hidden="true"
        className="denhaag-icon"
        fill="none"
        height="1em"
        viewBox="0 0 7 12"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.0079 1.1857C1.63618 0.8086 1.02778 0.8086 0.656065 1.18569V1.18569C0.292103 1.55492 0.291779 2.1479 0.655339 2.51752L3.63685 5.54877C4.01961 5.93791 4.01961 6.56209 3.63686 6.95123L0.655339 9.98248C0.291779 10.3521 0.292102 10.9451 0.656065 11.3143V11.3143C1.02778 11.6914 1.63618 11.6914 2.0079 11.3143L6.308 6.95201C6.69178 6.56268 6.69178 5.93732 6.308 5.54799L2.0079 1.1857Z"
          fill="currentColor"
        />
      </svg>
    </button>
  );
};
