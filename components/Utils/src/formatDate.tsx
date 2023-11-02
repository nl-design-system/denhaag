import { format, differenceInDays } from 'date-fns';
import { nl } from 'date-fns/locale';

interface Labels {
  today?: string;
  yesterday?: string;
  before?: string;
  approachingDeadline?: (daysDifference: number) => string;
}

interface Props {
  dateTime: string;
  now?: string;
  locale?: Locale;
  labels?: Labels;
  relative?: boolean;
}

export const formatDate = ({
  dateTime,
  now = new Date().toISOString(),
  locale = nl,
  labels = {},
  relative,
}: Props): [string | null, boolean] => {
  const date = new Date(dateTime);
  const daysDifference = differenceInDays(date, new Date(now));

  console.log(date);
  console.log(daysDifference);

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
