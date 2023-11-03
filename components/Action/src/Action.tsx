import React from 'react';

import { ActionSingle, ActionMulti } from './index';
import { FormatDateLabels } from '@gemeente-denhaag/utils';

export interface ActionSingleProps extends React.HTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  link: string;
  dateTime?: string;
  now?: string;
  relativeDate?: boolean;
  labels?: FormatDateLabels;
}

export interface ActionMultiProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  actions: React.ReactNode;
  dateTime?: string;
  now?: string;
  relativeDate?: boolean;
  labels?: FormatDateLabels;
}

export const Action = (props: ActionSingleProps | ActionMultiProps) => {
  if ('link' in props) return <ActionSingle {...props} />;
  return <ActionMulti {...props} />;
};
