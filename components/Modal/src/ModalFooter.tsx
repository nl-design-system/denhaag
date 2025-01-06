import React from 'react';
import Button, { ButtonProps } from '@gemeente-denhaag/button';

export interface ModalAction extends ButtonProps {}

export interface ModalFooterProps {
  actions?: ModalAction[];
}

export const ModalFooter = ({ actions }: ModalFooterProps) => {
  if (!actions) return null;

  return (
    <footer className="denhaag-modal__footer">
      {actions.map((action, index) => (
        <Button key={`modal-footer-action-${index}`} {...action} />
      ))}
    </footer>
  );
};

export default ModalFooter;
