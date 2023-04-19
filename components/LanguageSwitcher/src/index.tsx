import React from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import './index.scss';
import LanguageSwitcherTitle from './LanguageSwitcherTitle';
import LanguageSwitcherList from './LanguageSwitcherList';
import LanguageSwitcherListItem from './LanguageSwitcherListItem';
import { Link } from '@gemeente-denhaag/link';
import { ArrowRightIcon, CheckedIcon } from '@gemeente-denhaag/icons';
import clsx from 'clsx';

interface Language {
  label: string;
  url?: string;
  lang?: string;
  hrefLang?: string;
  active?: boolean;
}

export interface LanguageSwitcherLogicProps {
  label: string;
  languages: Array<Language>;
  mobileMenuScrolled?: boolean;
}

export const LanguageSwitcherLogic = ({
  label = '',
  languages = [],
  mobileMenuScrolled,
}: LanguageSwitcherLogicProps) => {
  const languageListContent = languages.map((language, key) => {
    const classNames = clsx(
      'denhaag-language-switcher__list-item-link',
      language.active ? 'denhaag-language-switcher__list-item-link--active' : '',
    );

    return (
      <LanguageSwitcherListItem key={key}>
        <Link
          tabIndex={mobileMenuScrolled ? -1 : undefined}
          {...(!language.active && { icon: <ArrowRightIcon />, iconAlign: 'start' })}
          {...(language.active && { icon: <CheckedIcon />, iconAlign: 'end' })}
          href={language.url}
          hrefLang={language.hrefLang}
          className={classNames}
        >
          {language.label}
        </Link>
      </LanguageSwitcherListItem>
    );
  });

  return (
    <LanguageSwitcher>
      <LanguageSwitcherTitle className="utrecht-heading-4">{label}</LanguageSwitcherTitle>
      {languages.length > 0 && <LanguageSwitcherList>{languageListContent}</LanguageSwitcherList>}
    </LanguageSwitcher>
  );
};

export default LanguageSwitcherLogic;

export * from './LanguageSwitcher';
export * from './LanguageSwitcherTitle';
export * from './LanguageSwitcherList';
export * from './LanguageSwitcherListItem';
