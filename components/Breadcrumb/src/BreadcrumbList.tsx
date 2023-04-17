import React, { OlHTMLAttributes } from 'react';
import clsx from 'clsx';
import './index.scss';

export type BreadcrumbListProps = OlHTMLAttributes<HTMLOListElement>;

export const BreadcrumbList: React.FC<BreadcrumbListProps> = (props: BreadcrumbListProps) => {
  const classNames = clsx('denhaag-breadcrumb__list', props.className);

  return (
    <ol {...props} className={classNames}>
      {props.children}
    </ol>
  );
};

export default BreadcrumbList;
