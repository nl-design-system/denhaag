import React from 'react';
import { CalendarIcon } from '@gemeente-denhaag/icons';

interface DatepickerButtonProps
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children?: React.ReactNode;
}

export const DatepickerButton = React.forwardRef(
  ({ ...restProps }: React.PropsWithChildren<DatepickerButtonProps>, ref: React.ForwardedRef<HTMLButtonElement>) => (
    <button ref={ref} type="button" className="denhaag-datepicker__button" {...restProps}>
      <CalendarIcon />
    </button>
  ),
);

DatepickerButton.displayName = 'DatepickerButton';
