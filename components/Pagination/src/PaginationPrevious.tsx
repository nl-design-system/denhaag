import React from 'react';
import clsx from 'clsx';

interface Props {
  index: number;
  onClick: (index: number) => void;
}

export const PaginationPrevious = ({ index, onClick }: Props) => {
  return (
    <button
      className={clsx('denhaag-pagination__link denhaag-pagination__link--arrow', {
        'denhaag-pagination__link--disabled': index === 0,
      })}
      onClick={() => onClick(index - 1)}
      aria-label="Previous page"
      rel="prev"
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
          d="M4.9921 10.8143C5.36382 11.1914 5.97222 11.1914 6.34393 10.8143C6.7079 10.4451 6.70822 9.8521 6.34466 9.48248L3.36315 6.45123C2.98039 6.06209 2.98039 5.43791 3.36315 5.04877L6.34466 2.01752C6.70822 1.6479 6.7079 1.05492 6.34394 0.685696C5.97222 0.308599 5.36382 0.308599 4.9921 0.685695L0.692003 5.04799C0.308224 5.43732 0.308224 6.06268 0.692003 6.45201L4.9921 10.8143Z"
          fill="currentColor"
        />
      </svg>
    </button>
  );
};
