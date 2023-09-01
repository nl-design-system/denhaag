import React, { HTMLAttributes } from 'react';

import './_list-subheader.scss';
import clsx from 'clsx';

export type ListSubheaderProps = HTMLAttributes<HTMLParagraphElement>;

/**
 * Primary UI component for user interaction
 */
export const ListSubheader: React.FC<ListSubheaderProps> = (props: ListSubheaderProps) => {
  return (
    <p {...props} className={clsx('denhaag-list__subheader', props.className)}>
      {props.children}
    </p>
  );
};

export default ListSubheader;
