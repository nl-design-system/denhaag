import { ChevronDownIcon } from '@gemeente-denhaag/icons';
import React from 'react';

export type BreadcrumbToggleButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const BreadcrumbToggleButton = (props: BreadcrumbToggleButtonProps) => {
  return (
    <button className="denhaag-breadcrumb__toggle-button" aria-label="Toggle breadcrumb" {...props}>
      <ChevronDownIcon />
    </button>
  );
};

export default BreadcrumbToggleButton;
