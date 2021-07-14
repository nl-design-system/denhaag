import React from 'react';
import BaseProps from '@gemeente-denhaag/baseprops';
import { ChevronDownIcon } from '@gemeente-denhaag/icons';

import './menu-button.css';

/**
 * The properties of the normal variant of the Menu Button
 */
export interface MenuButtonProps extends Omit<BaseProps, 'classes' | 'tabIndex'> {
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
export interface MenuButtonExpandableProps extends Omit<BaseProps, 'classes' | 'tabIndex'> {
  /**
   * Determines the Onclick function the menu button refers to
   * Only applicable to the Expandable variant
   */
  onclick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const MenuButton: React.FC<MenuButtonProps> = (props: MenuButtonProps) => {
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
      className="denhaag-menu-button"
    >
      {props.children}
    </a>
  );
};

export const MenuButtonExpandable: React.FC<MenuButtonProps> = (props: MenuButtonExpandableProps) => {
  return (
    <button id={props.id} onClick={props.onclick} className="denhaag-menu-button">
      {props.children}
      <span className="denhaag-menu-button__chevron">
        <ChevronDownIcon aria-label="ChevronDownIcon" />
      </span>
    </button>
  );
};

export default MenuButton;
