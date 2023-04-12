import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';

export type LanguageSwitcherTitleProps = HTMLAttributes<HTMLDivElement>;

export const LanguageSwitcherTitle: React.FC<LanguageSwitcherTitleProps> = (props: LanguageSwitcherTitleProps) => {
  const className = clsx('denhaag-language-switcher__title', props.className);

  return (
    <h4 {...props} className={className}>
      {props.children}
    </h4>
  );
};

export default LanguageSwitcherTitle;
