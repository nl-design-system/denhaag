import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';

export type LanguageSwitcherTitleProps = HTMLAttributes<HTMLDivElement>;

export const LanguageSwitcherTitle: React.FC<LanguageSwitcherTitleProps> = (props: LanguageSwitcherTitleProps) => {
  const className = clsx('denhaag-language-switcher__title', props.className);

  return (
    <span {...props} className={className}>
      {props.children}
    </span>
  );
};

export default LanguageSwitcherTitle;
