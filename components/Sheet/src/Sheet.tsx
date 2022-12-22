import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';

export type SheetProps = HTMLAttributes<HTMLDivElement>;

export const Sheet: React.FC<SheetProps> = (props: SheetProps) => {
  const className = clsx('denhaag-sheet', props.className);

  return (
    <div {...props} className={className}>
      {props.children}
    </div>
  );
};

export default Sheet;
