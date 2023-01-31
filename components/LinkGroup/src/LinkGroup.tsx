import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';

export type LinkGroupProps = HTMLAttributes<HTMLDivElement>;

export const LinkGroup: React.FC<LinkGroupProps> = (props: LinkGroupProps) => {
  const className = clsx('denhaag-link-group', props.className);

  return (
    <div {...props} className={className}>
      {props.children}
    </div>
  );
};

export default LinkGroup;
