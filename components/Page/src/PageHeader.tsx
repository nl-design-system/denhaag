import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';
import './index.scss';

export type PageHeaderProps = HTMLAttributes<HTMLDivElement>;

export const PageHeader: React.FC<PageHeaderProps> = (props: PageHeaderProps) => {
  const classNames = clsx('denhaag-page-header', props.className);
  return <div className={classNames}>{props.children}</div>;
};

export default PageHeader;
