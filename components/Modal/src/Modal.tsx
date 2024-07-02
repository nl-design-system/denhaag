import React, { useEffect, useState } from 'react';
import clsx from 'clsx';

interface Action {
  label: string;
  type?: 'secondary';
  onClick?: () => void;
}

export interface ModalProps {
  open?: boolean;
  onToggle?: (open: boolean) => void;
  children?: React.ReactNode;
  actions?: Action[];
}

export const Modal = ({ open: openProp = false, onToggle, children, actions }: ModalProps) => {
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
      <div className="denhaag-modal__dialog">
        <div className="denhaag-modal__inner">
          <header className="denhaag-modal__header">
            <h3 className="denhaag-modal__title">Modal title</h3>
            <button
              className="denhaag-modal__close"
              type="button"
              aria-label="Close"
              onClick={() => toggleModal(false)}
            >
              <svg
                className="denhaag-icon"
                width="1em"
                height="1em"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L7 5.58579L12.2929 0.292893C12.6834 -0.0976311 13.3166 -0.0976311 13.7071 0.292893C14.0976 0.683417 14.0976 1.31658 13.7071 1.70711L8.41421 7L13.7071 12.2929C14.0976 12.6834 14.0976 13.3166 13.7071 13.7071C13.3166 14.0976 12.6834 14.0976 12.2929 13.7071L7 8.41421L1.70711 13.7071C1.31658 14.0976 0.683417 14.0976 0.292893 13.7071C-0.0976311 13.3166 -0.0976311 12.6834 0.292893 12.2929L5.58579 7L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z"
                  fill="currentColor"
                />
              </svg>
              Sluiten
            </button>
          </header>
          <article className="denhaag-modal__content">{children}</article>
          {actions && (
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
          )}
        </div>
      </div>
    </section>
  );
};

export default Modal;
