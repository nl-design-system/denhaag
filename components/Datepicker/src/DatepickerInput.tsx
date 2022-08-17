import React from 'react';

import './index.scss';

interface DatepickerInputProps
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  children?: React.ReactNode;
}

/**
 * The DatePickerInput
 */
export const DatepickerInput = React.forwardRef(
  (
    { onChange, ...restProps }: React.PropsWithChildren<DatepickerInputProps>,
    ref: React.ForwardedRef<HTMLInputElement>,
  ) => <input ref={ref} onChange={onChange} type="date" className="denhaag-datepicker__input" {...restProps} />,
);

DatepickerInput.displayName = 'DatepickerInput';
