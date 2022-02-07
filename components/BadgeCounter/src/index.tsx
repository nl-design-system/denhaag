import React from 'react';
import { DotIndicator } from '@gemeente-denhaag/dotindicator';
import BaseProps from '@gemeente-denhaag/baseprops';
import './index.css';
import clsx from 'clsx';

export type BadgeCounterProps = Omit<BaseProps, 'tabIndex' | 'classes'>;

/**
 * A counter badge notifies a user of a specific amount of updates.
 * @param props The properties of a Badge component.
 * @constructor Constructs an instance of Badge.
 */
export const BadgeCounter: React.FC<BadgeCounterProps> = (props: BadgeCounterProps) => {
  const rootClassNames = clsx('denhaag-badge-counter', props.className);
  return (
    <div id={props.id} className={rootClassNames}>
      <DotIndicator overlap={'rectangle'}>
        <div className={'denhaag-badge-counter__counter'}>{props.children}</div>
      </DotIndicator>
    </div>
  );
};

export default BadgeCounter;
