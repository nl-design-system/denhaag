import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';

export type LanguageSwitcherListProps = HTMLAttributes<HTMLUListElement>;

export const LanguageSwitcherList: React.FC<LanguageSwitcherListProps> = (props: LanguageSwitcherListProps) => {
  const className = clsx('denhaag-language-switcher__list', props.className);

  return (
    <ul {...props} className={className}>
      {props.children}
    </ul>
  );
};

export default LanguageSwitcherList;
