import React from 'react';
import {
  UnorderedList as UtrechtUnorderedList,
  UnorderedListProps as UtrechtUnorderedListProps,
  UnorderedListItem,
  UnorderedListItemProps,
} from '@utrecht/component-library-react';
import './index.scss';
import clsx from 'clsx';

interface UnorderedListProps extends UtrechtUnorderedListProps {
  nested?: boolean;
}

const UnorderedList = ({ className, nested, ...props }: UnorderedListProps) => {
  const classNames = clsx(
    className,
    'denhaag-unordered-list',
    nested && ['denhaag-unordered-list--nested', 'utrecht-unordered-list--nested'],
  );
  return <UtrechtUnorderedList className={classNames} {...props} />;
};

export { UnorderedList, UnorderedListProps, UnorderedListItem, UnorderedListItemProps };
