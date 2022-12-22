import React from 'react';
import BaseProps from '@gemeente-denhaag/baseprops';
import clsx from 'clsx';
import './index.scss';

export interface PageProps extends Omit<BaseProps, 'tabIndex' | 'classNamees'> {
  /**
   * The header component
   */
  header?: React.ReactElement;

  /**
   * The footer component
   */
  footer?: React.ReactElement;
}

export const Page: React.FC<PageProps> = (props: PageProps) => {
  const classNames = clsx('denhaag-page', props.className);
  return (
    <div className={classNames}>
      <div className="denhaag-page-header">{props.header}</div>
      <div className="denhaag-page-content">
        <main className="denhaag-page-content__main">{props.children}</main>
      </div>
      <div className="denhaag-page-footer">{props.footer}</div>
    </div>
  );
};

export default Page;
