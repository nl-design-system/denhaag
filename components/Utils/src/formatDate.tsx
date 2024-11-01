import { differenceInCalendarDays } from 'date-fns';

export interface FormatDateLabels {
  today?: string;
  yesterday?: string;
  before?: string;
  approachingDeadline?: (daysDifference: number) => string;
}

export const shortDateOptions: Intl.DateTimeFormatOptions = {
  day: 'numeric',
  month: 'numeric',
  year: 'numeric',
};

export const longDateOptions: Intl.DateTimeFormatOptions = {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
};

interface Props {
  dateTime: string;
  now?: string;
  locale?: string;
  format?: Intl.DateTimeFormatOptions;
  labels?: FormatDateLabels;
  relative?: boolean;
  namedDays?: boolean;
}

export const formatDate = ({
  dateTime,
  now = new Date().toISOString(),
  relative,
  namedDays = true,
  locale = navigator.language || 'nl-NL',
  format = relative ? longDateOptions : shortDateOptions,
  labels = {
    today: 'vandaag',
    yesterday: 'gisteren',
    before: 'vóór',
    approachingDeadline: (daysDifference: number) => `nog ${daysDifference} dag${daysDifference === 1 ? '' : 'en'}`,
  },
}: Props): [string | null, boolean] => {
  const date = new Date(dateTime);
  const daysDifference = differenceInCalendarDays(date, new Date(now));

  if (relative) {
    if (daysDifference < 0) {
      return [null, false];
    }

    if (daysDifference <= 2) {
      return [labels.approachingDeadline?.(daysDifference) ?? null, true];
    }

    return [`${labels.before} ${date.toLocaleString(locale, format)}`, false];
  }

  if (namedDays) {
    if (daysDifference === 0) {
      return [labels.today || null, false];
    }

    if (daysDifference === -1) {
      return [labels.yesterday || null, false];
    }
  }

  return [date.toLocaleString(locale, format), false];
};
