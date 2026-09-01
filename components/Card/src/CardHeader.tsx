import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';

export type CardHeaderProps = HTMLAttributes<HTMLDivElement>;

export const CardHeader = ({ className, children, ...rest }: CardHeaderProps) => (
  <div className={clsx('denhaag-card__header', className)} {...rest}>
    {children}
  </div>
);

export default CardHeader;
