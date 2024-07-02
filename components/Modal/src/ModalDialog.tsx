import React from 'react';

export interface ModalDialogProps {
  children?: React.ReactNode;
}

export const ModalDialog = ({ children }: ModalDialogProps) => <div className="denhaag-modal__dialog">{children}</div>;

export default ModalDialog;
