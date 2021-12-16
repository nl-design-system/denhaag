import React, { InputHTMLAttributes, KeyboardEvent, Ref } from 'react';
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
  isEqual,
  addDays,
  subDays,
  startOfWeek,
  endOfWeek,
  subYears,
  addYears,
  subWeeks,
  getWeekOfMonth,
  getDay,
} from 'date-fns';
import { nl } from './locale';

import './datepicker.css';

export interface DatepickerProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * The ref for the outer HTML div.
   */
  ref?: Ref<HTMLDivElement>;
  /**
   * The ref for the actual input HTML element.
   */
  inputRef?: Ref<HTMLInputElement>;
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
  keyboard: boolean;
}

/**
 * The DatePicker component allows the user to select a date.
 */
export const Datepicker: React.FC<DatepickerProps> = ({
  ref = React.useRef<HTMLDivElement>(null),
  inputRef = React.useRef<HTMLInputElement>(null),
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
    current: startDate,
    selected: undefined,
    opened: false,
    keyboard: false,
  });

  const backButtonRef = React.useRef<HTMLButtonElement>(null);
  const currentButtonRef = React.useRef<HTMLButtonElement>(null);

  const outsideClickListener = (e: Event) => {
    if (!ref.current?.contains(e.target as Node) && state.opened) {
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
  }, [ref]);

  React.useEffect(() => {
    currentButtonRef.current?.focus();
  }, [state.keyboard]);

  const onKeyDownInput = (e: KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setState({ ...state, opened: true });
    }
  };

  const onKeyDownBack = (e: KeyboardEvent) => {
    switch (e.key) {
      case 'Escape':
        setState({ ...state, opened: false });
        break;
      case 'Tab':
        if (e.shiftKey) {
          e.preventDefault();
          currentButtonRef.current?.focus();
          break;
        }
    }
  };

  const onKeyDownNext = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setState({ ...state, opened: false });
    }
  };

  const onKeyDownDay = (e: KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowLeft':
        setState({ ...state, current: subDays(state.current, 1), keyboard: !state.keyboard });
        break;
      case 'ArrowRight':
        setState({ ...state, current: addDays(state.current, 1), keyboard: !state.keyboard });
        break;
      case 'ArrowUp':
        setState({ ...state, current: subDays(state.current, 7), keyboard: !state.keyboard });
        break;
      case 'ArrowDown':
        setState({ ...state, current: addDays(state.current, 7), keyboard: !state.keyboard });
        break;
      case 'Home':
        e.preventDefault();
        setState({ ...state, current: startOfWeek(state.current, { locale: locale }), keyboard: !state.keyboard });
        break;
      case 'End':
        e.preventDefault();
        setState({ ...state, current: endOfWeek(state.current, { locale: locale }), keyboard: !state.keyboard });
        break;
      case 'PageUp':
        e.preventDefault();

        if (e.shiftKey) {
          let newDate = setDay(
            addWeeks(setDate(subYears(state.current, 1), 1), getWeekOfMonth(state.current, { locale: locale }) - 1),
            getDay(state.current),
            { locale: locale },
          );
          if (!isSameMonth(newDate, subYears(state.current, 1))) {
            newDate = subWeeks(newDate, 1);
          }
          setState({ ...state, current: newDate, keyboard: !state.keyboard });
        } else {
          let newDate = setDay(
            addWeeks(setDate(subMonths(state.current, 1), 1), getWeekOfMonth(state.current, { locale: locale }) - 1),
            getDay(state.current),
            { locale: locale },
          );
          if (!isSameMonth(newDate, subMonths(state.current, 1))) {
            newDate = subWeeks(newDate, 1);
          }
          setState({ ...state, current: newDate, keyboard: !state.keyboard });
        }
        break;
      case 'PageDown':
        e.preventDefault();
        if (e.shiftKey) {
          let newDate = setDay(
            addWeeks(setDate(addYears(state.current, 1), 1), getWeekOfMonth(state.current, { locale: locale }) - 1),
            getDay(state.current),
            { locale: locale },
          );
          if (!isSameMonth(newDate, addYears(state.current, 1))) {
            newDate = subWeeks(newDate, 1);
          }
          setState({ ...state, current: newDate, keyboard: !state.keyboard });
        } else {
          let newDate = setDay(
            addWeeks(setDate(addMonths(state.current, 1), 1), getWeekOfMonth(state.current, { locale: locale }) - 1),
            getDay(state.current),
            { locale: locale },
          );
          if (!isSameMonth(newDate, addMonths(state.current, 1))) {
            newDate = subWeeks(newDate, 1);
          }
          setState({ ...state, current: newDate, keyboard: !state.keyboard });
        }
        break;
      case 'Escape':
        setState({ ...state, opened: false });
        break;
      case 'Tab':
        if (!e.shiftKey) {
          e.preventDefault();
          backButtonRef.current?.focus();
          break;
        }
    }
  };

  const renderDay = (i: number, j: number) => {
    const date = setDay(addWeeks(setDate(state.current, 1), i), (j + (locale.options?.weekStartsOn || 0)) % 7, {
      locale: locale,
    });
    if (isSameMonth(date, state.current)) {
      return (
        <button
          type="button"
          tabIndex={isEqual(state.current, date) ? 0 : -1}
          ref={isEqual(state.current, date) ? currentButtonRef : null}
          onClick={() => {
            setState({ ...state, selected: date, opened: false });
          }}
          onKeyDown={onKeyDownDay}
        >
          {date.getDate()}
        </button>
      );
    }
    return '';
  };

  return (
    <div className={rootStyles} ref={ref}>
      <input
        disabled={props.disabled}
        type="date"
        className="denhaag-datepicker__input"
        ref={inputRef}
        value={state.selected ? formatISO(state.selected, { representation: 'date' }) : ''}
        onChange={(event) => {
          setState({
            ...state,
            current:
              event.target.value && new Date(event.target.value).getDate()
                ? new Date(event.target.value)
                : state.current,
            selected:
              event.target.value !== undefined
                ? new Date(event.target.value).getDate()
                  ? new Date(event.target.value)
                  : state.selected
                : undefined,
          });
        }}
        onClick={(event) => {
          event.preventDefault();
          setState({ ...state, opened: true });
        }}
        onKeyDown={onKeyDownInput}
      />
      <button
        className="denhaag-datepicker__button"
        onClick={() => {
          setState({ ...state, opened: !state.opened });
        }}
      ></button>
      <div className={clsx('denhaag-datepicker__calendar', { 'denhaag-datepicker__calendar--hidden': !state.opened })}>
        <div className="denhaag-datepicker__calendar-header">
          <button
            type="button"
            className="denhaag-datepicker__calendar-previous"
            onClick={() => {
              setState({ ...state, current: subMonths(state.current, 1) });
            }}
            ref={backButtonRef}
            onKeyDown={onKeyDownBack}
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
            onKeyDown={onKeyDownNext}
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
    </div>
  );
};

export default Datepicker;
