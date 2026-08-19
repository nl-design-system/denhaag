import React, { AnchorHTMLAttributes, ComponentType } from 'react';
import { NumberBadge } from '@gemeente-denhaag/number-badge';
import { ArrowRightIcon } from '@gemeente-denhaag/icons';
import QuickLinksBase from './QuickLinksBase';
import QuickLinksItem from './QuickLinksItem';
import QuickLinksIconWrapper from './QuickLinksIconWrapper';
import QuickLinksLabel from './QuickLinksLabel';

export interface QuickLinksProps extends React.HTMLAttributes<HTMLDivElement> {
  items: {
    Icon?: React.ElementType;
    label: string;
    href: string;
    count?: number;
  }[];
  Link?: ComponentType<AnchorHTMLAttributes<HTMLAnchorElement>>;
  Arrow?: React.ElementType;
}

export const QuickLinks = ({ items, Link, Arrow = ArrowRightIcon, ...props }: QuickLinksProps) => {
  const hasIcon = items.some((item) => item.Icon !== undefined);

  return (
    <QuickLinksBase {...props}>
      {items.map(({ Icon, label, href, count }, index) => (
        <QuickLinksItem key={index} href={href} Link={Link}>
          {hasIcon && (
            <QuickLinksIconWrapper>{Icon && <Icon className="denhaag-quick-links__icon" />}</QuickLinksIconWrapper>
          )}
          {label && <QuickLinksLabel>{label}</QuickLinksLabel>}
          {count !== undefined && count > 0 && <NumberBadge value={count}>{count}</NumberBadge>}
          <Arrow className="denhaag-quick-links__arrow" />
        </QuickLinksItem>
      ))}
    </QuickLinksBase>
  );
};

export default QuickLinks;
