import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';

export type LanguageSwitcherProps = HTMLAttributes<HTMLDivElement>;

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = (props: LanguageSwitcherProps) => {
  const className = clsx('denhaag-language-switcher', props.className);

  return (
    <div {...props} className={className}>
      {props.children}
    </div>
  );
};

export default LanguageSwitcher;
