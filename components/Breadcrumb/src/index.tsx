import React from 'react';
import BaseProps from '@gemeente-denhaag/baseprops';
import ResponsiveContent from '@gemeente-denhaag/responsive-content';
import { ChevronRightIcon, HouseIcon } from '@gemeente-denhaag/icons';
import { BreadcrumbNavigation } from './BreadcrumbNavigation';
import { BreadcrumbListItem } from './BreadcrumbListItem';
import { BreadcrumbList } from './BreadcrumbList';
import { BreadcrumbLink } from './BreadcrumbLink';
import { BreadcrumbText } from './BreadcrumbText';

import './index.scss';

export interface BreadcrumbItemData {
  label: string;
  url: string;
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
}

interface BreadcrumbItemProps {
  item: BreadcrumbItemData;
  isLastItem: boolean;
  contentNumber: number;
}

const HomeIconBreadcrumbItem: React.FC<BreadcrumbItemProps> = (props: BreadcrumbItemProps) => {
  return (
    <BreadcrumbLink aria-label="Home" href={props.item.url} itemProp="item">
      <HouseIcon />
      {!props.isLastItem && <ChevronRightIcon />}
    </BreadcrumbLink>
  );
};

const BreadcrumbItem: React.FC<BreadcrumbItemProps> = (props: BreadcrumbItemProps) => {
  return (
    <BreadcrumbLink href={props.item.url} itemProp="item">
      <BreadcrumbText itemProp="name">{props.item.label}</BreadcrumbText>
      {!props.isLastItem && <ChevronRightIcon />}
    </BreadcrumbLink>
  );
};

export const Breadcrumb: React.FC<BreadcrumbProps> = (props: BreadcrumbProps) => {
  const nrBreadcrumbItems = props.navigationPath.length;
  const listItems = props.navigationPath.map((item, index) => {
    const isFirstItem = index === 0;
    const isLastItem = index === nrBreadcrumbItems - 1;
    const shouldCollapseItem = nrBreadcrumbItems > 4 && !isFirstItem && index < nrBreadcrumbItems - 2;
    const contentNumber = index + 1;

    return (
      <BreadcrumbListItem
        hidden={shouldCollapseItem}
        key={contentNumber}
        itemProp="itemListElement"
        itemScope
        itemType="https://schema.org/ListItem"
      >
        {isFirstItem && props.showHomeIcon ? (
          <HomeIconBreadcrumbItem item={item} isLastItem={isLastItem} contentNumber={contentNumber} />
        ) : (
          <BreadcrumbItem item={item} isLastItem={isLastItem} contentNumber={contentNumber} />
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
