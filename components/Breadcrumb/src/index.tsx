import React from 'react';
import BaseProps from '@gemeente-denhaag/baseprops';
import ResponsiveContent from '@gemeente-denhaag/responsive-content';
import clsx from 'clsx';
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

const BreadcrumbArrow: React.FC = () => (
  <svg
    aria-hidden="true"
    className="denhaag-icon"
    fill="none"
    focusable="false"
    height="1em"
    shapeRendering="auto"
    viewBox="0 0 24 24"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.293 18.707a1 1 0 010-1.414L14.586 12 9.293 6.707a1 1 0 011.414-1.414l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0z"
      fill="currentColor"
    />
  </svg>
);

const HomeIconBreadcrumbItem: React.FC<BreadcrumbItemProps> = (props: BreadcrumbItemProps) => {
  return (
    <a aria-label="Homepage" className="denhaag-breadcrumb__link" href={props.item.url} itemProp="item">
      <svg
        aria-hidden="true"
        className="denhaag-icon"
        fill="currentColor"
        height="1em"
        viewBox="0 0 18 17"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.4467 0.877484C8.76244 0.596828 9.23823 0.596828 9.55397 0.877484L17.054 7.54415C17.398 7.84992 17.4289 8.37664 17.1232 8.72063C16.8174 9.06461 16.2907 9.0956 15.9467 8.78983L15.667 8.54121V14.8337C15.667 15.7541 14.9208 16.5003 14.0003 16.5003H4.00033C3.07986 16.5003 2.33367 15.7541 2.33367 14.8337V8.54121L2.05397 8.78983C1.70999 9.0956 1.18326 9.06461 0.877493 8.72063C0.571728 8.37664 0.602712 7.84992 0.946698 7.54415L8.4467 0.877484ZM4.00033 7.05973V14.8337H6.50033V10.667C6.50033 10.2068 6.87343 9.83366 7.33367 9.83366H10.667C11.1272 9.83366 11.5003 10.2068 11.5003 10.667V14.8337H14.0003V7.05973L9.00033 2.61529L4.00033 7.05973ZM9.83367 14.8337V11.5003H8.167V14.8337H9.83367Z"
          fill="#1261A3"
        />
      </svg>

      {!props.isLastItem && <BreadcrumbArrow />}
      <meta content={props.contentNumber.toString()} itemProp="position" />
    </a>
  );
};

const BreadcrumbItem: React.FC<BreadcrumbItemProps> = (props: BreadcrumbItemProps) => {
  return (
    <a className="denhaag-breadcrumb__link" href={props.item.url} itemProp="item">
      <span className="denhaag-breadcrumb__text" itemProp="name">
        {props.item.label}
      </span>
      {!props.isLastItem && <BreadcrumbArrow />}
      <meta content={props.contentNumber.toString()} itemProp="position" />
    </a>
  );
};

export const Breadcrumb: React.FC<BreadcrumbProps> = (props: BreadcrumbProps) => {
  const nrBreadcrumbItems = props.navigationPath.length;
  const listItems = props.navigationPath.map((item, index) => {
    const isFirstItem = index === 0;
    const isLastItem = index === nrBreadcrumbItems - 1;
    const shouldCollapseItem = nrBreadcrumbItems > 4 && !isFirstItem && index < nrBreadcrumbItems - 2;
    const contentNumber = index + 1;

    const rootClassNames = clsx(
      'denhaag-breadcrumb__item',
      shouldCollapseItem ? 'denhaag-breadcrumb__item--hidden' : '',
    );

    return (
      <li
        className={rootClassNames}
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
      </li>
    );
  });

  return (
    <nav aria-label="Breadcrumb" className="denhaag-breadcrumb">
      <ResponsiveContent>
        <ol className="denhaag-breadcrumb__list" itemScope itemType="https://schema.org/BreadcrumbList">
          {listItems}
        </ol>
      </ResponsiveContent>
    </nav>
  );
};

export default Breadcrumb;
