import React, { HTMLAttributes, PropsWithChildren } from 'react';
import clsx from 'clsx';

export type CardAsLinkBodyProps = HTMLAttributes<HTMLDivElement>;

export const CardAsLinkBody = ({ className, children, ...props }: PropsWithChildren<CardAsLinkBodyProps>) => {
  const classNames = clsx('denhaag-card-as-link__body', className);
  return (
    <div className={classNames} {...props}>
      {children}
    </div>
  );
};

export default CardAsLinkBody;
