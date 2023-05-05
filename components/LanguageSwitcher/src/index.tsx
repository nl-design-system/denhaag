import React, { AnchorHTMLAttributes } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import './index.scss';
import LanguageSwitcherTitle from './LanguageSwitcherTitle';
import LanguageSwitcherList from './LanguageSwitcherList';
import LanguageSwitcherListItem from './LanguageSwitcherListItem';
import LanguageSwitcherLink, { Link } from './LanguageSwitcherLink';
import { ArrowRightIcon, CheckedIcon } from '@gemeente-denhaag/icons';
import { LinkButton } from '@utrecht/component-library-react';
import clsx from 'clsx';

interface Language {
  id: string;
  label: string;
  linkProps?: AnchorHTMLAttributes<HTMLAnchorElement>;
  active?: boolean;
}

export interface LanguageSwitcherLogicProps {
  label: string;
  languages: Array<Language>;
  mobileMenuScrolled?: boolean;
  variant?: 'link' | 'button';
  Link?: Link;
  onLanguageChange?: (language: string) => void;
}

const ListItemContent = ({ label, active }: Language) => {
  return (
    <>
      {!active && (
        <span className="denhaag-link__icon">
          <ArrowRightIcon />
        </span>
      )}
      <span>{label}</span>
      {active && (
        <span className="denhaag-link__icon">
          <CheckedIcon />
        </span>
      )}
    </>
  );
};

export const LanguageSwitcherLogic = ({
  label = '',
  languages = [],
  mobileMenuScrolled,
  variant = 'link',
  Link,
  onLanguageChange,
}: LanguageSwitcherLogicProps) => {
  const languageListContent = languages.map((language, key) => {
    const tabIndex = mobileMenuScrolled ? -1 : undefined;
    const classNames = clsx(
      'denhaag-link',
      'denhaag-link--with-icon',
      language.active ? 'denhaag-link--with-icon-end' : 'denhaag-link--with-icon-start',
      'denhaag-language-switcher__list-item-link',
      language.active ? 'denhaag-language-switcher__list-item-link--active' : '',
      language.linkProps?.className,
    );

    const handleLanguageChange = (languageId: string) => {
      if (onLanguageChange) {
        onLanguageChange(languageId);
      }
    };

    return (
      <LanguageSwitcherListItem key={key}>
        {variant === 'link' ? (
          <LanguageSwitcherLink Link={Link} tabIndex={tabIndex} {...language.linkProps} className={classNames}>
            <ListItemContent {...language} />
          </LanguageSwitcherLink>
        ) : (
          <LinkButton inline tabIndex={tabIndex} onClick={() => handleLanguageChange(language.id)}>
            <ListItemContent {...language} />
          </LinkButton>
        )}
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
