import React, { HTMLAttributes, PropsWithChildren } from 'react';
import clsx from 'clsx';

export type CardAsLinkMetaProps = HTMLAttributes<HTMLDivElement>;

export const CardAsLinkMeta = ({ className, children, ...props }: PropsWithChildren<CardAsLinkMetaProps>) => {
  const classNames = clsx('denhaag-card-as-link__meta', className);
  return (
    <div className={classNames} {...props}>
      {children}
    </div>
  );
};

export default CardAsLinkMeta;
