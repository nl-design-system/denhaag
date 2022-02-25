import React, { HTMLAttributes } from 'react';

export type ListItemIconProps = HTMLAttributes<HTMLDivElement>;

/**
 * Primary UI component for user interaction
 */
export const ListItemIcon: React.FC<ListItemIconProps> = (props: ListItemIconProps) => {
  return (
    <div {...props} className="denhaag-list__item-icon">
      {props.children}
    </div>
  );
};

export default ListItemIcon;
