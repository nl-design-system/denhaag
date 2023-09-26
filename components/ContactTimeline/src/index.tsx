import React, { Key, OlHTMLAttributes, ReactNode } from 'react';
import { StepMarker, StepMarkerConnector } from '@gemeente-denhaag/step-marker';
import { Step, StepHeader, StepHeading, StepBody, StepMeta } from '@gemeente-denhaag/process-steps';
import clsx from 'clsx';
import './index.scss';

export interface ContactTimelineItemProps {
  id: Key;
  title: ReactNode;
  marker?: ReactNode;
  date: ReactNode;
  channel: ReactNode;
  nextItem?: boolean;
}

export interface ContactTimelineProps {
  items: ContactTimelineItemProps[];
}

export const ContactTimelineMobile: React.FC<ContactTimelineProps> = ({ items }: ContactTimelineProps) => {
  return (
    <ContactTimelineList mobile className="denhaag-process-steps">
      {items.map((item, index) => {
        const nextItem = index < items.length - 1;
        return <ContactTimelineListItem {...item} key={item.id} nextItem={nextItem} />;
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

const ContactTimelineListItem: React.FC<ContactTimelineItemProps> = ({ title, date, channel, nextItem, ...props }) => {
  return (
    <Step appearance="default">
      <StepHeader className="denhaag-contact-timeline__step-header">
        <StepMarker appearance="default" nested />
        <div>
          <StepHeading>{title}</StepHeading>
          <div className="denhaag-contact-timeline__meta">
            <span className="denhaag-contact-timeline__meta-date">{date}</span>
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
