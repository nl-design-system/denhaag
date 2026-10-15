import React, { HTMLAttributes, PropsWithChildren } from 'react';
import clsx from 'clsx';
import { CardAsLinkAppearance, CardAsLinkVariant } from './CardAsLink';

export type CardAsLinkBaseProps = HTMLAttributes<HTMLDivElement> & {
  appearance?: CardAsLinkAppearance;
  variant?: CardAsLinkVariant;
};

export const CardAsLinkBase = ({
  appearance = 'default',
  variant = 'default',
  children,
  className,
  ...props
}: PropsWithChildren<CardAsLinkBaseProps>) => {
  const classNames = clsx(
    'denhaag-card-as-link',
    {
      'denhaag-card-as-link--case': variant === 'case',
      'denhaag-card-as-link--case-extended': variant === 'case-extended',
      'denhaag-card-as-link--archived': appearance === 'archived',
      'denhaag-card-as-link--plan': variant === 'plan',
      'denhaag-card-as-link--product': variant === 'product',
      'denhaag-card-as-link--list': appearance === 'list',
    },
    className,
  );

  return (
    <div className={classNames} {...props}>
      {children}
    </div>
  );
};

export default CardAsLinkBase;
