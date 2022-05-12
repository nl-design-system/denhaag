import React, { HTMLAttributes } from 'react';

import './list-item-icon.scss';
import clsx from 'clsx';

export type ListItemIconProps = HTMLAttributes<HTMLDivElement>;

/**
 * Primary UI component for user interaction
 */
export const ListItemIcon: React.FC<ListItemIconProps> = (props: ListItemIconProps) => {
  return (
    <div {...props} className={clsx('denhaag-list__item-icon', props.className)}>
      {props.children}
    </div>
  );
};

export default ListItemIcon;
