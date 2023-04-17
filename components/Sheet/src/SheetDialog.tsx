import React, { DialogHTMLAttributes } from 'react';
import clsx from 'clsx';

export type SheetDialogProps = DialogHTMLAttributes<HTMLDialogElement>;

export const SheetDialog = React.forwardRef<HTMLDialogElement, SheetDialogProps>((props, ref) => {
  const className = clsx('denhaag-sheet denhaag-sheet--dialog', props.className);

  return (
    <dialog {...props} className={className} ref={ref}>
      {props.children}
    </dialog>
  );
});
SheetDialog.displayName = 'SheetDialog';

export default SheetDialog;
