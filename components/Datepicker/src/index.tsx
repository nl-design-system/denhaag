import React from 'react';
import clsx from 'clsx';
import {
  format,
  Locale,
  getWeeksInMonth,
  formatISO,
  setDay,
  addWeeks,
  subMonths,
  addMonths,
  isSameMonth,
  setDate,
} from 'date-fns';
import { nl } from './locale';

import BaseProps from '@gemeente-denhaag/baseprops';

import './datepicker.css';

export interface DatepickerProps extends BaseProps {
  /**
   * Whether the input field is in a error state.
   */
  error?: boolean;
  /**
   * Whether the input field is disabled.
   */
  disabled?: boolean;
  /**
   * Locale (from @gemeente-denhaag/datepicker/locale or date-fns/locale) (default: nl)
   */
  locale?: Locale;
  /**
   * Starting date for calendar (default: today)
   */
  startDate?: Date;
}

interface DatepickerState {
  current: Date;
  selected?: Date;
  opened: boolean;
}

/**
 * The DatePicker component allows the user to select a date.
 */
export const Datepicker: React.FC<DatepickerProps> = ({
  startDate = new Date(),
  locale = nl,
  ...props
}: DatepickerProps) => {
  const rootStyles = clsx(
    'denhaag-datepicker',
    {
      'denhaag-datepicker--error': props.error,
      'denhaag-datepicker--disabled': props.disabled,
    },
    props.className,
  );

  const [state, setState] = React.useState<DatepickerState>({
    current: setDate(startDate, 1),
    selected: undefined,
    opened: false,
  });

  const componentRef = React.useRef<HTMLDivElement>(null);

  const outsideClickListener = (e: Event) => {
    if (!componentRef.current?.contains(e.target as Node)) {
      setState({
        ...state,
        opened: false,
      });
    }
  };

  React.useEffect(() => {
    document.addEventListener('click', outsideClickListener);
    return () => {
      document.removeEventListener('click', outsideClickListener);
    };
  }, [componentRef]);

  const renderDay = (i: number, j: number) => {
    const date = setDay(addWeeks(state.current, i), (j + (locale.options?.weekStartsOn || 0)) % 7, { locale: locale });
    if (isSameMonth(date, state.current)) {
      return (
        <button
          type="button"
          onClick={() => {
            setState({ ...state, selected: date, opened: false });
          }}
        >
          {date.getDate()}
        </button>
      );
    }
    return '';
  };

  return (
    <div className={rootStyles} ref={componentRef}>
      <input
        disabled={props.disabled}
        type="date"
        className="denhaag-datepicker__input"
        value={state.selected ? formatISO(state.selected, { representation: 'date' }) : ''}
        onChange={(event) => {
          setState({ ...state, selected: event.target.value ? new Date(event.target.value) : undefined });
        }}
        onClick={(event) => {
          event.preventDefault();
          setState({ ...state, opened: true });
        }}
      />
      {state.opened && (
        <div className="denhaag-datepicker__calendar">
          <div className="denhaag-datepicker__calendar-header">
            <button
              type="button"
              className="denhaag-datepicker__calendar-previous"
              onClick={() => {
                setState({ ...state, current: subMonths(state.current, 1) });
              }}
            ></button>
            <span className="calendar__date">
              <time dateTime={format(state.current, 'yyyy-MM')}>
                {format(state.current, 'MMMM yyyy', { locale: locale })}
              </time>
            </span>
            <button
              type="button"
              className="denhaag-datepicker__calendar-next"
              onClick={() => {
                setState({ ...state, current: addMonths(state.current, 1) });
              }}
            ></button>
          </div>
          <table className="denhaag-datepicker__calendar-table">
            <tbody>
              <tr>
                {Array.from(Array(7)).map((_, i) => (
                  <th key={`datepicker-day-${i}`}>
                    {locale.localize?.day((i + (locale.options?.weekStartsOn || 0)) % 7, { width: 'short' })}
                  </th>
                ))}
              </tr>
              {Array.from(Array(getWeeksInMonth(state.current, { locale: locale }))).map((_, i) => (
                <tr key={`datepicker-row-${i}`}>
                  {Array.from(Array(7)).map((_, j) => (
                    <td key={`datepicker-column-${i}-${j}`}>{renderDay(i, j)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Datepicker;
