import React, { Key, OlHTMLAttributes, ReactNode } from 'react';
import { StepMarker, StepMarkerConnector } from '@gemeente-denhaag/step-marker';
import { Step, StepHeader, StepHeading, StepBody } from '@gemeente-denhaag/process-steps';
import { format, differenceInDays } from 'date-fns';
import { nl } from 'date-fns/locale';
import clsx from 'clsx';
import './index.scss';

export interface ContactTimelineItemProps {
  id: Key;
  title: ReactNode;
  marker?: ReactNode;
  date: ReactNode;
  isoDate: string;
  todayLabel: string;
  channel: ReactNode;
  nextItem?: boolean;
}

export interface ContactTimelineProps {
  items: ContactTimelineItemProps[];
  todayLabel: string;
}

export const ContactTimelineMobile: React.FC<ContactTimelineProps> = ({ items, todayLabel }: ContactTimelineProps) => {
  return (
    <ContactTimelineList mobile className="denhaag-process-steps">
      {items.map((item, index) => {
        const nextItem = index < items.length - 1;
        return <ContactTimelineListItem {...item} key={item.id} nextItem={nextItem} todayLabel={todayLabel} />;
      })}
    </ContactTimelineList>
  );
};

export interface ContactTimelineListProps extends OlHTMLAttributes<HTMLOListElement> {
  mobile?: boolean;
}

export const ContactTimelineList: React.FC<ContactTimelineListProps> = ({
  className,
  mobile = false,
  children,
  ...props
}: ContactTimelineListProps) => (
  <ol {...props} className={clsx('denhaag-contact-timeline', mobile && 'denhaag-contact-timeline--mobile', className)}>
    {children}
  </ol>
);

interface Props {
  dateTime: string;
  todayLabel: string;
  now?: string;
  locale?: Locale;
}

// Partially copied version of the Action date. We should make a generic component.
export const ContactTimelineDate = ({ dateTime, now = new Date().toISOString(), locale = nl, todayLabel }: Props) => {
  const date = new Date(dateTime);
  const daysDifference = differenceInDays(date, new Date(now));

  if (daysDifference === 0) {
    return <>{todayLabel}</>;
  }

  return <>{format(date, 'd-M-yyyy', { locale: locale })}</>;
};

const ContactTimelineListItem: React.FC<ContactTimelineItemProps> = ({
  title,
  date,
  isoDate,
  todayLabel,
  channel,
  nextItem,
}) => {
  return (
    <Step appearance="default">
      <StepHeader className="denhaag-contact-timeline__step-header">
        <StepMarker appearance="default" nested />
        <div>
          <StepHeading>{title}</StepHeading>
          <div className="denhaag-contact-timeline__meta">
            {date ? (
              date
            ) : (
              <time dateTime={isoDate} className="denhaag-contact-timeline__meta-date">
                <ContactTimelineDate dateTime={isoDate} todayLabel={todayLabel} />
              </time>
            )}
            <span className="denhaag-contact-timeline__meta-marker" />
            <span className="denhaag-contact-timeline__meta-channel">{channel}</span>
          </div>
        </div>
      </StepHeader>
      <StepBody>{nextItem && <StepMarkerConnector appearance="default" from="main" to="main" />}</StepBody>
    </Step>
  );
};

export default ContactTimelineMobile;
