import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';

export type SheetContainerProps = HTMLAttributes<HTMLDivElement>;

export const SheetContainer: React.FC<SheetContainerProps> = (props: SheetContainerProps) => {
  const className = clsx('denhaag-sheet__container', props.className);

  return (
    <div {...props} className={className}>
      {props.children}
    </div>
  );
};

export default SheetContainer;
