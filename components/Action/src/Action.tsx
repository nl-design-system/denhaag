import React from 'react';

import { ActionLink, ActionActions } from './index';

export interface LinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  link: string;
  deadline?: Date;
  relativeDate?: boolean;
}

export interface ActionsProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  actions: React.ReactNode;
  deadline?: Date;
  relativeDate?: boolean;
}

export const Action = (props: LinkProps | ActionsProps) => {
  if ('link' in props) return <ActionLink {...props} />;
  return <ActionActions {...props} />;
};
