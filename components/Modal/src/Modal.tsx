import React, { useEffect, useRef, useState } from 'react';
import ModalHeader from './ModalHeader';
import ModalContent from './ModalContent';
import ModalFooter, { ModalAction } from './ModalFooter';
import ModalDialog from './ModalDialog';
import ModalBackdrop from './ModalBackdrop';

export interface ModalProps {
  open?: boolean;
  title?: string;
  children?: React.ReactNode;
  actions?: (toggle: (toggle?: boolean) => void) => ModalAction[];
  trigger?: (toggle: (toggle?: boolean) => void) => React.ReactNode;
  onToggle?: (open: boolean) => void;
}

export const Modal = ({ open: openProp = false, title, children, actions, trigger, onToggle }: ModalProps) => {
  const [ref] = useState(useRef<HTMLDialogElement>(null));
  const [open, setOpen] = useState(openProp);

  useEffect(() => {
    setOpen(openProp);
  }, [openProp]);

  useEffect(() => {
    if (open) return ref.current?.showModal();
    return ref.current?.close();
  }, [ref, open]);

  const toggle = (toggle: boolean = !open) => {
    setOpen(toggle);
    onToggle?.(toggle);
  };

  return (
    <>
      {trigger?.(toggle)}
      <dialog ref={ref} className="denhaag-modal">
        <ModalBackdrop onClose={() => toggle(false)} />
        <ModalDialog>
          <ModalHeader title={title} onClose={() => toggle(false)} />
          <ModalContent>{children}</ModalContent>
          <ModalFooter actions={actions?.(toggle)} />
        </ModalDialog>
      </dialog>
    </>
  );
};

export default Modal;
