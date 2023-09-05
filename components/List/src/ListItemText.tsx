import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';

import './_list-item-text.scss';

export interface ListItemTextProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The main content text, alias for children.
   */
  primary?: string;

  /**
   * The secondary content text.
   */
  secondary?: string;
}

/**
 * Primary UI component for user interaction
 */
export const ListItemText: React.FC<ListItemTextProps> = ({ primary, secondary, ...props }: ListItemTextProps) => {
  const rootClassNames = clsx(
    'denhaag-list__item-text',
    {
      'denhaag-list__item-text--with-secondary': secondary,
    },
    props.className,
  );

  return (
    <div {...props} className={rootClassNames}>
      {primary && <span className="denhaag-list__item-text-primary">{primary}</span>}
      {secondary && <span className="denhaag-list__item-text-secondary">{secondary}</span>}
    </div>
  );
};

export default ListItemText;
