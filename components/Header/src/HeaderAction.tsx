import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';
import './index.scss';

export type HeaderActionProps = HTMLAttributes<HTMLDivElement>;

export const HeaderAction: React.FC<HeaderActionProps> = (props: HeaderActionProps) => {
  const classNames = clsx('denhaag-header__actions-action', props.className);

  return <div className={classNames}>{props.children}</div>;
};

export default HeaderAction;
