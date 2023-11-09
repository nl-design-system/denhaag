import React from 'react';
import { SvgIconProps } from '@gemeente-denhaag/icons';
import clsx from 'clsx';

import './index.scss';

type OverrideProps<M, C extends React.ElementType> = M & Omit<React.ComponentPropsWithRef<C>, keyof M>;

interface OverridableComponent<M> {
  <C extends React.ElementType>(
    props: {
      /**
       * The component used for the root node.
       * Either a string to use a HTML element or a component.
       */
      component: C;
    } & OverrideProps<M, C>,
  ): JSX.Element;
  (props: M): JSX.Element;
}

export interface LinkProps {
  /**
   * The id attribute is used to specify a unique id for an HTML element.
   */
  id?: string;
  /**
   * The contents of the component.
   */
  children?: React.ReactNode;
  /**
   * Extend the styles of the component by adding new classes.
   */
  className?: string;
  /**
   * The tab-index applied to the root element of the component.
   */
  tabIndex?: number;
  /**
   * The URL that the hyperlink points to. Links are not restricted to HTTP-based
   * URLs — they can use any URL scheme supported by browsers.
   *
   * [(See MDN Web Docs for details)](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-href)
   */
  href?: string;

  /**
   * [See MDN Web Docs for details](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-hreflang)
   */
  hrefLang?: string;

  /**
   * Icon to display at the start or the end of the link
   */
  icon?: React.ReactElement<SvgIconProps>;

  /**
   * If an `icon` is specified, should it be aligned on the left or the right?
   */
  iconAlign?: 'start' | 'end';

  /**
   * Disables the link.
   */
  disabled?: boolean;

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

  /**
   * Override base component
   */
  component?: React.ElementType;
}

/**
 * An easily customizable anchor element.
 * @param props The properties of a Link component.
 * @constructor Constructs an instance of Link.
 */
export const Link: OverridableComponent<LinkProps> = ({
  href,
  id,
  children = undefined,
  disabled = false,
  icon = undefined,
  iconAlign = 'end',
  tabIndex = 0,
  ...props
}: LinkProps) => {
  const rootClassNames = clsx(
    'denhaag-link',
    {
      'denhaag-link--disabled': disabled,
      'denhaag-link--with-icon': icon !== undefined,
      'denhaag-link--with-icon-start': icon !== undefined && iconAlign === 'start',
      'denhaag-link--with-icon-end': icon !== undefined && iconAlign === 'end',
    },
    props.className,
  );

  const iconClassName = clsx('denhaag-link__icon');

  const iconWrapped = <span className={iconClassName}>{icon}</span>;

  return (
    <a id={id} href={href} tabIndex={disabled ? -1 : tabIndex} {...props} className={rootClassNames}>
      {icon !== undefined && iconAlign === 'start' ? iconWrapped : ''}
      <span>{children}</span>
      {icon !== undefined && iconAlign === 'end' ? iconWrapped : ''}
    </a>
  );
};

export default Link;

export * from './CustomLink';
