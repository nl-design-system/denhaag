import React, { Key, ReactNode, useState } from 'react';
import { StepMarker, StepMarkerConnector } from '@gemeente-denhaag/step-marker';
import { Step, StepHeader, StepHeading, StepHeaderToggle, StepDetails } from '@gemeente-denhaag/process-steps';
import { formatDate, shortDateOptions } from '@gemeente-denhaag/utils';
import './index.scss';
import { ContactTimelineMetaSeparator } from './ContactTimelineMetaSeparator';
import { ContactTimelineMetaItem } from './ContactTimelineMetaItem';
import { ContactTimelineMetaTimeItem } from './ContactTimelineMetaTimeItem';
import { ContactTimelineMeta } from './ContactTimelineMeta';
import { ContactTimelineHeaderContent } from './ContactTimelineHeaderContent';
import { ContactTimelineHeaderDate } from './ContactTimelineHeaderDate';
import { ContactTimelineHeaderChannel } from './ContactTimelineHeaderChannel';
import { Paragraph } from '@gemeente-denhaag/paragraph';
import { ContactTimelineItemSender } from './ContactTimelineItemSender';
import { ContactTimelineItemFile } from './ContactTimelineItemFile';
import { ContactTimelineList } from './ContactTimelineList';

export interface ContactTimelineItemProps {
  id: Key;
  title: ReactNode;
  description?: ReactNode;
  file?: ReactNode;
  sender?: ReactNode;
  date?: ReactNode;
  isoDate?: string;
  channel: ReactNode;
}

interface Labels {
  today: string;
  yesterday: string;
}

interface ContactTimelineItemInternalProps extends ContactTimelineItemProps {
  labels: Labels;
  locale?: string;
  nextItem?: boolean;
  expanded?: boolean;
  toggleExpanded: false | (() => void);
}

export interface ContactTimelineProps {
  items: ContactTimelineItemProps[];
  expandedItems?: Key[];
  collapsible?: boolean;
  labels: Labels;
  locale?: string;
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
  labels,
  locale,
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
            labels={labels}
            locale={locale}
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

const ContactTimelineListItem: React.FC<ContactTimelineItemInternalProps> = ({
  id,
  title,
  description,
  file,
  date,
  isoDate,
  locale,
  sender = '',
  labels,
  channel,
  nextItem,
  expanded = false,
  toggleExpanded,
}) => {
  return (
    <Step className="denhaag-contact-timeline__step" appearance="default">
      <StepHeader className="denhaag-contact-timeline__step-header">
        <ContactTimelineHeaderDate>
          {date
            ? date
            : isoDate && (
                <ContactTimelineMetaTimeItem dateTime={isoDate}>
                  {
                    formatDate({
                      dateTime: isoDate,
                      locale: locale,
                      format: shortDateOptions,
                      labels: { ...labels },
                    })[0]
                  }
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
            {date
              ? date
              : isoDate && (
                  <ContactTimelineMetaTimeItem dateTime={isoDate}>
                    {
                      formatDate({
                        dateTime: isoDate,
                        locale: locale,
                        format: shortDateOptions,
                        labels: { ...labels },
                      })[0]
                    }
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
