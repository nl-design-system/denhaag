import React from 'react';

interface CalendarNavigationButtonProps
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children?: React.ReactNode;
}

export const CalendarNavigationButton = React.forwardRef(
  (
    { children, ...restProps }: React.PropsWithChildren<CalendarNavigationButtonProps>,
    ref: React.ForwardedRef<HTMLButtonElement>,
  ) => (
    <button ref={ref} type="button" className="denhaag-datepicker__calendar-navigation" {...restProps}>
      {children}
    </button>
  ),
);

CalendarNavigationButton.displayName = 'CalendarNavigationButton';
