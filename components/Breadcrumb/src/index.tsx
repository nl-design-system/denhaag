import React, { AnchorHTMLAttributes, ComponentType } from 'react';
import { ResponsiveContent } from '@gemeente-denhaag/responsive-content';
import { ChevronRightIcon, HouseIcon } from '@gemeente-denhaag/icons';
import { BreadcrumbNavigation, BreadcrumbNavigationProps } from './BreadcrumbNavigation';
import { BreadcrumbListItem } from './BreadcrumbListItem';
import { BreadcrumbList } from './BreadcrumbList';
import { BreadcrumbLink } from './BreadcrumbLink';
import { BreadcrumbText } from './BreadcrumbText';

import './index.scss';
import clsx from 'clsx';

export interface BreadcrumbItemData {
  label: string;
  href?: string;
}

export interface BreadcrumbProps extends BreadcrumbNavigationProps {
  /**
   * The navigation path array of JSON object, which includes a label and url.
   */
  navigationPath: Array<BreadcrumbItemData>;

  /**
   * Boolean which determined if the home icon or label is shown.
   */
  showHomeIcon?: boolean;

  showCurrent?: boolean;

  /**
   * Custom Link component used for single-page apps.
   */
  Link?: ComponentType<AnchorHTMLAttributes<HTMLAnchorElement>>;
}

export const Breadcrumb = ({ navigationPath, showCurrent = true, showHomeIcon, Link, ...props }: BreadcrumbProps) => {
  const breadcrumbs = showCurrent ? navigationPath : navigationPath.slice(0, -1);
  const nrBreadcrumbItems = breadcrumbs.length;
  const mobileIndex = (showCurrent ? nrBreadcrumbItems - 1 : nrBreadcrumbItems) - 1;
  const listItems = breadcrumbs.map((item, index) => {
    const isFirstItem = index === 0;
    const isLastItem = index === nrBreadcrumbItems - 1;
    const mobileItem = index === mobileIndex;
    const shouldCollapseItem = nrBreadcrumbItems > 4 && !isFirstItem && index < nrBreadcrumbItems - 2;
    const contentNumber = index + 1;

    return (
      <BreadcrumbListItem
        hidden={shouldCollapseItem}
        key={contentNumber}
        className={mobileItem ? 'denhaag-breadcrumb__item--mobile-item' : ''}
        itemProp="itemListElement"
        itemScope
        itemType="https://schema.org/ListItem"
      >
        {item.href ? (
          <BreadcrumbLink
            Link={Link}
            aria-label={isFirstItem && showHomeIcon ? item.label : undefined}
            aria-current={isLastItem && showCurrent ? 'page' : undefined}
            className={clsx({
              'denhaag-breadcrumb__link--disabled': isLastItem && showCurrent,
            })}
            href={item.href}
          >
            {isFirstItem && showHomeIcon ? (
              <HouseIcon />
            ) : (
              <BreadcrumbText itemProp="name">{item.label}</BreadcrumbText>
            )}
            {!isLastItem && <ChevronRightIcon />}
          </BreadcrumbLink>
        ) : (
          <>
            <BreadcrumbText itemProp="name">{item.label}</BreadcrumbText>
            {!isLastItem && <ChevronRightIcon />}
          </>
        )}
        <meta content={contentNumber.toString()} itemProp="position" />
      </BreadcrumbListItem>
    );
  });

  return (
    <BreadcrumbNavigation aria-label="Breadcrumb" {...props}>
      <ResponsiveContent>
        <BreadcrumbList itemScope itemType="https://schema.org/BreadcrumbList">
          {listItems}
        </BreadcrumbList>
      </ResponsiveContent>
    </BreadcrumbNavigation>
  );
};

export * from './BreadcrumbLink';
export * from './BreadcrumbList';
export * from './BreadcrumbListItem';
export * from './BreadcrumbNavigation';
export * from './BreadcrumbText';
