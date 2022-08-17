import clsx from 'clsx';
import React from 'react';

import '../index.scss';

export interface CalenderDayProps
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children?: React.ReactNode;
  currentDay: boolean;
  selectedDay?: boolean;
}

export const CalenderDay = React.forwardRef(
  (
    { currentDay, selectedDay, children, ...restProps }: React.PropsWithChildren<CalenderDayProps>,
    ref: React.ForwardedRef<HTMLButtonElement>,
  ) => (
    <button
      ref={ref}
      type="button"
      className={clsx('denhaag-datepicker__calendar-day', {
        'denhaag-datepicker__calendar-day--current': currentDay,
        'denhaag-datepicker__calendar-day--selected': selectedDay,
      })}
      {...restProps}
    >
      {children}
    </button>
  ),
);

CalenderDay.displayName = 'CalenderDay';
