import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';

export type TableCaptionProps = HTMLAttributes<HTMLTableCaptionElement>;

/**
 * TableCaption component based on the <caption> element.
 * Specifies the caption (or title) of a table.
 */
export const TableCaption: React.FC<TableCaptionProps> = ({ className, ...props }: TableCaptionProps) => {
  const rootClassNames = clsx('denhaag-table__caption', className);
  return (
    <caption className={rootClassNames} {...props}>
      {props.children}
    </caption>
  );
};
