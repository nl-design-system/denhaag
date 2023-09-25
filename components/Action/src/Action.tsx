import React from 'react';

import { ActionSingle, ActionMulti } from './index';

export interface ActionSingleProps extends React.HTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  link: string;
  deadline?: Date;
  relativeDate?: boolean;
}

export interface ActionMultiProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  actions: React.ReactNode;
  deadline?: Date;
  relativeDate?: boolean;
}

export const Action = (props: ActionSingleProps | ActionMultiProps) => {
  if ('link' in props) return <ActionSingle {...props} />;
  return <ActionMulti {...props} />;
};
