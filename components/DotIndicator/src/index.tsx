import React from 'react';
import './index.scss';
import clsx from 'clsx';
import BaseProps from '@gemeente-denhaag/baseprops';

export interface DotIndicatorProps extends Omit<BaseProps, 'classes' | 'tabIndex'> {
  /**
   * The shape which the dot indicator has to overlap.
   */
  overlap: 'circle' | 'rectangle';
}

/**
 * A dot indicator is a visual update message that announces something new for the user to see.
 * Dot indicators are typically used with counter badges
 * @param props The properties of a Dot Indicator component.
 */
export const DotIndicator: React.FC<DotIndicatorProps> = (props: DotIndicatorProps) => {
  const rootClassNames = clsx(
    'denhaag-dot-indicator',
    {
      'denhaag-dot-indicator--overlap-rectangle': props.overlap === 'rectangle',
      'denhaag-dot-indicator--overlap-circle': props.overlap === 'circle',
    },
    props.className,
  );
  return (
    <span className={rootClassNames} id={props.id}>
      {props.children}
      <span className={'denhaag-dot-indicator__dot'}></span>
    </span>
  );
};

export default DotIndicator;
