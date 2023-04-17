import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';
import './index.scss';

export type PageProps = HTMLAttributes<HTMLDivElement>;

export const Page: React.FC<PageProps> = (props: PageProps) => {
  const classNames = clsx('denhaag-page', props.className);
  return <div className={classNames}>{props.children}</div>;
};

export default Page;
