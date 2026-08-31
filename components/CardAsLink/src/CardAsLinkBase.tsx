import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';
import { CardAsLinkAppearance, CardAsLinkVariant } from './CardAsLink';

export type CardAsLinkBaseProps = HTMLAttributes<HTMLDivElement> & {
  appearance?: CardAsLinkAppearance;
  variant?: CardAsLinkVariant;
};

export const CardAsLinkBase = ({
  appearance = 'default',
  variant = 'default',
  className,
  ...props
}: CardAsLinkBaseProps) => {
  const classNames = clsx(
    'denhaag-card-as-link',
    {
      'denhaag-card-as-link--case': variant === 'case',
      'denhaag-card-as-link--case-extended': variant === 'case-extended',
      'denhaag-card-as-link--archived': appearance === 'archived',
      'denhaag-card-as-link--plan': variant === 'plan',
      'denhaag-card-as-link--list': appearance === 'list',
    },
    className,
  );

  return <div className={classNames} {...props}></div>;
};

export default CardAsLinkBase;
