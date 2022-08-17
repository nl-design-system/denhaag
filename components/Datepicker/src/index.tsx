import React, { InputHTMLAttributes, KeyboardEvent, RefObject } from 'react';
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
  getDate,
  setMonth,
  getMonth,
  setYear,
  getYear,
} from 'date-fns';
import { nl } from './locale';

import { AlertTriangleIcon, ChevronRightIcon, ChevronLeftIcon } from '@gemeente-denhaag/icons';

import './index.scss';
import { CalenderDay } from './Calender/CalenderDay';
import { CalendarNavigationButton } from './Calender/CalendarNavigationButton';
import { CalenderDialog } from './Calender/CalenderDialog';
import { DatepickerInput } from './DatepickerInput';
import { DatepickerButton } from './DatepickerButton';

export interface DatepickerProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  /**
   * The ref for the outer HTML div.
   */
  ref?: RefObject<HTMLDivElement>;
  /**
   * The ref for the actual input HTML element.
   */
  inputRef?: RefObject<HTMLInputElement>;
  /**
   * Whether the input field is in a error state.
   */
  error?: boolean;
  /**
   * Locale (from @gemeente-denhaag/datepicker/locale or date-fns/locale) (default: nl)
   */
  locale?: Locale;
  /**
   * Starting date for calendar (default: today)
   */
  startDate?: Date;
  /**
   * placeholder text for the input (also used as aria-label).
   */
  placeholder?: string;
  /**
   * aria-label for previous month button in the calendar.
   */
  previousMonthLabel?: string;
  /**
   * aria-label for previous month button in the calendar.
   */
  nextMonthLabel?: string;

  /**
   * custom onChange event listener.
   */
  onChange?: (event: Event) => void;
}

interface DatepickerState {
  current: Date;
  selected?: Date;
  opened: boolean;
  typing: boolean;
}

/**
 * The DatePicker component allows the user to select a date.
 */
