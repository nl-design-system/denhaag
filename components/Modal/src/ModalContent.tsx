import React from 'react';

export interface ModalContentProps {
  children: React.ReactNode;
}

export const ModalContent = ({ children }: ModalContentProps) => {
  return <article className="denhaag-modal__content">{children}</article>;
};

export default ModalContent;
