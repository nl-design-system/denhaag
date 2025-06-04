import React, { AnchorHTMLAttributes, ComponentType } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import './index.scss';
import LanguageSwitcherTitle from './LanguageSwitcherTitle';
import LanguageSwitcherList from './LanguageSwitcherList';
import LanguageSwitcherListItem from './LanguageSwitcherListItem';
import { ArrowRightIcon, CheckedIcon } from '@gemeente-denhaag/icons';
import Link from '@gemeente-denhaag/link';
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
  LinkComponent?: ComponentType<AnchorHTMLAttributes<HTMLAnchorElement>>;
  onLanguageChange?: (language: string) => void;
}

interface ListItemContentProps extends Language {
  variant?: 'link' | 'button';
}

const ListItemContent = ({ variant, label, active }: ListItemContentProps) => {
  const classNames = clsx('denhaag-language-switcher-icon', {
    'denhaag-link__icon': variant === 'link',
    'utrecht-icon': variant === 'button',
  });

  return (
    <>
      {!active && <ArrowRightIcon className={classNames} />}
      <span>{label}</span>
      {active && <CheckedIcon className={classNames} />}
    </>
  );
};

export const LanguageSwitcherLogic = ({
  label = '',
  languages = [],
  mobileMenuScrolled,
  variant = 'link',
  LinkComponent,
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
          <Link Link={LinkComponent} tabIndex={tabIndex} {...language.linkProps} className={linkClassNames}>
            <ListItemContent {...language} variant={variant} />
          </Link>
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

export default LanguageSwitcherLogic;

export * from './LanguageSwitcher';
export * from './LanguageSwitcherTitle';
export * from './LanguageSwitcherList';
export * from './LanguageSwitcherListItem';
