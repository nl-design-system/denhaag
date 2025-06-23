import React, { AnchorHTMLAttributes, ComponentType } from 'react';
import BasicLink from '@gemeente-denhaag/link';
import clsx from 'clsx';

export interface CaseCardActionProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  Action?: ComponentType<AnchorHTMLAttributes<HTMLAnchorElement>>;
}

export const CaseCardAction = ({ className, children, Action = BasicLink, ...props }: CaseCardActionProps) => {
  const classNames = clsx('denhaag-case-card__action', className);

  return (
    <Action {...props} className={classNames}>
      {children}
    </Action>
  );
};

export default CaseCardAction;
