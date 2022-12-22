import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';

export type SheetCloseButtonProps = HTMLAttributes<HTMLDivElement>;

export const SheetCloseButton: React.FC<SheetCloseButtonProps> = (props: SheetCloseButtonProps) => {
  const className = clsx('denhaag-sheet__close-button', props.className);

  return (
    <button
      className={className}
      data-toggle-panel="menu-de-gemeente"
      tabIndex={0}
      aria-label="Sluit venster De gemeente"
    >
      {props.children}
    </button>
  );
};

export default SheetCloseButton;
