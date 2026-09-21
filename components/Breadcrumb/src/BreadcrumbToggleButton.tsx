import { ChevronDownIcon } from '@gemeente-denhaag/icons';
import clsx from 'clsx';
import React, { HTMLAttributes } from 'react';

export type BreadcrumbToggleButtonProps = HTMLAttributes<HTMLButtonElement>;

export const BreadcrumbToggleButton = ({ className, ...props }: BreadcrumbToggleButtonProps) => {
  const classNames = clsx('denhaag-breadcrumb__toggle-button', className);

  return (
    <button className={classNames} aria-label="Toggle breadcrumb" {...props}>
      <ChevronDownIcon />
    </button>
  );
};

export default BreadcrumbToggleButton;
