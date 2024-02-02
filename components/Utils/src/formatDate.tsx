import type { Locale } from 'date-fns/locale';
import { format, differenceInCalendarDays } from 'date-fns';
import { nl } from 'date-fns/locale';

export interface FormatDateLabels {
  today?: string;
  yesterday?: string;
  before?: string;
  approachingDeadline?: (daysDifference: number) => string;
}

interface Props {
  dateTime: string;
  now?: string;
  locale?: Locale;
  labels: FormatDateLabels;
  relative?: boolean;
}

export const formatDate = ({
  dateTime,
  now = new Date().toISOString(),
  locale = nl,
  labels,
  relative,
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

    return [`${labels.before} ${format(date, 'd MMMM yyyy', { locale: locale })}`, false];
  }

  if (daysDifference === 0) {
    return [labels.today || null, false];
  }

  if (daysDifference === -1) {
    return [labels.yesterday || null, false];
  }

  return [format(date, 'd-M-yyyy', { locale }), false];
};
