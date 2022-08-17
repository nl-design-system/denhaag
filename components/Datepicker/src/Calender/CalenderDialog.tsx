import clsx from 'clsx';
import React from 'react';

export interface CalenderDialogProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  opened?: boolean;
  placeholder?: string;
  children?: React.ReactNode;
}

export const CalenderDialog: React.FC<CalenderDialogProps> = ({ opened, placeholder, children, ...restProps }) => (
  <div
    {...restProps}
    className={clsx('denhaag-datepicker__calendar', { 'denhaag-datepicker__calendar--hidden': opened })}
    role="dialog"
    aria-modal={!opened ? true : false}
    aria-label={placeholder}
    aria-live={!opened ? 'polite' : 'off'}
  >
    {children}
  </div>
);
