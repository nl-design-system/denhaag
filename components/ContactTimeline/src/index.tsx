import React, { Key, OlHTMLAttributes, ReactNode, useState } from 'react';
import { StepMarker, StepMarkerConnector } from '@gemeente-denhaag/step-marker';
import {
  Step,
  StepHeader,
  StepHeading,
  StepBody,
  StepHeaderToggle,
  StepDetails,
} from '@gemeente-denhaag/process-steps';
import { ChevronDownIcon } from '@gemeente-denhaag/icons';
import { format, differenceInDays } from 'date-fns';
import { nl } from 'date-fns/locale';
import clsx from 'clsx';
import './index.scss';
import { ContactTimelineMetaMarker } from './ContactTimelineMetaMarker';
import { ContactTimelineMetaItem } from './ContactTimelineMetaItem';
import { ContactTimelineMetaTimeItem } from './ContactTimelineMetaTimeItem';
import { ContactTimelineMeta } from './ContactTimelineMeta';
import { ContactTimelineHeaderContent } from './ContactTimelineHeaderContent';
import { ContactTimelineHeaderDate } from './ContactTimelineHeaderDate';
import { ContactTimelineHeaderChannel } from './ContactTimelineHeaderChannel';
import { Paragraph } from '@gemeente-denhaag/typography';

export interface ContactTimelineItemProps {
  id: Key;
  title: ReactNode;
  description?: ReactNode;
  marker?: ReactNode;
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
  expandedSteps?: Key[];
  collapsible?: boolean;
  todayLabel: string;
  mobile?: boolean;
}

const toggleState = (key: Key, collection: Key[], setCollection: React.Dispatch<React.SetStateAction<React.Key[]>>) => {
  if (collection.includes(key)) {
    setCollection(collection.filter((item) => item !== key));
  } else {
    setCollection([...collection, key]);
  }
};

export const ContactTimelineMobile: React.FC<ContactTimelineProps> = ({
  items,
  todayLabel,
  expandedSteps: initialExpanded = [],
  collapsible = false,
  mobile = false,
}: ContactTimelineProps) => {
  const [expandedSteps, setExpandedSteps] = useState(initialExpanded);

  let ListItemComponent: React.FC<ContactTimelineItemProps>;
  if (mobile) {
    ListItemComponent = ContactTimelineListItem;
  } else {
    ListItemComponent = ContactTimelineListItemDesktop;
  }

  return (
    <ContactTimelineList mobile={mobile} className="denhaag-process-steps">
      {items.map((item, index) => {
        const nextItem = index < items.length - 1;
        return (
          <ListItemComponent
            {...item}
            key={item.id}
            expanded={collapsible ? expandedSteps.includes(item.id) : true}
            nextItem={nextItem}
            todayLabel={todayLabel}
            toggleExpanded={() => {
              toggleState(item.id, expandedSteps, setExpandedSteps);
            }}
          />
        );
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
        <ContactTimelineHeaderContent>
          <StepHeading>{title}</StepHeading>
          <ContactTimelineMeta>
            {date ? (
              date
            ) : (
              <ContactTimelineMetaTimeItem dateTime={isoDate}>
                <ContactTimelineDate dateTime={isoDate} todayLabel={todayLabel} />
              </ContactTimelineMetaTimeItem>
            )}
            <ContactTimelineMetaMarker />
            <ContactTimelineMetaItem>{channel}</ContactTimelineMetaItem>
          </ContactTimelineMeta>
        </ContactTimelineHeaderContent>
        {nextItem && <StepMarkerConnector appearance="default" from="main" to="main" />}
      </StepHeader>
      <StepBody></StepBody>
    </Step>
  );
};

const ContactTimelineListItemDesktop: React.FC<ContactTimelineItemProps> = ({
  id,
  title,
  description,
  date,
  isoDate,
  todayLabel,
  channel,
  nextItem,
  expanded = false,
  toggleExpanded,
}) => {
  return (
    <Step appearance="default">
      <StepHeader className="denhaag-contact-timeline__step-header">
        <ContactTimelineHeaderDate>
          <ContactTimelineMetaTimeItem>
            {date ? (
              date
            ) : (
              <ContactTimelineMetaTimeItem dateTime={isoDate}>
                <ContactTimelineDate dateTime={isoDate} todayLabel={todayLabel} />
              </ContactTimelineMetaTimeItem>
            )}
          </ContactTimelineMetaTimeItem>
        </ContactTimelineHeaderDate>
        <StepMarker appearance="default" nested />
        <ContactTimelineHeaderChannel>
          <ContactTimelineMetaItem>{channel}</ContactTimelineMetaItem>
        </ContactTimelineHeaderChannel>
        <ContactTimelineHeaderContent>
          {toggleExpanded && description ? (
            <StepHeaderToggle ariaControls={`${id}--details`} expanded={expanded} onClick={toggleExpanded}>
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
                <ContactTimelineDate dateTime={isoDate} todayLabel={todayLabel} />
              </ContactTimelineMetaTimeItem>
            )}
            <ContactTimelineMetaMarker />
            <ContactTimelineMetaItem>{channel}</ContactTimelineMetaItem>
          </ContactTimelineMeta>
        </ContactTimelineHeaderContent>
        {nextItem && <StepMarkerConnector appearance="default" from="main" to="main" />}
      </StepHeader>
      <StepDetails id={`${id}--details`} collapsed={!expanded}>
        <Paragraph>{description}</Paragraph>
      </StepDetails>
    </Step>
  );
};

export default ContactTimelineMobile;
