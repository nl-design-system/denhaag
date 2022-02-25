import React, { HTMLAttributes } from 'react';

export type ListItemSecondaryActionProps = HTMLAttributes<HTMLDivElement>;

/**
 * Primary UI component for user interaction
 */
export const ListItemSecondaryAction: React.FC<ListItemSecondaryActionProps> = (
  props: ListItemSecondaryActionProps,
) => {
  return (
    <div {...props} className="denhaag-list__secondary-action">
      {props.children}
    </div>
  );
};

export default ListItemSecondaryAction;
