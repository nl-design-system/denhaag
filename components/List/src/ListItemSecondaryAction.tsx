import React, { HTMLAttributes } from 'react';

import './_list-item-secondary-action.scss';
import clsx from 'clsx';

export type ListItemSecondaryActionProps = HTMLAttributes<HTMLDivElement>;

/**
 * Primary UI component for user interaction
 */
export const ListItemSecondaryAction: React.FC<ListItemSecondaryActionProps> = (
  props: ListItemSecondaryActionProps,
) => {
  return (
    <div {...props} className={clsx('denhaag-list__secondary-action', props.className)}>
      {props.children}
    </div>
  );
};

export default ListItemSecondaryAction;
