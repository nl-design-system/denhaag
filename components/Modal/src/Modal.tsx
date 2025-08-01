import React, { useEffect, useRef, useState } from 'react';
import { ModalHeader } from './ModalHeader';
import { ModalContent } from './ModalContent';
import { ModalAction, ModalFooter } from './ModalFooter';
import { ModalDialog } from './ModalDialog';
import { ModalBackdrop } from './ModalBackdrop';

export interface ModalProps {
  open?: boolean;
  title?: string;
  closeLabel?: string;
  children?: ((toggle: (toggle: boolean) => void) => React.ReactNode) | React.ReactNode;
  actions?: (toggle: (toggle?: boolean) => void) => ModalAction[];
  trigger?: (toggle: (toggle?: boolean) => void) => React.ReactNode;
  onToggle?: (open: boolean) => void;
}

export const Modal = ({
  open: openProp = false,
  title,
  closeLabel,
  children,
  actions,
  trigger,
  onToggle,
}: ModalProps) => {
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
          <ModalHeader title={title} closeLabel={closeLabel} onClose={() => toggle(false)} />
          <ModalContent>{typeof children === 'function' ? children(toggle) : children}</ModalContent>
          <ModalFooter actions={actions?.(toggle)} />
        </ModalDialog>
      </dialog>
    </>
  );
};

export default Modal;
