import React from 'react';
import BaseProps from '@gemeente-denhaag/baseprops';
import ResponsiveContent from '@gemeente-denhaag/responsive-content';
import { ChevronRightIcon, HouseIcon } from '@gemeente-denhaag/icons';
import { BreadcrumbNavigation } from './BreadcrumbNavigation';
import { BreadcrumbListItem } from './BreadcrumbListItem';
import { BreadcrumbList } from './BreadcrumbList';
import { BreadcrumbLink, Link } from './BreadcrumbLink';
import { BreadcrumbText } from './BreadcrumbText';

import './index.scss';

export interface BreadcrumbItemData {
  label: string;
  href?: string;
}

export interface BreadcrumbProps extends Omit<BaseProps, 'tabIndex' | 'classNames'> {
  /**
   * The navigation path array of JSON object, which includes a label and url.
   */
  navigationPath: Array<BreadcrumbItemData>;

  /**
   * Boolean which determined if the home icon or label is shown.
   */
  showHomeIcon?: boolean;

  /**
   * Custom Link component used for single-page apps.
   */
  Link?: Link;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ navigationPath, showHomeIcon, Link }: BreadcrumbProps) => {
  const nrBreadcrumbItems = navigationPath.length;
  const listItems = navigationPath.map((item, index) => {
    const isFirstItem = index === 0;
    const isLastItem = index === nrBreadcrumbItems - 1;
    // MobileItem is the item which shows as a backbutton on a small viewport. This is the last item, in case that item has a href. Otherwise, it's the last item with a href. (Without current page vs normal breadcrumbs)
    const mobileItem = (isLastItem && item.href) || (!isLastItem && !navigationPath[index + 1].href);
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
    <BreadcrumbNavigation aria-label="Breadcrumb">
      <ResponsiveContent>
        <BreadcrumbList itemScope itemType="https://schema.org/BreadcrumbList">
          {listItems}
        </BreadcrumbList>
      </ResponsiveContent>
    </BreadcrumbNavigation>
  );
};

export default Breadcrumb;

export * from './BreadcrumbLink';
export * from './BreadcrumbList';
export * from './BreadcrumbListItem';
export * from './BreadcrumbNavigation';
export * from './BreadcrumbText';
