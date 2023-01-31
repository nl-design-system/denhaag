import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';
import './index.scss';

export type HeaderNewProps = HTMLAttributes<HTMLDivElement>;

export const HeaderNew: React.FC<HeaderNewProps> = (props: HeaderNewProps) => {
  const classNames = clsx('denhaag-header', props.className);

  return (
    <header id="site-header" className={classNames}>
      {props.children}
    </header>
  );
};

export default HeaderNew;
