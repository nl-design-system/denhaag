import React, { ThHTMLAttributes } from 'react';
import clsx from 'clsx';

export type TableHeaderProps = ThHTMLAttributes<HTMLTableHeaderCellElement>;

/**
 * TableHeader component based on the <th> element.
 * Defines a cell as header of a group of table cells. The exact nature of this group is defined by the scope and headers attributes.
 */
export const TableHeader: React.FC<TableHeaderProps> = ({ className, scope = 'col', ...props }: TableHeaderProps) => {
  const rootClassNames = clsx('denhaag-table__heading', className);

  // Set default sort property to none, when filtered it must be `ascending` or `descending`.
  if (scope === 'col') {
    props['aria-sort'] = 'none';
  }

  return (
    <th className={rootClassNames} {...props} scope={scope}>
      {props.children}
    </th>
  );
};
