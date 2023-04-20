import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';
import './index.scss';

export type HeaderMobileActionsProps = HTMLAttributes<HTMLDivElement>;

export const HeaderMobileActions: React.FC<HeaderMobileActionsProps> = (props: HeaderMobileActionsProps) => {
  const classNames = clsx('denhaag-header__mobile-actions', props.className);

  return <div className={classNames}>{props.children}</div>;
};

export default HeaderMobileActions;
