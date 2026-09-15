import React, { AnchorHTMLAttributes, ComponentType } from 'react';
import { ChevronRightIcon, HouseIcon } from '@gemeente-denhaag/icons';
import { useScreenSize } from '@gemeente-denhaag/sheet';
import { BreadcrumbNavigation, BreadcrumbNavigationProps } from './BreadcrumbNavigation';
import { BreadcrumbListItem } from './BreadcrumbListItem';
import { BreadcrumbList } from './BreadcrumbList';
import { BreadcrumbLink } from './BreadcrumbLink';
import { BreadcrumbText } from './BreadcrumbText';
import './index.scss';
import clsx from 'clsx';
import BreadcrumbTitle from './BreadcrumbTitle';
import BreadcrumbContent from './BreadcrumbContent';
import BreadcrumbToggleButton from './BreadcrumbToggleButton';

export interface BreadcrumbItemData {
  label: string;
  href?: string;
}

export interface BreadcrumbProps extends BreadcrumbNavigationProps {
  navigationPath: Array<BreadcrumbItemData>;
  showHomeIcon?: boolean;
  showCurrent?: boolean;
  mobileBreakpoint?: number;
  toggleMobileMenu?: () => void;
  Link?: ComponentType<AnchorHTMLAttributes<HTMLAnchorElement>>;
}

export const Breadcrumb = ({
  navigationPath,
  showCurrent = true,
  showHomeIcon,
  mobileBreakpoint = 1024,
  toggleMobileMenu,
  Link,
  ...props
}: BreadcrumbProps) => {
  const [windowWidth] = useScreenSize();
  const breadcrumbs = showCurrent || windowWidth < mobileBreakpoint ? navigationPath : navigationPath.slice(0, -1);
  const nrBreadcrumbItems = breadcrumbs.length;
  const mobileIndex = nrBreadcrumbItems - 1;
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
      <BreadcrumbContent>
        <div>
          <BreadcrumbTitle>Mijn Den Haag</BreadcrumbTitle>
          <BreadcrumbList itemScope itemType="https://schema.org/BreadcrumbList">
            {listItems}
          </BreadcrumbList>
        </div>
        <BreadcrumbToggleButton onClick={toggleMobileMenu} />
      </BreadcrumbContent>
    </BreadcrumbNavigation>
  );
};

export * from './BreadcrumbContent';
export * from './BreadcrumbLink';
export * from './BreadcrumbList';
export * from './BreadcrumbListItem';
export * from './BreadcrumbNavigation';
export * from './BreadcrumbText';
export * from './BreadcrumbTitle';
export * from './BreadcrumbToggleButton';
