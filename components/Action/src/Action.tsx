import React, { AnchorHTMLAttributes, ComponentType, HTMLAttributes } from 'react';
import { ActionSingle } from './ActionSingle';
import { ActionMulti } from './ActionMulti';
import { FormatDateLabels } from '@gemeente-denhaag/utils';

export interface ActionSingleProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  link: string;
  Link?: ComponentType<AnchorHTMLAttributes<HTMLAnchorElement>>;
  details?: React.ReactNode;
  dateTime?: string;
  now?: string;
  locale?: string;
  relativeDate?: boolean;
  labels?: FormatDateLabels;
}

export interface ActionMultiProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  details?: React.ReactNode;
  actions?: React.ReactNode;
  dateTime?: string;
  now?: string;
  locale?: string;
  relativeDate?: boolean;
  labels?: FormatDateLabels;
}

export const Action = (props: ActionSingleProps | ActionMultiProps) => {
  if ('link' in props) return <ActionSingle {...props} />;
  return <ActionMulti {...props} />;
};
