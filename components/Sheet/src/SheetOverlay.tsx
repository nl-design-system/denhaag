import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';

export type SheetOverlayProps = HTMLAttributes<HTMLDivElement>;

export const SheetOverlay: React.FC<SheetOverlayProps> = (props: SheetOverlayProps) => {
  const className = clsx('denhaag-sheet-overlay', props.className);

  return (
    <div {...props} className={className}>
      {props.children}
    </div>
  );
};

export default SheetOverlay;
