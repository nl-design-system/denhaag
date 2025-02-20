import React, { ReactNode } from 'react';
import ModalTitle from './ModalTitle';
import ModalClose from './ModalClose';

export interface ModalHeaderProps {
  title?: ReactNode;
  onClose?: () => void;
}

export const ModalHeader = ({ title, onClose }: ModalHeaderProps) => {
  return (
    <header className="denhaag-modal__header">
      <ModalTitle>{title}</ModalTitle>
      <ModalClose onClick={onClose} />
    </header>
  );
};

export default ModalHeader;
