import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';
import './index.scss';

export type BreadcrumbTextProps = HTMLAttributes<HTMLDivElement>;

export const BreadcrumbText: React.FC<BreadcrumbTextProps> = (props: BreadcrumbTextProps) => {
  const classNames = clsx('denhaag-breadcrumb__text', props.className);

  return (
    <span {...props} className={classNames}>
      {props.children}
    </span>
  );
};

export default BreadcrumbText;
