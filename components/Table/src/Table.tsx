import React from 'react';
import './index.css';
import clsx from 'clsx';

export type TableProps = React.TableHTMLAttributes<HTMLTableElement>;

/**
 * Table component
 */
export const Table: React.FC<TableProps> = ({ className, ...props }: TableProps) => {
  const rootClassNames = clsx('denhaag-table', className);
  return <table className={rootClassNames}>{props.children}</table>;
};
