import React, { AnchorHTMLAttributes } from 'react';
import { LanguageSwitcher } from './LanguageSwitcher';
import './index.scss';
import { LanguageSwitcherTitle } from './LanguageSwitcherTitle';
import { LanguageSwitcherList } from './LanguageSwitcherList';
import { LanguageSwitcherListItem } from './LanguageSwitcherListItem';
import { LanguageSwitcherLink, Link } from './LanguageSwitcherLink';
import { ArrowRightIcon, CheckedIcon } from '@gemeente-denhaag/icons';
import { LinkButton } from '@gemeente-denhaag/link-button';
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

interface ListItemContentProps extends Language {
  variant?: 'link' | 'button';
}

const ListItemContent = ({ variant, label, active }: ListItemContentProps) => {
  const className = variant === 'link' ? 'denhaag-link__icon' : 'utrecht-icon';
  return (
    <>
      {!active && (
        <span className={className}>
          <ArrowRightIcon className="denhaag-language-switcher-icon" />
        </span>
      )}
      <span>{label}</span>
      {active && (
        <span className={className}>
          <CheckedIcon className="denhaag-language-switcher-icon" />
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
    const linkClassNames = clsx(
      'denhaag-link',
      'denhaag-link--with-icon',
      language.active ? 'denhaag-link--with-icon-end' : 'denhaag-link--with-icon-start',
      'denhaag-language-switcher__list-item-link',
      language.active ? 'denhaag-language-switcher__list-item-link--active' : '',
      language.linkProps?.className,
    );

    const buttonClassNames = clsx(
      'denhaag-language-switcher__list-item-button',
      language.active ? 'denhaag-language-switcher__list-item-button--active' : '',
    );

    const handleLanguageChange = (languageId: string) => {
      if (onLanguageChange) {
        onLanguageChange(languageId);
      }
    };

    return (
      <LanguageSwitcherListItem key={key}>
        {variant === 'link' ? (
          <LanguageSwitcherLink Link={Link} tabIndex={tabIndex} {...language.linkProps} className={linkClassNames}>
            <ListItemContent {...language} variant={variant} />
          </LanguageSwitcherLink>
        ) : (
          <LinkButton
            className={buttonClassNames}
            inline
            tabIndex={tabIndex}
            onClick={() => handleLanguageChange(language.id)}
          >
            <ListItemContent {...language} variant={variant} />
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

export * from './LanguageSwitcher';
export * from './LanguageSwitcherTitle';
export * from './LanguageSwitcherList';
export * from './LanguageSwitcherListItem';
