import React from 'react';

export interface ModalTitleProps {
  children?: React.ReactNode;
}

export const ModalTitle = ({ children }: ModalTitleProps) => {
  return <h3 className="denhaag-modal__title">{children}</h3>;
};

export default ModalTitle;
