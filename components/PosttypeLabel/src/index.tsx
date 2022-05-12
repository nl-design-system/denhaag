import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';

export const PostTypeLabel = (props: HTMLAttributes<HTMLParagraphElement>) => {
  return (
    <p {...props} className={clsx('denhaag-posttypelabel', props.className)}>
      {props.children}
    </p>
  );
};
