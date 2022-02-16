import React from 'react';
import './index.scss';
import clsx from 'clsx';

export type TableProps = React.TableHTMLAttributes<HTMLTableElement>;

/**
 * Table component based on the <table> element.
 * Represents tabular data -- information presented in a two-dimensional table comprised of rows and columns of cells containing data.
 */
export const Table: React.FC<TableProps> = ({ className, ...props }: TableProps) => {
  const rootClassNames = clsx('denhaag-table', className);
  return <table className={rootClassNames}>{props.children}</table>;
};
