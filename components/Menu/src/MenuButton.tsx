import React, { ButtonHTMLAttributes } from 'react';
import BaseProps from '@gemeente-denhaag/baseprops';
import { ChevronDownIcon } from '@gemeente-denhaag/icons';
import clsx from 'clsx';

import './index.scss';

/**
 * The properties of the normal variant of the Menu Button
 */
export interface MenuButtonProps extends Omit<BaseProps, 'classes' | 'tabIndex'> {
  /**
   * If the element is active or not. You an use this property to mark the menu
   * item of the current active page.
   */
  active: boolean;
  /**
   * The URL that the hyperlink points to. Links are not restricted to HTTP-based
   * URLs — they can use any URL scheme supported by browsers.
   *
   * [(See MDN Web Docs for details)](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-href)
   */
  href: string;

  /**
   * [See MDN Web Docs for details](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-hreflang)
   */
  hrefLang?: string;

  /**
   * [See MDN Web Docs for details](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-download)
   */
  download?: string | boolean;

  /**
   * [See MDN Web Docs for details](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-media)
   */
  media?: string;

  /**
   * [See MDN Web Docs for details](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-ping)
   */
  ping?: string;

  /**
   * [See MDN Web Docs for details](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-rel)
   */
  rel?: string;

  /**
   * [See MDN Web Docs for details](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-target)
   */
  target?: React.HTMLAttributeAnchorTarget;

  /**
   * [See MDN Web Docs for details](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-type)
   */
  type?: string;

  /**
   * ⚠️ Experimental.
   * [See MDN Web Docs for details](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-referrerpolicy)
   */
  referrerPolicy?: React.HTMLAttributeReferrerPolicy;
}

/**
 * The properties of the expandable variant of the Menu Button
 */
export interface MenuButtonExpandableProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * If the element is active or not. You an use this property to mark the menu
   * item of the current active page.
   */
  active: boolean;
}

export const MenuButton: React.FC<MenuButtonProps> = ({ active = false, ...props }: MenuButtonProps) => {
  const className = clsx(
    'denhaag-menu-button',
    {
      'denhaag-menu-button--active': active,
    },
    props.className,
  );

  return (
    <a
      id={props.id}
      href={props.href}
      hrefLang={props.hrefLang}
      download={props.download}
      media={props.media}
      ping={props.ping}
      rel={props.rel}
      target={props.target}
      type={props.type}
      referrerPolicy={props.referrerPolicy}
      className={className}
      title={props.children?.toString()}
    >
      {props.children}
    </a>
  );
};

export const MenuButtonExpandable: React.FC<MenuButtonExpandableProps> = ({
  active = false,
  ...props
}: MenuButtonExpandableProps) => {
  const rootClassNames = clsx(
    'denhaag-menu-button',
    'denhaag-menu-button--expandable',
    {
      'denhaag-menu-button--active': active,
    },
    props.className,
  );

  return (
    <button className={rootClassNames} {...props}>
      {props.children}
      <span className="denhaag-menu-button__chevron">
        <ChevronDownIcon aria-label="ChevronDownIcon" />
      </span>
    </button>
  );
};

export default MenuButton;
