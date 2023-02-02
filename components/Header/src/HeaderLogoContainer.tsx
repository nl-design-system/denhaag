import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';
import './index.scss';

export type HeaderLogoContainerProps = HTMLAttributes<HTMLDivElement>;

export const HeaderLogoContainer: React.FC<HeaderLogoContainerProps> = (props: HeaderLogoContainerProps) => {
  const classNames = clsx('denhaag-header__logo-container', props.className);

  return <div className={classNames}>{props.children}</div>;
};

export default HeaderLogoContainer;
