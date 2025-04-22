import React from 'react';
import clsx from 'clsx';
import './index.scss';
import {
  DataBadge as NLDataBadge,
  DataBadgeProps as NLDataBadgeProps,
} from '@nl-design-system-candidate/data-badge-react';
export * from '@nl-design-system-candidate/data-badge-react';
import '@nl-design-system-candidate/data-badge-css/data-badge.css';

export type DataBadgeProps = NLDataBadgeProps & {
  status?: 'neutral' | 'success' | 'warning' | 'error';
};

export const DataBadge = ({ status, ...props }: DataBadgeProps) => {
  const classes = clsx({
    'nl-data-badge--neutral': status === 'neutral',
    'nl-data-badge--success': status === 'success',
    'nl-data-badge--warning': status === 'warning',
    'nl-data-badge--error': status === 'error',
  });

  return <NLDataBadge className={classes} {...props} />;
};
