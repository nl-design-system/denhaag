import React, { OlHTMLAttributes } from 'react';
import clsx from 'clsx';
import { CheckedIcon } from '@gemeente-denhaag/icons';
import './index.scss';

export interface TimelineSubstatusProps extends OlHTMLAttributes<HTMLOListElement> {}

/**
 * The `Timeline` displays a progress through a sequence by breaking it up into
 * multiple logical and numbered steps. Use the timeline when a series of
 * information needs to be ordered by time (ascending or descending). It
 * represents the steps in a process in a chronological order. This process is
 * part of, for example, a request that the user has made.
 *
 * @param props The properties of a Timeline component.
 * @constructor Constructs an instance of Timeline.
 */
export const TimelineSubstatus: React.FC<TimelineSubstatusProps> = ({
  className,
  ...props
}: TimelineSubstatusProps) => {
  const timelineClassName = clsx('denhaag-timeline', className);

  return (
    <ol className={timelineClassName} {...props}>
      <li className={'denhaag-timeline__step denhaag-timeline__step--completed denhaag-timeline__step--expanded'}>
        <div className={'denhaag-timeline__step-label'}>
          <div className={'denhaag-timeline__step-marker'}>
            <CheckedIcon />
          </div>
          <p className={'denhaag-timeline__step-label-text'}>Deelname aan geluidsonderzoek</p>
        </div>
        <ul className={'denhaag-timeline__substep-list'}>
          <li className={'denhaag-timeline__substep'}>
            <div className={'denhaag-timeline__substep-marker'}></div>
            <p className={'denhaag-timeline__substep-text'}>Aanmelding ontvangen</p>
          </li>
        </ul>
      </li>
      <li className={'denhaag-timeline__step denhaag-timeline__step--active denhaag-timeline__step--expanded'}>
        <div className={'denhaag-timeline__step-label'}>
          <div className={'denhaag-timeline__step-marker'}>2</div>
          <p className={'denhaag-timeline__step-label-text'}>Onderzoek naar geluidsoverlast</p>
        </div>
        <ul className={'denhaag-timeline__substep-list'}>
          <li className={'denhaag-timeline__substep'}>
            <div className={'denhaag-timeline__substep-marker'}></div>
            <p className={'denhaag-timeline__substep-text'}>Afspraak meten geluidsoverlast gemaakt</p>
          </li>
          <li className={'denhaag-timeline__substep'}>
            <div className={'denhaag-timeline__substep-marker'}></div>
            <p className={'denhaag-timeline__substep-text'}>Geluidsoverlast gemeten</p>
          </li>
          <li className={'denhaag-timeline__substep'}>
            <div className={'denhaag-timeline__substep-marker'}></div>
            <p className={'denhaag-timeline__substep-text'}>Onderzoek resultaten verwerkt</p>
          </li>
        </ul>
      </li>
      <li className={'denhaag-timeline__step'}>
        <div className={'denhaag-timeline__step-label'}>
          <div className={'denhaag-timeline__step-marker'}>3</div>
          <p className={'denhaag-timeline__step-label-text'}>Uitvoeren van maatregelen</p>
        </div>
      </li>
      <li className={'denhaag-timeline__step'}>
        <div className={'denhaag-timeline__step-label'}>
          <div className={'denhaag-timeline__step-marker'}>4</div>
          <p className={'denhaag-timeline__step-label-text'}>Maatregelen zijn uitgevoerd</p>
        </div>
      </li>
    </ol>
  );
};

export default TimelineSubstatus;
