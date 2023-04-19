import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';

export type LanguageSwitcherListItemProps = HTMLAttributes<HTMLLIElement>;

export const LanguageSwitcherListItem: React.FC<LanguageSwitcherListItemProps> = (
  props: LanguageSwitcherListItemProps,
) => {
  const className = clsx('denhaag-language-switcher__list-item', props.className);

  return (
    <li {...props} className={className}>
      {props.children}
    </li>
  );
};

export default LanguageSwitcherListItem;
