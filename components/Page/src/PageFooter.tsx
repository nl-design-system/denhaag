import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';
import './index.scss';

export type PageFooterProps = HTMLAttributes<HTMLDivElement>;

export const PageFooter: React.FC<PageFooterProps> = (props: PageFooterProps) => {
  const classNames = clsx('denhaag-page-footer', props.className);
  return <div className={classNames}>{props.children}</div>;
};

export default PageFooter;
