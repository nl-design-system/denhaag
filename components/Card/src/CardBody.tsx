import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';

export type CardBodyProps = HTMLAttributes<HTMLDivElement>;

export const CardBody = ({ className, children, ...rest }: CardBodyProps) => (
  <div className={clsx('denhaag-card__body', className)} {...rest}>
    {children}
  </div>
);

export default CardBody;
