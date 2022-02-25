import React, { HTMLAttributes } from 'react';
import { ListSubheaderProps } from './ListSubheader';

import clsx from 'clsx';

import './list.scss';
import './list-item.scss';
import './list-item-secondary-action.scss';
import './list-item-icon.scss';
import './list-item-text.scss';
import './list-subheader.scss';
export interface ListProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The content of the subheader, normally `ListSubheader`.
   */
  subheader?: React.ReactElement<ListSubheaderProps>;
}

/**
 * Primary UI component for user interaction
 */
export const List: React.FC<ListProps> = ({ subheader, ...props }: ListProps) => {
  const rootClassNames = clsx('denhaag-list__wrapper', {
    'denhaag-list__wrapper--with-subheader': subheader,
  });
  return (
    <div {...props} className={rootClassNames}>
      {subheader}
      <ul className="denhaag-list">{props.children}</ul>
    </div>
  );
};

export default List;
