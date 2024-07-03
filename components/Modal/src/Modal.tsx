import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import ModalHeader from './ModalHeader';
import ModalContent from './ModalContent';
import ModalFooter, { ModalAction } from './ModalFooter';
import ModalDialog from './ModalDialog';
import ModalBackdrop from './ModalBackdrop';

export interface ModalProps {
  open?: boolean;
  onToggle?: (open: boolean) => void;
  title?: string;
  children?: React.ReactNode;
  actions?: ModalAction[];
}

export const Modal = ({ open: openProp = false, title, onToggle, children, actions }: ModalProps) => {
  const [open, setOpen] = useState(openProp);

  useEffect(() => {
    setOpen(openProp);
  }, [openProp]);

  const toggleModal = (toggle: boolean = !open) => {
    setOpen(toggle);
    onToggle?.(toggle);
  };

  return (
    <section className={clsx('denhaag-modal', { 'denhaag-modal--open': open })} tabIndex={-1} aria-hidden={!open}>
      <ModalBackdrop onClose={() => toggleModal(false)} />
      <ModalDialog>
        <ModalHeader title={title} onClose={() => toggleModal(false)} />
        <ModalContent>{children}</ModalContent>
        <ModalFooter actions={actions} />
      </ModalDialog>
    </section>
  );
};

export default Modal;
