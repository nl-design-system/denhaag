import React, { ThHTMLAttributes } from 'react';
import clsx from 'clsx';

export interface TableHeaderProps extends ThHTMLAttributes<HTMLTableCellElement> {
  href?: string;
}

/**
 * TableHeader component based on the <th> element.
 * Defines a cell as header of a group of table cells. The exact nature of this group is defined by the scope and headers attributes.
 */
export const TableHeader: React.FC<TableHeaderProps> = ({
  className,
  scope = 'col',
  href,
  ...props
}: TableHeaderProps) => {
  const rootClassNames = clsx('denhaag-table__heading', className, {
    'denhaag-table__heading--link': href,
  });

  // Set default sort property to none, when filtered it must be `ascending` or `descending`.
  if (scope === 'col') {
    props['aria-sort'] = 'none';
  }

  if (href) {
    return (
      <th className={rootClassNames} {...props} scope={scope}>
        <a href={href}>{props.children}</a>
      </th>
    );
  }

  return (
    <th className={rootClassNames} {...props} scope={scope}>
      {props.children}
    </th>
  );
};
