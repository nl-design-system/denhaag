import React from 'react';

import { ActionSingle, ActionMulti } from './index';

export interface ActionSingleProps extends React.HTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  link: string;
  dateTime?: string;
  relativeDate?: boolean;
}

export interface ActionMultiProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  actions: React.ReactNode;
  dateTime?: string;
  relativeDate?: boolean;
}

export const Action = (props: ActionSingleProps | ActionMultiProps) => {
  if ('link' in props) return <ActionSingle {...props} />;
  return <ActionMulti {...props} />;
};
