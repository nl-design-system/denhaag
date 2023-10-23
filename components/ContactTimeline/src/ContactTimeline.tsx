import React, { Key, OlHTMLAttributes, ReactNode, useState } from 'react';
import { StepMarker, StepMarkerConnector } from '@gemeente-denhaag/step-marker';
import { Step, StepHeader, StepHeading, StepHeaderToggle, StepDetails } from '@gemeente-denhaag/process-steps';
import { format, differenceInDays } from 'date-fns';
import { nl } from 'date-fns/locale';
import clsx from 'clsx';
import './index.scss';
import { ContactTimelineMetaSeparator } from './ContactTimelineMetaSeparator';
import { ContactTimelineMetaItem } from './ContactTimelineMetaItem';
import { ContactTimelineMetaTimeItem } from './ContactTimelineMetaTimeItem';
import { ContactTimelineMeta } from './ContactTimelineMeta';
import { ContactTimelineHeaderContent } from './ContactTimelineHeaderContent';
import { ContactTimelineHeaderDate } from './ContactTimelineHeaderDate';
import { ContactTimelineHeaderChannel } from './ContactTimelineHeaderChannel';
import { Paragraph } from '@gemeente-denhaag/typography';
import { ContactTimelineItemSender } from './ContactTimelineItemSender';
import { ContactTimelineItemFile } from './ContactTimelineItemFile';

export interface ContactTimelineItemProps {
  id: Key;
  title: ReactNode;
  description?: ReactNode;
  file?: ReactNode;
  sender?: ReactNode;
  date: ReactNode;
  isoDate: string;
  todayLabel: string;
  channel: ReactNode;
  nextItem?: boolean;
  expanded?: boolean;
  toggleExpanded: false | (() => void);
}

export interface ContactTimelineProps {
  items: ContactTimelineItemProps[];
  expandedItems?: Key[];
  collapsible?: boolean;
  todayLabel: string;
}

const toggleState = (key: Key, collection: Key[], setCollection: React.Dispatch<React.SetStateAction<React.Key[]>>) => {
  if (collection.includes(key)) {
    setCollection(collection.filter((item) => item !== key));
  } else {
    setCollection([...collection, key]);
  }
};

export const ContactTimeline: React.FC<ContactTimelineProps> = ({
  items,
  todayLabel,
  expandedItems: initialExpanded = [],
  collapsible = false,
}: ContactTimelineProps) => {
  const [expandedItems, setexpandedItems] = useState(initialExpanded);

  return (
    <ContactTimelineList className="denhaag-process-steps">
      {items.map((item, index) => {
        const nextItem = index < items.length - 1;
        return (
          <ContactTimelineListItem
            {...item}
            key={item.id}
            expanded={collapsible ? expandedItems.includes(item.id) : false}
            nextItem={nextItem}
            todayLabel={todayLabel}
            toggleExpanded={
              collapsible &&
              (() => {
                toggleState(item.id, expandedItems, setexpandedItems);
              })
            }
          />
        );
      })}
    </ContactTimelineList>
  );
};

export interface ContactTimelineListProps extends OlHTMLAttributes<HTMLOListElement> {}

export const ContactTimelineList: React.FC<ContactTimelineListProps> = ({
  className,
  children,
  ...props
}: ContactTimelineListProps) => (
  <ol {...props} className={clsx('denhaag-contact-timeline', className)}>
    {children}
  </ol>
);

interface Props {
  dateTime: string;
  todayLabel: string;
  now?: string;
  locale?: Locale;
}

export const formatContactTimelineDate = ({
  dateTime,
  now = new Date().toISOString(),
  locale = nl,
  todayLabel,
}: Props): string => {
  const date = new Date(dateTime);
  const daysDifference = differenceInDays(date, new Date(now));

  if (daysDifference === 0) {
    return todayLabel;
  }

  return format(date, 'd-M-yyyy', { locale });
};

const ContactTimelineListItem: React.FC<ContactTimelineItemProps> = ({
  id,
  title,
  description,
  file,
  date,
  isoDate,
  sender = '',
  todayLabel,
  channel,
  nextItem,
  expanded = false,
  toggleExpanded,
}) => {
  return (
    <Step className="denhaag-contact-timeline__step" appearance="default">
      <StepHeader className="denhaag-contact-timeline__step-header">
        <ContactTimelineHeaderDate>
          {date ? (
            date
          ) : (
            <ContactTimelineMetaTimeItem dateTime={isoDate}>
              {formatContactTimelineDate({ dateTime: isoDate, todayLabel: todayLabel })}
            </ContactTimelineMetaTimeItem>
          )}
        </ContactTimelineHeaderDate>
        <StepMarker appearance="default" nested />
        <ContactTimelineHeaderChannel>
          <ContactTimelineMetaItem>{channel}</ContactTimelineMetaItem>
        </ContactTimelineHeaderChannel>
        <ContactTimelineHeaderContent>
          {toggleExpanded && description ? (
            <StepHeaderToggle
              className="denhaag-contact-timeline__step-header-toggle"
              ariaControls={`${id}--details`}
              expanded={expanded}
              onClick={toggleExpanded}
            >
              <StepHeading>{title}</StepHeading>
            </StepHeaderToggle>
          ) : (
            <StepHeading>{title}</StepHeading>
          )}
          <ContactTimelineMeta>
            {date ? (
              date
            ) : (
              <ContactTimelineMetaTimeItem dateTime={isoDate}>
                {formatContactTimelineDate({ dateTime: isoDate, todayLabel: todayLabel })}
              </ContactTimelineMetaTimeItem>
            )}
            <ContactTimelineMetaSeparator />
            <ContactTimelineMetaItem>{channel}</ContactTimelineMetaItem>
          </ContactTimelineMeta>
        </ContactTimelineHeaderContent>
        {nextItem && (
          <StepMarkerConnector
            className="denhaag-contact-timeline__step-marker-connector"
            appearance="default"
            from="main"
            to="main"
          />
        )}
      </StepHeader>
      <StepDetails className="denhaag-contact-timeline__step-details" id={`${id}--details`} collapsed={!expanded}>
        <ContactTimelineItemSender>{sender}</ContactTimelineItemSender>
        <Paragraph>{description}</Paragraph>
        {file && <ContactTimelineItemFile>{file}</ContactTimelineItemFile>}
      </StepDetails>
    </Step>
  );
};

export default ContactTimeline;
