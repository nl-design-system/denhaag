import React from 'react';
import { DotIndicator } from '@gemeente-denhaag/dotindicator';
import BaseProps from '@gemeente-denhaag/baseprops';
import './badge-counter.css';

export type BadgeCounterProps = Omit<BaseProps, 'tabIndex' | 'classes'>;

/**
 * A counter badge shows notifies a user of a specific amount of updates.
 * @param props The properties of a Badge component.
 * @constructor Constructs an instance of Badge.
 */
export const BadgeCounter: React.FC<BadgeCounterProps> = (props: BadgeCounterProps) => {
  return (
    <div id={props.id} className={'denhaag-badge-counter'}>
      <DotIndicator overlap={'rectangle'}>
        <div className={'denhaag-badge-counter__counter'}>{props.children}</div>
      </DotIndicator>
    </div>
  );
};

export default BadgeCounter;