export const Datepicker: React.FC<DatepickerProps> = ({
  ref = React.useRef<HTMLDivElement>(null),
  inputRef = React.useRef<HTMLInputElement>(null),
  startDate = new Date(),
  locale = nl,
  placeholder = 'Kies een datum',
  previousMonthLabel = 'Vorige maand',
  nextMonthLabel = 'Volgende maand',
  ...props
}: DatepickerProps) => {
  const [state, setState] = React.useState<DatepickerState>({
    current: startDate,
    selected: undefined,
    opened: false,
    typing: false,
  });

  const { current, opened, typing, selected } = state;

  const currentDate = new Date();
  const today = setYear(setMonth(setDate(current, getDate(currentDate)), getMonth(currentDate)), getYear(currentDate));

  const openButtonRef = React.useRef<HTMLButtonElement>(null);
  const backButtonRef = React.createRef<HTMLButtonElement>();
  const currentButtonRef = React.createRef<HTMLButtonElement>();
  const firstRender = React.useRef(true);

  const outsideClickListener = (e: Event) => {
    if (!ref?.current?.contains(e.target as Node) && opened) {
      setState({
        ...state,
        opened: false,
      });
    }
  };

  const outsideClickListenerCleanup = () => {
    document.removeEventListener('click', outsideClickListener);
  };

  React.useEffect(() => {
    if (opened) {
      document.addEventListener('click', outsideClickListener);
    }
    return outsideClickListenerCleanup;
  }, [ref, opened]);

  React.useEffect(() => {
    if (opened) {
      currentButtonRef.current?.focus();
    }
  }, [opened && current]);

  React.useEffect(() => {
    if (props.onChange && !firstRender.current) {
      const event = new Event('change');
      inputRef.current?.dispatchEvent(event);
      props.onChange(event);
    }
  }, [selected]);

  React.useEffect(() => {
    firstRender.current = false;
  }, []);

  const onKeyDownInput = (e: KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setState({ ...state, opened: true });
    } else {
      setState({ ...state, typing: true });
    }
  };

  const onKeyDownBack = (e: KeyboardEvent) => {
    switch (e.key) {
      case 'Escape':
        openButtonRef.current?.focus();
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
      openButtonRef.current?.focus();
      setState({ ...state, opened: false });
    }
  };

  const onKeyDownDay = (e: KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowLeft':
        setState({ ...state, current: subDays(current, 1) });
        break;
      case 'ArrowRight':
        setState({ ...state, current: addDays(current, 1) });
        break;
      case 'ArrowUp':
        setState({ ...state, current: subDays(current, 7) });
        break;
      case 'ArrowDown':
        setState({ ...state, current: addDays(current, 7) });
        break;
      case 'Home':
        e.preventDefault();
        setState({ ...state, current: startOfWeek(current, { locale }) });
        break;
      case 'End':
        e.preventDefault();
        setState({ ...state, current: endOfWeek(current, { locale }) });
        break;
      case 'PageUp':
        e.preventDefault();

        if (e.shiftKey) {
          let newDate = setDay(
            addWeeks(setDate(subYears(current, 1), 1), getWeekOfMonth(current, { locale }) - 1),
            getDay(current),
            { locale },
          );
          if (!isSameMonth(newDate, subYears(current, 1))) {
            if (isSameMonth(newDate, subMonths(subYears(current, 1), 1))) {
              newDate = addWeeks(newDate, 1);
            } else {
              newDate = subWeeks(newDate, 1);
            }
          }
          setState({ ...state, current: newDate });
        } else {
          let newDate = setDay(
            addWeeks(setDate(subMonths(current, 1), 1), getWeekOfMonth(current, { locale }) - 1),
            getDay(current),
            { locale },
          );
          if (!isSameMonth(newDate, subMonths(current, 1))) {
            if (isSameMonth(newDate, current)) {
              newDate = subWeeks(newDate, 1);
            } else {
              newDate = addWeeks(newDate, 1);
            }
          }
          setState({ ...state, current: newDate });
        }
        break;
      case 'PageDown':
        e.preventDefault();
        if (e.shiftKey) {
          let newDate = setDay(
            addWeeks(setDate(addYears(current, 1), 1), getWeekOfMonth(current, { locale }) - 1),
            getDay(current),
            { locale },
          );
          if (!isSameMonth(newDate, addYears(current, 1))) {
            if (isSameMonth(newDate, subMonths(addYears(current, 1), 1))) {
              newDate = addWeeks(newDate, 1);
            } else {
              newDate = subWeeks(newDate, 1);
            }
          }
          setState({ ...state, current: newDate });
        } else {
          let newDate = setDay(
            addWeeks(setDate(addMonths(current, 1), 1), getWeekOfMonth(current, { locale }) - 1),
            getDay(current),
            { locale },
          );
          if (!isSameMonth(newDate, addMonths(current, 1))) {
            if (isSameMonth(newDate, current)) {
              newDate = addWeeks(newDate, 1);
            } else {
              newDate = subWeeks(newDate, 1);
            }
          }
          setState({ ...state, current: newDate });
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
    const date = setDay(addWeeks(setDate(current, 1), i), (j + (locale.options?.weekStartsOn || 0)) % 7, {
      locale,
    });

    if (isSameMonth(date, current)) {
      return (
        <td
          key={`datepicker-column-${i}-${j}`}
          aria-selected={selected && isEqual(selected, date) ? 'true' : undefined}
        >
          <CalenderDay
            currentDay={isEqual(today, date)}
            selectedDay={selected && isEqual(selected, date)}
            tabIndex={isEqual(current, date) ? 0 : -1}
            ref={isEqual(current, date) ? currentButtonRef : null}
            onClick={() => {
              setState({ ...state, selected: date, opened: false });
            }}
            onKeyDown={onKeyDownDay}
          >
            {date.getDate()}
          </CalenderDay>
        </td>
      );
    }
    return <td key={`datepicker-column-${i}-${j}`}></td>;
  };

  const rootStyles = clsx(
    'denhaag-datepicker',
    {
      'denhaag-datepicker--error': props.error,
      'denhaag-datepicker--disabled': props.disabled,
      'denhaag-datepicker--has-value': selected || typing,
    },
    props.className,
  );

  return (
    <div className={rootStyles} ref={ref} data-placeholder={placeholder}>
      <DatepickerButton
        aria-label={placeholder}
        onClick={() => {
          setState({ ...state, opened: !opened });
        }}
        tabIndex={props.disabled ? -1 : 0}
        ref={openButtonRef}
      />
      <DatepickerInput
        disabled={props.disabled}
        ref={inputRef}
        value={selected ? formatISO(selected, { representation: 'date' }) : ''}
        onChange={(event) => {
          const value = (event.target as HTMLInputElement).value;
          setState({
            ...state,
            current: value && new Date(value).getDate() ? new Date(value) : current,
            selected: value !== undefined ? (new Date(value).getDate() ? new Date(value) : selected) : undefined,
          });
        }}
        onClick={(event) => {
          event.preventDefault();
          if (opened) {
            currentButtonRef.current?.focus();
          } else {
            setState({ ...state, opened: true });
          }
        }}
        onKeyDown={onKeyDownInput}
        tabIndex={props.disabled ? -1 : 0}
      />
      {props.error && <AlertTriangleIcon className="denhaag-datepicker__error-icon" />}
      <CalenderDialog aria-label={placeholder} opened={!opened}>
        <div className="denhaag-datepicker__calendar-header">
          <CalendarNavigationButton
            onClick={() => {
              setState({ ...state, current: subMonths(current, 1) });
            }}
            ref={backButtonRef}
            onKeyDown={onKeyDownBack}
            aria-label={previousMonthLabel}
          >
            <ChevronLeftIcon />
          </CalendarNavigationButton>
          <span className="denhaag-datepicker__calendar-month" aria-live="polite">
            <time dateTime={format(current, 'yyyy-MM')}>{format(current, 'MMMM yyyy', { locale })}</time>
          </span>
          <CalendarNavigationButton
            onClick={() => {
              setState({ ...state, current: addMonths(current, 1) });
            }}
            onKeyDown={onKeyDownNext}
            aria-label={nextMonthLabel}
          >
            <ChevronRightIcon />
          </CalendarNavigationButton>
        </div>
        <table
          className="denhaag-datepicker__calendar-table"
          role="grid"
          aria-label={format(current, 'MMMM yyyy', { locale })}
        >
          <tbody>
            <tr>
              {Array.from(Array(7)).map((_, i) => (
                <th
                  key={`datepicker-day-${i}`}
                  className="denhaag-datepicker__calendar-heading"
                  abbr={locale.localize?.day((i + (locale.options?.weekStartsOn || 0)) % 7)}
                  scope="col"
                >
                  {locale.localize?.day((i + (locale.options?.weekStartsOn || 0)) % 7, { width: 'short' })}
                </th>
              ))}
            </tr>
            {Array.from(Array(getWeeksInMonth(current, { locale }))).map((_, i) => (
              <tr key={`datepicker-row-${i}`}>{Array.from(Array(7)).map((_, j) => renderDay(i, j))}</tr>
            ))}
          </tbody>
        </table>
      </CalenderDialog>
    </div>
  );
};

export default Datepicker;
