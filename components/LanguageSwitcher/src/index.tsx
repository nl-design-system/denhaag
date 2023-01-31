import React from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import './index.scss';
import LanguageSwitcherTitle from './LanguageSwitcherTitle';
import LanguageSwitcherList from './LanguageSwitcherList';
import LanguageSwitcherListItem from './LanguageSwitcherListItem';
import Link from '@gemeente-denhaag/link';
import { ArrowRightIcon, CheckedIcon } from '@gemeente-denhaag/icons';
import clsx from 'clsx';

interface Language {
  title: string;
  url?: string;
  lang?: string;
  hrefLang?: string;
  active?: boolean;
}

export interface LanguageSwitcherLogicProps {
  title: string;
  languages: Array<Language>;
}

export const LanguageSwitcherLogic = ({ title = '', languages = [] }: LanguageSwitcherLogicProps) => {
  const languageListContent = languages.map((language, key) => {
    const classNames = clsx(
      'denhaag-language-switcher__list-item-link',
      language.active ? 'denhaag-language-switcher__list-item-link--active' : '',
    );

    return (
      <LanguageSwitcherListItem key={key}>
        <Link
          {...(!language.active && { icon: <ArrowRightIcon />, iconAlign: 'start' })}
          {...(language.active && { icon: <CheckedIcon />, iconAlign: 'end' })}
          href={language.url}
          hrefLang={language.hrefLang}
          className={classNames}
        >
          {language.title}
        </Link>
      </LanguageSwitcherListItem>
    );
  });

  return (
    <LanguageSwitcher>
      <LanguageSwitcherTitle className="utrecht-heading-4">{title}</LanguageSwitcherTitle>
      {languages.length > 0 && <LanguageSwitcherList>{languageListContent}</LanguageSwitcherList>}
    </LanguageSwitcher>
  );
};

export default LanguageSwitcherLogic;

export * from './LanguageSwitcher';
export * from './LanguageSwitcherTitle';
export * from './LanguageSwitcherList';
export * from './LanguageSwitcherListItem';
