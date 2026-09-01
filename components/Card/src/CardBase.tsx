import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';

export type CardBaseProps = HTMLAttributes<HTMLDivElement>;

export const CardBase = ({ className, children, ...rest }: CardBaseProps) => (
  <div className={clsx('denhaag-card', className)} {...rest}>
    {children}
  </div>
);

export default CardBase;
