import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';
import './index.scss';

export type HeaderActionsProps = HTMLAttributes<HTMLDivElement>;

export const HeaderActions: React.FC<HeaderActionsProps> = (props: HeaderActionsProps) => {
  const classNames = clsx('denhaag-header__actions', props.className);

  return <div className={classNames}>{props.children}</div>;
};

export default HeaderActions;
