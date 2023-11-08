import React from 'react';
import clsx from 'clsx';
import './index.scss';

export interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
  /**
   * The divider orientation.
   */
  orientation?: 'horizontal' | 'vertical';
}

/**
 * A thin line that groups content in lists and layouts.
 * @param props The properties of a Divider component.
 * @constructor Constructs an instance of Divider.
 */
export const Divider: React.FC<DividerProps> = ({ orientation, className, ...props }: DividerProps) => {
  return (
    <hr
      className={clsx('denhaag-divider', { 'denhaag-divider--vertical': orientation === 'vertical' }, className)}
      role="presentation"
      {...props}
    />
  );
};

export default Divider;
