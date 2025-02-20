import React from 'react';
import ModalTitle from './ModalTitle';
import ModalClose from './ModalClose';

export interface ModalHeaderProps {
  title?: string;
  closeLabel?: string;
  onClose?: () => void;
}

export const ModalHeader = ({ title, closeLabel, onClose }: ModalHeaderProps) => {
  return (
    <header className="denhaag-modal__header">
      <ModalTitle>{title}</ModalTitle>
      <ModalClose label={closeLabel} onClick={onClose} />
    </header>
  );
};

export default ModalHeader;
