import React from 'react';
import clsx from 'clsx';

export interface ModalAction {
  label: string;
  type?: 'secondary';
  onClick?: () => void;
}

export interface ModalFooterProps {
  actions?: ModalAction[];
}

export const ModalFooter = ({ actions }: ModalFooterProps) => {
  if (!actions) return null;

  return (
    <footer className="denhaag-modal__footer">
      {actions.map((action) => (
        <button
          key={action.label}
          className={clsx('denhaag-button', {
            'denhaag-button--secondary-action': action.type === 'secondary',
          })}
          onClick={action.onClick}
        >
          {action.label}
        </button>
      ))}
    </footer>
  );
};

export default ModalFooter;
