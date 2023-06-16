import React, { AnchorHTMLAttributes } from 'react';
import clsx from 'clsx';
import './card.scss';

export type Link = (props: AnchorHTMLAttributes<HTMLAnchorElement>) => JSX.Element;

export interface CardActionProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  Action?: Link;
}

const DefaultLink = ({ children, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) => <a {...props}>{children}</a>;

export const CardAction: React.FC<CardActionProps> = ({
  className,
  children,
  Action = DefaultLink,
  ...props
}: CardActionProps) => {
  const classNames = clsx('denhaag-card__action-link', className);

  return (
    <Action {...props} className={classNames}>
      {children}
    </Action>
  );
};

export default CardAction;
